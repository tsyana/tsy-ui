<template>
    <footer class="doc__footer" style="height: 30px;text-align: center">
        <a href="http://aimi-test.ecosaas.com/iso/" target="_blank">aimi-test.ecosaas.com/iso&nbsp;
        </a>
            CDP VUE {{version}} •
        <span class="ft-gray">{{time}}ms</span>    
    </footer>
</template>
<script>
    import packageInfo from '../../package.json';

    export default {
        data() {
          return  {
              time: 0,
              version: '0.1.0'
          }
        },
        mounted() {
            this.version = packageInfo.version;

            // TODO: 在该周期内 querySelector 获取不到 #app 外的内容
            var it = this;
            setTimeout(() => {
                var time = document.querySelector('#time')
                it.time = ` ${time.textContent}`;
            }, 100)
        }
    }
</script>