const m = require('mithril');
const Util = require('./Utility');
    
let Image = {
    view: function(vnode) {
        return m(`figure.image.${Util.getClasses(vnode.attrs)}`, [
            m(`img.${vnode.attrs.rounded && "is-rounded"}`, vnode.attrs)
        ])
    }
}
    
module.exports = Image