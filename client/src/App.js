import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter ,Route,Routes} from "react-router-dom";
// We import all the components we need in our app
import Checkroom from "./Checkroom"
import Accueil from "./Accueil";
import ClientSpace from "./ClientSpace";
import OwnerSpace from "./OwnerSpace";
import Forme from "./Forme";
import Edit from "./components/edit";
import Review from "./components/Review/Review"
import Contact from "./components/Contact";
import Aboutt from "./Aboutt"
const App = () => {
 return (
   <div>
     <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Accueil/>} />
          <Route  path='/aboutT' element={<Aboutt/>} />
          <Route  path='/clientspace' element={<ClientSpace/>} />
          <Route  path='/ownerspace' element={<OwnerSpace/>} />
          <Route path='/checkroom' element={<Checkroom />} />
          <Route path='/Forme' element={<Forme />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path='/Review' element={<Review />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
     </BrowserRouter>
   </div>
 );
};
 
export default App;