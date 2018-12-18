<template>
  <div id="test">
    <h1>{{message}}</h1>
	<training target="test3"></training>
		<training target="test4"></training>
			<training></training>
				
  </div>
</template>
<script>
import compos from './components/compos.vue'
export default {
  data () {
    return {
      message : "Hello  xxjcsjkdhsdf    exoers vous etes les meilleures !!!???????????"
	  
    }
  },
  components: {
"training":compos
}
}
</script>
