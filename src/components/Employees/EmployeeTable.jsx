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
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, designation, rating, view) {
  return { name, designation, rating, view };
}

const rows = [
  {
    name: "John Doe",
    designation: "Software Engineer",
    rating: 4.7,
    view: "https://example.com/johndoe-profile",
  },
  {
    name: "Jane Smith",
    designation: "Project Manager",
    rating: 4.5,
    view: "https://example.com/janesmith-profile",
  },
  {
    name: "Michael Brown",
    designation: "UX Designer",
    rating: 4.6,
    view: "https://example.com/michaelbrown-profile",
  },
  {
    name: "Emily Davis",
    designation: "Product Owner",
    rating: 4.8,
    view: "https://example.com/emilydavis-profile",
  },
  {
    name: "David Wilson",
    designation: "Data Scientist",
    rating: 4.4,
    view: "https://example.com/davidwilson-profile",
  },
  {
    name: "Sarah Lee",
    designation: "Marketing Specialist",
    rating: 4.3,
    view: "https://example.com/sarahlee-profile",
  },
  {
    name: "James Johnson",
    designation: "DevOps Engineer",
    rating: 4.9,
    view: "https://example.com/jamesjohnson-profile",
  },
  {
    name: "Olivia Martinez",
    designation: "HR Manager",
    rating: 4.2,
    view: "https://example.com/oliviamartinez-profile",
  },
  {
    name: "Robert Taylor",
    designation: "Backend Developer",
    rating: 4.6,
    view: "https://example.com/roberttaylor-profile",
  },
  {
    name: "Sophia Anderson",
    designation: "Frontend Developer",
    rating: 4.7,
    view: "https://example.com/sophiaanderson-profile",
  },
];

// console.log(employees);


export default function EmployeeTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{
        maxHeight: "80vh" }}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "view" ? (
                            <a
                              href={value}
                              target="_blank"
                              rel="noopener noreferrer"
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
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
