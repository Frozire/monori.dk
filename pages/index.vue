<template>
  <div>
    <nav class="bg-white shadow-sm fixed w-full z-30 top-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-around md:justify-start h-16">
          <a
            href="#"
            class="md:ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-purple-700 hover:border-purple-300 transition duration-150 ease-in-out"
          >
            Til Toppen
          </a>
          <a
            href="#brands"
            class="md:ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-purple-700 hover:border-purple-300 transition duration-150 ease-in-out"
          >
            Brands
          </a>
          <a
            href="#priser"
            class="md:ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-purple-700 hover:border-purple-300 transition duration-150 ease-in-out"
          >
            Priser
          </a>
          <a
            href="#faq"
            class="md:ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-purple-700 hover:border-purple-300 transition duration-150 ease-in-out"
          >
            F.A.Q
          </a>
        </div>
      </div>
    </nav>

    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div class="relative flex z-20 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div
            class="mt-10 justify-between mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <div class="mt-12 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
                <h2
                  class="mt-1 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-4xl xl:text-5xl"
                >
                  Få adgang til samme <span class="text-purple-600">rådgivning</span> og <span class="text-purple-600">kompetencer</span>
                  som danmarks største brands
                </h2>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Med over 10 års Laravel-erfaring har jeg leveret mange stabile og fremtidssikrede løsninger til diverse brands,
                  fra skræddersyede platforme med millioner af brugere til simple SEO-optimerede landingssider.
                </p>
              </div>
            </div>
          </div>
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-72 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt=""
        >
      </div>
    </div>
    <div class="relative bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-0">
        <svg
          class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width="640"
          height="784"
          fill="none"
          viewBox="0 0 640 784"
        >
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
    <div id="ommig" class="relative bg-white overflow-hidden">
      <div x-data="{ open: false }" class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <div class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="text-center lg:max-w-2xl lg:mx-auto lg:col-span-6 lg:text-left">
              <div class="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base md:text-sm">
                Hvem er jeg?
              </div>
              <h2 class="mt-1 text-3xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-4xl xl:text-5xl">
                Nicklas Kevin Frank
              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Jeg arbejder til dagligt som webudvikler hos Aller Media A/S, hvor jeg
                hjælper deres mange brands med at etablere en digital tilstedeværelse.
                <br><br>
                De mange brands giver en varieret arbejdsdag, der bidrager til en bred erfaring
                med forskellige behov og løsninger. En type opgaver jeg også har været vant til
                fra mit forrige arbejde hos Bonnier Publications.
                <br><br>
                Flere års arbejde i virksomheder med mange forskellige brands
                og udvikling af løsninger dertil har givet mig de erfaringer, som jeg her
                ønsker at stille til rådighed for dig.
              </p>
            </div>
            <div class="mt-12 relative sm:max-w-xs sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <a
                href="https://linkedin.com/in/nkfrank"
                target="_blank"
                class="mx-auto w-64 rounded-lg shadow-lg md:w-64 lg:w-96 lg:max-w-md block rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
              >
                <img class="w-full" src="/nicklasfrank.jpg" alt="Nicklas Kevin Frank - Laravel Konsulent">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-purple-800">
      <div id="priser" class="pt-12 sm:pt-16 lg:pt-16">
        <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto lg:max-w-none">
            <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Priser
            </h2>
            <p
              class="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none"
            >
              Løsninger der passer til dine behov
            </p>
          </div>
        </div>
      </div>
      <div class="mt-8 pb-8 bg-white sm:mt-12 lg:mt-16">
        <div class="relative">
          <div class="absolute inset-0 h-3/4 bg-purple-800" />
          <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
              <div class="rounded-lg shadow-lg overflow-hidden">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <span
                      class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-purple-100 text-purple-600"
                    >
                      Konsulentopgave
                    </span>
                  </div>
                  <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    899 DKK
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
                        Løsninger der passer til dine behov
                      </p>
                    </li>
                  </ul>
                  <div class="mt-6 rounded-md shadow">
                    <a
                      href="https://facebook.com/monori.dk"
                      class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-800 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Kontakt mig
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <span
                      class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-purple-100 text-purple-600"
                    >
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
                    <a
                      href="https://facebook.com/monori.dk"
                      class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-800 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Kontakt mig
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
                  Jeg vælger altid de teknologier, der passer bedst til opgaven. Ofte er det Laravel til
                  skræddersyede løsninger, WordPress hvis der kræves CMS funktionalitet, og NodeJS til services.
                  Det vigtigste er dog altid, at vi finder det, der passer til dit projekts behov.
                </p>
              </dd>
            </div>
            <div class="mt-12">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Hvorfor skal jeg vælge dig og ikke et bureau?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Bureauer er gode til store opgaver, men hvis du har en mindre opgave,
                  kan du spare mange penge med den direkte kommunikation, du får hos en konsulent.
                  Med mig får du den samme sikre og erfarne rådgivning som nogle af Danmarks største brands.
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
                  Der er ingen teknologi der passer til alle behov,
                  og det er derfor vigtigt at man finder frem til den som passer dig bedst.
                  Hvad enten behovet er teknisk, at skulle passe
                  i et eksisterende setup, eller at det er let at
                  finde kompetencer til vedligeholdelse efterfølgende.
                </p>
              </dd>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Jeg samarbejder med et bureau men savner sparring omkring deres leverancer?
              </dt>
              <dd class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                  Det er altid vigtigt at sikre sig, at man får hvad man har aftalt, og hvad man betaler for.
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
                  Det er en prioritering. Jeg værdsætter den balance og sikkerhed, det giver at have
                  et fast arbejde. De steder jeg er ansat, giver mig en masse erfaring og
                  et evigt udfordrende miljø, som jeg ikke er klar til at give slip på. Hvis jeg supplerer
                  med konsulentopgaver, får jeg friheden, men beholder sikkerheden fra et fast arbejde.
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
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
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
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
