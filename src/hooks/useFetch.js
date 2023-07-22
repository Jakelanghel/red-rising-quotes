import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMsg, setErrorMsg] = useState("");

  const fetchData = async (apiUrl) => {
    setIsLoading(true);
    setApiError(false);
    setErrorMsg("");

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("API Error");
      }
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setApiError(true);
      setErrorMsg("Something went wrong with the API. Please try again later.");
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return { data, fetchData, isLoading, apiError, apiErrorMsg };
};
