<template>
  <div class="relative" v-click-outside="onClickOutside">
    <button
      class="w-64 h-12 bg-white dark:bg-gray-500 rounded-lg shadow-lg overflow-hidden flex justify-between items-center px-4 transition-all ease-in-out duration-300"
      @focus="isFocused = !isFocused"
    >
      <span
        class="text-gray-900 dark:text-white transition-all ease-in-out duration-300"
        v-if="valueFilter"
      >
        {{ valueFilter }}
      </span>
      <span
        class="text-gray-500 dark:text-gray-400 transition-all ease-in-out duration-300"
        v-if="!valueFilter"
      >
        Filter by Region
      </span>
      <i
        class="bx bx-chevron-down text-2xl text-gray-500 dark:text-gray-300 transform ease-in-out duration-300 transition-all ease-in-out duration-300"
        :class="{ 'rotate-180': isFocused }"
      ></i>
    </button>

    <transition name="fade">
      <div
        v-if="isFocused"
        class="absolute top-0 mt-14 w-64 rounded-lg shadow-lg z-10 bg-white dark:bg-gray-500 py-2 transition-all ease-in-out duration-300"
      >
        <div
          v-for="(region, index) in regions"
          :key="index"
          class="px-4 py-2 text-gray-900 dark:text-white dark:hover:text-blue-300 hover:text-blue-700 transition-all ease-in-out duration-300 cursor-pointer hover:translate-x-2 transform"
          @click="setRegion(region)"
        >
          {{ region }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FilterSelect",
  props: ["value"],
  data() {
    return {
      isFocused: false,
      valueFilter: "",
      regions: ["All Region", "Africa", "America", "Asia", "Europe", "Oceania"],
    };
  },
  methods: {
    setRegion(region) {
      this.valueFilter = region;
      this.$emit("input", this.valueFilter);
      this.setBlur();
    },
    setBlur() {
      this.isFocused = !this.isFocused;
    },
    onClickOutside() {
      if (this.isFocused) {
        this.setBlur();
      }
    },
  },
};
</script>
