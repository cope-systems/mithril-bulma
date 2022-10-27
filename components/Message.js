const m = require('mithril');
const Util = require('./Utility');
    
let Message = {
    view: function(vnode) {
        return m(`article.message.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    },

    Header: {
        view: function(vnode) {
            return m(".message-header", { ...vnode.attrs }, [
                vnode.children,
                vnode.attrs.hasDelete && m("button.delete"),
            ])
        }
    },

    Body: {
        view: function(vnode) {
            return m(".message-body", { ...vnode.attrs }, vnode.children)
        }
    }
}
    
module.exports = Message