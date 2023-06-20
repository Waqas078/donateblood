import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./Components/User/Home/Home";
import Login from "./Components/User/Login/Login";
import Dash from "./Components/User/Login/dash";
import Mainreg from "./Components/User/Reg-Log/Mainreg";
import RegisterM from "./Components/User/RegisterM/RegisterM";
import Member from "./Components/Member/Member";
import MemberDonate from "./Components/Member/MemberDonate/MemberDonate";
import DonateHospital from "./Components/Member/MemberDonate/DonateHospital";
import Donatebloodbank from "./Components/Member/MemberDonate/Donatebloodbank";
import Donateevent from "./Components/Member/MemberDonate/Donateevent";
import Status from "./Components/Member/Status/Status";
import UserProfile from "./Components/Member/UserProfile/UserProfile";
import UpdateProfile from "./Components/Member/UserProfile/updateProfile";
import Contact from "./Components/User/Contact/Contact";
import AboutMain from "./Components/User/AboutMain/AboutMain";
import DonateBlood from "./Components/Member/donateBlood/DonateBlood";
import MemberRequest from "./Components/Member/MemberRequest/MemberRequest";
import Bloodbank from "./Components/Bloodbank/Bloodbank";
import UploadBloodEvents from "./Components/Bloodbank/UploadEvents/UploadBloodEvents";
import ManageRecords from "./Components/Bloodbank/ManageBloodbank/ManageDonations/ManageRecords";
import AddD from "./Components/Bloodbank/ManageBloodbank/ManageDonations/MDonations/AddDRecords/AddD";
import ViewD from "./Components/Bloodbank/ManageBloodbank/ManageDonations/MDonations/ViewRecords/ViewD";
import StockForm from "./Components/Bloodbank/BloodStock/StockForm";
import BankProfile from "./Components/Bloodbank/BankProfile/BankProfile";
import Hospital from "./Components/Hospital/Hospital";
import StockHForm from "./Components/Hospital/BloodHStock/StockHForm";
import BloodHrequest from "./Components/Hospital/BloodHrequest/BloodHrequest";
import UploadHBloodEvents from "./Components/Hospital/UploadHEvents/UploadHBloodEvents";
import HospitalProfile from "./Components/Hospital/HospitalProfile/HospitalProfile";
import ManageHRecords from "./Components/Hospital/ManagrHRecords/ManageHRecords";
import AddH from "./Components/Hospital/ManagrHRecords/AddHRecords/AddH";
import AddRecords from "./Components/Hospital/ManagrHRecords/AddHRecords/addRecords";
import ViewH from "./Components/Hospital/ManagrHRecords/ViewHRecords/ViewH";
import RequestBH from "./Components/Hospital/BloodHrequest/RequestBH";
import ViewRecordBH from "./Components/Hospital/BloodHrequest/RecordsBH/ViewRecordBH";
import MainRequestBH from "./Components/Hospital/BloodHrequest/MainRequestBH";
import BRequestBH from "./Components/Bloodbank/BloodBrequest/BRequestBH";
import BViewRecordBH from "./Components/Bloodbank/BloodBrequest/RecordsBH/BViewRecordBH";
import MainBRequestBH from "./Components/Bloodbank/BloodBrequest/MainBRequestBH";
import BloodBrequest from "./Components/Bloodbank/BloodBrequest/BloodBrequest";
import UpdateHospitalProfile from "./Components/Hospital/HospitalProfile/UpdateHospitalProfile";
import Verification from "./Components/User/Login/Verification/Verification";
import Annoucemain from "./Components/User/Home/Annoucemain/Annoucemain";
// import AllChat from "./Components/Chat/Message/AllChat/AllChat";
//Admin
import AdminLayout from "./Components/Admin/AdminLayout/MainLayout";
import AdminDashboard from "./Components/Admin/Dashboard/Dashboard";
import AdminHospitals from "./Components/Admin/Hospitals/Hospitals";
import AdminMembers from "./Components/Admin/Members/Members";
import AdminBloodbanks from "./Components/Admin/Bloodbanks/Bloodbanks";
import AdminUploadAnnouncement from "./Components/Admin/UploadEvent/UploadEvent";
import Adminprofile from "./Components/Admin/AdminProfile/AdminProfile";

import Message from "./Components/Chat/Message/Message";
// import Navbarr from "./Components/User/NavbarandMenu/Navbarr";
// import Sidebar from "./Components/User/Sidebar/Sidebar";

function App() {
  return (
    <Routes>
      {/* Index page */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/dash" element={<Dash />}></Route>
      <Route path="/Mainreg" element={<Mainreg />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/RegisterM" element={<RegisterM />}></Route>
      <Route path="/Verification" element={<Verification />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Annoucemaine" element={<Annoucemain />}></Route>

      {/* Member page */}
      <Route path="/Member">
        <Route index element={<Member />} />
        <Route path="Chat" element={<Message />} />
        <Route path="UpdateProfile" element={<UpdateProfile />} />
        <Route path="status" element={<Status />} />
      </Route>
      <Route path="/MemberDonate/" element={<MemberDonate />}>
        <Route path="DonateHospital" element={<DonateHospital />} />
        <Route path="Donatebloodbank" element={<Donatebloodbank />} />
        <Route path="Donateevent" element={<Donateevent />} />
      </Route>
      <Route path="/UserProfile" element={<UserProfile />}></Route>
      <Route path="/MemberRequest" element={<MemberRequest />}></Route>
      <Route path="/AboutMain" element={<AboutMain />}></Route>
      <Route path="/donateBlood" element={<DonateBlood />} />
      {/* Bloodbank */}
      <Route path="/Bloodbank/" element={<Bloodbank />} />
      <Route path="/UploadBloodEvents" element={<UploadBloodEvents />} />
      <Route path="/ManageRecords" element={<ManageRecords />} />
      <Route path="/AddD" element={<AddD />} />
      <Route path="/AddRecords" element={<AddRecords />} />
      <Route path="/ViewD" element={<ViewD />} />
      <Route path="/StockForm" element={<StockForm />} />
      <Route path="/BankProfile" element={<BankProfile />}></Route>
      <Route path="/BRequestBH" element={<BRequestBH />}></Route>
      <Route path="/BViewRecordBH" element={<BViewRecordBH />}></Route>
      <Route path="/MainBRequestBH" element={<MainBRequestBH />}></Route>
      <Route path="/BloodBrequest" element={<BloodBrequest />}></Route>
      {/* Hospital */}
      <Route path="/Organisation" element={<Hospital />}></Route>
      <Route path="/StockHForm" element={<StockHForm />}></Route>
      <Route path="/BloodHrequest" element={<BloodHrequest />}></Route>
      <Route
        path="/UploadHBloodEvents"
        element={<UploadHBloodEvents />}
      ></Route>
      <Route path="/HospitalProfile" element={<HospitalProfile />}></Route>
      <Route path="/ManageHRecords" element={<ManageHRecords />}></Route>
      <Route path="/AddH" element={<AddH />}></Route>
      <Route path="/ViewH" element={<ViewH />}></Route>
      <Route path="/RequestBH" element={<RequestBH />}></Route>
      <Route path="/ViewRecordBH" element={<ViewRecordBH />}></Route>
      <Route path="/MainRequestBH" element={<MainRequestBH />}></Route>
      <Route
        path="/UpdateHospitalProfile"
        element={<UpdateHospitalProfile />}
      ></Route>
      {/* Admin */}
      <Route path="/admin/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="AdminHospitals" element={<AdminHospitals />} />
        <Route path="AdminBloodbanks" element={<AdminBloodbanks />} />
        <Route path="AdminMembers" element={<AdminMembers />} />
        <Route path="Adminprofile" element={<Adminprofile />} />
        <Route
          path="AdminUploadAnnouncement"
          element={<AdminUploadAnnouncement />}
        />
      </Route>
      {/* "@fortawesome/fontawesome-svg-core": "^6.2.0",
      "@fortawesome/free-regular-svg-icons": "^6.2.0",
      "@fortawesome/free-solid-svg-icons": "^6.2.0",
      "@fortawesome/react-fontawesome": "^0.2.0",
      "@fortawesome/sharp-solid-svg-icons": "^6.2.0", */}
    </Routes>
  );
}

export default App;
