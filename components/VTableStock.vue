<template>
  <div class="grid grid-cols-6 gap-x-4 p-2 border-b border-gray-400">
    <div class="flex items-center col-span-2">
      <div class="flex-shrink-0 mr-4">
        <nuxt-link
          to="#"
          class="inline-block rounded-lg text-white bg-black text-xs font-bold px-3 py-1"
        >
          TSLA
        </nuxt-link>
      </div>
      <div class="text-base">Tesla</div>
    </div>
    <div class="flex items-center">
      <div class="text-lg font-bold">$320</div>
    </div>
    <div class="flex items-center">
      <div
        class="text-lg font-bold"
        :class="{ 'text-green-600': true, 'text-red-500': false }"
      >
        $320
      </div>
    </div>
    <div>
      <div
        class="rounded-lg inline-flex px-4 py-2"
        :class="{ 'text-red-500 bg-red-100': true }"
      >
        <svg
          class="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <div class="text-small font-bold text-current">15%</div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <svg
        class="text-red-600 w-8 h-8 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        @click="removeStock"
      >
        <path
          fill-rule="evenodd"
          d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VTableStock',
  methods: {
    removeStock(e) {
      return e;
    },
  },
};
</script>
