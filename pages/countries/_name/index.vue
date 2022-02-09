<template>
  <div>
    <div
      class="container sm:container mx-auto sm:mx-auto py-8 flex flex-col gap-16 px-4 sm:px-0"
    >
      <div>
        <button
          @click.prevent="$router.back()"
          class="px-6 py-2 bg-white dark:bg-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 flex flex-row gap-2 items-center"
        >
          <i class="bx bx-arrow-back"></i>
          <span> Back </span>
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-24">
        <div class="w-full flex justify-center">
          <img
            class="w-full h-auto rounded-lg shadow-xl"
            :src="data.flags.png"
            :alt="data.flags.png"
          />
        </div>
        <div class="w-full flex flex-col justify-center gap-8">
          <div id="name">
            <span class="text-4xl font-bold">{{ data.name }}</span>
          </div>
          <div id="detail" class="flex flex-row gap-8">
            <div class="flex flex-col gap-2">
              <div>
                <span class="font-bold">Native Name: </span>
                <span v-if="data.nativeName">{{ data.nativeName }}</span>
              </div>
              <div>
                <span class="font-bold">Population: </span>
                <span v-if="data.population">{{ populationFormat }}</span>
              </div>
              <div>
                <span class="font-bold">Region: </span>
                <span v-if="data.region">{{ data.region }}</span>
              </div>
              <div>
                <span class="font-bold">Sub Region: </span>
                <span v-if="data.subregion">{{ data.subregion }}</span>
              </div>
              <div>
                <span class="font-bold">Capital: </span>
                <span v-if="data.capital">{{ data.capital }}</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div>
                <span class="font-bold">Top Level Domain: </span>
                <span v-if="data.topLevelDomain.length != 0">
                  <span
                    v-for="(item, index) in data.topLevelDomain"
                    :key="index"
                  >
                    {{ item }}
                  </span>
                </span>
              </div>
              <div>
                <span class="font-bold">Currencies: </span>
                <span v-if="data.currencies.length != 0">
                  <span v-for="(item, index) in data.currencies" :key="index">
                    {{ item.name }}
                  </span>
                </span>
              </div>
              <div>
                <span class="font-bold">Languages: </span>
                <span v-if="data.languages.length != 0">
                  <span v-for="(item, index) in data.languages" :key="index">
                    {{ item.name }}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <span class="font-bold">Border Countries:</span>
            <div
              id="borders"
              class="flex flex-row flex-wrap gap-4 items-center"
            >
              <div v-for="(item, index) in borders" :key="index">
                <nuxt-link :to="`/countries/${item.name.toLowerCase()}`">
                  <button
                    class="bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 px-4 py-1 rounded-lg text-white font-bold shadow-lg hover:shadow-xl"
                  >
                    {{ item.name }}
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      borders: [],
    };
  },
  async asyncData(context) {
    const [detailRes] = await Promise.all([
      axios.get(`https://restcountries.com/v2/name/${context.params.name}`),
    ]);

    return {
      data: detailRes.data[0],
    };
  },
  methods: {
    async getBordersCountries() {
      for (let i = 0; i < this.data.borders.length; i++) {
        const element = this.data.borders[i];
        await this.$axios
          .get(`https://restcountries.com/v2/alpha/${element.toLowerCase()}`)
          .then((res) => {
            this.borders.push(res.data);
          });
      }
    },
  },
  mounted() {
    this.getBordersCountries();
  },
  computed: {
    populationFormat() {
      return this.data.population
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
