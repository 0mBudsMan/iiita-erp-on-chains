import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import "./style.css";

const Admin = () => {
  const { token } = useContext(MyContext);

  // States for adding faculty
  const [facultyAddress, setFacultyAddress] = useState("");
  const [facultyName, setFacultyName] = useState("");

  // States for assigning subject to faculty
  const [subjectFacultyAddress, setSubjectFacultyAddress] = useState("");
  const [subjectName, setSubjectName] = useState("");

  // States for adding student
  const [studentAddress, setStudentAddress] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentBranch, setStudentBranch] = useState("");

  // States for enrolling student in subject
  const [enrollStudentAddress, setEnrollStudentAddress] = useState("");
  const [enrollSubject, setEnrollSubject] = useState("");

  // Add Faculty
  const handleAddFaculty = async (e) => {
    e.preventDefault();
    try {
      await token.addFaculty(facultyAddress, facultyName);
      alert("Faculty added successfully");
      setFacultyAddress("");
      setFacultyName("");
    } catch (err) {
      alert("Error adding faculty");
      console.error(err);
    }
  };

  // Assign Subject
  const handleAssignSubject = async (e) => {
    e.preventDefault();
    try {
      await token.assignSubject(subjectFacultyAddress, subjectName);
      alert("Subject assigned successfully");
      setSubjectFacultyAddress("");
      setSubjectName("");
    } catch (err) {
      alert("Error assigning subject");
      console.error(err);
    }
  };

  // Add Student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await token.addStudent(studentAddress, studentName, studentBranch);
      alert("Student added successfully");
      setStudentAddress("");
      setStudentName("");
      setStudentBranch("");
    } catch (err) {
      alert("Error adding student");
      console.error(err);
    }
  };

  // Enroll Student
  const handleEnrollStudent = async (e) => {
    e.preventDefault();
    try {
      await token.enrollStudent(enrollStudentAddress, enrollSubject);
      alert("Student enrolled successfully");
      setEnrollStudentAddress("");
      setEnrollSubject("");
    } catch (err) {
      alert("Error enrolling student");
      console.error(err);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>
      
      <div className="admin-stack">
        {/* Add Faculty Form */}
        <div className="card">
          <form className="admin-form" onSubmit={handleAddFaculty}>
            <h2 className="card-title">Add Faculty</h2>
            <div className="form-group">
              <label htmlFor="faculty_address">Faculty Address:</label>
              <input
                value={facultyAddress}
                onChange={(e) => setFacultyAddress(e.target.value)}
                type="text"
                id="faculty_address"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="faculty_name">Faculty Name:</label>
              <input
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
                type="text"
                id="faculty_name"
                className="form-input"
                required
              />
            </div>
            <button className="submit-button" type="submit">Add Faculty</button>
          </form>
        </div>

        {/* Assign Subject Form */}
        <div className="card">
          <form className="admin-form" onSubmit={handleAssignSubject}>
            <h2 className="card-title">Assign Subject</h2>
            <div className="form-group">
              <label htmlFor="subject_faculty_address">Faculty Address:</label>
              <input
                value={subjectFacultyAddress}
                onChange={(e) => setSubjectFacultyAddress(e.target.value)}
                type="text"
                id="subject_faculty_address"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject_name">Subject Name:</label>
              <input
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                type="text"
                id="subject_name"
                className="form-input"
                required
              />
            </div>
            <button className="submit-button" type="submit">Assign Subject</button>
          </form>
        </div>

        {/* Add Student Form */}
        <div className="card">
          <form className="admin-form" onSubmit={handleAddStudent}>
            <h2 className="card-title">Add Student</h2>
            <div className="form-group">
              <label htmlFor="student_address">Student Address:</label>
              <input
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
                type="text"
                id="student_address"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="student_name">Student Name:</label>
              <input
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                type="text"
                id="student_name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="student_branch">Branch:</label>
              <input
                value={studentBranch}
                onChange={(e) => setStudentBranch(e.target.value)}
                type="text"
                id="student_branch"
                className="form-input"
                required
              />
            </div>
            <button className="submit-button" type="submit">Add Student</button>
          </form>
        </div>

        {/* Enroll Student Form */}
        <div className="card">
          <form className="admin-form" onSubmit={handleEnrollStudent}>
            <h2 className="card-title">Enroll Student</h2>
            <div className="form-group">
              <label htmlFor="enroll_student_address">Student Address:</label>
              <input
                value={enrollStudentAddress}
                onChange={(e) => setEnrollStudentAddress(e.target.value)}
                type="text"
                id="enroll_student_address"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enroll_subject">Subject:</label>
              <input
                value={enrollSubject}
                onChange={(e) => setEnrollSubject(e.target.value)}
                type="text"
                id="enroll_subject"
                className="form-input"
                required
              />
            </div>
            <button className="submit-button" type="submit">Enroll Student</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;