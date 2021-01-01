import { AppSettings, getEmoji, SettingsContext } from "../Settings";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Home, Search, Settings, Tag } from "react-feather";
import classNames from "classnames";

export default function Sidebar() {
  const settings = useContext<AppSettings>(SettingsContext);
  const emoji = getEmoji(settings);

  const c = classNames({
    "app-sidebar": !settings.sidebarCompact,
    "app-sidebar-c": settings.sidebarCompact,
  });

  const t = classNames({
    hidden: settings.sidebarCompact,
  });

  return (
    <nav className={c}>
      <section className="app-sidebar-body">
        <Link className="app-sidebar-link" to="/">
          <Home /> <span className={t}>Home</span>
        </Link>
        <Link className="app-sidebar-link" to="/tags">
          <Tag /> <span className={t}>Tags</span>
        </Link>
        <Link className="app-sidebar-link" to="/search">
          <Search /> <span className={t}>Search</span>
        </Link>
        <Link className="app-sidebar-link" to="/settings/">
          <Settings /> <span className={t}>Settings</span>
        </Link>
      </section>
      <footer
        className={classNames("app-sidebar-footer", {
          hidden: settings.sidebarCompact,
        })}
      >
        <i>Cilantro v0</i> &middot; Made with {emoji}
      </footer>
    </nav>
  );
}
