import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Cookbook } from "./Cookbook";
import { FruitPairing } from "./FruitPairing";
import { MeasurementConversion } from "./MeasurementConversion";
import { Tools } from "../layout/Tools";

export enum RoutePaths {
  HOME = "/",
  COOKBOOK = "/cookbook",
  FRUIT_PAIRING = "/fruit-pairing",
  MEASUREMENT_CONVERSION = "/measurement-conversion-calculator",
}

export const router = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    Component: Home,
  },
  {
    Component: Tools,
    children: [
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
