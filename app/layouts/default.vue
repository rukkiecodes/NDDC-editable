<template>
  <v-app>
    <v-app-bar :elevation="0" color="white">
      <template #prepend>
        <v-img cover src="@/assets/NDDCNewLogo.jpg" :width='250' />
      </template>

      <v-btn class="text-capitalize mr-5" to="/" variant="text">
        Home
      </v-btn>

      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn color="dark" class="text-capitalize mr-5" v-bind="props">
            The Commission
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/whoWeAre" value="About Us">
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item>
          <v-list-item value="Mission Statement">
            <v-list-item-title>Mission Statement</v-list-item-title>
          </v-list-item>
          <v-list-item to="/theBoard" value="The Board">
            <v-list-item-title>The Board</v-list-item-title>
          </v-list-item>
          <v-list-item value="The Management Team">
            <v-list-item-title>The Management Team</v-list-item-title>
          </v-list-item>
          <v-list-item to="/ourPeople" value="Our People">
            <v-list-item-title>Our People</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn to="/ourProjects" color="dark" class="text-capitalize mr-5" v-bind="props">
            Our Projects
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/ourProjects" value="Road Construction">
            <v-list-item-title>Road Construction</v-list-item-title>
          </v-list-item>
          <v-list-item value="Electrical Development">
            <v-list-item-title>Electrical Development</v-list-item-title>
          </v-list-item>
          <v-list-item value="Water Supply">
            <v-list-item-title>Water Supply</v-list-item-title>
          </v-list-item>
          <v-list-item value="School Development">
            <v-list-item-title>School Development</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn to="/ourPrograms" color="dark" class="text-capitalize mr-5" v-bind="props">
            Our Programs
          </v-btn>
        </template>
        <v-list>
          <v-list-item value="Education">
            <v-list-item-title>Education</v-list-item-title>
          </v-list-item>
          <v-list-item value="Health">
            <v-list-item-title>Health</v-list-item-title>
          </v-list-item>
          <v-list-item value="Youth Empowerment">
            <v-list-item-title>Youth Empowerment</v-list-item-title>
          </v-list-item>
          <v-list-item to="/womenPrograms" value="Women Development">
            <v-list-item-title>Women Development</v-list-item-title>
          </v-list-item>
          <v-list-item value="Sports">
            <v-list-item-title>Sports</v-list-item-title>
          </v-list-item>
          <v-list-item value="Environment">
            <v-list-item-title>Environment</v-list-item-title>
          </v-list-item>
          <v-list-item value="Scholarships">
            <v-list-item-title>Scholarships</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn color="dark" class="text-capitalize mr-5" v-bind="props">
            E-Services
          </v-btn>
        </template>
        <v-list>
          <v-list-item value="Online Forms">
            <v-list-item-title>Online Forms</v-list-item-title>
          </v-list-item>
          <v-list-item value="Adverts">
            <v-list-item-title>Adverts</v-list-item-title>
          </v-list-item>
          <v-list-item value="i-Report">
            <v-list-item-title>i-Report</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu open-on-hover>
        <template #activator="{ props }">
          <v-btn to="/media" color="dark" class="text-capitalize mr-5" v-bind="props">
            Media
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/media" value="News and Updates">
            <v-list-item-title>News and Updates</v-list-item-title>
          </v-list-item>
          <v-list-item value="Press Releases">
            <v-list-item-title>Press Releases</v-list-item-title>
          </v-list-item>
          <v-list-item to="/mediaGallery" value="Media Gallery">
            <v-list-item-title>Media Gallery</v-list-item-title>
          </v-list-item>
          <v-list-item to="/publication" value="Publications">
            <v-list-item-title>Publications</v-list-item-title>
          </v-list-item>
          <v-list-item to="/eventCalendar" value="Events Calendar">
            <v-list-item-title>Events Calendar</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn class="text-capitalize mr-5" variant="text">Contact Us</v-btn>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <AppFooter />
  </v-app>
</template>
