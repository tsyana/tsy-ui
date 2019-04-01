const fs = require('fs');
const path = require('path');

// about gen side nav
const genSubSideNav = (dir) => {
    const files = fs.readdirSync(dir);
    const type = dir.replace('./docs/views/', '');
    let template = `    <el-submenu index="${type}">
        <template slot="title">
          <span>${type}</span>
        </template>`;
    
    files.forEach((file, index) => {
        
        template += `
        <router-link to="/${type}/${file}">
            <el-menu-item-group>
                <el-menu-item index="${type}-${index}">${file}</el-menu-item>
            </el-menu-item-group>
        </router-link>
`;
    });
    template += `    </el-submenu>
`
    return template;
};

const genSideNav = () => {
    // gen nav
    const components = genSubSideNav('./docs/views/components');
    let template = `<template>
 <!-- auto gen -->
  <el-menu
      class="el-menu-vertical-demo"
      >
`;


    template += components 

    const directives = genSubSideNav('./docs/views/directives');

    template += `${directives}
  </el-menu>
</template>`;
    return template;
};

// about gen router
let routerComponents = '';
let routerDirectives = '';
const genRouterDemo = (rootA) => {
    let res = '';
    const root = rootA;
    const files = fs.readdirSync(root);

    files.forEach((file) => {
        const pathURL = `${root}/${file}`;
        const stat = fs.lstatSync(pathURL);
        if (!stat.isDirectory()) {
            const pathInfo = path.parse(pathURL);
            
            if (pathInfo.ext === '.vue' && pathInfo.base !== 'QuickStart.vue' && pathInfo.base !== 'SubRouter.vue') {
                let routerPath = pathInfo.dir.replace('./docs/views', '');
                const pathSplits = path.dirname(pathURL).split('/');

                // gen demo
                if (pathInfo.name !== pathSplits[pathSplits.length - 1]) {
                    routerPath += `/${pathInfo.name}`;
                    res += `    { path: '${routerPath}', component: require('${pathURL.replace('./docs', '..')}') },
`;
                } else if (routerPath.indexOf('/directives') === 0) {
                    routerDirectives += `    { path: '${routerPath.replace('/directives/', '')}', component: require(/* webpackChunkName: "${pathInfo.name}" */'${pathURL.replace('./docs', '..')}'), 
                meta: { api: require('${pathInfo.dir.replace('./docs', '..')}/api.js')} },
`;
                } else if (routerPath.indexOf('/components') === 0) {

                    routerComponents += `    { path: '${routerPath.replace('/components/', '')}', component: require(/* webpackChunkName: "${pathInfo.name}" */'${pathURL.replace('./docs', '..')}'),
                meta: { api: require('${pathInfo.dir.replace('./docs', '..')}/api.js')} },
`;
                } else {
                    console.info('generate router: this path can not generate router');
                }

                console.info(`generate router:  ${routerPath}`);
            }
        } else {
            res = res.concat(genRouterDemo(pathURL));
        }
    });
    return res;
};

// init
(() => {
    // gen side nav
    fs.writeFileSync('./docs/components/doc-nav.vue', genSideNav(), 'UTF-8');

    // gen router
    const res = genRouterDemo('./docs/views');
    fs.writeFileSync('./docs/router/auto-gen.js', `const demo = [
${res}];
const components = [
${routerComponents}];
const directives = [
${routerDirectives}];
export default {
    demo,
    components,
    directives
};`, 'UTF-8');
})();
