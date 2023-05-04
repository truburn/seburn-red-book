import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenCover,
  faCalculator,
  faCauldron,
  faStrawberry,
} from "@fortawesome/pro-duotone-svg-icons";
import { RoutePaths } from "pages/router";
import { homeClasses } from "./Home.styles";

/**
 * Home Page
 */
export const Home = () => {
  const classes = homeClasses();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>
        <FontAwesomeIcon icon={faCauldron} className={classes.icon} />
        <span className="title">Seburn Red Cookbook</span>
      </h1>
      <NavLink to={RoutePaths.COOKBOOK} className={classes.navLink}>
        <FontAwesomeIcon icon={faBookOpenCover} className={classes.icon} />
        <span className="link-text">The Cookbook</span>
      </NavLink>
      <NavLink to={RoutePaths.MEASUREMENT_CONVERSION} className={classes.navLink}>
        <FontAwesomeIcon icon={faCalculator} className={classes.icon} />
        <span className="link-text">Measurements Conversion Calculator</span>
      </NavLink>
      <NavLink to={RoutePaths.FRUIT_PAIRING} className={classes.navLink}>
        <FontAwesomeIcon icon={faStrawberry} className={classes.icon} />
        <span className="link-text">Fruit Pairing Chart</span>
      </NavLink>
    </div>
  );
};
