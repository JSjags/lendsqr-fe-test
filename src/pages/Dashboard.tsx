import { Fragment, useEffect, useRef, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import styles from "../styles/dashboard.module.scss";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { Link } from "react-router-dom";
import usersSummary from "../data/usersSummary.json";
import {
  pageNumberState,
  userMenuObject,
  userMenuState,
  userObject,
} from "../global";
import UserStatus from "../components/UserStatus";
import { formatDate, handleUserMenu } from "../lib/dashboard";

import tableHeadIcon from "../assets/dashboard/table-head-icon.svg";
import userDetailsIcon from "../assets/dashboard/user-details-icon.svg";
import Dropdown from "../components/Dropdown";
import caretDown from "../assets/dashboard/caret-down.svg";
import viewIcon from "../assets/dashboard/view.svg";
import blaclistIcon from "../assets/dashboard/blacklist.svg";
import activateIcon from "../assets/dashboard/activate.svg";
import FilterForm from "../components/FilterForm";
import menuBtn from "../assets/dashboard/menu-btn.svg";

const Dashboard = () => {
  const [pageNumber, _]: pageNumberState = useState(1);
  const [userMenu, setUserMenu]: userMenuState = useState<userMenuObject>({
    menuId: null,
    menuIsOpen: false,
  });
  const [showFilter, setShowFilter] = useState<{
    currentTab: string;
    showFilter: boolean;
  }>({ currentTab: "", showFilter: false });
  const currentUserMenuIndex: { current: null | number } = useRef(null);
  const filterPosition = useRef(20);
  const pageRef: any = useRef(null);
  const { users, pages, isLoading, error } = useFetchUsers();

  const handleFilter: Function = (e: any, currentTab: string): void => {
    userMenu.menuIsOpen && setUserMenu({ menuId: null, menuIsOpen: false });
    filterPosition.current =
      e.clientX - (pageRef.current.offsetLeft + (900 / 1440) * 100);
    console.log(e);

    if (showFilter.showFilter === false) {
      setShowFilter({
        currentTab,
        showFilter: true,
      });
    } else if (showFilter.showFilter === true) {
      if (currentTab === showFilter.currentTab) {
        return setShowFilter({
          currentTab,
          showFilter: false,
        });
      }
      return setShowFilter({
        currentTab,
        showFilter: true,
      });
    }
  };
  const [navMenuBtn, setNavMenuBtn] = useState(
    window.innerWidth < 1080 ? true : false
  );

  const [navState, setNavState] = useState(
    window.innerWidth < 1080 ? false : true
  );

  const handleMenuBtn: Function = (): void => setNavState(!navState);

  useEffect(() => {
    document.addEventListener("click", (e: Event) => {
      const path: any[] = e.composedPath();

      // Close filter if user clicks on any part of the screen that is not the pop-up menu or the user menu button
      if (
        path.some((element) => element.id === "filter") ||
        path.some((element) => element.id === "table_head")
      ) {
        return;
      } else {
        setShowFilter({ currentTab: "", showFilter: false });
      }

      // Close user menu if user clicks on any part of the screen that is not the pop-up menu or the user menu button
      if (
        path.some((element) => element.id === "user_menu") ||
        path.some((element) => element.id === "user_menu_btn")
      ) {
        return;
      } else {
        setUserMenu({ menuId: null, menuIsOpen: false });
      }
    });

    return () => {
      document.removeEventListener("click", (e: Event) => {
        const path: any[] = e.composedPath();

        if (
          userMenu.menuIsOpen === true &&
          path.some((element) => element?.id === "user_menu")
        )
          return;

        // Close user menu if user clicks on any part of the screen that is not the pop-up menu or the user menu button
        userMenu.menuIsOpen === true &&
          !path.some((element) => element?.id === "user_menu_btn") &&
          setUserMenu({ menuId: null, menuIsOpen: false });
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e: UIEvent) => {
      const w = e.target as Window;
      setNavMenuBtn(w.innerWidth < 1080 ? true : false);
      navState === false && w.innerWidth > 1080 && setNavState(true);
    });

    return () => {
      window.removeEventListener("resize", (e: UIEvent) => {
        const w = e.target as Window;
        setNavMenuBtn(w.innerWidth < 1080 ? true : false);
        navState === false && w.innerWidth > 1080 && setNavState(true);
      });
    };
  }, []);

  return (
    <DashboardLayout
      data-testid="dashboard"
      handleMenuBtn={handleMenuBtn}
      navState={navState}
    >
      {isLoading && (
        <div className={styles.container}>
          <p>Loading Users...</p>
        </div>
      )}

      {error && (
        <div className={styles.container}>
          <p>{error}</p>
        </div>
      )}

      {/* Display dashboard  */}
      {users && users.length > 0 && (
        <div className={styles.superior_cont}>
          {navMenuBtn && (
            <button
              className={styles.menu_btn}
              onClick={() => handleMenuBtn()}
              title="Menu"
            >
              <img src={menuBtn} alt="" />
            </button>
          )}
          <div className={styles.container} ref={pageRef}>
            <p className={styles.page_title}>Users</p>

            {/* Users summary section */}
            <div className={styles.users_summary_cont}>
              <div className={styles.users_summary}>
                {usersSummary.map((info, index) => (
                  <div key={index} className={styles.users_summary_card}>
                    <div
                      className={styles.icon_cont}
                      style={{ backgroundColor: info["icon-bg-color"] }}
                    >
                      <img
                        src={`/account_summary/${info.summary_name
                          .toLocaleLowerCase()
                          .split(" ")
                          .join("-")}.svg`}
                        alt="icon"
                      />
                    </div>
                    <p className={styles.summary_title}>{info.summary_name}</p>
                    <p className={styles.summary_value}>
                      {info.value.toLocaleString("en-US")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Users table */}

            <div className={styles.table_cont} data-testid="users-table">
              <div className={styles.table}>
                {/* Filter form */}
                {showFilter.showFilter && (
                  <FilterForm left={filterPosition.current} />
                )}

                {/* Users table */}
                <table cellSpacing={0} role="table">
                  <tr>
                    <th>
                      <span
                        onClick={(e) => handleFilter(e, "organization")}
                        id="table_head"
                      >
                        organization
                        <img src={tableHeadIcon} />
                      </span>
                    </th>
                    <th>
                      <span
                        onClick={(e) => handleFilter(e, "username")}
                        id="table_head"
                      >
                        username
                        <img src={tableHeadIcon} />
                      </span>
                    </th>
                    <th>
                      <span
                        onClick={(e) => handleFilter(e, "email")}
                        id="table_head"
                      >
                        email
                        <img src={tableHeadIcon} />
                      </span>
                    </th>
                    <th>
                      <span
                        onClick={(e) => handleFilter(e, "phone number")}
                        id="table_head"
                      >
                        phone number
                        <img src={tableHeadIcon} />
                      </span>
                    </th>
                    <th>
                      <span
                        onClick={(e) => handleFilter(e, "date joined")}
                        id="table_head"
                      >
                        date joined
                        <img src={tableHeadIcon} />
                      </span>
                    </th>
                    <th>
                      <span
                        onClick={(e) => handleFilter(e, "status")}
                        id="table_head"
                      >
                        status
                        <img src={tableHeadIcon} />
                      </span>
                    </th>
                    <th></th>
                  </tr>
                  <tbody data-testid="table-body">
                    {users.map((user: userObject, index: number) => (
                      <Fragment key={index}>
                        <tr
                          style={{
                            boxShadow: "0 1px rgba(33, 63, 125, 0.1)",
                          }}
                        >
                          <td>
                            <span
                              className={[
                                styles.table_data,
                                styles.orgName,
                              ].join(" ")}
                            >
                              {user.orgName}
                            </span>
                          </td>
                          <td>
                            <span className={styles.table_data}>
                              {user.userName}
                            </span>
                          </td>
                          <td>
                            <span className={styles.table_data}>
                              {user.email}
                            </span>
                          </td>
                          <td>
                            <span className={styles.table_data}>
                              {user.phoneNumber}
                            </span>
                          </td>
                          <td>
                            <span className={styles.table_data}>
                              {formatDate(new Date(user.createdAt))}
                            </span>
                          </td>
                          <td>
                            <span className={styles.table_data}>
                              <UserStatus />
                            </span>
                          </td>
                          <td
                            className={styles.action_btn_col}
                            style={{ position: "relative" }}
                          >
                            {/* User menu */}
                            {userMenu.menuId === index &&
                              userMenu.menuIsOpen && (
                                <div
                                  className={styles.user_menu}
                                  id="user_menu"
                                >
                                  <Link to={`/dashboard/users/${index + 1}`}>
                                    <p>
                                      <img src={viewIcon} alt="view" />
                                      <span className={styles.link_text}>
                                        View Details
                                      </span>
                                    </p>
                                  </Link>
                                  <p>
                                    <img src={blaclistIcon} alt="blacklist" />
                                    <span>Blacklist User</span>
                                  </p>
                                  <p>
                                    <img src={activateIcon} alt="activate" />
                                    <span>Activate User</span>
                                  </p>
                                </div>
                              )}
                            <button
                              id="user_menu_btn"
                              data-index={index}
                              onClick={() => {
                                currentUserMenuIndex.current = index;
                                showFilter.showFilter &&
                                  setShowFilter({
                                    currentTab: "",
                                    showFilter: false,
                                  });
                                setUserMenu(handleUserMenu(index, userMenu));
                              }}
                            >
                              <img src={userDetailsIcon} alt="more details" />
                            </button>
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination Bar */}
            <div className={styles.pagination_bar}>
              <div>
                <span>Showing</span> <Dropdown /> <span>out of 100</span>
              </div>
              <div className={styles.pagination_cont}>
                <div
                  className={
                    pageNumber === 1
                      ? styles.pagination_btn
                      : styles.pagination_btn_active
                  }
                >
                  <img className={styles.left} src={caretDown} alt="previous" />
                </div>
                <div className={styles.page_num_cont}>
                  <button className={styles.page_num_btn_active}>1</button>
                  <button className={styles.page_num_btn}>2</button>
                  <span className={styles.ellipses}>...</span>
                  <button className={styles.page_num_btn}>4</button>
                  <button className={styles.page_num_btn}>5</button>
                </div>
                <div
                  className={
                    pageNumber + 1 > pages
                      ? styles.pagination_btn
                      : styles.pagination_btn_active
                  }
                >
                  <img className={styles.right} src={caretDown} alt="next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
