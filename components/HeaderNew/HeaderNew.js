import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./HeaderNew.module.scss";

const navigation = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    secondPath: "",
    anchor: false,
  },
  {
    id: 2,
    title: "О нас",
    path: "/#about",
    secondPath: "",
    anchor: false,
  },
  {
    id: 3,
    title: "Правила",
    path: "/rules",
    secondPath: "",
    anchor: false,
  },

  {
    id: 4,
    title: "Вики",
    path: "/wiki",
    secondPath: "/navigator",
    anchor: false,
  },
];

const HeaderNew = () => {
  const { pathname } = useRouter();
  const pathFormatted = pathname.split("/");
  const [burger, setBurger] = useState(false);
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    document.body.style.overflow =
      burger && window.innerWidth < 768 ? "hidden" : "auto";
  }

  useEffect(() => {
    let listener = document.addEventListener("scroll", (e) => {
      let scrolled = window.scrollY;
      if (scrolled >= 120) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div
      className={` ${styles.containerNav} ${burger ? styles.active : ""} `}
      style={{
        webkitBackdropFilter:
          navbar && !burger ? "saturate(130%) blur(15px)" : "",
        backdropFilter: navbar && !burger ? "saturate(130%) blur(15px)" : "",
        background: navbar && !burger ? "rgba(20, 20, 20, 0.5)" : "",
      }}>
      <div className={styles.navbarWrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.mobileNav}>
            <li>
              <a className={styles.linkLogo} href="#"></a>
            </li>

            <li>
              <div
                onClick={() => setBurger(!burger)}
                className={styles.menuIconContainer}>
                <div className={styles.menuIcon}>
                  <span className={styles.line1}></span>
                  <span className={styles.line2}></span>
                </div>
              </div>
            </li>
          </ul>

          <ul className={styles.desktopNav}>
            <li>
              <a className={styles.linkLogo} href="#"></a>
            </li>

            {navigation.map(
              ({ id, title, path, secondPath, anchor }, index) => (
                <li
                  onClick={() => {
                    setBurger(false);
                  }}
                  key={id}>
                  <Link href={path + secondPath}>
                    <a
                      className={
                        "/" + pathFormatted[1] === path ? styles.active : null
                      }>
                      {title}
                    </a>
                  </Link>
                </li>
              )
            )}
            <Link href={"/#guide"}>
              <a>
                <Button
                  bgColor="ffffff"
                  textColor="111111"
                  shade="light"
                  padding={[8, 20]}
                  fontSize={12}>
                  Начать играть
                </Button>
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNew;
