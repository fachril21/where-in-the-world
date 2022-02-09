<template>
  <div>
    <div class="container sm:container mx-auto sm:mx-auto">
      <div id="search-filter" class="py-8 flex flex-row justify-between">
        <search-fields v-model="search" />
        <filter-select v-model="filter" />
      </div>
      <div class="grid grid-cols-4 gap-12">
        <div v-for="(item, index) in countries" :key="index">
          <countries-card
            :flag="item.flags.png"
            :countries="item.name"
            :population="item.population"
            :region="item.region"
            :capital="item.capital"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountriesCard from "~/components/CountriesCard.vue";
import FilterSelect from "~/components/FilterSelect.vue";
import SearchFields from "~/components/SearchFields.vue";
export default {
  components: { SearchFields, FilterSelect, CountriesCard },
  data() {
    return {
      search: "",
      filter: "",
    };
  },
  computed: {
    countries() {
      return this.$store.getters.countries;
    },
  },
};
</script>
