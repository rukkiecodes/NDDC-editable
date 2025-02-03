<template>
  <v-container>
    <v-sheet class="mx-auto mt-16">
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
          <v-img
            src="@/assets/wdp.jpeg"
            class="rounded-xl"
          />
        </v-col>

        <v-col
          cols="12"
          sm="8"
        >
          <v-card
            elevation="0"
            width="800"
            max-width="100%"
          >
            <v-card-text class="pa-0">
              <p class="block-text text-h5 text-sm-h3 font-weight-bold">
                NDDC Digital Management Portal
              </p>
              <p class="main-text text-body-2 text-sm-body-1 font-weight-regular mt-10">
                Welcome to the NDDC Project & Program Management Hub, the central platform for managing and updating
                development initiatives with ease. This backend system empowers administrators to seamlessly upload,
                edit,
                and organize projects and programs, ensuring transparency and efficiency in the Niger Delta's
                development
                efforts.

                With a user-friendly interface and robust features, this platform enables real-time updates, content
                customization, and secure data management—giving you full control over the information displayed on the
                official NDDC website.

                Stay organized, keep stakeholders informed, and drive impactful development with a system designed for
                flexibility and scalability.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="4"
        >
          <v-img
            src="@/assets/projects.jpg"
            height="300"
            rounded="lg"
            cover
          />

          <p class="block-text text-body-1 text-sm-h6 font-weight-bold mt-4">
            Projects
          </p>
          <p class="main-text text-body-2 text-sm-body-1 font-weight-Regular">
            Add projects happening in the Niger Delta and edit the details of already exising projects
          </p>

          <v-btn
            to="/addProject"
            color="green-darken-3"
            class="main-text text-capitalize mt-4"
          >
            Add projects
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-img
            src="@/assets/bfi.jpeg"
            height="300"
            rounded="lg"
            cover
          />

          <p class="block-text text-body-1 text-sm-h6 font-weight-bold mt-4">
            Programs
          </p>
          <p class="main-text text-body-2 text-sm-body-1 font-weight-Regular">
            Add Programs happening in the Niger Delta and edit the details of already exising Programs
          </p>

          <v-btn
            to="/addProgram"
            color="green-darken-3"
            class="main-text text-capitalize mt-4"
          >
            Add Programs
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-img
            src="@/assets/iReport.jpg"
            height="300"
            rounded="lg"
            cover
          />

          <p class="block-text text-body-1 text-sm-h6 font-weight-bold mt-4">
            iReport
          </p>
          <p class="main-text text-body-2 text-sm-body-1 font-weight-Regular">
            View iReports sent from eye witneses in the Naiga Delta
          </p>

          <v-btn
            to="/iReport"
            color="green-darken-3"
            class="main-text text-capitalize mt-8"
          >
            View Reports
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="mt-0 mt-sm-10"
        >
          <v-img
            src="@/assets/news.jpg"
            height="300"
            rounded="lg"
            cover
          />

          <p class="block-text text-body-1 text-sm-h6 font-weight-bold mt-4">
            News Posts
          </p>
          <p class="main-text text-body-2 text-sm-body-1 font-weight-Regular">
            Post new new rticles and keep the people of the Niger Delter updated with lates developments
          </p>

          <v-btn
            to="/newPost"
            color="green-darken-3"
            class="main-text text-capitalize mt-8"
          >
            New Post
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {

}
</script>
