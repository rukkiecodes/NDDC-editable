<template>
  <v-container>
    <v-card :elevation="0">
      <v-card-text class="pa-0">
        <div id="editor" />
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          class="bg-green-darken-3"
          @click="saveProgram"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Quill from 'quill';
import "quill/dist/quill.snow.css";

export default {
  data () {
    return {
      quill: null, // Reference to the Quill instance
    };
  },

  mounted () {
    this.initQuill();
  },

  methods: {
    saveProgram () {
      if (this.quill) {
        const content = this.quill.root.innerHTML; // Get the HTML content
        console.log("Rich text content:", content);
        // Further processing like saving content to a database or API
      } else {
        console.error("Quill instance is not initialized.");
      }
    },

    initQuill () {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],

        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        [{ script: 'sub' }, { script: 'super' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],

        [{ size: ['small', false, 'large', 'huge'] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],

        ['clean'],
      ];

      const options = {
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: 'New Program...',
        theme: 'snow',
      };

      // Initialize Quill and store the instance
      this.quill = new Quill('#editor', options);
    },
  },
};
</script>

<style></style>
