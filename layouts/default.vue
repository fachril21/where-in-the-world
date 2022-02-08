<template>
  <div :class="{ dark: isDark }" class="">
    <navbar />
    <nuxt
      class="min-h-screen w-full bg-white dark:bg-gray-700 dark:text-white transition-all ease-in-out duration-300 pt-16"
    />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: { Navbar },
  computed: {
    isDark() {
      return this.$store.getters.isDark;
    },
  },
};
</script>
