import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter } from "react-router-dom";
 
// We import all the components we need in our app

import Accueil from "./Accueil";
const App = () => {
 return (
   <div>
     <BrowserRouter>
        <Accueil />
     </BrowserRouter>
   </div>
 );
};
 
export default App;