<template>
  <v-container class="py-0">
    <v-sheet
      class="d-flex align-center"
      height="100vh"
    >
      <v-card
        width="400"
        class="mx-auto my-16"
        :elevation="0"
      >
        <v-card-text>
          <v-text-field
            v-model="email"
            variant="outlined"
            label="Email"
            :error="!!emailError"
            :error-messages="emailError"
          />
          <v-text-field
            v-model="password"
            label="Password"
            variant="outlined"
            type="password"
            :error="!!passwordError"
            :error-messages="passwordError"
          />
          <v-btn
            color="green-darken-3"
            height="50"
            block
            :loading="loading"
            @click="signIn"
          >
            Log In
          </v-btn>
        </v-card-text>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

// State variables
const email = ref('');
const password = ref('');
const loading = ref(false);
const emailError = ref('');
const passwordError = ref('');

const router = useRouter();

// Sign-in function
const signIn = async () => {
  emailError.value = '';
  passwordError.value = '';
  loading.value = true;

  try {
    // Firebase sign-in
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Store user data in localStorage
    localStorage.setItem('NDDC_user', JSON.stringify(user));

    // Redirect to home page
    router.push('/home');
  } catch (error) {
    console.error('Login failed:', error.message);

    // Error handling
    if (error.code === 'auth/invalid-email') {
      emailError.value = 'Invalid email format';
    } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      emailError.value = 'Email or password is incorrect';
      passwordError.value = 'Email or password is incorrect';
    } else {
      emailError.value = 'Login failed. Please try again.';
    }
  } finally {
    loading.value = false;
  }
};
</script>
