const m = require('mithril');
    
let InputButton = {
    view: function(vnode) {
        return m(`label.${vnode.attrs.as}`, [
            m("input.mr-2", { type: vnode.attrs.as, ...vnode.attrs }),
            vnode.children
        ])
    }
}
    
module.exports = InputButton