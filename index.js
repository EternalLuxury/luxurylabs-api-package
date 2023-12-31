const axios = require('axios');
const fs = require('fs');

class LuxuryLabs {
  constructor() {
    this.baseURL = 'https://the-net.loves-genshin.lol';
  }

  async makeRequest(endpoint, method = 'GET', params = {}) {
    try {
      const response = await axios({
        method,
        url: `${this.baseURL}${endpoint}`,
        params,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Error making request to ${endpoint}: ${error.message}`);
    }
  }


  async chatWithGPT3_5(options = {}) {
    if (!options.prompt) {
      throw new Error('Prompt is required for chatWithGPT3_5');
    }

    const endpoint = '/ai-chat/gpt-3-5';
    return this.makeRequest(endpoint, 'GET', { prompt: options.prompt, content: options.content });
  }


  async imageGenerationProdia(options = {}) {
    if (!options.query) {
      throw new Error('Query is required for imageGenerationProdia');
    }

    const endpoint = '/ai-image/prodia';
    return this.makeRequest(endpoint, 'GET', { query: options.query });
  }

  async imageGenerationQuantumCanvas(options = {}) {
    if (!options.query) {
      throw new Error('Query is required for imageGenerationQuantumCanvas');
    }

    const endpoint = '/ai-image/quantumcanvas';
    return this.makeRequest(endpoint, 'GET', { query: options.query });
  }

  async imageGenerationFusionBrain(options = {}) {
    if (!options.query) {
      throw new Error('Query is required for imageGenerationFusionBrain');
    }

    const endpoint = '/ai-image/fusionbrain';
    return this.makeRequest(endpoint, 'GET', { query: options.query });
  }

  async nsfwDetector(options = {}) {
    if (!options.url) {
      throw new Error('URL is required for nsfwDetector');
    }

    const endpoint = '/nsfw-detector';
    const params = {
      url: options.url,
      sexy_threshold: options.sexyThreshold,
      porn_threshold: options.pornThreshold,
      hentai_threshold: options.hentaiThreshold,
      checks: options.checks,
    };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async getDiscordUser(options = {}) {
    if (!options.userId) {
      throw new Error('UserID is required for getDiscordUser');
    }

    const endpoint = '/get-discord-user';
    const params = { user_id: options.userId };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async tikTokVideoInformation(options = {}) {
    if (!options.url) {
      throw new Error('URL is required for tikTokVideoInformation');
    }

    const endpoint = '/information/tiktok';
    const params = { url: options.url };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async robloxUserInfo(options = {}) {
    if (!options.username) {
      throw new Error('Username is required for robloxUserInfo');
    }

    const endpoint = '/information/roblox-user-info';
    const params = { username: options.username };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async minecraftUserInfo(options = {}) {
    if (!options.username) {
      throw new Error('Username is required for minecraftUserInfo');
    }

    const endpoint = '/information/minecraft-user-info';
    const params = { username: options.username };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async youtubeVideoDownload(options = {}) {
    if (!options.videoUrl) {
      throw new Error('Video URL is required for youtubeVideoDownload');
    }

    const endpoint = '/download/youtube';
    const params = { video_url: options.videoUrl };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async spotifyTrackSearch(options = {}) {
    if (!options.trackName) {
      throw new Error('Track Name is required for spotifyTrackSearch');
    }

    const endpoint = '/download/spotify';
    const params = { track_name: options.trackName };
    return this.makeRequest(endpoint, 'GET', params);
  }

  async randomQuestions() {
    const endpoint = '/random-questions';
    return this.makeRequest(endpoint, 'GET');
  }

  async neko() {
    const endpoint = '/neko';
    return this.makeRequest(endpoint, 'GET');
  }

  async randomFacts() {
    const endpoint = '/facts';
    return this.makeRequest(endpoint, 'GET');
  }

  async textToSpeech(options = {}) {
    if (!options.text) {
      throw new Error('Text is required for textToSpeech');
    }

    if (!options.outputFile) {
      throw new Error('Output file is required for textToSpeech');
    }

    const endpoint = '/text-to-speech';
    const params = {
      text: options.text,
      lang: options.lang || 'en',
      slow: options.slow || false,
    };

    try {
      const response = await axios({
        method: 'GET',
        url: `${this.baseURL}${endpoint}`,
        params,
        responseType: 'arraybuffer',
      });

      fs.writeFileSync(options.outputFile, Buffer.from(response.data), 'binary');
      console.log(`Audio file saved to: ${options.outputFile}`);

      return response.data;
    } catch (error) {
      throw new Error(`Error making request to ${endpoint}: ${error.message}`);
    }
  }

  async mergeImages(options = {}) {
    if (!options.imageUrl1) {
      throw new Error('Image URL 1 is required for mergeImages');
    }

    if (!options.imageUrl2) {
      throw new Error('Image URL 2 is required for mergeImages');
    }

    const endpoint = '/merge-images';
    const params = {
      image_url1: options.imageUrl1,
      image_url2: options.imageUrl2,
    };

    return this.makeRequest(endpoint, 'GET', params);
  }
}


module.exports = LuxuryLabs;