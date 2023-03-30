<template>
  <button type="button" @click="click" :class="{ active: isActive }" />
</template>

<script setup lang="ts">
const emit = defineEmits(['custom:radio-click']);

const isActive = ref(false);

const click = (): void => {
  isActive.value = !isActive.value;
  emit('custom:radio-click', isActive.value);
};
</script>

<style scoped lang="scss">
button {
  padding: 10px;
  min-width: 60px;
  min-height: 30px;
  background: #decec0;
  border: 1px solid lightgray;
  border-radius: 16px;
  position: relative;
}

button::before {
  width: 16px;
  height: 16px;
  background: white;
  border: 1px solid lightgray;
  content: '';
  position: absolute;
  border-radius: 8px;
  top: 6px;
  left: 7px;
  transition: 0.5s;
}

button.active {
  background: #d5cbcb;
  transition: 0.1s ease;
}

button.active::before {
  transform: translateX(30px);
}

button:disabled,
button[disabled] {
  cursor: not-allowed;
  background: #dad8d8;
  opacity: 0.2;
}
</style>
