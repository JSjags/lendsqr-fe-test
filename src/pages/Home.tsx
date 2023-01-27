import { useEffect, ReactElement } from "react";
import { useNavigate } from "react-router-dom";

const Home: Function = (): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return <div data-testid="home-redirect">Redirecting to login Page.</div>;
};

export default Home;
