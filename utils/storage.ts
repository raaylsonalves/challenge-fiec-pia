export default {
    get: (key: string) => {
        const json = localStorage.getItem(import.meta.env.VITE_STORAGE_PREFIX + key)
        try {
            if (!json) return json
            return JSON.parse(json)
        } catch {
            return json
        }
    },
    set: (key: string, value: string) => {
        const json = JSON.stringify(value)
        localStorage.setItem(import.meta.env.VITE_STORAGE_PREFIX + key, json)
    }
}