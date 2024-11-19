<template>
    <div>
        <h2>Questions List</h2>
        <ul>
            <li v-for="(question, index) in questions" :key="index">{{ question }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        questions: {
            type: Array as () => string[],
            required: true
        }
    }
});
</script>

<style scoped>
/* Styles specific to ResponseBrowser can go here */
</style>