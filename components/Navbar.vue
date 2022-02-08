<template>
  <div
    class="h-16 w-full bg-white dark:bg-gray-600 shadow-lg fixed top-0 left-0"
  >
    <div
      class="container mx-auto w-full h-full flex flex-row items-center justify-between"
    >
      <span class="text-xl font-bold dark:text-white">Where in the world?</span>
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
