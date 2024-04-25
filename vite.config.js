import { resolve } from 'path'
import { defineConfig } from 'vite'
import * as path from "path";
const __dirname = path.resolve();

export default defineConfig({
  root: "src",
  base:'./',
  open: true,
  build: {
    minify: false,
    rollupOptions: {
      input: {
        wv: resolve(__dirname, 'src/index.html'),
        admin: resolve(__dirname, 'src/pages/admin/adm.html'),
        guide: resolve(__dirname, 'src/pages/guides/guide.html'),
        component: resolve(__dirname, 'src/pages/component/compo.html'),

        project: resolve(__dirname, 'src/pages/projects/list.html'),
        sample: resolve(__dirname, 'src/pages/projects/sample/sample.html'),
      },
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff2?|ttf|eot|otf/i.test(extType)) {
            extType = 'fonts';
          } else if(/mp4?|webm|ogg/i.test(extType)){
            extType = 'videos';
          }
          return `assets/${extType}/[name][extname]`;
        },
      },
    },
    cssCodeSplit: true,
  }
});