import Home from "./pages/Home/Home"
import Users from "./pages/Users/UserList"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Analytics from "./pages/Analytics/Analytics"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./Layout"
import Messages from "./pages/Messages/Messages"
import Mail from "./pages/Mail/Mail"
import Report from "./pages/Report/Report"


let routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "newUser", element: <NewUser /> },
      { path: "products", element: <Products /> },
      { path: "analytics", element: <Analytics /> },
      { path: "messages", element: <Messages /> },
      { path: "product/:productId", element: <Product /> },
      { path: "mail", element: <Mail /> },
      { path: "report", element: <Report /> },

    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
