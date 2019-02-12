
<script>

	import locations from './locations'

	export default {

		name: 'teleportLocation',

		props: { name: { default: 'default' }, tag: { default: 'div'} },

		data(){

			return { locations }
		},
		
		render(h){

			return this.children.length ? h(this.tag, this.children) : null;
		},

		computed: {
			location(){
				return this.locations[this.name]
			},
			children(){
				return Object.values(this.location || []).flat()
			}
		},

		methods: {

		}

	}

</script>


<style lang="stylus">
	


</style>