import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({
  baseURL: "http://localhost:8080/",
});
API.interceptors.request.use((req) => {
  if (Cookies.get("blood-bank")) {
    req.headers.authorization = `Bearer ${Cookies.get("blood-bank")}`;
  }
  return req;
});

//User
export const signup = (alldata) => API.post(`user/signup`, alldata);
export const signin = (alldata) => API.post(`user/login`, alldata);
export const getProfileData = (alldata) =>
  API.get(`user/getProfileData`, alldata);
export const duplicate = (alldata) => API.get(`user/duplicate`, alldata);
export const getUserType = (alldata) => API.get(`user/getUserType`, alldata);
export const profileSetup = (newdata) =>
  API.patch(`user/ProfileSetup`, newdata);
export const verifyUser = (alldata) => API.post(`user/verifyUser`, alldata);
export const getUserData = (alldata) => API.get(`user/getUserData`, alldata);
export const getHospitalData = (alldata) =>
  API.get(`user/getHospitalData`, alldata);
export const getBloodbankData = (alldata) =>
  API.get(`user/getBloodbankData`, alldata);
export const getStockData = (stock) => API.get(`bloodbank/getStockData`, stock);
export const postStockData = (stock) =>
  API.post(`bloodbank/postStockData`, stock);
export const getCount = (stock) => API.get(`user/getCount`, stock);

//Donation
export const specificData = (id) => API.get(`donation/specificData/${id}`);
export const getDonationData = (alldata) =>
  API.get(`donation/allDonationData`, alldata);
export const hospitalRequestsData = (alldata) =>
  API.get(`donation/allHospitalData`, alldata);
export const memberRequestsData = (alldata) =>
  API.get(`donation/allMemberData`, alldata);
export const bloodbankRequestsData = (alldata) =>
  API.get(`donation/allBloodbankData`, alldata);
export const bloodRequest = (alldata) => API.post(`donation/reqBlood`, alldata);
export const DonationData = (alldata) =>
  API.get(`donation/DonationData`, alldata);
export const viewRecords = (alldata) =>
  API.get(`announcement/announcementsData`, alldata);
export const addRecord = (alldata) => API.post(`bloodbank/addRecord`, alldata);
export const postAnnounce = (alldata) =>
  API.post(`announcement/postAnnouncement`, alldata);
export const createRecord = (alldata) =>
  API.post(`records/createRecord`, alldata);
export const createRequest = (alldata) =>
  API.post(`requestOrganisation/createRequest`, alldata);
export const viewRecord = (alldata) => API.get(`records/viewRecord`, alldata);
export const viewRecordUser = (alldata) =>
  API.get(`records/viewRecordUser`, alldata);
export const viewRecordOrganisation = (alldata) =>
  API.get(`records/viewRecordOrganisation`, alldata);

//Chats
export const getChats = () => API.get("chat/");
export const getChat = (id) => API.get(`chat/one/${id}`);

export const getChatMessages = (id) => API.get(`chat/messages/${id}`);

//Appointment
export const createAppointment = (details) =>
  API.post(`appointment/createAppointment`, details);
export const viewAppointments = (details) =>
  API.get(`appointment/viewAppointments`, details);
