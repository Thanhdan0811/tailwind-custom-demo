import { getConfig } from "./config-context";
export const getContainerComponents = (theme) => {
    const themePrefix = getConfig()?.prefix || "";
    if (theme?._container) {
        const gapSideVar = `--${themePrefix}gap-side`;
        const containerVars = {};
        const containerClass = {};
        const gapContainer = 'theme(space.responsive-gap-container)';
        const containerProps = {
            position: 'relative',
            maxWidth: 'unset',
            width: '100%',
            paddingLeft: gapContainer,
            paddingRight: gapContainer,
            marginLeft: 'auto',
            marginRight: 'auto',
        };
        Object.entries(theme?._container).forEach(([name, width]) => {
            const postfix = name === 'default' ? '' : `-${name}`;
            const containerVarName = `--${themePrefix}container${postfix}`;
            const gapSide = `clamp(${gapContainer}, (var(--100vw, 100vw) - var(${containerVarName}) - (${gapContainer} * 2)) / 2, 100vw)`;
            containerVars[containerVarName] = width;
            containerVars[`${gapSideVar}${postfix}`] = gapSide;
            if (name !== 'default') {
                containerClass[`.container-${name}`] = {
                    ...containerProps,
                    maxWidth: width,
                };
                containerClass[`.container-${name}`][gapSideVar] = `var(${gapSideVar}${postfix});`;
            }
        });
        // container fluid
        containerClass[`.container-fluid`] = {
            ...containerProps
        };
        containerClass[`.container-fluid`][gapSideVar] = gapContainer;
        return {
            ':root': containerVars,
            ...containerClass
        };
    }
};
