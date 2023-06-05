import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenCover, faCalculator, faStrawberry } from "@fortawesome/pro-duotone-svg-icons";
import { RoutePaths } from "pages/router";
import { homeClasses } from "./Home.styles";
import { useEffect } from "react";

/**
 * Home Page
 */
export const Home = (props: any) => {
  const classes = homeClasses();

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div className={classes.root}>
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
