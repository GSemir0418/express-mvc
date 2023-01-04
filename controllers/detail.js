const detailModel = require('../models/detail')
function view(req, res) {
    const { id } = req.params
    const user = detailModel.getUserInfoById(id)
    res.render('detail', {
        user
    })
}
module.exports = {
    view
}