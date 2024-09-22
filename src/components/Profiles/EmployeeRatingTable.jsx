import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import api from "../utils/api"; // Ensure the import path is correct

const EmployeeRatingTable = ({ employees, projectId }) => {
  const [ratings, setRatings] = useState([]);
  console.log("this is project id", projectId);

  // Initialize ratings when employees prop changes
  useEffect(() => {
    const newRatings = employees.map((employee) => ({
      employeeId: employee.employeeId,
      rating: "",
      feedback: "",
    }));
    setRatings(newRatings);
  }, [employees]);

  const handleChange = (index, field, value) => {
    const newRatings = [...ratings];
    newRatings[index][field] = field === "rating" ? Number(value) : value; // Convert rating to number
    setRatings(newRatings);
  };

  const handleSubmit = async (employeeId) => {
    const employeeRating = ratings.find((r) => r.employeeId === employeeId);
    console.log("Submitting rating for employee:", employeeRating);

    try {
      await api.post(`user/project/${projectId}/rate`, {
        employeeRatings: [employeeRating],
      });
      alert("Rating submitted successfully for " + employeeRating.employeeId);

      // Reset the rating after submission
      setRatings((prevRatings) =>
        prevRatings.map((r) =>
          r.employeeId === employeeId ? { ...r, rating: "", feedback: "" } : r
        )
      );
    } catch (error) {
      console.error("Error submitting rating:", error.response?.data || error);
      alert("Failed to submit rating for " + employeeRating.employeeId);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Review</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={employee.employeeId}>
              <TableCell>{employee.employee.name}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  inputProps={{ min: 1, max: 5 }} // Assuming rating scale is 1-5
                  value={ratings[index]?.rating || ""}
                  onChange={(e) =>
                    handleChange(index, "rating", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  multiline
                  rows={2}
                  value={ratings[index]?.feedback || ""}
                  onChange={(e) =>
                    handleChange(index, "feedback", e.target.value)
                  }
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSubmit(employee.employeeId)}
                >
                  Submit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeRatingTable;
