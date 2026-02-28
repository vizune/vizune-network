<template>
  <div>
    <AppSection class="bg-lilac bg-lilac-girl" position="left">
      <h1>Welcome!</h1>
      <p>Hiya~! My name is Sasha. I have owned this domain since 2009 which has evolved over the years as a web development portfolio and creative sanctuary in anime graphic design.</p>

      <p>Now I'm treating this space as a central hub for all my hobbies and interests including anime, gaming, programming, collecting and adventures.</p>

      <p>Vizune is also my gamertag and now it's the name of my company 🎉 So <em>watch this space</em>. It's only the beginning ✨</p>
      <Button 
        url="#designs" 
        label="Start exploring" 
        backgroundColor="lg:bg-apricot"
        borderColor="lg:border-sunflower"
      />
    </AppSection>

    <AppSection id="designs" class="bg-breeze bg-breeze-girl" position="right">
      <h2>Designs</h2>
      <p>My creative sanctuary is now hosted on Neocities where anime, gaming, design, and web development collide. Here, I explore visual storytelling through graphics / web templates and share resources & tutorials to inspire your own digital creations.</p>
      <Button 
        url="https://vizune.neocities.org/" 
        label="Visit Vizune Designs" 
        backgroundColor="bg-plum"
        borderColor="lg:border-sunflower"
        target="true"
      />
    </AppSection>

    <AppSection id="portfolio" class="bg-apricot bg-apricot-girl" position="left">
      <h2>Portfolio (TBC)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-lilac"
        borderColor="lg:border-lime"
      />
    </AppSection>
    <AppSection id="blog" class="bg-lime bg-lime-girl" position="right">
      <h2>Blog (TBC)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-apricot"
        borderColor="lg:border-lilac"
      />
    </AppSection>
    <AppSection id="tcg" class="bg-sunflower bg-sunflower-girl" position="left">
      <h2>TCG Vault (WIP)</h2>
      <p>Here you'll find a growing gallery of my cards with photos amd what I'm hunting next. Think of it as a digital binder—organized, searchable, and always up to date.</p>
      <p>Whether you're a fellow collector or a curious visitor, feel free to browse through what I've picked up.</p>
      <Button 
        url="/" 
        label="Find out more"
        backgroundColor="bg-lime" 
        borderColor="lg:border-apricot"
      />
    </AppSection>
    <AppSection id="photography" class="bg-plum bg-plum-girl" position="right">
      <h2>Photography (TBC)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="bg-breeze"
        borderColor="lg:border-sunflower"
      />
    </AppSection>
  </div>
</template>
