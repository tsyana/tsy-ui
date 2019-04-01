<template>
    <aside class="doc__side">
        <el-scrollbar :resize="true" ref="mainScroll">
            <doc-nav></doc-nav>
        </el-scrollbar>
    </aside>
</template>
<style lang="scss" scoped>
.doc__side{
  height: 100%;
}
</style>

