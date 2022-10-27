const m = require('mithril');
const Util = require('../Utility');
    
let Input = {
    view: function(vnode) {
        return m(`${vnode.attrs.as}.${vnode.attrs.as}.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
module.exports = Input