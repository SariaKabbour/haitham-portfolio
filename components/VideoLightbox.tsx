'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { VideoSource } from '@/data/videos'

interface VideoLightboxProps {
    video: VideoSource | null
    isOpen: boolean
    onClose: () => void
}

export function VideoLightbox({ video, isOpen, onClose }: VideoLightboxProps) {
    useEffect(() => {
        if (!isOpen) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && video && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-ink/95 z-50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-bone hover:text-gold transition-colors z-10 pointer-events-auto"
                            aria-label="Close video"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Video Container — constrained to viewport */}
                        <div className="relative flex items-center justify-center pointer-events-auto">
                            {video.type === 'local' ? (
                                <video
                                    key={video.id}
                                    className="max-h-[90vh] max-w-[95vw] w-auto h-auto"
                                    controls
                                    autoPlay
                                    playsInline
                                    poster={video.poster ? `/posters/${video.poster}` : undefined}
                                >
                                    <source src={`/videos/${video.src}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <div className="relative w-[90vw] max-w-4xl aspect-video">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://player.vimeo.com/video/${video.src}`}
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        title={video.label || 'Video'}
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}