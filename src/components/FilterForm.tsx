import React, { useRef, useState } from "react";
import styles from "./styles/filter-form.module.scss";
import caretDown from "../assets/dashboard/caret-down.svg";
import { filterProps } from "../global";

const FilterForm: React.FC<filterProps> = ({ left, children }) => {
  const [organization, setOrganization] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("Date");
  const [phoneNumber, setPhoneNumber] = useState<number | string>();
  const [status, setStatus] = useState("");
  const filterFormRef: any = useRef();

  const resetForm: Function = (): void => {
    setOrganization("");
    setUserName("");
    setEmail("");
    setDate("Date");
    setPhoneNumber("");
    setStatus("");
  };
  (() =>
    console.log(
      left + (300 / 1440) * 100,
      window.innerWidth - (343 / 1440) * 100
    ))();
  return (
    <div
      id="filter"
      className={styles.container}
      ref={filterFormRef}
      style={left + (300 / 1440) * 100 > 800 ? { left: left - 200 } : { left }}
      data-testid="filter"
    >
      <form className={styles.form} data-testid="form">
        <div>
          <label htmlFor="organization">Organization</label>
          <div className={styles.input_cont}>
            <input
              type="text"
              id="organization"
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Organization"
              value={organization}
            />
            <img src={caretDown} alt="caret-down" />
          </div>
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <div className={styles.input_cont}>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              value={userName}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div className={styles.input_cont}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <div className={styles.input_cont}>
            <input
              type="date"
              id="date"
              placeholder={date}
              onChange={(e) => setDate(e.target.value)}
              style={
                date !== "Date"
                  ? { color: "#545f7d" }
                  : { color: "rgba(84, 95, 125, 0.7)" }
              }
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <div className={styles.input_cont}>
            <input
              type="number"
              id="phone-number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.valueAsNumber)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <div className={styles.input_cont}>
            <input
              type="text"
              id="status"
              placeholder="Status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            />
            <img src={caretDown} alt="caret-down" />
          </div>
        </div>
        <div className={styles.form_buttons}>
          <button
            className={styles.reset_btn}
            onClick={(e) => {
              e.preventDefault();
              resetForm();
            }}
          >
            Reset
          </button>
          <button className={styles.filter_btn}>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
