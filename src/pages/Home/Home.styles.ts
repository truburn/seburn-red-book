import { createStyles } from "theme";

export const homeClasses = createStyles("Home", {
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  navLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
  },
  icon: {
    height: "1.25em",
    marginRight: "0.5em",
  },
});
