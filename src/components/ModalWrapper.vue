<script setup lang="ts">
const emits = defineEmits<{
  (event: 'close-modal'): void
}>()
function closeModal() {
  emits('close-modal')
}
</script>

<template>
  <Teleport to="body">
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div
        class="relative w-full my-6 mx-auto max-w-3xl z-10 animate__animated animate__zoomIn"
        style="--animate-duration: 0.3s"
      >
        <div
          class="border-0 rounded-lg z-10 shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none"
        >
          <div
            class="flex justify-between p-4 border-b-1 border-gray-300 dark:border-gray-700"
          >
            <h1 class="text-2xl">
              <slot name="title"></slot>
            </h1>
            <!-- CLOSE -->
            <a
              href="#"
              @click.prevent="closeModal"
              class="text-sm self-center text-white bg-gray-400 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full inline-flex items-center"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 p-1">
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </a>
          </div>
          <slot name="content"></slot>
          <div
            class="p-5 text-right border-t-1 border-gray-300 dark:border-gray-700"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
      <div
        @click="closeModal"
        class="fixed inset-0 backdrop-blur-sm bg-black/50 animate__animated animate__fadeIn animate__faster"
      ></div>
    </div>
  </Teleport>
</template>
