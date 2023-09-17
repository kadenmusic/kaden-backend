import { AuthRequestConfig, DiscoveryDocument } from "expo-auth-session";
import { IMusicProviderService } from "../music-provider/music-provider-service.interface";

class AppleMusicService implements IMusicProviderService {
  constructor() {}
  setAuthData(authData: any): void {}
  getOauthRequestConfig(): AuthRequestConfig {
    throw new Error("Method not implemented.");
  }
  getOauthRequestDiscovery(): DiscoveryDocument {
    throw new Error("Method not implemented.");
  }
}

export { AppleMusicService };
