// import {themeConfig} from "../theme.config.mjs";
import { getConfig } from "./config-context";
import { getVariable } from "../getVariable";
/**
 * Create a set of base tailwind values (for suggestions, completions)
 * These values use custom CSS variables to allow for easy customization
 * Value that are references to CSS variables are skipped
 * E.g.
 * {1:1px} => {responsive-1:var(--vii-spacing-1);}
 * {2:2px} => {responsive-2:var(--vii-spacing-2);}
 * {3:var(--)} => skipped
 * {default:var(--)} => skipped
 *
 * @param baseName
 * @param postfix
 * @returns {{}}
 */
export const getAutoResponsiveBase = (baseName, postfix = '') => {
    const themeConfig = getConfig() || {};
    const baseValues = themeConfig[baseName];
    const names = {};
    // each base value will have a responsive variant
    Object.entries(baseValues).forEach(([key, value]) => {
        // check if value is raw or reference to a variable
        const isVariable = value.startsWith('var(--');
        // if it's a variable, skip
        if (isVariable) {
            return;
        }
        names[`responsive-${key}${postfix}`] = `var(${getVariable(baseName, key)})`;
    });
    return names;
};
