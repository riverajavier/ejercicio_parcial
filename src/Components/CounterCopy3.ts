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