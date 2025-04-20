const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("CollegeERP", function () {
  let CollegeERP;
  let collegeERP;
  let owner, faculty, student, other;

  beforeEach(async function () {
    [owner, faculty, student, other] = await ethers.getSigners();
    CollegeERP = await ethers.getContractFactory("CollegeERP");
    collegeERP = await CollegeERP.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await collegeERP.owner()).to.equal(owner.address);
    });
  });

  describe("Admin Functions", function () {
    it("Should add a faculty member", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      const facultyData = await collegeERP.facultyDetails(faculty.address);
      expect(facultyData.name).to.equal("Dr. Smith");
    });

    it("Should assign a subject to faculty", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math");
      const subjectFaculty = await collegeERP.subjectToFaculty("Math");
      expect(subjectFaculty).to.equal(faculty.address);
    });

    it("Should add a student", async function () {
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      const studentData = await collegeERP.studentDetails(student.address);
      expect(studentData.name).to.equal("Alice");
    });

    it("Should enroll student in subject", async function () {
      // Setup
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math");
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      // Enroll
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
      // Verify student enrollment
      const studentData = await collegeERP.connect(student).getStudentDetails();
      expect(studentData.subjects).to.include("Math");
      
      // Verify faculty student count
      const count = await collegeERP.getStudentsPerSubject(faculty.address, "Math");
      expect(count).to.equal(1);
    });
  });

  describe("Faculty Functions", function () {
    beforeEach(async function () {
      // Common setup
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math");
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
    });

    it("Should update student marks", async function () {
      await collegeERP.connect(faculty).updateMarks(student.address, "Math", 95);
      const studentData = await collegeERP.connect(student).getStudentDetails();
      const mathIndex = studentData[3].indexOf("Math");
      expect(studentData.marks[mathIndex]).to.equal(95);
    });

    it("Should prevent non-faculty from updating marks", async function () {
      await expect(
        collegeERP.connect(other).updateMarks(student.address, "Math", 95)
      ).to.be.revertedWith("Not a faculty member");
    });
  });

  describe("Student Functions", function () {
    beforeEach(async function () {
      // Common setup
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math");
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
      await collegeERP.connect(faculty).updateMarks(student.address, "Math", 85);
    });

    it("Should retrieve student details", async function () {
      const [name, address, branch, subjects, marks] = 
        await collegeERP.connect(student).getStudentDetails();
      
      expect(name).to.equal("Alice");
      expect(address).to.equal(student.address);
      expect(branch).to.equal("CSE");
      expect(subjects).to.deep.equal(["Math"]);
      expect(marks).to.deep.equal([85]);
    });

    it("Should prevent non-students from viewing details", async function () {
      await expect(
        collegeERP.connect(other).getStudentDetails()
      ).to.be.revertedWith("Not a registered student");
    });
  });

  describe("Edge Cases", function () {
    it("Should prevent duplicate subject assignment", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math");
      
      await expect(
        collegeERP.connect(owner).assignSubject(faculty.address, "Math")
      ).to.be.revertedWith("Subject already assigned");
    });

    it("Should prevent enrolling unregistered students", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math");
      
      await expect(
        collegeERP.connect(owner).enrollStudent(other.address, "Math")
      ).to.be.revertedWith("Student not registered");
    });
  });
});