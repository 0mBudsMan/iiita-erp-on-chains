import React, { useContext, useState } from "react";
import { MyContext } from "../App";

const Faculty = () => {
  const { token } = useContext(MyContext);
  const [studentAddress, setStudentAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleUpdateMarks = async (e) => {
    e.preventDefault();
    try {
      await token.updateMarks(studentAddress, subject, parseInt(marks));
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
    <div>
      <h1>Update Marks</h1>
      <form onSubmit={handleUpdateMarks}>
        <label htmlFor="student_address">Student Address:</label>
        <input
          value={studentAddress}
          onChange={(e) => setStudentAddress(e.target.value)}
          type="text"
          id="student_address"
          required
        />
        <br />
        <label htmlFor="subject">Subject:</label>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          id="subject"
          required
        />
        <br />
        <label htmlFor="marks">Marks:</label>
        <input
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          type="number"
          id="marks"
          required
        />
        <br />
        <button type="submit">Update Marks</button>
      </form>
    </div>
  );
};

export default Faculty
