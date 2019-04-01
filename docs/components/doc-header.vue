<template>
    <header class="doc__header">
        <router-link to="/quick-start">
            <div class="doc__header--title">CDP Vue</div>
        </router-link>
        <div class="fn-clear">
            <slot></slot>
            <slot name="desc"></slot>
        </div>
        <div>
            
        </div>
    </header>
</template>
<style lang="scss" scoped>
.doc__header{
    background: #74b944;
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: white;
    &--title{
        font-size: 28px;
        float: left;
        color: white;
        margin: 0 20px;
        font-weight: 600;
    }
    .fn-clear{
        margin-left: 300px;
    }
}
</style>

