import React, { useRef, useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../../constants/routePath";

export default function Header() {
  let headerRoot = useRef();
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        headerRoot?.current?.classList?.remove("header-remove");
      } else if (y < window.scrollY) {
        headerRoot?.current.classList?.add("header-remove");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <header ref={headerRoot} className="header-root">
      <div className="header-wrapper">
        <div className="header-container">
          <NavLink to={ROUTES.HOME} className="logo-item">
            <img src="/assets/img/logo.png" alt="Header Logo" />
          </NavLink>
          <div className="text-item">
            <h3>Humor Picture</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
