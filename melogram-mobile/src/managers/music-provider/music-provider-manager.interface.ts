import { MusicProviderType } from "../../config/enums";
import { IMusicProviderService } from "../../services/music-provider/music-provider-service.interface";

interface IMusicProviderManager {
  getRegistry(): Map<MusicProviderType, IMusicProviderService>;
}

export { IMusicProviderManager };
