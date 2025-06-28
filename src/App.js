import Signin from "./pages/signin";
import { Route, Routes } from "react-router-dom";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
