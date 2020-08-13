<template>
  <div class="hello">
    <i class="zq-icon-edit"></i>
    <zq-input
      style="resize: none;width: 200px;"
      placeholder="请输入内容"
      autosize
      type="textarea"
      suffix-icon="zq-icon-date"
      v-model="input1"
      
    ></zq-input>
    <zq-button icon="zq-icon-eleme" type="primary" circle @click="eclick"></zq-button>
    <div>
      <zq-input placeholder="请输入内容" v-model="input1" suffix-icon="zq-icon-date" prefix-icon="zq-icon-search">
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
      </zq-input>
    </div>
    <div style="margin-top: 15px;">
      <zq-input placeholder="请输入内容" v-model="input2" :clearable="true">
        <!-- <template slot="append">.com</template> -->
      </zq-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      input1: "",
      input2: '',
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    eclick() {
      console.log("克拉的上课了");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
