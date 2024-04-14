import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import mkcert from 'vite-plugin-mkcert'
import * as https from "node:https";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        server: {
            https: https.createServer(),
            cors: true,
            proxy: {
                '/v2': {
                    target: 'https://api.weather.yandex.ru',
                    changeOrigin: true,
                    secure: false,
                    headers: {
                        "X-Yandex-API-Key": process.env.VITE_API_YANDEX_WEATHER_KEY,
                    }
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            },
        },
        plugins: [
            react(),
            mkcert()
        ],
        preview:
            {
                cors: {
                    "origin": "*",
                    "methods": "GET,POST,DELETE,PUT",
                    "preflightContinue": false,
                    "optionsSuccessStatus": 204
                }
            }
    });
}