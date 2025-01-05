<template>
  <div>
    <v-container class="my-16">
      <p class="text-h3 mb-5 font-weight-bold text-grey-darken-2">
        Please enter a title for this project
      </p>
      <p>EG. Road construction, Electrical development. e,t,c</p>
      <v-text-field
        v-model="projectData.title"
        label="Project Title"
        variant="underlined"
        height="70"
        color="green-darken-3"
        class="font-weight-bold"
      />
      <v-text-field
        v-model="projectData.videoLink"
        label="Video link"
        variant="underlined"
        height="70"
        color="green-darken-3"
        class="font-weight-bold"
      />

      <v-btn
        class="text-capitalize"
        color="green-darken-3"
        rounded="0"
        :elevation="0"
        @click="saveProject"
      >
        Save project
      </v-btn>
    </v-container>

    <v-img
      :src="heroImage || '@/assets/delta-roads.png'"
      class="d-flex justify-center align-center"
      :height="600"
      cover
    >
      <v-sheet
        height="600"
        color="rgba(0,0,0,0.6)"
        class="d-flex align-center"
      >
        <v-sheet
          color="transparent"
          width="700"
          class="mx-auto text-center"
        >
          <p
            class="text-white font-weight-black text-h2 mb-2"
            @click="openDialog(projectData.heading || 'Project Heading', '', 'heading', false)"
            v-text="projectData.heading || 'Project Heading'"
          />

          <p
            class="text-white text-h6 my-5"
            @click="openDialog(projectData.about || 'about the project', '', 'about', false)"
            v-text="projectData.about || 'about the project'"
          />

          <v-btn
            class="text-capitalize"
            :elevation="0"
            prepend-icon="mdi-play-circle-outline"
            variants="outlined"
            rounded="0"
            color="green-darken-3"
          >
            Watch our video
          </v-btn>
        </v-sheet>
      </v-sheet>
    </v-img>





    <v-sheet class="mb-16">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-file-input
              label="Banner image"
              variant="underlined"
              accept="image/*"
              @change="changeBannerImage"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>



    <v-container class="my-16">
      <v-row class="align-end">
        <v-col
          cols="12"
          sm="7"
        >
          <p
            class="text-h4 font-weight-bold mb-5"
            @click="openDialog(projectData.t1 || 'The 25.7-kilometre Ogbia-Nembe Road', '', 't1', false)"
            v-text="projectData.t1 || 'Title'"
          />
          <v-textarea
            v-model="projectData.t2"
            label="Say something"
            variant="outlined"
          />

          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <!-- image 1 -->
              <v-img
                :src="extraImages.image1"
                height="300"
                cover
                class="d-flex align-center justify-center text-center bg-grey"
                @click="pickExtraImage('image1')"
              >
                <p class="text-h4 font-weight-bold">
                  Add Image
                </p>
              </v-img>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <!-- image 2 -->
              <v-img
                :src="extraImages.image2"
                height="300"
                cover
                class="d-flex align-center justify-center text-center bg-grey"
                @click="pickExtraImage('image2')"
              >
                <p class="text-h4 font-weight-bold">
                  Add Image
                </p>
              </v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="5"
        >
          <!-- image 3 -->
          <v-img
            :src="extraImages.image3"
            class="d-flex align-center justify-center text-center bg-grey"
            @click="pickExtraImage('image3')"
          >
            <p class="text-h4 font-weight-bold">
              Add Image
            </p>
          </v-img>
        </v-col>
      </v-row>

      <v-textarea
        v-model="projectData.t3"
        variant="outlined"
        label="Say something"
        class="mt-16"
      />

      <v-img
        :src="extraImages.image4"
        cover
        class="d-flex align-center justify-center text-center bg-grey my-10"
        @click="pickExtraImage('image4')"
      >
        <p class="text-h4 font-weight-bold">
          Add Image
        </p>
      </v-img>

      <v-textarea
        v-model="projectData.t4"
        variant="outlined"
        label="Say something"
      />
    </v-container>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        width="400"
        prepend-icon="mdi-pencil"
        title="Update web content"
      >
        <v-card-text>
          <v-textarea
            v-model="dialogProps.text"
            label="Text"
          />
          <v-text-field
            v-if="dialogProps.isLink"
            v-model="dialogProps.link"
            label="Link"
          />
        </v-card-text>

        <template #actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="updateItem(dialogProps.field, dialogProps.text)"
          />
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

export default {
  data: () => ({
    heroImage: null,
    dialog: false,
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
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
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
  }),

  methods: {
    changeBannerImage (event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        this.projectData.image = file

        reader.onload = (e) => {
          this.heroImage = e.target.result; // Base64 image preview
        };

        reader.readAsDataURL(file);
      }
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

    openDialog (text, link, field, isLink) {
      this.dialog = true
      this.dialogProps = {
        text,
        link,
        isLink,
        field
      }
    },

    async updateItem (key, content) {
      console.log(key, content)
      this.projectData = {
        ...this.projectData,
        [key]: content
      }
      this.dialog = false
    },

    async saveProject () {
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
            console.log('save data')
            // Save to Firestore
            await addDoc(collection(db, "projects"), {
              t1: this.projectData.t1,
              t2: this.projectData.t2,
              t3: this.projectData.t3,
              t4: this.projectData.t4,
              title: this.projectData.title,
              videoLink: this.projectData.videoLink,
              heading: this.projectData.heading,
              about: this.projectData.about,
              images: uploadedImages,
              timestamp: serverTimestamp()
            });

            await updateDoc(doc(db, 'web', 'ourProjects'), {
              project: arrayUnion(this.projectData.title),
              timestamp: serverTimestamp()
            })
            console.log(uploadedImages)

            alert("All images uploaded successfully!");
          } catch (error) {
            console.error("Error uploading images:", error);
            alert("Failed to upload images. Please try again.");
          }
      }
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
    }
  }
}
</script>

<style></style>