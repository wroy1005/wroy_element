// 这个alert不是弹窗alert，而是固定在页面中展示的警示信息组件。
// 关闭后就关闭了，不建议通过js控制打开及修改内容。
<template>
  <!-- 
    增加过渡效果。
    参见https://vuejs.bootcss.com/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D
    .el-alert-fade-enter{}
    .el-alert-fade-leave-active{}
   -->
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <!-- 具名插槽 -->
          <slot name="title">{{ title }}</slot>
        </span>
        <!-- 使用 $props.description 或者 $slots.default -->
        <p class="el-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error'
  };
  export default {
    name: 'ElAlert',

    // prop 的定义应该尽量详细，至少需要指定其类型。
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        // Prop 验证
        validator: function(value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `el-alert--${ this.type }`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
