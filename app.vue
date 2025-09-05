<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Vizune.com Network',
  meta: [{ name: 'description', content: 'Vizune.com microsite network' }]
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