# Theme

主题仅针对 SMACSS 中 theme 这一类别进行修改。

## Variables

把样式中的颜色、字体、动画效果、背景图、图标单独拆分出来形成变量。

`注` 由于颜色肉眼不可识别的特性，变量名需使用颜色名称。其余可根据使用场景进行命名。


```
// Colors
$blue = {
  darken: #74b944
  base: #74b944
  lighten: #b1cdfa
  lightener: #f1f7fe
}
$red = {
  base: #d23f31
}
$gray = {
  darken: #333
  base: #999
  lighten: #ccc
  lightener: #eee
}
$green = {
  darken: #2d7f5a
  base: #42b983
  lighten: #6cc9b6
  lightener: #eef9f4
}

// Fonts
$font-family-base = "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif
$font-family-code = mononoki, Consolas, "Liberation Mono", Menlo, Courier, monospace

// Transitions
$primary-transition = 0.3s cubic-bezier(0, 0, .2, 1)
$secondary-transition = 0.2s ease-out

// Background Image
$bg-code = '/public/img/code-bg.png'

// Icon
$icon-favicon = '/public/img/logo-48.png'
```

## Define Theme

为主题选择需要的颜色变量。

```
// Theme
$theme := {
  primary: {
    darken: $green.darken
    base: $green.base
    lighten: $green.lighten
    lightener: $green.lightener
  }
  // accent:
  // secondary
  // info
  // warning
  error: $red.base
  // success
}
```

## Start

* 根据组件的各主题设计，提取对应的变量
* 每套主题都使用到的变量存放于 `_variables.styl` 中
* 为每套主题单独创建一个文件 `_theme[-name].styl`
* 默认引用 `_theme.styl` 
* 当需要切换主题时仅需要切换 `_theme[-name].styl` 文件即可
* 如果用户需要自定义主题，仅需新创建一个 `_theme[-name].styl` 文件并引入即可

`注` 用户需要自定义主题需优先 import

# Class

当修改 SMACSS 中 theme 类别无法满足我们的需求时，请耐心往下看。

## Plugin Support

通过参数配置来选择样式组合。

*template*
 
```
":class"="classes"
```

*script*

```
computed: {
  classes () {
    return {
      'alert--dismissible': this.dismissible,
      'alert--error': this.error,
      'alert--info': this.info,
      'alert--success': this.success,
      'alert--warning': this.warning,
      'alert--round': this.round,
      'alert--small': this.small,
    }
  }
}
```
    
`注` 鉴于配置项属于用户输入的多组合类型，因此需要考虑配置项之间各组合使用的场景、优先级、冲突。

```
'alert--fixed-right': this.fixed && this.right,
'alert--dark': this.dark,
'alert--light': this.light && !this.dark,
```

## Add Class

基于 Vue class 的特性，可以直接在调用的组件上加上属于特定的 class。

```
cdp-alert(class="b2b-alert")
```

## Reset

通过更高优先级的择选择器来重置样式。

```
.b2b .alert__text
```

`注` 不建议使用

# Demo

// TODO Lemon