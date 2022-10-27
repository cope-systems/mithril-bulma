const m = require('mithril');
const Util = require('./Utility');
    
let Title = {
    view: function(vnode) {
        return m(`p.title.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
module.exports = Title