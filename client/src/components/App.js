import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import CreateAccount from "./Account/CreateAccount";
import Account from "./Account/Account";
import Login from "./Account/Login";
import Logout from "./Account/Logout";
import Database from "./Database/Database";
import SubmitForm from "./Database/SubmitForm";
import ShowResult from "./Database/ShowResult";
import DatabaseSearch from "./Database/DatabaseSearch";
import DatabaseSearchResults from "./Database/DatabaseSearchResults";

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

          <Route path="/database" element={<Database />}>
            <Route path="/database/search" element={<DatabaseSearch />}>
              <Route path=":category" element={<DatabaseSearchResults />} />
            </Route>
            <Route path=":category/:id" element={<ShowResult />} />
          </Route>

          <Route path="/submit" element={<SubmitForm />} />
          <Route path="/showResult" element={<ShowResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
