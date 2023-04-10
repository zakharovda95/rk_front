<template>
  <div class="plan">
    <svg
      viewBox="0 0 905 182"
      fill="none"
      version="1.1"
      id="svg316"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="c3f2">
        <g id="9" class="flat-group">
          <g
            style="fill: none"
            id="g455"
            transform="translate(182.06791,62.423366)"
            class="flat-mask"
          >
            <path d="M 223,0 H 0 V 99 H 223 V 86 h 7.5 V 61 H 223 Z" fill="#e6c5a5" id="path446" />
          </g>
          <text
            xml:space="preserve"
            style="font-size: 32px; fill: #000000"
            x="280.6377"
            y="124.29629"
            id="text584"
          >
            <tspan id="tspan582" x="280.6377" y="124.29629">9</tspan>
          </text>
        </g>
        <g id="11" class="flat-group">
          <g
            style="fill: none"
            id="g528"
            transform="translate(506.41628,61.229487)"
            class="flat-mask"
          >
            <path
              d="M 217,0 H 5.5 V 61 H 0 v 28 h 5.5 v 11.5 H 217 Z"
              fill="#e6c5a5"
              id="path519"
            />
          </g>
          <text
            xml:space="preserve"
            style="font-size: 32px; fill: #000000"
            x="598.80188"
            y="122.83968"
            id="text638"
          >
            <tspan id="tspan636" x="610" y="122.83968">11</tspan>
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.plan {
  background-image: url('/img/components/plan/c3f2.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.flat-mask {
  opacity: 0;
}

tspan {
  fill: #e3bc98 !important;
  font-family: Trajan, sans-serif;
  font-size: 1.3rem;
}
.flat-group:hover {
  cursor: pointer;
  .flat-mask {
    opacity: 1;
    transition: 0.2s;
  }

  tspan {
    fill: #252120 !important;
  }
}
</style>
