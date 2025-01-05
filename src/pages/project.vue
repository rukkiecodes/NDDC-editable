<template>
  <div>
    <v-img
      src="@/assets/delta-roads.png"
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
            @click="openDialog(projectData?.heading, '', 'heading', false)"
            v-text="projectData?.heading"
          />

          <p
            class="text-white text-h6 my-5"
            @click="openDialog(projectData?.about, '', 'about', false)"
            v-text="projectData?.about"
          />

          <v-btn
            class="text-capitalize"
            :elevation="0"
            prepend-icon="mdi-play-circle-outline"
            variants="outlined"
            rounded="0"
            color="green-darken-3"
            :href="projectData?.videoLink"
          >
            Watch our video
          </v-btn>
        </v-sheet>
      </v-sheet>
    </v-img>

    <v-container class="my-16">
      <v-row>
        <v-col
          cols="12"
          sm="2"
        >
          <p class="text-green-darken-3 mb-1 font-weight-bold">
            From:
          </p>
          <v-dialog max-width="400">
            <template #activator="{ props: activatorProps }">
              <v-sheet
                v-bind="activatorProps"
                border="sm"
                rounded="md"
                height="50"
                class="d-flex align-center px-2"
              >
                <v-icon class="mx-2">
                  mdi-calendar-month-outline
                </v-icon>

                <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
              </v-sheet>
            </template>

            <template #default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-date-picker />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <v-col
          cols="12"
          sm="2"
        >
          <p class="text-green-darken-3 mb-1 font-weight-bold">
            To:
          </p>
          <v-dialog max-width="400">
            <template #activator="{ props: activatorProps }">
              <v-sheet
                v-bind="activatorProps"
                border="sm"
                rounded="md"
                height="50"
                class="d-flex align-center px-2"
              >
                <v-icon class="mx-2">
                  mdi-calendar-month-outline
                </v-icon>

                <span class="text-body-2 text-grey-darken-2">DD/MM/YYY</span>
              </v-sheet>
            </template>

            <template #default="{ isActive }">
              <v-card>
                <v-card-text>
                  <v-date-picker />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <v-col
          cols="12"
          sm="8"
        >
          <p class="text-green-darken-3 mb-1 font-weight-bold">
            Search
          </p>
          <v-sheet
            v-bind="activatorProps"
            border="sm"
            rounded="md"
            height="50"
            class="d-flex align-center px-2"
          >
            <v-icon class="mx-2">
              mdi-magnify
            </v-icon>

            <input
              type="text"
              placeholder="Search for names, articles, references etc"
              style="flex: 1; height: 100%; outline: none"
            >
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-10">
      <v-row class="align-end">
        <v-col
          cols="12"
          sm="7"
        >
          <p
            class="text-h4 font-weight-bold mb-5"
            @click="openDialog(projectData?.t1, '', 't2', false)"
            v-text="projectData?.t1"
          />
          <p
            class="mb-5 text-body-1"
            @click="openDialog(projectData?.t2, '', 't2', false)"
            v-text="projectData?.t2"
          />

          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-img
                src="@/assets/road2.jpg"
                height="300"
                cover
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-img
                src="@/assets/inspection.jpg"
                height="300"
                cover
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="5"
        >
          <v-img src="@/assets/road.jpg" />
        </v-col>
      </v-row>

      <p
        class="text-body-1 mb-5 my-10"
        @click="openDialog(projectData?.t3, '', 't3', false)"
        v-text="projectData?.t3"
      />

      <v-img
        src="@/assets/road3.png"
        cover
        class="my-10"
      />

      <p
        class="text-body-1"
        @click="openDialog(projectData?.t4, '', 't4', false)"
        v-text="projectData?.t4"
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
import { db } from '@/firebase';
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export default {
  data: () => ({
    projectData: null,
    model: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
  }),

  mounted () {
    this.getRealTimeUpdate()
  },

  methods: {
    async updateItem (key, content) {
      await updateDoc(doc(db, 'projects', this.projectData.id), {
        [key]: content
      })

      this.dialog = false
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

    async getRealTimeUpdate () {
      const q = query(collection(db, "projects"), where("title", "==", this.$route.params.project));

      const unsub = onSnapshot(q, (doc) => {
        this.projectData = {
          id: doc.docs[0].id,
          ...doc.docs[0].data()
        }
      });

      return unsub
    },

    uploadNewImage () {
      const storage = getStorage()
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async (event) => {
        const file = event.target.files[0];
        if (file) {
          const filePath = `images/${file.name}`;
          const fileRef = ref(storage, filePath);

          try {
            // Upload the new image to Firebase Storage
            const snapshot = await uploadBytes(fileRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);

            await updateDoc(doc(db, 'projects', this.projectData.id), {
              image: { path: snapshot.ref.fullPath, uri: downloadURL }
            })

            // Update the project data with the new image details
            this.projectData.image = { uri: downloadURL, path: filePath };
          } catch (error) {
            console.error("Error uploading image:", error);
            alert("Failed to upload the image. Please try again.");
          }
        }
      };

      input.click();
    },
  }
}
</script>