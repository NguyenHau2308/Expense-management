import axios from "axios";

export default {
  getList: function (params) {
    return axios.get("http://localhost:8888/expense/list", { params });
  },
  create: function (params) {
    return axios.post("http://localhost:8888/expense/create", params);
  },
  update: function (params) {
    return axios.post("http://localhost:8888/expense/update", params);
  },
  delete: function (params) {
    return axios.post("http://localhost:8888/expense/delete", params);
  },
};
