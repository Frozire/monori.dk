<template>
  <div>
    <div x-data="{ open: false }" class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div class="pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <img class="h-8 w-auto sm:h-10" src="/img/logos/workflow-mark-on-white.svg" alt="">
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="open = true">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4">
                <a href="#brands" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Brands</a>
                <a href="#priser" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Priser</a>
                <a href="#faq" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">F.A.Q</a>
              </div>
            </nav>
          </div>

          <div
            id="toppen"
            x-show="open"
            x-transition:enter="duration-150 ease-out"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="duration-100 ease-in"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div class="rounded-lg shadow-md">
              <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="">
                  </div>
                  <div class="-mr-2">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="open = false">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Product</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Features</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Marketplace</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Company</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <div class="mt-12 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
                <h2 class="mt-1 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl">
                  Få adgang til samme <span class="text-purple-600">rådgivning</span> og <span class="text-purple-600">kompetencer</span>
                  som danmarks største brands
                </h2>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Jeg har i flere år hjulpet brands online med sunde, stabile og fremtidsikrede løsninger.
                  Alt fra skræddersyede løsninger med millioner af besøgende til seo-optimerede landing pages.
                </p>
              </div>
            </div>
          </div>
          <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
      </div>
    </div>
    <div class="relative bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-0">
        <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x="118"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
          <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
        </svg>
      </div>
    </div>
    <div id="brands" class="bg-white">
      <div class="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:py-8">
        <logo />
      </div>
    </div>
    <div class="bg-purple-800">
      <div class="pt-12 sm:pt-16 lg:pt-16" id="priser">
        <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto lg:max-w-none">
            <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Priser
            </h2>
            <p class="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Løsninger der passer dine behov
            </p>
            <p class="mt-2 text-xl leading-7 text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div class="relative">
          <div class="absolute inset-0 h-3/4 bg-purple-800" />
          <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
              <div class="rounded-lg shadow-lg overflow-hidden">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-purple-100 text-purple-600">
                      Konsulent Opgave
                    </span>
                  </div>
                  <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    799 DKK
                    <span class="ml-1 text-2xl leading-8 font-medium text-gray-500">
                      /time
                    </span>
                  </div>
                  <p class="mt-2 text-md leading-7 text-gray-500">
                    Inklusiv moms og udregnes per påbegyndt kvarter
                  </p>
                </div>
                <div class="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul>
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-purple-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 text-gray-700">
                        Erfaren og pålidelig rådgivning
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-purple-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 text-gray-700">
                        Sikker og professionel udvikling
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-purple-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 text-gray-700">
                        Løsninger der passer dine behov
                      </p>
                    </li>
                  </ul>
                  <div class="mt-6 rounded-md shadow">
                    <a href="https://facebook.com/monori.dk" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-800 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                      Kontakt Mig
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <span class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-purple-100 text-purple-600">
                      Opstartsmøde
                    </span>
                  </div>
                  <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    Gratis
                  </div>
                  <p class="mt-2 text-md leading-7 text-gray-500">
                    Én time hvor vi sammen ser hinanden an
                  </p>
                </div>
                <div class="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul>
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-purple-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 text-gray-700">
                        Én times uforpligtende møde
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-purple-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 text-gray-700">
                        Præsentation af mine erfaringer
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-purple-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 text-gray-700">
                        Fælles fortventningsafstemning
                      </p>
                    </li>
                  </ul>
                  <div class="mt-6 rounded-md shadow">
                    <a href="https://facebook.com/monori.dk" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-800 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                      Kontakt Mig
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="faq" class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
      <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
        Ofte stillede spørgsmål
      </h2>
      <div class="mt-6 border-t-2 border-gray-100 pt-10">
        <dl class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Hvilke teknologier bruger du?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Jeg vælger altid de teknologier der passer bedst til opgaven. Ofte er det Laravel til
                  skræddersyede løsninger, WordPress hvis der kræves CMS funktionalitet, og NodeJS til services.
                  Det vigtigste er dog altid at vi finder det der passer dit projekts behov.
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Hvorfor skal jeg vælge dig og ikke et bureau?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Bureauer er gode til store opgaver men hvis du har en mindre opgave
                  kan du spare mange penge med den direkte kommunikation du får hos en konsulent.
                  Med mig får du den samme sikre og erfarne rådgivning som nogen af danmarks største brands.
                  Det er din sikkerhed for en professionel og holdbar levering uden forpligtelserne
                  ved et stort bureau.
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Hvilken teknologi skal jeg vælge?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Ingen teknologi passer alle behov, derfor er det vigtigt at vælge
                  den der passer dit behov. Hvadenten det er teknisk, skal passe
                  i et eksisterende setup, eller det skal være let at
                  finde kompetencer til bagefter.
                </p>
              </dd>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Jeg samarbejder med et bureau men savner sparring om deres leverancer?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Det er altid vigtigt at sikre sig at man får hvad man har aftalt og hvad man betaler for.
                  Derfor tilbyder jeg gennemgang af eksisterende kodebaser,
                  leverancer fra bureauer, eller rådgivning ved opstart af nye projekter.
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Hvorfor arbejder du ikke fuldtid som konsulent?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Det er en prioritering. Jeg værdsætter den balance og sikkerhed det giver at have
                  et fast arbejde. De steder jeg er ansat giver mig en masse erfaring og
                  et evigt udfordrende miljø som jeg ikke er klar til at give slip på. Hvis jeg supplere
                  med konsulent opgaver får jeg friheden men beholder sikkerheden fra et fast arbejde.
                </p>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <div class="bg-white">
      <div class="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
          <div class="px-5 py-2">
            <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              Til Toppen
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#brands" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              Brands
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#priser" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              Priser
            </a>
          </div>
          <div class="px-5 py-2">
            <a href="#faq" class="text-base leading-6 text-gray-500 hover:text-gray-900">
              F.A.Q
            </a>
          </div>
        </nav>
        <div class="mt-8 flex justify-center">
          <a href="https://facebook.com/monori.dk" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <div class="mt-8">
          <p class="text-center text-base leading-6 text-gray-400">
            &copy; 2020 Monori - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'

export default {
  components: { Logo }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
