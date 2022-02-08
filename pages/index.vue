<template>
  <div>
    <div class="container sm:container mx-auto sm:mx-auto">
      <div id="search-filter" class="py-8 flex flex-row justify-between">
        <search-fields v-model="search" />
        <filter-select />
      </div>
      <div>
        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </div>
    </div>
  </div>
</template>

<script>
import FilterSelect from "~/components/FilterSelect.vue";
import SearchFields from "~/components/SearchFields.vue";
export default {
  components: { SearchFields, FilterSelect },
  data() {
    return {
      search: "",
    };
  },
};
</script>
