import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@mui/icons-material/ArrowDownward";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Table from "./EmployeeTable";
// import { columns, data } from "./data";

const Employees = () => {
  return (
    <div className="employees-main">
          <div className="employees-body">
              <Table />
      </div>
    </div>
  );
};

export default Employees;
