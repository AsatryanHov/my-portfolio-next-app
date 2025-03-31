// "use client"; // Required for client-side interactivity

// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Updated for Next.js 15
// import styles from "./NavBar.module.css";

// const NavBar = () => {
//   const pathname = usePathname(); // New way to get the current path

//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.navList}>
//         <li className={pathname === "/" ? styles.active : ""}>
//           <Link href="/" className={styles.link}>
//             Main
//           </Link>
//         </li>
//         <li className={pathname === "/education" ? styles.active : ""}>
//           <Link href="/education" className={styles.link}>
//             Education
//           </Link>
//         </li>
//         <li className={pathname === "/portfolio" ? styles.active : ""}>
//           <Link href="/portfolio" className={styles.link}>
//             Portfolio
//           </Link>
//         </li>
//         <li className={pathname === "/contacts" ? styles.active : ""}>
//           <Link href="/contacts" className={styles.link}>
//             Contacts
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
"use client"; // Необходимо для интерактивности на стороне клиента

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Обработка изменения размера окна для определения мобильного вида
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Начальная проверка
    checkIfMobile();

    // Добавление слушателя событий
    window.addEventListener("resize", checkIfMobile);

    // Очистка
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Закрытие боковой панели при клике вне её
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(`.${styles.navbar}`) &&
        !event.target.closest(`.${styles.hamburger}`)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Закрытие боковой панели при изменении маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка гамбургер-меню для мобильных устройств */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleSidebar}
        aria-label="Переключить меню навигации">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Оверлей для мобильных устройств при открытой боковой панели */}
      {isOpen && isMobile && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      {/* Навигация */}
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link href="/" className={styles.link}>
              Main
            </Link>
          </li>
          <li className={pathname === "/education" ? styles.active : ""}>
            <Link href="/education" className={styles.link}>
              Education
            </Link>
          </li>
          <li className={pathname === "/portfolio" ? styles.active : ""}>
            <Link href="/portfolio" className={styles.link}>
              Portfolio
            </Link>
          </li>
          <li className={pathname === "/contacts" ? styles.active : ""}>
            <Link href="/contacts" className={styles.link}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
