<template>
  <div class="flex flex-wrap mb-8 md:mb-10 w-full">
    <div class="lg:w-1/2 w-full">
      <p class="sm:text-3xl text-2xl font-medium mb-2">
        <slot name="title"></slot>
      </p>
      <div class="h-1 w-20 bg-brand-primary rounded"></div>
    </div>
    <p
      class="lg:w-1/2 w-full leading-relaxed mt-3 lg:text-right lg:mt-0 dark:color-gray-400"
    >
      <slot name="description"></slot>
    </p>
  </div>
</template>
