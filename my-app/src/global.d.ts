export {};

declare global {
    interface Window {
        ymaps: any; // Используйте более конкретный тип, если доступен
    }
}
