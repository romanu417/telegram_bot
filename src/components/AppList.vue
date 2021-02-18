<template>
  <v-card v-if="items.length" class="mx-auto" max-width="600" tile>
    <v-list>
      <v-list-item-group v-model="selectedItem">
        <AppItem v-for="item in items" :key="item.text" :item="item" />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import AppItem from "@/components/AppItem";

export default {
  name: "AppList",
  components: { AppItem },
  data() {
    return {
      selectedItem: undefined
    };
  },
  computed: {
    items() {
      return this.$store.getters["GET_LIST"];
    }
  }
};
</script>
