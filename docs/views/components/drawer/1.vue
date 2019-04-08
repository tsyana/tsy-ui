<template>
    <div class="drawer-demo">
		<el-button @click="value1 = true">基础抽屉</el-button>
		<Drawer title="Basic Drawer" :closable="false" v-model="value1">
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
		<el-button @click="value2 = true">左侧滑出</el-button>
		<Drawer title="Basic Drawer"  placement="left" :closable="false" v-model="value2">
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
		<el-button @click="value5 = true">多层抽屉</el-button>
		<Drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
			<el-button @click="value6 = true">Two-level Drawer</el-button>
		</Drawer>
		<Drawer title="Two-level Drawer" :closable="false" v-model="value6">
			This is two-level drawer.
		</Drawer>
	</div>
</template>

<script>
    export default {
		data() {
			return{
				value1: false,
				value2: false,
				value5: false,
                value6: false
			}
		},
        methods: {
        }
    };
</script>
<style lang="scss" scoped>
.drawer-demo{
	
}
</style>

