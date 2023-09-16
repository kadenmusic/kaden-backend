import { AuthRequestConfig, DiscoveryDocument } from "expo-auth-session";

interface IMusicProviderService {
  getOauthRequestConfig(): AuthRequestConfig;
  getOauthRequestDiscovery(): DiscoveryDocument;
}

export { IMusicProviderService };
