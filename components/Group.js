const m = require('mithril');
    
let Group = {
    view: function(vnode) {
        return m(`.${vnode.attrs.type ? vnode.attrs.type : "div"}.${vnode.attrs.addons && "has-addons"}`, { ...vnode.attrs }, [
            vnode.children
        ])
    }
}
    
module.exports = Group