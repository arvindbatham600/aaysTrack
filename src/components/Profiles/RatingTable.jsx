import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import api from "../utils/api";

const RatingsTable = ({ rating }) => {
  const [ratingsWithEmployeeNames, setRatingsWithEmployeeNames] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchEmployeeDetails = async (employeeId) => {
    try {
      const response = await api.get(`/user/getUserDetails/${employeeId}`);
      return response.data?.userDetails?.name || "Unknown";
    } catch (error) {
      console.error(`Error fetching employee ${employeeId} details:`, error);
      return "Unknown"; // Default value on error
    }
  };

  useEffect(() => {
    const fetchAllEmployeeDetails = async () => {
      const employeePromises = rating.map(async (rating) => {
        const employeeName = await fetchEmployeeDetails(rating.employeeId);
        return {
          ...rating,
          employeeName,
          review: rating.review || "No review provided", // Default review
        };
      });

      const enrichedRatings = await Promise.all(employeePromises);
      setRatingsWithEmployeeNames(enrichedRatings);
      setLoading(false); // Set loading to false once data is fetched
    };

    if (rating.length > 0) {
      fetchAllEmployeeDetails();
    }
  }, [rating]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={3} style={{ textAlign: "center" }}>
                <CircularProgress /> {/* Loading spinner */}
              </TableCell>
            </TableRow>
          ) : ratingsWithEmployeeNames.length > 0 ? (
            ratingsWithEmployeeNames.map((rating) => (
              <TableRow key={`${rating.employeeId}-${rating.id}`}>
                <TableCell>{rating.employeeName}</TableCell>
                <TableCell>{rating.rating}</TableCell>
                <TableCell>{rating.review}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} style={{ textAlign: "center" }}>
                No ratings available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatingsTable;
