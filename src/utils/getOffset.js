export const getOffset = (el) => {
    if (el == null) return;

    const rect = el.getBoundingClientRect();

    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
    };
}