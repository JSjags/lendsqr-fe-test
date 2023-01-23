import DashboardLayout from "../layouts/DashboardLayout";
import styles from "../styles/dashboard.module.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className={styles.container}>
        <p>Users</p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
