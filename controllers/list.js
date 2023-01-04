function view(req, res) {
    // 第一个参数表示视图路径，默认在views下
    // 第二个参数表示参数
    res.render('list', {
        title: 'User List'
    })
}
module.exports = {
    view
}