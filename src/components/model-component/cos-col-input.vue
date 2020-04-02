<!-- 表单组件 - input输入框 -->
<!-- 案列：
  1.引入：import coscolinput from '@/views/flow/genemast/costomview/cos-col-input'
  2.注册：'cos-col-input': coscolinput
  3.使用：<cos-col-input v-model="mainModel.futureCompy" coslabel="" cosprop="futureCompy" flag=""></cos-col-input>
 -->
<!-- 说明：
  coltype：宽度样式（默认：0.25）
  coslabel：label标题
  cosprop：表单的prop属性
  cospropBoolean: 是否必填（默认：true）
  cospropMsg: 必填提示信息 (默认：请输入)
-->
<!-- 注意：暂无 -->
<template>
  <el-col :xs="getColSize('xs',coltype)" :sm="getColSize('sm',coltype)" :md="getColSize('md',coltype)" :lg="getColSize('lg',coltype)">
    <el-form-item :label="coslabel" :prop="cosprop" :rules="(cospropBoolean === 'true')? [{ required: true, message: cospropMsg }] : []" >
      <div
        :class="[
          type === 'textarea' ? 'el-textarea' : 'el-input',
          inputSize ? 'el-input--' + inputSize : '',
          {
            'is-disabled': inputDisabled,
            'el-input-group': $slots.prepend || $slots.append,
            'el-input-group--append': $slots.append,
            'el-input-group--prepend': $slots.prepend,
            'el-input--prefix': $slots.prefix || prefixIcon,
            'el-input--suffix': $slots.suffix || suffixIcon
          }
        ]"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false">
        <template v-if="type !== 'textarea'">
          <!-- 前置元素 -->
          <div class="el-input-group__prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
          </div>
          <input
            :tabindex="tabindex"
            v-if="type !== 'textarea'"
            class="el-input__inner"
            v-bind="$attrs"
            :type="type"
            :disabled="inputDisabled"
            :autocomplete="autoComplete"
            :value="currentValue"
            ref="input"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :aria-label="label">
          <!-- 前置内容 -->
          <span class="el-input__prefix" v-if="$slots.prefix || prefixIcon" :style="prefixOffset">
            <slot name="prefix"></slot>
            <i class="el-input__icon"
              v-if="prefixIcon"
              :class="prefixIcon">
            </i>
          </span>
          <!-- 后置内容 -->
          <span
            class="el-input__suffix"
            v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon"
            :style="suffixOffset">
            <span class="el-input__suffix-inner">
              <template v-if="!showClear">
                <slot name="suffix"></slot>
                <i class="el-input__icon"
                  v-if="suffixIcon"
                  :class="suffixIcon">
                </i>
              </template>
              <i v-else
                class="el-input__icon el-icon-circle-close el-input__clear"
                @click="clear">
              </i>
            </span>
            <i class="el-input__icon"
              v-if="validateState"
              :class="['el-input__validateIcon', validateIcon]">
            </i>
          </span>
          <!-- 后置元素 -->
          <div class="el-input-group__append" v-if="$slots.append">
            <slot name="append"></slot>
          </div>
        </template>
        <textarea
          v-else
          :tabindex="tabindex"
          class="el-textarea__inner"
          :value="currentValue"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @input="handleInput"
          ref="textarea"
          v-bind="$attrs"
          :disabled="inputDisabled"
          :style="textareaStyle"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
          :aria-label="label">
        </textarea>
      </div>
    </el-form-item>
  </el-col>
</template>
<script>
  import emitter from 'element-ui/src/mixins/emitter'
  import Migrating from 'element-ui/src/mixins/migrating'
  import calcTextareaHeight from 'element-ui/packages/input/src/calcTextareaHeight'
  import merge from 'element-ui/src/utils/merge'
  import { isKorean } from 'element-ui/src/utils/shared'
  import colSize from '@/components/model-javaScript/model-js-01'
  export default {
    name: 'ElInput',
    componentName: 'ElInput',
    mixins: [emitter, Migrating],
    inheritAttrs: false,
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },
    props: {
      value: [String, Number],
      size: String,
      resize: String,
      form: String,
      disabled: Boolean,
      flag: {
        type: String
      },
      coltype: {
        type: String
      },
      coslabel: {
        type: String
      },
      cosprop: {
        type: String
      },
      cospropBoolean: {
        type: String,
        default: 'true'
      },
      cospropMsg: {
        type: String,
        default: '请输入'
      },
      type: {
        type: String,
        default: 'text'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      validateEvent: {
        type: String,
        default: 'true'
      },
      suffixIcon: String,
      prefixIcon: String,
      label: String,
      clearable: {
        type: Boolean,
        default: false
      },
      tabindex: String
    },
    created() {
      this.$on('inputSelect', this.select)
    },
    mounted() {
      this.resizeTextarea()
      if (this.isGroup) {
        this.prefixOffset = this.calcIconOffset('pre')
        this.suffixOffset = this.calcIconOffset('suf')
      }
    },
    data() {
      return {
        currentValue: this.value === undefined ? '' : this.value,
        textareaCalcStyle: {},
        prefixOffset: null,
        suffixOffset: null,
        hovering: false,
        focused: false,
        isOnComposition: false
      }
    },
    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize
      },
      validateState() {
        return this.elFormItem ? this.elFormItem.validateState : ''
      },
      needStatusIcon() {
        return this.elForm ? this.elForm.statusIcon : false
      },
      validateIcon() {
        return {
          validating: 'el-icon-loading',
          success: 'el-icon-circle-check',
          error: 'el-icon-circle-close'
        }[this.validateState]
      },
      textareaStyle() {
        return merge({}, this.textareaCalcStyle, { resize: this.resize })
      },
      inputSize() {
        return 'small'
      },
      inputDisabled() {
        if (this.flag === 'view' || this.flag === 'handle') {
          return true
        }
        return this.disabled || (this.elForm || {}).disable
      },
      isGroup() {
        return this.$slots.prepend || this.$slots.append
      },
      showClear() {
        return this.clearable && !this.disabled && this.currentValue !== '' && (this.focused || this.hovering)
      }
    },
    watch: {
      'value'(val, oldValue) {
        this.setCurrentValue(val)
      }
    },
    methods: {
      getColSize(type, val) {
        return colSize.getColSize(type, val)
      },
      focus() {
        (this.$refs.input || this.$refs.textarea).focus()
      },
      blur() {
        (this.$refs.input || this.$refs.textarea).blur()
      },
      getMigratingConfig() {
        return {
          props: {
            'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
            'on-icon-click': 'on-icon-click is removed.'
          },
          events: {
            'click': 'click is removed.'
          }
        }
      },
      handleBlur(event) {
        this.focused = false
        this.$emit('blur', event)
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue])
        }
      },
      select() {
        (this.$refs.input || this.$refs.textarea).select()
      },
      resizeTextarea() {
        if (this.$isServer) return
        const { autosize, type } = this
        if (type !== 'textarea') return
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          }
          return
        }
        const minRows = autosize.minRows
        const maxRows = autosize.maxRows

        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
      },
      handleFocus(event) {
        this.focused = true
        this.$emit('focus', event)
      },
      handleComposition(event) {
        if (event.type === 'compositionend') {
          this.isOnComposition = false
          this.handleInput(event)
        } else {
          const text = event.target.value
          const lastCharacter = text[text.length - 1] || ''
          this.isOnComposition = !isKorean(lastCharacter)
        }
      },
      handleInput(event) {
        if (this.isOnComposition) return
        const value = event.target.value
        this.$emit('input', value)
        this.setCurrentValue(value)
      },
      handleChange(event) {
        this.$emit('change', event.target.value)
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return
        this.$nextTick(_ => {
          this.resizeTextarea()
        })
        this.currentValue = value
        if (this.validateEvent) {
          this.dispatch('ElFormItem', 'el.form.change', [value])
        }
      },
      calcIconOffset(place) {
        const pendantMap = {
          'suf': 'append',
          'pre': 'prepend'
        }

        const pendant = pendantMap[place]

        if (this.$slots[pendant]) {
          return { transform: `translateX(${place === 'suf' ? '-' : ''}${this.$el.querySelector(`.el-input-group__${pendant}`).offsetWidth}px)` }
        }
      },
      clear() {
        this.$emit('input', '')
        this.$emit('change', '')
        this.$emit('clear')
        this.setCurrentValue('')
        this.focus()
      }
    }
  }
</script>

