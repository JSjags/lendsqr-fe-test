import { ReactNode, ReactElement, FC } from "react";
import DashboardHeader from "../components/DashboardHeader";
import Navbar from "../components/Navbar";
import { Renderable, ChildrenProps } from "../global";
import styles from "./styles/dashboardlayout.module.scss";

const DashboardLayout: FC<Renderable> = ({
  children,
}: ChildrenProps): ReactElement => {
  return (
    <div className={styles.container}>
      <DashboardHeader />
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
