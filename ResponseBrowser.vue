<template>
  <div class="container mx-auto p-4">
    <div class="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 class="text-lg font-bold">Previous Responses</h2>
      <ul>
        <li v-for="(response, index) in responses" :key="index" class="flex justify-between items-center border-b py-2">
          <span>{{ response.answer }}</span>
          <button @click="deleteResponse(index)" class="bg-red-500 text-white px-2 py-1">Delete</button>
        </li>
      </ul>
      <p v-if="responses.length === 0" class="text-gray-500">No responses yet.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useApi } from '../composables/useApi';

export default defineComponent({
  setup() {
    const { getResponses, deleteResponse } = useApi();
    const responses = computed(() => getResponses());

    return {
      responses,
      deleteResponse,
    };
  },
});
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg shadow-md p-4 mb-4;
}
</style>
