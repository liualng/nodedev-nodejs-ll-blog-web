<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  components: {},
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: this.$store.state.iconFontCssUrl,
        },
      ],
    };
  },
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-transform: none;
  text-decoration:none;
}
</style>
