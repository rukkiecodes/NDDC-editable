<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        sm="7"
      >
        <v-img
          src="@/assets/ttrtr.png"
          height="800"
          cover
          class="pa-5 d-flex align-end"
          gradient="transparent, rgba(0,0,0,0.9)"
        >
          <div>
            <v-btn
              color="white"
              class="text-green-darken-3 font-weight-bold"
              :elevation="0"
              style="text-transform: none;"
            >
              NDDC Highlights
            </v-btn>

            <p class="text-h3 text-white font-weight-bold mt-5 mb-2">
              Transforming the region
            </p>
            <p class="text-h3 text-white font-weight-bold">
              through Road Construction
            </p>

            <v-divider
              class="my-5"
              color="white"
              width="60%"
            />

            <p class="text-white text-h6 mt-5">
              Every road paved, bridge built is a step towards unlocking the vast
              potential of the Niger Delta.
            </p>

            <v-btn
              class="text-capitalize text-green-lighten-2 font-weight-bold mt-5"
              append-icon="mdi-arrow-right"
              variant="text"
            >
              Read
              More
            </v-btn>
          </div>
        </v-img>
      </v-col>
      <v-col
        cols="12"
        sm="5"
      >
        <v-row>
          <v-col cols="12">
            <v-img
              src="@/assets/ttrs2.jpeg"
              height="388"
              cover
              class="pa-5 d-flex align-end"
              gradient="transparent, rgba(0,0,0,0.9)"
            >
              <div>
                <p class="text-white text-h6">
                  Every road paved, bridge built is a step towards unlocking the vast
                  potential of the Niger Delta.
                </p>

                <p class="text-h4 text-white font-weight-bold mt-5 mb-2">
                  Transforming the region
                </p>
                <p class="text-h4 text-white font-weight-bold">
                  through Road Construction
                </p>


                <v-btn
                  class="text-capitalize text-green-lighten-2 font-weight-bold mt-5"
                  append-icon="mdi-arrow-right"
                  variant="text"
                >
                  Read
                  More
                </v-btn>
              </div>
            </v-img>
          </v-col>

          <v-col cols="12">
            <v-img
              src="@/assets/inspection.jpg"
              height="388"
              cover
              class="pa-5 d-flex align-end"
              gradient="transparent, rgba(0,0,0,0.9)"
            >
              <div>
                <p class="text-white text-h6">
                  Every road paved, bridge built is a step towards unlocking the vast
                  potential of the Niger Delta.
                </p>

                <p class="text-h4 text-white font-weight-bold mt-5 mb-2">
                  Transforming the region
                </p>
                <p class="text-h4 text-white font-weight-bold">
                  through Road Construction
                </p>


                <v-btn
                  class="text-capitalize text-green-lighten-2 font-weight-bold mt-5"
                  append-icon="mdi-arrow-right"
                  variant="text"
                >
                  Read
                  More
                </v-btn>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

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

      <FeaturedArticles />

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="9"
        >
          <LatestNDDCNews />
          <LatestNDDCNews class="mt-16" />
        </v-col>

        <v-col
          cols="12"
          sm="3"
        >
          <SideList />
        </v-col>
      </v-row>

      <Newsletter />
    </v-container>
  </div>
</template>


