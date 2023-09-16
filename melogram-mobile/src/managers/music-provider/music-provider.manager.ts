import { AuthRequestConfig } from "expo-auth-session";
import { MusicProviderType } from "../../config/enums";
import { IMusicProviderService } from "../../services/music-provider/music-provider-service.interface";
import { SpotifyService } from "../../services/spotify/spotify.service";
import { IMusicProviderManager } from "./music-provider-manager.interface";

class MusicProviderManager implements IMusicProviderManager {
  private registry: Map<MusicProviderType, IMusicProviderService>;

  constructor() {
    this.registry = new Map<MusicProviderType, IMusicProviderService>();
    this.registry.set(MusicProviderType.Spotify, new SpotifyService());
  }

  public getRegistry(): Map<MusicProviderType, IMusicProviderService> {
    return this.registry;
  }

  public getOauthRequestConfig(provider: MusicProviderType): AuthRequestConfig {
    return this.registry.get(provider)!.getOauthRequestConfig();
  }

  public getOauthRequestDiscovery(provider: MusicProviderType) {
    return this.registry.get(provider)!.getOauthRequestDiscovery();
  }
}

export { MusicProviderManager };
