import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <ToastContainer />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/adduser" element={<AddUser />} />
                    <Route exact path="/editUser/:id" element={<EditUser />} />
                    <Route exact path="/viewUser/:id" element={<ViewUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
