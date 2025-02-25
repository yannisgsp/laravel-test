import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],

    build: {
      manifest: true,  // Activer la génération du fichier manifest.json
      outDir: 'public/build',  // Spécifier le dossier de sortie des fichiers compilés
  },
});
