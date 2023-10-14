import Navbar from "./component/navbar/Navbar";
import Register from "./page/register/Register";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Home from "./page/home/Home";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";



function App() {
    const currentUser = false;
    return (
        <>
            <Router>
                <Navbar />
                <Routes>

                    <Route exact path="/" element={<Home />}/>




                    <Route path="/posts"  element={<Home />}/>



                    <Route path="/register" element={currentUser ? <Home /> : <Register />}/>




                    <Route path="/login" element={currentUser ? <Home /> : <Login />}/>


                    <Route path="/post/:id" element={<Single />}/>




                    <Route path="/write" element={currentUser ? <Write /> : <Login />}/>


                    <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />



                </Routes>
            </Router>
        </>
    );
}

export default App;
