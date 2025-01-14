const m = require('mithril');
    
let Icon = {
    view: function(vnode) {
        return m(`span.${vnode.children ? "icon-text" : "icon"}`, { ...vnode.attrs }, [
            
            vnode.children ? m("span.icon", m("i", { class: vnode.attrs.icon })) :
            m("i", { class: vnode.attrs.icon }),
            
            vnode.children && m("span", vnode.children)
        ])
    }
}
    
module.exports = Icon