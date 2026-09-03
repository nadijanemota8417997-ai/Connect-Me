/**
 * DUA Accessibility: Text-to-Speech (Leitura em voz alta) and Voice Commands (Comandos de voz).
 */

// Speech Synthesis (Leitura em voz alta)
export class SpeechService {
  private static isSpeaking: boolean = false;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static onStateChangeListeners: ((speaking: boolean) => void)[] = [];

  public static subscribe(listener: (speaking: boolean) => void) {
    this.onStateChangeListeners.push(listener);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter(l => l !== listener);
    };
  }

  private static notify(speaking: boolean) {
    this.isSpeaking = speaking;
    this.onStateChangeListeners.forEach(l => l(speaking));
  }

  public static speak(text: string, rate: number = 1.0, onEnd?: () => void) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    this.stop();

    if (!text || text.trim() === '') return;

    // Clean text from markdown or special characters for clean pronunciation
    const cleanText = text.replace(/[*_#`~]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Select natural PT-BR voice if available
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.startsWith('pt') || v.lang === 'pt_BR' || v.lang === 'pt-BR');
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onstart = () => {
      this.notify(true);
    };

    utterance.onend = () => {
      this.notify(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.notify(false);
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public static stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.notify(false);
    }
  }

  public static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }
}

// Voice Recognition types
interface IWindowSpeech extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export type VoiceCommandHandler = (command: string) => void;

export class VoiceRecognitionService {
  private static recognition: any = null;
  private static isListening: boolean = false;
  private static onResultCallback: VoiceCommandHandler | null = null;
  private static onStatusCallback: ((listening: boolean, transcript: string) => void) | null = null;

  public static isSupported(): boolean {
    if (typeof window === 'undefined') return false;
    const win = window as unknown as IWindowSpeech;
    return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
  }

  public static init() {
    if (!this.isSupported()) return;
    const win = window as unknown as IWindowSpeech;
    const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!this.recognition) {
      this.recognition = new SpeechRec();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'pt-BR';

      this.recognition.onstart = () => {
        this.isListening = true;
        if (this.onStatusCallback) this.onStatusCallback(true, '');
      };

      this.recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        transcript = transcript.toLowerCase().trim();

        if (this.onStatusCallback) {
          this.onStatusCallback(true, transcript);
        }

        if (this.onResultCallback) {
          this.onResultCallback(transcript);
        }
      };

      this.recognition.onerror = (err: any) => {
        console.warn('Speech recognition error/pause:', err);
        this.isListening = false;
        if (this.onStatusCallback) this.onStatusCallback(false, '');
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.onStatusCallback) this.onStatusCallback(false, '');
      };
    }
  }

  public static startListening(onCommand: VoiceCommandHandler, onStatus?: (listening: boolean, transcript: string) => void) {
    this.init();
    if (!this.recognition) return;

    this.onResultCallback = onCommand;
    this.onStatusCallback = onStatus || null;

    try {
      this.recognition.start();
    } catch (e) {
      // recognition might already be active
    }
  }

  public static stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
    }
    this.isListening = false;
    if (this.onStatusCallback) this.onStatusCallback(false, '');
  }

  public static isCurrentlyListening(): boolean {
    return this.isListening;
  }
}
