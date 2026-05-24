import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import type { VideoSource } from '@/data/videos'

interface VideoTileProps {
    video: VideoSource
    onClick?: () => void
    index?: number
}

export function VideoTile({ video, onClick, index = 0 }: VideoTileProps) {
    const [isHovered, setIsHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const aspectClass =
        video.aspect === '9/16' ? 'aspect-[9/16]' : 'aspect-video'

    if (video.type === 'vimeo') {
        return (
            <motion.div
                className={`relative ${aspectClass} rounded-sm overflow-hidden cursor-pointer group`}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={onClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="w-full h-full bg-ink-2 flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-colors">
                    <span className="text-gold text-sm">▶ Vimeo</span>
                </div>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 border border-gold/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                )}
            </motion.div>
        )
    }

    return (
        <motion.div
            className={`relative ${aspectClass} rounded-sm overflow-hidden cursor-pointer group`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={video.poster ? `/posters/${video.poster}` : undefined}
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
            >
                <source src={`/videos/${video.src}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                className="absolute inset-0 border border-gold pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
                <motion.div
                    className="text-bone text-lg"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                >
                    ▶
                </motion.div>
            </motion.div>
        </motion.div>
    )
}