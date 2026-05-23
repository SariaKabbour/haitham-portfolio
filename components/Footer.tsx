'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-24 px-6 bg-ink border-t border-gold/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Links */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.a
              href="mailto:haytham963akeel@gmail.com"
              className="text-2xl md:text-3xl font-serif text-gold hover:text-gold-2 relative group"
              variants={fadeInUp}
            >
              Email
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </motion.a>

            <motion.div
              className="w-px h-8 bg-gold/20"
              variants={fadeInUp}
            />

            <motion.a
              href="https://www.instagram.com/haitham_hybrid?igsh=anV4ZTN1ZmVpYmVz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl font-serif text-gold hover:text-gold-2 relative group"
              variants={fadeInUp}
            >
              Instagram
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            className="text-xs text-mute tracking-widest uppercase"
            variants={fadeInUp}
          >
            © 2026 Haitham Akil
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
