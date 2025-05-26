let sharedConfig = {};
export function setConfig(config) {
    sharedConfig = config;
}
export function getConfig() {
    return sharedConfig;
}
