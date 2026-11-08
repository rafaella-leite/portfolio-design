
// Animação de entrada das seções

const sections = document.querySelectorAll(
  '.project-section, .studio-project, .about-section'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12
  }
);

sections.forEach((section) => {
  section.classList.add('reveal');
  observer.observe(section);
});


// Navegação ativa

const navigationLinks = document.querySelectorAll(
  '.navigation a'
);

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigationLinks.forEach((item) => {
      item.classList.remove('active');
    });

    link.classList.add('active');
  });
});


// Movimento suave da fotografia

const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image');

if (hero && heroImage) {
  hero.addEventListener('mousemove', (event) => {
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroImage.style.transform =
      `translate(calc(-50% + ${x * 12}px), ${y * 10}px)`;
  });

  hero.addEventListener('mouseleave', () => {
    heroImage.style.transform = 'translate(-50%, 0)';
  });
}

// ANIMAÇÃO DA SEÇÃO DE PROJETOS

const projectsSection = document.querySelector('.projects-section');

if (projectsSection) {
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                projectsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    projectsObserver.observe(projectsSection);
}

// ANIMAÇÃO DO CASE STUDIO DE DANÇA

const balletSection = document.querySelector('.ballet-section');

if (balletSection) {
    const balletObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                balletObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    balletObserver.observe(balletSection);
}

// ANIMAÇÃO PEDACINHO DO CÉU

const confeitariaSection = document.querySelector('.confeitaria-section');

if (confeitariaSection) {
    const confeitariaObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                confeitariaObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    confeitariaObserver.observe(confeitariaSection);
}

// ANIMAÇÃO DO CASE DE ESTÉTICA

const esteticaSection = document.querySelector('.estetica-section');

if (esteticaSection) {
    const esteticaObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                esteticaObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    esteticaObserver.observe(esteticaSection);
}

// ANIMAÇÃO DO CASE DE ADVOCACIA

const advocaciaSection = document.querySelector('.advocacia-section');

if (advocaciaSection) {
    const advocaciaObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                advocaciaObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    advocaciaObserver.observe(advocaciaSection);
}