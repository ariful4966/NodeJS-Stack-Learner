

const Flash = require('../utils/Flash')
exports.dahsboardGetController = (req, res, next) => {

    res.render('pages/dashboard/dashboard',
        {
            title: 'My Dashboard',
            flashMessage: Flash.getMessage(req)

        })
}

