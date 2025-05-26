import { getConfig } from "./config-context";
import { getVariable } from "../getVariable";
export const getCustomCSSVariables = (baseName) => {
    const themeConfig = getConfig() || {};
    // Create base variables
    const baseVars = {};
    const baseValues = themeConfig[baseName];
    Object.entries(baseValues).forEach(([key, value]) => {
        if (baseName === 'fontFamily' && Array.isArray(value)) {
            value = value.join(', ');
        }
        baseVars[getVariable(baseName, key)] = value;
    });
    return { ':root': baseVars };
};
