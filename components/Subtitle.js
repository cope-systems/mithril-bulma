const m = require('mithril');
const Util = require('./Utility');
    
let Subtitle = {
    view: function(vnode) {
        return m(`p.subtitle.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs }, vnode.children)
    }
}
    
module.exports = Subtitle