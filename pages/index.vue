<template>
  <div class="container mx-auto px-2 flex flex-col">
    <VDashboardNav />
    <VDashboardHeader />
    <VDashboardBody>
      <VTable />
    </VDashboardBody>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      stocks: [],
    };
  },
  async fetch() {
    this.stocks = await this.$api.$get('/stock/profile2?symbol=AAPL');
  },
  computed: {
    stock() {
      return this.$store.state.stocks;
    },
  },
};
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrapper {
    padding: 20px;
    border-radius: 15px;
    @apply shadow-sm;
  }
}
</style>
