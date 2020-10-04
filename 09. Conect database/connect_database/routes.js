const router = require('express').Router();

const { getAllContact, getSingleContact, createContact, deleteContact, updateContact } = require('./contactController')

router.get('/', getAllContact);
router.get('/:id', getSingleContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;

//9.11 Complete