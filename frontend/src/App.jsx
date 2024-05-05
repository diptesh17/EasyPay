import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Dashboard } from "./Pages/Dashboard";
import { SendMoney } from "./Pages/SendMoney";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
