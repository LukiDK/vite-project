import styles from "./nav.module.scss";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" className={styles.logo}>
            LOGO
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: "orange" }}>
            About
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
