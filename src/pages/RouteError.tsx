import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import styles from "../styles/route-error.module.scss";

import menuBtn from "../assets/dashboard/menu-btn.svg";

const RouteError = () => {
  const pageRef: any = useRef(null);

  const [navMenuBtn, setNavMenuBtn] = useState(
    window.innerWidth < 1080 ? true : false
  );

  const [navState, setNavState] = useState(
    window.innerWidth < 1080 ? false : true
  );

  const handleMenuBtn: Function = (): void => setNavState(!navState);

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
          <p className={styles.page_title} data-testid="route error">
            OOOPs, We couldn't find that page.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RouteError;
