import Teleport from './teleport.component'
import TeleportLocation from './teleport-location.component'

let plugin = {
	install( Vue ){
		Vue.component('vTeleport', Teleport);
		Vue.component('vTeleportLocation', TeleportLocation);
	},
}

export { Teleport, TeleportLocation }

export default plugin;

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(plugin)
}