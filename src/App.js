import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import {Routes,Route} from "react-router-dom";
import Education from "./Components/Education";
import About from "./Components/About";

function App() {
  return (
            <>

               <Header/>

              <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/Education" element={<Education/>}/>
                <Route path="/About" element={<About/>}/>
 
              </Routes>

             <Footer/>
            {/* <Footer/>                 browser will display 2 footer  */}
            
            </>
         
     

          
          
        
  )
}

export default App;       //exporting to index.js

