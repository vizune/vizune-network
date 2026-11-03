<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string                // brand icon name, e.g. 'steam', 'github'
  size?: number | string      // e.g. 24 or '1.5rem'
  title?: string              // optional accessible title
}>(), { size: 24 })

const px = typeof props.size === 'number' ? `${props.size}px` : props.size
</script>

<template>
  <FontAwesomeIcon :icon="['fab', name]" :title="title" :style="{ fontSize: px }" />
</template>
