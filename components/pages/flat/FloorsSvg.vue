<template>
  <svg
    width="95"
    height="91"
    viewBox="0 0 95 91"
    fill="none"
    version="1.1"
    id="svg52"
    sodipodi:docname="floors.svg"
    inkscape:version="1.2.2 (732a01da63, 2022-12-09)"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <defs id="defs56" />
    <sodipodi:namedview
      id="namedview54"
      pagecolor="#ffffff"
      bordercolor="#000000"
      borderopacity="0.25"
      inkscape:showpageshadow="2"
      inkscape:pageopacity="0.0"
      inkscape:pagecheckerboard="0"
      inkscape:deskcolor="#d1d1d1"
      showgrid="false"
      inkscape:lockguides="false"
      inkscape:zoom="9.3956044"
      inkscape:cx="61.997076"
      inkscape:cy="67.691228"
      inkscape:window-width="1920"
      inkscape:window-height="1009"
      inkscape:window-x="-8"
      inkscape:window-y="-8"
      inkscape:window-maximized="1"
      inkscape:current-layer="svg52"
    />
    <rect
      x="6.5"
      y="66.5"
      width="82"
      height="24"
      rx="1.5"
      stroke="#8F6C51"
      id="floor-1"
      :fill="currentFloor === '1' ? '#E3BC98' : 'none'"
    >
      <ellipse
        style="fill: #ffffff; fill-opacity: 1"
        id="path2134"
        cx="102.92047"
        cy="76.418709"
        rx="4.4701753"
        ry="4.3637428"
      />
    </rect>
    <rect
      x="6.5"
      y="52.5"
      width="82"
      height="10"
      rx="1.5"
      stroke="#8F6C51"
      id="floor-2"
      :fill="currentFloor === '2' ? '#E3BC98' : 'none'"
    />
    <rect
      x="6.5"
      y="38.5"
      width="82"
      height="10"
      rx="1.5"
      stroke="#8F6C51"
      id="floor-3"
      :fill="currentFloor === '3' ? '#E3BC98' : 'none'"
    />
    <rect
      x="6.5"
      y="24.5"
      width="82"
      height="10"
      rx="1.5"
      :fill="currentFloor === '4' ? '#E3BC98' : 'none'"
      stroke="#8F6C51"
      id="floor-4"
    />
    <rect
      x="6.5"
      y="10.5"
      width="82"
      height="10"
      rx="1.5"
      stroke="#8F6C51"
      id="floor-5"
      :fill="currentFloor === '5' ? '#E3BC98' : 'none'"
    />
    <rect x="0.5" y="0.5" width="94" height="6" rx="1.5" stroke="#8F6C51" id="rect40" />
    <rect x="3.5" y="62.5" width="87" height="4" rx="1.5" stroke="#8F6C51" id="rect42" />
    <rect x="3.5" y="48.5" width="87" height="4" rx="1.5" stroke="#8F6C51" id="rect44" />
    <rect x="3.5" y="34.5" width="87" height="4" rx="1.5" stroke="#8F6C51" id="rect46" />
    <rect x="3.5" y="20.5" width="87" height="4" rx="1.5" stroke="#8F6C51" id="rect48" />
    <rect x="3.5" y="6.5" width="87" height="4" rx="1.5" stroke="#8F6C51" id="rect50" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  currentFloor: {
    type: String,
    required: true,
  },
});
</script>
