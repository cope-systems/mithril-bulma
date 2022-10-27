const m = require('mithril');
const Util = require('./Utility');
    
let Button = {
    view: function(vnode) {
        return m(`button.button.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
module.exports = Button