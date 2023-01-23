import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.scss";
import logo from "../assets/logo/logo-and-text.svg";
import illustration from "../assets/login/illustration.svg";
import { handleLogin } from "../lib/login";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
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
          <p>Enter details to login.</p>

          <form>
            <div className={styles.email}>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className={styles.password}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button>SHOW</button>
            </div>
            <p className={styles.forgot_password}>FORGOT PASSWORD?</p>
            <button
              onClick={(e) => handleLogin(e, navigate)}
              className={styles.login_btn}
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
