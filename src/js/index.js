import '../scss/main.scss';

fetch(
    "https://api.github.com/users/evescolded/repos?sort=created&direction=asc"
  )
    .then((resp) => resp.json())
    .then((resp) => {
      for (let repo of resp) {
        const { name, description, html_url, git_url, fork } = repo;

        if (fork) {
          continue
        }
        const repoList = document.querySelector(".projects__container--js");
  
        const myTemplate =         
        `<article class="project">
            <div class="project__bar">
              <img class="project__circles" src="img/circles_top.svg" alt="">
            </div>
            <div class="project__content">
              <img src="img/gh_logo_black.svg" alt="logo GitHub">
              <p class="project__grid">
                <span class="project__label">project:</span>
                <span class="project__name">${name}</span>
              </p>
              <p class="project__grid">
                <span class="project__label">description:</span>
                <span class="project__description">${description}</span>
              </p>
              <p class="project__grid">
                <span class="project__label">demo:</span>
                <span>&lt;<a href="${html_url}" title="${name}" class="project__link" target="_blank" rel="noopener norefferer">see here</a>&gt;</span>
              </p>
              <p class="project__grid">
                <span class="project__label">github:</span>
                <span>&lt;<a href="${git_url}" title="${name}" class="project__link" target="_blank" rel="noopener norefferer">source code</a>&gt;</span>
              </p>

            </div>
          </article>`        
        ;
  
        repoList.innerHTML += myTemplate;
      }
    })
    .catch((error) => {
      console.log("Nie udało się pobrać repo :(");
    });
  