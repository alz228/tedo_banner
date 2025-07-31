const bannerData = {
  darkTheme: false,
  title: "Сопровождение сделок и оценка",
  subtitle: "Достижение результата — то, чем мы занимаемся каждый день",
  description:
    "Сегодня на&nbsp;нестабильном рынке компания может столкнуться с&nbsp;вызовами, которые требуют оперативного и&nbsp;безошибочного решения. Приобретение или продажа компании, ее&nbsp;части или любых активов, переговоры с&nbsp;потенциальным партнером, выбор пути развития компании с&nbsp;анализом эффективности, операционных и&nbsp;стратегических проектов, реструктуризация бизнеса, поиск возможностей финансирования инфраструктурных и&nbsp;инвестиционных расходов, анализ стоимости бизнеса, любых материальных и&nbsp;нематериальных активов, финансовых инструментов&nbsp;&mdash; вот далеко не&nbsp;полный перечень вопросов, с&nbsp;которыми может помочь практика сопровождения сделок. Мы&nbsp;сопровождаем клиента на&nbsp;всех этапах сделки, помогаем принимать верные решения, снизить риски и&nbsp;сэкономить время.",
  imageLeft:
    "https://static.tildacdn.com/tild6662-3435-4434-b035-653535363464/image.png",
  imageRight:
    "https://static.tildacdn.com/tild3462-3532-4164-b661-323433386163/image.png",
  gradientColor: "#3a63dc",
  textBGColor: "#fff",

   breadCrumbsData: [
    {
      text: "ТеДо",
      link: "https://www.google.com/",
    },

    {
      text: "Услуги",
      link: "https://www.google.com/",
    },
    
    {
      text: "Консалтинг и аудит",
      link: "https://www.google.com/",
    },
    
    {
      text: "Сопровождение сделок и оценка",
      link: "https://www.google.com/",
    },
  ],

  buttonsData: [
    {
      text: "связаться с нами",
      link: "https://www.google.com/",
      newTab: false,
    },
    {
      text: "услуги",
      link: "https://www.google.com/",
      newTab: false,
    },
  ],
};

  document.addEventListener("DOMContentLoaded", function () {

function renderBanner(data) {
  const myBanner = document.querySelector(".banner__container");

  let breadCrumbs = data.breadCrumbsData
    .map((item, index, arr) => {
      const lastIndex = index === arr.length - 1;
      return `<a href="${item.link}" class="banner__bread-crumb ${
        lastIndex ? " banner__bread-crumb_active" : ""
      }">${item.text}</a>`;
    })
    .join("");

  let buttons = data.buttonsData
    .map((item, index) => {
      return `<a href="${item.link}" ${
        item.newTab ? 'target="_blank" rel="noopener noreferrer" ' : ""
      } class=" banner__button banner__button__button${index + 1}">${
        item.text
      }</a>`;
    })
    .join("");

  myBanner.innerHTML = `
        <nav class="bread-crumbs__container">

       ${breadCrumbs}
      </nav>

      <h1 class="banner__tittle">${data.title}</h1>
      <div class="banner__subtittle">${data.subtitle}</div>
      <div class="banner__image-container">
        <img src="${data.imageLeft}" alt="Фоновое изображение" class="banner__image_left">
        <img src="${data.imageRight}" alt="Фоновое изображение" class="banner__image_right"> 
      </div>
      <div class="banner__text">${data.description}</div>

      <div class="banner__button-container">
         ${buttons}
      </div>

  `;

  document.documentElement.style.setProperty(
    "--banner-gradient-color",
    bannerData.gradientColor
  );

  document.querySelector('.banner__text').style.backgroundColor = bannerData.textBGColor

  if (data.darkTheme) {
    myBanner.classList.add("banner_dark");
  } else {
    myBanner.classList.remove("banner_dark");
  }
}

renderBanner(bannerData);
  })
