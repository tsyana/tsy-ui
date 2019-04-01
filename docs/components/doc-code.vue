<template>
  <div class="code__panel">
    <template v-if="!copied">
      <div class="code__copy" @click="copyCode">Copy</div>
    </template>
    <template v-if="copied">
      <div class="code__copy--copied">Copied</div>
    </template>
    <textarea ref="copyTextarea" v-model="copyContent" v-if="copyContent"></textarea>
    <pre>
      <template v-if="code">
        <code ref="code" v-highlight="lang"  v-html="code"></code>
      </template>
      <template v-if="!code">
        <code ref="code" v-highlight="lang">
          <slot></slot>
        </code>
      </template>
    </pre>
  </div>
</template>
<style lang="scss" scoped>
.code__panel{
  margin: 0;
  padding: 0;
  pre{
    margin: 0;
    padding: 0;
  }
  // background: #f8f8f8;
  .code__copy, .code__copy--copied{
    color: #74b944;
    float: right;
    cursor: pointer;
  }
  code{
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #eaeefb;
  }
}
</style>

<script>
  import hljs from 'highlight.js/lib/highlight';
  import 'highlight.js/styles/github.css';

  export default {
    data () {
      return {
        copyContent: null,
        copied: false
      }
    },
    props: {
      lang: String,
      code: String
    },
    methods: {
      copyCode () {
        this.copyContent = this.$refs.code.innerText

        this.$nextTick(() => {
          this.$refs.copyTextarea.select()
          document.execCommand('copy')
          this.copyContent = null
          this.copied = true
          setTimeout(() => this.copied = false, 2000)
        })
      },
    }
  }
</script>