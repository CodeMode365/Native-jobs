import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_KEY2 } from "@env";

const apiKey = API_KEY2;
// console.log("API KEY:",apiKey);
const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    params: {
      ...query,
    },
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetch = async () => {
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      setData(res.data.data);
    } catch (error) {
      setError(error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetch();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
