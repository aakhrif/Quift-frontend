<template>
  <section class="bg-gray-900 text-white py-20 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-3xl px-4 sm:px-6 lg:px-8">
      <div class="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-10 space-y-8">
        <h2 class="text-3xl sm:text-4xl font-bold text-center">Quiz Time!</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <p class="mb-4 text-sm sm:text-base font-medium leading-relaxed whitespace-pre-line">
              {{ questionData.question }}
            </p>

            <div class="space-y-4">
              <label
                v-for="(answer, index) in questionData.answers"
                :key="index"
                class="flex items-center gap-4 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition cursor-pointer"
              >
                <input
                  type="radio"
                  :value="index"
                  v-model="selectedAnswer"
                  name="answer"
                  class="form-radio h-5 w-5 text-indigo-500 focus:ring-indigo-500"
                />
                <span class="text-sm sm:text-base">{{ answer }}</span>
              </label>
            </div>
          </div>

          <button
            v-if="!showNext"
            type="submit"
            class="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition text-sm sm:text-base cursor-pointer"
          >
            Submit Answer
          </button>

          <button
            v-else
            type="button"
            @click="goToNextQuestion"
            class="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition text-sm sm:text-base cursor-pointer"
          >
            Next Question
          </button>


          <p
            v-if="result !== null"
            class="text-center text-lg font-semibold mt-2"
            :class="result ? 'text-green-400' : 'text-red-400'"
          >
            {{ result ? 'Correct!' : 'Incorrect. Try again!' }}
          </p>
          <p
            v-if="!result && showCorrectAnswer"
            class="text-sm mt-1 text-white text-center"
          >
            Correct answer: <span class="font-semibold text-indigo-300">{{ questionData.answers[questionData.correctIndex] }}</span>
          </p>

        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const questionData = {
  kursId: 'aws-dva-c02',
  question: `You are designing a new serverless REST API using Amazon API Gateway and AWS Lambda.
To improve security, you must authenticate API requests with JWT tokens issued by a trusted identity provider.
Additionally, you must minimize Lambda execution time related to authentication. What is the most appropriate solution?`,
  answers: [
    'Implement authentication inside the Lambda function using custom JWT parsing logic.',
    'Use an AWS WAF Web ACL to inspect JWT tokens and block unauthorized requests.',
    'Configure an Amazon Cognito authorizer in API Gateway to validate JWT tokens before invoking the Lambda function.',
    'Use API Gateway Lambda Authorizer (formerly Custom Authorizer) for token validation.'
  ],
  correctIndex: 2
}

const selectedAnswer = ref<number | null>(null)
const result = ref<boolean | null>(null)

const showNext = ref(false)
const showCorrectAnswer = ref(false)

const router = useRouter()

function handleSubmit() {
  if (selectedAnswer.value === null) return

  const isCorrect = selectedAnswer.value === questionData.correctIndex
  result.value = isCorrect

  if (isCorrect) {
    showNext.value = true
  } else {
    showCorrectAnswer.value = true
  }
}

function goToNextQuestion() {
  // Logik für nächste Frage kommt später
  router.push({ path: '/register', query: { from: 'quiz', kursId: '123' } })
}

</script>
