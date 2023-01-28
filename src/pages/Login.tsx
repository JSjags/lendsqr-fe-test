import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.scss";
import logo from "../assets/logo/logo-and-text.svg";
import illustration from "../assets/login/illustration.svg";
import { handleLogin } from "../lib/login";

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowPassword: CallableFunction = (e: Event): void => {
    e.preventDefault();
    if (password.length < 1) return;
    inputType === "password" ? setInputType("text") : setInputType("password");
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

          <p className={styles.error}>{errorMessage}</p>
          <form>
            <div className={styles.email}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onBlur={(e) => (e.target.value = userName.trim())}
                data-testid={"username"}
              />
            </div>
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
            <p className={styles.forgot_password}>FORGOT PASSWORD?</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setErrorMessage("");
                if (userName.trim().length < 1 || password.trim().length < 1) {
                  return setErrorMessage("Please fill any empty field.");
                }
                handleLogin(e, navigate);
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
