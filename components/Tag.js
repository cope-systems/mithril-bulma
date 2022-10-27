const m = require('mithril');
const Util = require('./Utility');
    
let Tag = {
    view: function(vnode) {
        return m(`span.tag.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
module.exports = Tag