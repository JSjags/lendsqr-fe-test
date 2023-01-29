import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.scss";
import logo from "../assets/logo/logo-and-text.svg";
import illustration from "../assets/login/illustration.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [errorMessage, setErrorMessage]: [
    errorMessage: { email: string; password: string },
    setErrorMessage: Function
  ] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword: CallableFunction = (e: Event): void => {
    e.preventDefault();
    if (password.length < 1) return;
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  const handleLogin: Function = (
    e: Event,
    nav: Function,
    obj: { email: string; password: string }
  ): void => {
    e.preventDefault();

    const newObj = {
      email: "",
      password: "",
    };
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!emailRegex.test(obj.email))
      newObj.email = "Please input valid email address";

    if (obj.email.trim().length < 1) newObj.email = "Please input email";

    if (obj.password.trim().length < 6)
      newObj.password = "Password must be at least 6 characters long";

    if (obj.password.trim().length < 0)
      newObj.password = "Please input password";

    if (
      JSON.stringify(newObj) ===
      JSON.stringify({
        email: "",
        password: "",
      })
    ) {
      nav("/dashboard");
    } else {
      setErrorMessage(newObj);
    }
  };

  return (
    <div className={styles.container} data-testid="login">
      <header>
        <img
          className={styles.logo}
          src={logo}
          alt="lendsqr-logo"
          aria-label="Lendsqr"
        />
      </header>
      <div className={styles.mainbox}>
        <img
          className={styles.illustration}
          src={illustration}
          alt="login illustration"
        />
        <div className={styles.form_container}>
          <h1>Welcome!</h1>
          <p className={styles.subheading}>Enter details to login.</p>
          <form>
            <div>
              <div className={styles.email}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => (e.target.value = email.trim())}
                  data-testid={"username"}
                />
              </div>
              <p className={styles.error}>{errorMessage.email}</p>
            </div>
            <div>
              <div className={styles.password}>
                <input
                  type={inputType}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={(e) => (e.target.value = password.trim())}
                  placeholder="Password"
                  data-testid={"password"}
                />
                <button onClick={(e) => handleShowPassword(e)}>SHOW</button>
              </div>
              <p className={styles.error}>{errorMessage.password}</p>
            </div>
            <p className={styles.forgot_password}>FORGOT PASSWORD?</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setErrorMessage({
                  email: "",
                  password: "",
                });
                handleLogin(e, navigate, { email, password });
              }}
              className={styles.login_btn}
              data-testid={"login-btn"}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
