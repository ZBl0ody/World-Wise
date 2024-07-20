import React from "react";
import AppNav from "../components/AppNav";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <AppNav />
      AppLayout
    </div>
  );
};

export default AppLayout;
