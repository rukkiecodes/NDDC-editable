<template>
  <div>
    <v-parallax
      :height="height"
      cover
      src="@/assets/NDDC.jpg"
      class="d-flex align-center"
    >
      <v-sheet
        :height="height"
        class="d-flex align-center"
        color="rgba(0,0,0,0.4)"
      >
        <v-container>
          <v-sheet
            color="transparent"
            width="600"
          >
            <p
              class="text-white text-h6 cursor-pointer"
              @click="openDialog(pageData.t1 || 'Niger Delta Development Commisson', '', 't1', false)"
            >
              {{ pageData?.t1 || 'Niger Delta Development Commisson' }}
            </p>
            <div class="mt-5">
              <p
                class="text-h2 font-weight-bold text-white mb-2"
                @click="openDialog(pageData.t2 || 'Building a Prosperous Future for the Niger Delta', '', 't2', false)"
              >
                {{ pageData?.t2 || 'Building a Prosperous Future for the Niger Delta' }}
              </p>
            </div>

            <div class="my-5">
              <p
                class="text-h6 text-white"
                @click="openDialog(pageData.t3 || `Together, we're driving impactful change, transforming lives, and empowering communities through sustainable development initiatives.`, '', 't3', false)"
              >
                {{ pageData?.t3 || `Together, we're driving impactful change, transforming lives, and empowering
                communities through sustainable development initiatives.` }}
              </p>
            </div>

            <div class="d-flex">
              <v-btn
                class="text-capitalize mr-5"
                color="#038735"
                :elevation="0"
                @click="openDialog(pageData.t4 || 'Explore our work', '', 't4', false)"
              >
                {{ pageData?.t4 || 'Explore our work' }}
              </v-btn>
              <v-btn
                class="text-capitalize"
                :elevation="0"
                prepend-icon="mdi-play-circle-outline"
                variants="outlined"
                @click="openDialog(pageData.t5 || 'Watch our video', '', 't5', false)"
              >
                {{ pageData?.t5 || 'Watch our video' }}
              </v-btn>
            </div>
          </v-sheet>
        </v-container>
      </v-sheet>
    </v-parallax>

    <v-container>
      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="text-h3 font-weight-bold my-5"
              style="color: #038735"
              @click="openDialog(pageData.t6 || '16k', '', 't6', false)"
            >
              {{ pageData?.t6 || '16k' }}
            </p>
            <p
              class="text-body-1 text-grey-darken-3"
              @click="openDialog(pageData.t7 || 'Regional Projects Delivered', '', 't7', false)"
            >
              {{ pageData?.t7 || 'Regional Projects Delivered' }}
            </p>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="text-h3 font-weight-bold my-5"
              style="color: #038735"
              @click="openDialog(pageData?.t8 || '60%', '', 't8', false)"
            >
              {{ pageData?.t8 || '60%' }}
            </p>
            <p
              class="text-body-1 text-grey-darken-3"
              @click="openDialog(pageData?.t9 || 'Capital Projects', '', 't9', false)"
            >
              {{ pageData?.t9 || 'Capital Projects' }}
            </p>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="text-h3 font-weight-bold my-5"
              style="color: #038735"
              @click="openDialog(pageData?.t10 || '26%', '', 't10', false)"
            >
              {{ pageData?.t10 || '26%' }}
            </p>
            <p
              class="text-body-1 text-grey-darken-3"
              @click="openDialog(pageData?.t11 || 'Both Private & Domestic Land', '', 't11', false)"
            >
              {{ pageData?.t11 || 'Both Private & Domestic Land' }}
            </p>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          sm="3"
        >
          <v-sheet
            color="#EBF9F1"
            class="rounded-lg pa-4"
          >
            <v-avatar color="white">
              <v-icon color="#038735">
                mdi-view-grid-outline
              </v-icon>
            </v-avatar>

            <p
              class="text-h3 font-weight-bold my-5"
              style="color: #038735"
              @click="openDialog(pageData?.t12 || '3000+', '', 't12', false)"
            >
              {{ pageData?.t12 || '3000+' }}
            </p>
            <p
              class="text-body-1 text-grey-darken-3"
              @click="openDialog(pageData?.t13 || 'Rural Projects', '', 't13', false)"
            >
              {{ pageData?.t13 || 'Rural Projects' }}
            </p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="6"
          class="d-flex align-center"
        >
          <div>
            <p class="text-h3 font-weight-bold">
              We're on a <span style="color: #038735;">misson</span> of big changes to
              <span style="color: #038735;">help</span> the people and
              <span style="color: #038735;">improve</span> Niger Delta
            </p>

            <p
              class="text-grey-darken-3 mt-5 text-body-1"
              @click="openDialog(pageData?.t14 || `Get current updates on our Projects and Programs cut accross
              the
              Nine States of the Niger Delta Region, gain deep insights and analysis of developmental trends within the
              region and the impact of our Projects and Programs on our people along developmental projections.`, '', 't14', false)"
            >
              {{ pageData?.t14 || `Get current updates on our Projects and Programs cut accross
              the
              Nine States of the Niger Delta Region, gain deep insights and analysis of developmental trends within the
              region and the impact of our Projects and Programs on our people along developmental projections.` }}
            </p>


            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  append-icon="mdi-arrow-right"
                  class="mt-5 rounded-0"
                  variant="outlined"
                  style="border-color: #038735; text-transform: none;"
                >
                  {{ pageData?.t15 || 'Read more about who we are' }}
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  value="edit"
                  @click="openDialog(pageData?.t15 || 'Read more about who we are', '', 't15', false)"
                >
                  <v-list-item-title>Edit</v-list-item-title>
                </v-list-item>
                <v-list-item
                  value="open"
                  to="/whoWeAre"
                >
                  <v-list-item-title>Open</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-img src="@/assets/1.png" />
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col
          cols="12"
          sm="7"
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-account-group
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="text-h5 font-weight-bold"
                    @click="openDialog(pageData?.t16 || 'Youth Empowerment', '', 't16', false)"
                  >
                    {{ pageData?.t16 || 'Youth Empowerment' }}
                  </p>
                </div>

                <p
                  class="text-grey-darken-3 my-5"
                  @click="openDialog(pageData?.t17, '', 't17', false)"
                >
                  {{ pageData?.t17 }}
                </p>

                <v-btn
                  class="text-capitalize text-green-darken-4 font-weight-bold"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-human-female-female
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="text-h5 font-weight-bold"
                    @click="openDialog(pageData?.t18, '', 't18', false)"
                  >
                    {{ pageData?.t18 }}
                  </p>
                </div>

                <p
                  class="text-grey-darken-3 my-5"
                  @click="openDialog(pageData?.t19, '', 't19', false)"
                >
                  {{ pageData?.t19 }}
                </p>

                <v-btn
                  class="text-capitalize text-green-darken-4 font-weight-bold"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-asterisk
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="text-h5 font-weight-bold"
                    @click="openDialog(pageData?.t20, '', 't20', false)"
                  >
                    {{ pageData?.t20 }}
                  </p>
                </div>

                <p
                  class="text-grey-darken-3 my-5"
                  @click="openDialog(pageData?.t21, '', 't21', false)"
                >
                  {{ pageData?.t21 }}
                </p>

                <v-btn
                  class="text-capitalize text-green-darken-4 font-weight-bold"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-sheet
                class="pa-4"
                border="md"
                style="border-color: #038735;"
                rounded="xl"
              >
                <v-sheet
                  class="d-flex justify-center align-center"
                  color="#038735"
                  width="90"
                  height="90"
                  rounded="xl"
                >
                  <v-icon size="30">
                    mdi-leaf-circle-outline
                  </v-icon>
                </v-sheet>

                <div class="mt-5">
                  <p
                    class="text-h5 font-weight-bold"
                    @click="openDialog(pageData?.t22, '', 't22', false)"
                  >
                    {{ pageData?.t22 }}
                  </p>
                  <p class="text-h5 font-weight-bold" />
                </div>

                <p
                  class="text-grey-darken-3 my-5"
                  @click="openDialog(pageData?.t23, '', 't23', false)"
                >
                  {{ pageData?.t23 }}
                </p>

                <v-btn
                  class="text-capitalize text-green-darken-4 font-weight-bold"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  Read more
                </v-btn>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          sm="5"
        >
          <v-sheet
            class="pa-4"
            border="md"
            style="border-color: #038735;"
            rounded="xl"
          >
            <v-img
              class="rounded-xl pa-4"
              aspect-ratio="16/9"
              :height="440"
              cover
              src="@/assets/2.jpg"
            >
              <v-sheet
                class="d-flex justify-center align-center"
                color="#038735"
                width="90"
                height="90"
                rounded="xl"
              >
                <v-icon size="30">
                  mdi-account-school
                </v-icon>
              </v-sheet>
            </v-img>

            <p
              class="text-h5 font-weight-bold mt-5"
              @click="openDialog(pageData?.t24, '', 't24', false)"
              v-text="pageData?.t24"
            />
            <p
              class="text-grey-darken-3 my-5"
              @click="openDialog(pageData?.t25, '', 't25', false)"
              v-text="pageData?.t25"
            />

            <v-btn
              class="text-capitalize text-green-darken-4 font-weight-bold"
              variant="text"
              append-icon="mdi-arrow-right"
            >
              Read more
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>

      <div class="mt-16">
        <p
          class="text-green-darken-3 font-weight-bold text-body-1"
          @click="openDialog(pageData?.t29, '', 't29', false)"
          v-text="pageData?.t29"
        />
        <p
          class="text-h4 font-weight-black my-3"
          @click="openDialog(pageData?.t28, '', 't28', false)"
          v-text="pageData?.t28"
        />
        <v-sheet width="600">
          <p
            class="text-grey-darken-3 text-body-2"
            @click="openDialog(pageData?.t30, '', 't30', false)"
            v-text="pageData?.t30"
          />

          <v-btn
            color="green-darken-3"
            class="text-capitalize mt-5"
            rounded="0"
            :elevation="0"
            to="/addProgram"
          >
            add program
          </v-btn>
        </v-sheet>

        <v-slide-group
          v-model="model"
          class="pa-4"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item
            v-for="program in programs"
            :key="program.id"
            v-slot="{ selectedClass }"
          >
            <v-sheet
              :class="['ma-4', selectedClass]"
              color="grey-lighten-1"
              width="300"
              rounded="xl"
            >
              <v-img
                :src="program?.image?.uri"
                class="d-flex align-end rounded-lg"
                cover
                height="300"
              >
                <div class="blur_card pa-4">
                  <div class="d-flex justify-space-between mb-5">
                    <span class="text-white text-body-1">{{ new Date(program?.timestamp?.seconds * 1000).toDateString()
                    }}</span>
                    <!-- <span class="text-white text-body-1">Health</span> -->
                  </div>

                  <p class="text-white text-h5 font-weight-black">
                    {{ program?.heading }}
                  </p>
                </div>
              </v-img>
            </v-sheet>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <div class="mt-16">
        <v-sheet
          width="600"
          class="text-center mx-auto"
        >
          <p class="text-green-darken-3 font-weight-bold text-body-1">
            Our Projects
          </p>
          <p
            class="text-h4 font-weight-black my-3"
            @click="openDialog(pageData?.t26, '', 't26', false)"
            v-text="pageData?.t26"
          />

          <p
            class="text-body-2"
            @click="openDialog(pageData?.t27, '', 't27', false)"
            v-text="pageData?.t27"
          />

          <v-btn
            class="text-capitalize mt-5"
            :elevation="0"
            rounded="0"
            color="green-darken-4"
            append-icon="mdi-arrow-right"
            to="/addProject"
          >
            Add Projects
          </v-btn>
        </v-sheet>

        <v-slide-group
          v-model="model"
          class="pa-4"
          selected-class="bg-success"
          show-arrows
        >
          <v-slide-group-item
            v-for="n in 15"
            :key="n"
            v-slot="{ isSelected, toggle, selectedClass }"
          >
            <v-sheet
              :class="['ma-4', selectedClass]"
              color="grey-lighten-1"
              width="300"
              rounded="xl"
              @click="toggle"
            >
              <v-img
                src="@/assets/2.jpg"
                class="d-flex align-end rounded-lg"
                cover
                height="300"
              />
            </v-sheet>
          </v-slide-group-item>
        </v-slide-group>
      </div>

      <div class="mt-16">
        <v-sheet class="d-flex justify-space-between align-center">
          <v-sheet width="500">
            <p class="text-green-darken-3 font-weight-bold text-body-1">
              News and Updates
            </p>
            <p class="text-h4 font-weight-black my-3">
              Featured Articles
            </p>

            <p class="text-grey-darken-3 text-body-2">
              Get current updates on our Projects and Programs cut accross the
              Nine States of the Niger Delta Region,
              gain
              deep insights and analysis of developmental trends
            </p>
          </v-sheet>

          <v-btn
            class="text-capitalize text-green-darken-3 font-weight-bold"
            variant="outlined"
            rounded="0"
            style="border-color: #038735;"
          >
            See All
          </v-btn>
        </v-sheet>

        <v-row class="mt-10">
          <v-col
            cols="12"
            sm="4"
          >
            <v-sheet border="sm">
              <v-img
                src="@/assets/2.jpg"
                cover
                height="300"
              />

              <div class="pa-5">
                <p class="text-h6 font-weight-black mb-5">
                  132KV Transmission Line and Substation in Abia State
                </p>
                <p class="text-grey-darken-3 text-body-2 mb-2">
                  The NDDC's state-of-the-art 132KV transmission line and
                  substation project will transform energy...
                </p>

                <v-btn
                  class="text-green-darken-3"
                  variant="text"
                  append-icon="mdi-arrow-right"
                  style="text-transform: none;"
                >
                  Click here to read the full article
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-sheet border="sm">
              <v-img
                src="@/assets/2.jpg"
                cover
                height="300"
              />import "quill/dist/quill.core.css"

              <div class="pa-5">
                <p class="text-h6 font-weight-black mb-5">
                  132KV Transmission Line and Substation in Abia State
                </p>
                <p class="text-grey-darken-3 text-body-2 mb-2">
                  The NDDC's state-of-the-art 132KV transmission line and
                  substation project will transform energy...
                </p>

                <v-btn
                  class="text-green-darken-3"
                  variant="text"
                  append-icon="mdi-arrow-right"
                  style="text-transform: none;"
                >
                  Click here to read the full article
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            sm="4"
          >
            <v-sheet border="sm">
              <v-img
                src="@/assets/2.jpg"
                cover
                height="300"
              />

              <div class="pa-5">
                <p class="text-h6 font-weight-black mb-5">
                  132KV Transmission Line and Substation in Abia State
                </p>
                <p class="text-grey-darken-3 text-body-2 mb-2">
                  The NDDC's state-of-the-art 132KV transmission line and
                  substation project will transform energy...
                </p>

                <v-btn
                  class="text-green-darken-3"
                  variant="text"
                  append-icon="mdi-arrow-right"
                  style="text-transform: none;"
                >
                  Click here to read the full article
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>

      <div class="mt-16 d-flex justify-space-between">
        <div class="left d-flex justify-start align-center">
          <v-icon
            class="mr-5"
            size="90"
            color="green-darken-4"
          >
            mdi-email
          </v-icon>
          <div>
            <p class="text-h5 font-weight-thin text-green-darken-3">
              Stay Connected
            </p>
            <p class="text-h4 font-weight-bold text-green-darken-3 mt-4">
              Join our Newsletter to stay updated
            </p>
          </div>
        </div>

        <div class="right d-flex">
          <v-sheet
            class="pa-2 d-flex align-center"
            border="sm"
            height="40"
          >
            <input
              type="text"
              placeholder="Enter your email address"
              class="contact-input"
            >
          </v-sheet>
          <v-btn
            rounded="0"
            color="green-darken-4"
            height="40"
            :elevation="0"
          >
            Subscribe
          </v-btn>
        </div>
      </div>
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
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { id } from 'vuetify/locale';

export default {
  data: () => ({
    t1: '',
    programs: null,
    displayHeight: null,
    model: null,
    dialog: false,
    dialogProps: {
      text: '',
      link: '',
      field: '',
      isLink: false
    },
    pageData: null
  }),

  computed: {
    height () {
      switch (this.displayHeight) {
        case 'xs':
          return 300;
        case 'sm':
          return 400;
        case 'md':
          return 550;
        case 'lg':
          return 700;
        case 'xl':
          return 800;
        case 'xxl':
          return 1200;
        default:
          return undefined;
      }
    },
  },
  created () {
    const { name } = this.$vuetify.display;
    this.displayHeight = name;
  },

  mounted () {
    this.getRealTimeUpdate()
    this.getProgramUpdate()
  },

  methods: {
    async updateItem (key, content) {
      await updateDoc(doc(db, 'web', 'home'), {
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
      const unsub = onSnapshot(doc(db, 'web', 'home'), (doc) => {
        this.pageData = doc.data();
      });

      return unsub
    },

    async getProgramUpdate () {
      const unsub = onSnapshot(collection(db, 'programs'), (doc) => {
        this.programs = doc.docs.map((document) => ({
          id: document.id,
          ...document.data()
        }))
      });

      return unsub
    },
  }
};
</script>

<style scoped>
.blur_card {
  backdrop-filter: blur(23px) saturate(200%);
  -webkit-backdrop-filter: blur(23px) saturate(200%);
  background-color: rgba(17, 25, 40, 0);
}

.contact-input {
  outline: none;
}
</style>