const router = require('express').Router();

const { getAllContacts, createContacts, getContactById, updateContact, deleteContact } = require('./contactController');

router.get('/', getAllContacts);
router.post('/', createContacts);
router.get('/:id', getContactById);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;