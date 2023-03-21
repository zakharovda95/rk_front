<template>
  <div class="menu fixed w-full h-[100vh] overflow-hidden z-[900]">
    <SharedBackground class="absolute z-[80]" />
    <LayoutsMenuSidebar class="sidebar" />

    <div class="max-w-[1399px] relative z-[90] p-5" style="margin: 0 auto">
      <div>
        <UIText
          class="font-helvetica text-[white] lg:text-[1.1rem] md:visible lg:hidden absolute top-[85vh]"
        >
          +7&nbsp;812&nbsp;242&nbsp;52&nbsp;10
        </UIText>
      </div>

      <LayoutsMenuPhoneBadge
        class="phone-badge absolute left-[30vw] top-[90vh] z-[95] md:hidden lg:block"
      />
      <SharedAddressBadge class="address-badge absolute top-[90vh] z-[95]" />
      <LayoutsMenuLinks class="links absolute top-[32vh]" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  animation: anim 0.5s forwards;
}

.phone-badge {
  animation: anim2 0.5s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.address-badge {
  animation: anim2 0.5s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.links {
  animation: anim2 0.5s forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

@keyframes anim {
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes anim2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
