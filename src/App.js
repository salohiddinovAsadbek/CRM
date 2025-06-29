import Signin from "./pages/signin";
import { Route, Routes } from "react-router-dom";
import "./style/index.css";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
