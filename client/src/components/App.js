import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import CreateAccount from "./Account/CreateAccount";
import Account from "./Account/Account";
import Login from "./Account/Login";
import Logout from "./Account/Logout";
import Database from "./Database/Database";
import SubmitForm from "./Database/SubmitForm";

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
          <Route path="/database" element={<Database />} />
          <Route path="/submit" element={<SubmitForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
