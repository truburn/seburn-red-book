import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Cookbook } from "./Cookbook";
import { FruitPairing } from "./FruitPairing";
import { MeasurementConversion } from "./MeasurementConversion";
import { Tools } from "../layout/Tools";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <Tools />,
    children: [
      {
        path: "cookbook",
        element: <Cookbook />,
      },
      {
        path: "fruit-pairing",
        element: <FruitPairing />,
      },
      {
        path: "measurement-conversion-calculator",
        element: <MeasurementConversion />,
      },
    ],
  },
]);
