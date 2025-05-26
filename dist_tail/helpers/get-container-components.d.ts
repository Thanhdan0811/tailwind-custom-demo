import { CustomThemeConfig } from "tailwindcss/types/config";
type ThemeType = Partial<CustomThemeConfig & {
    extend: Partial<CustomThemeConfig>;
}> | undefined;
export declare const getContainerComponents: (theme: ThemeType) => any;
export {};
