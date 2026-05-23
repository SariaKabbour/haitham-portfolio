/**
 * Framer Motion animation variants
 * Follows design system: easing [0.22, 1, 0.36, 1] (ease-out-expo)
 */

const easing = [0.22, 1, 0.36, 1]

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: easing,
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.6,
    ease: easing,
  },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: easing,
  },
}

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.3, ease: easing },
}

export const underlineAnimation = {
  initial: { width: 0 },
  animate: { width: '100%' },
  transition: { duration: 0.4, ease: easing },
}
