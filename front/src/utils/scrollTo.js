/**
 * Scrolls to a section while accounting for the fixed nav
 */
export const scrollToSection = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  const topOffset = element ? element.offsetTop - 88 : 0;
  if (!element) return;
  window.scrollTo({ top: topOffset, behavior: "smooth" });
};
