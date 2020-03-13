import axios from "axios";

export default {
  allUsers: users => axios.get(`https://randomuser.me/api/?results=` + users)
};