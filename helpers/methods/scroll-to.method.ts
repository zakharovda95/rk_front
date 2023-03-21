import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
export function scrollTo(to: string): void {
  gsap.to(window, { duration: 2, scrollTo: to });
}
