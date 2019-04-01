export default {
    author: '钱丹-Elly',
    title: 'BackTop - 返回顶部',
    description: '当页面内容冗长，需要快捷返回顶部时使用。Forked from iView',
    props:  [
        {
            content: 'height',
            type: 'number',
            default: '400',
            info: '页面滚动高度达到该值时才显示BackTop组件'
        },
        {
            content: 'bottom',
            type: 'number',
            default: '30',
            info: '组件距离底部的距离'
        },
        {
            content: 'right',
            type: 'number',
            default: '30',
            info: '组件距离右部的距离'
        },
        {
            content: 'duration',
            type: 'number',
            default: '1000',
            info: '滚动动画持续时间，单位 毫秒'
        },
    ],
    events: [
        {
            paramaters: '无',
            name: 'on-click',
            info: '点击按钮时触发'
        }
    ]
}
