<template>
  <div class="VueStar"> 
    <div class="VueStar__ground">
      <div class="VueStar__icon" @click="toggle" :class="AnimateClass" :style='{color:ColorValue}'>
        <slot name="icon"></slot>
		<slot name="word"></slot>
      </div>
      <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active':active}"></div>
    </div>
  </div>
</template>

<script>
import { isColors } from './colorRE.js'
export default {
  name: 'VueStar',
  props: {
    animate: String,
    color: String,
    clickOnce: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    toggle () {
      if (!this.clickOnce) {
        this.active = !this.active
        this.toggleAnimate = !this.toggleAnimate
        this.toggleColor = !this.toggleColor
      } else {
        this.active = true
        this.toggleAnimate = true
        this.toggleColor = true
      }
      
	  	this.$emit('click')
    }
  },
  data () {
    return {
      active: false,
      toggleAnimate: false,
      toggleColor: false
    }
  },
  computed: {
    AnimateClass () {
      return this.toggleAnimate ? this.animate : ''
    },
    ColorValue () {
      return this.toggleColor ? this.color : ''
    }
  },
  mounted () {
    if (this.color) {
      if (isColors(this.color)) {
        return
      } else {
        console.error('this color must be hexcolor or rgbcolor  ---VueStar')
      }
    } else {
      return
    }
  }
}
</script>

<style lang="scss">
 @import './main.scss';
</style>