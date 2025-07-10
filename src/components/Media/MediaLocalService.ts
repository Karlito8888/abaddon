// Service simplifié pour gérer les médias locaux
export interface LocalMediaItem {
  id: string;
  imagePath?: string; // Pour Facebook uniquement
  videoPath?: string; // Pour TikTok uniquement
}

export interface MediaConfig {
  lastUpdated: string;
  mediaItems: LocalMediaItem[];
}

export class MediaLocalService {
  private static readonly CONFIG_URL = '/media/media-config.json';

  // Charger la configuration des médias
  static async getMediaItems(): Promise<LocalMediaItem[]> {
    try {
      const response = await fetch(this.CONFIG_URL);
      
      if (!response.ok) {
        throw new Error(`Failed to load media config: ${response.status}`);
      }

      const config: MediaConfig = await response.json();
      
      // Retourner directement les items
      return config.mediaItems;

    } catch (error) {
      console.error('Error loading media:', error);
      return [];
    }
  }
}