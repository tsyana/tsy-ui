<template>
    <div>
        <div ref="point" :class="classes" :style="styles">
            <slot></slot>
        </div>
        <div v-show="slot" :style="slotStyle"></div>
    </div>
</template>
<script>
    import { on, off } from '../../utilities/dom';
    const prefixCls = 'ivu-affix';
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
        name: 'Affix',
        props: {
            offsetTop: {
                type: Number,
                default: 0
            },
            offsetBottom: {
                type: Number
			},
			elementName: {
				type: String,
				default: 'window'
			}
        },
        data () {
            return {
                affix: false,
                styles: {},
                slot: false,
                slotStyle: {}
            };
        },
        computed: {
            offsetType () {
                let type = 'top';
                if (this.offsetBottom >= 0) {
                    type = 'bottom';
                }
                return type;
            },
            classes () {
                return [
                    {
                        [`${prefixCls}`]: this.affix
                    }
                ];
            }
        },
        mounted () {
			if (this.elementName == 'window') {
				on(window, 'scroll', this.handleScroll);
				on(window, 'resize', this.handleScroll);
			} else {
				on(document.querySelector(this.elementName), 'scroll', this.handleScroll);
				on(document.querySelector(this.elementName), 'resize', this.handleScroll);
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
                // Fixed Top
                if ((elOffset.top - this.offsetTop) < scrollTop && this.offsetType == 'top' && !affix) {
                    this.affix = true;
                    this.slotStyle = {
                        width: this.$refs.point.clientWidth + 'px',
                        height: this.$refs.point.clientHeight + 'px'
                    };
                    this.slot = true;
                    this.styles = {
                        top: `${this.offsetTop}px`,
                        left: `${elOffset.left}px`,
                        width: `${this.$el.offsetWidth}px`
                    };
                    this.$emit('on-change', true);
                } else if ((elOffset.top - this.offsetTop) > scrollTop && this.offsetType == 'top' && affix) {
                    this.slot = false;
                    this.slotStyle = {};
                    this.affix = false;
                    this.styles = null;
                    this.$emit('on-change', false);
                }
                // Fixed Bottom
                if ((elOffset.top + this.offsetBottom + elHeight) > (scrollTop + windowHeight) && this.offsetType == 'bottom' && !affix) {
                    this.affix = true;
                    this.styles = {
                        bottom: `${this.offsetBottom}px`,
                        left: `${elOffset.left}px`,
                        width: `${this.$el.offsetWidth}px`
                    };
                    this.$emit('on-change', true);
                } else if ((elOffset.top + this.offsetBottom + elHeight) < (scrollTop + windowHeight) && this.offsetType == 'bottom' && affix) {
                    this.affix = false;
                    this.styles = null;
                    this.$emit('on-change', false);
                }
            }
        }
    };
</script>