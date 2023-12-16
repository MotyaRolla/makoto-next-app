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
                  <a href="https://aaio.io/" target="_blank" rel="noreferrer" style="margin: 0 0 50px 0;">
                    <img src="https://aaio.io/assets/svg/banners/big/dark-1.svg" title="Aaio - Сервис по приему онлайн платежей"/>
                  </a>
                </ul>
              </div>
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
