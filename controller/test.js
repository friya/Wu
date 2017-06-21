var classPath = path.join(CONTROLLER_PATH, actionInfo.controller);
var classRef = require(classPath).class; //类的一个引用
var c = new classRef(this._req, this._res);
if (typeof(c[actionInfo.action]) != 'function') {
    actionInfo.action = config.defaultAction; //使用默认action
    if(typeof(c[actionInfo.action]) != 'function') {
        throw new Error('No callable action');
    }
}