<template>
  <div>
    <v-container>
      <div class="my-16">
        <p class="block-text text-h5 text-sm-h3 font-weight-bold">
          Add a New News Reports
        </p>
        <p class="main-text text-body-2 text-sm-body-1 mt-2">
          Streamline your project submission process and ensure your initiatives are part of the NDDC portfolio.
        </p>
      </div>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <div id="addPostIMage">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Add post Images
              </p>
            </div>

            <v-row class="mt-10">
              <v-col cols="12">
                <v-card
                  height="500"
                  rounded="lg"
                  @click="pickBannerImage"
                >
                  <v-card-text
                    class="d-flex justify-center align-center pa-0"
                    style="height: 100%"
                  >
                    <v-img
                      cover
                      :src="heroImage"
                      class="d-flex justify-center align-center text-center"
                    >
                      <p class="block-text text-grey-darken-2 text-h6 text-sm-h4">
                        Add banner image
                      </p>
                    </v-img>
                  </v-card-text>
                </v-card>

                <v-divider class="my-10" />
                <v-switch
                  v-model="isOngoing"
                  label="Is the post still ongoing?"
                  color="green-darken-3"
                  inset
                />
                <v-date-picker
                  v-model="articleDate"
                  show-adjacent-months
                  :disabled="!isOngoing"
                  title="Post Date"
                />
              </v-col>

              <v-col cols="12">
                <!--  -->
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <div id="departmentsList">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Select a department
              </p>
            </div>

            <v-autocomplete
              v-model="department"
              label="Department"
              :items="departmentsList"
              variant="outlined"
              class="mt-10"
            />

            <v-divider class="my-10" />

            <div
              id="editor"
              class="border-md"
              style="min-height: 200px; max-height: 500px;"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      position="fixed"
      location="bottom right"
      class="ma-16 main-text"
      size="x-large"
      rounded="pill"
      color="green-darken-3"
      :loading="loading"
      @click="saveProject"
    >
      Save Project
    </v-btn>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import Quill from 'quill';
import "quill/dist/quill.snow.css";

export default {
  data: () => ({
    departmentsList: [
      "Corporate Affairs Department",
      "Administration and Human Resources",
      "Finance and Accounts",
      "Procurement",
      "Project Monitoring and Supervision",
      "Community and Rural Development",
      "Environmental Protection and Control",
      "Legal Services",
      "Education, Health, and Social Services",
      "Agriculture and Fisheries",
      "Utility, Infrastructure, and Waterways",
      "Planning, Research, and Statistics",
      "Internal Audit",
      "Security Services",
      "ICT and Innovation"
    ],
    department: 'Corporate Affairs Department',
    articleDate: null,
    image: null,
    heroImage: null,
    isOngoing: false,

    quill: null,
    loading: false
  }),

  mounted () {
    this.initQuill();
  },

  methods: {
    pickBannerImage () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          this.image = file

          reader.onload = (e) => {
            this.heroImage = e.target.result;
          };

          reader.readAsDataURL(file);
        }
      };

      input.click();
    },

    saveProject () {
      if (!this.image) return alert("No image selected!")
        
      if (this.quill) {
        const content = this.quill.root.innerHTML;

        try {
          // Initialize Firebase Storage
          const storage = getStorage();
          const storageRef = ref(storage, `post-images/${this.image.name}/${new Date()}`);
          const uploadTask = uploadBytesResumable(storageRef, this.image);

          this.loading = true

          // Monitor the upload process
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              console.error("Upload failed:", error);
            },
            async () => {
              // Upload completed, get the download URL
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

              await addDoc(collection(db, 'posts'), {
                department: this.department,
                articleDate: this.articleDate,
                isOngoing: this.isOngoing,
                content,
                image: { path: uploadTask.snapshot.ref.fullPath, uri: downloadURL },
                timestamp: serverTimestamp()
              })

              // Save the download URL to your post data
              this.heroImage = downloadURL;
              alert("Post uploaded successfully!");
              this.loading = false
            }
          );
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    },

    initQuill () {
      const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        ['link'],

        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],
        [{ align: [] }],
      ];

      const options = {
        modules: {
          toolbar: toolbarOptions,
        },
        placeholder: 'New post...',
        theme: 'snow',
      };

      // Initialize Quill and store the instance
      this.quill = new Quill('#editor', options);
    }
  }
}
</script>

<style></style>