<template>
    <div class="backtop-demo">
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
		<Back-top :height="100" :bottom="100">
        	<div class="top">返回顶端</div>
    	</Back-top>
	</div>
</template>

<script>
    export default {

    };
</script>
<style lang="scss" scoped>
.backtop-demo{
	.top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
}
</style>

