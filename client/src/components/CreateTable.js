import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CreateTable({ tableData }) {
  const keys = Object.keys(tableData);
  const rows = keys.map((key) => {
    return (
      <TableRow
        key={key}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {key}
        </TableCell>
        <TableCell align="right">{tableData[key]}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300, maxWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data Type</TableCell>
            <TableCell align="right">Current Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
