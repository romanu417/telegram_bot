<template>
  <v-dialog v-model="inputVal" max-width="600px">
    <v-card>
      <v-card-text class="pa-6">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="addItem"
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="title"
                  filled
                  label="Bot name"
                  required
                  :rules="[rules.required]"
                ></v-text-field>

                <v-textarea
                  v-model="desc"
                  filled
                  label="Description"
                  auto-grow
                  :rules="[rules.required]"
                ></v-textarea>

                <v-file-input
                  v-model="files"
                  show-size
                  counter
                  filled
                  multiple
                  label="File input"
                  prepend-icon="mdi-camera"
                  accept="image/*"
                ></v-file-input>

                <div
                  v-show="$refs.upload && $refs.upload.dropActive"
                  class="drop-active"
                >
                  <h3>Drop files to upload</h3>
                  <file-upload
                    ref="upload"
                    v-model="files"
                    :drop-directory="true"
                    :multiple="false"
                    :drop="true"
                    @input-filter="inputFilter"
                  >
                  </file-upload>
                </div>

                <v-menu
                  v-model="datePicker"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template #activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Select data"
                      prepend-icon="mdi-calendar"
                      readonly
                      filled
                      v-bind="attrs"
                      :rules="[rules.required]"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="datePicker = false"
                  ></v-date-picker>
                </v-menu>

                <v-btn color="primary" block x-large type="submit">
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// const VueUploadComponent = require('vue-upload-component')
// Vue.component('file-upload', VueUploadComponent)

import FileUpload from "vue-upload-component";

export default {
  name: "AppModal",
  components: { FileUpload },
  props: {
    value: {
      type: Boolean
    },
    item: {
      type: Object,
      default: () => {
        return undefined;
      }
    }
  },
  data() {
    return {
      dialog: this.show,
      valid: false,
      datePicker: false,
      title: this.item?.title,
      desc: this.item?.desc,
      files: this.item?.files,
      date: this.item?.date,
      rules: {
        required: value => !!value || "Обовязкове поле."
      }
    };
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    closeModal() {
      this.inputVal = false;
    },
    addItem() {
      if (this.$refs.form.validate()) {
        const param = {
          id: this.generateGUID(),
          title: this.title,
          desc: this.desc,
          files: this.files,
          date: this.date
        };
        if (this.item) {
          this.$store.commit("UPDATE_ITEM", {
            ...param,
            id: this.item.id
          });
        } else {
          this.$store.commit("ADD_ITEM", param);
          this.$refs.form.reset();
          this.closeModal();
        }
      }
    },
    generateGUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        let r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    inputFilter: function(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent();
        }
      }
      newFile.blob = "";
      let URL = window.URL || window.webkitURL;
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
    }
  }
};
</script>

<style lang="scss">
.drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;

  h3 {
    margin: -0.5em 0 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 40px;
    color: #fff;
    padding: 0;
  }
}
</style>
