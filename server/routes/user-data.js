const _ = require('lodash');

/**
 * This is the User class
 */
class User {

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
 * This is Data Access Layer for users
 */
class ModuleData {

    /**
     * Default constructor
     */
    constructor (){

      this._users = [];

      this.lastId = 0;
    }

    /**
     * Gets users list
     * @return {Array}
     */
    getUsers (){
        return this._users;
    }

    /**
     * Adds a user
     * @param user
     */
    addUser (user){
        this.lastId++;
        user.id = this.lastId;
        this._users.push(user);
        return user;
    }

    /**
     * Update a user
     * @param user
     */
    updateUser (data){
      let user = this.findUserById(data.id);
      user.firstname = data.firstname;
      user.lastname = data.lastname;
      user.address = data.address;
      user.email = data.email;
      user.phone = data.phone;
      return user;
    }

    /**
     * Finds a user by id
     * @param id
     * @return {*}
     */
    findUserById (id){
        return _(this._users).find( (user) =>{
            return user.id == id;
        });
    }

    /**
     * Deletes a user
     * @param user
     */
    deleteUser (user){
        _.remove(this._users, function(_user){
            return user.id == _user.id;
        });
    }
}

module.exports = User;
module.exports = ModuleData;
