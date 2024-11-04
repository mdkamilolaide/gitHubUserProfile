<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  username: {
    type: String,
    require: true,
  },
});

const user = ref();

onMounted(() => {
  fetch(`https://api.github.com/users/${props.username}`).then(async (response) => {
    const data = await response.json();
    user.value = data;
  });
});
</script>

<template>
  <div v-if="user" class="card card-side bg-base-100 shadow-xl mt-3">
    <figure>
      <img :src="user.avatar_url" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>
        <strong>Followers: </strong> {{ user.followers }} <strong>Following: </strong>
        {{ user.following }}
      </p>
      <p>Click here to view the User Profile on Github.</p>
      <div class="card-actions justify-end">
        <a class="btn btn-primary" :href="user.html_url">Watch</a>
      </div>
    </div>
  </div>
</template>
