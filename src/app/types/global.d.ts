declare module '*.module.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

interface ImportMetaEnv {
    VITE_API_YANDEX_WEATHER_KEY: string;
    VITE_API_YANDEX_WEATHER_PATH: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module '*.js';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.scss';