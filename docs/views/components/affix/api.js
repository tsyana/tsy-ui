export default {
    author: '钱丹-Elly',
    title: 'Affix - 图钉',
    description: '使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。Forked from iView',
    props:  [
        {
            content: 'offset-top',
            type: 'number',
            default: '0',
            info: '距离窗口顶部达到指定偏移量后触发'
        },
        {
            content: 'offset-bottom',
            type: 'number',
            default: '-',
            info: '距离窗口底部达到指定偏移量后触发'
        },
    ],
    events: [
        {
            paramaters: 'true | false',
            name: 'on-change',
            info: '在固定状态发生改变时触发'
        }
    ]
}
