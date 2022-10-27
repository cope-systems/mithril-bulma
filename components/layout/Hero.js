const m = require('mithril');
const Util = require('../Utility');
    
let Hero = {
    view: function(vnode) {
        return m(`section.hero.${Util.getClasses(vnode.attrs)}`, vnode.attrs, vnode.children)
    },

    Body: {
        view: function(vnode) {
            return m(".hero-body", vnode.attrs, vnode.children)
        }
    }
}
    
module.exports = Hero