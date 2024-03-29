import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Quiz from "../pages/Quiz";
import Toy from "../pages/Toy";
import Election from "../pages/Election";
const router = createBrowserRouter([
  { path: "vision/", element: <App /> },
  { path: "vision/quiz/", element: <Quiz /> },
  { path: "vision/doll/", element: <Toy /> },
  { path: "vision/election/", element: <Election /> },
]);

export default router;
