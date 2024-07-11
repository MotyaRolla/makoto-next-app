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
    path: "https://docs.makotomc.ru/pravila/obshie-pravila",
    secondPath: "",
    anchor: false,
  },

  {
    id: 4,
    title: "Вики",
    path: "https://docs.makotomc.ru/",
    secondPath: "",
    anchor: false,
  },
  {
    id: 5,
    title: "Магазин",
    path: "https://donate.makotomc.ru/",
    secondPath: "",
    anchor: false,
  },
  {
    id: 6,
    title: "Лаунчер",
    path: "https://night-world.org/",
    secondPath: "",
    anchor: false,
  }
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
      if (scrolled >= 60) {
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
        WebkitBackdropFilter:
          navbar && !burger ? "saturate(130%) blur(15px)" : "",
        backdropFilter: navbar && !burger ? "saturate(130%) blur(15px)" : "",
        background: navbar && !burger ? "rgba(20, 20, 20, 0.5)" : "",
      }}>
      <div className={styles.navbarWrapper}>
        <nav className={styles.navigation}>
          <ul className={styles.mobileNav}>
            <li>
              <Link href="/">
                <a className={styles.linkLogo}></a>
              </Link>
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

          <ul
            style={{
              overflow: burger ? "auto" : "hidden",
            }}
            className={styles.desktopNav}>
            <li>
              <Link href="/">
                <a className={styles.linkLogo}></a>
              </Link>
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

            <li
              onClick={() => {
                setBurger(false);
              }}
              className={styles.navbarButton}>
              <Button
                url="/#guide"
                bgColor="ffffff"
                textColor="111111"
                shade="light"
                padding={[8, 20]}
                fontSize={12}>
                Начать играть
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNew;
