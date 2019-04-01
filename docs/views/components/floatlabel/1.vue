<template>
    <div class="float-label-example">
			<FloatLabel
				:config="config"
				@clear="clear('example')"
				@input="input(example)">
				<input v-model="example" autocomplete="off" name="cellphone" type="text">
			</FloatLabel>
		</div>
</template>

<script>
  export default {
		data() {
			return {
				example: '',
				config: {
					label: 'Mobile', // 标签文本 必填
					classes: {
						error: 'has-error' // 错误状态class 默认has-error
					},
					hasError: false, // 错误状态开关 默认false
					height: 60, // 整体高度 默认60
					hasClearButton: true, // 是否开启清除按钮 默认true
					line: true, // 是否开启下划线 默认true
					scale: true, // focus后label是否开启缩放效果 默认true
					labelOffset: { // label相对input位置 默认 top 10 left 8
						top: 10, 
						left: 8
					},
					color: {
						focusColor: '#128CED', // focus后label颜色
						lineColor: '#128CED', //下划线的颜色
						errorColor: '#ff0000', // 错误状态下颜色
						blurredColor: 'rgba(3, 23, 40, 0.34)' // blur后label颜色
					}
				}
			}
		},
		methods: {
			clear(type) {
				this[type] = ''
			},
			input(val) {
				const reg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/
				this.config.hasError = !reg.test(val)
			}
		}
  };
</script>

<style lang="scss" scoped>
.float-label-example{
}

</style>


