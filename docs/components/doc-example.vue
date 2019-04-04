<template>
    <div>
        <div class="fn-clear">
            <h3 class="code__title fn-left">{{title}}</h3>
            <div class="code__toggle fn-right" @click='showCode = !showCode'>Code</div>
        </div>
        <doc-code lang="html" v-show="showCode" :code="content"></doc-code>
        <template v-if="file">
            <div>
                <div :ref="'example' + _uid"></div>
            </div>
        </template>
        <template v-else>
            <iframe class="iframe__wrapper" :height="height + 'px'" :src="'/' + src" frameborder="0" ></iframe>
        </template>
    </div>
</template>
<script>
    import Vue from 'vue';

    export default {
        data() {
            return {
                showCode: false,
                template: null,
                content: null,
            };
        },
        props: {
            title: String,
            file: String,
            src: String,
            height: {
                type: String,
                default: 'auto'
            },
            data: {
                type: Object,
                default() {
                    return {
                        example: true
                    };
                }
            }
        },
        mounted() {

            if (this.file) {
                this.request(`/example/${this.file}`, this.boot);
            } else {
                this.request(`/example/${this.src}.vue`, this.renderCode);
            }
        },
        methods: {

            renderCode(res) {
                this.content = res.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            },
            boot(res) {
                this.template = res;
                this.renderCode(res);
                const render = Vue.compile(this.template);
                const vm = this;

                new Vue({
                    data() {
                        return vm.data;
                    },
                    render: render.render,
                    staticRenderFns: render.staticRenderFns
                }).$mount(this.$refs[`example${vm._uid}`]);
            },
            request(file, cb) {
                const xmlhttp = new XMLHttpRequest();
                const vm = this;
                const timeout = setTimeout(() => (this.loading = true), 500);
                xmlhttp.open('GET', `${file}`, true);

                xmlhttp.onreadystatechange = () => {
                    if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
                        clearTimeout(timeout);
                        vm.loading = false;
                        cb(xmlhttp.responseText);
                    }
                };
                xmlhttp.send();
            },
            openNewTab() {
                window.open(`/${this.src}`);
            }
        }
    };
</script>
<style lang="scss" scoped>
.fn-clear{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .code__toggle{
        cursor: pointer;
        color: #74b944;
    }
}
.iframe__wrapper{
    width: calc(100% - 30px);
    border: 1px solid #ebebeb;
    padding: 15px;
}
</style>

