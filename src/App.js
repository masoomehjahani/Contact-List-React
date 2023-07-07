import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

function App() {

  const [contacts,setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    setContacts([...contacts , {id:Math.ceil(Math.random()*100) ,...contact}]);

  //  const newContact={
  //   id:Math.ceil(Math.random()*100),
  //   name:contact.name,
  //   email:contact.email,
  //  }
  //  setContacts([...contacts,newContact]);
  };
 const deleteContactHandler =(id) =>{
   const filteredContacts = contacts.filter( c => c.id !== id);
   setContacts(filteredContacts);
 };

// to get and set data in local storage(in web browser tools):
// CDM:
useEffect(() => {
  const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  if (savedContacts) setContacts(savedContacts);
} ,[]);

useEffect(() =>{
  localStorage.setItem("contacts" , JSON.stringify(contacts));
} ,[contacts]);


  return (
    <div className="App">
      <h1>CONTACT LIST</h1>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} onDelete={deleteContactHandler}/>
    
    </div>
  );
}

export default App;
