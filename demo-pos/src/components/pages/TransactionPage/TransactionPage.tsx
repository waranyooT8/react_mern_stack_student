import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../../reducers";
import * as transactionActions from "../../../actions/transaction.action";

const columns: GridColDef[] = [
  { field: "transaction_id", headerName: "ID", width: 70 },
  { field: "staff_id", headerName: "StaffId", width: 130 },
  { field: "timestamp", headerName: "Timestamp", width: 130 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const dispatch = useDispatch();
  const transactionReducer = useSelector(
    (state: RootReducer) => state.transactionReducer
  );

  React.useEffect(() => {
    dispatch(transactionActions.getTransactions());
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={transactionReducer.result}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
