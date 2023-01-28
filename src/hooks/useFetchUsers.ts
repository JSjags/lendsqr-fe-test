import { useEffect, useState } from "react";
import { usersState } from "../global";
import { calculatePages } from "../lib/dashboard";

export const useFetchUsers: Function = (): object => {
  const cachedUsers: object[] | {} = JSON.parse(
    localStorage.getItem("lendsqUsers") || "{}"
  );
  const resultsPerPage: string | number =
    localStorage.getItem("lendsqResultsPerPage") || 100;

  const [users, setUsers]: usersState = useState([]);
  const [pages, setPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // reset states
    setIsLoading(false);
    setError("");

    const fetchAllUsers: Function = (): void => {
      setIsLoading(true);
      fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users ")
        .then((result) => result.json())
        .then((usersData) => {
          setUsers(usersData);
          setPages(calculatePages(usersData.length, resultsPerPage));
          localStorage.setItem("lendsqUsers", JSON.stringify(usersData));
        })
        .catch((error) =>
          setError("Error fetching data, please check your network.")
        )
        .finally(() => setIsLoading(false));
    };
    Object.keys(cachedUsers).length > 0
      ? setUsers(cachedUsers)
      : fetchAllUsers();
    setPages(calculatePages(Object.keys(cachedUsers).length, resultsPerPage));
  }, []);

  return { users, pages, isLoading, error };
};
