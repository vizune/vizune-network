<template>
  <NuxtLink to="/" class="site-name">
    <span class="site-name-text">
      <span class="lilac">V</span>
      <span class="breeze">i</span>
      <span class="apricot">z</span>
      <span class="lime">u</span>
      <span class="sunflower">n</span>
      <span class="plum">e</span>
      <span class="sunflower">.</span>
      <span class="lime">n</span>
      <span class="apricot">e</span>
      <span class="breeze">t</span>
    </span>
  </NuxtLink>
</template>

<style scoped>
.site-name,
.site-name:hover {
  text-decoration: none;
}

.site-name-text {
  font-family: var(--font-tiny);
  font-weight: 900;
  font-size: 3rem;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.lilac { color: var(--color-lilac); }
.breeze { color: var(--color-breeze); }
.apricot { color: var(--color-apricot); }
.lime { color: var(--color-lime); }
.sunflower { color: var(--color-sunflower); }
.plum { color: var(--color-plum); }
</style>
