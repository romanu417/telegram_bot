<template>
  <v-app>
    <div class="container">
      <main class="app__content">
        <section class="align-center d-flex justify-content-between mb-5">
          <h1 class="mr-auto text-center">List bots</h1>
          <v-btn class="mx-2" fab dark color="indigo" @click="toggleModal">
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </section>

        <AppList />
      </main>
    </div>

    <AppModal v-model="showModal" />
  </v-app>
</template>

<script>
import AppModal from "@/components/AppModal";
import AppList from "@/components/AppList";

export default {
  name: "Home",
  components: { AppList, AppModal },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    items() {
      return this.$store.getters["GET_LIST"];
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style lang="scss">
.app__content {
  padding: 5rem 0;
  max-width: 600px;
  margin: auto;
}
</style>
