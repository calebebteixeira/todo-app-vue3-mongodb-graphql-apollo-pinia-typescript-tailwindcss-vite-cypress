<script setup lang="ts">
import defaults from '../composables/defaults'
</script>
<template>
  <div
    class="sticky top-3 bg-gray-100 p-10 text-white text-center rounded"
    :style="{ background: defaults.brand_gradient }"
  >
    <img
      src="/calebe-teixeira-avatar.jpg"
      alt="Calebe B. Teixeira"
      class="border-4 border-color-white w-30 h-30 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
    />
    <div class="flex flex-col items-center text-left justify-center">
      <h2 class="font-medium title-font mt-4 text-lg">About me</h2>
      <div class="w-12 h-1 bg-white rounded mt-2 mb-4"></div>
      <p class="mb-2">
        Hi, my name is Calebe B. Teixeira, I'm a Senior Front End Developer with
        16 years of experience from Brazil.
      </p>
      <p class="mb-2">
        This useless todo app was developed just to show off my skills while
        practicing with
        <a href="https://vuejs.org/" class="text-black">Vue.js 3</a> (with
        composition API),
        <a href="https://www.mongodb.com/" class="text-black">MongoDB</a>,
        <a href="https://graphql.org/" class="text-black">GraphQL</a>,
        <a href="https://v4.apollo.vuejs.org/" class="text-black">Apollo</a>,
        <a href="https://www.typescriptlang.org/" class="text-black"
          >TypeScript</a
        >, <a href="https://pinia.vuejs.org/" class="text-black">Pinia</a>,
        <a href="https://tailwindcss.com/" class="text-black">Tailwind CSS</a>
        (with dark mode),
        <a href="https://www.cypress.io/" class="text-black">Cypress</a> (for
        E2E testing) and many other cool
        <a href="#technologies" class="text-black">dev technologies</a>.
      </p>
      <p class="mb-2">
        <strong>If you are a developer</strong> feel free to download, use and
        modify this git repository.
      </p>
      <p class="mb-2">
        <strong>If you are NOT a developer</strong>, maybe you are looking to
        hire someone like me :)
      </p>
      <span class="inline-flex justify-center mt-5">
        <a :href="defaults.linkedin" target="_blank" class="flex mx-2">
          <svg
            fill="currentColor"
            class="self-center w-6 h-6"
            viewBox="0 0 382 382"
          >
            <path
              d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z"
            />
          </svg>
        </a>
        <a :href="defaults.email" target="_blank" class="flex mx-2">
          <svg
            fill="currentColor"
            class="self-center w-7 h-7"
            viewBox="0 0 330.001 330.001"
          >
            <path
              d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602   L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
            />
            <polygon points="165.001,146.4 310.087,40.001 19.911,40  " />
          </svg>
        </a>
        <a :href="defaults.github" target="_blank" class="flex mx-2">
          <svg
            fill="currentColor"
            class="self-center w-7 h-7"
            viewBox="0 0 20 20"
          >
            <path
              d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"
            />
          </svg>
        </a>
      </span>
    </div>
  </div>
</template>
