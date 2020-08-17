<template>
  <div class="hello">
    <zq-form :show-message="false" :rules="rules" :model="ruleForm" ref="ruleForm" label-position="right">
      <zq-form-item label="名字" prop="name">
        <zq-input v-model="ruleForm.name"></zq-input>
      </zq-form-item>
    </zq-form>
    <zq-switch
      v-model="value1"
      >
    </zq-switch>
    <zq-slider v-model="value2"></zq-slider>
    <zq-slider
      v-model="value2"
      :step="10"
      show-stops>
    </zq-slider>
     <zq-slider
      v-model="value2"
      height="200px"
      vertical>
    </zq-slider>
     <zq-input-number v-model="num" :min="1" :max="10" label="描述文字"></zq-input-number>
    <zq-button icon="zq-icon-eleme" type="primary" circle @click="submitForm('ruleForm')"></zq-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      num: 1,
      value1: true,
      value2: 50,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      form: { name: "" },
      input1: "",
      input2: "",
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid, invalidFields) => {
        console.log(valid, invalidFields);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
