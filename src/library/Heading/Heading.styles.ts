import { DefaultTheme } from "react-jss";
import { createStyles } from "theme";

export const headingStyles = createStyles("Heading", (theme: DefaultTheme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: theme.color.primary.main,
    fontWeight: theme.font.title.weight.bold,
  },
  title: {
    margin: 0,
    marginTop: theme.spacing.large,
    "&:first-child": {
      marginTop: 0,
    },
  },
  titleIcon: {},
  titleText: {},
  subtitle: {},
  subtitleIcon: {},
  subtitleText: {},
}));
