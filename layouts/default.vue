<template>
  <div :class="{ dark: isDark }" class="">
    <navbar />
    <nuxt
      class="min-h-screen w-full bg-white dark:bg-gray-700 dark:text-white transition-all ease-in-out duration-300 pt-16"
    />
    <notification />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Notification from "~/components/Notification.vue";
export default {
  components: { Navbar, Notification },
  computed: {
    isDark() {
      return this.$store.getters.isDark;
    },
  },
};
</script>
