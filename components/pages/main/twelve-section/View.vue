<template>
  <div class="w-full h-[100vh] flex bg-bg relative">
    <div class="lg:w-[70%] w-full h-full bg-[#483738] md:pt-0 pt-10">
      <div class="px-[10%] py-[10%] flex flex-col justify-around h-full">
        <div>
          <UIText tag="h1" class="font-trajan text-[white] text-[calc(1vh+1vw*1.8)]">
            Узнайте <br />
            больше
          </UIText>

          <div class="flex md:flex-row flex-col justify-between">
            <UIText tag="p" class="font-trajan text-[white] text-[12px]">
              Закажите обратный звонок, и <br />
              персональный менеджер свяжется с вами, <br />
              чтобы рассказать детали.
            </UIText>

            <UIText tag="p" class="font-trajan text-[white] text-[12px] mr-[50px]">
              Офис продаж: <br />
              Ежедневно 9:00 – 21:00
              <br />
              <span class="text-[calc(1vh+1vw*0.4)]">+7 (983) 123-12-12</span>
            </UIText>
          </div>
        </div>

        <PagesMainTwelveSectionForm />

        <div class="flex justify-between">
          <SharedAddressBadge class="lg:flex hidden" />
          <PagesMainTwelveSectionLinks />
        </div>
      </div>
    </div>
    <div
      @mouseenter="show"
      @mouseleave="hide"
      class="w-[30%] h-full bg-[#E3BC98] overflow-hidden lg:inline hidden"
    >
      <img
        id="footerImg"
        alt="img"
        src="/img/background/footer-img.png"
        style="width: 100%; height: 100%; object-fit: cover; position: relative; left: -50vw"
        class="z-[80]"
      />

      <LayoutsHeaderBooklet
        @click="scrollTo('#section-wrapper-1')"
        class="relative z-[90] bottom-[5vh] left-[30px]"
      >
        вернуться к началу
      </LayoutsHeaderBooklet>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import Tween = gsap.core.Tween;
import { scrollTo } from '~/helpers/methods/scroll-to.method';

const animation: Ref<null | Tween> = ref(null);

const show = () => {
  animation.value = gsap.to('#footerImg', { x: '+50vw', y: 0, duration: 0.5 });

  animation.value.play();
};

const hide = () => {
  animation.value = gsap.to('#footerImg', { x: 0, y: 0, duration: 0.5 });

  animation.value.play();
};
</script>
