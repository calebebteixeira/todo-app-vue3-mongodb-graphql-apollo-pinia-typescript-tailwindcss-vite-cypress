<script setup lang="ts">
import { onMounted } from 'vue'
import { useTaskStore } from '../stores/tasks'
import { useCategoryStore } from '../stores/categories'
import List from './List.vue'
import ListHeader from './ListHeader.vue'
import ListItemAdd from './ListItemAdd.vue'
import Sidebar from './Sidebar.vue'

const tasks = useTaskStore()
const categories = useCategoryStore()

onMounted(() => {
  tasks.fetchAll()
  categories.fetchAll()
})
</script>

<template>
  <section class="container mx-auto flex flex-wrap px-4">
    <div class="w-full py-6 xl:w-6/8 lg:pr-10 lg:mb-0">
      <!-- uncompleted tasks -->
      <ListHeader>
        <template #title>Let's be productive today?</template>
        <template #description
          >You've got {{ tasks.uncompleted.length }} tasks coming up in the next
          days</template
        >
      </ListHeader>
      <ListItemAdd></ListItemAdd>
      <template v-if="tasks.uncompleted.length">
        <List :tasks="tasks.uncompleted"></List>
      </template>
      <!-- completed tasks -->
      <template v-if="tasks.completed.length">
        <ListHeader>
          <template #title>Completed tasks</template>
          <template #description
            >You completed {{ tasks.completed.length }} tasks</template
          >
        </ListHeader>
        <List :tasks="tasks.completed"></List>
      </template>
    </div>
    <div class="w-full mb-6 xl:w-2/8 lg:py-6 lg:mb-0 sticky">
      <Sidebar></Sidebar>
    </div>
  </section>
</template>
