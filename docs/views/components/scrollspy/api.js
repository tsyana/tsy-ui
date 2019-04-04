export default {
	author: '钱丹-Elly',
	title: 'Scrollspy - 滚动监听',
	description: '在滚动页面时，触发一些事件及动画。',
	props: [
		{
			content: 'elementName',
			type: 'string',
			default: 'window',
			info: '页面滚动层的class，默认监听window的滚动，可以自定义滚动层，但要确保根据elementName取到的元素唯一'
		},
		{
			content: 'inviewClass',
			type: 'string',
			default: '-',
			info: '滚动到此元素位置时添加的class'
		},
		{
			content: 'styles',
			type: 'string',
			default: '-',
			info: '被监听元素的样式'
		}
	],
	events: [
		{
			paramaters: 'true | false',
			name: 'inview',
			info: '在被监听元素滚动、滚出到窗口内时触发'
		}
	]
}
