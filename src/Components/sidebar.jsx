import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.name}>MASI</h1>

      <div className={styles.links}>
        <Link to="/aboutme">About Me</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/partnership"}>Partnership</Link>
        <Link>Resume</Link>
      </div>
    </div>
  );
}

export default Sidebar;