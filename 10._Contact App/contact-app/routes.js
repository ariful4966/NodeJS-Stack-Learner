const router = require('express').Router();

const { getAllContact, getSingleContact, createContact, deleteContact, updateContact } = require('./contactController')

router.get('/', getAllContact);
router.get('/:id', getSingleContact);
router.get('/delete/:id', deleteContact)

router.post('/', createContact);
router.put('/:id', createContact);
// router.delete('/:id', deleteContact);

module.exports = router;

//9.11 Complete