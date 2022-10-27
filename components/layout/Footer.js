const m = require("mithril");
    
let Footer = {
    view: function(vnode) {
        return m('footer.footer', vnode.attrs, vnode.children)
    }
}
    
module.exports = Footer;