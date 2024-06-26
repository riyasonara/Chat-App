import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Avatar,
  CssBaseline,
  Paper,
  Link,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgImage from "../assets/bg.jpg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useInputValidation, useStrongPassword, useFileHandler } from "6pp";
import { usernameValidator } from "../utils/Validators";
import axios from "axios";
import { server } from "../constants/Config";
import { useDispatch } from "react-redux";
import { userExists } from "../redux/reducers/auth";
import toast from "react-hot-toast";

const theme = createTheme();

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const username = useInputValidation("", usernameValidator);
  const email = useInputValidation("");
  const password = useStrongPassword();
  const avatar = useFileHandler("single", 2);
  const bio = useInputValidation("");

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoggedIn) {
      // Handle login
      const loginConfig = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.post(
          `${server}/api/v1/user/login`,
          {
            username: username.value,
            password: password.value,
          },
          loginConfig
        );
        dispatch(userExists(true));
        toast.success(data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    } else {
      // Handle registration
      const registerConfig = {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.append("username", username.value);
      formData.append("email", email.value);
      formData.append("bio", bio.value);
      formData.append("password", password.value);
      formData.append("avatar", avatar.value);

      try {
        const { data } = await axios.post(
          `${server}/api/v1/user/new`,
          formData,
          registerConfig
        );
        dispatch(userExists(true));
        toast.success(data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong");
      }
    }
  };

  const toggleLoginRegister = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
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
              {isLoggedIn && (
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
              )}

              {!isLoggedIn && (
                <Box
                  sx={{
                    position: "relative",
                    width: "10rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Box>
              )}
              {avatar.error && (
                <Typography m={"0.7rem"} color={"red"} variant="caption">
                  {avatar.error}
                </Typography>
              )}
              <Typography component="h1" variant="h5">
                {isLoggedIn ? "Sign in" : "Register"}
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
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username.value}
                  onChange={username.changeHandler}
                  style={{ fontWeight: "bold" }}
                />
                {username.error && (
                  <Typography color="red" variant="caption">
                    {username.error}
                  </Typography>
                )}
                {!isLoggedIn && (
                  <>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={email.value}
                      onChange={email.changeHandler}
                      style={{ fontWeight: "bold" }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="bio"
                      label="Bio"
                      name="bio"
                      autoComplete="bio"
                      value={bio.value}
                      onChange={bio.changeHandler}
                      style={{ fontWeight: "bold" }}
                    />
                  </>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete={
                    isLoggedIn ? "current-password" : "new-password"
                  }
                  value={password.value}
                  onChange={password.changeHandler}
                  style={{ fontWeight: "bold" }}
                />
                {password.error && (
                  <Typography color="red" variant="caption">
                    {password.error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isLoggedIn ? "Sign In" : "Register"}
                </Button>
                <Link
                  component="button"
                  variant="body2"
                  onClick={toggleLoginRegister}
                  sx={{
                    display: "block",
                    textAlign: "center",
                    mt: 2,
                    color: "black",
                  }}
                >
                  {isLoggedIn
                    ? "Don't have an account? Register"
                    : "Already have an account? Sign In"}
                </Link>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
