import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../routes/Layout";
import Home from "../routes/Home";
import CreateAccount from "./CreateAccount";
import Account from "../routes/Account";
import Login from "./Login";
import Logout from "./Logout";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
