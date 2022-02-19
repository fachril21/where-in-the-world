<template>
  <div>
    <notification type="danger" message="Test notification!!!!" />
    <div class="container sm:container mx-auto sm:mx-auto pb-8">
      <div id="search-filter" class="py-8 flex flex-row justify-between">
        <form @submit.prevent="onSubmit">
          <search-fields v-model="search" />
        </form>
        <filter-select v-model="filter" />
      </div>
      <div class="grid grid-cols-4 gap-12" v-if="Array.isArray(data)">
        <div v-for="(item, index) in data" :key="index">
          <countries-card
            :flag="item.flags.png"
            :countries="item.name.common"
            :population="item.population"
            :region="item.region"
            :capital="item.capital"
          />
        </div>
      </div>
      <div v-else>{{ data.message }}</div>
    </div>
  </div>
</template>

<script>
import CountriesCard from "~/components/CountriesCard.vue";
import FilterSelect from "~/components/FilterSelect.vue";
import Notification from "~/components/Notification.vue";
import SearchFields from "~/components/SearchFields.vue";
export default {
  components: { SearchFields, FilterSelect, CountriesCard, Notification },
  data() {
    return {
      search: "",
      filter: "",
      data: this.$store.getters.countries,
      isLoading: false,
    };
  },
  watch: {
    filter: {
      handler: function (val, oldVal) {
        this.search = "";
        if (val != "All Region") {
          this.getRegion(val); // call it in the context of your component object
        } else {
          this.data = this.$store.getters.countries;
        }
      },
      deep: true,
    },
  },
  methods: {
    async onSubmit() {
      this.$nuxt.$loading.start();
      if (this.search == "") {
        this.data = this.$store.getters.countries;
        this.$nuxt.$loading.finish();
      } else {
        await this.$axios
          .get(`https://restcountries.com/v3.1/name/${this.search}`)
          .then((res) => {
            this.data = res.data;
            console.log(this.data);
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$notification.showMessage({
              content: "Countries Not Found",
              type: "danger",
            });
            console.log(error);
          });
      }
    },
    async getRegion(region) {
      this.$nuxt.$loading.start();
      this.$axios
        .$get(`https://restcountries.com/v3.1/region/${region.toLowerCase()}`)
        .then((res) => {
          console.log(res);
          this.data = res;
          this.$nuxt.$loading.finish();
        })
        .catch((error) => {
          console.log(error);
          this.$nuxt.$loading.finish();
        });
    },
  },
};
</script>
