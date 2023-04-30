import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "pages/router";

/**
 * Application wrapper
 */
export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
