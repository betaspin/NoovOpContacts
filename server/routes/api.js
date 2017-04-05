const express = require('express');
const router = express.Router();

const ContactService = require('./contact-service');
const contactService = new ContactService();

const UserService = require('./user-service');
const userService = new UserService();

/***************************** Contacts ******************************/
// Get contacts list
router.get('/contacts', (req, res) => {
  res.send(contactService.getContacts());
});

// Get contact by id
router.get('/contact/:id', (req, res) => {
  res.send(contactService.findContactById(req.params.id));
});

// Add contact
router.post('/contacts', (req, res) => {
  res.send(contactService.addContact(req.body));
});

// Update contact
router.put('/contacts', (req, res) => {
  res.send(contactService.updateContact(req.body));
});

// Delete contact
router.delete('/contacts/:id', (req, res) => {
  let contact = contactService.findContactById(req.params.id);
  contactService.deleteContact(contact);
  res.send(contact);
});


/***************************** Users ******************************/
// Get users list
router.get('/users', (req, res) => {
  res.send(userService.getUsers());
});

// Get user by id
router.get('/user/:id', (req, res) => {
  res.send(userService.findUserById(req.params.id));
});

// Add user
router.post('/users', (req, res) => {
  res.send(userService.addUser(req.body));
});

// Update user
router.put('/users', (req, res) => {
  res.send(userService.updateUser(req.body));
});

// Delete user
router.delete('/users/:id', (req, res) => {
  let user = userService.findUserById(req.params.id);
  userService.deleteUser(user);
  res.send(user);
});


module.exports = router;
