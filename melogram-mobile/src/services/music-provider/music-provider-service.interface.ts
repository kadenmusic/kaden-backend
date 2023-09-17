import { AuthRequestConfig, DiscoveryDocument } from "expo-auth-session";

interface IMusicProviderService {
  requestAccessToken<T>(loginCode: string): Promise<T>;
  getOauthRequestConfig(): AuthRequestConfig;
  getOauthRequestDiscovery(): DiscoveryDocument;
}

export { IMusicProviderService };
