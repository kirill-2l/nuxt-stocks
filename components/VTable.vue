<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div
      class="grid grid-cols-6 gap-x-4 px-2 py-4 bg-gray-300 rounded-lg rounded-b-none"
    >
      <div class="col-span-2 flex items-center">
        <div class="text-sm font-bold">Name</div>
      </div>
      <div class="flex items-center">
        <div class="text-sm font-bold">Price</div>
      </div>
    </div>
    <div class="border-l border-r border-gray-400">
      <VTableStock />
      <VTableStock />
      <VTableStock />
    </div>

    <!-- More items... -->
  </div>
</template>

<script>
export default {
  name: 'Vtable',
};
</script>
