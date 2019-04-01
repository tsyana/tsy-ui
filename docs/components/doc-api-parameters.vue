<template>
  <div class="section__api">
    <table v-for="(value, key) in parameters">
      <caption>
        <strong>{{key}}</strong>
      </caption>
      <thead>
        <tr>
          <th v-for="title in titles">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in value">
          <td v-for="(text, index) in item">
            <span v-if="index === 0"><code>{{ text }}</code></span>
            <span v-else>{{ text }}</span>  
          </td>
        </tr>
      </tbody> 
    </table>
  </div> 
</template>
<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      },

      parameters: {
        type: Object,
        default: () => {}
      },
    }
  }
</script>
<style >
</style>