import React, { useState } from "react";
import "../../Pages/Upload/Upload.css";
import { MdDashboard } from "react-icons/md";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiFillSchedule } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { LuUpload } from "react-icons/lu";
import { Table } from "react-bootstrap";

function Upload() {
  //state  to hold csv file
  const [file, setFile] = useState();
  //state to  hold uploaded csv file
  const [csvArray, setCsvArray] = useState([]);
  const fileReader = new FileReader();

  //function
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  //convert csv file to readable format
  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    const csvArray = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    setCsvArray(csvArray);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = (e) => {
        const csvOutput = e.target.result;
        csvFileToArray(csvOutput);
        console.log(csvOutput);
      };
      fileReader.readAsText(file);
    }
  };
  const headerKeys = Object.keys(Object.assign({}, ...csvArray));
  return (
    <div className="main_dashboard">
      <div className="left_sideBar">
        <h2 className="d-flex justify-content-center mt-5">Base</h2>

        <div className="mt-3 ms-3  me-2 btn_upload">
          {" "}
          <MdDashboard /> Dashboard
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload ">
          {" "}
          <RiContactsBookUploadFill /> Upload
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload">
          {" "}
          <FaFileInvoice /> Invoice
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload">
          {" "}
          <AiFillSchedule /> Schedule
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload">
          {" "}
          <SlCalender /> Calender
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload">
          {" "}
          <IoNotifications /> Notification
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload">
          {" "}
          <IoMdSettings /> Settings
        </div>
      </div>
      <div className="right_main">
        <div className="flex-direction-column d-flex justify-content-between">
          <h1 className="ms-4 mt-5">Upload CSV </h1>
          <h1>
            {" "}
            <IoNotifications className="mt-5 me-3" />{" "}
            <FaUserCircle className="mt-5 me-4" />
          </h1>
        </div>

        <form className="upload_box ">
          <div className="d-flex justify-content-center">
            <input
              className="input_csv"
              type={"file"}
              id={"csvFileInput"}
              accept={".csv"}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="file_up"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              <LuUpload />
              Upload
            </button>
          </div>
        </form>
        <br />
        <h2 className="list_csv">Uploads</h2>

        <table class="table table-striped">
          <thead>
            <tr key={"header"} >
              {headerKeys.map((key) => (
                <th key={key}  scope="col" >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvArray.map((item) => (
              <tr key={item.id}>
              
                {Object.values(item).map((val, index) => (
                  <td key={index}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Upload;
