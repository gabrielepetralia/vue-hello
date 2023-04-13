const { createApp } = Vue;

createApp ({
  data() {
    return {
      message : "Ciao Vue!",
      srcVue : "https://logowik.com/content/uploads/images/vue2883.jpg",
    }
  }
}).mount("#app")