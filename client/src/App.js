import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter ,Route,Routes} from "react-router-dom";
// We import all the components we need in our app
import Checkroom from "./Checkroom"
import Accueil from "./Accueil";
import ClientSpace from "./ClientSpace";
import OwnerSpace from "./OwnerSpace";
import Forme from "./Forme"
import Modale from "./components/About/Modal";
const App = () => {
 return (
   <div>
     <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Accueil/>} />
          <Route  path='/clientspace' element={<ClientSpace/>} />
          <Route  path='/modale' element={<Modale/>} />
          <Route  path='/ownerspace' element={<OwnerSpace/>} />
          <Route path='/checkroom' element={<Checkroom />} />
          <Route path='/Forme' element={<Forme />} />

        </Routes>
     </BrowserRouter>
   </div>
 );
};
 
export default App;