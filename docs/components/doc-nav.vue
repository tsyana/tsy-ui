<template>
 <!-- auto gen -->
  <el-menu
      class="el-menu-vertical-demo"
      >
    <el-submenu index="components">
        <template slot="title">
          <span>components</span>
        </template>
        <router-link to="/components/affix">
            <el-menu-item-group>
                <el-menu-item index="components-0">affix</el-menu-item>
            </el-menu-item-group>
        </router-link>

        <router-link to="/components/backtop">
            <el-menu-item-group>
                <el-menu-item index="components-1">backtop</el-menu-item>
            </el-menu-item-group>
        </router-link>

        <router-link to="/components/floatlabel">
            <el-menu-item-group>
                <el-menu-item index="components-2">floatlabel</el-menu-item>
            </el-menu-item-group>
        </router-link>

        <router-link to="/components/scrollspy">
            <el-menu-item-group>
                <el-menu-item index="components-3">scrollspy</el-menu-item>
            </el-menu-item-group>
        </router-link>
    </el-submenu>
    <el-submenu index="directives">
        <template slot="title">
          <span>directives</span>
        </template>
        <router-link to="/directives/tooltip">
            <el-menu-item-group>
                <el-menu-item index="directives-0">tooltip</el-menu-item>
            </el-menu-item-group>
        </router-link>
    </el-submenu>

  </el-menu>
</template>