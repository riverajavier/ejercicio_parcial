<!--             CODIGO ORIGINAL                  -->
<!--<template>
    <h1>Hola mundo counter copy</h1>
    <h3>Contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ contador*contador }}</h3>

    <div>
        <button @click = "contador++">+1</button>
        <button @click = "contador--">-1</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    props:{
        value:{type: Number, require:true}
    },
    setup(){
        const contador = ref(5);
        return {contador: contador}
    },
})
</script> -->
---------------------------------------------------
<!--               SIN ESTILOS                  -->
---------------------------------------------------
<!-- <template>
  <h1>Hola Mundo counter copy</h1>
  <h3>Contador: {{ contador }}</h3>
  <h3>Cuadrado: {{ contador * contador }}</h3>

  <div>
    <button @click="suma">+1</button>
    <button @click="resta">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from "../composables/useCounter";
const props = defineProps<{ value: number }>();

const { contador, suma, resta } = useCounter(props.value);
</script>  -->
---------------------------------------------------
<!--              CON ESTLOS                   --> 
---------------------------------------------------
<template>
    <div class="text-center bg-blue-400">
      <h1 class="mb-4 text-2xl font-bold">Hola Mundo counter copy 2</h1>
      <h3 class="text-lg font-medium">Contador: <span class="font-semibold">{{ contador }}</span></h3>
      <h3 class="text-lg font-medium">Cuadrado: <span class="font-semibold">{{ contador * contador }}</span></h3>
  
      <div class="mt-6 space-x-4">
        <button @click="suma"
          class="px-4 py-2 font-semibold text-white transition bg-green-500 rounded-lg shadow-md hover:bg-blue-700">SUMAR +1</button>
  
        <button @click="resta"
          class="px-4 py-2 font-semibold text-white transition bg-gray-900 rounded-lg shadow-md hover:bg-red-700">RESATR -1</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCounter } from "../composables/useCounter";
  const props = defineProps<{ value: number }>();
  
  const { contador, suma, resta } = useCounter(props.value);
  </script>
  
