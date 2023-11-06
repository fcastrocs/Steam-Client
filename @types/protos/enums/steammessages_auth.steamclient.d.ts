/**
 * Auto-generated file
 * Sun Nov 05 2023 23:43:25 GMT-0500 (Eastern Standard Time)
 */

declare enum EAuthTokenPlatformType {
	Unknown = 0,
	SteamClient = 1,
	WebBrowser = 2,
	MobileApp = 3,
}

declare enum EAuthSessionGuardType {
	Unknown = 0,
	None = 1,
	EmailCode = 2,
	DeviceCode = 3,
	DeviceConfirmation = 4,
	EmailConfirmation = 5,
	MachineToken = 6,
	LegacyMachineAuth = 7,
}

declare enum EAuthSessionSecurityHistory {
	Invalid = 0,
	UsedPreviously = 1,
	NoPriorHistory = 2,
}

declare enum ETokenRenewalType {
	None = 0,
	Allow = 1,
}

declare enum EAuthTokenRevokeAction {
	EAuthTokenRevokeLogout = 0,
	EAuthTokenRevokePermanent = 1,
	EAuthTokenRevokeReplaced = 2,
	EAuthTokenRevokeSupport = 3,
	EAuthTokenRevokeConsume = 4,
	EAuthTokenRevokeNonRememberedLogout = 5,
	EAuthTokenRevokeNonRememberedPermanent = 6,
	EAuthTokenRevokeAutomatic = 7,
}

declare enum EAuthTokenState {
	Invalid = 0,
	New = 1,
	Confirmed = 2,
	Issued = 3,
	Denied = 4,
	LoggedOut = 5,
	Consumed = 6,
	Revoked = 99,
}

