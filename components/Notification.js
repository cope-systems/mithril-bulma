const m = require('mithril');
const Util = require('./Utility');
    
let Notification = {
    view: function(vnode) {
        return m(`.notification.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, [
            vnode.attrs.hasDelete && m("button.delete"),
            vnode.children
        ])
    }
}
    
module.exports = Notification