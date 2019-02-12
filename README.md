# vue-teleport

Vue components to transfer sloted DOM to another location. Usefull when managing `z-index`, `overflow`, repositioning on different resolutions etc...

### Usage

```
$ npm install @desislavsd/vue-teleport
```

```javascript
import { vTeleport, vTeleportLocation } from '@desislavsd/vue-teleport'

export default {
  components: { vTeleport, vTeleportLocation }
}

/* or */

import VueTeleport from '@desislavsd/vue-teleport'

Vue.use(VueTeleport) // registers vTeleport, vTeleportLocation globally
```
```html
<!-- props are optional -->
<v-teleport to="myLocation" :disabled="false">
  Hello world! <!-- only one root element allowed -->
</v-teleport>

<!-- props are optional -->
<v-teleport-location name="myLocation" :tag="p" />
```