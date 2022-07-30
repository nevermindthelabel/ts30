import { defineConfig } from 'vite';
import { directoryPlugin } from 'vite-plugin-list-directory-contents';

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    directoryPlugin({ baseDir: __dirname, filterList: ['.git', 'style.css', 'background.jpg', 'index-FINISHED.html'] })
  ]
});
