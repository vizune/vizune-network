<template>
  <div>
    <AppSection class="bg-lilac bg-lilac-girl" position="left">
      <h1>Welcome!</h1>
      <p>Hi! This is Kantai. This template features chibi versions of characters from the anime and video game series, Kantai Collection. 
        Built with <a href="https://nuxt.com/" target="_blank">Nuxt</a>, <a href="https://vuejs.org/" target="_blank">Vue.js</a>, and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, Kantai is perfect for creating a portfolio or network website. 
        Whether you're showcasing your work or building an online community, this template offers a delightful and engaging design to captivate your audience.</p>
      <Button 
        url="/" 
        label="Hover me! Hover me!" 
        backgroundColor="bg-apricot"
        borderColor="border-sunflower"
      />
    </AppSection>

    <AppSection id="designs" class="bg-breeze bg-breeze-girl" position="right">
      <h2>Design Archive</h2>
      <p>My creative sanctuary where anime, gaming, design, and web development collide. Here, I explore visual storytelling through graphics and web templates — sharing resources and tutorials to inspire your own digital creations.</p>
      <Button 
        url="https://vizune.neocities.org/" 
        label="Visit Vizune Designs" 
        backgroundColor="bg-plum"
        borderColor="border-sunflower"
        target="true"
      />
    </AppSection>

    <AppSection id="blog" class="bg-apricot bg-apricot-girl" position="left">
      <h2>Blog</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-lilac"
        borderColor="border-lime"
      />
    </AppSection>
    <AppSection id="portfolio" class="bg-lime bg-lime-girl" position="right">
      <h2>Portfolio</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-apricot"
        borderColor="border-lilac"
      />
    </AppSection>
    <AppSection id="tcg" class="bg-sunflower bg-sunflower-girl" position="left">
      <h2>TCG Collection</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more"
        backgroundColor="bg-lime" 
        borderColor="border-breeze"
      />
    </AppSection>
    <AppSection id="reviews" class="bg-plum bg-plum-girl" position="right">
      <h2>Reviews</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-breeze"
        borderColor="border-sunflower"
      />
    </AppSection>
  </div>
</template>
