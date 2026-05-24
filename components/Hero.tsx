'use client'

import { motion } from 'framer-motion'
import { ScrollCue } from './ScrollCue'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function Hero() {
    return (
        <section
            id="bio"
            className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20 pb-12"
        >
            <motion.div
                className="max-w-4xl text-center"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
            >
                {/* Main Headline */}
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-bone mb-6 tracking-tighter leading-tight"
                    variants={fadeInUp}
                >
                    Haitham
                    <br />
                    Akil
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="text-lg md:text-xl text-gold tracking-wide mb-8"
                    variants={fadeInUp}
                >
                    Videographer & Editor
                </motion.p>

                {/* Bio */}
                <motion.div
                    className="max-w-2xl mx-auto mb-12"
                    variants={fadeInUp}
                >
                    <p className="text-sm md:text-base text-bone/80 leading-relaxed">
                        I am Haitham, a videographer and editor focused on cinematic storytelling. I bring a modern eye to color grading, editing, motion graphics, social reels, promos, and event coverage — turning footage into something worth watching twice.


                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="w-12 h-px bg-gold mx-auto mb-12"
                    variants={fadeInUp}
                />

                {/* Scroll Cue */}
                <motion.div variants={fadeInUp}>
                    <ScrollCue />
                </motion.div>
            </motion.div>
        </section>
    )
}
