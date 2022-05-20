import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Comments from "./components/Comments";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import Todos from "./components/Todos";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
    <Header/>
      <section>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/comments" element={<Comments/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/todos" element={<Todos/>}/>
        </Routes>
      </section>
      <Footer/>
    </Router>
     
    </>
  );
}

export default App;
