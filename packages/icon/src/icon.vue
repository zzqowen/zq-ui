<template>
  <i :class="'zq-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'ZqIcon',
    props: {
      name: String
    }
  };
</script>
