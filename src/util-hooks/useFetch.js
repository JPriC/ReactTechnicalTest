import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Modificamos useFetch para que realice la peticiOn al json
  con la informaciOn de los meetups. */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(options.url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [options.url]);

  /* Retornamos los valores de la peticiOn, agregando
  loading y error para manejar el estado de la peticiOn */
  return {
    data,
    loading,
    error,
  };
};
