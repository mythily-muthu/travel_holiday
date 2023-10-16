import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";


function App() {
  return (
    <div className="flex w-screen h-full flex-col ">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
