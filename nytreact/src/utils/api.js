import axios from "axios";

export default {
  getArticles: function(query, start, end) {
    return axios.get("/api/articles", { params: { q: query } });
  }
};