/**
 * Web Audio API sound effects — no external files needed.
 * Uses AudioContext + OscillatorNode for all sounds.
 */

let muted = false
try { muted = localStorage.getItem('mult_sound_muted') === 'true' } catch {}

export function isMuted() { return muted }
export function toggleMute() {
  muted = !muted
  try { localStorage.setItem('mult_sound_muted', muted) } catch {}
  return muted
}

function beep(freq, type, duration, vol = 0.3) {
  if (muted) return
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = freq
    osc.type = type
    gain.gain.setValueAtTime(vol * 0.5, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    osc.start()
    osc.stop(ctx.currentTime + duration)
  } catch {}
}

export const playSound = (type) => {
  switch (type) {
    case 'correct':
      beep(880, 'sine', 0.25)
      break
    case 'wrong':
      beep(220, 'sawtooth', 0.35)
      break
    case 'monster_die':
      beep(440, 'square', 0.3)
      break
    case 'star_earned':
      beep(660, 'sine', 0.15)
      setTimeout(() => beep(880, 'sine', 0.15), 100)
      break
    case 'complete': {
      if (muted) return
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)()
        const notes = [261, 294, 329, 349, 392]
        notes.forEach((freq, i) => {
          const o = ctx.createOscillator()
          const g = ctx.createGain()
          o.connect(g); g.connect(ctx.destination)
          o.frequency.value = freq
          o.type = 'sine'
          g.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.12)
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.15)
          o.start(ctx.currentTime + i * 0.12)
          o.stop(ctx.currentTime + i * 0.12 + 0.15)
        })
      } catch {}
      break
    }
    default:
      break
  }
}
