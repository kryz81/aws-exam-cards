import { Box } from "@cloudscape-design/components";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box padding="xl" textAlign="center">
      <p>
        <strong>Page not found</strong>
      </p>
      <Link to="/">Back to home</Link>
    </Box>
  );
}
