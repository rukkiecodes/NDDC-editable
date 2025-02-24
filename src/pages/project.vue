<template>
  <div>
    <v-container>
      <v-banner
        color="warning"
        class="bg-amber"
        rounded="lg"
        icon="mdi mdi-alert"
      >
        <template v-slot:text>
          <strong class="block-text">Warning:</strong> All changes made on this page will reflect
          automatically on the main website in real-time. Input values update
          instantly, like a mirror, and any images uploaded will also be updated
          immediately. Please note: Uploaded images must not exceed 2MB.
        </template>
      </v-banner>

      <div class="my-16">
        <p class="block-text text-h5 text-sm-h3 font-weight-bold">
          Update ({{ projectData?.projectHeading }})
        </p>
        <p class="main-text text-body-2 text-sm-body-1 mt-2">
          Streamline your project submission process and ensure your initiatives
          are part of the NDDC portfolio.
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
                  height="350"
                  clas="d-flex align-center"
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
                      :src="projectData?.images[0]?.downloadURL"
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
                      @click="pickExtraImage('image1', 1)"
                      flat
                    >
                      <v-card-text
                        class="d-flex justify-center align-center pa-0"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="projectData?.images[1]?.downloadURL"
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
                      @click="pickExtraImage('image2', 2)"
                      flat
                    >
                      <v-card-text
                        class="d-flex justify-center align-center pa-0"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="projectData?.images[2]?.downloadURL"
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
                      @click="pickExtraImage('image3', 3)"
                      flat
                    >
                      <v-card-text
                        class="d-flex justify-center align-center pa-0"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="projectData?.images[3]?.downloadURL"
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
                      @click="pickExtraImage('image4', 4)"
                      flat
                    >
                      <v-card-text
                        class="d-flex justify-center align-center pa-0"
                        style="height: 100%"
                      >
                        <v-img
                          cover
                          :src="projectData?.images[4]?.downloadURL"
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
              v-model="projectData.sector"
              label="Project Sector"
              :items="ourProjects?.project"
              variant="outlined"
              class="mt-10"
              @update:modelValue="updateField('sector', projectData.sector)"
              hint="Select a project sector to update"
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
              v-model="projectData.projectHeading"
              label="Project Heading"
              variant="outlined"
              counter
              class="mt-10"
              hint="Max of 50 characters"
              maxlength="100"
              @update:modelValue="
                updateField('projectHeading', projectData.projectHeading)
              "
            />

            <v-textarea
              v-model="projectData.projectDescription"
              label="Project Description"
              variant="outlined"
              counter
              class="mt-10"
              hint="Max of 250 characters"
              maxlength="250"
              @update:modelValue="
                updateField(
                  'projectDescription',
                  projectData.projectDescription
                )
              "
            />

            <v-switch
              v-model="projectData.hasVideo"
              label="Does this project have a video link? if (Yes) then turn on the switch and add the video link"
              class="mt-10"
              color="green-darken-3"
              inset
              hide-details
              @update:modelValue="updateField('hasVideo', projectData.hasVideo)"
            />

            <v-text-field
              v-if="projectData.hasVideo"
              v-model="projectData.videoLink"
              label="Video Link"
              variant="outlined"
              @update:modelValue="updateField('hasVideo', projectData.hasVideo)"
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
              v-model="projectData.articleTitle"
              label="Article Title"
              variant="outlined"
              counter
              class="mt-10"
              hint="Max of 100 characters"
              maxlength="100"
              @update:modelValue="
                updateField('articleTitle', projectData.articleTitle)
              "
            />
            <v-textarea
              v-model="projectData.openingText"
              label="Opening Text"
              variant="outlined"
              counter
              class="mt-10"
              hint="Max of 1000 characters"
              maxlength="1000"
              @update:modelValue="
                updateField('openingText', projectData.openingText)
              "
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
            <v-btn
              @click="updateContent"
              color="green-darken-3"
              class="text-capitalize mt-5"
              >Save</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color">
      <p>{{ snackbar.text }}</p>
    </v-snackbar>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  query,
  orderBy,
} from "firebase/firestore";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data: () => ({
    dialogProps: {
      text: "",
      link: "",
      field: "",
      isLink: false,
    },

    dialog: false,
    ourProjects: null,
    projects: [],
    quill: null,
    loading: false,
    snackbar: {
      show: false,
      text: "",
      color: "green",
    },

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
      sector: "Transportation",
      projectHeading: "",
      projectDescription: "",
      articleTitle: "",
      openingText: "",
      hasVideo: false,
      videoLink: "",

      images: [],

      image: null,
    },
  }),

  mounted() {
    this.initQuill();
    this.getProjects();
    this.getOurProjectsUpdate();
  },

  methods: {
    updateContent() {
      this.updateField("content", this.quill.root.innerHTML);
      this.snackbar = {
        show: true,
        text: "Content updated successfully",
        color: "success",
      };
    },

    async updateField(key, content) {
      await updateDoc(doc(db, "projects", this.$route.params.project), {
        [key]: content,
      });
    },

    async getOurProjectsUpdate() {
      const unsub = onSnapshot(doc(db, "web", "ourProjects"), (doc) => {
        this.ourProjects = doc.data();
      });
      return unsub;
    },

    async getProjects() {
      const unsub = onSnapshot(
        doc(db, "projects", this.$route.params.project),
        (doc) => {
          this.projectData = doc.data();
          this.quill.root.innerHTML = doc.data().content;
        }
      );

      return unsub;
    },

    pickBannerImage() {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const storage = getStorage();
          const MAX_FILE_SIZE = 2 * 1024 * 1024;

          if (file.size > MAX_FILE_SIZE) {
            this.snackbar = {
              show: true,
              text: "File size is too large. Must be less than 2MG",
              color: "error",
            };
            return;
          } else {
            try {
              const path = `test_projects/bannerImage/${new Date()}`;
              const storageRef = ref(storage, path);
              const snapshot = await uploadBytes(storageRef, file);
              const downloadURL = await getDownloadURL(snapshot.ref);

              const projectImages = [...this.projectData.images];
              projectImages[0] = {
                downloadURL,
                path,
                name: "heroImage",
              };

              this.snackbar = {
                show: true,
                text: "Image uploaded successfully",
                color: "success",
              };

              this.updateField("images", projectImages);
            } catch (error) {
              this.snackbar = {
                show: true,
                text: "Error uploading image",
                color: "error",
              };
            }
          }
        }
      };

      input.click();
    },

    pickExtraImage(imageNumber, index) {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";

      input.onchange = async (event) => {
        const file = event.target.files[0];

        if (file) {
          const storage = getStorage();
          const MAX_FILE_SIZE = 2 * 1024 * 1024;

          if (file.size > MAX_FILE_SIZE) {
            this.snackbar = {
              show: true,
              text: "File size is too large. Must be less than 2MG",
              color: "error",
            };
            return;
          } else {
            try {
              const path = `test_projects/extraImage${index}/${new Date()}`;
              const storageRef = ref(storage, path);
              const snapshot = await uploadBytes(storageRef, file);
              const downloadURL = await getDownloadURL(snapshot.ref);

              const projectImages = [...this.projectData.images];
              projectImages[index] = {
                downloadURL,
                path,
                name: "extra",
              };

              this.snackbar = {
                show: true,
                text: "Image uploaded successfully",
                color: "success",
              };

              this.updateField("images", projectImages);
            } catch (error) {
              this.snackbar = {
                show: true,
                text: "Error uploading image",
                color: "error",
              };
            }
          }
        }
      };

      input.click();
    },

    async saveProject() {},

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
    },

    // uploadNewImage() {
    //   const storage = getStorage();
    //   const input = document.createElement("input");
    //   input.type = "file";
    //   input.accept = "image/*";
    //   input.onchange = async (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //       const filePath = `images/${file.name}`;
    //       const fileRef = ref(storage, filePath);

    //       try {
    //         // Upload the new image to Firebase Storage
    //         const snapshot = await uploadBytes(fileRef, file);
    //         const downloadURL = await getDownloadURL(snapshot.ref);

    //         await updateDoc(doc(db, "projects", this.projectData.id), {
    //           image: { path: snapshot.ref.fullPath, uri: downloadURL },
    //         });

    //         // Update the project data with the new image details
    //         this.projectData.image = { uri: downloadURL, path: filePath };
    //       } catch (error) {
    //         console.error("Error uploading image:", error);
    //         alert("Failed to upload the image. Please try again.");
    //       }
    //     }
    //   };

    //   input.click();
    // },
  },
};
</script>
