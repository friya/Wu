//mvc应用的入口
exports.class = function(req, res) {
    this._req = req, this._res = res;
    this.dispatcher();
}