import { ReactElement, useRef } from "react";
import accountStatus from "../data/accountStatus.json";
import { handleStatusStyles } from "../lib/dashboard";
import styles from "./styles/user-status.module.scss";

const UserStatus: Function = (): ReactElement => {
  const length: number = accountStatus.length;
  const randomNumber: { current: number } = useRef(
    Math.floor(Math.random() * length)
  );

  return (
    <div
      className={styles.container}
      style={handleStatusStyles(accountStatus[randomNumber.current])}
    >
      <span
        style={{
          ...handleStatusStyles(accountStatus[randomNumber.current]),
          backgroundColor: "transparent",
        }}
        data-testid="status"
      >
        {accountStatus[randomNumber.current]}
      </span>
    </div>
  );
};

export default UserStatus;
