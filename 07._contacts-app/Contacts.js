class  Contacts {
    constructor(){
        this.contacts = [];
    }
    getAllContacts(){
        return this.contacts;
    }
    getContactById(id){
       return this.contacts.find(constact => constact.id === id);
    }
    createContact(contact){
        contact.id = this.contacts.length+1;
        this.contacts.push(contact);
        return contact;
    };
    updateContactById(id, updatedContact){
        let index = this.contacts.findIndex(contact => contact.id === id);
        this.contacts[index].name = updatedContact.name || this.contacts[index].name;
        this.contacts[index].phone = updatedContact.phone || this.contacts[index].phone;
        this.contacts[index].email = updatedContact.email || this.contacts[index].email;

        return this.contacts[index]
    }
    deleteContactById(id){
        let indext = this.contacts.findIndex(contact=> contact.id === id);
        let deleteObj = this.contacts[indext];
        this.contacts = this.contacts.filter(contact => contact.id !== id);

        return deleteObj;
    }
}

module.exports = new Contacts();