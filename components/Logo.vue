<template>
  <div>
    <div class="mt-6 grid lg:mt-8 grid-cols-3 gap-5 lg:gap-20 md:grid-cols-6 lg:grid-cols-6 fill-current text-gray-400">
      <bobedre class="col-span-1 flex justify-center" />
      <aller class="col-span-1 flex justify-center" />
      <bilmagasinet class="col-span-1 flex justify-center" />
      <familiejournal class="col-span-1 flex justify-center" />
      <woman class="col-span-1 flex justify-center" />
      <femina class="col-span-1 flex justify-center" />
    </div>
    <div class="mt-6 grid lg:mt-8 grid-cols-3 gap-5 lg:gap-20 md:grid-cols-6 lg:grid-cols-6 fill-current text-gray-400">
      <nationalgeo class="col-span-1 flex justify-center" />
      <iform class="col-span-1 flex justify-center" />
      <bonnier class="col-span-1 flex justify-center" />
      <illvid class="col-span-1 flex justify-center" />
      <idenyt class="col-span-1 flex justify-center" />
      <seoghoer class="col-span-1 flex justify-center" />
    </div>
  </div>
</template>

<script>
import bilmagasinet from './logos/bilmagasinet'
import aller from './logos/aller'
import bobedre from './logos/bobedre'
import woman from './logos/woman'
import nationalgeo from './logos/nationalgeo'
import iform from './logos/iform'
import bonnier from './logos/bonnier'
import illvid from './logos/illvid'
import idenyt from './logos/idenyt'
import seoghoer from './logos/seoghoer'
import femina from './logos/femina'
import Familiejournal from './logos/familiejournal'

export default {
  components: {
    Familiejournal,
    bilmagasinet,
    femina,
    seoghoer,
    aller,
    illvid,
    idenyt,
    bobedre,
    woman,
    nationalgeo,
    iform,
    bonnier
  },
  data: () => ({
    bmhover: false
  })
}
</script>
<style>
</style>
