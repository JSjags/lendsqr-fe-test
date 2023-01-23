import { ReactNode, ReactElement, FC } from "react";
import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout: FC = (props): ReactElement => {
  return (
    <>
      <DashboardHeader />
    </>
  );
};

export default DashboardLayout;
