<template>
  <div
    class="w-16 h-8 bg-gradient-to-r rounded-full flex-shrink-0 p-1 cursor-pointer relative transition-all ease-in-out duration-500"
    :class="{
      'from-gray-500 to-gray-700': isActive,
      'from-blue-500 to-blue-700': !isActive,
    }"
  >
    <div class="absolute right-0 pr-2">
      <i class="bx bxs-sun text-yellow-200"></i>
    </div>
    <div class="absolute left-0 pl-2">
      <i class="bx bxs-moon text-yellow-200"></i>
    </div>
    <div
      class="bg-white w-6 h-6 rounded-full shadow-xl transform duration-500 ease-in-out"
      :class="{ 'translate-x-8': isActive }"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Toggle",
  props: {
    isActive: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
