import { ReactElement } from "react";
import styles from "./styles/navbar.module.scss";
import navbarData from "../data/navbarLinks.json";
// import assets

const Navbar = (): ReactElement => {
  const getIcon: Function = (): string => ``;
  return (
    <div className={styles.container} data-testid="navbar">
      <div className={styles.uppersection}>
        <div className={styles.section_navlink_org}>
          <img
            className={styles.icon}
            src={`/navbar/switch-organization.svg`}
          />
          <p>Switch Organization</p>
          <img className={styles.icon} src={`/navbar/caret-down.svg`} />
        </div>
        <div className={styles.section_navlink}>
          <img className={styles.icon} src={`/navbar/dashboard.svg`} />
          <p>Dashboard</p>
        </div>
      </div>

      {Object.entries(navbarData).map((navSection, index) => (
        <div key={index} className={styles.section}>
          <p className={styles.section_header}>{navSection[0]}</p>
          {navSection[1].map((navLink, ind) => (
            <div
              key={navLink}
              className={
                navLink.toLocaleLowerCase() === "users"
                  ? styles.section_active_navlink
                  : styles.section_navlink
              }
            >
              <img
                className={styles.icon}
                src={`/navbar/${navLink
                  .toLowerCase()
                  .split(" ")
                  .join("-")}.svg`}
              />

              <p>{navLink}</p>
            </div>
          ))}
        </div>
      ))}
      <hr className={styles.divider} />
      <div className={styles.section_navlink_org}>
        <img className={styles.icon} src={`/navbar/logout.svg`} />
        <p>Logout</p>
      </div>
      <p className={styles.version}>v1.2.0</p>
    </div>
  );
};

export default Navbar;
