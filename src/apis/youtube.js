import axios from "axios";

// Meant to be publically available
const KEY = "AIzaSyBfPZP6cnKtC1jN4kb6eQlqj3Lhl0HBzXc";

const youtube = {
  create: axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
      part: "snippet",
      maxResults: 10,
      key: KEY,
    },
  }),
  search: function (query) {
    console.log(`search`, this);
    return this.create.get("/search", {
      params: {
        q: query,
      },
    });
  },
};

export default youtube;
