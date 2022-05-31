<script setup lang="ts">
import ModalWrapper from './ModalWrapper.vue'
const emits = defineEmits<{
  (event: 'close-modal'): void
  (event: 'delete-task'): void
}>()
function closeModal() {
  emits('close-modal')
}
function deleteTask() {
  emits('delete-task')
  closeModal()
}
</script>

<template>
  <ModalWrapper @closeModal="closeModal">
    <template v-slot:title>Delete task?</template>
    <template v-slot:content>
      <div class="relative py-8 flex-auto px-8">
        <!-- DESCRIPTION -->
        <p class="flex font-medium dark:color-gray-400">
          Please make sure you know what you are doing. This action is
          irreversible.
        </p>
      </div>
    </template>
    <template v-slot:footer>
      <!-- CANCEL -->
      <a
        href="#"
        @click.prevent="closeModal"
        class="text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 py-1 px-3 rounded inline-flex items-center ml-3"
        >Cancel</a
      >
      <!-- DELETE TASK -->
      <a
        data-test="delete-task-delete"
        href="#"
        @click.prevent="deleteTask"
        class="text-sm bg-brand-primary text-white py-1 px-3 rounded inline-flex items-center float-right ml-3"
        >Yes, delete task</a
      >
    </template>
  </ModalWrapper>
</template>
