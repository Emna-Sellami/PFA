import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter ,Route,Routes} from "react-router-dom";
// We import all the components we need in our app
import Checkroom from "./Checkroom"
import Accueil from "./Accueil";
import ClientSpace from "./ClientSpace"; 
const App = () => {
 return (
   <div>
     <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Accueil/>} />
          <Route  path='/clientspace' element={<ClientSpace/>} />
          <Route path='/checkroom' element={<Checkroom />}></Route>
        </Routes>
     </BrowserRouter>
   </div>
 );
};
 
export default App;