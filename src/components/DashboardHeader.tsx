import { ReactElement } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./styles/dashboard-header.module.scss";
import Logo from "../assets/logo/logo-and-text.svg";
import searchIcon from "../assets/dashboard/search-icon.svg";
import bellIcon from "../assets/dashboard/notification-bell.svg";
import avatar from "../assets/dashboard/avatar.svg";
import arrowDown from "../assets/dashboard/arrow-down.svg";

const DashboardHeader: Function = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className={styles.container} data-testid="header">
      <img
        className={styles.logo}
        src={Logo}
        alt="lendsqr-logo"
        onClick={() => navigate("/dashboard")}
      />
      <div className={styles.searchbox} data-testid="search-box">
        <input type="text" name="search" placeholder="Search for anything" />
        <button>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
      <div className={styles.toolsbox}>
        <Link to={"#"}>Docs</Link>
        <img className={styles.bell} src={bellIcon} alt="bell-icon" />
        <div className={styles.user_account}>
          <div className={styles.avatar_cont}>
            <img className={styles.avatar} src={avatar} alt="avatar-image" />
          </div>
          <p className={styles.username}>Adedeji</p>
          <img
            className={styles.arrow_down}
            src={arrowDown}
            alt="search-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
