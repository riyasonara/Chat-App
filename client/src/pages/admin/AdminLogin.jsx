import { useStrongPassword } from "6pp";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import adminbg from "../../assets/adminbg.jpg";
import { Navigate } from "react-router-dom";

const theme = createTheme();

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useStrongPassword();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("admin logged in");
    // Handle login or registration logic here
  };

  if (isAdmin) return <Navigate to="/admin/dashboard" />;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${adminbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.9,
        }}
      >
        <Container component="main" maxWidth="xs">
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Admin Login
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="SecretKey"
                  label="SecretKey"
                  type="password"
                  id="password"
                  value={secretKey.value}
                  onChange={secretKey.changeHandler}
                  style={{ fontWeight: "bold" }}
                />
                {secretKey.error && (
                  <Typography color="red" variant="caption">
                    {secretKey.error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AdminLogin;
