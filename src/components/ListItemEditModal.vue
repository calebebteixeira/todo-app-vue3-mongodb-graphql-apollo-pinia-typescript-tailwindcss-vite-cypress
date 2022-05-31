<script setup lang="ts">
import { Task } from '../types'
import { convertToSingleLine, canSaveTask } from '../composables/utils'
import { computed, reactive, onMounted } from 'vue'
import { useTaskStore } from '../stores/tasks'
import { useCategoryStore } from '../stores/categories'
import ModalWrapper from './ModalWrapper.vue'

const props = defineProps<{ id: string }>()
const tasks = useTaskStore()
const task = tasks.item(props.id)
const categories = useCategoryStore()
const updatedTask = reactive(Object.assign({}, task))

const canCreateTask = computed(() =>
  canSaveTask(updatedTask.title, updatedTask.categoryId)
)

const emits = defineEmits<{
  (event: 'close-modal'): void
  (event: 'update-task', task: Task): void
  (event: 'delete-task'): void
}>()

function closeModal() {
  emits('close-modal')
}

function deleteTask() {
  emits('delete-task')
  closeModal()
}

function updateTask() {
  if (canCreateTask.value) {
    emits('update-task', updatedTask)
    closeModal()
  }
}

onMounted(() => {
  categories.fetchAll()
})
</script>

<template>
  <ModalWrapper @closeModal="closeModal">
    <template v-slot:title>Updating task</template>
    <template v-slot:content>
      <div class="relative py-12 flex-auto px-8">
        <div class="flex -mt-2">
          <!-- COMPLETED -->
          <label class="form-control">
            <input
              data-test="edit-task-completed"
              type="checkbox"
              class="checked:bg-brand-primary mr-3 mt-1.8"
              v-model="updatedTask.completed"
            />
          </label>
          <!-- TITLE -->
          <span
            data-test="edit-task-title"
            contenteditable="true"
            @input="({ target }) => updatedTask.title = convertToSingleLine((target as HTMLHtmlElement).textContent)"
            placeholder="Enter new task title..."
            class="flex grow outline-none cursor-text text-2xl font-medium title-font empty:before:content-[attr(placeholder)] empty:text-gray-400"
          >
            {{ convertToSingleLine(updatedTask.title) }}
          </span>
        </div>
        <!-- DESCRIPTION -->
        <p
          data-test="edit-task-description"
          contenteditable="true"
          @input="({ target }) => updatedTask.description = convertToSingleLine((target as HTMLHtmlElement).textContent)"
          placeholder="Enter task description..."
          class="flex grow outline-none leading-relaxed mt-2 empty:before:content-[attr(placeholder)] dark:text-gray-400"
        >
          {{ convertToSingleLine(updatedTask.description) }}
        </p>
        <div class="mt-8">
          <!-- CATEGORY -->
          <label class="inline-flex mr-3">
            <select
              data-test="edit-task-category"
              class="block text-sm outline-none bg-gray-100 dark:bg-gray-600 py-1 px-2 rounded w-40"
              v-model="updatedTask.categoryId"
            >
              <option
                v-for="cat of categories.items"
                :key="cat.id"
                :value="cat.id"
              >
                {{ cat.name }}
              </option>
            </select>
          </label>
          <!-- DATE -->
          <label class="inline-flex mr-3">
            <input
              data-test="edit-task-date"
              type="date"
              v-model="updatedTask.date"
              class="block text-sm outline-none bg-gray-100 dark:bg-gray-600 py-1 px-2 rounded w-40"
            />
          </label>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <!-- DELETE TASK -->
      <a
        data-test="delete-task-button"
        href="#"
        @click.prevent="deleteTask"
        class="text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 py-1 px-3 rounded inline-flex items-center ml-3"
        >Delete task</a
      >
      <!-- UPDATE TASK -->
      <a
        data-test="edit-task-button"
        href="#"
        @click.prevent="updateTask"
        class="text-sm bg-brand-primary text-white py-1 px-3 rounded inline-flex items-center float-right ml-3"
        :class="{
          'bg-gray-400': !canCreateTask,
          'cursor-not-allowed': !canCreateTask
        }"
        >Update task</a
      >
    </template>
  </ModalWrapper>
</template>
