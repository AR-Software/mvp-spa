export default function trigerAnimationOnScroll(element) {
    const scrolled = window.scrollTop;
    const win_height_padded = window.height * 1.1;
    const offsetTop = element.offsetTop;
    return scrolled + win_height_padded > offsetTop
}