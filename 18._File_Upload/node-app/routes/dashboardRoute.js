const router = require('express').Router();
const {isAuthenticated} = require('../middleware/authMiddleware')

const {
     dahsboardGetController
}= require('../controllers/dashboardController')

router.get('/',isAuthenticated, dahsboardGetController)


module.exports = router;  