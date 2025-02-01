<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="(report, index) in reports"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card
            rounded="xl"
            @click="openDialog(report)"
          >
            <v-img
              :src="report?.images[0]?.downloadURL"
              height="250"
              cover
            />
            <v-card-title>
              {{ report?.reportTitle }}
            </v-card-title>

            <v-card-text>
              <p>{{ report?.name }}</p>
              <p>{{ report?.email }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        @input="fetchReports"
      />
    </v-container>

    <v-dialog
      v-model="dialog.active"
      width="800"
      scrollable
    >
      <v-card
        rounded="xl"
      >
        <v-toolbar color="white">
          <v-spacer />
        </v-toolbar>
        
        <v-card-text
          class="mt-2"
          style="height: 800px;"
        >
          <v-row>
            <v-col
              v-for="(image, index) in dialog?.images"
              :key="index"
              cols="12"
              sm="6"
            >
              <v-card
                elevation="5"
                class="pa-0"
                rounded="lg"
                @click="openImageDialog(image.downloadURL)"
              >
                <v-img
                  :src="image.downloadURL"
                  height="200"
                  cover
                />
              </v-card>
            </v-col>
          </v-row>
          <v-card-title class="block-text mt-10 text-h5 text-sm-h4">
            {{ dialog?.reportTitle }}
          </v-card-title>
          <v-card-subtitle class="main-text">
            {{ dialog?.reportType }}
          </v-card-subtitle>

          <v-row class="mt-10">
            <v-col cols="3">
              <p class="block-text">
                Reporter's name:
              </p>
            </v-col>
            <v-col cols="9">
              <p class="main-text text-body-2 text-sm-body-1">
                {{ dialog?.name }}
              </p>
            </v-col>

            <v-col cols="3">
              <p class="block-text">
                Reporter's email:
              </p>
            </v-col>
            <v-col cols="9">
              <p class="main-text text-body-2 text-sm-body-1">
                {{ dialog?.email }}
              </p>
            </v-col>

            <v-col cols="3">
              <p class="block-text">
                Reporter's phone:
              </p>
            </v-col>
            <v-col cols="9">
              <p class="main-text text-body-2 text-sm-body-1">
                {{ dialog?.phone }}
              </p>
            </v-col>

            <v-col cols="3">
              <p class="block-text">
                Location:
              </p>
            </v-col>
            <v-col cols="9">
              <p class="main-text text-body-2 text-sm-body-1">
                {{ dialog?.projectLocation }}, {{ dialog?.state }}
              </p>
            </v-col>

            <v-col cols="3">
              <p class="block-text">
                Time Reported:
              </p>
            </v-col>
            <v-col cols="9">
              <p class="main-text text-body-2 text-sm-body-1">
                {{ new Date(dialog?.timestamp?.seconds * 1000).toDateString() }}
              </p>
            </v-col>

            <v-col cols="3">
              <p class="block-text">
                Comment:
              </p>
            </v-col>
            <v-col cols="9">
              <p class="main-text text-body-2 text-sm-body-1">
                {{ dialog.comment }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="imageDialog.active"
      width="1200"
    >
      <v-card rounded="xl">
        <v-img :src="imageDialog.image" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '@/firebase';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import { ref, onMounted } from 'vue';

export default {
  setup () {
    const reports = ref([]);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const perPage = 30; // Number of items per page
    let lastVisibleDoc = null; // Track the last document
    const dialog = ref({
      active: false
    })

    const imageDialog = ref({
      active: false,
      image: ''
    })

    const fetchReports = async (page = 1) => {
      try {
        let q = query(collection(db, "iReport"), orderBy('timestamp', 'asc'), limit(perPage));

        // If not on the first page, use `startAfter()`
        if (page > 1 && lastVisibleDoc) {
          q = query(collection(db, "iReport"), orderBy('timestamp', 'asc'), startAfter(lastVisibleDoc), limit(perPage));
        }

        const querySnapshot = await getDocs(q);
        reports.value = querySnapshot.docs.map(doc => ({
          docId: doc.id,
          ...doc.data()
        }));

        // Set last visible document for pagination
        lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

        // Estimate total pages (Firestore does not support `count()`)
        if (page === 1) {
          const totalDocsSnapshot = await getDocs(collection(db, "iReport"));
          totalPages.value = Math.ceil(totalDocsSnapshot.size / perPage);
        }
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    const openDialog = (report) => {
      // console.log(report)
      dialog.value = {
        active: true,
        ...report
      }
    }

    const openImageDialog = (image) => {
      imageDialog.value = {
        active: true,
        image: image
      }
    }

    onMounted(() => {
      fetchReports();
    });

    return {
      reports,
      currentPage,
      totalPages,
      fetchReports,
      dialog,
      openDialog,
      imageDialog,
      openImageDialog
    };
  }
};
</script>

<style></style>
