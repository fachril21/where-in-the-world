<template>
  <div
    class="h-12 rounded-lg bg-white dark:bg-gray-500 shadow-lg flex flex-row items-center px-4 gap-2 cursor-pointer transition-all ease-in-out duration-300"
    :style="{ width: '100%' }"
  >
    <i
      class="bx bx-search-alt text-lg text-gray-500 dark:text-white transition-all ease-in-out duration-300"
    ></i>
    <input
      type="text"
      placeholder="Search for a country..."
      class="w-full focus:outline-none transition-all bg-white dark:bg-gray-500 transform duration-300 ease-in-out active:ring-0"
      :class="{ 'translate-x-2': isFocused }"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="isFocused = !isFocused"
      @blur="isFocused = !isFocused"
    />
  </div>
</template>

<script>
export default {
  name: "SearchFields",
  props: ["value"],
  data() {
    return {
      isFocused: false,
    };
  },
  // methods: {
  //   setFocused() {
  //     this.isFocused = !this.isFocused;
  //     console.log(this.isFocused);
  //   },
  // },
};
</script>
