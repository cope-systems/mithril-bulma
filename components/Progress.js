const m = require('mithril');
const Util = require('./Utility');
    
let Progress = {
    view: function(vnode) {
        return m(`progress.progress.${Util.getClasses(vnode.attrs)}`, { ...vnode.attrs })
    }
}
    
module.exports = Progress