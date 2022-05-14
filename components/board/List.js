
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function List({ columns,colspan, data }){
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {columns.map((column)=>(
            <TableCell key={column}>{column}</TableCell>
        ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {data.length == 0 ?<TableRow>
        <TableCell colSpan={colspan}>데이터가 없습니다.</TableCell>                
        </TableRow>
        :data.map((board) => (
            <TableRow
              key={board.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {board.name}</TableCell>
              <TableCell align="left">{board.date}</TableCell>
              <TableCell align="left">{board.title}</TableCell>
              <TableCell align="left">{board.subject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
