import { create } from 'zustand'

const useStore = create((set) => ({
  // Scroll position for animations
  scrollY: 0,
  setScrollY: (position) => set({ scrollY: position }),
  
  // Audio player state
  currentTrack: null,
  isPlaying: false,
  setCurrentTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
  
  // Mobile menu state
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  closeMenu: () => set({ menuOpen: false }),
  
  // Video modal state
  currentVideo: null,
  videoModalOpen: false,
  openVideoModal: (videoId) => set({ currentVideo: videoId, videoModalOpen: true }),
  closeVideoModal: () => set({ videoModalOpen: false }),
  
  // Newsletter subscription
  email: '',
  subscriptionStatus: null, // 'pending', 'success', 'error'
  setEmail: (email) => set({ email }),
  submitSubscription: () => {
    set({ subscriptionStatus: 'pending' })
    // Simulate API call
    setTimeout(() => {
      set({ subscriptionStatus: 'success', email: '' })
      setTimeout(() => {
        set({ subscriptionStatus: null })
      }, 3000)
    }, 1500)
  }
}))

export default useStore