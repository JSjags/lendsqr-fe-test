import { useEffect, useState } from "react";
import { userDetailsState, usersState } from "../global";

export const useFetchUserDetails: Function = (userId: number): object => {
  const cachedUserDetails: object = JSON.parse(
    localStorage.getItem(`lendsqUser-${userId}`) || "{}"
  );

  const [userDetails, setUserDetails]: userDetailsState = useState<
    object | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // reset states
    setIsLoading(false);
    setError("");

    const fetchAllUsers: Function = (id: number): void => {
      setIsLoading(true);
      fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
        .then((result) => result.json())
        .then((userData) => {
          if (userData === "Something went wrong while parsing response JSON") {
            throw new Error("User details not found.");
          } else {
            setUserDetails(userData);
            localStorage.setItem(
              `lendsqUser-${userId}`,
              JSON.stringify(userData)
            );
          }
        })
        .catch((error) => {
          if (error.message === "User details not found.") {
            setError("User details not found.");
          } else {
            setError("Error fetching data, please check your network.");
          }
        })
        .finally(() => setIsLoading(false));
    };

    Object.keys(cachedUserDetails).length
      ? setUserDetails(cachedUserDetails)
      : fetchAllUsers(userId);
  }, []);

  return { userDetails, isLoading, error };
};
