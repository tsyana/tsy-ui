export default {
	author: '钱丹-Elly',
	title: 'Float Label',
	description: '浮动标签',
	props: [
		{
			content:	'config',
			type:	'object',
			default: "{}",
			info:	'文本框配置'
		}, 
		{
			content: 'config[label]',
			type: 'string',
			default: "''",
			info: '标签文本 必填'
		}, 
		{
			content: 'config[hasError]',
			type: 'boolean',
			default: "false[true,false]",
			info: '错误状态开关'
		}, 
		{
			content: 'config[height]',
			type: 'number',
			default: "60",
			info: '整体高度'
		}, 
		{
			content: 'config[hasClearButton]',
			type: 'boolean',
			default: "true[true,false]",
			info: '是否开启清除按钮'
		}, 
		{
			content: 'config[line]',
			type: 'boolean',
			default: "true[true,false]",
			info: '是否开启下划线'
		}, 
		{
			content: 'config[scale]',
			type: 'boolean',
			default: "true[true,false]",
			info: 'focus后label是否开启缩放效果'
		}, 
		{
			content: 'config[classes]',
			type: 'object',
			default: "{}",
			info: ''
		}, 
		{
			content: 'config[classes][error]',
			type: 'string',
			default: "has-error",
			info: '错误状态class'
		},
		{
			content: 'config[labelOffset]',
			type: 'object',
			default: "{}",
			info: 'label相对input位置'
		},
		{
			content: 'config[labelOffset][top]',
			type: 'number',
			default: "10",
			info: ''
		},
		{
			content: 'config[labelOffset][left]',
			type: 'number',
			default: "8",
			info: ''
		},
		{
			content: 'config[color]',
			type: 'object',
			default: "{}",
			info: ''
		},
		{
			content: 'config[color][focusColor]',
			type: 'string',
			default: "#128CED",
			info: 'focus后label颜色'
		},
		{
			content: 'config[color][lineColor]',
			type: 'string',
			default: "#128CED",
			info: '下划线的颜色'
		},
		{
			content: 'config[color][errorColor]',
			type: 'string',
			default: "#ff0000",
			info: '错误状态下颜色'
		},
		{
			content: 'config[color][blurredColor]',
			type: 'string',
			default: "rgba(3, 23, 40, 0.34)",
			info: 'blur后label颜色'
		},
	],
	events:  [
			{
				paramaters:	'无',
				name: 'input',
			    info: '值改变时触发'
			},
			{
				paramaters: '无',
				name: 'clear',
				info: '值清空时触发'
			},
			{
				paramaters: '无',
				name: 'blur',
				info: 'blur时触发'
			},
			{
				paramaters: '无',
				name: 'focus',
				info: 'focus时触发'
			}
		]
}