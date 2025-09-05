<script setup lang="ts">
useHead({
  title: 'Vizune.com Network',
  meta: [{ name: 'description', content: 'Vizune.com microsite network' }]
})
</script>

<template>
  <div>
    <AppHeader />
    <main class="lg:pt-[var(--header-h)]">
      <nuxt-page />
      <AppFooter />
    </main>
  </div>
</template>