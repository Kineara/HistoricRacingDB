import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../routes/Layout";
import Home from "../routes/Home";
import CreateAccount from "../routes/CreateAccount";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
