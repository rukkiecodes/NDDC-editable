<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="6"
      >
        <v-text-field
          v-model="title"
          label="Title"
          variant="underlined"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-text-field
          v-model="aurthor"
          label="Aurthor"
          variant="underlined"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-combobox
          v-model="subSection"
          label="SubSection"
          variant="underlined"
          :items="['Education', 'Health', 'Youth Empowerment', 'Women Development', 'Sports', 'Environment', 'Scholarships']"
        />
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-combobox
          v-model="industry"
          label="Industry"
          variant="underlined"
          :items="['Industrial Development']"
        />
      </v-col>
    </v-row>

    <div
      id="editor"
      style="min-height: 200px;"
    />

    <v-btn
      class="bg-green-darken-3"
      @click="saveProgram"
    >
      Save
    </v-btn>
  </v-container>
</template>

<script>
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Quill from 'quill';
import "quill/dist/quill.snow.css";

export default {
  data () {
    return {
      quill: null,
      title: '',
      aurthor: '',
      subSection: '',
      industry: '',
      programs: null,
      projects: null,
      about: ''
    };
  },

  mounted () {
    this.initQuill();
  },

  methods: {
    async saveProgram () {
      if (this.quill) {
        const content = this.quill.root.innerHTML;

        console.log(content)

        try {
          await addDoc(collection(db, 'posts'), {
            title: this.title,
            aurthor: this.aurthor,
            subSection: this.subSection,
            industry: this.industry,
            content,
            timestamp: serverTimestamp()
          })

          alert('posted seccessfuly')
        } catch (error) {
          alert('Image size is too large. reduce the resolution and try again')
          console.log(error)
        }
      } else {
        console.error("Quill instance is not initialized.");
      }
    },

    initQuill () {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
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
}
</script>

<style></style>