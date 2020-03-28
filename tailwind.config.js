/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {},
  variants: {
    visibility: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('@tailwindcss/ui')
  ]
}
