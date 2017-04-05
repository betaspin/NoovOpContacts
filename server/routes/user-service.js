const ModuleData = require('./user-data');

/**
 * This is a Business Access Layer for contacts
 */
class ModuleService {

    /**
     * Default contructor
     */
    constructor (){
        this.mData = new ModuleData();
    }

    /**
     * Get users
     * @return {Array}
     */
    getUsers (){
        return this.mData.getUsers();
    }

    /**
     * Adds a user
     * @param user
     */
    addUser (user){
       return this.mData.addUser(user);
    }

    /**
     * Update a user
     * @param user
     */
    updateUser (user){
      return this.mData.updateUser(user);
    }

    /**
     * Finds a user by id
     * @param id
     * @return {*}
     */
    findUserById (id){
        return this.mData.findUserById(id);
    }

    /**
     * Deletes a user
     * @param user
     */
    deleteUser (user){
        this.mData.deleteUser(user);
    }
}

module.exports = ModuleService;
