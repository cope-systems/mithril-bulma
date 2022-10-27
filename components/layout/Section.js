const m = require('mithril');
const Util = require('../Utility');
    
let Section = {
    view: function(vnode) {
        return m(`section.section.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
module.exports = Section