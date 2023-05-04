import { createStyles } from "utilities/theme";

export const homeClasses = createStyles("Home", {
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
