<template>
  <v-list-item @click="editItem">
    <v-list-item-content>
      <v-list-item-title>
        {{ item.title }}
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn fab dark small color="error" @click.stop="removeItem">
        <v-icon dark>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-list-item-action>

    <AppModal v-model="showModal" :item="item" />
  </v-list-item>
</template>

<script>
import AppModal from "@/components/AppModal";

export default {
  name: "AppItem",
  components: { AppModal },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    editItem() {
      this.showModal = true;
    },
    removeItem() {
      this.$store.commit("DELETE_ITEM", this.item.id);
    }
  }
};
</script>
