<!--             CODIGO OIGINAL               -->
-------------------------------------------------
<!--<template>
    <h1>Hola Mundo </h1>
    <h3>Contador: {{ Contador }}</h3>
    <h3>cuadro: {{ Contador*Contador }}</h3>

    <div>
        <button @click="suma"><p id="sum">+1</p></button>
        <button @click="resta"><p>-1</p></button>
    </div>
</template>
<script lang="ts" setup>

/*const props = defineProps({
    
    value : {type:Number, required:true}
})*/

const props = defineProps<{
    value: number;
}>();

const Contador = ref(props.value);

    const suma = () =>{
        Contador.value++;
    }
    const resta = () =>{
        Contador.value--;
    }

    import { ref } from "vue";  
    console.log("Hola mundo");   
</script> -->
-------------------------------------------------
<!--             SIN ESTLOS                  -->
-------------------------------------------------
<!--<template>
    <h1>Hola Mundo</h1>
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
  -------------------------------------------------
  <!--             CON ESTILOS                  -->
-------------------------------------------------
<template>
    <div class="p-4 text-center bg-yellow-400">
      <h1 class="mb-4 text-2xl font-bold">Hola Mundo</h1>
      <h3 class="text-lg font-medium">Contador: <span class="font-semibold">{{ contador }}</span></h3>
      <h3 class="text-lg font-medium">Cuadrado: <span class="font-semibold">{{ contador * contador }}</span></h3>
  
      <div class="mt-6 space-x-4">
        <button @click="suma"
          class="px-4 py-2 font-semibold text-white transition bg-green-500 rounded-lg shadow-md hover:bg-blue-700">SUMAR +1</button>
  
        <button @click="resta"
          class="px-4 py-2 font-semibold text-white transition bg-gray-900 rounded-lg shadow-md hover:bg-red-700">RESTAR -1</button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useCounter } from "../composables/useCounter";
  const props = defineProps<{ value: number }>();
  
  const { contador, suma, resta } = useCounter(props.value);
  </script>
  