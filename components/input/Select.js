const m = require('mithril');
const Util = require('../Utility');
    
let Select = {
    view: function(vnode) {
        return m(`.select.${Util.getClasses(vnode.attrs)}`, vnode.attrs, m("select", vnode.children))
    },

    Item: {
        view: function(vnode) {
            return m("option", vnode.attrs, vnode.children)
        }
    }
}
    
module.exports = Select