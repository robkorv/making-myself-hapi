module.exports = function(context) {
    var headTitle = context.data.root.query.name + context.data.root.query.suffix;
    return headTitle;
}
