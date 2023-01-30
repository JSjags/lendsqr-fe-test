import React, {
  FC,
  FunctionComponent,
  ReactComponentElement,
  useEffect,
  useState,
} from "react";
import styles from "./styles/dropdown.module.scss";
import caretDown from "../assets/dashboard/caret-down.svg";

const optionsList = ["10", "25", "50", "100"];

const Dropdown = ({
  updatePaginatedResults,
}: {
  updatePaginatedResults: any;
}) => {
  const [resultsPerPage, setResultsPerPage]: [
    resultsPerPage: string | number,
    setResultsPerPage: Function
  ] = useState(localStorage.getItem("resultsPerPage") || 10);
  const [showOptions, setShowOptions]: [
    showOptions: boolean,
    setShowOptions: Function
  ] = useState(false);

  useEffect(() => {
    !resultsPerPage && localStorage.setItem("resultsPerPage", "100");
    updatePaginatedResults(resultsPerPage);
  }, [resultsPerPage]);

  return (
    <div
      className={styles.container}
      data-testid="dropdown"
      id="dropdown"
      onClick={() => setShowOptions(!showOptions)}
    >
      <p data-testid="value">{resultsPerPage}</p>
      <img src={caretDown} alt="caret-down" />
      {showOptions && (
        <div className={styles.options}>
          {optionsList.map((option, i) => (
            <p
              key={i}
              onClick={() => {
                localStorage.setItem("resultsPerPage", option),
                  setResultsPerPage(option);
                updatePaginatedResults(option);
              }}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
