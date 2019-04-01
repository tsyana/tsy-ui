<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="iconfont icon-angle-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
    import { scrollTop } from '../../utilities/assist';
    import { on, off } from '../../utilities/dom';
    const prefixCls = 'ivu-back-top';
    export default {
        props: {
            height: {
                type: Number,
                default: 400
            },
            bottom: {
                type: Number,
                default: 30
            },
            right: {
                type: Number,
                default: 30
            },
            duration: {
                type: Number,
                default: 1000
			},
			elementName: {
				type: String,
				default: 'window'
			}
        },
        name: 'BackTop',
        data () {
            return {
                backTop: false
            };
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
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show`]: this.backTop
                    }
                ];
            },
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                };
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            handleScroll () {
				if (this.elementName == 'window') {
					this.backTop = window.pageYOffset >= this.height;
				} else {
					this.backTop = document.querySelector(this.elementName).scrollTop >= this.height;
				}
                
            },
            back () {
				if (this.elementName == 'window') {
					const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                	scrollTop(window, sTop, 0, this.duration);
				} else {
					const sTop = document.querySelector(this.elementName).scrollTop;
                	scrollTop(document.querySelector(this.elementName), sTop, 0, this.duration);
				}
                this.$emit('on-click');
            }
        }
    };
</script>