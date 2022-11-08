import React from 'react';
import Card from './Card.js';
import Contacts from '../contacts.js';

function createCard(contact){
    return(
        <Card 
            key = {contact.id}
            id = {contact.id}
            name = {contact.name}
            img = {contact.imgURL}
            tel = {contact.phone}
            email = {contact.email}
        />
    );
}

function App(){
    return (
    <div>
        <h1 className='heading'>My Contacts</h1>
        {Contacts.map(createCard)}
    </div>
    );
        
};

export default App;