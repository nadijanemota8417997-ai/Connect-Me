/**
 * Web Audio API procedural sound synthesizer.
 * Produces crisp, accessible feedback without external asset dependencies.
 */

export interface SoundEvent {
  title: string;
  icon: string;
  description: string;
  type: 'info' | 'success' | 'empathy' | 'warning' | 'fanfare';
}

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;
  private listeners: ((event: SoundEvent) => void)[] = [];

  constructor() {
    // Lazy AudioContext initialization on first interaction to respect browser autoplay policies
  }

  public subscribe(listener: (event: SoundEvent) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private emitSoundEvent(event: SoundEvent) {
    this.listeners.forEach(cb => cb(event));
  }

  private getContext(): AudioContext | null {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public playClick() {
    this.emitSoundEvent({
      title: 'Clique / Seleção',
      icon: '🔘',
      description: 'Som sutil de toque',
      type: 'info'
    });
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(850, ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  }

  public playSuccess() {
    this.emitSoundEvent({
      title: 'Ação Positiva / Sucesso',
      icon: '✨',
      description: 'Acorde harmonioso de avanço',
      type: 'success'
    });
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 arpeggio

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.25);
    });
  }

  public playEmpathyGain() {
    this.emitSoundEvent({
      title: '+ Pontos de Empatia',
      icon: '💖',
      description: 'Sinal sonoro de empatia e conexão',
      type: 'empathy'
    });
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  public playWarning() {
    this.emitSoundEvent({
      title: 'Atenção / Consequência',
      icon: '⚠️',
      description: 'Alerta sonoro de tensão no grupo',
      type: 'warning'
    });
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.linearRampToValueAtTime(200, now + 0.18);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.23);
  }

  public playBadgeFanfare() {
    this.emitSoundEvent({
      title: '🏆 Nova Medalha Conquistada!',
      icon: '🎉',
      description: 'Fanfarra comemorativa de conquista',
      type: 'fanfare'
    });
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Fanfare chords
    const notes = [
      { freq: 523.25, time: 0.0, dur: 0.12 }, // C5
      { freq: 659.25, time: 0.12, dur: 0.12 }, // E5
      { freq: 783.99, time: 0.24, dur: 0.12 }, // G5
      { freq: 1046.5, time: 0.38, dur: 0.45 }, // C6
      { freq: 1318.51, time: 0.38, dur: 0.45 }, // E6
    ];

    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0, now + n.time);
      gain.gain.linearRampToValueAtTime(0.18, now + n.time + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur + 0.05);
    });
  }
}

export const sounds = new SoundSynthesizer();
