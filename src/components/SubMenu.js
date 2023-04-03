import React from "react";
import styles from "../assets/styles/subMenu.module.css"
import { Link } from "react-router-dom";

const SubMenu = ({isAdmin}) => {
  return <div className={styles.subMenuWrapper}>
    <Link to={"/admin-home"}>Blog operations</Link>
    {
        isAdmin && (
            <Link to={"/admin-home/category-operations"}>Category operations</Link>
        )
    }
    </div>;
};

export default SubMenu;
