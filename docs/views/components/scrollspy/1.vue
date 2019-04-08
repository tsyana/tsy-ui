<template>
    <div class="scrollspy-demo">
		<scrollspy :inviewClass="`animated ${item}`" :styles="styles" :key="item" v-for="(item, index) in classes" :repeat="false">
			<div class="part" :class="'part-' + (index + 1)">
				part {{ index + 1 }}
			</div>
		</scrollspy>
	</div>
</template>

<script>
    export default {
		data() {
			return{
				styles: 'width: 100px;height: 100px;margin: 20px;',
				classes: ['flipInY', 'bounceIn', 'fadeInDown', 'zoomInUp',
				'slideInDown', 'tada']
			}
		},
        methods: {
        }
    };
</script>
<style lang="scss" scoped>
.scrollspy-demo{
	.part{
		width: 100px;
		height: 100px;
		border-radius: 8px;
		text-align: center;
		line-height: 100px;
		border: 1px solid #eaeefb;
	}
	.part-2, .part-5 {
		margin-left: 225px;
	}
	.part-3, .part-4{
		margin-left: 450px;
	}
}
</style>

