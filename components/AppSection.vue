<script setup lang="ts">
defineProps({
  position: String,
  theme: String
})
</script>

<template>
  <section
    v-bind="$attrs"
    :class="`Wrapper Wrapper-${position}`"
    :style="{
      backgroundColor: `var(--color-${theme})`,
      backgroundImage: `var(--bg-${theme})`
    }"
  >
    <div class="Wrapper-content">
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.Wrapper {
  display: flex;
  width: 100%;
  min-height: calc(100vh - var(--header-h));
  background-attachment: fixed;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    scroll-margin-top: var(--header-h);
  }

  &-content {
    width: 100%;
    background-color: white;
    padding: 4rem 5%;
    margin-top: 400px;

    @media (min-width: 640px) {
      width: 60%;
      margin-top: 0;
    }

    @media (min-width: 1024px) {
      background-color: transparent;
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
  }

  &-left {
    background-position: left 3rem;
    justify-content: flex-end;
  }

  &-right {
    background-position: right 3rem;
  }

  // Mobile: the image sits in the 400px gap above the white text box,
  // so scale it to that height and let it scroll with the section
  @media (max-width: 639px) {
    &.Wrapper-left,
    &.Wrapper-right {
      background-attachment: scroll;
      background-size: auto 475px;
    }

    &.Wrapper-left { background-position: left top; }
    &.Wrapper-right { background-position: right top; }
  }
}
</style>
