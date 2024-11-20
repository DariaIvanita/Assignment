import { ref } from 'vue';

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: "What is your favorite memory with [Name]? How did it leave a lasting impression on you?" },
  { id: 2, text: "What qualities or values of [Name] inspired you the most, and how have they impacted your life?" },
  { id: 3, text: "If you could say one thing to [Name] right now, what would it be?"},
