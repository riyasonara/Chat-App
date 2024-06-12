import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { grayColor } from "../constants/Color";

const Home = () => {
  return (
    <Box bgcolor={grayColor} height={"100%"}>
      <Typography padding={"2rem"} variant="h5">
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
