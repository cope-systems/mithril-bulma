const m = require('mithril');
const Util = require('../Utility');
    
let Container = {
    view: function(vnode) {
        return m(`.container.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
module.exports = Container