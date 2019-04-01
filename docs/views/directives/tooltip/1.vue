<template>
    <div class="tooltip-example">
		<span v-tooltip="{position: 'bottom'}">{{textarea}}</span>
	</div>
</template>

<script>
    export default {
		data() {
			return {
				textarea: '调整窗口大小看效果，调整窗口大小看效果'
			}
		}
    };
</script>
<style lang="scss" scoped>
.tooltip-example{
	display: flex;
	justify-content: center;
	span{
		width: 30%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		display: inline-block;
	}
}
</style>

