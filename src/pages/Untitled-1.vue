<template>
  <q-page class="q-pa-md">
 
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      answerSelected: false,
      score: 0,
      quizCompleted: false,
      questions: [
        {
          question: "Qual é a capital da França?",
          answers: ["Paris", "Londres", "Berlim", "Roma"],
          correctAnswer: 0,
        },
        {
          question: "Qual é o maior planeta do sistema solar?",
          answers: ["Terra", "Júpiter", "Saturno", "Marte"],
          correctAnswer: 1,
        },
        {
          question: "Quem pintou a Mona Lisa?",
          answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
          correctAnswer: 1,
        },
      ],
    };
  },
  methods: {
    selectAnswer(index) {
      this.answerSelected = true;
      if (index === this.questions[this.currentQuestion].correctAnswer) {
        this.score++;
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.answerSelected = false;
      } else {
        this.quizCompleted = true;
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: auto;
}
</style>
