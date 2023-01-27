import { ReactNode, ReactElement, FC, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar";
import { Renderable, ChildrenProps } from "../global";
import styles from "./styles/dashboardlayout.module.scss";

const DashboardLayout: FC<Renderable> = ({
  children,
  navState,
  handleMenuBtn,
}: ChildrenProps): ReactElement => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <main>
        <Navbar navState={navState} />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
