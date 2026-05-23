'use client'

import { motion } from 'framer-motion'

export function ScrollCue() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="text-xs text-mute tracking-widest uppercase">Scroll</div>
      <motion.div
        className="w-px h-6 bg-gradient-to-b from-gold to-transparent"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  )
}
