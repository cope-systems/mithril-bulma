const m = require('mithril');
const Util = require('../Utility');
    
let Columns = {
    view: function(vnode) {
        return m(`.columns.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Column: {
        view: function(vnode) {
            return m(`.column.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
        }
    }
}
    
module.exports = Columns