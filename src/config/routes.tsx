import { RouteObject } from "react-router-dom";
import App from "../components/App";
import Error from "../pages/Error";
import Decks from "../pages/Decks";
import Home from "../pages/Home";
import Learn from "../pages/Learn";

export const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "decks",
        element: <Decks />,
      },
      {
        path: "learn/:deckId",
        element: <Learn />,
      },
    ],
  },
];
