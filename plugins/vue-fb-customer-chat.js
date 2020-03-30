import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 109247357392205, //  change 'null' to your Facebook Page ID,
  theme_color: '#5521b5', // theme color in HEX
  locale: 'da_DK' // default 'en_US'
})
