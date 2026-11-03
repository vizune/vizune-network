<script setup lang="ts">
import RainbowText from './RainbowText.vue';

const socials = [
  { name: 'codepen',    href: 'https://codepen.io/SRichardson',           label: 'CodePen',    color: '#beb8c8' },
  { name: 'deviantart', href: 'https://www.deviantart.com/vizune',         label: 'DeviantArt', color: '#bfe0ee' },
  { name: 'discord',    href: 'https://discordapp.com/users/vizune.',      label: 'Discord',    color: '#f3b28e' },
  { name: 'github',     href: 'https://github.com/vizune',                 label: 'GitHub',     color: '#c6f0c7' },
  { name: 'instagram',  href: 'https://www.instagram.com/vizune_/',        label: 'Instagram',  color: '#fffba3' },
  { name: 'linkedin',   href: 'https://www.linkedin.com/in/sasha-r-547a2b57', label: 'LinkedIn', color: '#cbb8c8' },
  { name: 'pinterest',  href: 'https://uk.pinterest.com/vizune/',          label: 'Pinterest',  color: '#bfe0ee' },
  { name: 'spotify',    href: 'https://open.spotify.com/user/1149827575',  label: 'Spotify',    color: '#f3b28e' },
  { name: 'steam',      href: 'https://steamcommunity.com/id/vizune/',     label: 'Steam',      color: '#c6f0c7' },
  { name: 'threads',    href: 'https://www.threads.net/@vizune_',          label: 'Threads',    color: '#fffba3' }
];
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <ul class="footer-socials">
      <li v-for="s in socials" :key="s.name">
        <a
          :href="s.href"
          :title="s.label"
          target="_blank" rel="noopener noreferrer"
          :style="{ '--chip': s.color }"
          class="footer-chip">
          <Icon :name="s.name" :size="22" aria-hidden="true" />
        </a>
      </li>
    </ul>
    <p class="footer-featuring">
      <RainbowText text="Featuring Kuroshio, Suzuya, Akagi, Fubuki and Kasumi from Kantai Collection" />
    </p>
    <p class="footer-credit">
      <a href="https://www.pixiv.net/en/users/147202" target="_blank" class="footer-credit-link"><RainbowText text="Artwork by Koji" /></a>
    </p>
    <p class="footer-copyright">
      <RainbowText :text="`© ${year} VIZUNE`" />
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 1.5rem;
  background-color: black;
  text-align: center;

  &-socials {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  &-chip {
    display: inline-flex;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-color: var(--chip);
    color: black;
    box-shadow:
      0 0 0 2px black,
      0 6px 20px rgba(0, 0, 0, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.06);
    transition-property: background, color, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;

    &:hover {
      background-color: black;
      color: var(--chip);
    }

    &:focus-visible {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }

  &-featuring {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  &-credit {
    margin-bottom: 1rem;

    &-link {
      font-size: 0.875rem;
      line-height: 1.25rem;
      border-width: 1px;
      padding: 0.25rem 0.5rem;
    }
  }

  &-copyright {
    margin-top: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: rgb(255 255 255 / 0.6);
  }
}
</style>
