import React from "react";
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
function Upload() {
  return (
    <div className="main_dashboard">
      <div className="left_sideBar">
        <h2 className="d-flex justify-content-center mt-5">Base</h2>

        <div className="mt-3 ms-3  me-2">
          {" "}
          <MdDashboard /> Dashboard
        </div>
        <div className="mt-4 ms-3  me-2 btn_upload">
          {" "}
          <RiContactsBookUploadFill /> Upload
        </div>
        <div className="mt-4 ms-3  me-2">
          {" "}
          <FaFileInvoice /> Invoice
        </div>
        <div className="mt-4 ms-3  me-2">
          {" "}
          <AiFillSchedule /> Schedule
        </div>
        <div className="mt-4 ms-3  me-2">
          {" "}
          <SlCalender /> Calender
        </div>
        <div className="mt-4 ms-3  me-2">
          {" "}
          <IoNotifications /> Notification
        </div>
        <div className="mt-4 ms-3  me-2">
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

          <form className="upload_box  ">
            <div className="d-flex justify-content-center">
            <input type={"file"} id={"csvFileInput"} accept={".csv"} placeholder="" />
            
          
            </div>
            <div>
              <button className="file_up">
                <LuUpload />
                Upload
              </button>
            </div>
          </form>
 
      </div>
    </div>
  );
}

export default Upload;
