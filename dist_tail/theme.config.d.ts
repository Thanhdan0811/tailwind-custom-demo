import { ConfigType } from "./types/theme-config";
/**
 * Tailwind theme config
 */
export declare const themeConfigFunc: (config: ConfigType) => {
    backgroundImage: any;
    colors: any;
    fontFamily: any;
    _fontWeight: any;
    fontSize: any;
    _fontSizeResponsive: {
        [key: string]: Record<string, string>;
        xs?: Record<string, string>;
        sm?: Record<string, string>;
        md?: Record<string, string>;
    };
    spacing: any;
    _spacingResponsive: {
        md: {
            [x: string]: string;
        };
        sm: {
            [x: string]: string;
        };
        xs: {
            [x: string]: string;
        };
    };
    _container: any;
    screens: any;
    _variants: any;
};
