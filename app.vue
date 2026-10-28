<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Vizune Network',
  meta: [{ name: 'description', content: 'Vizune.net microsite network' }]
})
</script>

<template>
  <SvgSprite />
  <div>
    <AppHeader />
    <main class="lg:pt-[var(--header-h)]">
      <nuxt-page />
      <AppFooter />
    </main>
  </div>
</template>
