import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
const Client = (props) => (
 <tr>
   <td>{props.client.name}</td>
   <td>{props.client.surname}</td>
   <td>{props.client.email}</td>
   <td>{props.client.phone}</td>
   <td>{props.client.checkin}</td>
   <td>{props.client.checkout}</td>
   <td>{props.client.rooms}</td>
   <td>{props.client.adults}</td>
   <td>{props.client.children}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.client._id}`}><i className="material-icons">&#xE254;</i></Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteClient(props.client._id);
       }}
     >
      <i className="material-icons">&#xE872;</i>
     </button>
   </td>
 </tr>
);
 
export default function OwnerSpace() {
 const [clients, setClients] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getClients() {
     const response = await fetch(`http://localhost:5000/client/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const clients = await response.json();
     setClients(clients);
   }
 
   getClients();
 
   return;
 }, [clients.length]);
 
 // This method will delete a record
 async function deleteClient(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newClients = clients.filter((el) => el._id !== id);
   setClients(newClients);
 }
 
 // This method will map out the records on the table
 function OwnerSpace() {
   return clients.map((client) => {
     return (
       <Client
         client={client}
         deleteClient={() => deleteClient(client._id)}
         key={client._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="crud shadow-lg mb-5 mt-5 bg-body rounded " style={{padding:"1rem", marginLeft:"50px", marginRight:"50px", color:"green"}}>
     <h3 className=" offset-sm-2 mt-5 mb-4 text-gred" style={{width:"60%", textAlign:"center", fontSize: "33px"}}>Client List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Surname</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Checkin</th>
           <th>Checkout</th>
           <th>N° rooms</th>
           <th>N° adults</th>
           <th>N° children</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{OwnerSpace()}</tbody>
     </table>
   </div>
 );
}