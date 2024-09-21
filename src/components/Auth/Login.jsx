import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import "./Login.scss";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import eye icons

import api from "../utils/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // For handling errors
  const [loading, setLoading] = useState(false); // To show loading state
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const authLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

   const handleTogglePasswordVisibility = () => {
     setShowPassword((prev) => !prev);
   };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(""); // Reset error state

    try {
      const response = await api.post("http://localhost:3000/user/login", {
        email: username,
        password,
        // rememberMe,
      });

      console.log("Login successful:", response.data);
      dispatch(loginSuccess(response?.data));
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("role", JSON.stringify(response.data.userDetails?.role) )

      navigate("/home");
      // Handle successful login here, e.g., redirect to another page
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Login failed"); // Set error message to display
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <>
      <div id="login-main">
        <Navbar />
        <div className="login-container">
          <div className="login-form">
            <Typography variant="h4" gutterBottom>
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Email"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                required
                fullWidth
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          color: "#212121",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff color="blue" />
                        ) : (
                          <Visibility color="blue" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
              >
                {loading ? "Signing In..." : "SIGN IN"}
              </Button>
              {error && <Typography color="error">{error}</Typography>}
            </Box>
            <Typography>
              Don't have an account? <a href="/signup">Sign Up</a>
            </Typography>
            <Typography className="copyright">
              Copyright &copy; AAYSTrack 2024.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
