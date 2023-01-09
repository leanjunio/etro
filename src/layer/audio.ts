// TODO: rename to something more consistent with the naming convention of Visual and VisualSourceMixin

import { AudioSource, AudioSourceOptions } from './audio-source'

interface AudioOptions extends Omit<AudioSourceOptions, 'source'> {
  /**
   * The raw html `<audio>` element
   */
  source: HTMLAudioElement
}

/**
 * Layer for an HTML audio element
 * @extends AudioSource
 */
class Audio extends AudioSource {
  /**
   * The raw html `<audio>` element
   */
  source: HTMLAudioElement

  /**
   * Creates an audio layer
   */
  constructor (options: AudioOptions) {
    super(options)

    if (this.duration === undefined) {
      this.duration = (this).source.duration - this.sourceStartTime
    }
  }

  /**
   * @deprecated See {@link https://github.com/etro-js/etro/issues/131}
   */
  getDefaultOptions () {
    return {
      ...Object.getPrototypeOf(this).getDefaultOptions(),
      /**
       * @name module:layer.Audio#sourceStartTime
       * @desc Where in the media to start playing when the layer starts
       */
      sourceStartTime: 0,
      duration: undefined
    }
  }
}

export { Audio, AudioOptions }
