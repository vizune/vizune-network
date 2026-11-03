<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Vizune Network',
  meta: [{ name: 'description', content: 'Vizune.net microsite network' }]
})
</script>

<template>
  <div>
    <AppHeader />
    <main class="main">
      <nuxt-page />
      <AppFooter />
    </main>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .main { padding-top: var(--header-h); }
}
</style>
