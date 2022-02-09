<template>
  <nuxt-link :to="`/countries/${countries.toLowerCase()}`">
    <div
      class="flex flex-col gap-2 bg-white dark:bg-gray-500 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-all ease-in-out duration-300 cursor-pointer"
    >
      <img class="rounded-lg h-40" :src="flag" :alt="flag" />
      <div class="p-4 flex flex-col gap-2">
        <div class="text-xl font-bold w-full truncate">{{ countries }}</div>
        <div>
          <span class="font-bold">Population: </span>
          <span v-if="population">{{ populationFormat }}</span>
          <span v-if="!population">-</span>
        </div>
        <div>
          <span class="font-bold">Region: </span>
          <span v-if="region">{{ region }}</span>
          <span v-if="!region">-</span>
        </div>
        <div>
          <span class="font-bold">Capital: </span>
          <span v-if="capital">{{ capital }}</span>
          <span v-if="!capital">-</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "CountriesCard",
  props: {
    flag: {
      type: String,
      required: true,
    },
    countries: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: false,
    },
  },
  computed: {
    populationFormat() {
      return this.population
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
