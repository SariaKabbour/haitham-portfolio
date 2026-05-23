'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'bio', label: 'Bio' },
  { id: 'reels-motion', label: 'Reels & Motion' },
  { id: 'editing', label: 'Editing' },
  { id: 'videography', label: 'Videography' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('bio')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveSection(id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink/80 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo/Wordmark */}
        <motion.div
          className="text-bone font-serif text-xl tracking-widest font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold">HA</span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(id)
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="relative text-sm text-bone hover:text-gold transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                  layoutId="activeLink"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button (placeholder for expansion) */}
        <div className="md:hidden flex items-center gap-4">
          <button aria-label="Menu" className="text-bone">
            ☰
          </button>
        </div>
      </div>
    </nav>
  )
}
