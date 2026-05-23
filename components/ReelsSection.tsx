'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { VideoTile } from './VideoTile'
import { VideoLightbox } from './VideoLightbox'
import { getVideosByCategory } from '@/data/videos'
import type { VideoSource } from '@/data/videos'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export function ReelsSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoSource | null>(null)
  const videos = getVideosByCategory('reel')

  return (
    <section id="reels" className="w-full py-24 px-6 bg-ink-2">
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
            Instagram Reels
          </motion.h2>
          <motion.div
            className="w-12 h-px bg-gold"
            variants={fadeInUp}
          />
        </motion.div>

        {/* Grid - 3 up */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          {videos.map((video, index) => (
            <div key={video.id} className="relative">
              <VideoTile
                video={video}
                index={index}
                onClick={() => setSelectedVideo(video)}
              />
              {/* Instagram Badge */}
              <motion.div
                className="absolute top-2 right-2 text-gold text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                📷
              </motion.div>
            </div>
          ))}
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
