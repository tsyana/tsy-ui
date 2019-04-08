export default {
	author: '钱丹-Elly',
	title: 'Drawer - 抽屉',
	description: '抽屉从父窗体边缘滑入，覆盖住部分父窗体内容.',
	props: [
		{
			content: 'value',
			type: 'boolean',
			default: 'false',
			info: '抽屉是否显示，可使用 v-model 双向绑定数据'
		},
		{
			content: 'title',
			type: 'string',
			default: '-',
			info: '抽屉标题，如果使用 slot 自定义了页头，则 title 无效'
		},
		{
			content: 'width',
			type: 'Number | String',
			default: '256',
			info: '抽屉宽度。当其值不大于 100 时以百分比显示，大于 100 时为像素'
		},
		{
			content: 'closable',
			type: 'Boolean',
			default: 'true',
			info: '是否显示右上角的关闭按钮'
		},
		{
			content: 'mask-closable',
			type: 'Boolean',
			default: 'true',
			info: '是否允许点击遮罩层关闭'
		},
		{
			content: 'mask',
			type: 'Boolean',
			default: 'true',
			info: '是否显示遮罩层'
		},
		{
			content: 'mask-style',
			type: 'Object',
			default: '-',
			info: '遮罩层样式'
		},
		{
			content: 'styles',
			type: 'Object',
			default: '-',
			info: '抽屉中间层的样式'
		},
		{
			content: 'scrollable',
			type: 'Boolean',
			default: 'false',
			info: '页面是否可以滚动'
		},
		{
			content: 'placement',
			type: 'String',
			default: 'right',
			info: '抽屉的方向，可选值为 left 或 right'
		},
		{
			content: 'transfer',
			type: 'Boolean',
			default: 'true',
			info: '是否将抽屉放置于 body 内'
		},
		{
			content: 'class-name',
			type: 'String',
			default: '-',
			info: '设置抽屉容器.ivu-drawer-wrap的类名'
		},
		{
			content: 'inner',
			type: 'Boolean',
			default: 'false',
			info: '是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 transfer 属性'
		}
	],
	events: [
		{
			paramaters: '无',
			name: 'on-close',
			info: '关闭抽屉时触发'
		},
		{
			paramaters: 'true / false',
			name: 'on-visible-change',
			info: '显示状态发生变化时触发'
		}
	],
	slots: [
		{
			name: 'header',
			info: '自定义标题栏'
		},
		{
			name: 'close',
			info: '自定义右上角关闭内容'
		},
		{
			name: '默认',
			info: '抽屉主体内容'
		}
	],
}
