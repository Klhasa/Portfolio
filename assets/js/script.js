$(window).on('load', function () {
    $('#loader').fadeOut('slow', function () { $(this).remove(); });
});

i18next.init({
    lng: 'it',
    resources: {
        en: {
            translation: {
                "creativity": "Creativity",
                "experience": "Design",
                "connection": "User Experience",
                "myProjects": "My Projects",
                "aboutMe": "About Me",
                "aboutMeText": `My name is Hasa Klevis, and I'm a second-year student at ITS Alto Adriatico, specializing in front-end development. What led me to pursue this path is a strong passion for both design and coding, and the desire to combine creativity with functionality to build modern, accessible, and user-friendly interfaces. From the very beginning, I was fascinated by how ideas can come to life through code, and how every visual detail contributes to the overall user experience. That's why, in addition to technical skills, I enjoy exploring UI/UX design principles and working on projects that are not only functional, but also visually appealing. My goal is to grow as a front-end developer, keep learning new technologies, and work on exciting projects where code and creativity go hand in hand.`,
                "myProject": "My Projects"
            }
        },
        it: {
            translation: {
                "creativity": "Creatività",
                "experience": "Design",
                "connection": "Esperienza utente",
                "myProjects": "I miei progetti",
                "aboutMe": "su di me",
                "aboutMeText": `Mi chiamo Hasa Klevis e sono uno studente del secondo anno presso l'ITS Alto Adriatico, dove mi sto specializzando nello sviluppo front-end. La mia passione per il mondo del design e del coding mi ha spinto a intraprendere questo percorso, con l'obiettivo di unire creatività e funzionalità per realizzare interfacce moderne, accessibili e intuitive. Fin da subito sono rimasto affascinato da come un'idea possa prendere forma attraverso il codice, e da come ogni dettaglio visivo contribuisca a migliorare l'esperienza utente. Per questo motivo, oltre allo studio tecnico, mi piace approfondire anche aspetti legati all'UI/UX design, cercando di sviluppare progetti che siano non solo funzionali, ma anche visivamente curati. Il mio obiettivo è crescere come sviluppatore front-end, continuare a imparare nuove tecnologie e lavorare su progetti stimolanti, dove il codice incontra la creatività.`,
                "myProject": "I Miei Progetti"
            }
        },
        al: {
            translation: {
                "creativity": "Kreativitet",
                "experience": "Design",
                "connection": "Përvoja e përdoruesit",
                "myProjects": "Projektet e mija",
                "aboutMe": "rreth meje",
                "aboutMeText": `Quhem Hasa Klevis dhe jam një student në vitin e dytë në ITS Alto Adriatico, ku po specializohem në zhvillimin front-end. Pasioni im për botën e dizajnit dhe kodimit më ka shtyrë të ndjek këtë rrugë, me synimin për të bashkuar kreativitetin me funksionalitetin në krijimin e ndërfaqeve moderne, të qasshme dhe intuitive. Që në fillim jam mahnitur nga mënyra se si një ide mund të marrë formë përmes kodit dhe nga fakti se çdo detaj vizual kontribuon në përmirësimin e përvojës së përdoruesit. Për këtë arsye, përveç studimit teknik, më pëlqen të thelloj njohuritë edhe në aspektet e dizajnit UI/UX, duke synuar të zhvilloj projekte që janë jo vetëm funksionale, por edhe vizualisht të kuruara. Qëllimi im është të rritem si zhvillues front-end, të vazhdoj të mësoj teknologji të reja dhe të punoj në projekte sfiduese, ku kodi takohet me kreativitetin.`,
                "myProject": "Projektet E Mia"
            }
        },
        fr: {
            translation: {
                "creativity": "Créativité",
                "experience": "Design",
                "connection": "Expérience utilisateur",
                "myProjects": "Mes Projets",
                "aboutMe": "À propos de moi",
                "aboutMeText": `Je m'appelle Hasa Klevis et je suis étudiant en deuxième année à l'ITS Alto Adriatico, où je me spécialise dans le développement front-end. Ma passion pour le monde du design et du code m'a poussé à emprunter ce parcours, avec l'objectif d'unir créativité et fonctionnalité pour créer des interfaces modernes, accessibles et intuitives. Dès le début, j’ai été fasciné par la manière dont une idée peut prendre forme à travers le code, et par l’impact que chaque détail visuel peut avoir sur l’amélioration de l’expérience utilisateur. C’est pourquoi, en plus de l’étude technique, j’aime approfondir les aspects liés au design UI/UX, en cherchant à développer des projets qui soient non seulement fonctionnels, mais aussi esthétiquement soignés. Mon objectif est de progresser en tant que développeur front-end, de continuer à apprendre de nouvelles technologies et de travailler sur des projets stimulants, où le code rencontre la créativité.`,
                "myProject": "Mes Projets"
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        resetNativeScroll: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    const horizontalSection = document.querySelector('.horizontal-scroll-wrapper');
    const horizontalContent = document.getElementById('horizontalContent');

    scroll.on('scroll', (args) => {
        const scrollY = args.scroll.y;
        const sectionTop = horizontalSection.offsetTop;
        const sectionHeight = horizontalSection.offsetHeight;
        const progress = Math.min(Math.max((scrollY - sectionTop) / (sectionHeight - window.innerHeight), 0), 1);

        const totalScrollWidth = horizontalContent.scrollWidth - window.innerWidth;
        horizontalContent.style.transform = `translateX(-${progress * totalScrollWidth}px)`;
    });

    scroll.on('scroll', (args) => {
        const scrollY = args.scroll.y || args.scroll.x;
        if (scrollY > 100) { 
            $('.back-to-top:hidden').fadeIn();
        } else {
            $('.back-to-top').fadeOut(); 
        }
    });

    $('.back-to-top').on('click', function () {
        scroll.scrollTo(0, {
            duration: 100,
            offset: 0,
        });
        return false;
    });
});

function changeLanguage(lang) {
    i18next.changeLanguage(lang, () => {
        updateContent();
    });
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = i18next.t(key);
    });
}


function animateSlide(slide) {
    gsap.fromTo(slide.querySelector("svg"), {
        opacity: 0,
        y: 100,
        scale: 0.7
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power4.out"
    });
    gsap.fromTo(slide.querySelector("img"), {
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out"
    });
}



const flowers = document.querySelectorAll('.flower, .flower-1, .flower-2, .flower-3, .flower-4, .flower-5');

flowers.forEach((svg) => {
    const offset = gsap.utils.random(-20, 20);
    const duration = gsap.utils.random(2, 5);
    const delay = gsap.utils.random(0, 2);

    gsap.to(svg, {
        y: `+=${offset}`,
        x: `+=${offset}`,
        duration: duration,
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});

const offset = 150;
gsap.to(".flower-loader", {
    rotation: offset,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

function setActiveFlower(lang) {
  document.querySelectorAll('.flowers-language-selector .flower').forEach(function(flower) {
    if (flower.getAttribute('data-lang') === lang) {
      flower.classList.add('selected');
      flower.setAttribute('aria-selected', 'true');
    } else {
      flower.classList.remove('selected');
      flower.removeAttribute('aria-selected');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.flowers-language-selector .flower').forEach(function(flower) {
    flower.addEventListener('click', function() {
      var lang = this.getAttribute('data-lang');
      if (window.i18next) {
        i18next.changeLanguage(lang, function() {
          if (typeof updateContent === 'function') updateContent();
        });
      }
      setActiveFlower(lang);
    });
  });
  if (window.i18next) {
    setActiveFlower(i18next.language || 'it');
  }
});

