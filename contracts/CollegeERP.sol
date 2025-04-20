// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract CollegeERP is Ownable {
    constructor() Ownable(msg.sender) {

    }
    struct Faculty {
        string name;
        address facultyAddress;
        string[] subjectsTaught;
        mapping(string => uint256) studentsPerSubject;
    }

    struct Student {
        string name;
        address studentAddress;
        string branch;
        string[] enrolledSubjects;
        mapping(string => uint256) marks;
    }

    mapping(address => Faculty) public facultyDetails;
    mapping(address => Student) public studentDetails;
    mapping(string => address) public subjectToFaculty;

    event FacultyAdded(address indexed faculty, string name);
    event SubjectAssigned(address indexed faculty, string subject);
    event StudentAdded(address indexed student, string name, string branch);
    event StudentEnrolled(address indexed student, string subject);
    event MarksUpdated(address indexed faculty, address indexed student, string subject, uint256 marks);

    modifier onlyFaculty() {
        require(bytes(facultyDetails[msg.sender].name).length != 0, "Not a faculty member");
        _;
    }

    modifier onlyStudent() {
        require(bytes(studentDetails[msg.sender].name).length != 0, "Not a registered student");
        _;
    }

    // Admin functions
    function addFaculty(address facultyAddress, string memory name) external onlyOwner {
        Faculty storage faculty = facultyDetails[facultyAddress];
        faculty.name = name;
        faculty.facultyAddress = facultyAddress;
        emit FacultyAdded(facultyAddress, name);
    }

    function assignSubject(address facultyAddress, string memory subject) external onlyOwner {
        require(bytes(facultyDetails[facultyAddress].name).length != 0, "Faculty not registered");
        require(subjectToFaculty[subject] == address(0), "Subject already assigned");
        
        facultyDetails[facultyAddress].subjectsTaught.push(subject);
        subjectToFaculty[subject] = facultyAddress;
        emit SubjectAssigned(facultyAddress, subject);
    }

    function addStudent(address studentAddress, string memory name, string memory branch) external onlyOwner {
        Student storage student = studentDetails[studentAddress];
        student.name = name;
        student.studentAddress = studentAddress;
        student.branch = branch;
        emit StudentAdded(studentAddress, name, branch);
    }

    function enrollStudent(address studentAddress, string memory subject) external onlyOwner {
        require(subjectToFaculty[subject] != address(0), "Subject not assigned to faculty");
        require(bytes(studentDetails[studentAddress].name).length != 0, "Student not registered");
        
        Student storage student = studentDetails[studentAddress];
        Faculty storage faculty = facultyDetails[subjectToFaculty[subject]];
        
        student.enrolledSubjects.push(subject);
        faculty.studentsPerSubject[subject]++;
        console.log("Student enrolled in subject: ", subject, student.studentAddress);
        emit StudentEnrolled(studentAddress, subject);

    }
    function isEnrolled(address studentAddress, string memory subject) internal view returns (bool) {
        string[] memory subjects = studentDetails[studentAddress].enrolledSubjects;
        for (uint256 i = 0; i < subjects.length; i++) {
            if (keccak256(abi.encodePacked(subjects[i])) == keccak256(abi.encodePacked(subject))) {
                return true;
            }
        }
        return false;
    }

    // Faculty functions
    function updateMarks(address studentAddress, string memory subject, uint256 marks) external onlyFaculty {
        require(subjectToFaculty[subject] == msg.sender, "Not authorized for this subject");
        require(isEnrolled(studentAddress, subject), "Student not enrolled in subject");
        
        studentDetails[studentAddress].marks[subject] = marks;
        emit MarksUpdated(msg.sender, studentAddress, subject, marks);
    }

    // Student functions
    function getStudentDetails() external view onlyStudent returns (
        string memory name,
        address studentAddress,
        string memory branch,
        string[] memory subjects,
        uint256[] memory marks
    ) {
        Student storage student = studentDetails[msg.sender];
        name = student.name;
        studentAddress = student.studentAddress;
        branch = student.branch;
        uint256 length = student.enrolledSubjects.length;
        subjects = new string[](length);
        marks = new uint256[](length);
        for(uint256 i = 0; i < length; i++) {
            subjects[i] = student.enrolledSubjects[i];
            marks[i] = student.marks[subjects[i]];
        }
        
        return (name, studentAddress, branch, subjects, marks);
    }

    // Helper functions
    function getFacultySubjects(address facultyAddress) external view returns (string[] memory) {
        return facultyDetails[facultyAddress].subjectsTaught;
    }

    function getStudentsPerSubject(address facultyAddress, string memory subject) external view returns (uint256) {
        return facultyDetails[facultyAddress].studentsPerSubject[subject];
    }
}