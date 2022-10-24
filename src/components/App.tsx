import { Box } from "@cloudscape-design/components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <Box padding="m">
        <Outlet />
      </Box>
    </>
  );
}
