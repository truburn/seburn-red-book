import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Cookbook } from "./Cookbook";
import { FruitPairing } from "./FruitPairing";
import { MeasurementConversion } from "./MeasurementConversion";
import { AppLayout } from "layout";

export enum RoutePaths {
  HOME = "/",
  COOKBOOK = "/cookbook",
  FRUIT_PAIRING = "/fruit-pairing",
  MEASUREMENT_CONVERSION = "/measurement-conversion-calculator",
}

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: RoutePaths.HOME,
        Component: Home,
      },
      {
        path: RoutePaths.COOKBOOK,
        Component: Cookbook,
      },
      {
        path: RoutePaths.FRUIT_PAIRING,
        Component: FruitPairing,
      },
      {
        path: RoutePaths.MEASUREMENT_CONVERSION,
        Component: MeasurementConversion,
      },
    ],
  },
]);
