import vTeleport from './teleport'
import vTeleportLocation from './teleport-location'

let plugin = {
	install( Vue ){
		Vue.component('vTeleport', vTeleport);
		Vue.component('vTeleportLocation', vTeleportLocation);
	},
}

export { vTeleport, vTeleportLocation }

export default plugin;

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(plugin)
}