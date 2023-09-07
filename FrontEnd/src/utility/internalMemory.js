/**
 * @param {function} internalMemory.save
 */
export const internalMemory = {
    /**
     * Save value on local storage
     * @param {string} name target name
     * @param {*} value value to save
     */
    save: (name, value) => {
        if(typeof name !== "string") throw new Error("Name must be a valid string!")
        if(value === undefined) throw new Error("Value must be specified!")
        localStorage.setItem(name, JSON.stringify(value));
    },
    get: (name) => {
        if(typeof name !== "string") throw new Error("Name must be a valid string!")
        return JSON.parse(localStorage.getItem(name))
    },
    remove: (name) => {
        if(typeof name !== "string") throw new Error("Name must be a valid string!")
        localStorage.removeItem(name)
    }
};