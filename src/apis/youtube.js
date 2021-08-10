import axios from "axios";

// Meant to be publically available
const KEY = "AIzaSyCM7xcwGzgYKE_3T3f471_WJdEU1GS6jEQ";

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
