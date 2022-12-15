import {  Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Form from "./Form";

function Home() {
  return <div style={{backgroundColor:'black'}} >
    {/* Add Home, Counter App and  Controlled Form  */}
     <h1 style={{textAlign:'center',color:'Cyan'}}>Tubelight Communications</h1>

      <Routes >
     <Route  path="/" element={<Form/>}></Route> 
    </Routes>
    
    <Routes>
      <Route path="/" element={<Counter />}> </Route> 
      </Routes>

  </div>;
}

export default Home;
