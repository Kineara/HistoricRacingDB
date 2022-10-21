import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";

export default function BasicTable({ data }) {
  // console.log(Object.keys(data));
  // console.log(Object.values(data).flat());
  // console.log(Object.entries(data))

  function createHeadings(data) {
    const tableHeadings = Object.keys(data);
    return (
      <TableRow>
        {tableHeadings.map((entry) => {
          return <TableCell>{entry}</TableCell>;
        })}
      </TableRow>
    );
  }

  function createValues(data) {
    const tableData = Object.values(data).flat();
    console.log(tableData);
    return (
      <TableRow>
        {tableData.map((entry) => {
          if (typeof entry === "object") {
            return (
            <TableCell>
              <Table>
                <TableHead>{createHeadings(entry)}</TableHead>
                <TableBody>
                  <TableRow>
                  {Object.values(entry).map((recEntry) => {
                    return (
                      <TableCell>
                        {recEntry}
                      </TableCell>
                    )
                  })}
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>);
          } else {
            return <TableCell>{entry}</TableCell>;
          }
        })}
      </TableRow>
    );
  }

  if (data) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>{createHeadings(data)}</TableHead>
        <TableBody>
          {createValues(data)}
        </TableBody>
      </Table>
    </TableContainer> 
    );
  } else {
    return <Typography>Table Data Loading...</Typography>
  }
}
