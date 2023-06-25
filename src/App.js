import React, { useRef } from "react"; 
import "./index.css";
import Home from "./routes/Home"
import Project from "./routes/Project"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Design from "./routes/Design";
import { Route, Routes} from "react-router-dom"
import Resume from "./routes/Resume";
import handleSubmit from "./firebase_setup/handlesubmit"
  
function App() {
  const dataRef = useRef()

  const submithandler = (e) =>  {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }



  return (
    <>
    <div className = "App">
      <form onSubmit={submithandler}>
        <input type = "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>

      <Routes>
        <Route path ="/" element= {<Home />} />
        <Route path ="/resume" element = {<Resume />} />
        <Route path ="/project" element= {<Project />} />
        <Route path ="/about" element= {<About />} />
        <Route path ="/contact" element= {<Contact/>} />
        <Route path = "/design" element= {<Design />}/>
      </Routes> 
    </>
  );
}

export default App;
