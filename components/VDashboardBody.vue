<template>
  <main>
    <div class="py-6">
      <VSearch class="mb-2" />
      <slot />
    </div>
  </main>
</template>
<script>
export default {
  name: 'VDashboardBody',
};
</script>
