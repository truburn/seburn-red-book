import { Link, Outlet } from "react-router-dom";
import { RoutePaths } from "pages/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCauldron } from "@fortawesome/pro-duotone-svg-icons";
import { faCopyright } from "@fortawesome/pro-regular-svg-icons";
import { appClasses } from "./AppStyles";

/**
 * Application layout template
 */
export const AppLayout = () => {
  const classes = appClasses();

  return (
    <>
      <header className={classes.header}>
        <Link to={RoutePaths.HOME}>
          <FontAwesomeIcon icon={faCauldron} className={classes.headerIcon} />
          Our Red Cookbook
        </Link>
      </header>
      <div className={classes.content}>
        <Outlet />
      </div>
      <footer className={classes.footer}>
        <FontAwesomeIcon icon={faCopyright} /> 2023 The Seburn Family
      </footer>
    </>
  );
};
