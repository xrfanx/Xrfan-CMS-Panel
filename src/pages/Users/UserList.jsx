import { useState } from "react";
import { userRows } from "../../datas";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Users() {
  const [userDatas, setUserDatas] = useState(userRows);
  const [openAlert, setOpenAlert] = useState(false);

  const userDelete = (userID) => {
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 1500);
    setUserDatas(userDatas.filter((user) => user.id !== userID));
  };

  const columns = [
    { field: "rowNumber", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/user/${params.row.id}`} className="Link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.userName}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transactions", headerName: "Transactions", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userAction">
            <Link to={`/user/${params.row.id}`} className="Link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const rows = userDatas.map((user, index) => ({
    rowNumber: index + 1,
    id: user.id,
    userName: user.userName,
    avatar: user.avatar,
    status: user.status,
    transactions: "$" + user.transactions,
    email: user.email,
  }));

  return (
    <div className="userList">
      <div className="userDeleteAlert">
        {openAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">User deleted successfully</Alert>
          </Stack>
        )}
      </div>

      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
      />
    </div>
  );
}
