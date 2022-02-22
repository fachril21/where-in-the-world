<template>
  <div
    class="h-16 w-full bg-white dark:bg-gray-600 shadow-lg fixed top-0 left-0 z-50"
  >
    <div
      class="container mx-auto sm:container sm:mx-auto w-full h-full flex flex-row items-center justify-between px-4"
    >
      <nuxt-link to="/">
        <span
          class="text-xl font-bold dark:text-white hover:text-blue-700 transition-all ease-in-out duration-300"
          >Where in the world?</span
        >
      </nuxt-link>
      <div @click="setDark">
        <toggle :isActive="active" />
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "~/components/Toggle.vue";
export default {
  name: "Header",
  components: { Toggle },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    setDark() {
      this.active = !this.active;
      let status = !this.$store.getters.isDark;
      console.log(status);
      this.$store.dispatch("setDark", status);
    },
  },
  computed: {
    isDark() {
      return this.$store.getters.isDark;
    },
  },
};
</script>
