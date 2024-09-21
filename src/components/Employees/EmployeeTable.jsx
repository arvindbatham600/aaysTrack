import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import api from "../utils/api";
import { useEffect } from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ManagerProfile from "../Managers/ManagerProfile";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "designation", label: "Designation", minWidth: 100 },
  {
    id: "rating",
    label: "Rating",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "view",
    label: "View",
    minWidth: 170,
    align: "center",
  },
];

export default function EmployeeTable() {
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [employeeData, setEmployeeData] = React.useState([]);
  const [selectedEmployee, setSelectedEmployee] = React.useState(null); // New state for selected employee

  const role = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    setSelectedEmployee(null); // Reset selected employee when dialog closes
  };

  const handleOpen = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee
    setOpen(true);
  };

  const fetchEmployeeData = async () => {
    try {
      const response = await api.get("/user/getEmployeesWithProjectDetails", {
        role,
      });
      const employees = response.data?.employees || [];
      const formattedEmployees = employees.map((employee) => ({
        name: employee.name,
        designation: employee.designation,
        rating: employee.rating || 0, // Default rating to 0 if undefined
        view: employee.email ? `mailto:${employee.email}` : "#", // Use email for viewing
        totalProjects: employee.totalProjects || 0,
        completedProjects: employee.completedProjects || 0,
        ongoingProjects: employee.ongoingProjects || 0,
        pendingProjects: employee.pendingProjects || 0,
        projects: employee.projects,
      }));
      setEmployeeData(formattedEmployees);
    } catch (error) {
      console.error("Error fetching employees data:", error);
      alert("Error fetching employees data: " + error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {employeeData.length > 0 ? (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "80vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "view" ? (
                              <a
                                onClick={() => handleOpen(row)} // Pass the whole row data
                                style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
                              >
                                <VisibilityIcon />
                              </a>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={employeeData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <p style={{ textAlign: "center" }}>Loading Employees....</p>
      )}

      <Dialog open={open} onClose={handleClose}>
        <div className="manager-view-box">
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", right: 16, top: 16 }}
          >
            <CloseIcon />
          </IconButton>
          {selectedEmployee && <ManagerProfile details={selectedEmployee} />}{" "}
          {/* Pass only the selected employee */}
        </div>
      </Dialog>
    </>
  );
}
