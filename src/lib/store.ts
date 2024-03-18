import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export let lineRainbowStore: Writable<boolean> = writable(false);
export const themeStore = writable('light'); // 'light' или 'dark'

// Функция для изменения темы
export function toggleTheme() {
    themeStore.update(current => current === 'light' ? 'dark' : 'light');
}

// Проверка предпочтений системы на старте приложения
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
themeStore.set(prefersDark ? 'dark' : 'light');

// Слушатель для изменений предпочтений системы
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    themeStore.set(e.matches ? 'dark' : 'light');
});