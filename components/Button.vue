<script setup lang="ts">
  defineProps({
    label: String,
    url: String,
    backgroundColor: String,
    borderColor: String,
    external: Boolean
  })
</script>
<template>
  <a
    v-if="external"
    :href="url"
    class="button"
    target="_blank"
    :style="{ '--button-bg': `var(--color-${backgroundColor})`, '--button-border': `var(--color-${borderColor})` }"
  >
    <div class="bottom"></div>
    <div class="top">
      <div class="label">{{label}}</div>
      <div class="button-border button-border-left"></div>
      <div class="button-border button-border-top"></div>
      <div class="button-border button-border-right"></div>
      <div class="button-border button-border-bottom"></div>
    </div>
  </a>
  <NuxtLink
    v-else
    :to="url"
    class="button"
    :style="{ '--button-bg': `var(--color-${backgroundColor})`, '--button-border': `var(--color-${borderColor})` }"
  >
    <div class="bottom"></div>
    <div class="top">
      <div class="label">{{label}}</div>
      <div class="button-border button-border-left"></div>
      <div class="button-border button-border-top"></div>
      <div class="button-border button-border-right"></div>
      <div class="button-border button-border-bottom"></div>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.button {
  display: inline-block;
  text-decoration: none;
  position: relative;
  margin-top: 2rem;
	text-transform: uppercase;

  &-border {
    position: absolute;
	  background-color: #626262;
    -webkit-transition: all .25s ease-out;
    transition: all .25s ease-out;

    &-top {
      left: -2px;
      top: -2px;
      width: 0;
      height: 2px;
    }

    &-right {
      right: -2px;
      top: -2px;
      width: 2px;
      height: 0;
    }

    &-bottom {
      right: -2px;
      bottom: -2px;
      width: 0;
      height: 2px;
    }

    &-left {
      left: -2px;
      bottom: -2px;
      width: 2px;
      height: 0;
    }

  }

  .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 24px 34px 22px 34px;
	  text-align: center;
    border: 2px solid black;

    @media (min-width: 1024px) {
      border-color: var(--button-border, black);
    }
  }

  .bottom {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 100%;
    height: 100%;
    display: block;
	  padding: 0 34px;
    background-color: var(--button-bg);
    -webkit-transition: all .15s ease-out;
    transition: all .15s ease-out;

    @media (max-width: 1023px) {
      background-color: rgba(0,0,0,.2);
    }
  }

  .label {
    font-family: var(--font-tiny);
    color: black;
    font-weight: 400;
    line-height: 110%;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all .15s ease-out;
    transition: all .15s ease-out;

    @media (min-width: 1024px) {
      font-size: 1.125rem;
    }
  }

  &:hover {
    text-decoration: none;

    .top {
      .button-border-left,
      .button-border-right {
        height: calc(100% + 2px);
      }

      .button-border-top,
      .button-border-bottom {
        width: calc(100% + 2px);
      }
    }

    .bottom {
      left: 0;
      top: 0;
      background-color: rgba(0,0,0,.1);
    }
  }
}

</style>
