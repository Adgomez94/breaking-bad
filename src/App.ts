import { defineComponent, ref } from 'vue';
export default defineComponent({
 setup() {
  const counter = ref(0)

  return {
    counter
  }
 }
});