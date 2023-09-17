import { AuthRequestConfig } from "expo-auth-session";
import { MusicProviderType } from "../../config/enums";
import { IMusicProviderService } from "../../services/music-provider/music-provider-service.interface";
import { SpotifyService } from "../../services/spotify/spotify.service";
import { IMusicProviderManager } from "./music-provider-manager.interface";

class MusicProviderManager implements IMusicProviderManager {
  private registry: Map<MusicProviderType, IMusicProviderService>;
  private provider: IMusicProviderService;

  constructor(provider: MusicProviderType) {
    this.registry = new Map<MusicProviderType, IMusicProviderService>();
    this.registry.set(MusicProviderType.Spotify, new SpotifyService());
    this.provider = this.registry.get(provider)!;
  }

  public getRegistry(): Map<MusicProviderType, IMusicProviderService> {
    return this.registry;
  }

  // TODO: Redesign this manager; it's not implemented properly
  public getService(): IMusicProviderService {
    return this.provider;
  }

  public getOauthRequestConfig(): AuthRequestConfig {
    return this.provider.getOauthRequestConfig();
  }

  public getOauthRequestDiscovery() {
    return this.provider.getOauthRequestDiscovery();
  }
}

export { MusicProviderManager };
