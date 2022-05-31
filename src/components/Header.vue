<script setup lang="ts">
import defaults from '../composables/defaults'
import ToggleMode from './ToggleMode.vue'
</script>

<template>
  <header
    class="text-gray-600 body-font"
    :style="{ background: defaults.brand_gradient }"
  >
    <div
      class="container mx-auto flex flex-wrap py-5 px-5 flex-col lg:flex-row items-center"
    >
      <!-- logo -->
      <router-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900"
      >
        <img src="logo.svg" :alt="defaults.title" class="w-12 md:w-15" />
        <span class="ml-3 text-white text-xl">{{ defaults.title }}</span>
      </router-link>

      <!-- navigation -->
      <nav
        class="flex flex-wrap items-center text-base justify-center mx-auto my-6 lg:my-0 lg:mr-0"
      >
        <a
          :href="defaults.linkedin"
          class="mr-5 text-white opacity-80 hover:opacity-100 no-underline"
          >About me</a
        >
        <a
          :href="defaults.linkedin"
          target="_blank"
          class="mr-5 text-white opacity-80 hover:opacity-100 no-underline"
          >LinkedIn</a
        >
        <a
          :href="defaults.github"
          class="mr-5 text-white opacity-80 hover:opacity-100 no-underline"
          >Github</a
        >
        <a
          :href="defaults.email"
          class="text-white opacity-80 hover:opacity-100 no-underline"
          >Contact</a
        >
      </nav>

      <!-- buttons -->
      <span class="inline-flex mx-auto xl:mr-0">
        <ToggleMode class="mr-5"></ToggleMode>
        <a
          :href="defaults.repository"
          class="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
        >
          <span>Star on Github</span>
          <svg fill="currentColor" class="w-5 h-5 ml-3" viewBox="0 0 20 20">
            <path
              d="M13.18 11.309c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801s1.3-.807 1.3-1.801c-.001-.992-.582-1.799-1.3-1.799zm4.526-4.683c.149-.365.155-2.439-.635-4.426 0 0-1.811.199-4.551 2.08-.575-.16-1.548-.238-2.519-.238-.973 0-1.945.078-2.52.238C4.74 2.399 2.929 2.2 2.929 2.2c-.789 1.987-.781 4.061-.634 4.426C1.367 7.634.8 8.845.8 10.497c0 7.186 5.963 7.301 7.467 7.301l1.734.002 1.732-.002c1.506 0 7.467-.115 7.467-7.301 0-1.652-.566-2.863-1.494-3.871zm-7.678 10.289h-.056c-3.771 0-6.709-.449-6.709-4.115 0-.879.31-1.693 1.047-2.369C5.537 9.304 7.615 9.9 9.972 9.9h.056c2.357 0 4.436-.596 5.664.531.735.676 1.045 1.49 1.045 2.369 0 3.666-2.937 4.115-6.709 4.115zm-3.207-5.606c-.718 0-1.3.807-1.3 1.799 0 .994.582 1.801 1.3 1.801.719 0 1.301-.807 1.301-1.801 0-.992-.582-1.799-1.301-1.799z"
            />
          </svg>
        </a>
      </span>
    </div>
  </header>
</template>
