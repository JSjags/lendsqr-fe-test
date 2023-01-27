import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Link, useParams } from "react-router-dom";
import { useFetchUserDetails } from "../hooks/useFetchUserDetails";
import styles from "../styles/user-details.module.scss";
import backArrow from "../assets/dashboard/back-arrow.svg";
import filledStar from "../assets/dashboard/filled-star.svg";
import emptyStar from "../assets/dashboard/empty-star.svg";
import userDetailsTabs from "../data/userDetailsTabs.json";
import menuBtn from "../assets/dashboard/menu-btn.svg";

const UserDetails = () => {
  const { userId } = useParams();
  const { userDetails, isLoading, error } = useFetchUserDetails(userId);
  const [currentTab, setCurrentTab] = useState("General Details");
  const [navState, setNavState] = useState(
    window.innerWidth < 1080 ? false : true
  );
  const [navMenuBtn, setNavMenuBtn] = useState(
    window.innerWidth < 1080 ? true : false
  );

  const handleMenuBtn: Function = (): void => setNavState(!navState);

  const handleTabClick: Function = (tab: string): void => {
    setCurrentTab(tab);
  };

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
          <p role="paragraph">Loading Users...</p>
        </div>
      )}
      {userDetails && Object.keys(userDetails).length && (
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
          <div className={styles.container} data-testid="user-details">
            <Link to={"/dashboard"}>
              <p className={styles.back_btn}>
                <img src={backArrow} alt="back" />
                <span>Back to Users</span>
              </p>
            </Link>
            <div className={styles.title}>
              <p className={styles.page_title}>User Details</p>
              <div className={styles.status_btns}>
                <button className={styles.blacklist}>Blacklist User</button>
                <button className={styles.activate}>Activate User</button>
              </div>
            </div>

            {/*  User account summary */}
            <div className={styles.account_summary}>
              <div className={styles.profile_top}>
                <img
                  className={styles.profile_pic}
                  src={userDetails.profile.avatar}
                  alt="avatar"
                />
                <div className={styles.profile_top_info}>
                  <div className={styles.profile_name_cont}>
                    <p
                      className={styles.profile_name}
                    >{`${userDetails.profile.firstName} ${userDetails.profile.lastName}`}</p>
                    <p className={styles.profile_id}>
                      {userDetails.profile.bvn}
                    </p>
                  </div>
                  <div className={styles.user_tier_cont}>
                    <p className={styles.tier_text}>User's Tier</p>
                    <div className={styles.tier_rating}>
                      <img src={filledStar} alt="" />
                      <img src={emptyStar} alt="" />
                      <img src={emptyStar} alt="" />
                    </div>
                  </div>
                  <div className={styles.bank_account_cont}>
                    <p className={styles.account_bal}>
                      ₦{userDetails.accountBalance}
                    </p>
                    <p className={styles.account_no}>
                      {userDetails.accountNumber}/Providus Bank
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.tabs_cont}>
                <div className={styles.tabs}>
                  {userDetailsTabs.map((tab, index) => (
                    <p
                      key={index}
                      onClick={() => handleTabClick(tab)}
                      className={
                        currentTab === tab
                          ? [styles.tab_item, styles.active_tab].join(" ")
                          : styles.tab_item
                      }
                    >
                      {tab}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {currentTab === "General Details" ? (
              <div className={styles.profile_bottom}>
                {/* Personal Information */}
                <div className={styles.section}>
                  <p className={styles.section_title}>Personal Information</p>
                  <div className={styles.section_items_cont}>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Full name</div>
                      <div
                        className={styles.section_item_value}
                        title={`${userDetails.profile.firstName} ${userDetails.profile.lastName}`}
                      >{`${userDetails.profile.firstName} ${userDetails.profile.lastName}`}</div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Phone Number
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.phoneNumber}
                      >
                        {userDetails.phoneNumber}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Email</div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.email}
                      >
                        {userDetails.email}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>BVN</div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.profile.bvn}
                      >
                        {userDetails.profile.bvn}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Gender</div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.profile.gender}
                      >
                        {userDetails.profile.gender}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Marital Status
                      </div>
                      <div className={styles.section_item_value} title="Single">
                        Single
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Children</div>
                      <div className={styles.section_item_value} title="None">
                        None
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Type of Residence
                      </div>
                      <div
                        className={styles.section_item_value}
                        title="Parent's Apartment"
                      >
                        Parent's Apartment
                      </div>
                    </div>
                  </div>
                </div>
                <hr className={styles.divider} />

                {/* Education and Employment */}
                <div className={styles.section}>
                  <p className={styles.section_title}>Personal Information</p>
                  <div className={styles.section_items_cont}>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Level of Education
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={`${userDetails.education.level} ${userDetails.profile.lastName}`}
                      >{`${userDetails.education.level} ${userDetails.profile.lastName}`}</div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Employment Status
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.education.employmentStatus}
                      >
                        {userDetails.education.employmentStatus}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Duration of Employment
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.education.duration}
                      >
                        {userDetails.education.duration}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Office email
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.education.officeEmail}
                      >
                        {userDetails.education.officeEmail}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Monthly Income
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={`₦${userDetails.education.monthlyIncome[1]} - ₦${userDetails.education.monthlyIncome[0]}`}
                      >
                        {`₦${userDetails.education.monthlyIncome[1]} - ₦${userDetails.education.monthlyIncome[0]}`}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Loan Repayment
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={`₦${userDetails.education.loanRepayment}`}
                      >{`₦${userDetails.education.loanRepayment}`}</div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Children</div>
                      <div className={styles.section_item_value} title="None">
                        None
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Type of Residence
                      </div>
                      <div
                        className={styles.section_item_value}
                        title="Parent's Apartment"
                      >
                        Parent's Apartment
                      </div>
                    </div>
                  </div>
                </div>
                <hr className={styles.divider} />

                {/* Social handles */}
                <div className={styles.section}>
                  <p className={styles.section_title}>Socials</p>
                  <div className={styles.section_items_cont}>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Twitter</div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.socials.twitter}
                      >
                        {userDetails.socials.twitter}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Facebook</div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.socials.facebook}
                      >
                        {userDetails.socials.facebook}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Instagram</div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.socials.instagram}
                      >
                        {userDetails.socials.instagram}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className={styles.divider} />

                {/* Guarantors */}
                <div className={styles.section}>
                  <p className={styles.section_title}>Socials</p>
                  <div className={styles.section_items_cont}>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>Full Name</div>
                      <div
                        className={styles.section_item_value}
                        title={`${userDetails.guarantor.firstName} ${userDetails.guarantor.lastName}`}
                      >
                        {`${userDetails.guarantor.firstName} ${userDetails.guarantor.lastName}`}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Phone Number
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={userDetails.guarantor.phoneNumber}
                      >
                        {userDetails.guarantor.phoneNumber}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Email Address
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={
                          userDetails.guarantor.email
                            ? userDetails.guarantor.email
                            : userDetails.guarantor.lastName +
                              userDetails.guarantor.firstName +
                              "@hotmail.com"
                        }
                      >
                        {userDetails.guarantor.email
                          ? userDetails.guarantor.email
                          : userDetails.guarantor.lastName +
                            userDetails.guarantor.firstName +
                            "@hotmail.com"}
                      </div>
                    </div>
                    <div className={styles.section_item}>
                      <div className={styles.section_item_title}>
                        Relationship
                      </div>
                      <div
                        className={styles.section_item_value}
                        title={
                          userDetails.guarantor.gender === "Male"
                            ? "Brother"
                            : "Sister"
                        }
                      >
                        {userDetails.guarantor.gender === "Male"
                          ? "Brother"
                          : "Sister"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.profile_bottom}>
                {/* No Data */}
                <p className={styles.no_data}>No Data to show</p>
              </div>
            )}
          </div>
        </div>
      )}
      {error && (
        <div className={styles.container}>
          <p>{error}</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default UserDetails;
