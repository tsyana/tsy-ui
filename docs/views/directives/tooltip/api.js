export default {
	author: '钱丹-Elly',
	title: 'v-tooltip',
	description: '自适应文字提示,当文字内容过长出现...时，hover显示完整文字',
	props: [
		{
			content: 'position',
			type: 'string',
			default: 'bottom[bottom,top,left,right]',
			info: 'tooltip出现的位置'
		},
		{
			content: 'click',
			type: 'boolean',
			default: 'false[true, false]',
			info: '当被监听元素通过点击修改display被隐藏，tooltip没有消失时，可以通过设置click：true使其消失'
		}
	]
}
