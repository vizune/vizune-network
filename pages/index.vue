<template>
  <div>
    <AppSection theme="lilac" position="left">
      <h1>Welcome!</h1>
      <p>Hiya~! 💖 My name is Sasha. I've owned <a href="https://vizune.com" target="_blank">Vizune.com</a> since 2009, and over the years it has evolved from a web development portfolio into my own little creative sanctuary for web design, anime and digital art.</p>

      <p>That passion eventually led me to become a Front End Developer, a career I've now been enjoying for well over a decade. These days, I'm also dipping my toes into solo game development and exploring more ways to bring my ideas to life.</p>

      <p>Now I've created Vizune.net as a central hub for all of my hobbies, projects and interests including anime, gaming, programming, collecting, creative projects and the occasional adventure.</p>

      <p>Vizune has been my <a href="https://steamcommunity.com/id/vizune/" target="_blank">gamertag</a> for years and now it's even the name of my company 🎉 What started as a little corner of the internet has grown into something much bigger. <em>Watch this space...</em> it's only the beginning ✨</p>

      <Button 
        url="#studio" 
        label="Start exploring" 
        backgroundColor="apricot"
        borderColor="sunflower"
      />
    </AppSection>

    <AppSection id="studio" theme="breeze" position="right">
      <h2>Studio</h2>

      <p><strong>Where new worlds begin.</strong> ✨🐈‍⬛ Vizune is my little indie game development studio and the home of the original worlds I'm building. I'm currently working on my first game, while learning, experimenting and slowly bringing the wider Vizune universe to life.</p>

      <p>Vizune has a shiny new identity, and vizune.com is now open as a small glimpse of what's brewing. Pop your email on the list to be first to hear about the game reveal, devlogs and early playtests. Eventually it will grow into an interactive space where you can explore the different worlds I create.</p>
      <Button 
        url="https://vizune.com/" 
        label="Visit Vizune Studio" 
        backgroundColor="plum"
        borderColor="sunflower"
        external
      />
    </AppSection>

    <AppSection id="designs" theme="apricot" position="left">
      <h2>Designs</h2>

      <p><strong>This is where it all began.</strong> 😊 Long before Vizune became a network, a gamertag or even a company, it was my little corner of the internet for experimenting with web design and anime graphics.</p>

      <p>Over the years I've created countless layouts, graphics and websites inspired by the things I love. What started as a hobby eventually became the foundation for my career in Front End Development but I've never really stopped creating just for the fun of it.</p>

      <p>That creative sanctuary now lives on Neocities, where anime, gaming, design and web development collide along with little pieces of internet nostalgia I've collected along the way.</p>
      <Button 
        url="https://vizune.neocities.org/" 
        label="Visit Vizune Designs" 
        backgroundColor="lilac"
        borderColor="lime"
        external
      />
    </AppSection>

    <AppSection id="reviews" theme="lime" position="right">
      <h2>Reviews (Coming soon)</h2>

      <p><strong>A love letter to the games that deserve to be remembered.</strong> 🎮💜</p>

      <p>This is a space for hidden gems, cult favourites, indie experiments, nostalgic RPGs, underrated worlds and the wonderfully obscure. 🌈 I favour rich aesthetics, memorable characters, unusual ideas and stories that leave an impression.</p>

      <p>My review site is currently being built over on Nekoweb, where I'll be slowly creating an archive of the games, stories and worlds I've fallen in love with along the way.</p>
      <Button 
        url="https://vizune.nekoweb.org/" 
        label="Visit Vizune Reviews" 
        backgroundColor="apricot"
        borderColor="lilac"
        external
      />
    </AppSection>
    <AppSection id="vault" theme="sunflower" position="left">
      <h2>Celestial Vault (WIP)</h2>
      <p>Treasures gathered from different worlds. ✨</p>
      <p>Celestial Vault is a growing archive of the things I love to collect from retro games, trading cards, figures, art prints to beautiful oddities.</p>
      <p>Part collection, part wishlist and part digital museum, it’s a place to catalogue all the little treasures I've picked up along the way.</p>
      <p>Whether you're a fellow collector or a curious visitor, feel free to browse through what I've picked up.</p>
      <Button 
        url="https://celestial-vault.neocities.org/" 
        label="Visit Celestial Vault"
        backgroundColor="lime" 
        borderColor="apricot"
      />
    </AppSection>
    <AppSection id="photography" theme="plum" position="right">
      <h2>Pressed Memories (TBC)</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel convallis dui, non imperdiet felis. Mauris dignissim sapien eu mi condimentum ultricies. Vestibulum pulvinar dui vitae efficitur posuere.</p>
      <Button 
        url="/" 
        label="Find out more" 
        backgroundColor="breeze"
        borderColor="sunflower"
      />
    </AppSection>
  </div>
</template>
