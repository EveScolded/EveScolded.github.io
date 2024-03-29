import "../scss/main.scss";

console.log("Hi, I'm Ewelina - welcome in my portfolio 🤗");

fetch(
  "https://api.github.com/users/evescolded/repos?sort=created&direction=desc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, html_url, homepage, fork } = repo;

      if (fork) {
        continue;
      }
      const repoList = document.querySelector(".projects__container--js");
      // src="img/gh_logo_black.8f2f659d.svg"
      const myTemplate = `<article class="project">
            <div class="project__bar">
              <span class="project__circles" alt=""></span>
            </div>
            <div class="project__content">
              <div class="project__github-logo"  alt="logo GitHub"></div>
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
                <span>&lt;<a href="${homepage}" title="${name}" class="project__link" target="_blank" rel="noopener norefferer">see here</a>&gt;</span>
              </p>
              <p class="project__grid">
                <span class="project__label">github:</span>
                <span>&lt;<a href="${html_url}" title="${name}" class="project__link" target="_blank" rel="noopener norefferer">source code</a>&gt;</span>
              </p>

            </div>
          </article>`;
      repoList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("Nie udało się pobrać repo :(");
  });
