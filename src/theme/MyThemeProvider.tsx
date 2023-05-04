import { ReactNode } from "react";
import { ThemeProvider } from "react-jss";
import { theme } from "./index";
import { useGlobalStyles } from "./global.styles";

interface Props {
  children?: ReactNode;
}

export const MyThemeProvider = ({ children }: Props) => {
  useGlobalStyles();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
