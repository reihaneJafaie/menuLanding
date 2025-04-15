<template>
    <div>
      <div v-for="(value, index) in values" :key="index" class="otp-input-wrapper">
        <input
          :ref="'otpInput' + index"
          :value="value"
          @input="onInput($event, index)"
          @paste="onPaste($event)"
          @keydown="onKeyDown($event, index)"
          :autofocus="index === 0"
          autocomplete="one-time-code"
          class="otp-input"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      fields: {
        type: Number,
        required: true,
        default: 4,
      },
    },
    data() {
      return {
        values: Array(this.fields).fill(""),
      };
    },
    methods: {
      onInput(event, index) {
        const value = event.target.value;
        if (value.length > 1) {
          event.target.value = value.slice(0, 1);
        }
        this.values.splice(index, 1, value);
        if (value && index < this.fields - 1) {
          this.$refs[`otpInput${index + 1}`][0].focus();
        }
        this.$emit("update:modelValue", this.values.join(""));
      },
      onPaste(event) {
        const paste = event.clipboardData.getData("text");
        for (let i = 0; i < this.fields; i++) {
          this.values[i] = paste[i] || "";
          this.$refs[`otpInput${i}`][0].value = this.values[i];
        }
        this.$emit("update:modelValue", this.values.join(""));
      },
      onKeyDown(event, index) {
        if (event.key === "Backspace" && !this.values[index] && index > 0) {
          this.$refs[`otpInput${index - 1}`][0].focus();
        }
      },
    },
  };
  </script>
  
  <style>
  .otp-input-wrapper {
    display: inline-block;
  }
  .otp-input {
    width: 80px;
    height: 50px;
    font-size: 40px;
    margin: 3px;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-align: center;
  }
  </style>
  