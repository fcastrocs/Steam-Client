/**
 * Manages high-level Steam operations
 */
import Auth, { AuthTokens, Confirmation } from "./services/Auth.js";
import Client from "./client.js";
import Connection, { ConnectionOptions } from "./connection.js";
import { Friend } from "./protoResponse.js";
import { SteamClientError } from "./common.js";
export { SteamClientError, AuthTokens, Confirmation };

export interface LoginOptions {
  accountName?: string;
  password?: string;
  machineName?: string;
  clientOsType?: number;
  shouldRememberPassword?: boolean;
  twoFactorCode?: string;
  shaSentryfile?: Buffer;
  authCode?: string;
  protocolVersion?: 65580;
  supportsRateLimitResponse?: true;
  machineId?: Buffer;
  anonUserTargetAccountName?: "anonymous";
  accessToken?: string;
}

export interface AccountAuth {
  sentry: Buffer;
  machineName: string;
  machineId: Buffer;
  webNonce: string;
  password: string;
}

export interface AccountData {
  steamId: string;
  limited: boolean;
  vac: boolean;
  communityBanned: boolean;
  locked: boolean;
  games: Game[];
  emailOrDomain: string;
  isEmailVerified: boolean;
  credentialChangeRequiresCode: boolean;
  isSteamGuardEnabled: boolean;
  state: Friend;
}

export interface Game {
  name: string;
  gameid: number;
  icon: string;
  playtime: number;
}

export default class Steam extends Connection {
  on(event: Parameters<Client["on"]>[0], listener: Parameters<Client["on"]>[1]): this;
  on(event: Parameters<Connection["on"]>[0], listener: Parameters<Connection["on"]>[1]): this;
  on(event: Parameters<Auth["on"]>[0], listener: Parameters<Auth["on"]>[1]): this;
  on(event: "AccountLoggedOff", listener: (eresult: string) => void): this;

  readonly service: {
    auth: Auth;
    credentials: Credentials;
  };
  readonly client: Client;
  readonly machineName: string;

  constructor(options: ConnectionOptions);

  /**
   * login to steam via credentials or refresh_token
   */
  login(options: LoginOptions): Promise<{
    auth: AccountAuth;
    data: AccountData;
  }>;
  /**
   * Disconnect user from Steam and kill connection
   */
  disconnect(): void;
  /**
   * Whether user is logged in
   */
  get isLoggedIn(): boolean;
  /**
   * Whether playing is blocked by another session
   */
  get isPlayingBlocked(): boolean;
  /**
   * Get all appIds from packages
   */
  getAppIds(packageIds: number[]): Promise<number[]>;
  /**
   * Get appsInfo from a list of appIds
   */
  getAppsInfo(appIds: number[]): Promise<AppBuffer["appinfo"][]>;
  /**
   * Get only games from appsInfo[]
   */
  getGames(appsInfo: AppBuffer["appinfo"][]): Game[];
}
