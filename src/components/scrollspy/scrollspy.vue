<template>
	<div class="scrollspy-component" :class="affix ? inviewClass : ''" :style="styles">
		<slot></slot>
	</div>
</template>

<script>
import { on, off } from '../../utilities/dom';
function getScroll(target, top) {
	const prop = top ? 'pageYOffset' : 'pageXOffset';
	const method = top ? 'scrollTop' : 'scrollLeft';
	let ret = target[prop];
	if (typeof ret !== 'number') {
		ret = window.document.documentElement[method];
	}
	return ret;
}
export default {
	name: 'Scrollspy',
	mounted() {
		const elOffset = this.getOffset(this.$el);
		const windowHeight = window.innerHeight;
		if (elOffset.top < windowHeight) {
			if ((!this.repeat && this.firstFlag) || this.repeat) {
				this.affix = true
				this.firstFlag = false
			}
		}
		if (this.elementName == 'window') {
			on(window, 'scroll', this.handleScroll);
			on(window, 'resize', this.handleScroll);
		} else {
			on(document.querySelector(this.elementName), 'scroll', this.handleScroll);
			on(document.querySelector(this.elementName), 'resize', this.handleScroll);
		}
	},
	props: {
		elementName: {
			type: String,
			default: 'window'
		},
		inviewClass: {
			type: String,
			default: ''
		},
		styles: {
			type: String,
			default: ''
		},
		repeat: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			affix: false,
			firstFlag: true
		}
	},
	beforeDestroy () {
		if (this.elementName == 'window') {
			off(window, 'scroll', this.handleScroll);
			off(window, 'resize', this.handleScroll);
		} else {
			off(document.querySelector(this.elementName), 'scroll', this.handleScroll);
			off(document.querySelector(this.elementName), 'resize', this.handleScroll);
		}
	},
	methods: {
		getOffset(element) {
			const rect = element.getBoundingClientRect();
			if (this.elementName == 'window') {
				const scrollTop = getScroll(window, true);
				const scrollLeft = getScroll(window);
				const docEl = window.document.body;
				const clientTop = docEl.clientTop || 0;
				const clientLeft = docEl.clientLeft || 0;
				return {
				top: rect.top + scrollTop - clientTop,
				left: rect.left + scrollLeft - clientLeft
			}
			} else {
				const scrollTop = getScroll(document.querySelector(this.elementName), true);
				const scrollLeft = getScroll(document.querySelector(this.elementName));
				const docEl = document.querySelector(this.elementName);
				const clientTop = docEl.clientTop || 0;
				const clientLeft = docEl.clientLeft || 0;
				return {
				top: rect.top + scrollTop - clientTop,
				left: rect.left + scrollLeft - clientLeft
			}
			}
			
		},
		handleScroll () {
			const affix = this.affix;
			const scrollTop = getScroll(window, true);
			const elOffset = this.getOffset(this.$el);
			const windowHeight = window.innerHeight;
			const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight;
			if (scrollTop > (elOffset.top - windowHeight) && !affix && scrollTop < (elOffset.top + elHeight)) {
				if ((!this.repeat && this.firstFlag) || this.repeat) {
					this.affix = true
					this.firstFlag = false
				}
				this.$emit('inview', true)
			} else if (scrollTop > (elOffset.top + elHeight) && affix) {
				this.affix = false
				this.$emit('inview', false)
			} else if (scrollTop < (elOffset.top - windowHeight) && affix) {
				this.affix = false
				this.$emit('inview', false)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.scrollspy-component{
	

}
</style>
