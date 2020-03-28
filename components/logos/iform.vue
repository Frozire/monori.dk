<template>
  <baselogo class="hover:text-purple-900" @mouseover.native="hover = true" @mouseleave.native="hover = false">
    <svg viewBox="0 0 136.54 34.12" class="h-24">
      <polygon points="0 1.56 6.19 0.88 6.19 8.19 0 8.81 0 1.56" />
      <polygon points="0 11.5 6.19 10.81 6.19 33.19 0 33.75 0 11.5" />
      <path
        d="M249.26,210.88h16.51l1.36,5.94H255.43v7.31h8.65v5.94h-8.65v12.87l-6.18.75V210.88Z"
        transform="translate(-232.88 -210.13)"
      />
      <path
        d="M316.42,216.81h2.39c3.05,0,5.87.42,5.87,4.1s-3,4.47-6,4.47h-2.25v-8.56Zm-6.18,26.5,6.18-.37V226.87h0.09l10.93,16.81,6.74-1.64-8.75-12.93a8.63,8.63,0,0,0,6.18-8.4c0-6.86-4.87-9.85-11.06-9.85H310.24v32.44Z"
        transform="translate(-232.88 -210.13)"
      />
      <path
        d="M336.29,242.94l6-32.81h0.09l10.42,21.5,10.42-21.5h0.09l6.12,32.81-6.07.75-2.57-16.31h-0.09l-7.85,16.31h-0.09l-8-16.31h-0.09l-2.43,16.31Z"
        transform="translate(-232.88 -210.13)"
      />
      <ellipse
        v-show="!hover"
        cx="287"
        cy="227.27"
        rx="17.83"
        ry="12.38"
        transform="translate(-301.17 -71.1) rotate(-24.43)"
        class="cls-3"
      />
      <ellipse
        v-show="hover"
        cx="287"
        cy="227.27"
        rx="17.83"
        ry="12.38"
        transform="translate(-301.17 -71.1) rotate(-24.43)"
        class="cls-2"
      />
    </svg>
  </baselogo>
</template>

<script>
import baselogo from './baselogo'

export default {
  name: 'Iform',
  components: { baselogo },
  data: () => ({
    hover: false
  })
}
</script>

<style scoped>
 .cls-2{fill:none;stroke:#4a1d96;stroke-miterlimit:1;stroke-width:7px;}
 .cls-3{fill:none;stroke:#9fa6b2;stroke-miterlimit:1;stroke-width:7px;}
</style>
