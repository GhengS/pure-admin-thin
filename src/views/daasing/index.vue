<script setup lang="ts">
import { ref } from "vue";
import { list } from "postcss";
import Adaptive from "./adaptive/index.vue";

const tableRef = ref();
</script>

<template>
  <div>
    <Adaptive />
  </div>
</template>
