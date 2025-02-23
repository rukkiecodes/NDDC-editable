<template>
  <div>
    <v-container>
      <div class="my-16">
        <p class="block-text text-h5 text-sm-h3 font-weight-bold">
          Add a New Program to the NDDC Program List
        </p>
        <p class="main-text text-body-2 text-sm-body-1 mt-2">
          Streamline your Program submission process and ensure your initiatives are part of the NDDC portfolio.
        </p>
      </div>


      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <div
            id="addProgameImage"
            class="d-flex mt-10 mb-5 cursor-pointer"
          >
            <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
            <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
              Add program Images
            </p>
          </div>
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

          <v-divider class="my-16" />

          <div
            id="addProgramDate"
            class="d-flex mt-10 mb-5 cursor-pointer"
          >
            <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
            <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
              Add program Date
            </p>
          </div>

          <v-switch
            v-model="isProgramOpen"
            label="Is the program open for applications?"
            color="green-darken-3"
            inset
          />

          <v-row no-gutters>
            <v-col
              cols="12"
              sm="6"
            >
              <v-date-picker
                v-model="openingDate"
                show-adjacent-months
                :disabled="!isProgramOpen"
                title="Opening Date"
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-date-picker
                show-adjacent-months
                :disabled="!isProgramOpen"
                title="Closing Date"
              />
            </v-col>
          </v-row>
        </v-col>


        <v-col
          cols="12"
          sm="6"
        >
          <div id="programTitle">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Program Title
              </p>
            </div>

            <v-text-field
              v-model="programTitle"
              label="Program Title"
              variant="outlined"
            />

            <v-chip
              v-for="(item, index) in programs?.programs"
              :key="index"
              class="main-text mr-2 cursor-pointer"
              @click="programTitle = item"
            >
              {{ item }}
            </v-chip>
          </div>

          <v-divider class="my-16" />

          <div id="programHeadingAndAbout">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                About this program
              </p>
            </div>

            <v-text-field
              v-model="programHeading"
              variant="outlined"
              label="Program heading"
            />

            <v-textarea
              v-model="programDescription"
              label="Program Description"
              variant="outlined"
            />

            <div class="d-flex mt-5">
              <div class="d-flex mr-5 align-center">
                <p
                  class="text-h4 font-weight-bold mr-2"
                  @click="openDialog(programData.placeholderCount1 || '3000+', '', 'placeholderCount1', false)"
                >
                  {{ programData.placeholderCount1 || '3000+' }}
                </p>
                <p
                  class="text-grey-darken-2"
                  @click="openDialog(programData.placeholderText1 || 'some text', '', 'placeholderText1', false)"
                >
                  {{ programData.placeholderText1 || 'some text' }}
                </p>
              </div>
              <div class="d-flex align-center">
                <p
                  class="text-h4 font-weight-bold mr-2"
                  @click="openDialog(programData.placeholderCount2 || '20+', '', 'placeholderCount2', false)"
                >
                  {{ programData.placeholderCount2 || '20+' }}
                </p>
                <p
                  class="text-grey-darken-2"
                  @click="openDialog(programData.placeholderText2 || 'some text', '', 'placeholderText2', false)"
                >
                  {{ programData.placeholderText2 || 'some text' }}
                </p>
              </div>
            </div>
          </div>

          <v-divider class="my-16" />

          <div id="subheading">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Program sub-section
              </p>
            </div>

            <v-text-field
              v-model="subheading"
              variant="outlined"
              label="Program subheading"
            />

            <v-textarea
              v-model="subheadingText"
              label="Subheading Description"
              variant="outlined"
            />
          </div>

          <v-divider class="my-16" />

          <div id="story">
            <div class="d-flex mt-10 mb-5 cursor-pointer">
              <span class="text-primary font-weight-bold text-h6 text-sm-h4 mr-3">#</span>
              <p class="main-text text-h6 text-sm-h4 font-weight-bold text-grey-darken-2">
                Program Success Story
              </p>
            </div>
            
            <v-text-field
              v-model="storyHeading"
              variant="outlined"
              label="Program Success story heading"
            />

            <v-textarea
              v-model="story"
              label="Program story"
              variant="outlined"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-btn
      position="fixed"
      location="bottom right"
      class="ma-16 main-text text-capitalize"
      size="x-large"
      rounded="pill"
      color="green-darken-3"
      :loading="loading"
      @click="saveProgram"
    >
      Save Program
    </v-btn>

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
          <v-text-field
            v-model="dialogProps.text"
            variant="outlined"
            label="Text"
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
import { db } from '@/firebase';
import { addDoc, arrayUnion, collection, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

export default {
  data: () => ({
    programs: [],
    dialog: false,

    heroImage: null,
    image: null,

    programTitle: '',
    programHeading: '',
    programDescription: '',

    programData: {
      placeholderCount1: '',
      placeholderCount2: '',
      placeholderText1: '',
      placeholderText2: '',
    },

    subheading: '',
    subheadingText: '',

    storyHeading: '',
    story: '',

    isProgramOpen: false,
    openingDate: null,
    closingDate: null,

    loading: false
  }),

  mounted () {
    this.getRealTimeProjectUpdate()
  },

  methods: {
    async getRealTimeProjectUpdate () {
      const unsub = onSnapshot(doc(db, 'web', 'ourPrograms'), (doc) => {
        this.programs = doc.data();
      });
      return unsub;
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

    saveProgram () {
      if (!this.image) return alert("No image selected!")

      try {
        // Initialize Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, `program-images/${this.image.name}/${new Date()}`);
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
            console.log("File available at:", downloadURL);
            console.log("path:", uploadTask.snapshot.ref.fullPath);

            await addDoc(collection(db, 'programs'), {
              programTitle: this.programTitle,
              programHeading: this.programHeading,
              programDescription: this.programDescription,

              shortStats: this.programData,

              subheading: this.subheading,
              subheadingText: this.subheadingText,

              storyHeading: this.storyHeading,
              story: this.story,

              isProgramOpen: this.isProgramOpen,
              openingDate: this.openingDate,
              closingDate: this.closingDate,
              image: { path: uploadTask.snapshot.ref.fullPath, uri: downloadURL },
              timestamp: serverTimestamp()
            })

            await updateDoc(doc(db, 'web', 'ourPrograms'), {
              programs: arrayUnion(this.programTitle),
              timestamp: serverTimestamp()
            })

            // Save the download URL to your program data
            this.heroImage = downloadURL;
            alert("Program uploaded successfully!");
            this.loading = false
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