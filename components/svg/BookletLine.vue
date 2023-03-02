<template>
  <svg width="56" height="6" viewBox="0 0 58 6" fill="red" xmlns="http://www.w3.org/2000/svg">
    <path
      class="line"
      d="M52.3333 3C52.3333 4.47276 53.5272 5.66667 55 5.66667C56.4728 5.66667 57.6667 4.47276 57.6667 3.00001C57.6667 1.52725 56.4728 0.333338 55 0.333338C53.5272 0.333338 52.3333 1.52725 52.3333 3ZM55 2.5L4.37114e-08 2.5L-4.37114e-08 3.5L55 3.5L55 2.5Z"
      fill="white"
    />
  </svg>
</template>

<style scoped lang="scss">
.line {
  width: 56px;
  height: 2px;
  background: #9d9d9d;
  position: relative;
  top: 2px;
}

.line:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: all 1s ease;
  z-index: 100;
}
.el:hover {
  .line:before {
    width: 100%;
  }
}
</style>
