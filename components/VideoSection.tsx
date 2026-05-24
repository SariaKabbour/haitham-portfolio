'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { VideoTile } from './VideoTile'
import { VideoLightbox } from './VideoLightbox'
import { getVideosByCategory } from '@/data/videos'
import type { VideoSource } from '@/data/videos'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export function VideoSection() {
    const [selectedVideo, setSelectedVideo] = useState<VideoSource | null>(null)
    const videos = getVideosByCategory('videography')
    const heroVideo = videos[0]

    if (!heroVideo) return null

    return (
        <section id="videography" className="w-full py-24 px-6 bg-ink">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-bone mb-4"
                        variants={fadeInUp}
                    >
                        Videography
                    </motion.h2>
                    <motion.div
                        className="w-12 h-px bg-gold"
                        variants={fadeInUp}
                    />
                    <motion.p
                        className="text-sm text-mute mt-6 tracking-wide italic"
                        variants={fadeInUp}
                    >
                        Featured cinematic work
                    </motion.p>
                </motion.div>

                {/* Hero Video - Centered with Letterbox Effect */}
                <motion.div
                    className="flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Ambient Glow Background */}
                    <div className="absolute inset-0 mx-auto w-full max-w-2xl h-96 bg-gradient-radial from-gold/10 to-transparent pointer-events-none blur-3xl" />

                    {/* Video Container */}
                    <div className="relative w-full max-w-sm">
                        <VideoTile
                            video={heroVideo}
                            onClick={() => setSelectedVideo(heroVideo)}
                        />
                    </div>
                </motion.div>
            </div>

            <VideoLightbox
                video={selectedVideo}
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </section>
    )
}
