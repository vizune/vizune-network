<script setup lang="ts">
const links = [
  { name: 'Studio', to: { path: '/', hash: '#studio' }, color: 'breeze', hex: '#cbe9f7' },
  { name: 'Designs', to: { path: '/', hash: '#designs' }, color: 'apricot', hex: '#f9bc9c' },
  { name: 'Reviews', to: { path: '/', hash: '#reviews' }, color: 'lime', hex: '#c9f3c9' },
  { name: 'Vault', to: { path: '/', hash: '#vault' }, color: 'sunflower', hex: '#fffaa6' },
  { name: 'Photography', to: { path: '/', hash: '#photography' }, color: 'plum', hex: '#dbb6bf' },
]
</script>

<template>
  <ul class="nav">
    <li
      v-for="link in links"
      :key="link.name"
      class="nav-item"
      :style="{ '--c': link.hex, backgroundColor: `var(--color-${link.color})` }"
    >
      <span class="nav-fill" aria-hidden="true" />
      <NuxtLink :to="link.to" class="nav-link">
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav {
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: minmax(0, 1fr);
  gap: 0.25rem;

  @media (min-width: 640px) {
    grid-auto-flow: column;
  }

  &-item {
    position: relative;
    display: flex;
    overflow: hidden;
    border: 2px solid var(--c);
    text-align: center;
  }

  &-fill {
    position: absolute;
    inset: 0;
    background-color: black;
    transform: translateY(-100%);
    transition: transform 500ms cubic-bezier(0, 0, 0.2, 1);
    will-change: transform;
  }

  &-link {
    position: relative;
    z-index: 10;
    width: 100%;
    padding: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: 0.05em;
    color: black;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  &-item:hover &-fill {
    transform: translateY(0);
  }

  &-item:hover &-link {
    color: var(--c);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-fill,
  .nav-link { transition: none; }
}
</style>
