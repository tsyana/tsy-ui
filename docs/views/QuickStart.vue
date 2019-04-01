<template lang="pug">
  el-container
    el-header
      doc-header Quick Start
    el-container
      el-aside 
        doc-side 
      el-container
        el-main
          section.section__body
            h3.section__h3 npm 安装
            doc-code(":code"="version" lang="bash")
            h3.section__h3 import
            h4 app.js
            br
            doc-code.
              <br>  
              // 引入组件 
              import CDPVue from 'cdp-vue';
              // 使用插件
              Vue.use(CDPVue);
            h4 webpack
            br
            doc-code.
              <br>  
              entry: {
                vendor: [
                  'cdp-vue/dist/style.css',
                ]
              }
        el-footer(style="height: 30px;")
          doc-footer
</template>
<script>
    import packageInfo from '../../package.json';

    export default {
        data() {
            return  {
                version: 'npm install git+http://gitlab.cdpyun.com/ellly.qian/cdp-vue.git#dev'
            }
        },
        mounted() {
            this.version = `npm install git+http://gitlab.cdpyun.com/ellly.qian/cdp-vue.git#${packageInfo.version}`;
        }
    }
</script>
