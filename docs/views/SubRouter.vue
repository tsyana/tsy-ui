<template>
<el-container>
    <el-header>
        <doc-header>
            <span style="font-size: 25px;">{{api.title}}</span>
            <span slot="desc" style="margin-left: 20px;">[{{api.description}}]</span>
            <span class="fn-right">&nbsp;&nbsp;Author: {{api.author}}</span>
            
        </doc-header>
    </el-header>
    <el-container>
        <el-aside>
            <doc-side></doc-side>
        </el-aside>
        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer style="height: 30px;">
                <doc-footer></doc-footer>
            </el-footer>
        </el-container>
    </el-container>   
</el-container>
</template>
<script>
export default {
    mounted() {
        this.api = this.$route.meta.api.default
    },
    data() {
        return {
            api: {}
        }
    },
    watch: {
        $route() {
            this.api = this.$route.meta.api.default
        }
    }
}
</script>

<style lang="scss" scoped>
.fn-right{
    float: right;
}
</style>

