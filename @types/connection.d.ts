/**
 * Handle low-level connection to steam.
 */
import { EventEmitter } from "events";
import Long from "long";
import SteamClientError from "SteamClientError";

type PromiseResolve = (value: T) => void;

type JobidTargets = Map<number, Long>;
type JobidSources = Map<string, UnifiedMessage>;
type ProtoResponses = Map<string, PromiseResolve>;

interface SessionKey {
  plain: Buffer;
  encrypted: Buffer;
}

interface Session {
  clientId: number;
  key: SessionKey;
  steamId: Long;
}

interface UnifiedMessage {
  method: string;
  jobidSource: Long;
  targetJobName: string;
  resolve: PromiseResolve;
}

interface Proto {
  EMsg: number;
  payload: Record<string, T> | Buffer;
  unified?: { jobId: Long };
}

interface ConnectionOptions {
  steamCM: SocksClientOptions["destination"];
  proxy?: SocksClientOptions["proxy"];
  timeout?: number;
}

export default class IConnection extends EventEmitter {
  on(event: "disconnected", listener: (error: SteamClientError) => void): this;
  readonly timeout: number;

  public sendProtoPromise(EMsg: number, payload: T, resEMsg?: number): Promise<T>;

  public sendProto(EMsg: number, payload: T): void;

  public sendUnified(serviceName: string, method: string, payload: T): Promise<T>;
  /**
   * Connect to Steam CM server.
   */
  connect(): Promise<void>;
}
