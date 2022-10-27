const m = require('mithril');
const Util = require('./Utility');
    
let Table = {
    view: function(vnode) {
        return m(`table.table.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Container: {
        view: function(vnode) {
            return m(".table-container", vnode.attrs, vnode.children)
        }
    }
}
    
module.exports = Table