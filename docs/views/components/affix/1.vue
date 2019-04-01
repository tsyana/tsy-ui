<template>
    <div class="affix-demo">
		<Affix>
			<span class="demo-affix">固定在最顶部</span>
		</Affix>
		<h1>sth...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<Affix :offset-top="50" @on-change="change">
        <span class="demo-affix">固定在距离顶部 50px 的位置</span>
    </Affix>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
		<h1>...</h1>
	</div>
</template>

<script>
    export default {
        methods: {
					change (status) {
						this.$message(`当前状态：${status}`);
          }
        }
    };
</script>
<style lang="scss" scoped>
.affix-demo{
	.demo-affix{
		display: inline-block;
		color: #fff;
		padding: 10px 30px;
		text-align: center;
		background: rgba(0,153,229,.9);
	}
}
</style>

