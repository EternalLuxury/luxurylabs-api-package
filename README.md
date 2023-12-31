# LuxuryLabs NPM Package

LuxuryLabs is an npm package that provides a set of functionalities related to AI, image generation, content information retrieval, and more.

## Installation

```bash
npm install luxurylabs-api
```

## Usage

```javascript
const LuxuryLabs = require('luxurylabs-api');
const luxuryLabs = new LuxuryLabs();
```

## Endpoints

### `chatWithGPT3_5`

Generates a chat response using the GPT-3.5 model.

```javascript
const response = await luxuryLabs.chatWithGPT3_5({ prompt: 'Hello, GPT-3.5!', content: 'Personality and information for the AI' });
```

- **Required Parameters:**
  - `prompt`: The text prompt for the chat.

- **Optional Parameters:**
  - `content`: Additional content for the chat.

### `imageGenerationProdia`

Generates an image using the Prodia AI model.

```javascript
const response = await luxuryLabs.imageGenerationProdia({ query: 'Mountain landscape' });
```

- **Required Parameters:**
  - `query`: The image generation query.

### `imageGenerationQuantumCanvas`

Generates an image using the QuantumCanvas AI model.

```javascript
const response = await luxuryLabs.imageGenerationQuantumCanvas({ query: 'Abstract art' });
```

- **Required Parameters:**
  - `query`: The image generation query.

### `imageGenerationFusionBrain`

Generates an image using the FusionBrain AI model.

```javascript
const response = await luxuryLabs.imageGenerationFusionBrain({ query: 'Neural network' });
```

- **Required Parameters:**
  - `query`: The image generation query.

### `nsfwDetector`

Detects NSFW content in an image.

```javascript
const response = await luxuryLabs.nsfwDetector({
  url: 'https://example.com/image.jpg',
  sexyThreshold: 40,
  pornThreshold: 20,
  hentaiThreshold: 20,
  checks: "sexy, porn",
});
```

- **Required Parameters:**
  - `url`: The URL of the image.

- **Optional Parameters:**
  - `sexyThreshold`: Threshold for classifying content as sexy (default: 45).
  - `pornThreshold`: Threshold for classifying content as pornographic (default: 20).
  - `hentaiThreshold`: Threshold for classifying content as hentai (default: 20).
  - `checks`: An array of checks to perform (default: all).

### `getDiscordUser`

Retrieves information about a Discord user.

```javascript
const response = await luxuryLabs.getDiscordUser({ userId: '123456789012345678' });
```

- **Required Parameters:**
  - `userId`: The Discord user ID.

### `tikTokVideoInformation`

Retrieves information about a TikTok video.

```javascript
const response = await luxuryLabs.tikTokVideoInformation({ url: 'https://www.tiktok.com/@username/video/1234567890123456789' });
```

- **Required Parameters:**
  - `url`: The URL of the TikTok video.

### `robloxUserInfo`

Retrieves information about a Roblox user.

```javascript
const response = await luxuryLabs.robloxUserInfo({ username: 'exampleUsername' });
```

- **Required Parameters:**
  - `username`: The Roblox username.

### `minecraftUserInfo`

Retrieves information about a Minecraft user.

```javascript
const response = await luxuryLabs.minecraftUserInfo({ username: 'exampleUsername' });
```

- **Required Parameters:**
  - `username`: The Minecraft username.

### `youtubeVideoDownload`

Downloads a YouTube video.

```javascript
const response = await luxuryLabs.youtubeVideoDownload({ videoUrl: 'https://www.youtube.com/watch?v=abcdefghijk' });
```

- **Required Parameters:**
  - `videoUrl`: The URL of the YouTube video.

### `spotifyTrackSearch`

Searches for a track on Spotify.

```javascript
const response = await luxuryLabs.spotifyTrackSearch({ trackName: 'Example Track' });
```

- **Required Parameters:**
  - `trackName`: The name of the track.

### `randomQuestions`

Generates random questions.

```javascript
const response = await luxuryLabs.randomQuestions();
```

### `randomFacts`

Generates random facts.

```javascript
const response = await luxuryLabs.randomFacts();
```

### `neko`

Get neko images.

```javascript
const response = await luxuryLabs.neko();
```

### `textToSpeech`

Converts text to speech.

```javascript
await luxuryLabs.textToSpeech({
  text: 'Hello, this is a test.',
  lang: 'en',
  slow: false,
  outputFile: 'output.mp3',
});
```

- **Required Parameters:**
  - `text`: The text to convert.
  - `outputFile`: The path to save the output audio file.

- **Optional Parameters:**
  - `lang`: The language of the text (default: 'en').
  - `slow`: Whether to generate speech slowly (default: false).

### `mergeImages`

Merges two images.

```javascript
const response = await luxuryLabs.mergeImages({
  imageUrl1: 'https://example.com/image1.jpg',
  imageUrl2: 'https://example.com/image2.jpg',
});
```

- **Required Parameters:**
  - `imageUrl1`: The URL of the first image.
  - `imageUrl2`: The URL of the second image.
