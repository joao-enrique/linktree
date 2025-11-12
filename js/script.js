    const LINKS = {
      linkedin: 'https://www.linkedin.com/in/joao-enrique-dev/',
      itch: 'https://jedev1.itch.io/',
      youtube: 'https://www.youtube.com/@joaocodedev',
      github: 'https://github.com/joao-enrique',
      portfolio: 'https://meu-portfolio-lemon-sigma.vercel.app/'
    };

    // coloca os links automaticamente nos elementos com data-href
    document.querySelectorAll('.link-btn').forEach((el)=>{
      const title = el.querySelector('.link-title')?.textContent?.toLowerCase() || '';
      let url = el.getAttribute('data-href') || '#';
      if(title.includes('linkedin')) url = LINKS.linkedin;
      if(title.includes('itch')) url = LINKS.itch;
      if(title.includes('youtube')) url = LINKS.youtube;
      if(title.includes('github')) url = LINKS.github;
      if(title.includes('portfolio')) url = LINKS.portfolio;
      el.setAttribute('href', url);

    });

    const nameEl = document.getElementById('display-name');
    nameEl.addEventListener('dblclick', ()=>{
      const novo = prompt('Digite seu nome:', nameEl.textContent);
      if(novo) nameEl.textContent = novo;
    });
