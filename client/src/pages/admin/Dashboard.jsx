/* eslint-disable react/prop-types */
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Group as GroupIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import moment from "moment";
import AdminLayout from "../../components/layout/AdminLayout";
import {
  CurvedButton,
  SearchField,
} from "../../components/styles/StyledComponents";
import { LineChart, DoughnutChart } from "../../components/specific/Charts";

const Dashboard = () => {
  const AppBar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="Search..." />
        <CurvedButton variant="contained">Search</CurvedButton>
        <Box flexGrow={1} />
        <Typography
          display={{
            xs: "none",
            lg: "block",
          }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("dddd, D MMMM YYYY")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"2rem 0"}
      spacing={"2rem"}
    >
      <Widget title={"Users"} value={33} Icon={<PersonIcon />} />
      <Widget title={"Chats"} value={10} Icon={<GroupIcon />} />
      <Widget title={"Messages"} value={100} Icon={<MessageIcon />} />
    </Stack>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>
        {AppBar}
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          sx={{ gap: "2rem" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={{ xs: "center", lg: "stretch" }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 1rem", // Increase padding to make chart area larger
              borderRadius: "1rem",
              width: { xs: "100%", sm: "50%" }, // Increase width for larger chart area
              maxWidth: "45rem", // Increase max width for larger chart area
            }}
          >
            <Typography>Last Messages</Typography>
            <LineChart value={[0, 3, 8, 20, 3, 12]} />
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",
              maxWidth: "25rem",
            }}
          >
            <DoughnutChart
              labels={["Single Chats", "Group Chats"]}
              value={[23, 66]}
            />
            <Stack
              position={"absolute"}
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={"0.5rem"}
              width={"100%"}
              height={"100%"}
            >
              <GroupIcon /> <Typography>Vs</Typography> <PersonIcon />
            </Stack>
          </Paper>
        </Stack>

        {Widgets}
      </Container>
    </AdminLayout>
  );
};

const Widget = ({ title, value, Icon }) => (
  <Paper
    elevation={3}
    sx={{
      padding: "2rem",
      margin: "2rem 0",
      borderRadius: "1.5rem",
      width: "20rem",
    }}
  >
    <Stack alignItems={"center"} spacing={"1rem"}>
      <Typography
        sx={{
          color: "rgba(0,0,0,0.7)",
          borderRadius: "50%",
          border: "5px solid rgba(0,0,0,0.9)",
          width: "5rem",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value}
      </Typography>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        {Icon}
        <Typography>{title}</Typography>
      </Stack>
    </Stack>
  </Paper>
);
export default Dashboard;
