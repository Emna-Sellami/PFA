import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
const Contact = (props) => (
 <tr>
   <td>{props.contact.name}</td>
   <td>{props.contact.lastname}</td>
   <td>{props.contact.email}</td>
   <td>{props.contact.phone}</td>
   <td>{props.contact.msg}</td>
   <td>
     <button className="btn btn-link"
       onClick={() => {
         props.deleteContact(props.contact._id);
       }}
     >
      <i className="material-icons">&#xE872;</i>
     </button>
   </td>
 </tr>
);
 
export default function OwnerSpace() {
 const [contacts, setContacts] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getContacts() {
     const response = await fetch(`http://localhost:5000/contact/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const contacts = await response.json();
     setContacts(contacts);
   }
 
   getContacts();
 
   return;
 }, [contacts.length]);
 
 // This method will delete a record
 async function deleteContact(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newContacts = contacts.filter((el) => el._id !== id);
   setContacts(newContacts);
 }
 
 // This method will map out the records on the table
 function OwnerSpace() {
   return contacts.map((contact) => {
     return (
       <Contact
         contact={contact}
         deleteContact={() => deleteContact(contact._id)}
         key={contact._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="crud shadow-lg mb-5 mt-5 bg-body rounded " style={{padding:"1rem", marginLeft:"50px", marginRight:"50px", color:"green"}}>
     <h3 className=" offset-sm-2 mt-5 mb-4 text-gred" style={{width:"60%", textAlign:"center", fontSize: "33px"}}>Client messages & reviews</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Last name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Message</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{OwnerSpace()}</tbody>
     </table>
   </div>
 );
}