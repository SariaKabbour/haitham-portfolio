/**
 * Utility functions
 */

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const getAspectRatioPadding = (aspect: '9/16' | '16/9') => {
  if (aspect === '9/16') return 'pt-[177.78%]' // 16 / 9 = 1.777...
  return 'pt-[56.25%]' // 9 / 16 = 0.5625
}

export const getVideoUrl = (type: 'local' | 'vimeo', src: string): string => {
  if (type === 'local') {
    return `/videos/${src}`
  }
  // Vimeo is handled via iframe, not direct URL
  return ''
}
