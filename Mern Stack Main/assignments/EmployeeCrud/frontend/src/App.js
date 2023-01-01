import { BrowserRouter,Routes,Route } from "react-router-dom";
import EmployeeCrud from "./Pages/EmployeeCrud";
import Header from "./Pages/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/employee" element={<EmployeeCrud/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
