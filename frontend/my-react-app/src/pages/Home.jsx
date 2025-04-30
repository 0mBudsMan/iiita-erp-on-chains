import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

const Home = () => {
  const { token } = useContext(MyContext);
  const [owner, setOwner] = useState("");

  function redirectBasedOnRole() {
    const role = document.getElementById('roleSelect').value;
    switch (role) {
      case 'admin':
        window.location.href = 'http://localhost:3000/admin';      
        break;
      case 'faculty':
        window.location.href = 'http://localhost:3000/faculty';
        break;
      case 'student':
        window.location.href = 'http://localhost:3000/student';
        break;
      default:
        alert('Please select a role.');
    }
  }
  useEffect(() => {
    window.redirectBasedOnRole = redirectBasedOnRole;
    return () => { delete window.redirectBasedOnRole; };
  }, [redirectBasedOnRole]);

  useEffect(() => {
    const loginIcon = document.querySelector(
      '.fa-sign-in-alt.fa-fw.fa-beat-fade.button'
    );
    if (!loginIcon) return;
    loginIcon.style.cursor = 'pointer';
    loginIcon.addEventListener('click', redirectBasedOnRole);
    return () => {
      loginIcon.removeEventListener('click', redirectBasedOnRole);
    };
  }, [redirectBasedOnRole]);

  useEffect(() => {
    const fetchOwner = async () => {
      if (!token) {
        console.log("Initialising token")
        return;
      }

      try {
        const _owner = await token.owner();
        setOwner(_owner);
      } catch (error) {
        console.error("Error fetching owner:", error);
      }
    };

    fetchOwner();
  }, [token]);

 
  

  return (
    <>
    <div>
  <meta charSet="UTF-8" />
  <title>ERP @ IIITA</title>
  <base href="https://erp.iiita.ac.in/" />
  <link rel="shortcut icon" href="images/favicon.ico" />
  <link rel="icon" type="image/gif" href="images/animated_favicon1.gif" />
  <meta httpEquiv="expires" content="23:59:00 GMT" />
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=EmulateIE9" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=yes" />
  <meta name="description" content="enterprise resource planning, institute resource planning, iiita resource planning" />
  <meta name="author" content="Dr. M.K. Mishra, System Analyst" />
  <link rel="stylesheet" type="text/css" href="css/erp_style.css" media="screen" />
  <link rel="stylesheet" type="text/css" href="css/erp_menu.css" media="screen" />
  <link rel="stylesheet" href="css/fontawesome-all.css" media="screen" crossOrigin="anonymous" />
  <form id="erpForm" name="erpForm" method="POST" encType="multipart/form-data" onload="document.getElementById('edi').style.visibility='hidden';document.getElementById('sav').style.visibility='hidden';">
    <div id="fixedbar" className="fixedbar">
      <div style={{"-webkit-text-align":"center","text-align":"center"}} title="©2018, ERP&A, IIIT Allahabad, Devghat, Jhalwa, Prayagraj-211015 (UP) INDIA">
        <span style={{"line-height":"30px","font-size":"1.5vw","font-weight":"bold","color":"#247BBB","letter-spacing":"2px"}}>Indian Institute of Information Technology Allahabad</span><br />
        <span style={{"line-height":"25px","color":"gray","font-size":"1vw","font-weight":"bold","-webkit-text-align":"center","text-align":"center","letter-spacing":"2px"}}>भारतीय सूचना प्रौद्योगिकी संस्थान इलाहाबाद </span><br />
        <img src="uploads/iiita/logo.png" width={75} height={60} style={{"margin-top":"-10px","margin-bottom":"-10px"}} /><br />
        <mark><select id="myBatch" name="myBatch" style={{"-webkit-appearance":"none","-moz-appearance":"none","appearance":"none","border":"none","-webkit-text-align-last":"center","text-align-last":"center","background-color":"transparent","top":"-10px"}} onchange="inner('erpa/institute/session/'+this.value); return false;" title="Change Academic Session"><option value="Jul-2025">Session Jul-2025</option><option value="Jan-2025" selected>Session Jan-2025</option><option value="Jul-2024">Session Jul-2024</option><option value="Jan-2024">Session Jan-2024</option><option value="Jul-2023">Session Jul-2023</option><option value="Jan-2023">Session Jan-2023</option><option value="Jul-2022">Session Jul-2022</option><option value="Jan-2022">Session Jan-2022</option><option value="Jul-2021">Session Jul-2021</option><option value="Jan-2021">Session Jan-2021</option><option value="Jul-2020">Session Jul-2020</option><option value="Jan-2020">Session Jan-2020</option><option value="Jul-2019">Session Jul-2019</option><option value="Jul-2018">Session Jul-2018</option><option value="Jan-2018">Session Jan-2018</option><option value="Jul-2017">Session Jul-2017</option><option value="Jan-2017">Session Jan-2017</option><option value="Jul-2016">Session Jul-2016</option><option value="Jan-2016">Session Jan-2016</option><option value="Jul-2015">Session Jul-2015</option><option value="Jul-2014">Session Jul-2014</option></select></mark></div><small className="rotate1" style={{"top":"5px"}}>&nbsp;IIITA</small><div id="pragyan" className="pragyan" onmouseover="this.style.transform='scale(2)';" onmouseout="this.style.transform='scale(1)';">प्रज्ञानम्<img src="images/tricolor.png" width={150} height={22} border={0} /></div>
      <div id="versionbar" className="versionbar"><sub>Ver. 1.0</sub></div>
      <div id="modulebar" className="modulebar" onmouseover="document.getElementById('loginbar').style.visibility='collapse'; document.getElementById('clockbar').style.visibility='collapse'; return false;" onmouseleave="document.getElementById('loginbar').style.visibility='visible'; document.getElementById('clockbar').style.visibility='visible'; return false;"><div style={{"font-size":"11pt"}}><i color="#f6491e" className="fas fa-graduation-cap fa-beat-fade fa-fw button" />Academic शैक्षणिक ✔<br /><a href="/?moduleID=2" title="Apps for Administrative Departments under Registrar (Acting)"><i color="#010698" className="fab fa-black-tie fa-fw button" />Administration प्रशासनिक</a><br /><a href="/?moduleID=3" title="Apps for Service Departments under Dean (IRP)"><i color="#03b506" className="fa-solid fa-users-gear fa-fw button" />Services सेवाएं</a><br /></div></div>
      <div id="fontbar" className="fontbar roundbar"><a href="javascript:decreaseFontSize();"><i className="fas fa-font fa-fw fa-sm" title="Decrease Font Size" /></a>&nbsp;<a href="javascript:increaseFontSize();"><i className="fas fa-font fa-fw fa-lg" title="Increase Font Size" /></a><a href onclick="var filename=prompt('Enter PDF file name to save screen content','erpScreen78bb76df10c0fa2a33bd14df2a78f07b.pdf'); printPDF(filename); return false;" title="Capture Screen"><i className="fa-solid fa-soap fa-fw button fa-lg fa-fw button" /></a></div>
      <div id="clockbar" className="clockbar"><i className="far fa-clock fa-fw fa-spin button" />Tuesday, 29 Apr, 2025 11:20:07 AM</div>
      <div id="loginbar" className="loginbar">
        <fieldset align="center" title="Select your role to login to the ERP system.">
          <legend align="center">
            <i className="fa fa-lock fa-fw Disabled" /> 2FA Login here
          </legend>
          <p>Contract Owner: {owner || "Loading..."}</p>
          <i className="fa fa-user fa-fw fa-bounce" />
          <select id="roleSelect" style={{"padding":"5px","margin-top":"10px"}}>
            <option value>-- Select Role --</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="student">Student</option>
          </select>
          <br /><br />
          <i className="fa fa-sign-in-alt fa-fw fa-beat-fade button" onclick="redirectBasedOnRole()" title="Login" />
          <br /><br /><br />
          <i>for</i> authorised access to the secure ERP resources.
        </fieldset>
      </div>
      <div id="alertbar" className="alertbar"><i className="fas fa-bell fa-fw fa-shake button" />Please adher to the timeline for scheduled activity.</div>
      <div id="menubar" className="menubar"><div align="left" style={{"margin-left":"-20px z-index: 999"}}>
          <table><tbody><tr valign="top">
                <td width="110px" align="left" nowrap><a href="/"><i className="fas fa-house-user fa-fw button" /><u>DASHBOARD</u></a></td><td><div className="spanx"><ul id="menu"><li><i color="#ff9900" className="fa-solid fa-person-through-window fa-fw button" /><font face="arial" size="2px">Admission नामांकन</font>
                        <div className="dropdown_4columns">Admission Processing &amp; Student Information<span className="rightbox">Incharge: Dean (A &amp; R)</span>
                          <div className="col_4">
                            <h2 style={{"font-stretch":"ultra-expanded"}}><i className="fas fa-graduation-cap fa-fw button" />Academic शैक्षणिक <i className="fas fa-chevron-right fa-fw Disabled" /><i className="fa-solid fa-person-through-window fa-fw button" />Admission नामांकन<span className="rightbar"><a href onclick="inner('acad1/report/dashboard/0'); return false;"><i className="fa-solid fa-gauge fa-fw button" />Dashboard</a></span></h2>
                          </div><div className="col_2"><h3>🎹 App Setting</h3><ul className="submenu"><li><a href="https://aaa.iiita.ac.in" title="Student Information Portal" target="_new"><i className="fas fa-bullseye fa-fw" /> AAA Website</a></li><li><a href="http://www.nad.gov.in" title="National Academic Depository" target="_new"><i className="fab fa-connectdevelop fa-fw" /> www.nad.gov.in</a></li></ul></div><div className="col_2"><h3>📑 App Form</h3><ul className="submenu" /></div><div className="col_2"><h3>📜 App Report</h3><ul className="submenu" /></div></div></li></ul></div></td><td><div className="spanx"><ul id="menu"><li><i color="#980000" className="fa-solid fa-user-pen fa-fw button" /><font face="arial" size="2px">Assessment मूल्यांकन</font>
                        <div className="dropdown_4columns">Continuous Assessment of Student<span className="rightbox">Incharge: Dean (A &amp; R)</span>
                          <div className="col_4">
                            <h2 style={{"font-stretch":"ultra-expanded"}}><i className="fas fa-graduation-cap fa-fw button" />Academic शैक्षणिक <i className="fas fa-chevron-right fa-fw Disabled" /><i className="fa-solid fa-user-pen fa-fw button" />Assessment मूल्यांकन<span className="rightbar"><a href onclick="inner('acad2/report/dashboard/0'); return false;"><i className="fa-solid fa-gauge fa-fw button" />Dashboard</a></span></h2>
                          </div><div className="col_2"><h3>🎹 App Setting</h3><ul className="submenu" /></div><div className="col_2"><h3>📑 App Form</h3><ul className="submenu"><li><a href title="Course Registration by AAA"><i className="fa fa-file fa-fw" /> Course Registration<i className="fas fa-caret-right fa-fw" /></a>
                                <ul><h4 style={{"border-bottom":"1px dotted gray"}}><i className="fa fa-file fa-fw" /> Course Registration</h4></ul></li></ul></div><div className="col_2"><h3>📜 App Report</h3><ul className="submenu"><li><a href title="Course Registrations"><i className="fa-solid fa-registered fa-fw" /> Course Registrations<i className="fas fa-caret-right fa-fw" /></a>
                                <ul><h4 style={{"border-bottom":"1px dotted gray"}}><i className="fa-solid fa-registered fa-fw" /> Course Registrations</h4></ul></li><li><a href title="Elective/Minor Allotments"><i className="fa-solid fa-cloud-arrow-up fa-fw" /> Course Allotments<i className="fas fa-caret-right fa-fw" /></a>
                                <ul><h4 style={{"border-bottom":"1px dotted gray"}}><i className="fa-solid fa-cloud-arrow-up fa-fw" /> Course Allotments</h4></ul></li><li style={{"border-bottom":"1px dotted gray"}}><a href title="Pending Submissions By Faculty"><i className="fas fa-list-ol fa-fw" /> Faculty Pendencys<i className="fas fa-caret-right fa-fw" /></a>
                                <ul><h4 style={{"border-bottom":"1px dotted gray"}}><i className="fas fa-list-ol fa-fw" /> Faculty Pendencys</h4></ul></li><li><a href title="Data Sheet for Examinations"><i className="fa-solid fa-hands-praying fa-fw" /> Exam Preparations<i className="fas fa-caret-right fa-fw" /></a>
                                <ul><h4 style={{"border-bottom":"1px dotted gray"}}><i className="fa-solid fa-hands-praying fa-fw" /> Exam Preparations</h4></ul></li></ul></div></div></li></ul></div></td><td><div className="spanx"><ul id="menu"><li><i color="#9900ff" className="fas fa-graduation-cap fa-fw button" /><font face="arial" size="2px">Award उपाधि</font>
                        <div className="dropdown_4columns">Convocation and Award Management<span className="rightbox">Incharge: Dean (A &amp; R)</span>
                          <div className="col_4">
                            <h2 style={{"font-stretch":"ultra-expanded"}}><i className="fas fa-graduation-cap fa-fw button" />Academic शैक्षणिक <i className="fas fa-chevron-right fa-fw Disabled" /><i className="fas fa-graduation-cap fa-fw button" />Award उपाधि<span className="rightbar"><a href onclick="inner('acad3/report/dashboard/0'); return false;"><i className="fa-solid fa-gauge fa-fw button" />Dashboard</a></span></h2>
                          </div><div className="col_2"><h3>🎹 App Setting</h3><ul className="submenu" /></div><div className="col_2"><h3>📑 App Form</h3><ul className="submenu" /></div><div className="col_2"><h3>📜 App Report</h3><ul className="submenu" /></div></div></li></ul></div></td><td><div className="spanx"><ul id="menu"><li><i color="#348906" className="far fa-file-archive fa-fw button" /><font face="arial" size="2px">Archive पुरालेख</font>
                        <div className="dropdown_4columns">Alumni Record Archival<span className="rightbox">Incharge: Dean (A &amp; R)</span>
                          <div className="col_4">
                            <h2 style={{"font-stretch":"ultra-expanded"}}><i className="fas fa-graduation-cap fa-fw button" />Academic शैक्षणिक <i className="fas fa-chevron-right fa-fw Disabled" /><i className="far fa-file-archive fa-fw button" />Archive पुरालेख<span className="rightbar"><a href onclick="inner('acad4/report/dashboard/0'); return false;"><i className="fa-solid fa-gauge fa-fw button" />Dashboard</a></span></h2>
                          </div><div className="col_2"><h3>🎹 App Setting</h3><ul className="submenu" /></div><div className="col_2"><h3>📑 App Form</h3><ul className="submenu"><li><a href onclick="inner('acad4/xequisition/open/0'); return false;" title="Request for Academic Instrument"><i className="fa-solid fa-file-shield fa-fw" /> Certificate Requisition</a></li></ul></div><div className="col_2"><h3>📜 App Report</h3><ul className="submenu" /></div></div></li></ul></div></td></tr></tbody></table></div></div>
      <div id="loader" className="loader"><div className="loading loading--full-height" /></div>
    </div><div id="contentbar" className="contentbar"><span className="toolbar"><span className="btn-group" title="ERP Toolbar"><i className="fas fa-sync-alt fa-fw button" onclick="location.reload();" title="Refresh Page" /><i className="far fa-question-circle fa-fw button" onclick="window.open('uploads/iiita/../manuals/aboutERP.pdf','User Manual','width=690,height=600,top=210,left=300,toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no,statusbar=no'); return false;" target="new" title="About ERP" /><span className="dropdown" onclick="return false;">
            <i className="fa-solid fa-circle-chevron-down button" />
            <div className="dropdown-content"><a href onclick="inner('erpa/report/calendars/0'); return false;" title="Academic Calendar"><i className="fas fa-calendar-alt fa-fw button" />Academic Calendar</a><a href onclick="inner('fna/report/feecharts/0'); return false;" title="Semester Fee Chart"><i className="fa-solid fa-indian-rupee-sign fa-fw button" />Program Fee Structure</a><a href onclick="inner('snp/requisition/open/0'); return false;" title="Store सुविधा Form for Person"><i className="fa-solid fa-cart-flatbed-suitcase fa-fw button" />Store Item Requisition (सुविधा)</a><a href onclick="inner('iwd/requisition/open/0'); return false;" title="IWD समाधान Form"><i className="fa-solid fa-screwdriver-wrench fa-fw button" />IWD Service Requisition (समाधान)</a><a href onclick="inner('est/requisition/open/0'); return false;" title><i className=" fa-fw button" /></a></div></span></span></span>
      <div id="outerbar" /><br /><div align="center" style={{"font-family":"times","color":"gray"}}>!!! Welcome To !!!
        <h1 style={{"font-size":"1.3vw"}}>IIITA ERP System</h1><br />
        <b style={{"font-size":"5vw","letter-spacing":"5px","background":"-webkit-linear-gradient(yellow,red)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}>प्रज्ञानम्</b><br />
        <h4 align="center">Need to Work... {'{'}Stakeholders in their Official Capacity{'}'} ...Need to Know</h4>
        <h1>Readers Count Inside Library: <mark>Moderate</mark><sup>under 60 at the moment</sup></h1>
        <h2 className="rotate1 button" onclick="document.location.href='pragyan.php'; return false;">Introducing<br />ERP Ver. 2.0</h2><details><summary><mark>Live Sessions (40)</mark></summary>
          <p className="chart" style={{"width":"700px"}} onclick="popup('erpa/report/lives/0'); return false;"><canvas id="charta" style={{"min-height":"330px"}} /></p></details><hr width="5%" /><hr width="7%" /><hr width="9%" /><hr width="11%" /><hr width="13%" /><hr width="15%" /><hr width="17%" /><hr width="19%" /><hr width="21%" /><hr width="23%" /><hr width="25%" /><hr width="27%" /><hr width="29%" /><hr width="31%" /><hr width="33%" /><hr width="35%" /><hr width="37%" /><hr width="39%" /><hr width="41%" /><hr width="43%" /><hr width="45%" /><hr width="47%" /><hr width="49%" />Salient Features of this ERP System<br /><i className="fa-solid fa-vault fa-fw fa-2xl" title="Safety & Security" /> <i className="fa-solid fa-users-rectangle fa-fw fa-2xl" title="Multi Users" /><i className="fa-solid fa-user-secret fa-fw fa-2xl" title="Activity Monitoring" /><i className="fa-solid fa-money-bill-transfer fa-fw fa-2xl" title="Online Transaction" /><i className="fa-solid fa-file-arrow-up fa-fw fa-2xl" title="File Upload" /><i className="fa-solid fa-barcode fa-fw fa-2xl" title="Barcode Generator" /><i className="fa-solid fa-qrcode fa-fw fa-2xl" title="QRcode Generator" /><i className="fa-solid fa-chart-pie fa-fw fa-2xl" title="Chart Generator" /><i className="fas fa-file-pdf fa-fw fa-2xl" title="PDF Generator" /><i className="fas fa-file-csv fa-fw fa-2xl" title="CSV Generator" /><i className="fa-regular fa-file-zipper fa-fw fa-2xl" title="File Zipper" /><i className="fa-regular fa-envelope fa-fw fa-2xl" title="Auto Emailing" /><i className="fa-regular fa-message fa-fw fa-2xl" title="SMS Messenger" /><i className="fa-brands fa-whatsapp fa-fw fa-2xl" title="Whatsapp Messenger" /><i className="fa-solid fa-soap fa-fw fa-2xl" title="Screen Capture" /><i className="fa-regular fa-circle-question fa-fw fa-2xl" title="User Help-Tips" /></div><br /><br /><p align="center">Dedicated to the Nation on 11.12.2020 by MoS-MoE Hon'ble Sri Sanjay Dhotre<br />
        <b style={{"border":"1px dashed silver","border-radius":"25px","width":"50%","font-family":"verdana","letter-spacing":"2px"}}>A Cloud based ERP System for Higher Technical Institutions developed by IIIT Allahabad using MVC Pattern and Agile Lean Methodology.</b></p></div><table className="footer interface" style={{"color":"#247BBB","size":"8pt"}} title="Dr. M.K. Mishra, Mr. Prashant Kr. Srivastava, Mr. Kaushal Kr. Singh
91-532-2922011, 2922192, erp@iiita.ac.in">
      <tbody><tr><td id="xloginbar" width="40%" align="left"><mark>Please login to access athenticated resources of the ERP system.</mark></td>
          <td className="roundbar" align="center" onmouseover="document.getElementById('foot').show();" onmouseout="document.getElementById('foot').close();">Your IP <i className="fa fa-laptop fa-fw button" /> 152.59.186.235</td>
          <td id="xupdatebar" width="40%" align="right"><mark>Please avoid unauthorised access to the ERP resources. 😈</mark></td></tr>
      </tbody></table>
    <dialog id="foot" style={{"bottom":"15px","z-index":"5","-webkit-text-align":"center","text-align":"center","border":"1px dotted orange","border-radius":"25px","color":"#247BBB"}}>
      <h1>भारतीय सूचना प्रौद्योगिकी संस्थान इलाहाबाद <br />Indian Institute of Information Technology Allahabad</h1>
      <span style={{"font-size":"14px"}}>©</span> 2018, ERP&amp;A, IIIT Allahabad, Devghat, Jhalwa, Prayagraj-211015 (UP) INDIA<br />The Institute ERP system is under development by the ERP &amp; Automation Cell under supervision of Dean (TD) and technical lead of Dr. MK Mishra.<br />
      Technical Contact: <i className="fa fa-phone fa-fw fa-rotate-270" />91-532-2922011, 2922192, <i className="fa fa-envelope fa-fw" />erp@iiita.ac.in<br />
      General Contact: <i className="fa fa-phone fa-fw fa-rotate-270" />91-532-2922025, <i className="fa fa-envelope fa-fw" />contact@iiita.ac.in<br />
      Website: <i className="fa fa-globe fa-fw" /><a href="https://www.iiita.ac.in" target="_new" title="Homepage">www.iiita.ac.in</a><hr />
      <h1 className="Disabled" align="center">प्रज्ञानम् ब्रह्म<br />“That which is not different from knowledge which arises spontaneously.”</h1>
      <p align="right" className="Disabled">.............................. Aitareya Upanishad 3.3 ..............................</p></dialog>	</form>
  <i className="hidden">Developed by Dr MK Mishra</i>
</div>



    <div>
      <p>Contract Owner: {owner || "Loading..."}</p>
    </div>
    </>
  );
};

export default Home;