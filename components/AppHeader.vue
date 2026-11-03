<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const headerRef = ref<HTMLElement | null>(null)
const router = useRouter()
let ro: ResizeObserver | null = null

const setHeaderVar = (h: number) =>
  document.documentElement.style.setProperty('--header-h', `${Math.round(h)}px`)

const goTop = async () => {
  if (window.location.pathname !== '/') await router.push({ path: '/' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const el = headerRef.value
  if (!el) return

  ro = new ResizeObserver((entries) => {
    const entry = entries[0]
    // Prefer borderBoxSize if available; fall back to contentRect
    const h =
      (entry.borderBoxSize && entry.borderBoxSize[0]?.blockSize) ||
      entry.contentRect.height
    setHeaderVar(h)
  })
  ro.observe(el)
})

onBeforeUnmount(() => ro?.disconnect())
</script>

<template>
  <header ref="headerRef" class="header">
    <div class="header-brand">
      <button type="button" class="header-top" @click="goTop" aria-label="Back to top">
        <SiteName />
      </button>
    </div>
    <div class="header-nav">
      <Navigation class="header-links" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(0 0 0 / 0.8);
  backdrop-filter: blur(8px);

  @supports (backdrop-filter: blur(8px)) {
    background-color: rgb(0 0 0 / 0.6);
  }

  @media (min-width: 1024px) {
    position: fixed;
    z-index: 50;
  }

  &-brand {
    padding-top: 1.5rem;
    padding-bottom: 0.25rem;
    text-align: center;

    @media (min-width: 640px) {
      padding-top: 3rem;
    }
  }

  &-top {
    display: inline-block;
  }

  &-nav {
    text-align: center;
  }

  &-links {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-top: 0.75rem;
  }
}
</style>
