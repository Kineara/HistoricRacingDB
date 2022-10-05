import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../routes/Layout";
import Home from "../routes/Home";
import SignUp from "../routes/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
