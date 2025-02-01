<template>
  <div>
    <v-container>
      <div class="my-16">
        <p class="block-text text-h5 text-sm-h3 font-weight-bold">
          Add a New Project to the NDDS Project List
        </p>
        <p class="main-text text-body-2 text-sm-body-1 mt-2">
          Streamline your project submission process and ensure your initiatives are part of the NDDS portfolio.
        </p>
      </div>

      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <div id="addProjectImages">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Add project Images
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
                    class="d-flex justify-center align-center"
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
              </v-col>

              <v-col cols="12">
                <v-row>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-card
                      height="250"
                      rounded="lg"
                      @click="pickExtraImage('image1')"
                    >
                      <v-card-text
                        class="d-flex justify-center align-center pa-0"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="extraImages.image1"
                          class="d-flex justify-center align-center text-center"
                        >
                          <p class="block-text text-grey-darken-2 text-h6 text-sm-h4">
                            Add project image
                          </p>
                        </v-img>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-card
                      height="250"
                      rounded="lg"
                      @click="pickExtraImage('image2')"
                    >
                      <v-card-text
                        class="d-flex justify-center align-center"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="extraImages.image2"
                          class="d-flex justify-center align-center text-center"
                        >
                          <p class="block-text text-grey-darken-2 text-h6 text-sm-h4">
                            Add project image
                          </p>
                        </v-img>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-card
                      height="250"
                      rounded="lg"
                      @click="pickExtraImage('image3')"
                    >
                      <v-card-text
                        class="d-flex justify-center align-center"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="extraImages.image3"
                          class="d-flex justify-center align-center text-center"
                        >
                          <p class="block-text text-grey-darken-2 text-h6 text-sm-h4">
                            Add project image
                          </p>
                        </v-img>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6"
                  >
                    <v-card
                      height="250"
                      rounded="lg"
                      @click="pickExtraImage('image4')"
                    >
                      <v-card-text
                        class="d-flex justify-center align-center"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="extraImages.image4"
                          class="d-flex justify-center align-center text-center"
                        >
                          <p class="block-text text-grey-darken-2 text-h6 text-sm-h4">
                            Add project image
                          </p>
                        </v-img>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <div
            id="projectSectore"
            class="mt-16 mt-sm-0"
          >
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Explore NDDC Project Sector
              </p>
            </div>

            <v-autocomplete
              v-model="sector"
              label="Project Sector"
              :items="projects?.project"
              variant="outlined"
              class="mt-10"
            />
          </div>

          <div id="aboutTheProject">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                About the Project
              </p>
            </div>

            <v-text-field
              v-model="projectHeading"
              label="Project Heading"
              variant="outlined"
              class="mt-10"
            />

            <v-textarea
              v-model="projectDescription"
              label="Project Description"
              variant="outlined"
            />

            <v-switch
              v-model="hasVideo"
              label="Does this project jave a video link? if (Yes) then turn on the switc and add the video link"
              class="mt-10"
              color="green-darken-3"
              inset
              hide-details
            />

            <v-text-field
              v-if="hasVideo"
              v-model="projectData.videoLink"
              label="Video Link"
              variant="outlined"
            />
          </div>

          <div id="articleOpening">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Article opening
              </p>
            </div>

            <v-text-field
              v-model="articleTitle"
              label="Article Title"
              variant="outlined"
              class="mt-10"
            />
            <v-textarea
              v-model="openingText"
              label="Opening Text"
              variant="outlined"
            />
          </div>

          <div id="writeArticle">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Write Article
              </p>
            </div>

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
import { addDoc, arrayUnion, collection, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import Quill from 'quill';
import "quill/dist/quill.bubble.css";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

export default {
  data () {
    return {
      projects: null,
      quill: null,
      loading: false,

      sector: '',
      projectHeading: '',
      projectDescription: '',
      articleTitle: '',
      openingText: '',
      hasVideo: false,

      heroImage: null,
      extraImages: {
        image1: null,
        image2: null,
        image3: null,
        image4: null,
      },
      extraFiles: {
        image1: null,
        image2: null,
        image3: null,
        image4: null,
      },
      projectData: {
        t1: '',
        t2: '',
        t3: '',
        t4: '',
        title: '',
        videoLink: '',
        heading: '',
        about: '',
        image: null
      }
    };
  },

  mounted () {
    this.initQuill();
    this.getRealTimeProjectUpdate()
  },

  methods: {
    async getRealTimeProjectUpdate () {
      const unsub = onSnapshot(doc(db, 'web', 'ourProjects'), (doc) => {
        this.projects = doc.data();
      });
      return unsub;
    },

    pickBannerImage () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          this.projectData.image = file

          reader.onload = (e) => {
            this.heroImage = e.target.result;
          };

          reader.readAsDataURL(file);
        }
      };

      input.click();
    },

    pickExtraImage (imageNumber) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          this.extraFiles = {
            ...this.extraFiles,
            [imageNumber]: file
          }

          reader.onload = (e) => {
            this.extraImages = {
              ...this.extraImages,
              [imageNumber]: e.target.result
            }
          };

          reader.readAsDataURL(file);
        }
      };

      input.click();
    },

    async saveProject () {
      if (this.quill) {
        const content = this.quill.root.innerHTML;

        const uploadTasks = [];

        if (this.projectData.image) {
          uploadTasks.push(this.uploadFile(this.projectData.image, `projects/heroImage/${new Date()}`, 'heroImage'));

          // Upload extra images
          const extras = [
            this.extraFiles.image1,
            this.extraFiles.image2,
            this.extraFiles.image3,
            this.extraFiles.image4,
          ]

          extras.forEach((file, index) => {
            if (file) {
              uploadTasks.push(
                this.uploadFile(file, `projects/extraImage${index + 1}/${new Date()}`, 'extra')
              );
            }
          });

          try {
            const uploadedImages = await Promise.all(uploadTasks);

            await addDoc(collection(db, "projects"), {
              sector: this.sector,
              projectHeading: this.projectHeading,
              projectDescription: this.projectDescription,
              articleTitle: this.articleTitle,
              openingText: this.openingText,
              hasVideo: this.hasVideo,
              videoLink: this.projectData.videoLink,
              images: uploadedImages,
              content,
              timestamp: serverTimestamp()
            });

            await updateDoc(doc(db, 'web', 'ourProjects'), {
              project: arrayUnion(this.sector),
              timestamp: serverTimestamp()
            })

            alert("All images uploaded successfully!");
          } catch (error) {
            console.error("Error uploading images:", error);
            alert("Failed to upload images. Please try again.");
          }
        }
      } else return
    },

    uploadFile (file, path, name) {
      const storage = getStorage()

      return new Promise(async (resolve, reject) => {
        try {
          const storageRef = ref(storage, path);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          resolve({ path, downloadURL, name });
        } catch (error) {
          reject(error);
        }
      });
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
        placeholder: 'New Program...',
        theme: 'snow',
      };

      // Initialize Quill and store the instance
      this.quill = new Quill('#editor', options);
    },
  }
}
</script>
