<template>
  <v-footer
    color="#003414"
    class="pa-16"
  >
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            sm="3"
          >
            <div>
              <v-img
                cover
                src="@/assets/NDDCNewLogo_nobg.jpg"
                :width="250"
              />

              <p class="mt-5">
                To offer a lasting solution to the socio-economic difficulties of the Niger Delta region
              </p>
            </div>

            <v-divider class="my-5" />

            <p class="text-h5 font-weight-bold">
              Follow Us
            </p>

            <div class="d-flex mt-5">
              <v-btn
                icon
                :elevation="0"
                class="mr-5"
                color="transparent"
              >
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn
                icon
                :elevation="0"
                class="mr-5"
                color="transparent"
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn
                icon
                :elevation="0"
                class="mr-5"
                color="transparent"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn
                icon
                :elevation="0"
                color="transparent"
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="9"
          >
            <v-row no-gutters>
              <v-col>
                <p
                  class="text-h5 font-weight-bold mb-5"
                  style="color: #92E3A9"
                >
                  About Us
                </p>

                <div>
                  <div class="mb-2">
                    <router-link
                      class="text-white text-decoration-none"
                      to="/whoWeAre"
                    >
                      Who we are
                    </router-link>
                  </div>
                  <p class="mb-2">
                    Mission Statement
                  </p>
                  <p class="mb-2">
                    The Board
                  </p>
                  <p class="mb-2">
                    Management Team
                  </p>
                  <p class="mb-2">
                    Our People
                  </p>
                </div>
              </v-col>

              <v-col>
                <p
                  class="text-h5 font-weight-bold mb-5"
                  style="color: #92E3A9"
                >
                  Projects
                </p>

                <div>
                  <p class="mb-2">
                    Your Empowerment
                  </p>
                  <p class="mb-2">
                    Women Development
                  </p>
                  <p class="mb-2">
                    Environment Initiatives
                  </p>
                  <p class="mb-2">
                    Ongoing Projects
                  </p>
                </div>
              </v-col>

              <v-col>
                <p
                  class="text-h5 font-weight-bold mb-5"
                  style="color: #92E3A9"
                >
                  Releases
                </p>

                <div>
                  <p class="mb-2">
                    News and Updates
                  </p>
                  <p class="mb-2">
                    Media Gallery
                  </p>
                  <p class="mb-2">
                    Press Releases
                  </p>
                  <p class="mb-2">
                    Publications
                  </p>
                  <p class="mb-2">
                    Impact Reports
                  </p>
                </div>
              </v-col>

              <v-col>
                <p
                  class="text-h5 font-weight-bold mb-5"
                  style="color: #92E3A9"
                >
                  Contact Us
                </p>

                <div>
                  <p class="mb-2">
                    NDDC Headquarters
                  </p>

                  <div class="d-flex mb-2">
                    <v-icon class="mr-2">
                      mdi-map-marker
                    </v-icon>
                    <span>info@nddc.gov.ng</span>
                  </div>

                  <div class="d-flex mb-2">
                    <v-icon class="mr-2">
                      mdi-phone
                    </v-icon>
                    <div>
                      <p>+234 708 923 4567</p>
                      <p>+234 902 765 8731</p>
                    </div>
                  </div>

                  <div class="d-flex mb-2">
                    <v-icon class="mr-2">
                      mdi-email
                    </v-icon>
                    <span>info@nddc.gov.ng</span>
                  </div>

                  <p>Regional Offices</p>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-divider />
      </v-col>

      <v-col cols="12">
        <div class="d-flex justify-space-between">
          <span>Copyright {{ new Date().getFullYear() }} Niger Delta Development Commission</span>

          <div class="d-flex">
            <span class="mr-5">Terms and Conditions</span>
            <span class="mr-5">Privacy Policy</span>
            <span>Freedom of Information</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
