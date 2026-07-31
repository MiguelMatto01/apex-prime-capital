import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Custom plugin to selectively copy public files, skipping problematic ones
const selectivePublicCopy = () => {
  return {
    name: 'selective-public-copy',
    apply: 'build',
    config() {
      return {
        publicDir: false, // Disable default public dir copying
      };
    },
    closeBundle() {
      const publicDir = 'public';
      const outDir = 'dist';

      const copyDir = (src: string, dest: string) => {
        if (!existsSync(src)) return;

        const entries = readdirSync(src);

        for (const entry of entries) {
          const srcPath = join(src, entry);
          const destPath = join(dest, entry);

          // Skip files with multiple "copy" in the name
          if (entry.includes('copy copy') || entry.includes('copy.')) {
            console.log(`Skipping: ${entry}`);
            continue;
          }

          try {
            const stat = statSync(srcPath);

            if (stat.isDirectory()) {
              if (!existsSync(destPath)) {
                mkdirSync(destPath, { recursive: true });
              }
              copyDir(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          } catch (err) {
            console.warn(`Failed to copy ${srcPath}:`, err);
          }
        }
      };

      copyDir(publicDir, outDir);
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), selectivePublicCopy()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
