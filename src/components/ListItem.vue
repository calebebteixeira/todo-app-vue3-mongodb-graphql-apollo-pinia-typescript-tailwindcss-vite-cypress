<script setup lang="ts">
import { Task } from '../types'
import ListItemEditModal from './ListItemEditModal.vue'
import ListItemDeleteModal from './ListItemDeleteModal.vue'
import { useTaskStore } from '../stores/tasks'
import { format } from 'date-fns'
import { ref } from 'vue'
const editModalShow = ref(false)
const deleteModalShow = ref(false)
const tasks = useTaskStore()
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
function updateTask(data: Task) {
  tasks.update(props.task.id, data)
}
function deleteTask() {
  tasks.delete(props.task.id)
}
function toggleCompleted() {
  tasks.update(props.task.id, { completed: !props.task.completed })
}
</script>
<template>
  <div
    data-test="list-task"
    class="py-8 flex flex-wrap md:flex-nowrap hover:opacity-100 animate__animated animate__fadeIn animate__fast"
    :class="{ 'opacity-50': props.task.completed }"
  >
    <div
      class="w-full mb-6 flex text-sm md:flex-col md:w-40 md:mb-0 dark:color-gray-400"
    >
      <span class="text-brand-primary mr-3">{{ props.task.category }}</span>
      <span class="">
        <span class="mr-2 md:hidden">·</span>
        {{ format(new Date(props.task.date), 'MM/dd/yyyy') }}</span
      >
    </div>
    <div class="md:flex-grow">
      <div class="-mt-2" :class="{ 'line-through': props.task.completed }">
        <label class="form-control">
          <input
            data-test="list-task-completed"
            type="checkbox"
            :checked="props.task.completed"
            class="checked:bg-brand-primary mr-3 mt-1.8"
            @change="toggleCompleted"
          />
          <span class="text-2xl font-medium title-font">
            {{ props.task.title }}
          </span>
        </label>
        <p class="leading-relaxed mt-2 dark:color-gray-400">
          {{ props.task.description }}
        </p>
      </div>
      <a
        data-test="list-task-edit"
        href="#"
        @click.prevent="editModalShow = true"
        class="text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 py-1 px-3 rounded inline-flex items-center mt-4 mr-3"
        >Edit</a
      >
      <a
        data-test="list-task-delete"
        href="#"
        @click.prevent="deleteModalShow = true"
        class="text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 py-1 px-3 rounded inline-flex items-center mt-4 mr-3"
        >Delete</a
      >
    </div>
  </div>
  <ListItemEditModal
    v-if="editModalShow"
    :id="props.task.id"
    @update-task="updateTask"
    @delete-task="deleteTask"
    @close-modal="editModalShow = false"
  >
  </ListItemEditModal>
  <ListItemDeleteModal
    v-if="deleteModalShow"
    @delete-task="deleteTask"
    @close-modal="deleteModalShow = false"
  >
  </ListItemDeleteModal>
</template>
