import axios from "axios";

const searchImages = async (term) => {
  const url = "https://api.unsplash.com/search/photos";
  const accessKey = "8gM6vt3ryUb7caSvWkjvsDeZnodxKambzCxnZ3VZTZs";

  const response = await axios.get(url, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
