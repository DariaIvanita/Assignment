<template>
    <div id="app">
        <h1>Question and Response App</h1>
        <QuestionForm @addQuestion="addQuestion" />
        <ResponseBrowser :questions="questions" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import QuestionForm from './components/QuestionForm.vue';
import ResponseBrowser from './components/ResponseBrowser.vue';

export default defineComponent({
    components: {
        QuestionForm,
        ResponseBrowser
    },
    setup() {
        const questions = ref<string[]>([]);

        const addQuestion = (question: string) => {
            questions.value.push(question);
        };

        return {
            questions,
            addQuestion
        };
    }
});
</script>

<style scoped>
/* Additional styles can go here */
</style>