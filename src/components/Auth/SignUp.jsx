import React, { useState } from "react";
import axios from "axios";
import api from "../utils/api";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import eye icons
import "./SignUp.scss";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const roles = ["ADMIN", "MANAGER", "EMPLOYEE"];

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [designation, setDesignation] = useState("");
  const [error, setError] = useState(""); // For handling errors
  const [loading, setLoading] = useState(false); // To show loading state
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(""); // Reset error state

    const userData = {
      name: name,
      email: email,
      designation: designation,
      role: role,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        userData,
      );
      console.log("Sign-up successful:", response.data);
      navigate("/login")
      console.log("message",response.data.message)
      // if (response.data.status) {
      //   navigate("/login")
      // }
      // Handle successful sign-up here, e.g., redirect to another page

    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Sign-up failed"); // Set error message to display
    } finally {
      setLoading(false); // Stop loading state
    }
  };

 

  return (
    <>
      <div id="signup-main">
        <Navbar />
        <div className="signup-container">
          <div className="signup-form">
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                required
                fullWidth
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
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

              <FormControl fullWidth required>
                <InputLabel>Role</InputLabel>
                <Select
                  sx={{
                    textAlign: "left",
                  }}
                  value={role}
                  onChange={handleRoleChange}
                  label="Role"
                >
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Designation"
                variant="outlined"
                value={designation}
                onChange={handleDesignationChange}
                required
                fullWidth
              />
              <Button
                className="submit-btn"
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                fullWidth
              >
                {loading ? "Signing Up..." : "SIGN UP"}
              </Button>
              {error && <Typography color="error">{error}</Typography>}
            </Box>
            <Typography>
              Already have an account? <a href="/login">Log In</a>
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

export default SignUp;
