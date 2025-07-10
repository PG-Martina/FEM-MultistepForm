import {
  createHashRouter, // changed from createBrowserRouter
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./styles/main.scss";
import { Paths } from "./constants/Paths";
import Layout from "./components/Layout/Layout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={Paths.Step1} replace /> },
        { path: Paths.Step1, element: <Step1 /> },
        { path: Paths.Step2, element: <Step2 /> },
        { path: Paths.Step3, element: <Step3 /> },
        { path: Paths.Step4, element: <Step4 /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
