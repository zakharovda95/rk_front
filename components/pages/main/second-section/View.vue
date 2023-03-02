<template>
  <div>
    <div class="w-full h-[100vh] flex flex-col relative z-[0]">
      <div
        class="text w-full max-w-[1399px] flex flex-col items-start justify-end relative bottom-[50px] mt-2"
        style="margin: 0 auto"
        :style="textSize"
        :class="{ 'start-anim': isSectionEnd }"
        v-if="!isHideCommonElements"
      >
        <UIText tag="h1" class="font-trajan text-[white] text-[46px] mb-2">Клубный проект</UIText>
        <UIText tag="h2" class="font-trajan text-[white] text-[26px]">
          12 коллекционных резиденций,
          <br />
          включая 4 двухуровневых апартамента
        </UIText>
      </div>

      <div ref="section2img" :style="imgSizes" class="img relative z-[20]" />
    </div>
    <div id="view-2-end">
      <UIObserver
        target="#view-2-end"
        toggle-observe
        @custom:cross-section="isSectionEnd = $event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from '@vue/runtime-core';
import { useCommonStore } from '~/store/common.store';

const props = defineProps({
  addressBlockSizes: {
    type: Object as PropType<{ w: number; h: number } | null>,
    required: true,
  },
});

const emits = defineEmits(['custom:show-3-section']);

const commonStore = useCommonStore();

const section2img: Ref<HTMLBodyElement | null> = ref(null);
const scrollBarWidth: Ref<number> = ref(0);
const isSectionEnd: Ref<boolean> = ref(false);
const isHideCommonElements: Ref<boolean> = ref(false);
const isStartZoomingIn: Ref<boolean> = ref(false);

onMounted(() => {
  const clientWidth: number = document.body.clientWidth;
  const innerWidth: number = window.innerWidth;

  scrollBarWidth.value = innerWidth - clientWidth;
});

const imgSizes: Ref<{ width: string | null; height: string | null } | null> = computed(() => {
  if (props.addressBlockSizes) {
    return {
      width: imgWidth.value,
      height: imgHeight.value,
    };
  }
  return null;
});

const imgWidth: Ref<string | null> = computed(() => {
  if (props.addressBlockSizes) {
    return `calc(100vw - ${scrollBarWidth.value + props.addressBlockSizes.w}px)`;
  } else {
    return null;
  }
});

const imgHeight: Ref<string | null> = computed(() => {
  if (props.addressBlockSizes) {
    return `${props.addressBlockSizes.h}px`;
  } else {
    return null;
  }
});

const textSize: Ref<{ height: string } | null> = computed(() => {
  if (props.addressBlockSizes) {
    return {
      height: `calc(100vh - ${props.addressBlockSizes.h}px)`,
    };
  }
  return null;
});

watch(
  isSectionEnd,
  () => {
    if (isSectionEnd.value) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.addEventListener('wheel', handler);
      }, 1000);
    } else {
      isHideCommonElements.value = false;
      commonStore.isHideCommonElements = isHideCommonElements.value;

      setTimeout(() => {
        document.removeEventListener('wheel', handler);
      }, 1000);
    }
  },
  { deep: true },
);

watch(
  isStartZoomingIn,
  () => {
    if (!isStartZoomingIn.value) {
      setTimeout(() => {
        document.body.style.overflow = 'visible';
        emits('custom:show-3-section', true);
      }, 1000);
    } else {
    }
  },
  { deep: true },
);

const handler = (ev: WheelEvent) => {
  const delta: number = ev.deltaY || ev.detail || ev.wheelDelta;

  if (delta > 0) {
    setAnimation('down');
  }
  if (delta < 0) {
    document.body.style.overflow = 'hidden';
    setAnimation('up');
  }
};

const setAnimation = (direction: string): void => {
  isStartZoomingIn.value = true;

  if (direction === 'down') {
    isHideCommonElements.value = true;

    if (section2img.value) {
      section2img.value.classList.remove('start-anim-3');
      section2img.value.classList.add('start-anim-2');
    }

    setTimeout(() => {
      isStartZoomingIn.value = false;
    }, 2000);
  } else {
    isHideCommonElements.value = false;

    if (section2img.value) {
      section2img.value.classList.remove('start-anim-2');
      section2img.value.classList.add('start-anim-3');
    }

    setTimeout(() => {
      isStartZoomingIn.value = false;
    }, 3000);
  }

  commonStore.isHideCommonElements = isHideCommonElements.value;
};
</script>

<style scoped lang="scss">
.img {
  width: 100%;
  height: 100%;
  background-image: url('/img/images/section-2-img.png');
  background-position: center;
  background-size: cover;
}

.start-anim-2 {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: anim2 1s forwards;
  background-attachment: fixed;
}

.start-anim-3 {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: anim3 2s forwards;
  background-attachment: scroll;
}

.text {
  opacity: 0;
  transition: 1s;
}
.start-anim {
  animation: anim 1s ease;
  opacity: 1;
  transition: 1s;
}

@keyframes anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes anim2 {
  0% {
  }
  100% {
    width: 100vw;
    height: 100vh;
  }
}

@keyframes anim3 {
  0% {
    width: 100vw;
    height: 100vh;
  }
  100% {
    width: v-bind(imgWidth);
    height: v-bind(imgHeight);
  }
}
</style>
