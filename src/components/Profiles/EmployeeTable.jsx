import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const EmployeeTable = ({ employees }) => {
  const [openReviewDialog, setOpenReviewDialog] = useState(false);
  const [openRatingDialog, setOpenRatingDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState("");

  // Handle opening and closing the review dialog
  const handleOpenReviewDialog = (employee) => {
    setSelectedEmployee(employee);
    setOpenReviewDialog(true);
  };

  const handleCloseReviewDialog = () => {
    setOpenReviewDialog(false);
    setNewReview("");
  };

  // Handle opening and closing the rating dialog
  const handleOpenRatingDialog = (employee) => {
    setSelectedEmployee(employee);
    setOpenRatingDialog(true);
  };

  const handleCloseRatingDialog = () => {
    setOpenRatingDialog(false);
    setNewRating("");
  };

  // Submitting the review
  const handleSubmitReview = () => {
    if (selectedEmployee) {
      selectedEmployee.review = newReview;
    }
    handleCloseReviewDialog();
  };

  // Submitting the rating
  const handleSubmitRating = () => {
    if (selectedEmployee) {
      selectedEmployee.rating = newRating;
    }
    handleCloseRatingDialog();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Review</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>
                  {employee.review ? (
                    employee.review
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenReviewDialog(employee)}
                    >
                      Give Review
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {employee.rating ? (
                    employee.rating
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleOpenRatingDialog(employee)}
                    >
                      Give Rating
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Review Dialog */}
      <Dialog open={openReviewDialog} onClose={handleCloseReviewDialog}>
        <DialogTitle>Submit Review for {selectedEmployee?.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Review"
            fullWidth
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReviewDialog}>Cancel</Button>
          <Button onClick={handleSubmitReview}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Rating Dialog */}
      <Dialog open={openRatingDialog} onClose={handleCloseRatingDialog}>
        <DialogTitle>Submit Rating for {selectedEmployee?.name}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Rating"
            fullWidth
            type="number"
            value={newRating}
            onChange={(e) => setNewRating(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRatingDialog}>Cancel</Button>
          <Button onClick={handleSubmitRating}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeTable;
