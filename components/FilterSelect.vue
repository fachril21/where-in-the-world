<template>
  <div class="relative" v-click-outside="onClickOutside">
    <button
      class="w-64 h-12 rounded-lg shadow-lg overflow-hidden flex justify-between items-center px-4"
      @focus="isFocused = !isFocused"
    >
      <span class="text-gray-900" v-if="value"> {{ value }} </span>
      <span class="text-gray-500" v-if="!value"> Filter by Region </span>
      <i
        class="bx bx-chevron-down text-2xl text-gray-500 transform ease-in-out duration-300"
        :class="{ 'rotate-180': isFocused }"
      ></i>
    </button>

    <div
      v-if="isFocused"
      class="absolute top-0 mt-14 w-64 rounded-lg shadow-lg z-50 bg-white py-2"
    >
      <div
        v-for="(region, index) in regions"
        :key="index"
        class="px-4 py-2 text-gray-900 hover:text-blue-700 transition-all ease-in-out duration-300 cursor-pointer hover:translate-x-2 transform"
        @click="setRegion(region)"
      >
        {{ region }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterSelect",
  data() {
    return {
      isFocused: false,
      value: "",
      regions: ["All Region", "Africa", "America", "Asia", "Europe", "Oceania"],
    };
  },
  methods: {
    setRegion(region) {
      this.value = region;
      this.setBlur();
    },
    setBlur() {
      this.isFocused = !this.isFocused;
    },
    onClickOutside() {
      this.setBlur();
    },
  },
};
</script>
