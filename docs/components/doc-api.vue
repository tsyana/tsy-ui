<template>
  <div>
      <div v-if="api.props" style="margin-top: 20px;">
        <h3>Props</h3>
        <el-table
          :data="api.props"
          style="width: 100%">
          <el-table-column
            prop="content"
            label="内容"
            >
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
            >
          </el-table-column>
          <el-table-column
            prop="default"
            label="默认值[可选值]">
          </el-table-column>
          <el-table-column
            prop="info"
            label="说明">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="api.events"  style="margin-top: 20px;">
        <h3>Events</h3>
        <el-table
          :data="api.events"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            >
          </el-table-column>
          <el-table-column
            prop="paramaters"
            label="参数"
            >
          </el-table-column>
          <el-table-column
            prop="info"
            label="说明">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="api.slots"  style="margin-top: 20px;">
        <h3>Slots</h3>
        <el-table
          :data="api.events"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            >
          </el-table-column>
          <el-table-column
            prop="info"
            label="说明">
          </el-table-column>
        </el-table>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
       tableData: [],
      propHeaders: ['Option', 'Type(s)', 'Default', 'Description'],
      slotHeaders: ['Name', 'Description'],
      functionalHeaders: ['Name', 'Class'],
      eventHeaders: ['Name', 'Type(s)', 'Description'],
    }
  },
  props: ['api'],
  mounted () {

  },
  methods: {

  }
}
</script>