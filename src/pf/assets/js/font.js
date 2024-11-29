import projectConfig from "./project-config";

const loadFontsAndInit = (fontNames, callback) => {
  Promise.all(
      fontNames.map((fontName) =>
          new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            fetch('/assets/json/font.json')
                .then((response) => response.json())
                .then((fonts) => {
                  if (fonts[fontName]) {
                    link.href = fonts[fontName];
                    link.onload = resolve;
                    link.onerror = reject;
                    document.head.appendChild(link);
                    console.log(`Font "${fontName}" loaded.`);
                  } else {
                    reject(`Font "${fontName}" not found in font.json.`);
                  }
                })
                .catch(reject);
          })
      )
  )
      .then(() => {
        console.log('All fonts loaded.');
        if (typeof callback === 'function') callback(); // 폰트가 로드되면 초기화 실행
      })
      .catch((error) => console.error('Error loading fonts:', error));
};

loadFontsAndInit(projectConfig.fonts, () => {
  console.log("Project initialization can start here.");
});

export default loadFontsAndInit;
// 예제: 폰트를 로드한 뒤 초기화 실행
// loadFontsAndInit(['Roboto', 'NotoSansKR'], () => {
//   console.log('Project initialization can start here.');
// });
