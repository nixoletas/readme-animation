window.onload = function () {
  let particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 789.1476416322727,
        },
      },
      color: {
        value: ["#ea5c53", "#56d4dd", "#3f7fdb"],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 0.05,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 9,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 3,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 50,
        color: "#c4c4c4",
        opacity: 1,
        width: 3,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 83.91608391608392,
          size: 1,
          duration: 3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  particlesJS("particles", particlesOptions);

  var header = document.getElementById("header");
  var subheader = document.getElementById("subheader");

  let typingSpeed = 25;
  let deleteSpeed = 2;
  let pDelay = 3000;

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const typewriter = new Typewriter(header, {
    loop: false,
    stringSplitter,
  });

  const typewriterSub = new Typewriter(subheader, {
    loop: false,
    stringSplitter,
  });

  const subType = (string) => {
    typewriterSub.changeDelay(typingSpeed).typeString(string).start();
  };

  const subDel = () => {
    typewriterSub.deleteAll(1).start();
  };

  phrases = [
    {
      header: "Hi, I'm <b>Nick</b>. ",
      subheader: "Nice to meet you. 👋 ",
      deleteChars: 15,
    },
    {
      header: "I'm a <b>Software Engineer</b>. ",
      subheader: "From Brazil 🇧🇷.",
      deleteChars: 29,
    },
    {
      header: "Check out my work below. ",
      subheader: "Contact me at nick.miyasato.dev@gmail.com",
    },
  ];

  const typing = () => {
    typewriter
      .changeDelay(typingSpeed)
      .changeDeleteSpeed(deleteSpeed)
      .pauseFor(2000);
    for (let i = 0; i < phrases.length - 1; i++) {
      let phrase = phrases[i];
      typewriter
        .typeString(phrase.header)
        .callFunction(() => {
          subType(phrase.subheader);
        })
        .pauseFor(pDelay)
        .callFunction(() => {
          subDel();
        })
        .pauseFor(phrase.subheader.length * deleteSpeed)
        .deleteChars(phrase.deleteChars);
    }

    let phrase = phrases[phrases.length - 1];
    typewriter
      .typeString(phrase.header)
      .callFunction(() => {
        subType(phrase.subheader);
      })
      .start();
  };

  typing();
};
