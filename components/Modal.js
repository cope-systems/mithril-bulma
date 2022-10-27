const m = require('mithril');
    
let Modal = {
    view: function(vnode) {
        return m(`.modal.${vnode.attrs.active && "is-active"}`, { ...vnode.attrs }, [
            vnode.children,
            vnode.attrs.hasClose && m("button.modal-close.is-large")
        ])
    },

    Background: {
        view: function(vnode) {
            return m(".modal-background", { ...vnode.attrs })
        }
    },

    Content: {
        view: function(vnode) {
            return m(".modal-content", { ...vnode.attrs }, vnode.children)
        }
    }
}
    
module.exports = Modal