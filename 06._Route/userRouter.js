


const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('I am Login Route')
});
router.get('/logout', (req, res) => {
    res.send('I am Logout Route')
});
router.get('/signup', (req, res) => {
    res.send('I am Sign up Route')
});
module.exports = router;