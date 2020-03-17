// 结合 el-container 使用

<template>
  <aside class="el-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    // 允许组件模板递归地调用自身。
    // 在vue-devtools的tree结构中显示名称
    name: 'ElAside',

    // 自定义属性，非api字段
    // 可以使用this.$options.componentName调用
    componentName: 'ElAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
