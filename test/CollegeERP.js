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

    it("Should assign a subject to faculty with fee", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 30);
      const fee = await collegeERP.subjectFee("Math");
      expect(fee).to.equal(30);
    });

    it("Should add a student with initial balance", async function () {
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      const studentData = await collegeERP.studentDetails(student.address);
      expect(studentData.balance).to.equal(100);
    });

    it("Should enroll student in subject with fee deduction", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 30);
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      
      let studentData = await collegeERP.connect(student).getStudentDetails();
      expect(studentData.balance).to.equal(100);
      
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
      
      studentData = await collegeERP.connect(student).getStudentDetails();
      expect(studentData.balance).to.equal(70);
      expect(studentData.subjects).to.include("Math");
    });

    it("Should prevent enrollment with insufficient balance", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 150);
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      
      await expect(
        collegeERP.connect(owner).enrollStudent(student.address, "Math")
      ).to.be.revertedWith("Insufficient balance for course fee");
    });
  });

  describe("Faculty Functions", function () {
    beforeEach(async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 30);
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
    });

    it("Should update student marks", async function () {
      await collegeERP.connect(faculty).updateMarks(student.address, "Math", 95);
      const studentData = await collegeERP.connect(student).getStudentDetails();
      const mathIndex = studentData.subjects.indexOf("Math");
      expect(studentData.marks[mathIndex]).to.equal(95);
    });
  });

  describe("Student Functions", function () {
    beforeEach(async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 30);
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
      await collegeERP.connect(faculty).updateMarks(student.address, "Math", 85);
    });

    it("Should retrieve student details with balance", async function () {
      const [name, address, branch, balance, subjects, marks] = 
        await collegeERP.connect(student).getStudentDetails();
      
      expect(name).to.equal("Alice");
      expect(address).to.equal(student.address);
      expect(branch).to.equal("CSE");
      expect(balance).to.equal(70);
      expect(subjects).to.deep.equal(["Math"]);
      expect(marks[0]).to.equal(85);
    });
  });

  describe("Edge Cases", function () {
    it("Should prevent duplicate enrollment", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 30);
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
      
      await expect(
        collegeERP.connect(owner).enrollStudent(student.address, "Math")
      ).to.be.revertedWith("Student already enrolled");
    });

    it("Should track multiple enrollments correctly", async function () {
      await collegeERP.connect(owner).addFaculty(faculty.address, "Dr. Smith");
      await collegeERP.connect(owner).assignSubject(faculty.address, "Math", 30);
      await collegeERP.connect(owner).assignSubject(faculty.address, "Physics", 20);
      await collegeERP.connect(owner).addStudent(student.address, "Alice", "CSE");
      
      await collegeERP.connect(owner).enrollStudent(student.address, "Math");
      let studentData = await collegeERP.connect(student).getStudentDetails();
      expect(studentData.balance).to.equal(70);
      
      await collegeERP.connect(owner).enrollStudent(student.address, "Physics");
      studentData = await collegeERP.connect(student).getStudentDetails();
      expect(studentData.balance).to.equal(50);
    });
  });
});