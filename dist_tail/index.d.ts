import { ConfigType } from "./types/theme-config";
export default function preset(config: ConfigType): {
    theme: {
        screens: any;
        containers: any;
        fontWeight: {};
        container: {
            center: boolean;
            padding: string;
            screens: {
                lg: any;
            };
        };
        extend: {
            spacing: () => Record<string, string>;
            fontSize: () => Record<string, string>;
            fontWeight: () => Record<string, string | number>;
        };
        _fontWeight?: Record<string, (string | number)[]>;
        fontFamily?: Record<string, string[]>;
        fontSizeResponsive?: import("./types/theme-config").ResponsiveType;
        spacingResponsive?: import("./types/theme-config").ResponsiveType;
        content?: import("tailwindcss/types/config").ContentConfig | undefined;
        important?: Partial<import("tailwindcss/types/config").ImportantConfig> | undefined;
        prefix?: string | undefined;
        separator?: string | undefined;
        safelist?: import("tailwindcss/types/config").SafelistConfig[] | undefined;
        blocklist?: string[] | undefined;
        presets?: Partial<import("tailwindcss/types/config").Config>[] | undefined;
        future?: Partial<import("tailwindcss/types/config").FutureConfig> | undefined;
        experimental?: Partial<import("tailwindcss/types/config").ExperimentalConfig> | undefined;
        darkMode?: Partial<import("tailwindcss/types/config").DarkModeConfig> | undefined;
        theme?: Partial<import("tailwindcss/types/config").CustomThemeConfig & {
            extend: Partial<import("tailwindcss/types/config").CustomThemeConfig>;
        }> | undefined;
        corePlugins?: Partial<import("tailwindcss/types/config").CorePluginsConfig> | undefined;
        plugins?: (import("tailwindcss/types/config").PluginCreator | {
            handler: import("tailwindcss/types/config").PluginCreator;
            config?: Partial<import("tailwindcss/types/config").Config> | undefined;
        } | {
            (options: any): {
                handler: import("tailwindcss/types/config").PluginCreator;
                config?: Partial<import("tailwindcss/types/config").Config> | undefined;
            };
            __isOptionsFunction: true;
        } | undefined)[] | undefined;
    };
    safelist: string[];
    plugins: any[];
};
