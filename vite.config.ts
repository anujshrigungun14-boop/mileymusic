import path from 'path';
import { defineConfig } from 'vite';
// import { VitePWA } from 'vite-plugin-pwa';
import authGatePlugin from './vite-plugin-auth-gate.js';
import blobAssetPlugin from './vite-plugin-blob.js';
import svgUse from './vite-plugin-svg-use.js';
import uploadPlugin from './vite-plugin-upload.js';
import { playwright } from '@vitest/browser-playwright';
import { execSync } from 'child_process';

function proxyAudioPlugin() {
    return {
        name: 'proxy-audio-dev',
        configureServer(server) {
            // No longer needed: local proxy-audio middleware replaced by remote proxy
        },
    };
}

function getGitCommitHash() {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
        return 'unknown';
    }
}

const decrypterVersion = '2026-06-23-flac-hls-v8';

export default defineConfig(({ mode }) => {
    const commitHash = getGitCommitHash();
    const isDev = mode === 'development';

    return {
        test: {
            browser: {
                enabled: true,
                provider: playwright(),
                headless: !!process.env.HEADLESS,
                instances: [{ browser: 'chromium' }],
            },
        },

        base: './',

        define: {
            __COMMIT_HASH__: JSON.stringify(commitHash),
            __VITEST__: !!process.env.VITEST,
        },

        worker: {
            format: 'es',
        },

        resolve: {
            alias: {
                '!lucide': '/node_modules/lucide-static/icons',
                '!simpleicons': '/node_modules/simple-icons/icons',
                '!': '/node_modules',

                events: '/node_modules/events/events.js',
                pocketbase: '/node_modules/pocketbase/dist/pocketbase.es.js',
                stream: path.resolve(__dirname, 'stream-stub.js'),
            },
        },

        optimizeDeps: {
            exclude: ['pocketbase', '@ffmpeg/ffmpeg', '@ffmpeg/util'],
        },

        server: {
            fs: {
                allow: ['.', 'node_modules'],
            },
        },

        build: {
            outDir: 'dist',
            emptyOutDir: true,
            sourcemap: false,
            minify: 'esbuild',
            reportCompressedSize: false,
            rollupOptions: {
                treeshake: true,
            },
        },

        plugins: [
            proxyAudioPlugin(),
            authGatePlugin(),
            uploadPlugin(),
            blobAssetPlugin(),
            svgUse(),
        ],
    };
});
