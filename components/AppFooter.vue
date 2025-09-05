<script setup lang="ts">
const socials = [
  { name: 'codepen', href: 'https://codepen.io/SRichardson', label: 'CodePen', color: 'bg-lilac' },
  { name: 'deviantart', href: 'https://www.deviantart.com/vizune', label: 'DeviantArt', color: 'bg-breeze' },
  { name: 'discord', href: 'https://discordapp.com/users/vizune.', label: 'Discord', color: 'bg-apricot' },
  { name: 'github', href: 'https://github.com/vizune', label: 'GitHub', color: 'bg-lime' },
  { name: 'instagram', href: 'https://www.instagram.com/vizune_/', label: 'Instagram', color: 'bg-sunflower' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/sasha-r-547a2b57', label: 'LinkedIn', color: 'bg-plum' },
  { name: 'pinterest',  href: 'https://uk.pinterest.com/vizune/',   label: 'Instagram', color: 'bg-lilac' },
  { name: 'spotify', href: 'https://open.spotify.com/user/1149827575', label: 'Spotify', color: 'bg-breeze' },
  { name: 'steam', href: 'https://steamcommunity.com/id/vizune/', label: 'Steam', color: 'bg-apricot' },
  { name: 'threads', href: 'https://www.threads.com/@vizune_',label: 'Threads', color: 'bg-lime' },
]
</script>

<template>
  <footer class="w-full p-6 bg-black text-center">
    <ul class="flex items-center justify-center gap-4">
      <li v-for="s in socials" :key="s.name">
        <a
          :href="s.href"
          target="_blank" rel="noopener noreferrer"
          :style="{ '--c': s.color }"
          :class="[
          'inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-black transition-colors',
          s.color
          ]"
          :aria-label="s.label"
          title=""
        >
          <Icon
            :name="s.name"
            :size="22"
            class="text-black"
            :title="s.label"
          />
        </a>
      </li>
    </ul>
    <p class="mt-4 text-sm text-white/60">&copy; {{ new Date().getFullYear() }} Vizune</p>
  </footer>
</template>
