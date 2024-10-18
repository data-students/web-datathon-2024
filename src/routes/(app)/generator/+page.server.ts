export function load() {
    const combination = [...Array(8)]
        .map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random() * 36)])
        .join('');

    return {
        combination
    };
}