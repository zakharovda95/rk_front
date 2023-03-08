<template>
  <img class="scroll" src="/img/components/scroll.svg" alt="scroll" />
</template>

<style scoped lang="scss">
.scroll {
  animation: anim 3s infinite ease;
}

@keyframes anim {
  0% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-10%);
  }
}
</style>
