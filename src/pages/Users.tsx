import { useEffect, ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const Users: Function = (): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/users/1");
  }, []);

  return <div data-testid="home-redirect">Redirecting to User details.</div>;
};

export default Users;
