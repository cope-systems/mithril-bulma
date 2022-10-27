const m = require('mithril');
    
let Box = {
    view: function(vnode) {
        return m('.box', {...vnode.attrs}, vnode.children)
    }
}
    
module.exports = Box