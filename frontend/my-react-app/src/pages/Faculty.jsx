import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import "./style.css";   // reuse the same CSS

const Faculty = () => {
  const { token } = useContext(MyContext);
  const [studentAddress, setStudentAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleUpdateMarks = async (e) => {
    e.preventDefault();
    try {
      await token.updateMarks(studentAddress, subject, parseInt(marks, 10));
      alert("Marks updated successfully");
      setStudentAddress("");
      setSubject("");
      setMarks("");
    } catch (err) {
      alert("Error updating marks");
      console.error(err);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Update Marks</h1>

      <div className="admin-stack">
        <div className="card">
          <form className="admin-form" onSubmit={handleUpdateMarks}>
            <h2 className="card-title">Enter Details</h2>

            <div className="form-group">
              <label htmlFor="student_address">Student Address</label>
              <input
                id="student_address"
                type="text"
                className="form-input"
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                className="form-input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="marks">Marks</label>
              <input
                id="marks"
                type="number"
                className="form-input"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                required
              />
            </div>

            <button className="submit-button" type="submit">
              Update Marks
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
