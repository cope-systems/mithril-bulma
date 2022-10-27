const m = require("mithril");
const Util = require("./Utility");
    
let Content = {
    view: function(vnode) {
        return m(`.content.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    }
}
    
module.exports = Content;