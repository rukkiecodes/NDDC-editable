<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="project in projects"
          :key="project.id"
        >
          <router-link :to="`/projects/${project.id}`">
            <v-card class="cursor-pointer" rounded="xl" flat>
              <v-card-text class="pa-0">
                <v-img
                  :src="project?.images[0]?.downloadURL"
                  height="200"
                  eager
                  class="d-flex align-end rounded-lg cursor-pointer"
                  cover
                />
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" fullscreen>
      <v-container style="margin-bottom: 150px">
        <div class="my-16">
          <p class="block-text text-h5 text-sm-h3 font-weight-bold">
            Add a New Project to the NDDC Project List
          </p>
          <p class="main-text text-body-2 text-sm-body-1 mt-2">
            Streamline your project submission process and ensure your
            initiatives are part of the NDDC portfolio.
          </p>
        </div>

        <v-row>
          <v-col cols="12" sm="6">
            <div id="addProjectImages">
              <div class="d-flex mt-10 mb-5 cursor-pointer">
                <span
                  class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3"
                  >#</span
                >
                <div>
                  <p
                    class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2"
                  >
                    Add project Images
                  </p>
                  <p>Images uploaded must be withen the size of 2MB</p>
                </div>
              </div>

              <v-row class="mt-10">
                <v-col cols="12">
                  <v-card
                    height="500"
                    rounded="lg"
                    @click="pickBannerImage"
                    flat
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
                        <p
                          class="block-text text-grey-darken-2 text-h6 text-sm-h4"
                        >
                          Add banner image
                        </p>
                      </v-img>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-row>
                    <v-col cols="6" sm="6">
                      <v-card
                        height="250"
                        rounded="lg"
                        @click="pickExtraImage('image1')"
                        flat
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
                            <p
                              class="block-text text-grey-darken-2 text-h6 text-sm-h4"
                            >
                              Add project image
                            </p>
                          </v-img>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-card
                        height="250"
                        rounded="lg"
                        @click="pickExtraImage('image2')"
                        flat
                      >
                        <v-card-text
                          class="d-flex justify-center align-center pa-0"
                          style="height: 100%"
                        >
                          <v-img
                            cover
                            :src="extraImages.image2"
                            class="d-flex justify-center align-center text-center"
                          >
                            <p
                              class="block-text text-grey-darken-2 text-h6 text-sm-h4"
                            >
                              Add project image
                            </p>
                          </v-img>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-card
                        height="250"
                        rounded="lg"
                        @click="pickExtraImage('image3')"
                        flat
                      >
                        <v-card-text
                          class="d-flex justify-center align-center pa-0"
                          style="height: 100%"
                        >
                          <v-img
                            cover
                            :src="extraImages.image3"
                            class="d-flex justify-center align-center text-center"
                          >
                            <p
                              class="block-text text-grey-darken-2 text-h6 text-sm-h4"
                            >
                              Add project image
                            </p>
                          </v-img>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-card
                        height="250"
                        rounded="lg"
                        @click="pickExtraImage('image4')"
                        flat
                      >
                        <v-card-text
                          class="d-flex justify-center align-center pa-0"
                          style="height: 100%"
                        >
                          <v-img
                            cover
                            :src="extraImages.image4"
                            class="d-flex justify-center align-center text-center"
                          >
                            <p
                              class="block-text text-grey-darken-2 text-h6 text-sm-h4"
                            >
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

          <v-col cols="12" sm="6">
            <div id="projectSectore" class="mt-16 mt-sm-0">
              <div class="d-flex mt-10 mb-5 cursor-pointer">
                <span
                  class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3"
                  >#</span
                >
                <p
                  class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2"
                >
                  Explore NDDC Project Sector
                </p>
              </div>

              <v-autocomplete
                v-model="sector"
                label="Project Sector"
                :items="ourProjects?.project"
                variant="outlined"
                class="mt-10"
              />
            </div>

            <div id="aboutTheProject">
              <div class="d-flex mt-10 mb-5 cursor-pointer">
                <span
                  class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3"
                  >#</span
                >
                <p
                  class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2"
                >
                  About the Project
                </p>
              </div>

              <v-text-field
                v-model="projectHeading"
                label="Project Heading"
                variant="outlined"
                counter
                class="mt-10"
                hint="Max of 50 characters"
                maxlength="50"
              />

              <v-textarea
                v-model="projectDescription"
                label="Project Description"
                variant="outlined"
                counter
                class="mt-10"
                hint="Max of 250 characters"
                maxlength="250"
              />

              <v-switch
                v-model="hasVideo"
                label="Does this project have a video link? if (Yes) then turn on the switch and add the video link"
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
                <span
                  class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3"
                  >#</span
                >
                <p
                  class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2"
                >
                  Article opening
                </p>
              </div>

              <v-text-field
                v-model="articleTitle"
                label="Article Title"
                variant="outlined"
                counter
                class="mt-10"
                hint="Max of 50 characters"
                maxlength="50"
              />
              <v-textarea
                v-model="openingText"
                label="Opening Text"
                variant="outlined"
                counter
                class="mt-10"
                hint="Max of 500 characters"
                maxlength="500"
              />
            </div>

            <div id="writeArticle">
              <div class="d-flex mt-10 mb-5 cursor-pointer">
                <span
                  class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3"
                  >#</span
                >
                <p
                  class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2"
                >
                  Write Article
                </p>
              </div>

              <div
                id="editor"
                class="border-md"
                style="min-height: 200px; max-height: 500px"
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
        :disabled="loading"
        @click="saveProject"
      >
        Save Project
      </v-btn>
    </v-dialog>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color">
      <p>{{ snackbar.text }}</p>
    </v-snackbar>
  </div>
</template>

<script>
import { db } from "@/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

export default {
  data() {
    return {
      ourProjects: null,
      projects: [],
      quill: null,

      dialog: false,
      loading: false,
      snackbar: {
        show: false,
        text: "",
        color: "green",
      },

      sector: "Transportation",
      projectHeading: "",
      projectDescription: "",
      articleTitle: "",
      openingText: "",
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
        videoLink: "",
        image: null,
      },
    };
  },

  mounted() {
    if (this.dialog) return this.initQuill();
    this.getOurProjectsUpdate();
    this.getProjects();
  },

  methods: {
    async getProjects() {
      const q = query(collection(db, "projects"), orderBy("timestamp", "desc"));

      onSnapshot(q, (doc) => {
        this.projects = doc.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
      });
    },

    async getOurProjectsUpdate() {
      const unsub = onSnapshot(doc(db, "web", "ourProjects"), (doc) => {
        this.ourProjects = doc.data();
      });
      return unsub;
    },

    pickBannerImage() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          this.projectData.image = file;

          reader.onload = (e) => {
            this.heroImage = e.target.result;
          };

          reader.readAsDataURL(file);
        }
      };

      input.click();
    },

    pickExtraImage(imageNumber) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();
          this.extraFiles = {
            ...this.extraFiles,
            [imageNumber]: file,
          };

          reader.onload = (e) => {
            this.extraImages = {
              ...this.extraImages,
              [imageNumber]: e.target.result,
            };
          };

          reader.readAsDataURL(file);
        }
      };

      input.click();
    },

    async saveProject() {
      if (this.quill) {
        const content = this.quill.root.innerHTML;

        const uploadTasks = [];

        if (this.projectData.image) {
          this.loading = true;
          uploadTasks.push(
            this.uploadFile(
              this.projectData.image,
              `projects/heroImage/${new Date()}`,
              "heroImage"
            )
          );

          // Upload extra images
          const extras = [
            this.extraFiles.image1,
            this.extraFiles.image2,
            this.extraFiles.image3,
            this.extraFiles.image4,
          ];

          extras.forEach((file, index) => {
            if (file) {
              uploadTasks.push(
                this.uploadFile(
                  file,
                  `projects/extraImage${index + 1}/${new Date()}`,
                  "extra"
                )
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
              timestamp: serverTimestamp(),
            });

            await updateDoc(doc(db, "web", "ourProjects"), {
              project: arrayUnion(this.sector),
              timestamp: serverTimestamp(),
            });

            this.loading = false;
            this.snackbar = {
              show: true,
              text: "Project uploaded successfully",
              color: "success",
            };
          } catch (error) {
            console.error("Error uploading images:", error);

            this.loading = false;
            this.snackbar = {
              show: true,
              text: error.message.includes("File size exceeds")
                ? "One or more images exceed the 2MB limit."
                : "Failed to upload images",
              color: "error",
            };
          }
        }
      } else return;
    },

    uploadFile(file, path, name) {
      const storage = getStorage();
      const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB

      return new Promise(async (resolve, reject) => {
        if (file.size > MAX_FILE_SIZE) {
          reject(new Error(`File size exceeds 2MB limit: ${file.name}`));
          return;
        }

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

    initQuill() {
      if (this.dialog) {
        const toolbarOptions = [
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          ["link"],

          [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ];

        const options = {
          modules: {
            toolbar: toolbarOptions,
          },
          placeholder: "New Program...",
          theme: "snow",
        };

        // Initialize Quill and store the instance
        this.quill = new Quill("#editor", options);
      }
    },
  },
};
</script>
