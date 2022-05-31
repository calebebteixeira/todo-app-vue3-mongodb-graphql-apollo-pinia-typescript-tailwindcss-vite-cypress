<script setup lang="ts">
import {
  convertToSingleLine,
  canSaveTask,
  getWords,
  randomInt
} from '../composables/utils'
import { format, addDays } from 'date-fns'
import { sample } from 'lodash'
import { computed, watch, ref } from 'vue'
import { useTaskStore } from '../stores/tasks'
import { useCategoryStore } from '../stores/categories'

const tasks = useTaskStore()
const categories = useCategoryStore()
const date = ref(format(new Date(), 'yyyy-MM-dd'))
const category = ref(null)
const title = ref('')
const description = ref('')
const canCreateTask = computed(() => canSaveTask(title.value, category.value))

function createFakeTask() {
  title.value = getWords(4, 7)
  description.value = getWords(10, 17)
  date.value = format(addDays(new Date(), randomInt(0, 5)), 'yyyy-MM-dd')
  category.value = sample(categories.items).id
}

function createTask() {
  if (canCreateTask.value) {
    tasks.create({
      title: title.value,
      description: description.value,
      date: date.value,
      completed: false,
      categoryId: category.value
    })
    title.value = ''
    description.value = ''
  }
}

watch(
  () => categories.items,
  () => {
    if (category.value === null) {
      category.value = categories.items[0].id
    }
  }
)
</script>

<template>
  <div
    class="flex p-8 rounded flex-wrap md:mb-8 md:flex-nowrap hover:opacity-100 bg-gray-100 dark:bg-gray-800"
  >
    <div class="flex-grow">
      <div class="relative flex-auto">
        <div class="flex items-center align-center -mt-2">
          <!-- COMPLETED -->
          <label class="form-control pointer-events-none">
            <input type="checkbox" class="mr-3" />
          </label>
          <!-- TITLE -->
          <p
            data-test="add-new-task-title"
            contenteditable="true"
            @keyup.enter="createTask"
            @input="({ target }) => { title = convertToSingleLine((target as HTMLHtmlElement).textContent) }"
            placeholder="Enter new task title..."
            class="flex grow outline-none cursor-text text-2xl font-medium title-font empty:before:content-[attr(placeholder)]"
          >
            {{ convertToSingleLine(title) }}
          </p>
        </div>
        <!-- DESCRIPTION -->
        <p
          data-test="add-new-task-description"
          contenteditable="true"
          @keyup.enter="createTask"
          @input="({ target }) => { description = convertToSingleLine((target as HTMLHtmlElement).textContent) }"
          placeholder="Enter new task description..."
          class="flex grow outline-none cursor-text leading-relaxed mt-2 empty:before:content-[attr(placeholder)]"
        >
          {{ convertToSingleLine(description) }}
        </p>
        <div class="flex justify-between flex-row flex-wrap mt-8">
          <span class="inline-flex">
            <!-- CATEGORY -->
            <label class="inline-flex mr-3">
              <select
                data-test="add-new-task-category"
                class="block text-sm outline-none bg-white dark:bg-gray-600 py-1 px-2 rounded w-40"
                v-model="category"
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
                data-test="add-new-task-date"
                type="date"
                v-model="date"
                class="block text-sm outline-none bg-white dark:bg-gray-600 py-1 px-2 rounded w-40"
              />
            </label>
          </span>

          <span class="inline-flex w-full mt-8 sm:mt-0 sm:w-auto">
            <!-- CREATE FAKE TASK -->
            <a
              href="#"
              @click.prevent="createFakeTask"
              class="text-sm bg-gray-900 text-white py-1 dark:bg-white dark:text-gray-900 px-3 rounded inline-flex items-center"
              >Fake task</a
            >
            <!-- CREATE TASK -->
            <a
              data-test="add-new-task-button"
              href="#"
              @click.prevent="createTask"
              class="text-sm bg-brand-primary text-white py-1 px-3 ml-3 rounded inline-flex items-center"
              :class="
                canCreateTask
                  ? ''
                  : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
              "
              >Create task</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
