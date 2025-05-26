import { getVariable } from "../getVariable";
import { getConfig } from "./config-context";
export const getAutoResponsiveUtilities = (baseName) => {
    const themeConfig = getConfig() || {};
    const baseValues = themeConfig[baseName];
    const responsiveBaseName = baseName[0] === '_' ? `${baseName}Responsive` : `_${baseName}Responsive`;
    const responsive = themeConfig[responsiveBaseName];
    const responsiveOverrides = {};
    const appliedOverrides = new Set();
    // Sort screen keys by their max value in descending order
    const sortedScreens = Object.entries(themeConfig.screens)
        .filter(([, value]) => value.max)
        .sort((a, b) => parseInt(b[1].max) - parseInt(a[1].max));
    sortedScreens.forEach(([screenKey, screen]) => {
        const responsiveValues = responsive[screenKey];
        if (responsiveValues) {
            const overrides = Object.entries(responsiveValues).reduce((acc, [key, value]) => {
                const override = `${key}:${value}`;
                // Only add if the value is different from the default, key/value are different,
                // and this override hasn't been applied in a larger breakpoint
                if (value !== baseValues[key] &&
                    key !== value.replace('px', '') &&
                    !appliedOverrides.has(override)) {
                    acc[getVariable(baseName, key)] = value;
                    appliedOverrides.add(override);
                }
                return acc;
            }, {});
            // Only add media query if there are overrides
            if (Object.keys(overrides).length > 0) {
                responsiveOverrides[`@media (max-width: ${screen.max})`] = {
                    ':root': overrides
                };
            }
        }
    });
    return responsiveOverrides;
};
