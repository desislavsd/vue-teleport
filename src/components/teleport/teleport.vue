
<script>

	import locations from './locations'
	
	export default {

		name: 'teleport',

		props: { to: {}, disabled: {} },

		data(){
			return {
				locations,
				lastLocationName: undefined,
			}
		},

		computed: {
			locationName(){
				return this.to || 'default'
			}
		},
		watch: {
			locationName(val, old){
				this.lastLocationName = old;
			}
		},
		render(){
			
			let { locations, locationName, lastLocationName, _uid } = this,
					location = locations[locationName] || this.$set(locations, locationName, Object.create(null)),
					lastLocation = locations[lastLocationName];

			if(lastLocation && lastLocation != location) {

				this.$delete(lastLocation, _uid);
				
				if(!Object.keys(lastLocation).length)
					this.$delete(locations, lastLocationName);
			}

			if(this.disabled){
				location[_uid] && this.$delete(location, _uid);
				return this.$slots.default[0] || null;
			}

			this.$set(location, _uid, this.$slots.default[0]);

			return null
		},
		destroyed(){

			delete this.$delete(this.locations[this.locationName], this._uid)
		}

	}

</script>