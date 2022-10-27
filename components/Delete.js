const m = require('mithril');
const Util = require('./Utility');
    
let Delete = {
    view: function(vnode) {
        return m(`button.delete.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
module.exports = Delete