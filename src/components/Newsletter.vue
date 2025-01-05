<template>
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
        <p class="text-h5 text-green-darken-3">
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
</template>

<script>
export default {

}
</script>

<style>

</style>