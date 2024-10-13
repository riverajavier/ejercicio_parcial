import { ref } from "vue";

export function useCounter(initialValue: number) {
  const contador = ref(initialValue);

  const suma = () => {
    contador.value++;
  };

  const resta = () => {
    contador.value--;
  };

  return {
    contador,
    suma,
    resta,
  };
}
