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
export declare const getAutoResponsiveBase: (baseName: string, postfix?: string) => Record<string, string>;
