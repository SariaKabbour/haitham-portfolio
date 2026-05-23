/**
 * Video Configuration — Single Source of Truth
 * 
 * Edit this file to swap videos between local and Vimeo
 * Change `type: 'local'` to `type: 'vimeo'` and update the src
 */

export type VideoAspect = '9/16' | '16/9'

export interface VideoSource {
    id: string
    type: 'local' | 'vimeo'
    src: string // filename (local) or Vimeo ID (vimeo)
    poster?: string // filename in /public/posters/
    aspect: VideoAspect
    label?: string
    category: 'reels-motion' | 'editing' | 'videography'
}

export const videos: VideoSource[] = [
    // Reels & Motion (3 reels, 9:16)
    {
        id: 'sec2-1',
        type: 'local',
        src: 'sec2-1.mp4',
        poster: 'sec2-1.jpg',
        aspect: '9/16',
        category: 'reels-motion',
        label: 'Reel 01',
    },
    {
        id: 'sec2-2',
        type: 'local',
        src: 'sec2-2.mp4',
        poster: 'sec2-2.jpg',
        aspect: '9/16',
        category: 'reels-motion',
        label: 'Reel 02',
    },
    {
        id: 'sec2-3',
        type: 'local',
        src: 'sec2-3.mp4',
        poster: 'sec2-3.jpg',
        aspect: '9/16',
        category: 'reels-motion',
        label: 'Reel 03',
    },

    // Editing (6 reels, 9:16)
    {
        id: 'sec3-1',
        type: 'local',
        src: 'sec3-1.mp4',
        poster: 'sec3-1.jpg',
        aspect: '9/16',
        category: 'editing',
        label: 'Edit 01',
    },
    {
        id: 'sec3-2',
        type: 'local',
        src: 'sec3-2.mp4',
        poster: 'sec3-2.jpg',
        aspect: '9/16',
        category: 'editing',
        label: 'Edit 02',
    },
    {
        id: 'sec3-3',
        type: 'local',
        src: 'sec3-3.mp4',
        poster: 'sec3-3.jpg',
        aspect: '9/16',
        category: 'editing',
        label: 'Edit 03',
    },
    {
        id: 'sec3-4',
        type: 'local',
        src: 'sec3-4.mp4',
        poster: 'sec3-4.jpg',
        aspect: '9/16',
        category: 'editing',
        label: 'Edit 04',
    },
    {
        id: 'sec3-5',
        type: 'local',
        src: 'sec3-5.mp4',
        poster: 'sec3-5.jpg',
        aspect: '9/16',
        category: 'editing',
        label: 'Edit 05',
    },
    {
        id: 'sec3-6',
        type: 'local',
        src: 'sec3-6.mp4',
        poster: 'sec3-6.jpg',
        aspect: '9/16',
        category: 'editing',
        label: 'Edit 06',
    },

    // Videography (1 hero reel, 9:16)
    {
        id: 'sec4',
        type: 'local',
        src: 'sec4.mp4',
        poster: 'sec4.jpg',
        aspect: '9/16',
        category: 'videography',
        label: 'Featured Video',
    },
]

export const getVideosByCategory = (category: VideoSource['category']) =>
    videos.filter((v) => v.category === category)