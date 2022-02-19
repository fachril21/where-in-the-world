<template>
  <transition name="fade">
    <div
      class="fixed mt-8 rounded-md z-50 font-bold overflow-hidden cursor-pointer"
      :class="{
        'bg-red-100 text-red-800': type == 'danger',
        'bg-green-100 text-green-800': type == 'success',
      }"
      :style="{ right: '32px', minWidth: '16rem' }"
      v-if="show"
    >
      <div class="p-4 w-full h-full flex items-center">
        <span>
          {{ message }}
        </span>
      </div>
      <div class="h-1 bg-red-500 origin-right absolute bottom-0 loading"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  // props: {
  //   type: {
  //     type: String,
  //     required: true,
  //   },
  //   message: {
  //     type: String,
  //     required: true,
  //   },
  // },
  data() {
    return {
      show: false,
      type: "",
      message: "",
      durationStart: false,
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "SHOW_MESSAGE") {
        this.message = state.notification.content;
        this.type = state.notification.type;
        this.show = true;
      }
      this.durationStart = true;
      setTimeout(() => {
        this.show = false;
        this.durationStart = false;
      }, 5000);
    });
  },
};
</script>

<style scoped>
.loading {
  width: 100%;
  animation-name: loader;
  animation-duration: 5s;
  transition-timing-function: linear;
}

@keyframes loader {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

.fade-enter-active {
  transition: all 0.1s ease-in-out;
}
.fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>
