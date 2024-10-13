<template>
    <div class="min-h-screen p-8 bg-gray-400">
      <h1 class="mb-8 text-4xl font-extrabold text-center">Hola Developers</h1>
  
      <div class="space-y-8">
        <div class="p-6 bg-white rounded-lg shadow">
          <Counter :value="5" />
        </div>
  
        <div class="p-6 bg-white rounded-lg shadow">
          <CounterCopy :value="10" />
        </div>
  
        <div class="p-6 bg-white rounded-lg shadow">
          <CounterCopy3 :value="15" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import Counter from './Components/Counter.vue';
  import CounterCopy from './Components/CounterCopy.vue';
  import CounterCopy3 from './Components/CounterCopy3.vue';
  </script>
  