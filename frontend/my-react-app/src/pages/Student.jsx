import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../App";
import "./erp_style.css";
import "./erp_menu.css";
import "./erp_button.css";

const Student = () => {
  const { token } = useContext(MyContext);
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState("");

  const fetchStudentDetails = async () => {
    try {
        if(!token) {
            console.log("Initialising token")
            return;
        }
      const details = await token.getStudentDetails();
      const marks = details[4];
      const subjects = details[3];
      const subjectsWithMarks = subjects.map((subject, index) => ({
        subject,
        mark: marks[index].toString(), // Convert BigNumber to string
    }));
      const formattedDetails = {
        name: details[0],
        studentAddress: details[1],
        branch: details[2],
        subjectsWithMarks: subjectsWithMarks,
      };
      

      setStudentDetails(formattedDetails);
    } catch (err) {
      setError("Error fetching student details");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudentDetails();
  }, [token]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!studentDetails) {
    return <p>Loading student details...</p>;
  }

  return (
    <>
    <>
  <meta charSet="UTF-8" />
  <title>ERP @ IIITA</title>
  <base href="https://erp.iiita.ac.in/" />
  <link rel="shortcut icon" href="images/favicon.ico" />
  <link rel="icon" type="image/gif" href="images/animated_favicon1.gif" />
  <meta httpEquiv="expires" content="23:59:00 GMT" />
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE9" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1.0,shrink-to-fit=yes"
  />
  <meta
    name="description"
    content="enterprise resource planning, institute resource planning, iiita resource planning"
  />
  <meta name="author" content="Dr. M.K. Mishra, System Analyst" />
  <link
    rel="stylesheet"
    type="text/css"
    href="css/erp_style.css"
    media="screen"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="css/erp_menu.css"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="css/fontawesome-all.css"
    media="screen"
    crossOrigin="anonymous"
  />
  <form
    id="erpForm"
    name="erpForm"
    method="POST"
    encType="multipart/form-data"
    onload="document.getElementById('edi').style.visibility='hidden';document.getElementById('sav').style.visibility='hidden';"
  >
    <i className="hidden">Developed by Dr MK Mishra</i>
    <div id="fixedbar" className="fixedbar">
      <div
        style={{ textAlign: "center" }}
        title="©2018, ERP&A, IIIT Allahabad, Devghat, Jhalwa, Prayagraj-211015 (UP) INDIA"
      >
        <span
          style={{
            lineHeight: 30,
            fontSize: "1.5vw",
            fontWeight: "bold",
            color: "#247BBB",
            letterSpacing: 2
          }}
        >
          Indian Institute of Information Technology Allahabad
        </span>
        <br />
        <span
          style={{
            lineHeight: 25,
            color: "gray",
            fontSize: "1vw",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: 2
          }}
        >
          भारतीय सूचना प्रौद्योगिकी संस्थान इलाहाबाद{" "}
        </span>
        <br />
        <img
          src="uploads/iiita/logo.png"
          width={75}
          height={60}
          style={{ marginTop: "-10px", marginBottom: "-10px" }}
        />
        <br />
        <mark>
          <select
            id="myBatch"
            name="myBatch"
            style={{
              appearance: "none",
              border: "none",
              textAlignLast: "center",
              backgroundColor: "transparent",
              top: "-10px"
            }}
            onchange="inner('erpa/institute/session/'+this.value); return false;"
            title="Change Academic Session"
          >
            <option value="Jul-2025">Session Jul-2025</option>
            <option value="Jan-2025" selected="">
              Session Jan-2025
            </option>
            <option value="Jul-2024">Session Jul-2024</option>
            <option value="Jan-2024">Session Jan-2024</option>
            <option value="Jul-2023">Session Jul-2023</option>
            <option value="Jan-2023">Session Jan-2023</option>
            <option value="Jul-2022">Session Jul-2022</option>
            <option value="Jan-2022">Session Jan-2022</option>
            <option value="Jul-2021">Session Jul-2021</option>
            <option value="Jan-2021">Session Jan-2021</option>
            <option value="Jul-2020">Session Jul-2020</option>
            <option value="Jan-2020">Session Jan-2020</option>
            <option value="Jul-2019">Session Jul-2019</option>
            <option value="Jul-2018">Session Jul-2018</option>
            <option value="Jan-2018">Session Jan-2018</option>
            <option value="Jul-2017">Session Jul-2017</option>
            <option value="Jan-2017">Session Jan-2017</option>
            <option value="Jul-2016">Session Jul-2016</option>
            <option value="Jan-2016">Session Jan-2016</option>
            <option value="Jul-2015">Session Jul-2015</option>
            <option value="Jul-2014">Session Jul-2014</option>
          </select>
        </mark>
      </div>
      <small className="rotate1" style={{ top: 5 }}>
        &nbsp;IIITA
      </small>
      <div
        id="pragyan"
        className="pragyan"
        onmouseover="this.style.transform='scale(2)';"
        onmouseout="this.style.transform='scale(1)';"
      >
        प्रज्ञानम्
        <img src="images/tricolor.png" width={150} height={22} border={0} />
      </div>
      <div id="versionbar" className="versionbar">
        <sub>Ver. 1.0</sub>
      </div>
      <div
        id="modulebar"
        className="modulebar"
        onmouseover="document.getElementById('loginbar').style.visibility='collapse'; document.getElementById('clockbar').style.visibility='collapse'; return false;"
        onmouseleave="document.getElementById('loginbar').style.visibility='visible'; document.getElementById('clockbar').style.visibility='visible'; return false;"
      >
        <div style={{ fontSize: "11pt" }}>
          <i
            color="#f6491e"
            className="fas fa-graduation-cap fa-beat-fade fa-fw button"
          />
          Academic शैक्षणिक ✔
          <br />
          <a
            href="/?moduleID=2"
            title="Apps for Administrative Departments under Registrar (Acting)"
          >
            <i color="#010698" className="fab fa-black-tie fa-fw button" />
            Administration प्रशासनिक
          </a>
          <br />
          <a
            href="/?moduleID=3"
            title="Apps for Service Departments under Dean (IRP)"
          >
            <i
              color="#03b506"
              className="fa-solid fa-users-gear fa-fw button"
            />
            Services सेवाएं
          </a>
          <br />
        </div>
      </div>
      <div id="fontbar" className="fontbar roundbar">
        <a href="javascript:decreaseFontSize();">
          <i className="fas fa-font fa-fw fa-sm" title="Decrease Font Size" />
        </a>
        &nbsp;
        <a href="javascript:increaseFontSize();">
          <i className="fas fa-font fa-fw fa-lg" title="Increase Font Size" />
        </a>
        <a
          href=""
          onclick="var filename=prompt('Enter PDF file name to save screen content','erpScreene32e7f4a246d668456ac28e8e926d113.pdf'); printPDF(filename); return false;"
          title="Capture Screen"
        >
          <i className="fa-solid fa-soap fa-fw button fa-lg fa-fw button" />
        </a>
      </div>
      <div id="clockbar" className="clockbar">
        <i className="far fa-clock fa-fw fa-spin button" />
        Monday, 21 Apr, 2025 05:35:37 PM
      </div>
      <div id="loginbar" className="loginbar">
        <fieldset>
          <legend align="center">
            ERP Logout here
            <i
              className="fa fa-right-from-bracket fa-fw fa-beat-fade button"
              onclick="alert('Thanks for using the ERP (प्रज्ञानम्) System graciously.'); document.location.href='/?logout=1';"
              title="Log out graciously for session data clinsing"
            />
          </legend>
          <mark className="rotate1 highlight">Welcome</mark>
          <b style={{ marginLeft: 50, letterSpacing: 2 }}>
            <i className="fa fa-user fa-fw fa-bounce" />
            IFI2022018 as STUDENT
          </b>
          <img
            src="uploads/iiita/photos/ifi2022018.jpg"
            width={50}
            height={50}
            style={{
              marginTop: "-5px",
              float: "right",
              backgroundColor: "transparent",
              transition: "transform .2s",
              border: "2px solid #05fa57",
              borderRadius: 25
            }}
            onmouseover="this.style.transform='scale(3)';"
            onmouseout="this.style.transform='scale(1)';"
            onclick="document.getElementById('photo').click();"
          />
          <br />
          <br />
          <div
            style={{
              marginLeft: 55,
              fontFamily: "Lucida Handwriting",
              fontSize: 10
            }}
          >
            {studentDetails.name}
          </div>
          <details style={{ marginTop: 3 }}>
            <summary id="qmenu" className="roundbar">
              <b>Quick Access</b>
              <i className="fa fa-bars fa-fw button" />
              <input
                id="photo"
                type="file"
                name="dpFile"
                accept=".jpg,.png,.jpeg"
                style={{ display: "none" }}
                onchange="inner('erpa/user/dpload'); return false;"
              />
            </summary>
            <div
              style={{ backgroundColor: "#cffdf4", marginBottom: "-12px" }}
              onmouseout="document.getElementById('qmenu').click();"
            >
              <hr />
              <b className="highlight">System Bookmark</b>
              <hr />
              <pre style={{ padding: "0 10px 0 10px", lineHeight: 20 }}>
                {"                                "}
                <a
                  href=""
                  onclick="inner('fna/claim/open/0'); return false;"
                  title="Finance & Account Management"
                >
                  {"\n"}
                  {"                                    "}
                  <i className="fa-solid fa-person-circle-exclamation fa-fw" />
                  {"\n"}
                  {"                                    "}&nbsp;Claim Submission
                  {"\n"}
                  {"                                "}
                </a>
                {"\n"}
                {"                                "}
                <br />
                {"\n"}
                {"                                "}
                <a
                  href=""
                  onclick="inner('iwd/requisition/open/0'); return false;"
                  title="Electrical & Civil Workshop"
                >
                  {"\n"}
                  {"                                    "}
                  <i className="fa-solid fa-screwdriver-wrench fa-fw" />
                  {"\n"}
                  {"                                    "}&nbsp;IWD Service
                  Requisition (समाधान){"\n"}
                  {"                                "}
                </a>
                {"\n"}
                {"                                "}
                <br />
                {"\n"}
                {"                                "}
                <a
                  href=""
                  onclick="inner('fna/report/structure/0'); return false;"
                  title="Finance & Account Management"
                >
                  {"\n"}
                  {"                                    "}
                  <i className="fas fa-table fa-fw" />
                  {"\n"}
                  {"                                    "}&nbsp;Program Fee
                  Structure{"\n"}
                  {"                                "}
                </a>
                {"\n"}
                {"                                "}
                <br />
                {"\n"}
                {"                                "}
                <a
                  href=""
                  onclick="inner('snp/requisition/open/0'); return false;"
                  title="Inventory Management"
                >
                  {"\n"}
                  {"                                    "}
                  <i className="fa-solid fa-cart-flatbed-suitcase fa-fw" />
                  {"\n"}
                  {"                                    "}&nbsp;Store Item
                  Requisition (सुविधा){"\n"}
                  {"                                "}
                </a>
                {"\n"}
                {"                                "}
                <br />
                {"\n"}
                {"                                "}
                <a
                  href=""
                  onclick="inner('acad2/sashboard/open/0'); return false;"
                  title="Continuous Assessment of Student"
                >
                  {"\n"}
                  {"                                    "}
                  <i className="fas fa-users fa-fw" />
                  {"\n"}
                  {"                                    "}&nbsp;Student
                  Dashboard{"\n"}
                  {"                                "}
                </a>
                {"\n"}
                {"                                "}
                <br />
                {"\n"}
                {"                            "}
              </pre>
              <hr />
              <b className="highlight">User Bookmark</b>
              <hr />
              <pre style={{ padding: "0 10px 0 10px", lineHeight: 20 }}>
                {"                                "}
                <span className="Disabled">
                  {"\n"}
                  {"                                    "}
                  <i className="fa fa-xmark fa-fw" />
                  {"\n"}
                  {"                                     "}None{"\n"}
                  {"                                "}
                </span>
                {"\n"}
                {"                            "}
              </pre>
            </div>
            <center
              id="abt"
              style={{
                position: "sticky",
                padding: 0,
                insetBlockEnd: 0,
                bottom: 1,
                backgroundColor: "#cffdf4"
              }}
            >
              <hr />
              <i
                className="far fa-question-circle fa-fw button"
                onclick="window.open('uploads/iiita/../manuals/aboutERP.pdf','User Manual','width=690,height=600,top=210,left=300,toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no,statusbar=no'); return false;"
                title="About ERP System"
              />
              About ERP System
              <br />
              <small style={{ color: "blue" }}>
                प्रज्ञानम्
                <sup>उन्नत संशकरण</sup>© 2023, भा0सू0प्रौ0सं0इ0 प्रयागराज
              </small>
            </center>
          </details>
        </fieldset>
      </div>
      <div id="alertbar" className="alertbar">
        <i className="fas fa-bell fa-fw fa-shake button" />
        User activity logs are maintained for security reasons.
      </div>
      <div id="menubar" className="menubar">
        <div align="left" style={{ marginLeft: "-20px z-index: 999" }}>
          <table>
            <tbody>
              <tr valign="top">
                <td width="110px" align="left" nowrap="">
                  <a href="/">
                    <i className="fas fa-house-user fa-fw button" />
                    <u>DASHBOARD</u>
                  </a>
                </td>
                <td>
                  <div className="spanx">
                    <ul id="menu">
                      <li>
                        <i
                          color="#ff9900"
                          className="fa-solid fa-person-through-window fa-fw button"
                        />
                        <font face="arial" size="2px">
                          Admission नामांकन
                        </font>
                        <div className="dropdown_4columns">
                          Admission Processing &amp; Student Information
                          <span className="rightbox">
                            Incharge: Dean (A &amp; R)
                          </span>
                          <div className="col_4">
                            <h2 style={{ fontStretch: "ultra-expanded" }}>
                              <i className="fas fa-graduation-cap fa-fw button" />
                              Academic शैक्षणिक
                              <i className="fas fa-chevron-right fa-fw Disabled" />
                              <i className="fa-solid fa-person-through-window fa-fw button" />
                              Admission नामांकन
                              <span className="rightbar">
                                <a
                                  href=""
                                  onclick="inner('acad1/report/dashboard/0'); return false;"
                                >
                                  <i className="fa-solid fa-gauge fa-fw button" />
                                  Dashboard
                                </a>
                              </span>
                            </h2>
                          </div>
                          <div className="col_2">
                            <h3>🎹 App Setting</h3>
                            <ul className="submenu">
                              <li>
                                <a
                                  href="https://aaa.iiita.ac.in"
                                  title="Student Information Portal"
                                  target="_new"
                                >
                                  <i className="fas fa-bullseye fa-fw" />
                                  AAA Website
                                </a>
                              </li>
                              <li>
                                <a
                                  href="http://www.nad.gov.in"
                                  title="National Academic Depository"
                                  target="_new"
                                >
                                  <i className="fab fa-connectdevelop fa-fw" />
                                  www.nad.gov.in
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col_2">
                            <h3>📑 App Form</h3>
                            <ul className="submenu"></ul>
                          </div>
                          <div className="col_2">
                            <h3>📜 App Report</h3>
                            <ul className="submenu"></ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="spanx">
                    <ul id="menu">
                      <li>
                        <i
                          color="#980000"
                          className="fa-solid fa-user-pen fa-fw button"
                        />
                        <font face="arial" size="2px">
                          Assessment मूल्यांकन
                        </font>
                        <div className="dropdown_4columns">
                          Continuous Assessment of Student
                          <span className="rightbox">
                            Incharge: Dean (A &amp; R)
                          </span>
                          <div className="col_4">
                            <h2 style={{ fontStretch: "ultra-expanded" }}>
                              <i className="fas fa-graduation-cap fa-fw button" />
                              Academic शैक्षणिक
                              <i className="fas fa-chevron-right fa-fw Disabled" />
                              <i className="fa-solid fa-user-pen fa-fw button" />
                              Assessment मूल्यांकन
                              <span className="rightbar">
                                <a
                                  href=""
                                  onclick="inner('acad2/report/dashboard/0'); return false;"
                                >
                                  <i className="fa-solid fa-gauge fa-fw button" />
                                  Dashboard
                                </a>
                              </span>
                            </h2>
                          </div>
                          <div className="col_2">
                            <h3>🎹 App Setting</h3>
                            <ul className="submenu"></ul>
                          </div>
                          <div className="col_2">
                            <h3>📑 App Form</h3>
                            <ul className="submenu">
                              <li>
                                <a href="" title="Course Registration by AAA">
                                  <i className="fa fa-file fa-fw" />
                                  Course Registration
                                  <i className="fas fa-caret-right fa-fw" />
                                </a>
                                <ul>
                                  <h4
                                    style={{ borderBottom: "1px dotted gray" }}
                                  >
                                    <i className="fa fa-file fa-fw" />
                                    Course Registration
                                  </h4>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="col_2">
                            <h3>📜 App Report</h3>
                            <ul className="submenu">
                              <li>
                                <a href="" title="Course Registrations">
                                  <i className="fa-solid fa-registered fa-fw" />
                                  Course Registrations
                                  <i className="fas fa-caret-right fa-fw" />
                                </a>
                                <ul>
                                  <h4
                                    style={{ borderBottom: "1px dotted gray" }}
                                  >
                                    <i className="fa-solid fa-registered fa-fw" />
                                    Course Registrations
                                  </h4>
                                </ul>
                              </li>
                              <li>
                                <a href="" title="Elective/Minor Allotments">
                                  <i className="fa-solid fa-cloud-arrow-up fa-fw" />
                                  Course Allotments
                                  <i className="fas fa-caret-right fa-fw" />
                                </a>
                                <ul>
                                  <h4
                                    style={{ borderBottom: "1px dotted gray" }}
                                  >
                                    <i className="fa-solid fa-cloud-arrow-up fa-fw" />
                                    Course Allotments
                                  </h4>
                                </ul>
                              </li>
                              <li style={{ borderBottom: "1px dotted gray" }}>
                                <a
                                  href=""
                                  title="Pending Submissions By Faculty"
                                >
                                  <i className="fas fa-list-ol fa-fw" />
                                  Faculty Pendencys
                                  <i className="fas fa-caret-right fa-fw" />
                                </a>
                                <ul>
                                  <h4
                                    style={{ borderBottom: "1px dotted gray" }}
                                  >
                                    <i className="fas fa-list-ol fa-fw" />
                                    Faculty Pendencys
                                  </h4>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="spanx">
                    <ul id="menu">
                      <li>
                        <i
                          color="#9900ff"
                          className="fas fa-graduation-cap fa-fw button"
                        />
                        <font face="arial" size="2px">
                          Award उपाधि
                        </font>
                        <div className="dropdown_4columns">
                          Convocation and Award Management
                          <span className="rightbox">
                            Incharge: Dean (A &amp; R)
                          </span>
                          <div className="col_4">
                            <h2 style={{ fontStretch: "ultra-expanded" }}>
                              <i className="fas fa-graduation-cap fa-fw button" />
                              Academic शैक्षणिक
                              <i className="fas fa-chevron-right fa-fw Disabled" />
                              <i className="fas fa-graduation-cap fa-fw button" />
                              Award उपाधि
                              <span className="rightbar">
                                <a
                                  href=""
                                  onclick="inner('acad3/report/dashboard/0'); return false;"
                                >
                                  <i className="fa-solid fa-gauge fa-fw button" />
                                  Dashboard
                                </a>
                              </span>
                            </h2>
                          </div>
                          <div className="col_2">
                            <h3>🎹 App Setting</h3>
                            <ul className="submenu"></ul>
                          </div>
                          <div className="col_2">
                            <h3>📑 App Form</h3>
                            <ul className="submenu"></ul>
                          </div>
                          <div className="col_2">
                            <h3>📜 App Report</h3>
                            <ul className="submenu"></ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="spanx">
                    <ul id="menu">
                      <li>
                        <i
                          color="#348906"
                          className="far fa-file-archive fa-fw button"
                        />
                        <font face="arial" size="2px">
                          Archive पुरालेख
                        </font>
                        <div className="dropdown_4columns">
                          Alumni Record Archival
                          <span className="rightbox">
                            Incharge: Dean (A &amp; R)
                          </span>
                          <div className="col_4">
                            <h2 style={{ fontStretch: "ultra-expanded" }}>
                              <i className="fas fa-graduation-cap fa-fw button" />
                              Academic शैक्षणिक
                              <i className="fas fa-chevron-right fa-fw Disabled" />
                              <i className="far fa-file-archive fa-fw button" />
                              Archive पुरालेख
                              <span className="rightbar">
                                <a
                                  href=""
                                  onclick="inner('acad4/report/dashboard/0'); return false;"
                                >
                                  <i className="fa-solid fa-gauge fa-fw button" />
                                  Dashboard
                                </a>
                              </span>
                            </h2>
                          </div>
                          <div className="col_2">
                            <h3>🎹 App Setting</h3>
                            <ul className="submenu"></ul>
                          </div>
                          <div className="col_2">
                            <h3>📑 App Form</h3>
                            <ul className="submenu">
                              <li>
                                <a
                                  href=""
                                  onclick="inner('acad4/xequisition/open/0'); return false;"
                                  title="Request for Academic Instrument"
                                >
                                  <i className="fa-solid fa-file-shield fa-fw" />
                                  Certificate Requisition
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col_2">
                            <h3>📜 App Report</h3>
                            <ul className="submenu"></ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="loader" className="loader">
        <div className="loading loading--full-height" />
      </div>
    </div>
    <div id="contentbar" className="contentbar">
      <span id="pgtitle" className="pgtitle" title="Dashboard for Student">
        <i className="fa-solid fa-user-pen fa-bounce button" />
        Assessment मूल्यांकन&nbsp;
        <b className="Disabled">⇛</b>
        <i className="fas fa-users fa-beat-fade fa-fw button" />
        Student Dashboard
      </span>
      <b className="findbar">
        Please click an icon of the toolbar/shortcut for desired
        action/information 👉
      </b>
      <b className="toolbar">
        <span className="btn-group" title="ERP Toolbar">
          <i
            className="fas fa-sync-alt fa-fw button"
            onclick="inner('acad2/sashboard/refresh/5303/4529/59/6'); return false;"
            title="Refresh Page"
          />
          <i
            className="far fa-window-maximize fa-fw button"
            onclick="if (document.getElementById('fixedbar').style.display=='none') {document.getElementById('fixedbar').style.display='block'; document.getElementById('contentbar').style.height='calc(100% - 195px)'; document.getElementById('contentbar').style.top='160px';} else {document.getElementById('fixedbar').style.display='none'; document.getElementById('contentbar').style.height='100%'; document.getElementById('contentbar').style.top='10px';}; return false;"
            title="Maximize Window (Alt+m)"
            accessKey="m"
          />
          <i
            className="far fa-question-circle fa-fw button"
            onclick="window.open('uploads/iiita/../manuals/aboutERP.pdf','User Manual','width=690,height=600,top=210,left=300,toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no,statusbar=no'); return false;"
            target="new"
            title="About ERP"
          />
          <span className="dropdown" onclick="return false;">
            <i className="fa-solid fa-circle-chevron-down button" />
            <div className="dropdown-content">
              <a
                href=""
                onclick="popup('erpa/report/calendars/0','Academic Calendar',1200,800); return false;"
                title="Academic Calendar"
              >
                <i className="fas fa-calendar-alt fa-fw button" />
                Academic Calendar
              </a>
              <a
                href=""
                onclick="popup('fna/report/structure/0/4529/59','Program Fees Structure',1200,800); return false;"
                title="Program Fees Structure"
              >
                <i className="fas fa-table fa-fw button" />
                Program Fee Structure
              </a>
              <a
                href=""
                onclick="inner('fna/feement2/edit/0/4529/59/6'); return false;"
                title="Online Payment of Fees"
              >
                <i className="fab fa-paypal fa-fw button" />
                Semester Fee Payment
              </a>
              <a
                href=""
                onclick="inner('hms/feement2/edit/0/4529/59/6'); return false;"
                title="Online Payment of Mess Charge"
              >
                <i className="fa-brands fa-paypal fa-fw button" />
                Hostel Mess Payment
              </a>
              <a
                href=""
                onclick="inner('iwd/requisition/new/0'); return false;"
                title="IWD समाधान Form"
              >
                <i className="fa-solid fa-screwdriver-wrench fa-fw button" />
                IWD Service Requisition (समाधान)
              </a>
              <a
                href=""
                onclick="popup('acad1/report/uploads/0/4529/59','Uploaded Certificates & Documents',1200,800); return false;"
                title="Uploaded Certificates & Documents"
              >
                <i className="fa fa-file-arrow-up fa-fw button" />
                Uploaded Documents
              </a>
              <a
                href=""
                onclick="popup('acad2/preference/edit/0/4529/59/6/elective','Student Preference Submission',1000,600); return false;"
                title="Student Preference Submission"
              >
                <i className="fa-regular fa-calendar-check fa-fw button" />
                Elective Preference
              </a>
              <a
                href=""
                onclick="popup('acad2/registration/edit/0/4529/59/6','Semester Course Registration',1200,800); return false;"
                title="Semester Course Registration"
              >
                <i className="far fa-registered fa-fw button" />
                Course Registration
              </a>
              <a
                href=""
                onclick="popup('acad2/registerback/edit/0/4529/59/6/back1','Registration for Back',1200,800); return false;"
                title="Registration for Back"
              >
                <i className="fas fa-registered fa-fw button" />
                Back Registration
              </a>
              <a
                href=""
                onclick="popup('ihc/report/OPDhistory/4529 : 59/1','History of Medication',1200,800); return false;"
                title="History of Medication"
              >
                <i className="fas fa-user-plus fa-fw button" />
                Medication History
              </a>
              <a
                href=""
                onclick="popup('acad1/profile/open/5303/4529/59','Profile Updation by Student',1300,600); return false;"
                title="Profile Updation by Student"
              >
                <i className="fa-solid fa-id-card-clip fa-fw button" />
                Student Profile
              </a>
              <a
                href=""
                onclick="popup('acad4/requisition/open/0/4529/59/0/1','Request for Academic Instrument by Student',1300,800); return false;"
                title="Request for Academic Instrument by Student"
              >
                <i className="fa-solid fa-file-circle-exclamation fa-fw button" />
                Document Requisition
              </a>
            </div>
          </span>
        </span>
      </b>
      <br />
      <fieldset id="top" disabled="" style={{ border: 0, paddingTop: 5 }}>
        <table className="report" style={{ textAlign: "left" }}>
          <tbody>
            <tr title="ID: 4529,59">
              <td width="14%" nowrap="" className="alert" align="center">
                Enrolment No. IFI2022018
              </td>
              <th>
                <mark>
                  (Jul-2022 - Jun-2026) BTech (IT) FAP Semester 6 Section C
                  (Program Minor: Economics &amp; Finance for Engineers){" "}
                </mark>
                <span
                  className="button rightbox"
                  title="Show/Hide Personal Information"
                >
                  <i
                    className="fa fa-eye-slash"
                    onclick="if (this.getAttribute('class').split('-').pop() == 'slash') {this.setAttribute('class',this.getAttribute('class').replace('-slash','')); document.getElementById('tb').style.visibility='collapse'; document.getElementById('stts').style.visibility='hidden';} else {this.setAttribute('class',getAttribute('class')+'-slash'); document.getElementById('tb').style.visibility='visible'; document.getElementById('stts').style.visibility='visible';} return false;"
                  />
                </span>
              </th>
              
            </tr>
          </tbody>
          <tbody id="tb">
            <tr>
              <td nowrap="">Student Name</td>
              <td>
                {studentDetails.name}
                <i className="fas fa-phone fa-fw" />
                <sup>9428003242</sup>
                <i className="far fa-envelope fa-fw" />
                <sup>buddhadevom@gmail.com</sup>
                DoB
                <sup>08-08-2004</sup>
                (Social
                <sup>GEN</sup>
                Seat
                <sup>EWS</sup>
                Fees
                <sup>OPEN</sup>)
              </td>
              <td rowSpan={4} align="center">
                <img
                  src="uploads/iiita/photos/c2ddd587d007906f8b373c1cfe13a89b.jpg"
                  width={120}
                  height={110}
                />
                <br />
                <img
                  src="uploads/iiita/signatures/82d1d04bcbb401d5b09d1b30c6d82472.png"
                  width={120}
                  height={20}
                />
              </td>
            </tr>
            <tr>
              <td nowrap="">Parent Name</td>
              <td nowrap="">
                <i className="Disabled">Mother</i>
                MRS. BHAVNA BUDDHADEV
                <i className="far fa-envelope fa-fw" />
                <sup>buddhadevom@gmail.com</sup>
                <i className="Disabled">Father</i>
                MR. SANJAYBHAI RAMESHCHANDRA BUDDHADEV
                <i className="fas fa-phone fa-fw" />
                <sup>9428003242</sup>
                <i className="far fa-envelope fa-fw" />
                <sup>
                  buddhadevom@gmail.com
                  <sup></sup>
                </sup>
              </td>
            </tr>
            <tr valign="top">
              <td nowrap="">Permanent Address</td>
              <td>
                SANTACHHAYA APARTMENT, 21 PRAHALAD PLOT, BEHIND RAJSHRI TALKIES
                <br />
                Rajkot - 360001 (Gujarat) INDIA (Police Station: A DIVISION
                POLICE STATION, DHEBAR RD NEAR, TRIKON BAUG, RAJKOT, GUJARAT
                360001
                <sup>Urban Area</sup>)
              </td>
            </tr>
            <tr valign="top">
              <td nowrap="">Public Address </td>
              <td>
                {studentDetails.studentAddress}
              </td>
            </tr>
          </tbody>
        </table>
        <div align="center">
          <span className="roundbar">
            Hostel Room No. 641
            <sup>Second Floor</sup>
            BH2
            <sup>Single Bed</sup>
          </span>
          <span className="roundbar">Fees ₹ 102770.00 Paid ₹ 102770.00👍</span>
          <span className="roundbar">Mess ₹ 24300.00 Paid ₹ 24300.00👍</span>
        </div>
        <mark
          id="stts"
          className="rotate1 alert"
          style={{
            border: "5px double green",
            padding: 5,
            top: 70,
            right: "13%",
            textAlign: "center"
          }}
        >
          Enrolled
          <br />
          <img
            src="https://erp.iiita.ac.in/uploads/iiita/stamp.png"
            width={50}
            height={50}
          />
          <br />
          07-11-2022
        </mark>
        <details align="center">
          <summary style={{ fontSize: 15, fontWeight: 900, color: "green" }}>
            Jan-2025 Academic Calendar
            <span style={{ fontSize: 30 }}>📆</span>
          </summary>
          <table className="reportmin" width="80%" align="center">
            <tbody>
              <tr>
                <th width="5%">#</th>
                <th>Calendar Event</th>
                <th width="20%">Schedule</th>
                <th width="20%">Late Fine</th>
                <th width="25%">Remark</th>
              </tr>
              <tr className="Disabled">
                <th>1</th>
                <td>Approved Back2 Registration</td>
                <td width="10%">31-12-2024 To 21-01-2025</td>
                <td>None</td>
                <td>For all NEP batches</td>
              </tr>
              <tr className="Disabled">
                <th>2</th>
                <td>Back1 Registration</td>
                <td width="10%">26-12-2024 To 21-01-2025</td>
                <td>None</td>
                <td>For all NEP batches</td>
              </tr>
              <tr className="Disabled">
                <th>3</th>
                <td>Student Feedback</td>
                <td width="10%">21-03-2025 To 24-03-2025</td>
                <td>None</td>
                <td>For all NEP batches</td>
              </tr>
              <tr className="Disabled">
                <th>4</th>
                <td>Semester Fees Payment</td>
                <td width="10%">16-12-2024 To 31-03-2025</td>
                <td>
                  INR 1000.00 w.e.f. 31-12-2024, INR 5000.00 w.e.f. 03-01-2025
                </td>
                <td>For all NEP batches</td>
              </tr>
            </tbody>
          </table>
        </details>
        <fieldset>
          <legend>Semester [ 1 ] Provisional Report Card </legend>
          <table className="interface2" style={{ fontSize: 11 }}>
            <tbody>
              <tr>
                <th width="3%">#</th>
                <th>Course Name</th>
                <th width="7%">Type</th>
                <th width="5%">Mid Sem</th>
                <th width="5%">Internal</th>
                <th width="5%">End Sem</th>
               
              </tr>
              {studentDetails.subjectsWithMarks.map((subject, index) => (
                <tr title = {subject.subject}>
                    <th>{index+1}</th>
                    <td align="left">
                  {subject.subject}
                 
                </td>
                
                <td>Core</td>
                
                <td>{subject.mark}</td>
                <td>{subject.mark}</td><td>{subject.mark}</td>
                </tr>
              ))}
              {/* <tr title=" Registration Date: 01-08-2022 Faculty: Not Yet Allotted)">
                <th>1</th>
                <td align="left">
                  Approaches and Institutions: Understanding Social Realities
                  through Indian Eyes
                 
                </td>
                
                <td>Core</td>
                
                <td>29.00/25</td>
                <td>28.00/35</td>
                <td>40.00/40</td>
                
              </tr>
              */}
            </tbody>
          </table>
       
      </fieldset>
      
      </fieldset>
    </div>

    <br />
    <div className="rightbox">
      <b className="highlight">
        Department of Information Technology (HoD: Dr. Krishna Pratap Singh)
      </b>
      <i className="fas fa-phone fa-fw" />
      91-532-2922525,
      <i className="fa-solid fa-envelope fa-fw" />
      hod.it@iiita.ac.in
    </div>
    <table
      className="footer interface"
      style={{ color: "#247BBB", size: "8pt" }}
      title="Dr. M.K. Mishra, Mr. Prashant Kr. Srivastava, Mr. Kaushal Kr. Singh
  91-532-2922011, 2922192, erp@iiita.ac.in"
    >
      <tbody>
        <tr>
          <td id="xloginbar" width="40%" align="left">
            <mark>
              Please see your login history in the ERP system here 👉
              <a
                href=""
                onclick="popup('erpa/report/mysessions/','My Sessions',1000,600); return false;"
                title="Personal Session on ERP"
              >
                <i className="fas fa-user-gear fa-fw button" />
              </a>
            </mark>
          </td>
          <td
            className="roundbar"
            align="center"
            onmouseover="document.getElementById('foot').show();"
            onmouseout="document.getElementById('foot').close();"
          >
            Your IP
            <i className="fa fa-laptop fa-fw button" />
            152.59.184.23
          </td>
          <td id="xupdatebar" width="40%" align="right">
            <mark>Please avoid unethical access to the ERP resources. 😈</mark>
          </td>
        </tr>
      </tbody>
    </table>
    <dialog
      id="foot"
      style={{
        bottom: 15,
        zIndex: 5,
        textAlign: "center",
        border: "1px dotted orange",
        borderRadius: 25,
        color: "#247BBB"
      }}
    >
      <h1>
        भारतीय सूचना प्रौद्योगिकी संस्थान इलाहाबाद
        <br />
        Indian Institute of Information Technology Allahabad
      </h1>
      <span style={{ fontSize: 14 }}>©</span>
      2018, ERP&amp;A, IIIT Allahabad, Devghat, Jhalwa, Prayagraj-211015 (UP)
      INDIA
      <br />
      The Institute ERP system is under development by the ERP &amp; Automation
      Cell under supervision of Dean (TD) and technical lead of Dr. MK Mishra.
      <br />
      Technical Contact:
      <i className="fa fa-phone fa-fw fa-rotate-270" />
      91-532-2922011, 2922192,
      <i className="fa fa-envelope fa-fw" />
      erp@iiita.ac.in
      <br />
      General Contact:
      <i className="fa fa-phone fa-fw fa-rotate-270" />
      91-532-2922025,
      <i className="fa fa-envelope fa-fw" />
      contact@iiita.ac.in
      <br />
      Website:
      <i className="fa fa-globe fa-fw" />
      <a href="https://www.iiita.ac.in" target="_new" title="Homepage">
        www.iiita.ac.in
      </a>
      <hr />
      <h1 className="Disabled" align="center">
        प्रज्ञानम् ब्रह्म
        <br />
        “That which is not different from knowledge which arises spontaneously.”
      </h1>
      <p align="right" className="Disabled">
        .............................. Aitareya Upanishad 3.3
        ..............................
      </p>
    </dialog>
  </form>
  <i className="hidden">Developed by Dr MK Mishra</i>
</>

    </>
  );
};

export default Student;
