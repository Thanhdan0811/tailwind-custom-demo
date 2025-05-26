import * as spacing from "./spacing";
/**
 * Tailwind theme config
 */
export const themeConfigFunc = (config) => {
    return {
        backgroundImage: { ...config.backgroundImage },
        colors: { ...config.colors },
        fontFamily: { ...config.fontFamily },
        // assign available font weight for each font family here
        // example output: font-primary-400
        _fontWeight: { ...config.fontWeight },
        fontSize: {
            ...config.fontSize,
            // sample usage with function
            // body: getFontSize(15),
        },
        _fontSizeResponsive: { ...config.fontSizeResponsive },
        spacing: {
            // Create new spacing
            // key: value
            // Create new spacing that use auto responsive variable
            // key: getVar(spacing.baseSpacing["104"])
            // Add base spacings (fixed value)
            // the list of spacing values can be found in presets/spacing.mjs
            // we manage the spacing values in another file as it can be quite long
            ...spacing.baseSpacing,
            ...config.spacing,
        },
        // Add auto responsive values here
        // space.responsive-gap-container
        _spacingResponsive: {
            md: { ...spacing.responsive?.md, ...config.spacingResponsive?.md },
            sm: { ...spacing.responsive?.sm, ...config.spacingResponsive?.sm },
            xs: { ...spacing.responsive?.xs, ...config.spacingResponsive?.xs },
        },
        _container: { ...config.container },
        screens: { ...config.screens },
        _variants: { ...config.variants },
    };
};
