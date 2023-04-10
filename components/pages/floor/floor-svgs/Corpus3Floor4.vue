<template>
  <div class="plan">
    <svg
      viewBox="0 0 901 182"
      fill="none"
      version="1.1"
      id="svg1026"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="c3f4">
        <g id="18" class="flat-group">
          <g
            style="fill: none"
            id="g1165"
            transform="translate(18.806368,24.497149)"
            class="flat-mask"
          >
            <path
              d="M 238,33 V 1 0 h -9.5 V 3 H 203 V 0 H 169 V 3 H 151 V 0 H 120 V 3 H 109 V 0 H 0 V 81.5 H 3 V 90 H 0 v 50 H 166.5 V 33 Z"
              fill="#e6c5a5"
              id="path1156"
            />
          </g>
          <text
            xml:space="preserve"
            style="font-size: 32px; fill: #000000"
            x="75.408272"
            y="122.78014"
            id="text1207"
          >
            <tspan id="tspan1205" x="85" y="122">18</tspan>
          </text>
        </g>
        <g id="19" class="flat-group">
          <g
            style="fill: none"
            id="g1184"
            transform="translate(510.39303,60.454097)"
            class="flat-mask"
          >
            <path
              d="M 214.5,104 V 1.5 L 0,0 V 19 H 4 V 46.5 H 0 V 104 Z"
              fill="#e6c5a5"
              id="path1175"
            />
          </g>
          <text
            xml:space="preserve"
            style="font-size: 32px; fill: #000000"
            x="597.46552"
            y="128.58078"
            id="text1211"
          >
            <tspan id="tspan1209" x="610" y="122">19</tspan>
          </text>
        </g>
        <g id="20" class="flat-group">
          <g style="fill: none" id="g1203" transform="matrix(1,0,0,1.0136227,655.45561,24.312979)">
            <path
              class="flat-mask"
              d="M 25.054,0 H 0 V 31.7698 H 73.6587 V 138 H 232 V 0 H 163.352 V 3.97122 H 145.313 V 0 H 101.719 V 3.97122 H 82.6782 V 0 H 49.1058 V 3.97122 H 25.054 Z"
              fill="#e6c5a5"
              id="path1194"
            />
          </g>
          <text
            xml:space="preserve"
            style="font-size: 32px; fill: #000000"
            x="787.91974"
            y="123.74691"
            id="text1215"
          >
            <tspan id="tspan1213" x="787.91974" y="122">20</tspan>
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.plan {
  background-image: url('/img/components/plan/c3f4.svg');
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
