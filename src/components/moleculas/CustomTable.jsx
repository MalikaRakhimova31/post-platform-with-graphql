import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Box } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import Select from "components/atoms/Select";
import { useDispatch, useSelector } from "react-redux";
import CustomPagination from "./Pagination";
import usePagination from '../../../utils/pagination'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    height: "40px !important",
    minWidth: "24px !important",
    padding: "8px 12px !important",
    color: "#667281 !important",
    fontSize: `13px !important`,
    lineHeight: `12px !important`,
    letterSpacing: "-0.006em",
    fontWeight: "500 !important",
    fontFamily: "Arial",
    border: 'none !important',
    textAlign: 'left',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    lineHeight: `24px !important`,
    letterSpacing: "-0.006em",
    fontWeight: "400 !important",
    fontFamily: "Arial !important",
    height: "80px !important",
    minWidth: "24px !important",
    padding: "0 12px !important",
    color: '#111111 !important',
  },
  [`&.${tableCellClasses.root}`]: {
    fontSize: 14,
    lineHeight: `16px !important`,
    fontFamily: 'Arial !important',
    letterSpacing: "-0.006em",

    "&:last child td, &:last-child th": {
      borderRight: 0,
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));

export default function CustomizedTables({ posts }) {
  const labels = ['ID', 'Title', 'Time', 'Status']
  const [page, setPage] = React.useState(1)
  const PER_PAGE = 5
  const _DATA = usePagination(posts, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };


  return (
    <div>
      <TableContainer
        sx={{
          borderBottom: "1px solid #E5E9EB",
          marginBottom: '36px'
        }}
      >
        <Table
          sx={{
            minWidth: "44px",
            height: "80px !important",
            padding: "32px 0",
          }}
          aria-label="customized table"
          size="small"
          padding="none"
        >
          <TableHead>
            <TableRow>
              {labels &&
                labels.map((item, index) => (
                  <StyledTableCell align="center" key={`key_${item}`}>
                    {item}
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.length > 0 &&  _DATA.currentData().map((item, index) => 
            <StyledTableRow key={`post-item-${index}`}>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>{item.title}</StyledTableCell>
                <StyledTableCell>{item.time}</StyledTableCell>
                <StyledTableCell>{item.status}
                </StyledTableCell>
          </StyledTableRow>
          ) }
          </TableBody>
        </Table>
      </TableContainer>
      {posts.length > 0 && <div className="flex w-full justify-end items-center ">
        <CustomPagination
          pageSize={PER_PAGE}
          dataLength={posts.length}
          page={page}
          handleChange={handleChange}
        />
      </div>}
    </div>
  );
}
