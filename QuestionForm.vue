<template>
  <div class="container mx-auto p-4">
    <div class="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 class="text-lg font-bold">Question</h2>
      <p v-if="currentQuestion">{{ currentQuestion.text }}</p>
      <input
        v-model="answer"
        type="text"
        placeholder="Your answer"
        class="border p-2 w-full mb-4"
      />
      <div class="mt-2">
        <button @click="submit" class="bg-blue-500 text-white px-4 py-2">Submit</button>
        <button @click="skip" class="bg-gray-500 text-white px-4 py-2 ml-2">Skip</button>
        <button @click="cancel" class="bg-red-500 text-white px-4 py-2 ml-2">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useApi } from '../composables/useApi';

export default defineComponent({
  setup() {
    const { currentQuestion, getQuestion, submitResponse } = useApi();
    const answer = ref('');

    watch(currentQuestion, (newValue) => {
      if (newValue) {
        answer.value = ''; // Clear answer when a new question is fetched
      }
    });

    const submit = () => {
      if (answer.value.trim()) {
        submitResponse(answer.value);
        answer.value = ''; // Clear the input
        getQuestion(); // Get a new question
      }
    };

    const skip = () => {
      answer.value = ''; // Clear the input
      getQuestion(); // Get a new question
    };

    const cancel = () => {
      answer.value = ''; // Clear the input
      currentQuestion.value = null; // Clear current question
    };

    // Fetch the first question when the component is mounted
    getQuestion();

    return {
      currentQuestion,
      answer,
      submit,
      skip,
      cancel,
    };
  },
});
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg shadow-md p-4 mb-4;
}
</style>
