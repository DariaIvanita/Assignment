<template>
    <div>
        <input type="text" v-model="question" placeholder="Enter your question" />
        <button @click="submitQuestion">Submit</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    emits: ['addQuestion'],
    setup(props, { emit }) {
        const question = ref('');

        const submitQuestion = () => {
            if (question.value.trim()) {
                emit('addQuestion', question.value);
                question.value = '';
            }
        };

        return {
            question,
            submitQuestion
        };
    }
});
</script>

<style scoped>
/* Styles specific to QuestionForm can go here */
</style>