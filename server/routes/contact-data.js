const _ = require('lodash');

/**
 * This is the Contact class
 */
class Contact {

    /**
     * The constructor
     *
     * @param {number} id : the identifier
     * @param {string} firstname : the firstname
     * @param {string} lastname : the lastname
     * @param {string} address : the address
     * @param {string} email : the email
     * @param {string} phone : the phone
     */
    constructor ( id, firstname, lastname, address, email, phone ){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

}

/**
 * This is Data Access Layer for contacts
 */
class ModuleData {

    /**
     * Default constructor
     */
    constructor (){
        // this._contacts = [
        //     new Contact(1, "tutu", "Nantes, France", "0000011111"),
        //     new Contact(2, "toto", "Paris, France",  "0000011112"),
        //     new Contact(3, "titi", "Rennes, France", "0000011113")
        // ];
        //
        // this.lastId = 3;
      this._contacts = [];

      this.lastId = 0;
    }

    /**
     * Gets contacts list
     * @return {Array}
     */
    getContacts (){
        return this._contacts;
    }

    /**
     * Adds a contact
     * @param contact
     */
    addContact (contact){
        this.lastId++;
        contact.id = this.lastId;
        this._contacts.push(contact);
        return contact;
    }

    /**
     * Update a contact
     * @param contact
     */
    updateContact (data){
      let contact = this.findContactById(data.id);
      contact.firstname = data.firstname;
      contact.lastname = data.lastname;
      contact.address = data.address;
      contact.email = data.email;
      contact.phone = data.phone;
      return contact;
    }

    /**
     * Finds a contact by id
     * @param id
     * @return {*}
     */
    findContactById (id){
        return _(this._contacts).find( (contact) =>{
            return contact.id == id;
        });
    }

    /**
     * Deletes a contact
     * @param contact
     */
    deleteContact (contact){
        _.remove(this._contacts, function(_contact){
            return contact.id == _contact.id;
        });
    }
}

module.exports = Contact;
module.exports = ModuleData;
