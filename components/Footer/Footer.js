import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerContentWrapper}>
            <div className={styles.footerLogoWrapper}>
              <div className={styles.footerLogoImage} />
              <div className={styles.footerLogoName}>MAKOTO</div>
            </div>

            <div className={styles.footerDescription}>
              Майнкрафт, который мы заслужили
            </div>

            <div className={styles.footerLine}></div>

            <div className={styles.footerNavWrapper}>
              <div className={styles.footerNavBlock}>
  <meta name="enot" content="ec4f7465" />
                <h4 className={styles.footerNavTitle}>Навигация</h4>
                <ul className={styles.footerNavList}>
                  <li className={styles.footerNavItem}>
                    <Link href="/">
                      <a className={styles.footerNavLink}>Главная</a>
                    </Link>
                  </li>
                  <li className={styles.footerNavItem}>
                    <Link href="/#about">
                      <a className={styles.footerNavLink}>О нас</a>
                    </Link>
                  </li>
                  <li className={styles.footerNavItem}>
                    <Link href="/rules">
                      <a className={styles.footerNavLink}>Правила</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.footerNavBlock}>
                <h4 className={styles.footerNavTitle}>Контакты</h4>
                <ul className={styles.footerNavList}>
                  <li className={styles.footerNavItem}>
                    <div className={styles.footerNavIcon} />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://discord.com/invite/yzBCF4V"
                      className={styles.footerNavLink}>
                      Дискорд
                    </a>
                  </li>
                  <li className={styles.footerNavItem}>
                    <div className={styles.footerNavIcon} />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://vk.com/makotomc"
                      className={styles.footerNavLink}>
                      ВКонтакте
                    </a>
                  </li>
                </ul>
              </div>
                        <a href="https://mc-monitor.org/server/18872" target="_blank">
                          <img src="https://mc-monitor.org/img/new-buttons/bagic-v4_06.jpg" alt="Сервера Майнкрафт на mc-monitor.org">
                        </img>
                        </a>
            </div>
            <div className={styles.footerCopyright}>
              Copyright 2022 Makoto. All rights reserved.
            </div>
            <div className={styles.author}>
              Created by{" "}
              <a
                href="https://github.com/solodovnykov"
                target="_blank"
                rel="noreferrer">
                solodovnykov
              </a>
            </div>
          </div>
          <div className={styles.footerImage} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
