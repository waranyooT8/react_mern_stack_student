import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as stockActions from "../../../actions/stock.action";
import { RootReducer } from "../../../reducers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { imageUrl } from "../../../constants";
import Moment from "react-moment";

type StockPageProps = {
  //
};

const StockPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const stockReducer = useSelector((state: RootReducer) => state.stockReducer);

  React.useEffect(() => {
    dispatch(stockActions.loadStock());
  }, []);

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockReducer.result.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img
                  src={`${imageUrl}/images/${row.image}?dummy=${Math.random()}`}
                  style={{ width: 70, height: 70, borderRadius: "5%" }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.stock}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.price}
              </TableCell>
              <TableCell component="th" scope="row">
                <Moment format="DD/MM/YYYY HH:mm">{row.created}</Moment>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockPage;
