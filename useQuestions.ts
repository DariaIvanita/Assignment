import { ref } from 'vue';

export const useQuestions = () => {
  const questions = ref<string[]>([
    '"What is your favorite memory with [Name]? How did it leave a lasting impression on you?"',
    'What qualities or values of [Name] inspired you the most, and how have they impacted your life?"?',
    'If you could say one thing to [Name] right now, what would it be?',
  ]);
  
  const currentQuestion = ref<string | null>(null);

  const getNewQuestion = () => {
    if (questions.value.length === 0) {