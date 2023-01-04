function view(req, res) {
    res.render('detail', {
        title: 'Detail'
    })
}
module.exports = {
    view
}