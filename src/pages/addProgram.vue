<template>
  <div>
    <v-container class="my-16">
      <p class="text-h3 mb-5 font-weight-bold text-grey-darken-2">
        Please enter a title for this program
      </p>
      <v-text-field
        v-model="programData.title"
        label="Program Title"
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
        @click="saveProgram"
      >
        Save program
      </v-btn>
    </v-container>

    <v-sheet class="mb-16">
      <v-container class="py-16">
        <v-row>
          <v-col
            cols="12"
            sm="5"
          >
            <v-sheet
              color="transparent"
              max-width="700"
            >
              <p
                class="text-green-darken-3 font-weight-black text-h3 mb-4"
                @click="openDialog(programData.heading || 'Program Heading', '', 'heading', false)"
              >
                {{ programData.heading || 'Program Heading' }}
              </p>

              <p
                class="text-grey-darken-3 text-h6 my-5"
                @click="openDialog(programData.about || 'about the program', '', 'about', false)"
              >
                {{ programData.about || 'about the program' }}
              </p>

              <div class="right d-flex">
                <v-sheet
                  class="pa-2 d-flex align-center"
                  border="sm"
                  height="50"
                  width="300"
                >
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    class="contact-input"
                    style="flex: 1"
                  >
                </v-sheet>
                <v-btn
                  class="text-capitalize"
                  rounded="0"
                  color="green-darken-4"
                  height="50"
                  :elevation="0"
                >
                  Register
                  Now
                </v-btn>
              </div>

              <div class="d-flex mt-5">
                <div class="d-flex mr-5 align-center">
                  <p
                    class="text-h4 font-weight-bold mr-2"
                    @click="openDialog(programData.t1 || '3000+', '', 't1', false)"
                  >
                    {{ programData.t1 || '3000+' }}
                  </p>
                  <p
                    class="text-grey-darken-2"
                    @click="openDialog(programData.t2 || 'some text', '', 't2', false)"
                  >
                    {{ programData.t2 || 'some text' }}
                  </p>
                </div>
                <div class="d-flex align-center">
                  <p
                    class="text-h4 font-weight-bold mr-2"
                    @click="openDialog(programData.t3 || '20+', '', 't3', false)"
                  >
                    {{ programData.t3 || '20+' }}
                  </p>
                  <p
                    class="text-grey-darken-2"
                    @click="openDialog(programData.t4 || 'some text', '', 't4', false)"
                  >
                    {{ programData.t4 || 'some text' }}
                  </p>
                </div>
              </div>
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="7"
          >
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              style="display: none"
              @change="handleImageUpload"
            >
            <v-img
              v-if="heroImage"
              :src="heroImage"
              height="350"
              rounded="lg"
              class="cursor-pointer"
              @click="triggerFileInput"
            />
            <v-sheet
              v-else
              height="350"
              rounded="lg"
              border="sm"
              class="d-flex align-center justify-center cursor-pointer"
              @click="triggerFileInput"
            >
              <p class="text-h1 font-weight-bold text-grey-darken-2">
                Add Image
              </p>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet
      class="my-16 py-16"
      style="position: relative;"
    >
      <v-img
        src="@/assets/smallSpots.png"
        width="100"
        height="100"
        cover
        style="position: absolute; top: 0; right: 0;"
      />
      <v-img
        src="@/assets/bigSpots.png"
        width="100"
        height="100"
        cover
        style="position: absolute; bottom: 0; left: 0;"
      />

      <v-sheet
        class="text-center mx-auto"
        width="600"
      >
        <p
          class="text-h4 font-weight-bold"
          @click="openDialog(programData.subheading || 'Subheading', '', 'subheading', false)"
        >
          {{ programData.subheading || 'Subheading' }}
        </p>
        <p
          class="text-body-1 text-grey-darken-3 mt-5"
          @click="openDialog(programData.subheadingContext || 'About the context of the subheading', '', 'subheadingContext', false)"
        >
          {{ programData.subheadingContext || 'About the context of the subheading' }}
        </p>
      </v-sheet>
    </v-sheet>

    <v-container>
      <v-sheet
        class="text-center mx-auto"
        width="600"
      >
        <p
          class="text-h4 font-weight-bold"
          @click="openDialog(programData.t5 || 'The Success Stories Of The Past Few Years', '', 't5', false)"
        >
          {{ programData.t5 || 'The Success Stories Of The Past Few Years' }}
        </p>
        <p
          class="text-body-1 text-grey-darken-3 mt-5"
          @click="openDialog(programData.t6 || 'Say something about the success stories', '', 't6', false)"
        >
          {{ programData.t6 || 'Say something about the success stories' }}
        </p>
      </v-sheet>

      <v-row class="mt-10">
        <v-col
          v-for="n in 6"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-sheet
            border="sm"
            height="300"
            class="d-flex justify-center align-center"
          >
            <p class="text-h6">
              Blogs on this subject goes here
            </p>
          </v-sheet>
        </v-col>
      </v-row>
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
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  data: () => ({
    heroImage: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
    programData: {
      title: '',
      heading: '',
      about: '',
      t1: '',
      t2: '',
      t3: '',
      t4: '',
      image: null,
      subheading: '',
      subheadingContext: '',
      t5: '',
      t6: '',
    }
  }),

  methods: {
    triggerFileInput () {
      this.$refs.fileInput.click();
    },

    handleImageUpload (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        this.programData.image = file

        reader.onload = (e) => {
          this.heroImage = e.target.result; // Base64 image preview
        };

        reader.readAsDataURL(file);
      }
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
      this.programData = {
        ...this.programData,
        [key]: content
      }
      this.dialog = false
    },

    saveProgram () {
      if (!this.programData.image) {
        alert("No image selected!");
        return;
      }

      try {
        // Initialize Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, `program-images/${this.programData.image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, this.programData.image);

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
            console.log("File available at:", downloadURL);
            console.log("path:", uploadTask.snapshot.ref.fullPath);

            await addDoc(collection(db, 'programs'), {
              title: this.programData.title,
              heading: this.programData.heading,
              about: this.programData.about,
              t1: this.programData.t1,
              t2: this.programData.t2,
              t3: this.programData.t3,
              t4: this.programData.t4,
              subheading: this.programData.subheading,
              subheadingContext: this.programData.subheadingContext,
              t5: this.programData.t5,
              t6: this.programData.t6,
              image: { path: uploadTask.snapshot.ref.fullPath, uri: downloadURL },
              timestamp: serverTimestamp()
            })

            await updateDoc(doc(db, 'web', 'ourPrograms'), {
              programs: arrayUnion(this.programData.title),
              timestamp: serverTimestamp()
            })

            // Save the download URL to your program data
            this.heroImage = downloadURL;
            alert("Image uploaded successfully!");
          }
        );
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }
}
</script>

<style></style>