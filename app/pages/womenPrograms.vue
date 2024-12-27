<template>
  <v-container>
    <v-breadcrumbs :items="breadcrumbs" color="green-darken-3">
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>

    <v-row class="mt-16">
      <v-col cols="12" sm="9">
        <v-sheet width="600" class="mx-auto text-center">
          <p class="text-h4 font-weight-bold">Empowering Women to Lead, Innovate, and Drive</p>
          <p class="text-h4 font-weight-bold mt-2">Sustainable Development in the Niger Delta</p>
          <p class="text-body-1 text-grey-darken-3 my-5">Follow on Socials</p>

          <div class="d-flex justify-center">
            <v-btn icon variant="outlined" size="40" class="mr-5">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon variant="outlined" size="40" class="mr-5">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="outlined" size="40">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-sheet>

        <div class="mt-16">
          <p class="text-grey-darken-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis
            risus quis lorem hendrerit
            volutpat a ut ligula. Phasellus posuere tortor a ex varius hendrerit. Mauris feugiat vehicula sem, ac
            finibus leo pulvinar quis. Phasellus ac consequat velit. Aliquam id enim lorem. Donec placerat vehicula
            faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
            pellentesque hendrerit commodo. Cras cursus elit eu nibh hendrerit, ut maximus sem rhoncus. Etiam dictum
            massa a molestie interdum.</p>

          <p class="text-grey-darken-3 mt-5">Ut quis posuere enim. Praesent pellentesque nulla eu bibendum congue. Duis
            mauris justo, gravida id arcu
            eu, pretium fermentum libero. Ut mollis tortor nunc, in lobortis velit pulvinar eu. Quisque sed lacinia
            odio. Vivamus sit amet purus nibh. Phasellus id orci eu eros semper vulputate id eu nisl. Nullam malesuada,
            lectus eu vestibulum lobortis, risus sapien vestibulum ligula, aliquam ultricies dui ante ut quam. Morbi
            pretium quam ipsum, vel molestie odio consectetur at. Sed malesuada commodo mattis. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse potenti.</p>

          <v-img src="@/assets/wdp.jpeg" class="mt-5" />

          <p class="text-grey-darken-3 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus quis lorem hendrerit volutpat
            a ut ligula. Phasellus posuere tortor a ex varius hendrerit. Mauris feugiat vehicula sem, ac finibus leo
            pulvinar quis. Phasellus ac consequat velit. Aliquam id enim lorem. Donec placerat vehicula faucibus.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pellentesque
            hendrerit commodo. Cras cursus elit eu nibh hendrerit, ut maximus sem rhoncus. Etiam dictum massa a molestie
            interdum.
          </p>

          <p class="text-grey-darken-3 mt-5">
            Ut quis posuere enim. Praesent pellentesque nulla eu bibendum congue. Duis mauris justo, gravida id arcu eu,
            pretium fermentum libero. Ut mollis tortor nunc, in lobortis velit pulvinar eu. Quisque sed lacinia odio.
            Vivamus sit amet purus nibh. Phasellus id orci eu eros semper vulputate id eu nisl. Nullam malesuada, lectus
            eu vestibulum lobortis, risus sapien vestibulum ligula, aliquam ultricies dui ante ut quam. Morbi pretium
            quam ipsum, vel molestie odio consectetur at. Sed malesuada commodo mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse potenti.
          </p>
          <p class="text-grey-darken-3 mt-5">
            Ut quis posuere enim. Praesent pellentesque nulla eu bibendum congue. Duis mauris justo, gravida id arcu eu,
            pretium fermentum libero. Ut mollis tortor nunc, in lobortis velit pulvinar eu. Quisque sed lacinia odio.
            Vivamus sit amet purus nibh. Phasellus id orci eu eros semper vulputate id eu nisl. Nullam malesuada, lectus
            eu vestibulum lobortis, risus sapien vestibulum ligula, aliquam ultricies dui ante ut quam. Morbi pretium
            quam ipsum, vel molestie odio consectetur at. Sed malesuada commodo mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse potenti.
          </p>
          <p class="text-grey-darken-3 mt-5">
            Ut quis posuere enim. Praesent pellentesque nulla eu bibendum congue. Duis mauris justo, gravida id arcu eu,
            pretium fermentum libero. Ut mollis tortor nunc, in lobortis velit pulvinar eu. Quisque sed lacinia odio.
            Vivamus sit amet purus nibh. Phasellus id orci eu eros semper vulputate id eu nisl. Nullam malesuada, lectus
            eu vestibulum lobortis, risus sapien vestibulum ligula, aliquam ultricies dui ante ut quam. Morbi pretium
            quam ipsum, vel molestie odio consectetur at. Sed malesuada commodo mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse potenti.
          </p>

          <v-img src="@/assets/bfi.jpeg" class="mt-5" />

          <p class="text-grey-darken-3 mt-5">
            Ut quis posuere enim. Praesent pellentesque nulla eu bibendum congue. Duis mauris justo, gravida id arcu eu,
            pretium fermentum libero. Ut mollis tortor nunc, in lobortis velit pulvinar eu. Quisque sed lacinia odio.
            Vivamus sit amet purus nibh. Phasellus id orci eu eros semper vulputate id eu nisl. Nullam malesuada, lectus
            eu vestibulum lobortis, risus sapien vestibulum ligula, aliquam ultricies dui ante ut quam. Morbi pretium
            quam ipsum, vel molestie odio consectetur at. Sed malesuada commodo mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse potenti.
          </p>
          <p class="text-grey-darken-3 mt-5">
            Ut quis posuere enim. Praesent pellentesque nulla eu bibendum congue. Duis mauris justo, gravida id arcu eu,
            pretium fermentum libero. Ut mollis tortor nunc, in lobortis velit pulvinar eu. Quisque sed lacinia odio.
            Vivamus sit amet purus nibh. Phasellus id orci eu eros semper vulputate id eu nisl. Nullam malesuada, lectus
            eu vestibulum lobortis, risus sapien vestibulum ligula, aliquam ultricies dui ante ut quam. Morbi pretium
            quam ipsum, vel molestie odio consectetur at. Sed malesuada commodo mattis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse potenti.
          </p>
        </div>
      </v-col>

      <v-col cols="12" sm="3">
        <v-list :items="importantLinks" />
        <v-list :items="newsArchive" class="mt-5" />
      </v-col>
    </v-row>

    <v-row class="mt-16 justify-space-between">
      <v-col cols="7">
        <v-sheet width="500">
          <p class="text-green-darken-3 font-weight-bold text-h4">Have a question?</p>
          <p class="text-green-darken-3 font-weight-bold text-h4 mb-5">Out team is always happy to assist you</p>
          <p class="text-body-1 text-grey-3">Ask about NDDC projects, programs, interventions or anything else that
            might
            interest you. Our help center
            are
            staning by and ready to help.</p>
        </v-sheet>

        <div class="d-flex mt-5">
          <v-btn
class="text-capitalize mr-5 font-weight-bold" color="green-darken-4" append-icon="mdi-arrow-right"
            :elevation="0" rounded="0">Contact Us</v-btn>
          <v-btn
class="text-capitalize font-weight-bold" color="green-darken-4" append-icon="mdi-play-circle-outline"
            variant="outlined" :elevation="0" rounded="0">Contact
            Us</v-btn>
        </div>
      </v-col>
      <v-col cols="3">
        <v-img src="@/assets/5.png" cover />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        title: 'Home',
        disabled: false,
        to: '/',
      },
      {
        title: 'Media',
        disabled: false,
        to: '/media',
      },
      {
        title: 'Corporate News',
        disabled: false,
        to: '/womenPrograms',
      }
    ],

    importantLinks: [
      {
        title: 'Important Links',
        value: 'Important Links',
        props: {
          class: 'bg-green-darken-4',
          variant: 'tonal'
        },
      },
      {
        title: 'Our Board',
        value: 'Our Board'
      },
      {
        title: 'Scholarships 2024',
        value: 'Scholarships 2024'
      },
      {
        title: 'Youth Empowerment Scheme 2024',
        value: 'Youth Empowerment Scheme 2024'
      },
      {
        title: 'Women Development Program',
        value: 'Women Development Program'
      },
      {
        title: 'Medical Outreach Program',
        value: 'Medical Outreach Program'
      },
      {
        title: 'Publications',
        value: 'Publications'
      },
    ],

    newsArchive: [
      {
        title: 'News Archive',
        value: 'News Archive',
        props: {
          class: 'bg-green-darken-4',
          variant: 'tonal'
        }
      },
      {
        title: '2021',
        value: '2021'
      },
      {
        title: '2022',
        value: '2022'
      },
      {
        title: '2023',
        value: '2023'
      },
      {
        title: 'Ongoing -2024',
        value: 'Ongoing -2024'
      }
    ],
  }),
}
</script>

<style></style>