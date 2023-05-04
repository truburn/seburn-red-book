import { Link, Outlet } from "react-router-dom";
import { RoutePaths } from "pages/router";

/**
 * Tools layout template
 */
export const Tools = () => {
  return (
    <div>
      <h1>Tools Template</h1>
      <p>
        <Link to={RoutePaths.HOME}>Return Home</Link>
      </p>
      <Outlet />
    </div>
  );
};
