import type Steam from "../steam.js";

declare class Credentials {
  constructor(private steam: Steam);
  registerCDKey(activationCode: string): Promise<CPlayer_GetOwnedGames_Response["games"]>;
}

export default Credentials;
