var GameEvents  = {
/**
Subscribe to a game event
@function
 */
Subscribe: function() {},

/**
Unsubscribe from a game event
@function
 */
Unsubscribe: function() {},

/**
Send a custom game event to the server
@function
 */
SendCustomGameEventToServer: function() {},

/**
Send a custom game event to the server, which will send it to all clients
@function
 */
SendCustomGameEventToAllClients: function() {},

/**
Send a custom game event to the server, which will then send it to one client
@function
 */
SendCustomGameEventToClient: function() {},

/**
Send a client-side event using gameeventmanager (only useful for a few specific events)
@function
 */
SendEventClientSide: function() {}}

var CustomNetTables  = {
/**
Get a key from a custom net table
@function
 */
GetTableValue: function() {},

/**
Get all values from a custom net table
@function
 */
GetAllTableValues: function() {},

/**
Register a callback when a particular custom net table changes
@function
 */
SubscribeNetTableListener: function() {},

/**
Unsubscribe from a game event
@function
 */
UnsubscribeNetTableListener: function() {}}

var SteamFriends  = {
/**
Requests the user's persona name
@function
 */
RequestPersonaName: function() {},

/**
Sets the avatar image on the image panel
@function
 */
SetLargeAvatarImage: function() {}}

var SteamUtils  = {
/**
Returns the connected universe
@function
 */
GetConnectedUniverse: function() {},

/**
Returns the appid of the current app
@function
 */
GetAppID: function() {}}

var Buffs  = {
/**

@function
 */
GetName: function() {},

/**

@function
 */
GetClass: function() {},

/**

@function
 */
GetTexture: function() {},

/**

@function
 */
GetDuration: function() {},

/**

@function
 */
GetDieTime: function() {},

/**

@function
 */
GetRemainingTime: function() {},

/**

@function
 */
GetElapsedTime: function() {},

/**

@function
 */
GetCreationTime: function() {},

/**

@function
 */
GetStackCount: function() {},

/**

@function
 */
IsDebuff: function() {},

/**

@function
 */
IsHidden: function() {},

/**
Get the owner of the ability responsible for the modifier.
@function
 */
GetCaster: function() {},

/**
Get the unit the modifier is parented to.
@function
 */
GetParent: function() {},

/**
Get the ability that generated the modifier.
@function
 */
GetAbility: function() {}}

var Players  = {
/**
Get the maximum number of players in the game.
@function
 */
GetMaxPlayers: function() {},

/**
Get the maximum number of players on teams.
@function
 */
GetMaxTeamPlayers: function() {},

/**
Get the local player ID.
@function
 */
GetLocalPlayer: function() {},

/**
Is the nth player a valid player?
@function
 */
IsValidPlayerID: function() {},

/**
Return the name of a player.
@function
 */
GetPlayerName: function() {},

/**
Get the entity index of the hero controlled by this player.
@function
 */
GetPlayerHeroEntityIndex: function() {},

/**
Get the entities this player has selected.
@function
 */
GetSelectedEntities: function() {},

/**
Get the entities this player is querying.
@function
 */
GetQueryUnit: function() {},

/**
Get local player current portrait unit. (ie. Player's hero or primary selected unit.)
@function
 */
GetLocalPlayerPortraitUnit: function() {},

/**
Can the player buy back?
@function
 */
CanPlayerBuyback: function() {},

/**
Does this player have a custom game ticket?
@function
 */
HasCustomGameTicketForPlayerID: function() {},

/**
The number of assists credited to a player.
@function
 */
GetAssists: function() {},

/**

@function
 */
GetClaimedDenies: function() {},

/**

@function
 */
GetClaimedMisses: function() {},

/**
The number of deaths a player has suffered.
@function
 */
GetDeaths: function() {},

/**
The number of denies credited to a player.
@function
 */
GetDenies: function() {},

/**
The amount of gold a player has.
@function
 */
GetGold: function() {},

/**
The number of kills credited to a player.
@function
 */
GetKills: function() {},

/**

@function
 */
GetLastBuybackTime: function() {},

/**

@function
 */
GetLastHitMultikill: function() {},

/**
The number of last hits credited to a player.
@function
 */
GetLastHits: function() {},

/**

@function
 */
GetLastHitStreak: function() {},

/**
The current level of a player.
@function
 */
GetLevel: function() {},

/**

@function
 */
GetMisses: function() {},

/**

@function
 */
GetNearbyCreepDeaths: function() {},

/**
Total reliable gold for this player.
@function
 */
GetReliableGold: function() {},

/**

@function
 */
GetRespawnSeconds: function() {},

/**

@function
 */
GetStreak: function() {},

/**
Total gold earned in this game by this player.
@function
 */
GetTotalEarnedGold: function() {},

/**
Total xp earned in this game by this player.
@function
 */
GetTotalEarnedXP: function() {},

/**
Total unreliable gold for this player.
@function
 */
GetUnreliableGold: function() {},

/**
Get the team this player is on.
@function
 */
GetTeam: function() {},

/**
Get the player's selected hero id.
@function
 */
GetSelectedHeroID: function() {},

/**
Average gold earned per minute for this player.
@function
 */
GetGoldPerMin: function() {},

/**
Average xp earned per minute for this player.
@function
 */
GetXPPerMin: function() {},

/**
Return the name of the hero a player is controlling.
@function
 */
GetPlayerSelectedHero: function() {},

/**
Get the player color.
@function
 */
GetPlayerColor: function() {},

/**
Is this player a spectator.
@function
 */
IsSpectator: function() {},

/**
.
@function
 */
PlayerPortraitClicked: function() {},

/**
.
@function
 */
PlayerPortraitDoubleClicked: function() {},

/**
.
@function
 */
BuffClicked: function() {},

/**
Is the local player live spectating?
@function
 */
IsLocalPlayerLiveSpectating: function() {},

/**
If local player is in perspective camera, returns true. Else, false
@function
 */
IsLocalPlayerInPerspectiveCamera: function() {},

/**
If player is in perspective mode, returns the followed players entity index.  Else, -1.
@function
 */
GetPerspectivePlayerEntityIndex: function() {},

/**
If player is in perspective mode, returns the followed players id.  Else, -1.
@function
 */
GetPerspectivePlayerId: function() {}}

var Entities  = {
/**
Get the world origin of the entity.
@function
 */
GetAbsOrigin: function() {},

/**
Get the world angles of the entity.
@function
 */
GetAbsAngles: function() {},

/**
Get the forward vector of the entity.
@function
 */
GetForward: function() {},

/**
Get the left vector of the entity.
@function
 */
GetLeft: function() {},

/**
Get the right vector of the entity. WARNING: This produces a left-handed coordinate system. Use GetLeft instead!
@function
 */
GetRight: function() {},

/**
Get the up vector of the entity.
@function
 */
GetUp: function() {},

/**
Get all the building entities.
@function
 */
GetAllBuildingEntities: function() {},

/**
Get all the hero entities.
@function
 */
GetAllHeroEntities: function() {},

/**
Get all the entities with a given name.
@function
 */
GetAllEntitiesByName: function() {},

/**
Get all the entities with a given classname.
@function
 */
GetAllEntitiesByClassname: function() {},

/**
Get all the creature entities.
@function
 */
GetAllCreatureEntities: function() {},

/**
Get all the entities.
@function
 */
GetAllEntities: function() {},

/**

@function
 */
CanBeDominated: function() {},

/**

@function
 */
HasAttackCapability: function() {},

/**

@function
 */
HasCastableAbilities: function() {},

/**

@function
 */
HasFlyingVision: function() {},

/**

@function
 */
HasFlyMovementCapability: function() {},

/**

@function
 */
HasGroundMovementCapability: function() {},

/**

@function
 */
HasMovementCapability: function() {},

/**

@function
 */
HasScepter: function() {},

/**

@function
 */
HasUpgradeableAbilities: function() {},

/**

@function
 */
HasUpgradeableAbilitiesThatArentMaxed: function() {},

/**

@function
 */
IsAlive: function() {},

/**

@function
 */
IsAncient: function() {},

/**

@function
 */
IsAttackImmune: function() {},

/**

@function
 */
IsBarracks: function() {},

/**

@function
 */
IsBlind: function() {},

/**

@function
 */
IsBoss: function() {},

/**

@function
 */
IsBossCreature: function() {},

/**

@function
 */
IsRoshan: function() {},

/**

@function
 */
IsBuilding: function() {},

/**

@function
 */
IsCommandRestricted: function() {},

/**

@function
 */
IsConsideredHero: function() {},

/**

@function
 */
IsControllableByAnyPlayer: function() {},

/**

@function
 */
IsCourier: function() {},

/**

@function
 */
IsCreature: function() {},

/**

@function
 */
IsCreep: function() {},

/**

@function
 */
IsCreepHero: function() {},

/**

@function
 */
IsDeniable: function() {},

/**

@function
 */
IsDominated: function() {},

/**

@function
 */
IsEnemy: function() {},

/**

@function
 */
IsEvadeDisabled: function() {},

/**

@function
 */
IsFort: function() {},

/**

@function
 */
IsFrozen: function() {},

/**

@function
 */
IsGeneratedByEconItem: function() {},

/**

@function
 */
IsHallofFame: function() {},

/**

@function
 */
IsDisarmed: function() {},

/**

@function
 */
IsHero: function() {},

/**

@function
 */
IsHexed: function() {},

/**

@function
 */
IsIllusion: function() {},

/**

@function
 */
IsInRangeOfFountain: function() {},

/**

@function
 */
IsInventoryEnabled: function() {},

/**

@function
 */
IsInvisible: function() {},

/**

@function
 */
IsInvulnerable: function() {},

/**

@function
 */
IsLaneCreep: function() {},

/**

@function
 */
IsLowAttackPriority: function() {},

/**

@function
 */
IsMagicImmune: function() {},

/**

@function
 */
IsMuted: function() {},

/**

@function
 */
IsNeutralUnitType: function() {},

/**

@function
 */
IsNightmared: function() {},

/**

@function
 */
IsOther: function() {},

/**

@function
 */
IsOutOfGame: function() {},

/**

@function
 */
IsOwnedByAnyPlayer: function() {},

/**

@function
 */
IsPhantom: function() {},

/**

@function
 */
IsRangedAttacker: function() {},

/**

@function
 */
IsRealHero: function() {},

/**

@function
 */
IsRooted: function() {},

/**

@function
 */
IsSelectable: function() {},

/**

@function
 */
IsShop: function() {},

/**

@function
 */
IsSilenced: function() {},

/**

@function
 */
IsSpeciallyDeniable: function() {},

/**

@function
 */
IsSpeciallyUndeniable: function() {},

/**

@function
 */
IsStunned: function() {},

/**

@function
 */
IsSummoned: function() {},

/**

@function
 */
IsTower: function() {},

/**

@function
 */
IsUnselectable: function() {},

/**

@function
 */
IsWard: function() {},

/**

@function
 */
IsZombie: function() {},

/**

@function
 */
NoHealthBar: function() {},

/**

@function
 */
NoTeamMoveTo: function() {},

/**

@function
 */
NoTeamSelect: function() {},

/**

@function
 */
NotOnMinimap: function() {},

/**

@function
 */
NotOnMinimapForEnemies: function() {},

/**

@function
 */
NoUnitCollision: function() {},

/**

@function
 */
PassivesDisabled: function() {},

/**

@function
 */
ProvidesVision: function() {},

/**

@function
 */
UsesHeroAbilityNumbers: function() {},

/**

@function
 */
IsMoving: function() {},

/**

@function
 */
GetAbilityCount: function() {},

/**

@function
 */
GetCurrentVisionRange: function() {},

/**

@function
 */
GetDamageBonus: function() {},

/**

@function
 */
GetDamageMax: function() {},

/**

@function
 */
GetDamageMin: function() {},

/**

@function
 */
GetDayTimeVisionRange: function() {},

/**

@function
 */
GetHealth: function() {},

/**

@function
 */
GetHealthPercent: function() {},

/**

@function
 */
GetHealthThinkRegen: function() {},

/**

@function
 */
GetLevel: function() {},

/**

@function
 */
GetMaxHealth: function() {},

/**

@function
 */
GetNightTimeVisionRange: function() {},

/**

@function
 */
GetPlayerOwnerID: function() {},

/**

@function
 */
GetStates: function() {},

/**

@function
 */
GetTotalPurchasedUpgradeGoldCost: function() {},

/**

@function
 */
GetTeamNumber: function() {},

/**

@function
 */
GetHealthBarOffset: function() {},

/**

@function
 */
GetAttackRange: function() {},

/**

@function
 */
GetAttackSpeed: function() {},

/**

@function
 */
GetAttacksPerSecond: function() {},

/**

@function
 */
GetBaseAttackTime: function() {},

/**

@function
 */
GetBaseMagicalResistanceValue: function() {},

/**

@function
 */
GetBaseMoveSpeed: function() {},

/**

@function
 */
GetBonusPhysicalArmor: function() {},

/**

@function
 */
GetCollisionPadding: function() {},

/**

@function
 */
GetEffectiveInvisibilityLevel: function() {},

/**

@function
 */
GetHasteFactor: function() {},

/**

@function
 */
GetHullRadius: function() {},

/**

@function
 */
GetIdealSpeed: function() {},

/**

@function
 */
GetIncreasedAttackSpeed: function() {},

/**

@function
 */
GetMana: function() {},

/**

@function
 */
GetManaThinkRegen: function() {},

/**

@function
 */
GetMaxMana: function() {},

/**

@function
 */
GetMagicalArmorValue: function() {},

/**

@function
 */
GetPaddedCollisionRadius: function() {},

/**

@function
 */
GetPercentInvisible: function() {},

/**

@function
 */
GetPhysicalArmorValue: function() {},

/**

@function
 */
GetProjectileCollisionSize: function() {},

/**

@function
 */
GetRingRadius: function() {},

/**

@function
 */
GetSecondsPerAttack: function() {},

/**

@function
 */
ManaFraction: function() {},

/**

@function
 */
GetClassNameAsCStr: function() {},

/**

@function
 */
GetDisplayedUnitName: function() {},

/**

@function
 */
GetSelectionGroup: function() {},

/**

@function
 */
GetSoundSet: function() {},

/**

@function
 */
GetUnitLabel: function() {},

/**

@function
 */
GetUnitName: function() {},

/**

@function
 */
GetTotalDamageTaken: function() {},

/**

@function
 */
IsControllableByPlayer: function() {},

/**

@function
 */
GetChosenTarget: function() {},

/**

@function
 */
HasItemInInventory: function() {},

/**

@function
 */
GetRangeToUnit: function() {},

/**

@function
 */
IsEntityInRange: function() {},

/**

@function
 */
GetMoveSpeedModifier: function() {},

/**

@function
 */
CanAcceptTargetToAttack: function() {},

/**

@function
 */
InState: function() {},

/**

@function
 */
GetArmorForDamageType: function() {},

/**

@function
 */
GetArmorReductionForDamageType: function() {},

/**

@function
 */
IsInRangeOfShop: function() {},

/**

@function
 */
GetNumItemsInStash: function() {},

/**

@function
 */
GetNumItemsInInventory: function() {},

/**

@function
 */
GetItemInSlot: function() {},

/**

@function
 */
GetAbility: function() {},

/**

@function
 */
GetAbilityByName: function() {},

/**

@function
 */
GetNumBuffs: function() {},

/**

@function
 */
GetBuff: function() {},

/**
Set the minimap icon on this client.
@function
 */
SetMinimapIcon: function() {},

/**

@function
 */
GetAbilityPoints: function() {},

/**

@function
 */
GetCurrentXP: function() {},

/**

@function
 */
GetNeededXPToLevel: function() {},

/**
Get the currently selected entities
@function
 */
GetSelectionEntities: function() {},

/**
Is this a valid entity index?
@function
 */
IsValidEntity: function() {},

/**
Is this entity an item container in the world?
@function
 */
IsItemPhysical: function() {},

/**
Get the item contained in this physical item container.
@function
 */
GetContainedItem: function() {}}

var Abilities  = {
/**

@function
 */
GetAbilityName: function() {},

/**

@function
 */
GetAbilityTextureName: function() {},

/**

@function
 */
GetAssociatedPrimaryAbilities: function() {},

/**

@function
 */
GetAssociatedSecondaryAbilities: function() {},

/**

@function
 */
GetHotkeyOverride: function() {},

/**

@function
 */
GetIntrinsicModifierName: function() {},

/**

@function
 */
GetSharedCooldownName: function() {},

/**

@function
 */
AbilityReady: function() {},

/**
Returns an AbilityLearnResult_t
@function
 */
CanAbilityBeUpgraded: function() {},

/**

@function
 */
CanBeExecuted: function() {},

/**

@function
 */
GetAbilityDamage: function() {},

/**

@function
 */
GetAbilityDamageType: function() {},

/**

@function
 */
GetAbilityTargetFlags: function() {},

/**

@function
 */
GetAbilityTargetTeam: function() {},

/**

@function
 */
GetAbilityTargetType: function() {},

/**

@function
 */
GetAbilityType: function() {},

/**

@function
 */
GetBehavior: function() {},

/**

@function
 */
GetCastRange: function() {},

/**

@function
 */
GetChannelledManaCostPerSecond: function() {},

/**

@function
 */
GetCurrentCharges: function() {},

/**

@function
 */
GetCurrentAbilityCharges: function() {},

/**

@function
 */
GetEffectiveLevel: function() {},

/**

@function
 */
GetHeroLevelRequiredToUpgrade: function() {},

/**

@function
 */
GetLevel: function() {},

/**

@function
 */
GetManaCost: function() {},

/**

@function
 */
GetMaxLevel: function() {},

/**

@function
 */
AttemptToUpgrade: function() {},

/**

@function
 */
CanLearn: function() {},

/**

@function
 */
GetAutoCastState: function() {},

/**

@function
 */
GetToggleState: function() {},

/**

@function
 */
HasScepterUpgradeTooltip: function() {},

/**

@function
 */
IsActivated: function() {},

/**

@function
 */
IsActivatedChanging: function() {},

/**

@function
 */
IsAttributeBonus: function() {},

/**

@function
 */
IsAutocast: function() {},

/**

@function
 */
IsCooldownReady: function() {},

/**

@function
 */
IsDisplayedAbility: function() {},

/**

@function
 */
IsHidden: function() {},

/**

@function
 */
IsHiddenWhenStolen: function() {},

/**

@function
 */
IsInAbilityPhase: function() {},

/**

@function
 */
IsItem: function() {},

/**

@function
 */
IsMarkedAsDirty: function() {},

/**

@function
 */
IsMuted: function() {},

/**

@function
 */
IsOnCastbar: function() {},

/**

@function
 */
IsOnLearnbar: function() {},

/**

@function
 */
IsOwnersGoldEnough: function() {},

/**

@function
 */
IsOwnersGoldEnoughForUpgrade: function() {},

/**

@function
 */
IsOwnersManaEnough: function() {},

/**

@function
 */
IsPassive: function() {},

/**

@function
 */
IsRecipe: function() {},

/**

@function
 */
IsSharedWithTeammates: function() {},

/**

@function
 */
IsStealable: function() {},

/**

@function
 */
IsStolen: function() {},

/**

@function
 */
IsToggle: function() {},

/**

@function
 */
UsesAbilityCharges: function() {},

/**

@function
 */
GetAOERadius: function() {},

/**

@function
 */
GetBackswingTime: function() {},

/**

@function
 */
GetCastPoint: function() {},

/**

@function
 */
GetChannelStartTime: function() {},

/**

@function
 */
GetChannelTime: function() {},

/**

@function
 */
GetCooldown: function() {},

/**

@function
 */
GetCooldownLength: function() {},

/**

@function
 */
GetCooldownTime: function() {},

/**

@function
 */
GetCooldownTimeRemaining: function() {},

/**

@function
 */
GetDuration: function() {},

/**

@function
 */
GetUpgradeBlend: function() {},

/**

@function
 */
GetAbilityChargeRestoreTimeRemaining: function() {},

/**
Get the local player's current active ability. (Pre-cast targetting state.)
@function
 */
GetLocalPlayerActiveAbility: function() {},

/**

@function
 */
GetCaster: function() {},

/**

@function
 */
GetCustomValueFor: function() {},

/**

@function
 */
GetLevelSpecialValueFor: function() {},

/**

@function
 */
GetSpecialValueFor: function() {},

/**

@function
 */
IsCosmetic: function() {},

/**
Attempt to execute the specified ability (Equivalent to clicking the ability in the HUD action bar)
@function
 */
ExecuteAbility: function() {},

/**
Get the max ability charge count.
@function
 */
GetMaxAbilityCharges: function() {},

/**
Attempt to double-tap (self-cast) the specified ability (Equivalent to double-clicking the ability in the HUD action bar)
@function
 */
CreateDoubleTapCastOrder: function() {},

/**
Ping the specified ability (Equivalent to alt-clicking the ability in the HUD action bar)
@function
 */
PingAbility: function() {},

/**
Returns the keybind (as a string) for the specified ability.
@function
 */
GetKeybind: function() {}}

var Items  = {
/**

@function
 */
ShouldDisplayCharges: function() {},

/**

@function
 */
AlwaysDisplayCharges: function() {},

/**

@function
 */
ShowSecondaryCharges: function() {},

/**

@function
 */
CanBeSoldByLocalPlayer: function() {},

/**

@function
 */
CanDoubleTapCast: function() {},

/**

@function
 */
ForceHideCharges: function() {},

/**

@function
 */
IsAlertableItem: function() {},

/**

@function
 */
IsCastOnPickup: function() {},

/**

@function
 */
IsDisassemblable: function() {},

/**

@function
 */
IsDroppable: function() {},

/**

@function
 */
IsInnatelyDisassemblable: function() {},

/**

@function
 */
IsKillable: function() {},

/**

@function
 */
IsMuted: function() {},

/**

@function
 */
IsPermanent: function() {},

/**

@function
 */
IsPurchasable: function() {},

/**

@function
 */
IsRecipe: function() {},

/**

@function
 */
IsRecipeGenerated: function() {},

/**

@function
 */
IsSellable: function() {},

/**

@function
 */
IsStackable: function() {},

/**

@function
 */
ProRatesChargesWhenSelling: function() {},

/**

@function
 */
RequiresCharges: function() {},

/**

@function
 */
CanBeExecuted: function() {},

/**

@function
 */
GetCost: function() {},

/**

@function
 */
GetCurrentCharges: function() {},

/**

@function
 */
GetSecondaryCharges: function() {},

/**

@function
 */
GetDisplayedCharges: function() {},

/**

@function
 */
GetInitialCharges: function() {},

/**

@function
 */
GetItemColor: function() {},

/**

@function
 */
GetShareability: function() {},

/**

@function
 */
GetAbilityTextureSF: function() {},

/**

@function
 */
GetAssembledTime: function() {},

/**

@function
 */
GetPurchaseTime: function() {},

/**

@function
 */
GetPurchaser: function() {},

/**
Attempt to have the local player disassemble the specified item. Returns false if the order wasn't issued.
@function
 */
LocalPlayerDisassembleItem: function() {},

/**
Attempt to have the local player drop the specified item from its stash. Returns false if the order wasn't issued.
@function
 */
LocalPlayerDropItemFromStash: function() {},

/**
Attempt to have the local player alert allies about the specified item. Returns false if the order wasn't issued.
@function
 */
LocalPlayerItemAlertAllies: function() {},

/**
Attempt to have the local player move the specified item to its stash. Returns false if the order wasn't issued.
@function
 */
LocalPlayerMoveItemToStash: function() {},

/**
Attempt to have the local player sell the specified item. Returns false if the order wasn't issued.
@function
 */
LocalPlayerSellItem: function() {}}

var Game  = {
/**

@function
 */
Time: function() {},

/**

@function
 */
GetGameTime: function() {},

/**

@function
 */
GetGameFrameTime: function() {},

/**

@function
 */
GetDOTATime: function() {},

/**

@function
 */
IsGamePaused: function() {},

/**

@function
 */
IsDayTime: function() {},

/**

@function
 */
IsInToolsMode: function() {},

/**

@function
 */
IsInBanPhase: function() {},

/**
Return the team id of the winning team.
@function
 */
GetGameWinner: function() {},

/**

@function
 */
GetStateTransitionTime: function() {},

/**
Get the difficulty setting of the game.
@function
 */
GetCustomGameDifficulty: function() {},

/**
Returns true if the user has enabled flipped HUD
@function
 */
IsHUDFlipped: function() {},

/**
Returns the width of the display.
@function
 */
GetScreenWidth: function() {},

/**
Returns the height of the display.
@function
 */
GetScreenHeight: function() {},

/**
Converts the specified x,y,z world co-ordinate into an x screen coordinate. Returns -1 if behind the camera
@function
 */
WorldToScreenX: function() {},

/**
Converts the specified x,y,z world co-ordinate into a y screen coordinate. Returns -1 if behind the camera
@function
 */
WorldToScreenY: function() {},

/**
Converts the specified x, y screen coordinates into a x, y, z world coordinates.
@function
 */
ScreenXYToWorld: function() {},

/**
Returns the keybind (as a string) for the requested ability slot.
@function
 */
GetKeybindForAbility: function() {},

/**
Returns the keybind (as a string) for the requested inventory slot.
@function
 */
GetKeybindForInventorySlot: function() {},

/**
Returns the keybind (as a string).
@function
 */
GetKeybindForCommand: function() {},

/**
Create a new keybind.
@function
 */
CreateCustomKeyBind: function() {},

/**

@function
 */
GetNianFightTimeLeft: function() {},

/**

@function
 */
Diretide2020ShouldShowGameInfo: function() {},

/**

@function
 */
Diretide2020SetShowGameInfo: function() {},

/**

@function
 */
Diretide2020GetGameplayTipNumber: function() {},

/**

@function
 */
Diretide2020SetGameplayTipNumber: function() {},

/**

@function
 */
NemesticeGetGameplayTipNumber: function() {},

/**

@function
 */
NemesticeSetGameplayTipNumber: function() {},

/**

@function
 */
NemesticeShouldShowGameInfo: function() {},

/**

@function
 */
NemesticeSetShowGameInfo: function() {},

/**

@function
 */
Winter2022ShouldShowGameInfo: function() {},

/**

@function
 */
Winter2022SetShowGameInfo: function() {},

/**

@function
 */
Winter2022GetGameplayTipNumber: function() {},

/**

@function
 */
Winter2022SetGameplayTipNumber: function() {},

/**

@function
 */
ForceCustomUILoad: function() {},

/**

@function
 */
CutToDefaultCamera: function() {},

/**

@function
 */
PlayDataDrivenCamera: function() {},

/**

@function
 */
GetState: function() {},

/**

@function
 */
GameStateIs: function() {},

/**

@function
 */
GameStateIsBefore: function() {},

/**

@function
 */
GameStateIsAfter: function() {},

/**

@function
 */
AddCommand: function() {},

/**

@function
 */
GetJoyFocusPanel: function() {},

/**

@function
 */
SetJoyFocusPanel: function() {},

/**

@function
 */
PushJoyFocusPanel: function() {},

/**

@function
 */
PopJoyFocusPanel: function() {},

/**

@function
 */
GetLocalPlayerID: function() {},

/**
Assign the local player to the specified team
@function
 */
PlayerJoinTeam: function() {},

/**
Assign the currently unassigned players to teams
@function
 */
AutoAssignPlayersToTeams: function() {},

/**
Shuffle the team assignments of all of the players currently assigned to a team.
@function
 */
ShufflePlayerTeamAssignments: function() {},

/**
Set the remaining seconds in team setup before the game starts. -1 to stop the countdown timer
@function
 */
SetRemainingSetupTime: function() {},

/**
Set the amount of time in seconds that will be set as the remaining time when all players are assigned to a team.
@function
 */
SetAutoLaunchDelay: function() {},

/**
Enable or disable automatically starting the game once all players are assigned to a team
@function
 */
SetAutoLaunchEnabled: function() {},

/**
Return true of false indicating if automatically starting the game is enabled.
@function
 */
GetAutoLaunchEnabled: function() {},

/**
Lock the team selection preventing players from swiching teams.
@function
 */
SetTeamSelectionLocked: function() {},

/**
Returns true or false to indicate if team selection is locked
@function
 */
GetTeamSelectionLocked: function() {},

/**
Get all team IDs
@function
 */
GetAllTeamIDs: function() {},

/**
Get all player IDs
@function
 */
GetAllPlayerIDs: function() {},

/**
Get unassigned player IDs
@function
 */
GetUnassignedPlayerIDs: function() {},

/**
Get info about the player hero ultimate ability
@function
 */
GetPlayerUltimateStateOrTime: function() {},

/**
Whether the local player has muted text and voice chat for the specified player id
@function
 */
IsPlayerMuted: function() {},

/**
Set whether the local player has muted text and voice chat for the specified player id
@function
 */
SetPlayerMuted: function() {},

/**
Whether the local player has muted voice chat for the specified player id
@function
 */
IsPlayerMutedVoice: function() {},

/**
Set whether the local player has muted voice chat for the specified player id
@function
 */
SetPlayerMutedVoice: function() {},

/**
Whether the local player has muted text chat for the specified player id
@function
 */
IsPlayerMutedText: function() {},

/**
Set whether the local player has muted text chat for the specified player id
@function
 */
SetPlayerMutedText: function() {},

/**
Get detailed information for the given team
@function
 */
GetTeamDetails: function() {},

/**
Get details for the local player
@function
 */
GetLocalPlayerInfo: function() {},

/**
Get info about the player items.
@function
 */
GetPlayerItems: function() {},

/**
Get info about the given player
@function
 */
GetPlayerInfo: function() {},

/**
Get player IDs for the given team
@function
 */
GetPlayerIDsOnTeam: function() {},

/**

@function
 */
ServerCmd: function() {},

/**

@function
 */
SetDotaRefractHeroes: function() {},

/**

@function
 */
FinishGame: function() {},

/**

@function
 */
LeaveCurrentGame: function() {},

/**

@function
 */
Disconnect: function() {},

/**

@function
 */
FindEventMatch: function() {},

/**

@function
 */
SlideOutEventGamePlayButton: function() {},

/**
Emit a sound for the local player. Returns an integer handle that can be passed to StopSound. (Returns 0 on failure.)
@function
 */
EmitSound: function() {},

/**
Stop a current playing sound on the local player. Takes handle from a call to EmitSound.
@function
 */
StopSound: function() {},

/**
Ask whether the in game shop is open.
@function
 */
IsShopOpen: function() {},

/**
Set custom shop context.
@function
 */
SetCustomShopEntityString: function() {},

/**
Get the bool value of the specific convar. Asserts if invalid and returns false
@function
 */
GetConvarBool: function() {},

/**
Get the int value of the specific convar. Asserts if invalid and returns 0
@function
 */
GetConvarInt: function() {},

/**
Get the float value of the specific convar. Asserts if invalid and returns 0.f
@function
 */
GetConvarFloat: function() {},

/**
Return information about the current map.
@function
 */
GetMapInfo: function() {},

/**
Orders from the local player - takes a single arguments object that supports: dotaunitorder_t OrderType, ent_index TargetIndex, vector Position, ent_index AbilityIndex, OrderIssuer_t OrderIssuer, ent_index UnitIndex, OrderQueueBehavior_t QueueBehavior, bool ShowEffects.
@function
 */
PrepareUnitOrders: function() {},

/**
Order a unit to drop the specified item at the current cursor location.
@function
 */
DropItemAtCursor: function() {},

/**
Calculate 2D length.
@function
 */
Length2D: function() {},

/**
Returns normalized vector.
@function
 */
Normalized: function() {},

/**

@function
 */
EnterAbilityLearnMode: function() {},

/**

@function
 */
EndAbilityLearnMode: function() {},

/**

@function
 */
IsInAbilityLearnMode: function() {}}

var GameUI  = {
/**
Control whether the default UI is enabled
@function
 */
SetDefaultUIEnabled: function() {},

/**
Save persistent data used by an event game
@function
 */
SavePersistentEventGameData: function() {},

/**
Load persistent data used by an event game
@function
 */
LoadPersistentEventGameData: function() {},

/**
Get the current UI configuration
@function
 */
CustomUIConfig: function() {},

/**
Create a minimap ping at the given location
@function
 */
PingMinimapAtLocation: function() {},

/**
Install a mouse input filter
@function
 */
SetMouseCallback: function() {},

/**
Query to check if Tips are available for the local player
@function
 */
AreTipsAvailable: function() {},

/**
Query to see if the local player can tip a specific player
@function
 */
IsPlayerTippable: function() {},

/**
Tip a player
@function
 */
TipPlayer: function() {},

/**

@function
 */
EnableAliMode: function() {},

/**
Get the current mouse position.
@function
 */
GetCursorPosition: function() {},

/**
Return the entity index of the entity under the given screen position.
@function
 */
FindScreenEntities: function() {},

/**
Get the world position of the screen position, or null if the cursor is out of the world.
@function
 */
GetScreenWorldPosition: function() {},

/**
Install a mouse input filter
@function
 */
WasMousePressed: function() {},

/**
Install a mouse input filter
@function
 */
WasMouseDoublePressed: function() {},

/**
Install a mouse input filter
@function
 */
IsMouseDown: function() {},

/**
Is the shift button pressed?
@function
 */
IsShiftDown: function() {},

/**
Is the alt button pressed?
@function
 */
IsAltDown: function() {},

/**
Is the control button pressed?
@function
 */
IsControlDown: function() {},

/**
Get the current UI click interaction mode.
@function
 */
GetClickBehaviors: function() {},

/**
Select a unit, adding it to the group or replacing the current selection.
@function
 */
SelectUnit: function() {},

/**
Get the current look at position.
@function
 */
GetCameraLookAtPosition: function() {},

/**
Get the current camera position.
@function
 */
GetCameraPosition: function() {},

/**
Get the current look at position height offset.
@function
 */
GetCameraLookAtPositionHeightOffset: function() {},

/**
Set the minimum camera pitch angle.
@function
 */
SetCameraPitchMin: function() {},

/**
Set the maximum camera pitch angle.
@function
 */
SetCameraPitchMax: function() {},

/**
Set the camera's yaw.
@function
 */
SetCameraYaw: function() {},

/**
Get the camera's yaw.
@function
 */
GetCameraYaw: function() {},

/**
Offset the camera's look at point.
@function
 */
SetCameraLookAtPositionHeightOffset: function() {},

/**
Set the camera from a lateral position.
@function
 */
SetCameraPositionFromLateralLookAtPosition: function() {},

/**
Set whether the camera should automatically adjust to average terrain height.
@function
 */
SetCameraTerrainAdjustmentEnabled: function() {},

/**
Set the camera distance from the look at point.
@function
 */
SetCameraDistance: function() {},

/**
Set the gap between the bottom of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
@function
 */
SetRenderBottomInsetOverride: function() {},

/**
Set the gap between the top of the screen and the game rendering viewport. (Value expressed as pixels in a normalized 1024x768 viewport.)
@function
 */
SetRenderTopInsetOverride: function() {},

/**
Set the camera target for the local player, or -1 to clear.
@function
 */
SetCameraTarget: function() {},

/**
Set the camera target as position for the local player over specified lerp.
@function
 */
SetCameraTargetPosition: function() {},

/**
Moves the camera to an entity, but doesn't lock the camera on that entity.
@function
 */
MoveCameraToEntity: function() {},

/**
Converts the specified x,y,z world co-ordinate into an x,y screen coordinate. Will clamp position to always be in front of camera.  Position returned as 0->1.0
@function
 */
WorldToScreenXYClamped: function() {},

/**
Get the current players scoreboard score for the specified zone.
@function
 */
GetPlayerScoreboardScore: function() {},

/**
Send a custom client side error message with passed string and soundevent.
@function
 */
SendCustomHUDError: function() {},

/**
Given a passed ability, replace the special value variables in the passed localized text.
@function
 */
ReplaceDOTAAbilitySpecialValues: function() {},

/**
Display a custom contextual tip (wizard tip) with specific loc string and duration
@function
 */
DisplayCustomContextualTip: function() {},

/**
Set the text of a passed label for a DOTA Talent using ability values.
@function
 */
SetupDOTATalentNameLabel: function() {},

/**
Returns true if the passed ability is a talent.
@function
 */
IsAbilityDOTATalent: function() {},

/**
Returns the localization token to use for a particular unit, given the unit's name
@function
 */
GetUnitLocToken: function() {},

/**
Get the localized version of a unit's name
@function
 */
GetUnitNameLocalized: function() {},

/**
Creates a localized version of the number
@function
 */
ConstructNumberString: function() {}}

var Particles  = {
/**
Create a particle system
@function
 */
CreateParticle: function() {},

/**
Release a particle system
@function
 */
ReleaseParticleIndex: function() {},

/**
Destroy a particle system
@function
 */
DestroyParticleEffect: function() {},

/**
Set a control point on a particle system
@function
 */
SetParticleControl: function() {},

/**
[OBSOLETE - Use SetParticleControlTransformForward] Set the orientation on a control point on a particle system
@function
 */
SetParticleControlForward: function() {},

/**
Set the position and orientation on a control point on a particle system
@function
 */
SetParticleControlTransform: function() {},

/**
Set the position and orientation (derived from a forward direction) on a control point on a particle system
@function
 */
SetParticleControlTransformForward: function() {},

/**

@function
 */
SetParticleAlwaysSimulate: function() {},

/**
Set a control point to track an entity on a particle system
@function
 */
SetParticleControlEnt: function() {}}

var EventData  = {
/**
Get the score of an EventAction
@function
 */
GetEventActionScore: function() {},

/**
Get a periodic resource value used
@function
 */
GetPeriodicResourceUsed: function() {},

/**
Get a periodic resource value max
@function
 */
GetPeriodicResourceMax: function() {},

/**
Is this the first time we've launched this season?
@function
 */
IsFirstRunThisEvent: function() {}}

var LocalInventory  = {
/**
Does the player have an inventory item of a given item definition index?
@function
 */
HasItemByDefinition: function() {}}

var  $  = {
/**
Log a message
@function
 */
Msg: function() {},

/**
Trigger an assert
@function
 */
AssertHelper: function() {},

/**
Log a warning message to specified channel
@function
 */
Warning: function() {},

/**
Dispatch an event
@function
 */
DispatchEvent: function() {},

/**
Dispatch an event to occur later
@function
 */
DispatchEventAsync: function() {},

/**
Register an event handler
@function
 */
RegisterEventHandler: function() {},

/**
Register a handler for an event that is not otherwise handled
@function
 */
RegisterForUnhandledEvent: function() {},

/**
Remove an unhandled event handler
@function
 */
UnregisterForUnhandledEvent: function() {},

/**
Find an element
@function
 */
FindChildInContext: function() {},

/**
Make a web request (disabled)
@function
 */
AsyncWebRequest: function() {},

/**
Create a new panel
@function
 */
CreatePanel: function() {},

/**
DEPRECATED: Use $.CreatePanel which has the same signature and supports properties.
@function
 */
CreatePanelWithProperties: function() {},

/**
Localize a string. Optionally accepts Quantity, Precision, and Panel arguments.
@function
 */
Localize: function() {},

/**
DEPRECATED: Use $.Localize which has the same signature and supports pluralization.
@function
 */
LocalizePlural: function() {},

/**
Get the current language
@function
 */
Language: function() {},

/**
Schedule a function to be called later
@function
 */
Schedule: function() {},

/**
Cancels a scheduled function
@function
 */
CancelScheduled: function() {},

/**
Gets the time this frame started, in seconds since panorama was initialized
@function
 */
FrameTime: function() {},

/**
Get the current panel context
@function
 */
GetContextPanel: function() {},

/**
Register a key binding
@function
 */
RegisterKeyBind: function() {},

/**
Call a function on each given item
@function
 */
Each: function() {},

/**
Call during JS startup code to check if script is being reloaded
@function
 */
DbgIsReloadingScript: function() {},

/**
Convert a string to HTML-safe
@function
 */
HTMLEscape: function() {},

/**
Create a logging channel
@function
 */
LogChannel: function() {}}

var  DOTAHeroModelOverlay  = {
/**

@function
 */
visible: function() {},

/**

@function
 */
enabled: function() {},

/**

@function
 */
checked: function() {},

/**

@function
 */
defaultfocus: function() {},

/**

@function
 */
inputnamespace: function() {},

/**

@function
 */
hittest: function() {},

/**

@function
 */
hittestchildren: function() {},

/**

@function
 */
tabindex: function() {},

/**

@function
 */
selectionpos_x: function() {},

/**

@function
 */
selectionpos_y: function() {},

/**

@function
 */
type: function() {},

/**

@function
 */
id: function() {},

/**

@function
 */
layoutfile: function() {},

/**

@function
 */
contentwidth: function() {},

/**

@function
 */
contentheight: function() {},

/**

@function
 */
desiredlayoutwidth: function() {},

/**

@function
 */
desiredlayoutheight: function() {},

/**

@function
 */
actuallayoutwidth: function() {},

/**

@function
 */
actuallayoutheight: function() {},

/**

@function
 */
actualxoffset: function() {},

/**

@function
 */
actualyoffset: function() {},

/**

@function
 */
scrolloffset_y: function() {},

/**

@function
 */
scrolloffset_x: function() {},

/**

@function
 */
actualuiscale_y: function() {},

/**

@function
 */
actualuiscale_x: function() {},

/**

@function
 */
style: function() {},

/**

@function
 */
AddClass: function() {},

/**

@function
 */
RemoveClass: function() {},

/**

@function
 */
BHasClass: function() {},

/**

@function
 */
BAscendantHasClass: function() {},

/**

@function
 */
SetHasClass: function() {},

/**

@function
 */
ToggleClass: function() {},

/**

@function
 */
SwitchClass: function() {},

/**

@function
 */
TriggerClass: function() {},

/**

@function
 */
ClearPanelEvent: function() {},

/**

@function
 */
SetDraggable: function() {},

/**

@function
 */
IsDraggable: function() {},

/**

@function
 */
IsSizeValid: function() {},

/**

@function
 */
GetChildCount: function() {},

/**

@function
 */
GetChild: function() {},

/**

@function
 */
GetChildIndex: function() {},

/**

@function
 */
Children: function() {},

/**

@function
 */
FindChildrenWithClassTraverse: function() {},

/**

@function
 */
GetParent: function() {},

/**

@function
 */
SetParent: function() {},

/**

@function
 */
FindChild: function() {},

/**

@function
 */
FindChildTraverse: function() {},

/**

@function
 */
FindChildInLayoutFile: function() {},

/**

@function
 */
FindPanelInLayoutFile: function() {},

/**

@function
 */
FindAncestor: function() {},

/**

@function
 */
RemoveAndDeleteChildren: function() {},

/**

@function
 */
MoveChildBefore: function() {},

/**

@function
 */
MoveChildAfter: function() {},

/**

@function
 */
GetPositionWithinWindow: function() {},

/**

@function
 */
GetPositionWithinAncestor: function() {},

/**

@function
 */
ApplyStyles: function() {},

/**

@function
 */
ClearPropertyFromCode: function() {},

/**

@function
 */
DeleteAsync: function() {},

/**

@function
 */
BIsTransparent: function() {},

/**

@function
 */
BAcceptsInput: function() {},

/**

@function
 */
BAcceptsFocus: function() {},

/**

@function
 */
SetFocus: function() {},

/**

@function
 */
UpdateFocusInContext: function() {},

/**

@function
 */
BHasHoverStyle: function() {},

/**

@function
 */
SetAcceptsFocus: function() {},

/**

@function
 */
SetDisableFocusOnMouseDown: function() {},

/**

@function
 */
BHasKeyFocus: function() {},

/**

@function
 */
SetScrollParentToFitWhenFocused: function() {},

/**

@function
 */
BScrollParentToFitWhenFocused: function() {},

/**

@function
 */
IsSelected: function() {},

/**

@function
 */
BHasDescendantKeyFocus: function() {},

/**

@function
 */
BLoadLayout: function() {},

/**

@function
 */
BLoadLayoutSnippet: function() {},

/**

@function
 */
BHasLayoutSnippet: function() {},

/**

@function
 */
SetTopOfInputContext: function() {},

/**

@function
 */
SetDialogVariable: function() {},

/**

@function
 */
SetDialogVariableInt: function() {},

/**

@function
 */
SetDialogVariableTime: function() {},

/**

@function
 */
SetDialogVariableLocString: function() {},

/**

@function
 */
SetDialogVariablePluralLocStringInt: function() {},

/**

@function
 */
ScrollToTop: function() {},

/**

@function
 */
ScrollToBottom: function() {},

/**

@function
 */
ScrollToLeftEdge: function() {},

/**

@function
 */
ScrollToRightEdge: function() {},

/**

@function
 */
ScrollParentToMakePanelFit: function() {},

/**

@function
 */
ScrollToFitRegion: function() {},

/**

@function
 */
BCanSeeInParentScroll: function() {},

/**

@function
 */
GetAttributeInt: function() {},

/**

@function
 */
GetAttributeString: function() {},

/**

@function
 */
GetAttributeUInt32: function() {},

/**

@function
 */
SetAttributeInt: function() {},

/**

@function
 */
SetAttributeString: function() {},

/**

@function
 */
SetAttributeUInt32: function() {},

/**

@function
 */
SetInputNamespace: function() {},

/**

@function
 */
RegisterForReadyEvents: function() {},

/**

@function
 */
BReadyForDisplay: function() {},

/**

@function
 */
SetReadyForDisplay: function() {},

/**

@function
 */
SetPositionInPixels: function() {},

/**

@function
 */
Data: function() {},

/**

@function
 */
SetSendScrollPositionChangedEvents: function() {},

/**

@function
 */
SetPanelEvent: function() {},

/**

@function
 */
RunScriptInPanelContext: function() {},

/**

@function
 */
rememberchildfocus: function() {},

/**

@function
 */
paneltype: function() {}}

var  DOTAPlay  = {
/**

@function
 */
visible: function() {},

/**

@function
 */
enabled: function() {},

/**

@function
 */
checked: function() {},

/**

@function
 */
defaultfocus: function() {},

/**

@function
 */
inputnamespace: function() {},

/**

@function
 */
hittest: function() {},

/**

@function
 */
hittestchildren: function() {},

/**

@function
 */
tabindex: function() {},

/**

@function
 */
selectionpos_x: function() {},

/**

@function
 */
selectionpos_y: function() {},

/**

@function
 */
type: function() {},

/**

@function
 */
id: function() {},

/**

@function
 */
layoutfile: function() {},

/**

@function
 */
contentwidth: function() {},

/**

@function
 */
contentheight: function() {},

/**

@function
 */
desiredlayoutwidth: function() {},

/**

@function
 */
desiredlayoutheight: function() {},

/**

@function
 */
actuallayoutwidth: function() {},

/**

@function
 */
actuallayoutheight: function() {},

/**

@function
 */
actualxoffset: function() {},

/**

@function
 */
actualyoffset: function() {},

/**

@function
 */
scrolloffset_y: function() {},

/**

@function
 */
scrolloffset_x: function() {},

/**

@function
 */
actualuiscale_y: function() {},

/**

@function
 */
actualuiscale_x: function() {},

/**

@function
 */
style: function() {},

/**

@function
 */
AddClass: function() {},

/**

@function
 */
RemoveClass: function() {},

/**

@function
 */
BHasClass: function() {},

/**

@function
 */
BAscendantHasClass: function() {},

/**

@function
 */
SetHasClass: function() {},

/**

@function
 */
ToggleClass: function() {},

/**

@function
 */
SwitchClass: function() {},

/**

@function
 */
TriggerClass: function() {},

/**

@function
 */
ClearPanelEvent: function() {},

/**

@function
 */
SetDraggable: function() {},

/**

@function
 */
IsDraggable: function() {},

/**

@function
 */
IsSizeValid: function() {},

/**

@function
 */
GetChildCount: function() {},

/**

@function
 */
GetChild: function() {},

/**

@function
 */
GetChildIndex: function() {},

/**

@function
 */
Children: function() {},

/**

@function
 */
FindChildrenWithClassTraverse: function() {},

/**

@function
 */
GetParent: function() {},

/**

@function
 */
SetParent: function() {},

/**

@function
 */
FindChild: function() {},

/**

@function
 */
FindChildTraverse: function() {},

/**

@function
 */
FindChildInLayoutFile: function() {},

/**

@function
 */
FindPanelInLayoutFile: function() {},

/**

@function
 */
FindAncestor: function() {},

/**

@function
 */
RemoveAndDeleteChildren: function() {},

/**

@function
 */
MoveChildBefore: function() {},

/**

@function
 */
MoveChildAfter: function() {},

/**

@function
 */
GetPositionWithinWindow: function() {},

/**

@function
 */
GetPositionWithinAncestor: function() {},

/**

@function
 */
ApplyStyles: function() {},

/**

@function
 */
ClearPropertyFromCode: function() {},

/**

@function
 */
DeleteAsync: function() {},

/**

@function
 */
BIsTransparent: function() {},

/**

@function
 */
BAcceptsInput: function() {},

/**

@function
 */
BAcceptsFocus: function() {},

/**

@function
 */
SetFocus: function() {},

/**

@function
 */
UpdateFocusInContext: function() {},

/**

@function
 */
BHasHoverStyle: function() {},

/**

@function
 */
SetAcceptsFocus: function() {},

/**

@function
 */
SetDisableFocusOnMouseDown: function() {},

/**

@function
 */
BHasKeyFocus: function() {},

/**

@function
 */
SetScrollParentToFitWhenFocused: function() {},

/**

@function
 */
BScrollParentToFitWhenFocused: function() {},

/**

@function
 */
IsSelected: function() {},

/**

@function
 */
BHasDescendantKeyFocus: function() {},

/**

@function
 */
BLoadLayout: function() {},

/**

@function
 */
BLoadLayoutSnippet: function() {},

/**

@function
 */
BHasLayoutSnippet: function() {},

/**

@function
 */
SetTopOfInputContext: function() {},

/**

@function
 */
SetDialogVariable: function() {},

/**

@function
 */
SetDialogVariableInt: function() {},

/**

@function
 */
SetDialogVariableTime: function() {},

/**

@function
 */
SetDialogVariableLocString: function() {},

/**

@function
 */
SetDialogVariablePluralLocStringInt: function() {},

/**

@function
 */
ScrollToTop: function() {},

/**

@function
 */
ScrollToBottom: function() {},

/**

@function
 */
ScrollToLeftEdge: function() {},

/**

@function
 */
ScrollToRightEdge: function() {},

/**

@function
 */
ScrollParentToMakePanelFit: function() {},

/**

@function
 */
ScrollToFitRegion: function() {},

/**

@function
 */
BCanSeeInParentScroll: function() {},

/**

@function
 */
GetAttributeInt: function() {},

/**

@function
 */
GetAttributeString: function() {},

/**

@function
 */
GetAttributeUInt32: function() {},

/**

@function
 */
SetAttributeInt: function() {},

/**

@function
 */
SetAttributeString: function() {},

/**

@function
 */
SetAttributeUInt32: function() {},

/**

@function
 */
SetInputNamespace: function() {},

/**

@function
 */
RegisterForReadyEvents: function() {},

/**

@function
 */
BReadyForDisplay: function() {},

/**

@function
 */
SetReadyForDisplay: function() {},

/**

@function
 */
SetPositionInPixels: function() {},

/**

@function
 */
Data: function() {},

/**

@function
 */
SetSendScrollPositionChangedEvents: function() {},

/**

@function
 */
GetActiveFeaturedGamemode: function() {},

/**

@function
 */
GetFeaturedGamemodeProgress: function() {},

/**

@function
 */
GetFeaturedGamemodeMax: function() {},

/**

@function
 */
GetSelectedGameModes: function() {},

/**

@function
 */
UpdateCasualGameModeCheckboxes: function() {},

/**

@function
 */
SetPanelEvent: function() {},

/**

@function
 */
RunScriptInPanelContext: function() {},

/**

@function
 */
rememberchildfocus: function() {},

/**

@function
 */
paneltype: function() {}}

var  Panel  = {
/**

@function
 */
visible: function() {},

/**

@function
 */
enabled: function() {},

/**

@function
 */
checked: function() {},

/**

@function
 */
defaultfocus: function() {},

/**

@function
 */
inputnamespace: function() {},

/**

@function
 */
hittest: function() {},

/**

@function
 */
hittestchildren: function() {},

/**

@function
 */
tabindex: function() {},

/**

@function
 */
selectionpos_x: function() {},

/**

@function
 */
selectionpos_y: function() {},

/**

@function
 */
type: function() {},

/**

@function
 */
id: function() {},

/**

@function
 */
layoutfile: function() {},

/**

@function
 */
contentwidth: function() {},

/**

@function
 */
contentheight: function() {},

/**

@function
 */
desiredlayoutwidth: function() {},

/**

@function
 */
desiredlayoutheight: function() {},

/**

@function
 */
actuallayoutwidth: function() {},

/**

@function
 */
actuallayoutheight: function() {},

/**

@function
 */
actualxoffset: function() {},

/**

@function
 */
actualyoffset: function() {},

/**

@function
 */
scrolloffset_y: function() {},

/**

@function
 */
scrolloffset_x: function() {},

/**

@function
 */
actualuiscale_y: function() {},

/**

@function
 */
actualuiscale_x: function() {},

/**

@function
 */
style: function() {},

/**

@function
 */
AddClass: function() {},

/**

@function
 */
RemoveClass: function() {},

/**

@function
 */
BHasClass: function() {},

/**

@function
 */
BAscendantHasClass: function() {},

/**

@function
 */
SetHasClass: function() {},

/**

@function
 */
ToggleClass: function() {},

/**

@function
 */
SwitchClass: function() {},

/**

@function
 */
TriggerClass: function() {},

/**

@function
 */
ClearPanelEvent: function() {},

/**

@function
 */
SetDraggable: function() {},

/**

@function
 */
IsDraggable: function() {},

/**

@function
 */
IsSizeValid: function() {},

/**

@function
 */
GetChildCount: function() {},

/**

@function
 */
GetChild: function() {},

/**

@function
 */
GetChildIndex: function() {},

/**

@function
 */
Children: function() {},

/**

@function
 */
FindChildrenWithClassTraverse: function() {},

/**

@function
 */
GetParent: function() {},

/**

@function
 */
SetParent: function() {},

/**

@function
 */
FindChild: function() {},

/**

@function
 */
FindChildTraverse: function() {},

/**

@function
 */
FindChildInLayoutFile: function() {},

/**

@function
 */
FindPanelInLayoutFile: function() {},

/**

@function
 */
FindAncestor: function() {},

/**

@function
 */
RemoveAndDeleteChildren: function() {},

/**

@function
 */
MoveChildBefore: function() {},

/**

@function
 */
MoveChildAfter: function() {},

/**

@function
 */
GetPositionWithinWindow: function() {},

/**

@function
 */
GetPositionWithinAncestor: function() {},

/**

@function
 */
ApplyStyles: function() {},

/**

@function
 */
ClearPropertyFromCode: function() {},

/**

@function
 */
DeleteAsync: function() {},

/**

@function
 */
BIsTransparent: function() {},

/**

@function
 */
BAcceptsInput: function() {},

/**

@function
 */
BAcceptsFocus: function() {},

/**

@function
 */
SetFocus: function() {},

/**

@function
 */
UpdateFocusInContext: function() {},

/**

@function
 */
BHasHoverStyle: function() {},

/**

@function
 */
SetAcceptsFocus: function() {},

/**

@function
 */
SetDisableFocusOnMouseDown: function() {},

/**

@function
 */
BHasKeyFocus: function() {},

/**

@function
 */
SetScrollParentToFitWhenFocused: function() {},

/**

@function
 */
BScrollParentToFitWhenFocused: function() {},

/**

@function
 */
IsSelected: function() {},

/**

@function
 */
BHasDescendantKeyFocus: function() {},

/**

@function
 */
BLoadLayout: function() {},

/**

@function
 */
BLoadLayoutSnippet: function() {},

/**

@function
 */
BHasLayoutSnippet: function() {},

/**

@function
 */
SetTopOfInputContext: function() {},

/**

@function
 */
SetDialogVariable: function() {},

/**

@function
 */
SetDialogVariableInt: function() {},

/**

@function
 */
SetDialogVariableTime: function() {},

/**

@function
 */
SetDialogVariableLocString: function() {},

/**

@function
 */
SetDialogVariablePluralLocStringInt: function() {},

/**

@function
 */
ScrollToTop: function() {},

/**

@function
 */
ScrollToBottom: function() {},

/**

@function
 */
ScrollToLeftEdge: function() {},

/**

@function
 */
ScrollToRightEdge: function() {},

/**

@function
 */
ScrollParentToMakePanelFit: function() {},

/**

@function
 */
ScrollToFitRegion: function() {},

/**

@function
 */
BCanSeeInParentScroll: function() {},

/**

@function
 */
GetAttributeInt: function() {},

/**

@function
 */
GetAttributeString: function() {},

/**

@function
 */
GetAttributeUInt32: function() {},

/**

@function
 */
SetAttributeInt: function() {},

/**

@function
 */
SetAttributeString: function() {},

/**

@function
 */
SetAttributeUInt32: function() {},

/**

@function
 */
SetInputNamespace: function() {},

/**

@function
 */
RegisterForReadyEvents: function() {},

/**

@function
 */
BReadyForDisplay: function() {},

/**

@function
 */
SetReadyForDisplay: function() {},

/**

@function
 */
SetPositionInPixels: function() {},

/**

@function
 */
Data: function() {},

/**

@function
 */
SetSendScrollPositionChangedEvents: function() {},

/**

@function
 */
SetPanelEvent: function() {},

/**

@function
 */
RunScriptInPanelContext: function() {},

/**

@function
 */
rememberchildfocus: function() {},

/**

@function
 */
paneltype: function() {}}

var  Label  = {
/**

@function
 */
visible: function() {},

/**

@function
 */
enabled: function() {},

/**

@function
 */
checked: function() {},

/**

@function
 */
defaultfocus: function() {},

/**

@function
 */
inputnamespace: function() {},

/**

@function
 */
hittest: function() {},

/**

@function
 */
hittestchildren: function() {},

/**

@function
 */
tabindex: function() {},

/**

@function
 */
selectionpos_x: function() {},

/**

@function
 */
selectionpos_y: function() {},

/**

@function
 */
type: function() {},

/**

@function
 */
id: function() {},

/**

@function
 */
layoutfile: function() {},

/**

@function
 */
contentwidth: function() {},

/**

@function
 */
contentheight: function() {},

/**

@function
 */
desiredlayoutwidth: function() {},

/**

@function
 */
desiredlayoutheight: function() {},

/**

@function
 */
actuallayoutwidth: function() {},

/**

@function
 */
actuallayoutheight: function() {},

/**

@function
 */
actualxoffset: function() {},

/**

@function
 */
actualyoffset: function() {},

/**

@function
 */
scrolloffset_y: function() {},

/**

@function
 */
scrolloffset_x: function() {},

/**

@function
 */
actualuiscale_y: function() {},

/**

@function
 */
actualuiscale_x: function() {},

/**

@function
 */
style: function() {},

/**

@function
 */
AddClass: function() {},

/**

@function
 */
RemoveClass: function() {},

/**

@function
 */
BHasClass: function() {},

/**

@function
 */
BAscendantHasClass: function() {},

/**

@function
 */
SetHasClass: function() {},

/**

@function
 */
ToggleClass: function() {},

/**

@function
 */
SwitchClass: function() {},

/**

@function
 */
TriggerClass: function() {},

/**

@function
 */
ClearPanelEvent: function() {},

/**

@function
 */
SetDraggable: function() {},

/**

@function
 */
IsDraggable: function() {},

/**

@function
 */
IsSizeValid: function() {},

/**

@function
 */
GetChildCount: function() {},

/**

@function
 */
GetChild: function() {},

/**

@function
 */
GetChildIndex: function() {},

/**

@function
 */
Children: function() {},

/**

@function
 */
FindChildrenWithClassTraverse: function() {},

/**

@function
 */
GetParent: function() {},

/**

@function
 */
SetParent: function() {},

/**

@function
 */
FindChild: function() {},

/**

@function
 */
FindChildTraverse: function() {},

/**

@function
 */
FindChildInLayoutFile: function() {},

/**

@function
 */
FindPanelInLayoutFile: function() {},

/**

@function
 */
FindAncestor: function() {},

/**

@function
 */
RemoveAndDeleteChildren: function() {},

/**

@function
 */
MoveChildBefore: function() {},

/**

@function
 */
MoveChildAfter: function() {},

/**

@function
 */
GetPositionWithinWindow: function() {},

/**

@function
 */
GetPositionWithinAncestor: function() {},

/**

@function
 */
ApplyStyles: function() {},

/**

@function
 */
ClearPropertyFromCode: function() {},

/**

@function
 */
DeleteAsync: function() {},

/**

@function
 */
BIsTransparent: function() {},

/**

@function
 */
BAcceptsInput: function() {},

/**

@function
 */
BAcceptsFocus: function() {},

/**

@function
 */
SetFocus: function() {},

/**

@function
 */
UpdateFocusInContext: function() {},

/**

@function
 */
BHasHoverStyle: function() {},

/**

@function
 */
SetAcceptsFocus: function() {},

/**

@function
 */
SetDisableFocusOnMouseDown: function() {},

/**

@function
 */
BHasKeyFocus: function() {},

/**

@function
 */
SetScrollParentToFitWhenFocused: function() {},

/**

@function
 */
BScrollParentToFitWhenFocused: function() {},

/**

@function
 */
IsSelected: function() {},

/**

@function
 */
BHasDescendantKeyFocus: function() {},

/**

@function
 */
BLoadLayout: function() {},

/**

@function
 */
BLoadLayoutSnippet: function() {},

/**

@function
 */
BHasLayoutSnippet: function() {},

/**

@function
 */
SetTopOfInputContext: function() {},

/**

@function
 */
SetDialogVariable: function() {},

/**

@function
 */
SetDialogVariableInt: function() {},

/**

@function
 */
SetDialogVariableTime: function() {},

/**

@function
 */
SetDialogVariableLocString: function() {},

/**

@function
 */
SetDialogVariablePluralLocStringInt: function() {},

/**

@function
 */
ScrollToTop: function() {},

/**

@function
 */
ScrollToBottom: function() {},

/**

@function
 */
ScrollToLeftEdge: function() {},

/**

@function
 */
ScrollToRightEdge: function() {},

/**

@function
 */
ScrollParentToMakePanelFit: function() {},

/**

@function
 */
ScrollToFitRegion: function() {},

/**

@function
 */
BCanSeeInParentScroll: function() {},

/**

@function
 */
GetAttributeInt: function() {},

/**

@function
 */
GetAttributeString: function() {},

/**

@function
 */
GetAttributeUInt32: function() {},

/**

@function
 */
SetAttributeInt: function() {},

/**

@function
 */
SetAttributeString: function() {},

/**

@function
 */
SetAttributeUInt32: function() {},

/**

@function
 */
SetInputNamespace: function() {},

/**

@function
 */
RegisterForReadyEvents: function() {},

/**

@function
 */
BReadyForDisplay: function() {},

/**

@function
 */
SetReadyForDisplay: function() {},

/**

@function
 */
SetPositionInPixels: function() {},

/**

@function
 */
Data: function() {},

/**

@function
 */
SetSendScrollPositionChangedEvents: function() {},

/**

@function
 */
text: function() {},

/**

@function
 */
html: function() {},

/**

@function
 */
SetLocString: function() {},

/**

@function
 */
SetAlreadyLocalizedText: function() {},

/**

@function
 */
SetPanelEvent: function() {},

/**

@function
 */
RunScriptInPanelContext: function() {},

/**

@function
 */
rememberchildfocus: function() {},

/**

@function
 */
paneltype: function() {}}

var  ToggleButton  = {
/**

@function
 */
visible: function() {},

/**

@function
 */
enabled: function() {},

/**

@function
 */
checked: function() {},

/**

@function
 */
defaultfocus: function() {},

/**

@function
 */
inputnamespace: function() {},

/**

@function
 */
hittest: function() {},

/**

@function
 */
hittestchildren: function() {},

/**

@function
 */
tabindex: function() {},

/**

@function
 */
selectionpos_x: function() {},

/**

@function
 */
selectionpos_y: function() {},

/**

@function
 */
type: function() {},

/**

@function
 */
id: function() {},

/**

@function
 */
layoutfile: function() {},

/**

@function
 */
contentwidth: function() {},

/**

@function
 */
contentheight: function() {},

/**

@function
 */
desiredlayoutwidth: function() {},

/**

@function
 */
desiredlayoutheight: function() {},

/**

@function
 */
actuallayoutwidth: function() {},

/**

@function
 */
actuallayoutheight: function() {},

/**

@function
 */
actualxoffset: function() {},

/**

@function
 */
actualyoffset: function() {},

/**

@function
 */
scrolloffset_y: function() {},

/**

@function
 */
scrolloffset_x: function() {},

/**

@function
 */
actualuiscale_y: function() {},

/**

@function
 */
actualuiscale_x: function() {},

/**

@function
 */
style: function() {},

/**

@function
 */
AddClass: function() {},

/**

@function
 */
RemoveClass: function() {},

/**

@function
 */
BHasClass: function() {},

/**

@function
 */
BAscendantHasClass: function() {},

/**

@function
 */
SetHasClass: function() {},

/**

@function
 */
ToggleClass: function() {},

/**

@function
 */
SwitchClass: function() {},

/**

@function
 */
TriggerClass: function() {},

/**

@function
 */
ClearPanelEvent: function() {},

/**

@function
 */
SetDraggable: function() {},

/**

@function
 */
IsDraggable: function() {},

/**

@function
 */
IsSizeValid: function() {},

/**

@function
 */
GetChildCount: function() {},

/**

@function
 */
GetChild: function() {},

/**

@function
 */
GetChildIndex: function() {},

/**

@function
 */
Children: function() {},

/**

@function
 */
FindChildrenWithClassTraverse: function() {},

/**

@function
 */
GetParent: function() {},

/**

@function
 */
SetParent: function() {},

/**

@function
 */
FindChild: function() {},

/**

@function
 */
FindChildTraverse: function() {},

/**

@function
 */
FindChildInLayoutFile: function() {},

/**

@function
 */
FindPanelInLayoutFile: function() {},

/**

@function
 */
FindAncestor: function() {},

/**

@function
 */
RemoveAndDeleteChildren: function() {},

/**

@function
 */
MoveChildBefore: function() {},

/**

@function
 */
MoveChildAfter: function() {},

/**

@function
 */
GetPositionWithinWindow: function() {},

/**

@function
 */
GetPositionWithinAncestor: function() {},

/**

@function
 */
ApplyStyles: function() {},

/**

@function
 */
ClearPropertyFromCode: function() {},

/**

@function
 */
DeleteAsync: function() {},

/**

@function
 */
BIsTransparent: function() {},

/**

@function
 */
BAcceptsInput: function() {},

/**

@function
 */
BAcceptsFocus: function() {},

/**

@function
 */
SetFocus: function() {},

/**

@function
 */
UpdateFocusInContext: function() {},

/**

@function
 */
BHasHoverStyle: function() {},

/**

@function
 */
SetAcceptsFocus: function() {},

/**

@function
 */
SetDisableFocusOnMouseDown: function() {},

/**

@function
 */
BHasKeyFocus: function() {},

/**

@function
 */
SetScrollParentToFitWhenFocused: function() {},

/**

@function
 */
BScrollParentToFitWhenFocused: function() {},

/**

@function
 */
IsSelected: function() {},

/**

@function
 */
BHasDescendantKeyFocus: function() {},

/**

@function
 */
BLoadLayout: function() {},

/**

@function
 */
BLoadLayoutSnippet: function() {},

/**

@function
 */
BHasLayoutSnippet: function() {},

/**

@function
 */
SetTopOfInputContext: function() {},

/**

@function
 */
SetDialogVariable: function() {},

/**

@function
 */
SetDialogVariableInt: function() {},

/**

@function
 */
SetDialogVariableTime: function() {},

/**

@function
 */
SetDialogVariableLocString: function() {},

/**

@function
 */
SetDialogVariablePluralLocStringInt: function() {},

/**

@function
 */
ScrollToTop: function() {},

/**

@function
 */
ScrollToBottom: function() {},

/**

@function
 */
ScrollToLeftEdge: function() {},

/**

@function
 */
ScrollToRightEdge: function() {},

/**

@function
 */
ScrollParentToMakePanelFit: function() {},

/**

@function
 */
ScrollToFitRegion: function() {},

/**

@function
 */
BCanSeeInParentScroll: function() {},

/**

@function
 */
GetAttributeInt: function() {},

/**

@function
 */
GetAttributeString: function() {},

/**

@function
 */
GetAttributeUInt32: function() {},

/**

@function
 */
SetAttributeInt: function() {},

/**

@function
 */
SetAttributeString: function() {},

/**

@function
 */
SetAttributeUInt32: function() {},

/**

@function
 */
SetInputNamespace: function() {},

/**

@function
 */
RegisterForReadyEvents: function() {},

/**

@function
 */
BReadyForDisplay: function() {},

/**

@function
 */
SetReadyForDisplay: function() {},

/**

@function
 */
SetPositionInPixels: function() {},

/**

@function
 */
Data: function() {},

/**

@function
 */
SetSendScrollPositionChangedEvents: function() {},

/**

@function
 */
SetSelected: function() {},

/**

@function
 */
text: function() {},

/**

@function
 */
SetPanelEvent: function() {},

/**

@function
 */
RunScriptInPanelContext: function() {},

/**

@function
 */
rememberchildfocus: function() {},

/**

@function
 */
paneltype: function() {}}

var  TabButton  = {
/**

@function
 */
visible: function() {},

/**

@function
 */
enabled: function() {},

/**

@function
 */
checked: function() {},

/**

@function
 */
defaultfocus: function() {},

/**

@function
 */
inputnamespace: function() {},

/**

@function
 */
hittest: function() {},

/**

@function
 */
hittestchildren: function() {},

/**

@function
 */
tabindex: function() {},

/**

@function
 */
selectionpos_x: function() {},

/**

@function
 */
selectionpos_y: function() {},

/**

@function
 */
type: function() {},

/**

@function
 */
id: function() {},

/**

@function
 */
layoutfile: function() {},

/**

@function
 */
contentwidth: function() {},

/**

@function
 */
contentheight: function() {},

/**

@function
 */
desiredlayoutwidth: function() {},

/**

@function
 */
desiredlayoutheight: function() {},

/**

@function
 */
actuallayoutwidth: function() {},

/**

@function
 */
actuallayoutheight: function() {},

/**

@function
 */
actualxoffset: function() {},

/**

@function
 */
actualyoffset: function() {},

/**

@function
 */
scrolloffset_y: function() {},

/**

@function
 */
scrolloffset_x: function() {},

/**

@function
 */
actualuiscale_y: function() {},

/**

@function
 */
actualuiscale_x: function() {},

/**

@function
 */
style: function() {},

/**

@function
 */
AddClass: function() {},

/**

@function
 */
RemoveClass: function() {},

/**

@function
 */
BHasClass: function() {},

/**

@function
 */
BAscendantHasClass: function() {},

/**

@function
 */
SetHasClass: function() {},

/**

@function
 */
ToggleClass: function() {},

/**

@function
 */
SwitchClass: function() {},

/**

@function
 */
TriggerClass: function() {},

/**

@function
 */
ClearPanelEvent: function() {},

/**

@function
 */
SetDraggable: function() {},

/**

@function
 */
IsDraggable: function() {},

/**

@function
 */
IsSizeValid: function() {},

/**

@function
 */
GetChildCount: function() {},

/**

@function
 */
GetChild: function() {},

/**

@function
 */
GetChildIndex: function() {},

/**

@function
 */
Children: function() {},

/**

@function
 */
FindChildrenWithClassTraverse: function() {},

/**

@function
 */
GetParent: function() {},

/**

@function
 */
SetParent: function() {},

/**

@function
 */
FindChild: function() {},

/**

@function
 */
FindChildTraverse: function() {},

/**

@function
 */
FindChildInLayoutFile: function() {},

/**

@function
 */
FindPanelInLayoutFile: function() {},

/**

@function
 */
FindAncestor: function() {},

/**

@function
 */
RemoveAndDeleteChildren: function() {},

/**

@function
 */
MoveChildBefore: function() {},

/**

@function
 */
MoveChildAfter: function() {},

/**

@function
 */
GetPositionWithinWindow: function() {},

/**

@function
 */
GetPositionWithinAncestor: function() {},

/**

@function
 */
ApplyStyles: function() {},

/**

@function
 */
ClearPropertyFromCode: function() {},

/**

@function
 */
DeleteAsync: function() {},

/**

@function
 */
BIsTransparent: function() {},

/**

@function
 */
BAcceptsInput: function() {},

/**

@function
 */
BAcceptsFocus: function() {},

/**

@function
 */
SetFocus: function() {},

/**

@function
 */
UpdateFocusInContext: function() {},

/**

@function
 */
BHasHoverStyle: function() {},

/**

@function
 */
SetAcceptsFocus: function() {},

/**

@function
 */
SetDisableFocusOnMouseDown: function() {},

/**

@function
 */
BHasKeyFocus: function() {},

/**

@function
 */
SetScrollParentToFitWhenFocused: function() {},

/**

@function
 */
BScrollParentToFitWhenFocused: function() {},

/**

@function
 */
IsSelected: function() {},

/**

@function
 */
BHasDescendantKeyFocus: function() {},

/**

@function
 */
BLoadLayout: function() {},

/**

@function
 */
BLoadLayoutSnippet: function() {},

/**

@function
 */
BHasLayoutSnippet: function() {},

/**

@function
 */
SetTopOfInputContext: function() {},

/**

@function
 */
SetDialogVariable: function() {},

/**

@function
 */
SetDialogVariableInt: function() {},

/**

@function
 */
SetDialogVariableTime: function() {},

/**

@function
 */
SetDialogVariableLocString: function() {},

/**

@function
 */
SetDialogVariablePluralLocStringInt: function() {},

/**

@function
 */
ScrollToTop: function() {},

/**

@function
 */
ScrollToBottom: function() {},

/**

@function
 */
ScrollToLeftEdge: function() {},

/**

@function
 */
ScrollToRightEdge: function() {},

/**

@function
 */
ScrollParentToMakePanelFit: function() {},

/**

@function
 */
ScrollToFitRegion: function() {},

/**

@function
 */
BCanSeeInParentScroll: function() {},

/**

@function
 */
GetAttributeInt: function() {},

/**

@function
 */
GetAttributeString: function() {},

/**

@function
 */
GetAttributeUInt32: function() {},

/**

@function
 */
SetAttributeInt: function() {},

/**

@function
 */
SetAttributeString: function() {},

/**

@function
 */
SetAttributeUInt32: function() {},

/**

@function
 */
SetInputNamespace: function() {},

/**

@function
 */
RegisterForReadyEvents: function() {},

/**

@function
 */
BReadyForDisplay: function() {},

/**

@function
 */
SetReadyForDisplay: function() {},

/**

@function
 */
SetPositionInPixels: function() {},

/**

@function
 */
Data: function() {},

/**

@function
 */
SetSendScrollPositionChangedEvents: function() {},

/**

@function
 */
SetPanelEvent: function() {},

/**

@function
 */
RunScriptInPanelContext: function() {},

/**

@function
 */
rememberchildfocus: function() {},

/**

@function
 */
paneltype: function() {}}


/**
 @enum {number}
 */
var  SteamUGCQuery  = {RankedByVote: 0,
RankedByPublicationDate: 1,
AcceptedForGameRankedByAcceptanceDate: 2,
RankedByTrend: 3,
FavoritedByFriendsRankedByPublicationDate: 4,
CreatedByFriendsRankedByPublicationDate: 5,
RankedByNumTimesReported: 6,
CreatedByFollowedUsersRankedByPublicationDate: 7,
NotYetRated: 8,
RankedByTotalVotesAsc: 9,
RankedByVotesUp: 10,
RankedByTextSearch: 11,
RankedByTotalUniqueSubscriptions: 12,
RankedByPlaytimeTrend: 13,
RankedByTotalPlaytime: 14,
RankedByAveragePlaytimeTrend: 15,
RankedByLifetimeAveragePlaytime: 16,
RankedByPlaytimeSessionsTrend: 17,
RankedByLifetimePlaytimeSessions: 18}


/**
 @enum {number}
 */
var  SteamUGCMatchingUGCType  = {Items: 0,
Items_Mtx: 1,
Items_ReadyToUse: 2,
Collections: 3,
Artwork: 4,
Videos: 5,
Screenshots: 6,
AllGuides: 7,
WebGuides: 8,
IntegratedGuides: 9,
UsableInGame: 10,
ControllerBindings: 11,
GameManagedItems: 12,
All: -1}


/**
 @enum {number}
 */
var  SteamUniverse  = {Invalid: 0,
Internal: 3,
Dev: 4,
Beta: 2,
Public: 1}


/**
 @enum {number}
 */
var  DOTA_GameState  = {DOTA_GAMERULES_STATE_INIT: 0,
DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD: 1,
DOTA_GAMERULES_STATE_HERO_SELECTION: 4,
DOTA_GAMERULES_STATE_STRATEGY_TIME: 5,
DOTA_GAMERULES_STATE_PRE_GAME: 8,
DOTA_GAMERULES_STATE_GAME_IN_PROGRESS: 10,
DOTA_GAMERULES_STATE_POST_GAME: 11,
DOTA_GAMERULES_STATE_DISCONNECT: 12,
DOTA_GAMERULES_STATE_TEAM_SHOWCASE: 6,
DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP: 2,
DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD: 7,
DOTA_GAMERULES_STATE_SCENARIO_SETUP: 9,
DOTA_GAMERULES_STATE_PLAYER_DRAFT: 3,
DOTA_GAMERULES_STATE_LAST: 0}


/**
 @enum {number}
 */
var  DOTA_GC_TEAM  = {DOTA_GC_TEAM_GOOD_GUYS: 0,
DOTA_GC_TEAM_BAD_GUYS: 1,
DOTA_GC_TEAM_BROADCASTER: 2,
DOTA_GC_TEAM_SPECTATOR: 3,
DOTA_GC_TEAM_PLAYER_POOL: 4,
DOTA_GC_TEAM_NOTEAM: 5,
DOTA_GC_TEAM_CUSTOM_1: 6,
DOTA_GC_TEAM_CUSTOM_2: 7,
DOTA_GC_TEAM_CUSTOM_3: 8,
DOTA_GC_TEAM_CUSTOM_4: 9,
DOTA_GC_TEAM_CUSTOM_5: 10,
DOTA_GC_TEAM_CUSTOM_6: 11,
DOTA_GC_TEAM_CUSTOM_7: 12,
DOTA_GC_TEAM_CUSTOM_8: 13,
DOTA_GC_TEAM_NEUTRALS: 14}


/**
 @enum {number}
 */
var  DOTA_GameMode  = {DOTA_GAMEMODE_NONE: 0,
DOTA_GAMEMODE_AP: 1,
DOTA_GAMEMODE_CM: 2,
DOTA_GAMEMODE_RD: 3,
DOTA_GAMEMODE_SD: 4,
DOTA_GAMEMODE_AR: 5,
DOTA_GAMEMODE_INTRO: 6,
DOTA_GAMEMODE_HW: 7,
DOTA_GAMEMODE_REVERSE_CM: 8,
DOTA_GAMEMODE_XMAS: 9,
DOTA_GAMEMODE_TUTORIAL: 10,
DOTA_GAMEMODE_MO: 11,
DOTA_GAMEMODE_LP: 12,
DOTA_GAMEMODE_POOL1: 13,
DOTA_GAMEMODE_FH: 14,
DOTA_GAMEMODE_CUSTOM: 15,
DOTA_GAMEMODE_CD: 16,
DOTA_GAMEMODE_BD: 17,
DOTA_GAMEMODE_ABILITY_DRAFT: 18,
DOTA_GAMEMODE_EVENT: 19,
DOTA_GAMEMODE_ARDM: 20,
DOTA_GAMEMODE_1V1MID: 21,
DOTA_GAMEMODE_ALL_DRAFT: 22,
DOTA_GAMEMODE_TURBO: 23,
DOTA_GAMEMODE_MUTATION: 24,
DOTA_GAMEMODE_COACHES_CHALLENGE: 25}


/**
 @enum {number}
 */
var  DOTAConnectionState_t  = {DOTA_CONNECTION_STATE_UNKNOWN: 0,
DOTA_CONNECTION_STATE_NOT_YET_CONNECTED: 1,
DOTA_CONNECTION_STATE_CONNECTED: 2,
DOTA_CONNECTION_STATE_DISCONNECTED: 3,
DOTA_CONNECTION_STATE_ABANDONED: 4,
DOTA_CONNECTION_STATE_LOADING: 5,
DOTA_CONNECTION_STATE_FAILED: 6}


/**
 @enum {number}
 */
var  dotaunitorder_t  = {DOTA_UNIT_ORDER_NONE: 0,
DOTA_UNIT_ORDER_MOVE_TO_POSITION: 1,
DOTA_UNIT_ORDER_MOVE_TO_TARGET: 2,
DOTA_UNIT_ORDER_ATTACK_MOVE: 3,
DOTA_UNIT_ORDER_ATTACK_TARGET: 4,
DOTA_UNIT_ORDER_CAST_POSITION: 5,
DOTA_UNIT_ORDER_CAST_TARGET: 6,
DOTA_UNIT_ORDER_CAST_TARGET_TREE: 7,
DOTA_UNIT_ORDER_CAST_NO_TARGET: 8,
DOTA_UNIT_ORDER_CAST_TOGGLE: 9,
DOTA_UNIT_ORDER_HOLD_POSITION: 10,
DOTA_UNIT_ORDER_TRAIN_ABILITY: 11,
DOTA_UNIT_ORDER_DROP_ITEM: 12,
DOTA_UNIT_ORDER_GIVE_ITEM: 13,
DOTA_UNIT_ORDER_PICKUP_ITEM: 14,
DOTA_UNIT_ORDER_PICKUP_RUNE: 15,
DOTA_UNIT_ORDER_PURCHASE_ITEM: 16,
DOTA_UNIT_ORDER_SELL_ITEM: 17,
DOTA_UNIT_ORDER_DISASSEMBLE_ITEM: 18,
DOTA_UNIT_ORDER_MOVE_ITEM: 19,
DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO: 20,
DOTA_UNIT_ORDER_STOP: 21,
DOTA_UNIT_ORDER_TAUNT: 22,
DOTA_UNIT_ORDER_BUYBACK: 23,
DOTA_UNIT_ORDER_GLYPH: 24,
DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH: 25,
DOTA_UNIT_ORDER_CAST_RUNE: 26,
DOTA_UNIT_ORDER_PING_ABILITY: 27,
DOTA_UNIT_ORDER_MOVE_TO_DIRECTION: 28,
DOTA_UNIT_ORDER_PATROL: 29,
DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION: 30,
DOTA_UNIT_ORDER_RADAR: 31,
DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK: 32,
DOTA_UNIT_ORDER_CONTINUE: 33,
DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED: 34,
DOTA_UNIT_ORDER_CAST_RIVER_PAINT: 35,
DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT: 36,
DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN: 37,
DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH: 38,
DOTA_UNIT_ORDER_MOVE_RELATIVE: 39,
DOTA_UNIT_ORDER_CAST_TOGGLE_ALT: 40}


/**
 @enum {number}
 */
var  DOTA_OVERHEAD_ALERT  = {OVERHEAD_ALERT_GOLD: 0,
OVERHEAD_ALERT_DENY: 1,
OVERHEAD_ALERT_CRITICAL: 2,
OVERHEAD_ALERT_XP: 3,
OVERHEAD_ALERT_BONUS_SPELL_DAMAGE: 4,
OVERHEAD_ALERT_MISS: 5,
OVERHEAD_ALERT_DAMAGE: 6,
OVERHEAD_ALERT_EVADE: 7,
OVERHEAD_ALERT_BLOCK: 8,
OVERHEAD_ALERT_BONUS_POISON_DAMAGE: 9,
OVERHEAD_ALERT_HEAL: 10,
OVERHEAD_ALERT_MANA_ADD: 11,
OVERHEAD_ALERT_MANA_LOSS: 12,
OVERHEAD_ALERT_LAST_HIT_EARLY: 13,
OVERHEAD_ALERT_LAST_HIT_CLOSE: 14,
OVERHEAD_ALERT_LAST_HIT_MISS: 15,
OVERHEAD_ALERT_MAGICAL_BLOCK: 16,
OVERHEAD_ALERT_INCOMING_DAMAGE: 17,
OVERHEAD_ALERT_OUTGOING_DAMAGE: 18,
OVERHEAD_ALERT_DISABLE_RESIST: 19,
OVERHEAD_ALERT_DEATH: 20,
OVERHEAD_ALERT_BLOCKED: 21,
OVERHEAD_ALERT_ITEM_RECEIVED: 22,
OVERHEAD_ALERT_SHARD: 23,
OVERHEAD_ALERT_DEADLY_BLOW: 24}


/**
 @enum {number}
 */
var  DOTA_HeroPickState  = {DOTA_HEROPICK_STATE_NONE: 0,
DOTA_HEROPICK_STATE_AP_SELECT: 1,
DOTA_HEROPICK_STATE_SD_SELECT: 2,
DOTA_HEROPICK_STATE_INTRO_SELECT_UNUSED: 3,
DOTA_HEROPICK_STATE_RD_SELECT_UNUSED: 4,
DOTA_HEROPICK_STATE_CM_INTRO: 5,
DOTA_HEROPICK_STATE_CM_CAPTAINPICK: 6,
DOTA_HEROPICK_STATE_CM_BAN1: 7,
DOTA_HEROPICK_STATE_CM_BAN2: 8,
DOTA_HEROPICK_STATE_CM_BAN3: 9,
DOTA_HEROPICK_STATE_CM_BAN4: 10,
DOTA_HEROPICK_STATE_CM_BAN5: 11,
DOTA_HEROPICK_STATE_CM_BAN6: 12,
DOTA_HEROPICK_STATE_CM_BAN7: 13,
DOTA_HEROPICK_STATE_CM_BAN8: 14,
DOTA_HEROPICK_STATE_CM_BAN9: 15,
DOTA_HEROPICK_STATE_CM_BAN10: 16,
DOTA_HEROPICK_STATE_CM_BAN11: 17,
DOTA_HEROPICK_STATE_CM_BAN12: 18,
DOTA_HEROPICK_STATE_CM_BAN13: 19,
DOTA_HEROPICK_STATE_CM_BAN14: 20,
DOTA_HEROPICK_STATE_CM_SELECT1: 21,
DOTA_HEROPICK_STATE_CM_SELECT2: 22,
DOTA_HEROPICK_STATE_CM_SELECT3: 23,
DOTA_HEROPICK_STATE_CM_SELECT4: 24,
DOTA_HEROPICK_STATE_CM_SELECT5: 25,
DOTA_HEROPICK_STATE_CM_SELECT6: 26,
DOTA_HEROPICK_STATE_CM_SELECT7: 27,
DOTA_HEROPICK_STATE_CM_SELECT8: 28,
DOTA_HEROPICK_STATE_CM_SELECT9: 29,
DOTA_HEROPICK_STATE_CM_SELECT10: 30,
DOTA_HEROPICK_STATE_CM_PICK: 31,
DOTA_HEROPICK_STATE_AR_SELECT: 32,
DOTA_HEROPICK_STATE_MO_SELECT: 33,
DOTA_HEROPICK_STATE_FH_SELECT: 34,
DOTA_HEROPICK_STATE_CD_INTRO: 35,
DOTA_HEROPICK_STATE_CD_CAPTAINPICK: 36,
DOTA_HEROPICK_STATE_CD_BAN1: 37,
DOTA_HEROPICK_STATE_CD_BAN2: 38,
DOTA_HEROPICK_STATE_CD_BAN3: 39,
DOTA_HEROPICK_STATE_CD_BAN4: 40,
DOTA_HEROPICK_STATE_CD_BAN5: 41,
DOTA_HEROPICK_STATE_CD_BAN6: 42,
DOTA_HEROPICK_STATE_CD_SELECT1: 43,
DOTA_HEROPICK_STATE_CD_SELECT2: 44,
DOTA_HEROPICK_STATE_CD_SELECT3: 45,
DOTA_HEROPICK_STATE_CD_SELECT4: 46,
DOTA_HEROPICK_STATE_CD_SELECT5: 47,
DOTA_HEROPICK_STATE_CD_SELECT6: 48,
DOTA_HEROPICK_STATE_CD_SELECT7: 49,
DOTA_HEROPICK_STATE_CD_SELECT8: 50,
DOTA_HEROPICK_STATE_CD_SELECT9: 51,
DOTA_HEROPICK_STATE_CD_SELECT10: 52,
DOTA_HEROPICK_STATE_CD_PICK: 53,
DOTA_HEROPICK_STATE_BD_SELECT: 54,
DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT: 55,
DOTA_HERO_PICK_STATE_ARDM_SELECT: 56,
DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT: 57,
DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT: 58,
DOTA_HEROPICK_STATE_SELECT_PENALTY: 59,
DOTA_HEROPICK_STATE_CUSTOM_PICK_RULES: 60,
DOTA_HEROPICK_STATE_SCENARIO_PICK: 61,
DOTA_HEROPICK_STATE_COUNT: 62}


/**
 @enum {number}
 */
var  DOTATeam_t  = {DOTA_TEAM_FIRST: 2,
DOTA_TEAM_GOODGUYS: 2,
DOTA_TEAM_BADGUYS: 3,
DOTA_TEAM_NEUTRALS: 4,
DOTA_TEAM_NOTEAM: 5,
DOTA_TEAM_CUSTOM_1: 6,
DOTA_TEAM_CUSTOM_2: 7,
DOTA_TEAM_CUSTOM_3: 8,
DOTA_TEAM_CUSTOM_4: 9,
DOTA_TEAM_CUSTOM_5: 10,
DOTA_TEAM_CUSTOM_6: 11,
DOTA_TEAM_CUSTOM_7: 12,
DOTA_TEAM_CUSTOM_8: 13,
DOTA_TEAM_DRAFT_POOL: 14,
DOTA_TEAM_COUNT: 15,
DOTA_TEAM_CUSTOM_MIN: 6,
DOTA_TEAM_CUSTOM_MAX: 13,
DOTA_TEAM_CUSTOM_COUNT: 8}


/**
 @enum {number}
 */
var  DOTA_RUNES  = {DOTA_RUNE_INVALID: -1,
DOTA_RUNE_DOUBLEDAMAGE: 0,
DOTA_RUNE_HASTE: 1,
DOTA_RUNE_ILLUSION: 2,
DOTA_RUNE_INVISIBILITY: 3,
DOTA_RUNE_REGENERATION: 4,
DOTA_RUNE_BOUNTY: 5,
DOTA_RUNE_ARCANE: 6,
DOTA_RUNE_WATER: 7,
DOTA_RUNE_XP: 8,
DOTA_RUNE_SHIELD: 9,
DOTA_RUNE_COUNT: 10}


/**
 @enum {number}
 */
var  DOTA_UNIT_TARGET_TEAM  = {DOTA_UNIT_TARGET_TEAM_NONE: 0,
DOTA_UNIT_TARGET_TEAM_FRIENDLY: 1,
DOTA_UNIT_TARGET_TEAM_ENEMY: 2,
DOTA_UNIT_TARGET_TEAM_CUSTOM: 4,
DOTA_UNIT_TARGET_TEAM_BOTH: 3}


/**
 @enum {number}
 */
var  DOTA_UNIT_TARGET_TYPE  = {DOTA_UNIT_TARGET_NONE: 0,
DOTA_UNIT_TARGET_HERO: 1,
DOTA_UNIT_TARGET_CREEP: 2,
DOTA_UNIT_TARGET_BUILDING: 4,
DOTA_UNIT_TARGET_COURIER: 16,
DOTA_UNIT_TARGET_OTHER: 32,
DOTA_UNIT_TARGET_TREE: 64,
DOTA_UNIT_TARGET_CUSTOM: 128,
DOTA_UNIT_TARGET_SELF: 256,
DOTA_UNIT_TARGET_BASIC: 18,
DOTA_UNIT_TARGET_ALL: 55}


/**
 @enum {number}
 */
var  DOTA_UNIT_TARGET_FLAGS  = {DOTA_UNIT_TARGET_FLAG_NONE: 0,
DOTA_UNIT_TARGET_FLAG_RANGED_ONLY: 2,
DOTA_UNIT_TARGET_FLAG_MELEE_ONLY: 4,
DOTA_UNIT_TARGET_FLAG_DEAD: 8,
DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES: 16,
DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES: 32,
DOTA_UNIT_TARGET_FLAG_INVULNERABLE: 64,
DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE: 128,
DOTA_UNIT_TARGET_FLAG_NO_INVIS: 256,
DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS: 512,
DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED: 1024,
DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED: 2048,
DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED: 4096,
DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS: 8192,
DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE: 16384,
DOTA_UNIT_TARGET_FLAG_MANA_ONLY: 32768,
DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP: 65536,
DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO: 131072,
DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD: 262144,
DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED: 524288,
DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES: 1048576,
DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS: 2097152}


/**
 @enum {number}
 */
var  DOTALimits_t  = {DOTA_MAX_PLAYERS: 64,
DOTA_MAX_TEAM: 24,
DOTA_MAX_PLAYER_TEAMS: 10,
DOTA_MAX_TEAM_PLAYERS: 24,
DOTA_MAX_SPECTATOR_TEAM_SIZE: 40,
DOTA_MAX_SPECTATOR_LOBBY_SIZE: 15,
DOTA_DEFAULT_MAX_TEAM: 5,
DOTA_DEFAULT_MAX_TEAM_PLAYERS: 10}


/**
 @enum {number}
 */
var  DOTAInventoryFlags_t  = {DOTA_INVENTORY_ALLOW_NONE: 0,
DOTA_INVENTORY_ALLOW_MAIN: 1,
DOTA_INVENTORY_ALLOW_STASH: 2,
DOTA_INVENTORY_ALLOW_DROP_ON_GROUND: 4,
DOTA_INVENTORY_ALLOW_DROP_AT_FOUNTAIN: 8,
DOTA_INVENTORY_LIMIT_DROP_ON_GROUND: 16,
DOTA_INVENTORY_ALL_ACCESS: 3}


/**
 @enum {number}
 */
var  EDOTA_ModifyGold_Reason  = {DOTA_ModifyGold_Unspecified: 0,
DOTA_ModifyGold_Death: 1,
DOTA_ModifyGold_Buyback: 2,
DOTA_ModifyGold_PurchaseConsumable: 3,
DOTA_ModifyGold_PurchaseItem: 4,
DOTA_ModifyGold_AbandonedRedistribute: 5,
DOTA_ModifyGold_SellItem: 6,
DOTA_ModifyGold_AbilityCost: 7,
DOTA_ModifyGold_CheatCommand: 8,
DOTA_ModifyGold_SelectionPenalty: 9,
DOTA_ModifyGold_GameTick: 10,
DOTA_ModifyGold_Building: 11,
DOTA_ModifyGold_HeroKill: 12,
DOTA_ModifyGold_CreepKill: 13,
DOTA_ModifyGold_NeutralKill: 14,
DOTA_ModifyGold_RoshanKill: 15,
DOTA_ModifyGold_CourierKill: 16,
DOTA_ModifyGold_BountyRune: 17,
DOTA_ModifyGold_SharedGold: 18,
DOTA_ModifyGold_AbilityGold: 19,
DOTA_ModifyGold_WardKill: 20,
DOTA_ModifyGold_CourierKilledByThisPlayer: 21}


/**
 @enum {number}
 */
var  DOTAUnitAttackCapability_t  = {DOTA_UNIT_CAP_NO_ATTACK: 0,
DOTA_UNIT_CAP_MELEE_ATTACK: 1,
DOTA_UNIT_CAP_RANGED_ATTACK: 2,
DOTA_UNIT_CAP_RANGED_ATTACK_DIRECTIONAL: 4,
DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT: 3}


/**
 @enum {number}
 */
var  DOTAUnitMoveCapability_t  = {DOTA_UNIT_CAP_MOVE_NONE: 0,
DOTA_UNIT_CAP_MOVE_GROUND: 1,
DOTA_UNIT_CAP_MOVE_FLY: 2}


/**
 @enum {number}
 */
var  EShareAbility  = {ITEM_FULLY_SHAREABLE: 0,
ITEM_PARTIALLY_SHAREABLE: 1,
ITEM_NOT_SHAREABLE: 2}


/**
 @enum {number}
 */
var  DOTAMusicStatus_t  = {DOTA_MUSIC_STATUS_NONE: 0,
DOTA_MUSIC_STATUS_EXPLORATION: 1,
DOTA_MUSIC_STATUS_BATTLE: 2,
DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION: 3,
DOTA_MUSIC_STATUS_DEAD: 4,
DOTA_MUSIC_STATUS_LAST: 5}


/**
 @enum {number}
 */
var  DOTA_ABILITY_BEHAVIOR  = {DOTA_ABILITY_BEHAVIOR_NONE: 0,
DOTA_ABILITY_BEHAVIOR_HIDDEN: 1,
DOTA_ABILITY_BEHAVIOR_PASSIVE: 2,
DOTA_ABILITY_BEHAVIOR_NO_TARGET: 4,
DOTA_ABILITY_BEHAVIOR_UNIT_TARGET: 8,
DOTA_ABILITY_BEHAVIOR_POINT: 16,
DOTA_ABILITY_BEHAVIOR_AOE: 32,
DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE: 64,
DOTA_ABILITY_BEHAVIOR_CHANNELLED: 128,
DOTA_ABILITY_BEHAVIOR_ITEM: 256,
DOTA_ABILITY_BEHAVIOR_TOGGLE: 512,
DOTA_ABILITY_BEHAVIOR_DIRECTIONAL: 1024,
DOTA_ABILITY_BEHAVIOR_IMMEDIATE: 2048,
DOTA_ABILITY_BEHAVIOR_AUTOCAST: 4096,
DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET: 8192,
DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT: 16384,
DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET: 32768,
DOTA_ABILITY_BEHAVIOR_AURA: 65536,
DOTA_ABILITY_BEHAVIOR_ATTACK: 131072,
DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT: 262144,
DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES: 524288,
DOTA_ABILITY_BEHAVIOR_UNRESTRICTED: 1048576,
DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE: 2097152,
DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL: 4194304,
DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT: 8388608,
DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET: 16777216,
DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK: 33554432,
DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN: 67108864,
DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING: 134217728,
DOTA_ABILITY_BEHAVIOR_RUNE_TARGET: 268435456,
DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL: 536870912,
DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING: 1073741824,
DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT: 2147483648,
DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST: 4294967296,
DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES: 8589934592,
DOTA_ABILITY_BEHAVIOR_UNLOCKED_BY_EFFECT_INDEX: 17179869184,
DOTA_ABILITY_BEHAVIOR_SUPPRESS_ASSOCIATED_CONSUMABLE: 34359738368,
DOTA_ABILITY_BEHAVIOR_FREE_DRAW_TARGETING: 68719476736,
DOTA_ABILITY_BEHAVIOR_IGNORE_SILENCE: 137438953472,
DOTA_ABILITY_BEHAVIOR_OVERSHOOT: 274877906944,
DOTA_ABILITY_BEHAVIOR_IGNORE_MUTED: 549755813888,
DOTA_ABILITY_BEHAVIOR_ALT_CASTABLE: 1099511627776,
DOTA_ABILITY_BEHAVIOR_BREAK_DISABLES: 2199023255552}


/**
 @enum {number}
 */
var  DAMAGE_TYPES  = {DAMAGE_TYPE_NONE: 0,
DAMAGE_TYPE_PHYSICAL: 1,
DAMAGE_TYPE_MAGICAL: 2,
DAMAGE_TYPE_PURE: 4,
DAMAGE_TYPE_HP_REMOVAL: 8,
DAMAGE_TYPE_ABILITY_DEFINED: 22,
DAMAGE_TYPE_ALL: 7}


/**
 @enum {number}
 */
var  ABILITY_TYPES  = {ABILITY_TYPE_BASIC: 0,
ABILITY_TYPE_ULTIMATE: 1,
ABILITY_TYPE_ATTRIBUTES: 2,
ABILITY_TYPE_HIDDEN: 3}


/**
 @enum {number}
 */
var  SPELL_IMMUNITY_TYPES  = {SPELL_IMMUNITY_NONE: 0,
SPELL_IMMUNITY_ALLIES_YES: 1,
SPELL_IMMUNITY_ALLIES_NO: 2,
SPELL_IMMUNITY_ENEMIES_YES: 3,
SPELL_IMMUNITY_ENEMIES_NO: 4,
SPELL_IMMUNITY_ALLIES_YES_ENEMIES_NO: 5}


/**
 @enum {number}
 */
var  DOTADamageFlag_t  = {DOTA_DAMAGE_FLAG_NONE: 0,
DOTA_DAMAGE_FLAG_IGNORES_MAGIC_ARMOR: 1,
DOTA_DAMAGE_FLAG_IGNORES_PHYSICAL_ARMOR: 2,
DOTA_DAMAGE_FLAG_BYPASSES_INVULNERABILITY: 4,
DOTA_DAMAGE_FLAG_BYPASSES_BLOCK: 8,
DOTA_DAMAGE_FLAG_REFLECTION: 16,
DOTA_DAMAGE_FLAG_HPLOSS: 32,
DOTA_DAMAGE_FLAG_NO_DIRECTOR_EVENT: 64,
DOTA_DAMAGE_FLAG_NON_LETHAL: 128,
DOTA_DAMAGE_FLAG_NO_DAMAGE_MULTIPLIERS: 512,
DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION: 1024,
DOTA_DAMAGE_FLAG_DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN: 2048,
DOTA_DAMAGE_FLAG_NO_SPELL_LIFESTEAL: 4096,
DOTA_DAMAGE_FLAG_PROPERTY_FIRE: 8192,
DOTA_DAMAGE_FLAG_IGNORES_BASE_PHYSICAL_ARMOR: 16384,
DOTA_DAMAGE_FLAG_SECONDARY_PROJECTILE_ATTACK: 32768,
DOTA_DAMAGE_FLAG_FORCE_SPELL_AMPLIFICATION: 65536,
DOTA_DAMAGE_FLAG_MAGIC_AUTO_ATTACK: 131072,
DOTA_DAMAGE_FLAG_ATTACK_MODIFIER: 262144}


/**
 @enum {number}
 */
var  EDOTA_ModifyXP_Reason  = {DOTA_ModifyXP_Unspecified: 0,
DOTA_ModifyXP_HeroKill: 1,
DOTA_ModifyXP_CreepKill: 2,
DOTA_ModifyXP_RoshanKill: 3,
DOTA_ModifyXP_TomeOfKnowledge: 4,
DOTA_ModifyXP_Outpost: 5,
DOTA_ModifyXP_MAX: 6}


/**
 @enum {number}
 */
var  GameActivity_t  = {ACT_DOTA_IDLE: 1500,
ACT_DOTA_IDLE_RARE: 1501,
ACT_DOTA_RUN: 1502,
ACT_DOTA_ATTACK: 1503,
ACT_DOTA_ATTACK2: 1504,
ACT_DOTA_ATTACK_EVENT: 1505,
ACT_DOTA_DIE: 1506,
ACT_DOTA_FLINCH: 1507,
ACT_DOTA_FLAIL: 1508,
ACT_DOTA_DISABLED: 1509,
ACT_DOTA_CAST_ABILITY_1: 1510,
ACT_DOTA_CAST_ABILITY_2: 1511,
ACT_DOTA_CAST_ABILITY_3: 1512,
ACT_DOTA_CAST_ABILITY_4: 1513,
ACT_DOTA_CAST_ABILITY_5: 1514,
ACT_DOTA_CAST_ABILITY_6: 1515,
ACT_DOTA_OVERRIDE_ABILITY_1: 1516,
ACT_DOTA_OVERRIDE_ABILITY_2: 1517,
ACT_DOTA_OVERRIDE_ABILITY_3: 1518,
ACT_DOTA_OVERRIDE_ABILITY_4: 1519,
ACT_DOTA_CHANNEL_ABILITY_1: 1520,
ACT_DOTA_CHANNEL_ABILITY_2: 1521,
ACT_DOTA_CHANNEL_ABILITY_3: 1522,
ACT_DOTA_CHANNEL_ABILITY_4: 1523,
ACT_DOTA_CHANNEL_ABILITY_5: 1524,
ACT_DOTA_CHANNEL_ABILITY_6: 1525,
ACT_DOTA_CHANNEL_END_ABILITY_1: 1526,
ACT_DOTA_CHANNEL_END_ABILITY_2: 1527,
ACT_DOTA_CHANNEL_END_ABILITY_3: 1528,
ACT_DOTA_CHANNEL_END_ABILITY_4: 1529,
ACT_DOTA_CHANNEL_END_ABILITY_5: 1530,
ACT_DOTA_CHANNEL_END_ABILITY_6: 1531,
ACT_DOTA_CONSTANT_LAYER: 1532,
ACT_DOTA_CAPTURE: 1533,
ACT_DOTA_SPAWN: 1534,
ACT_DOTA_KILLTAUNT: 1535,
ACT_DOTA_TAUNT: 1536,
ACT_DOTA_THIRST: 1537,
ACT_DOTA_CAST_DRAGONBREATH: 1538,
ACT_DOTA_ECHO_SLAM: 1539,
ACT_DOTA_CAST_ABILITY_1_END: 1540,
ACT_DOTA_CAST_ABILITY_2_END: 1541,
ACT_DOTA_CAST_ABILITY_3_END: 1542,
ACT_DOTA_CAST_ABILITY_4_END: 1543,
ACT_MIRANA_LEAP_END: 1544,
ACT_WAVEFORM_START: 1545,
ACT_WAVEFORM_END: 1546,
ACT_DOTA_CAST_ABILITY_ROT: 1547,
ACT_DOTA_DIE_SPECIAL: 1548,
ACT_DOTA_RATTLETRAP_BATTERYASSAULT: 1549,
ACT_DOTA_RATTLETRAP_POWERCOGS: 1550,
ACT_DOTA_RATTLETRAP_HOOKSHOT_START: 1551,
ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP: 1552,
ACT_DOTA_RATTLETRAP_HOOKSHOT_END: 1553,
ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE: 1554,
ACT_DOTA_TINKER_REARM1: 1555,
ACT_DOTA_TINKER_REARM2: 1556,
ACT_DOTA_TINKER_REARM3: 1557,
ACT_TINY_AVALANCHE: 1558,
ACT_TINY_TOSS: 1559,
ACT_TINY_GROWL: 1560,
ACT_DOTA_WEAVERBUG_ATTACH: 1561,
ACT_DOTA_CAST_WILD_AXES_END: 1562,
ACT_DOTA_CAST_LIFE_BREAK_START: 1563,
ACT_DOTA_CAST_LIFE_BREAK_END: 1564,
ACT_DOTA_NIGHTSTALKER_TRANSITION: 1565,
ACT_DOTA_LIFESTEALER_RAGE: 1566,
ACT_DOTA_LIFESTEALER_OPEN_WOUNDS: 1567,
ACT_DOTA_SAND_KING_BURROW_IN: 1568,
ACT_DOTA_SAND_KING_BURROW_OUT: 1569,
ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK: 1570,
ACT_DOTA_WHEEL_LAYER: 1571,
ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START: 1572,
ACT_DOTA_ALCHEMIST_CONCOCTION: 1573,
ACT_DOTA_JAKIRO_LIQUIDFIRE_START: 1574,
ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP: 1575,
ACT_DOTA_LIFESTEALER_INFEST: 1576,
ACT_DOTA_LIFESTEALER_INFEST_END: 1577,
ACT_DOTA_LASSO_LOOP: 1578,
ACT_DOTA_ALCHEMIST_CONCOCTION_THROW: 1579,
ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END: 1580,
ACT_DOTA_CAST_COLD_SNAP: 1581,
ACT_DOTA_CAST_GHOST_WALK: 1582,
ACT_DOTA_CAST_TORNADO: 1583,
ACT_DOTA_CAST_EMP: 1584,
ACT_DOTA_CAST_ALACRITY: 1585,
ACT_DOTA_CAST_CHAOS_METEOR: 1586,
ACT_DOTA_CAST_SUN_STRIKE: 1587,
ACT_DOTA_CAST_FORGE_SPIRIT: 1588,
ACT_DOTA_CAST_ICE_WALL: 1589,
ACT_DOTA_CAST_DEAFENING_BLAST: 1590,
ACT_DOTA_VICTORY: 1591,
ACT_DOTA_DEFEAT: 1592,
ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE: 1593,
ACT_DOTA_SPIRIT_BREAKER_CHARGE_END: 1594,
ACT_DOTA_TELEPORT: 1595,
ACT_DOTA_TELEPORT_END: 1596,
ACT_DOTA_CAST_REFRACTION: 1597,
ACT_DOTA_CAST_ABILITY_7: 1598,
ACT_DOTA_CANCEL_SIREN_SONG: 1599,
ACT_DOTA_CHANNEL_ABILITY_7: 1600,
ACT_DOTA_LOADOUT: 1601,
ACT_DOTA_FORCESTAFF_END: 1602,
ACT_DOTA_POOF_END: 1603,
ACT_DOTA_SLARK_POUNCE: 1604,
ACT_DOTA_MAGNUS_SKEWER_START: 1605,
ACT_DOTA_MAGNUS_SKEWER_END: 1606,
ACT_DOTA_MEDUSA_STONE_GAZE: 1607,
ACT_DOTA_RELAX_START: 1608,
ACT_DOTA_RELAX_LOOP: 1609,
ACT_DOTA_RELAX_END: 1610,
ACT_DOTA_CENTAUR_STAMPEDE: 1611,
ACT_DOTA_BELLYACHE_START: 1612,
ACT_DOTA_BELLYACHE_LOOP: 1613,
ACT_DOTA_BELLYACHE_END: 1614,
ACT_DOTA_ROQUELAIRE_LAND: 1615,
ACT_DOTA_ROQUELAIRE_LAND_IDLE: 1616,
ACT_DOTA_GREEVIL_CAST: 1617,
ACT_DOTA_GREEVIL_OVERRIDE_ABILITY: 1618,
ACT_DOTA_GREEVIL_HOOK_START: 1619,
ACT_DOTA_GREEVIL_HOOK_END: 1620,
ACT_DOTA_GREEVIL_BLINK_BONE: 1621,
ACT_DOTA_IDLE_SLEEPING: 1622,
ACT_DOTA_INTRO: 1623,
ACT_DOTA_GESTURE_POINT: 1624,
ACT_DOTA_GESTURE_ACCENT: 1625,
ACT_DOTA_SLEEPING_END: 1626,
ACT_DOTA_AMBUSH: 1627,
ACT_DOTA_ITEM_LOOK: 1628,
ACT_DOTA_STARTLE: 1629,
ACT_DOTA_FRUSTRATION: 1630,
ACT_DOTA_TELEPORT_REACT: 1631,
ACT_DOTA_TELEPORT_END_REACT: 1632,
ACT_DOTA_SHRUG: 1633,
ACT_DOTA_RELAX_LOOP_END: 1634,
ACT_DOTA_PRESENT_ITEM: 1635,
ACT_DOTA_IDLE_IMPATIENT: 1636,
ACT_DOTA_SHARPEN_WEAPON: 1637,
ACT_DOTA_SHARPEN_WEAPON_OUT: 1638,
ACT_DOTA_IDLE_SLEEPING_END: 1639,
ACT_DOTA_BRIDGE_DESTROY: 1640,
ACT_DOTA_TAUNT_SNIPER: 1641,
ACT_DOTA_DEATH_BY_SNIPER: 1642,
ACT_DOTA_LOOK_AROUND: 1643,
ACT_DOTA_CAGED_CREEP_RAGE: 1644,
ACT_DOTA_CAGED_CREEP_RAGE_OUT: 1645,
ACT_DOTA_CAGED_CREEP_SMASH: 1646,
ACT_DOTA_CAGED_CREEP_SMASH_OUT: 1647,
ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP: 1648,
ACT_DOTA_INTRO_LOOP: 1649,
ACT_DOTA_BRIDGE_THREAT: 1650,
ACT_DOTA_DAGON: 1651,
ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START: 1652,
ACT_DOTA_CAST_ABILITY_2_ES_ROLL: 1653,
ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END: 1654,
ACT_DOTA_NIAN_PIN_START: 1655,
ACT_DOTA_NIAN_PIN_LOOP: 1656,
ACT_DOTA_NIAN_PIN_END: 1657,
ACT_DOTA_LEAP_STUN: 1658,
ACT_DOTA_LEAP_SWIPE: 1659,
ACT_DOTA_NIAN_INTRO_LEAP: 1660,
ACT_DOTA_AREA_DENY: 1661,
ACT_DOTA_NIAN_PIN_TO_STUN: 1662,
ACT_DOTA_RAZE_1: 1663,
ACT_DOTA_RAZE_2: 1664,
ACT_DOTA_RAZE_3: 1665,
ACT_DOTA_UNDYING_DECAY: 1666,
ACT_DOTA_UNDYING_SOUL_RIP: 1667,
ACT_DOTA_UNDYING_TOMBSTONE: 1668,
ACT_DOTA_WHIRLING_AXES_RANGED: 1669,
ACT_DOTA_SHALLOW_GRAVE: 1670,
ACT_DOTA_COLD_FEET: 1671,
ACT_DOTA_ICE_VORTEX: 1672,
ACT_DOTA_CHILLING_TOUCH: 1673,
ACT_DOTA_ENFEEBLE: 1674,
ACT_DOTA_FATAL_BONDS: 1675,
ACT_DOTA_MIDNIGHT_PULSE: 1676,
ACT_DOTA_ANCESTRAL_SPIRIT: 1677,
ACT_DOTA_THUNDER_STRIKE: 1678,
ACT_DOTA_KINETIC_FIELD: 1679,
ACT_DOTA_STATIC_STORM: 1680,
ACT_DOTA_MINI_TAUNT: 1681,
ACT_DOTA_ARCTIC_BURN_END: 1682,
ACT_DOTA_LOADOUT_RARE: 1683,
ACT_DOTA_SWIM: 1684,
ACT_DOTA_FLEE: 1685,
ACT_DOTA_TROT: 1686,
ACT_DOTA_SHAKE: 1687,
ACT_DOTA_SWIM_IDLE: 1688,
ACT_DOTA_WAIT_IDLE: 1689,
ACT_DOTA_GREET: 1690,
ACT_DOTA_TELEPORT_COOP_START: 1691,
ACT_DOTA_TELEPORT_COOP_WAIT: 1692,
ACT_DOTA_TELEPORT_COOP_END: 1693,
ACT_DOTA_TELEPORT_COOP_EXIT: 1694,
ACT_DOTA_SHOPKEEPER_PET_INTERACT: 1695,
ACT_DOTA_ITEM_PICKUP: 1696,
ACT_DOTA_ITEM_DROP: 1697,
ACT_DOTA_CAPTURE_PET: 1698,
ACT_DOTA_PET_WARD_OBSERVER: 1699,
ACT_DOTA_PET_WARD_SENTRY: 1700,
ACT_DOTA_PET_LEVEL: 1701,
ACT_DOTA_CAST_BURROW_END: 1702,
ACT_DOTA_LIFESTEALER_ASSIMILATE: 1703,
ACT_DOTA_LIFESTEALER_EJECT: 1704,
ACT_DOTA_ATTACK_EVENT_BASH: 1705,
ACT_DOTA_CAPTURE_RARE: 1706,
ACT_DOTA_AW_MAGNETIC_FIELD: 1707,
ACT_DOTA_CAST_GHOST_SHIP: 1708,
ACT_DOTA_FXANIM: 1709,
ACT_DOTA_VICTORY_START: 1710,
ACT_DOTA_DEFEAT_START: 1711,
ACT_DOTA_DP_SPIRIT_SIPHON: 1712,
ACT_DOTA_TRICKS_END: 1713,
ACT_DOTA_ES_STONE_CALLER: 1714,
ACT_DOTA_MK_STRIKE: 1715,
ACT_DOTA_VERSUS: 1716,
ACT_DOTA_CAPTURE_CARD: 1717,
ACT_DOTA_MK_SPRING_SOAR: 1718,
ACT_DOTA_MK_SPRING_END: 1719,
ACT_DOTA_MK_TREE_SOAR: 1720,
ACT_DOTA_MK_TREE_END: 1721,
ACT_DOTA_MK_FUR_ARMY: 1722,
ACT_DOTA_MK_SPRING_CAST: 1723,
ACT_DOTA_NECRO_GHOST_SHROUD: 1724,
ACT_DOTA_OVERRIDE_ARCANA: 1725,
ACT_DOTA_SLIDE: 1726,
ACT_DOTA_SLIDE_LOOP: 1727,
ACT_DOTA_GENERIC_CHANNEL_1: 1728,
ACT_DOTA_GS_SOUL_CHAIN: 1729,
ACT_DOTA_GS_INK_CREATURE: 1730,
ACT_DOTA_TRANSITION: 1731,
ACT_DOTA_BLINK_DAGGER: 1732,
ACT_DOTA_BLINK_DAGGER_END: 1733,
ACT_DOTA_CUSTOM_TOWER_ATTACK: 1734,
ACT_DOTA_CUSTOM_TOWER_IDLE: 1735,
ACT_DOTA_CUSTOM_TOWER_DIE: 1736,
ACT_DOTA_CAST_COLD_SNAP_ORB: 1737,
ACT_DOTA_CAST_GHOST_WALK_ORB: 1738,
ACT_DOTA_CAST_TORNADO_ORB: 1739,
ACT_DOTA_CAST_EMP_ORB: 1740,
ACT_DOTA_CAST_ALACRITY_ORB: 1741,
ACT_DOTA_CAST_CHAOS_METEOR_ORB: 1742,
ACT_DOTA_CAST_SUN_STRIKE_ORB: 1743,
ACT_DOTA_CAST_FORGE_SPIRIT_ORB: 1744,
ACT_DOTA_CAST_ICE_WALL_ORB: 1745,
ACT_DOTA_CAST_DEAFENING_BLAST_ORB: 1746,
ACT_DOTA_NOTICE: 1747,
ACT_DOTA_CAST_ABILITY_2_ALLY: 1748,
ACT_DOTA_SHUFFLE_L: 1749,
ACT_DOTA_SHUFFLE_R: 1750,
ACT_DOTA_OVERRIDE_LOADOUT: 1751,
ACT_DOTA_TAUNT_SPECIAL: 1752,
ACT_DOTA_TELEPORT_START: 1753,
ACT_DOTA_GENERIC_CHANNEL_1_START: 1754,
ACT_DOTA_CUSTOM_TOWER_IDLE_RARE: 1755,
ACT_DOTA_CUSTOM_TOWER_TAUNT: 1756,
ACT_DOTA_CUSTOM_TOWER_HIGH_FIVE: 1757,
ACT_DOTA_ATTACK_SPECIAL: 1758,
ACT_DOTA_TRANSITION_IDLE: 1759,
ACT_DOTA_PIERCE_THE_VEIL: 1760,
ACT_DOTA_RUN_RARE: 1761,
ACT_DOTA_VIPER_DIVE: 1762,
ACT_DOTA_VIPER_DIVE_END: 1763,
ACT_DOTA_MK_STRIKE_END: 1764}


/**
 @enum {number}
 */
var  DOTAMinimapEvent_t  = {DOTA_MINIMAP_EVENT_ANCIENT_UNDER_ATTACK: 2,
DOTA_MINIMAP_EVENT_BASE_UNDER_ATTACK: 4,
DOTA_MINIMAP_EVENT_BASE_GLYPHED: 8,
DOTA_MINIMAP_EVENT_TEAMMATE_UNDER_ATTACK: 16,
DOTA_MINIMAP_EVENT_TEAMMATE_TELEPORTING: 32,
DOTA_MINIMAP_EVENT_TEAMMATE_DIED: 64,
DOTA_MINIMAP_EVENT_TUTORIAL_TASK_ACTIVE: 128,
DOTA_MINIMAP_EVENT_TUTORIAL_TASK_FINISHED: 256,
DOTA_MINIMAP_EVENT_HINT_LOCATION: 512,
DOTA_MINIMAP_EVENT_ENEMY_TELEPORTING: 1024,
DOTA_MINIMAP_EVENT_CANCEL_TELEPORTING: 2048,
DOTA_MINIMAP_EVENT_RADAR: 4096,
DOTA_MINIMAP_EVENT_RADAR_TARGET: 8192,
DOTA_MINIMAP_EVENT_MOVE_TO_TARGET: 16384}


/**
 @enum {number}
 */
var  DOTASlotType_t  = {DOTA_LOADOUT_TYPE_INVALID: -1,
DOTA_LOADOUT_TYPE_WEAPON: 0,
DOTA_LOADOUT_TYPE_OFFHAND_WEAPON: 1,
DOTA_LOADOUT_TYPE_WEAPON2: 2,
DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2: 3,
DOTA_LOADOUT_TYPE_HEAD: 4,
DOTA_LOADOUT_TYPE_SHOULDER: 5,
DOTA_LOADOUT_TYPE_ARMS: 6,
DOTA_LOADOUT_TYPE_ARMOR: 7,
DOTA_LOADOUT_TYPE_BELT: 8,
DOTA_LOADOUT_TYPE_NECK: 9,
DOTA_LOADOUT_TYPE_BACK: 10,
DOTA_LOADOUT_TYPE_GLOVES: 11,
DOTA_LOADOUT_TYPE_LEGS: 12,
DOTA_LOADOUT_TYPE_TAIL: 13,
DOTA_LOADOUT_TYPE_MISC: 14,
DOTA_LOADOUT_TYPE_COSTUME: 15,
DOTA_LOADOUT_TYPE_BODY_HEAD: 16,
DOTA_LOADOUT_TYPE_MOUNT: 17,
DOTA_LOADOUT_TYPE_SUMMON: 18,
DOTA_LOADOUT_TYPE_SHAPESHIFT: 19,
DOTA_LOADOUT_TYPE_TAUNT: 20,
DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS: 21,
DOTA_LOADOUT_TYPE_ABILITY_ATTACK: 22,
DOTA_LOADOUT_TYPE_ABILITY1: 23,
DOTA_LOADOUT_TYPE_ABILITY2: 24,
DOTA_LOADOUT_TYPE_ABILITY3: 25,
DOTA_LOADOUT_TYPE_ABILITY4: 26,
DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE: 27,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_1: 28,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_2: 29,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_3: 30,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_4: 31,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_5: 32,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_6: 33,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_7: 34,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_8: 35,
DOTA_LOADOUT_TYPE_ABILITY_EFFECTS_9: 36,
DOTA_LOADOUT_TYPE_VOICE: 37,
DOTA_LOADOUT_TYPE_WEAPON_PERSONA_1: 38,
DOTA_LOADOUT_TYPE_OFFHAND_WEAPON_PERSONA_1: 39,
DOTA_LOADOUT_TYPE_WEAPON2_PERSONA_1: 40,
DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2_PERSONA_1: 41,
DOTA_LOADOUT_TYPE_HEAD_PERSONA_1: 42,
DOTA_LOADOUT_TYPE_SHOULDER_PERSONA_1: 43,
DOTA_LOADOUT_TYPE_ARMS_PERSONA_1: 44,
DOTA_LOADOUT_TYPE_ARMOR_PERSONA_1: 45,
DOTA_LOADOUT_TYPE_BELT_PERSONA_1: 46,
DOTA_LOADOUT_TYPE_NECK_PERSONA_1: 47,
DOTA_LOADOUT_TYPE_BACK_PERSONA_1: 48,
DOTA_LOADOUT_TYPE_LEGS_PERSONA_1: 49,
DOTA_LOADOUT_TYPE_GLOVES_PERSONA_1: 50,
DOTA_LOADOUT_TYPE_TAIL_PERSONA_1: 51,
DOTA_LOADOUT_TYPE_MISC_PERSONA_1: 52,
DOTA_LOADOUT_TYPE_BODY_HEAD_PERSONA_1: 53,
DOTA_LOADOUT_TYPE_MOUNT_PERSONA_1: 54,
DOTA_LOADOUT_TYPE_SUMMON_PERSONA_1: 55,
DOTA_LOADOUT_TYPE_SHAPESHIFT_PERSONA_1: 56,
DOTA_LOADOUT_TYPE_TAUNT_PERSONA_1: 57,
DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS_PERSONA_1: 58,
DOTA_LOADOUT_TYPE_ABILITY_ATTACK_PERSONA_1: 59,
DOTA_LOADOUT_TYPE_ABILITY1_PERSONA_1: 60,
DOTA_LOADOUT_TYPE_ABILITY2_PERSONA_1: 61,
DOTA_LOADOUT_TYPE_ABILITY3_PERSONA_1: 62,
DOTA_LOADOUT_TYPE_ABILITY4_PERSONA_1: 63,
DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE_PERSONA_1: 64,
DOTA_LOADOUT_TYPE_VOICE_PERSONA_1: 65,
DOTA_LOADOUT_PERSONA_1_START: 38,
DOTA_LOADOUT_PERSONA_1_END: 65,
DOTA_LOADOUT_TYPE_PERSONA_SELECTOR: 66,
DOTA_LOADOUT_TYPE_COURIER: 67,
DOTA_LOADOUT_TYPE_ANNOUNCER: 68,
DOTA_LOADOUT_TYPE_MEGA_KILLS: 69,
DOTA_LOADOUT_TYPE_MUSIC: 70,
DOTA_LOADOUT_TYPE_WARD: 71,
DOTA_LOADOUT_TYPE_HUD_SKIN: 72,
DOTA_LOADOUT_TYPE_LOADING_SCREEN: 73,
DOTA_LOADOUT_TYPE_WEATHER: 74,
DOTA_LOADOUT_TYPE_HEROIC_STATUE: 75,
DOTA_LOADOUT_TYPE_MULTIKILL_BANNER: 76,
DOTA_LOADOUT_TYPE_CURSOR_PACK: 77,
DOTA_LOADOUT_TYPE_TELEPORT_EFFECT: 78,
DOTA_LOADOUT_TYPE_BLINK_EFFECT: 79,
DOTA_LOADOUT_TYPE_EMBLEM: 80,
DOTA_LOADOUT_TYPE_TERRAIN: 81,
DOTA_LOADOUT_TYPE_RADIANT_CREEPS: 82,
DOTA_LOADOUT_TYPE_DIRE_CREEPS: 83,
DOTA_LOADOUT_TYPE_RADIANT_TOWER: 84,
DOTA_LOADOUT_TYPE_DIRE_TOWER: 85,
DOTA_LOADOUT_TYPE_VERSUS_SCREEN: 86,
DOTA_LOADOUT_TYPE_STREAK_EFFECT: 87,
DOTA_LOADOUT_TYPE_KILL_EFFECT: 88,
DOTA_LOADOUT_TYPE_DEATH_EFFECT: 89,
DOTA_LOADOUT_TYPE_HEAD_EFFECT: 90,
DOTA_LOADOUT_TYPE_MAP_EFFECT: 91,
DOTA_LOADOUT_TYPE_COURIER_EFFECT: 92,
DOTA_LOADOUT_TYPE_RADIANT_SIEGE_CREEPS: 93,
DOTA_LOADOUT_TYPE_DIRE_SIEGE_CREEPS: 94,
DOTA_LOADOUT_TYPE_ROSHAN: 95,
DOTA_LOADOUT_TYPE_TORMENTOR: 96,
DOTA_PLAYER_LOADOUT_START: 67,
DOTA_PLAYER_LOADOUT_END: 96,
DOTA_LOADOUT_TYPE_NONE: 97,
DOTA_LOADOUT_TYPE_COUNT: 98}


/**
 @enum {number}
 */
var  modifierfunction  = {MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE: 0,
MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_TARGET: 1,
MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC: 2,
MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT: 3,
MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE: 4,
MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL: 5,
MODIFIER_PROPERTY_PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL: 6,
MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL: 7,
MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE: 8,
MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET: 9,
MODIFIER_PROPERTY_PROCATTACK_FEEDBACK: 10,
MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE: 11,
MODIFIER_PROPERTY_PRE_ATTACK: 12,
MODIFIER_PROPERTY_INVISIBILITY_LEVEL: 13,
MODIFIER_PROPERTY_INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION: 14,
MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY: 15,
MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT: 16,
MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE: 17,
MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE: 18,
MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE: 19,
MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE: 20,
MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2: 21,
MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE: 22,
MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE_2: 23,
MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE: 24,
MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN: 25,
MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MAX: 26,
MODIFIER_PROPERTY_IGNORE_MOVESPEED_LIMIT: 27,
MODIFIER_PROPERTY_MOVESPEED_LIMIT: 28,
MODIFIER_PROPERTY_ATTACKSPEED_BASE_OVERRIDE: 29,
MODIFIER_PROPERTY_FIXED_ATTACK_RATE: 30,
MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT: 31,
MODIFIER_PROPERTY_IGNORE_ATTACKSPEED_LIMIT: 32,
MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT: 33,
MODIFIER_PROPERTY_MANACOST_REDUCTION_CONSTANT: 34,
MODIFIER_PROPERTY_HEALTHCOST_REDUCTION_CONSTANT: 35,
MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT: 36,
MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT_ADJUST: 37,
MODIFIER_PROPERTY_BASE_ATTACK_TIME_PERCENTAGE: 38,
MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT: 39,
MODIFIER_PROPERTY_BONUSDAMAGEOUTGOING_PERCENTAGE: 40,
MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE: 41,
MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION: 42,
MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY: 43,
MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE: 44,
MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_CREEP: 45,
MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE: 46,
MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_UNIQUE: 47,
MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_SOURCE: 48,
MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET: 49,
MODIFIER_PROPERTY_HP_REGEN_CAN_BE_NEGATIVE: 50,
MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE: 51,
MODIFIER_PROPERTY_LIFESTEAL_AMPLIFY_PERCENTAGE: 52,
MODIFIER_PROPERTY_SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE: 53,
MODIFIER_PROPERTY_MP_REGEN_AMPLIFY_PERCENTAGE: 54,
MODIFIER_PROPERTY_MANA_DRAIN_AMPLIFY_PERCENTAGE: 55,
MODIFIER_PROPERTY_MP_RESTORE_AMPLIFY_PERCENTAGE: 56,
MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE: 57,
MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE: 58,
MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE: 59,
MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE: 60,
MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT: 61,
MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT: 62,
MODIFIER_PROPERTY_EVASION_CONSTANT: 63,
MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT: 64,
MODIFIER_PROPERTY_STATUS_RESISTANCE: 65,
MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING: 66,
MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER: 67,
MODIFIER_PROPERTY_AVOID_DAMAGE: 68,
MODIFIER_PROPERTY_AVOID_SPELL: 69,
MODIFIER_PROPERTY_MISS_PERCENTAGE: 70,
MODIFIER_PROPERTY_PHYSICAL_ARMOR_BASE_PERCENTAGE: 71,
MODIFIER_PROPERTY_PHYSICAL_ARMOR_TOTAL_PERCENTAGE: 72,
MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS: 73,
MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE: 74,
MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE: 75,
MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_POST: 76,
MODIFIER_PROPERTY_MIN_PHYSICAL_ARMOR: 77,
MODIFIER_PROPERTY_IGNORE_PHYSICAL_ARMOR: 78,
MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BASE_REDUCTION: 79,
MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DIRECT_MODIFICATION: 80,
MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS: 81,
MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS_ILLUSIONS: 82,
MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS_UNIQUE: 83,
MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE: 84,
MODIFIER_PROPERTY_BASE_MANA_REGEN: 85,
MODIFIER_PROPERTY_MANA_REGEN_CONSTANT: 86,
MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE: 87,
MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE: 88,
MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT: 89,
MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE: 90,
MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE_UNIQUE: 91,
MODIFIER_PROPERTY_HEALTH_BONUS: 92,
MODIFIER_PROPERTY_MANA_BONUS: 93,
MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS: 94,
MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS: 95,
MODIFIER_PROPERTY_EXTRA_MANA_BONUS: 96,
MODIFIER_PROPERTY_EXTRA_MANA_BONUS_PERCENTAGE: 97,
MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE: 98,
MODIFIER_PROPERTY_EXTRA_MANA_PERCENTAGE: 99,
MODIFIER_PROPERTY_STATS_STRENGTH_BONUS: 100,
MODIFIER_PROPERTY_STATS_AGILITY_BONUS: 101,
MODIFIER_PROPERTY_STATS_INTELLECT_BONUS: 102,
MODIFIER_PROPERTY_STATS_STRENGTH_BONUS_PERCENTAGE: 103,
MODIFIER_PROPERTY_STATS_AGILITY_BONUS_PERCENTAGE: 104,
MODIFIER_PROPERTY_STATS_INTELLECT_BONUS_PERCENTAGE: 105,
MODIFIER_PROPERTY_CAST_RANGE_BONUS: 106,
MODIFIER_PROPERTY_CAST_RANGE_BONUS_PERCENTAGE: 107,
MODIFIER_PROPERTY_CAST_RANGE_BONUS_TARGET: 108,
MODIFIER_PROPERTY_CAST_RANGE_BONUS_STACKING: 109,
MODIFIER_PROPERTY_ATTACK_RANGE_BASE_OVERRIDE: 110,
MODIFIER_PROPERTY_ATTACK_RANGE_BONUS: 111,
MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE: 112,
MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_PERCENTAGE: 113,
MODIFIER_PROPERTY_MAX_ATTACK_RANGE: 114,
MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS: 115,
MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS_PERCENTAGE: 116,
MODIFIER_PROPERTY_PROJECTILE_NAME: 117,
MODIFIER_PROPERTY_REINCARNATION: 118,
MODIFIER_PROPERTY_REINCARNATION_SUPPRESS_FX: 119,
MODIFIER_PROPERTY_RESPAWNTIME: 120,
MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE: 121,
MODIFIER_PROPERTY_RESPAWNTIME_STACKING: 122,
MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE: 123,
MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_ONGOING: 124,
MODIFIER_PROPERTY_CASTTIME_PERCENTAGE: 125,
MODIFIER_PROPERTY_ATTACK_ANIM_TIME_PERCENTAGE: 126,
MODIFIER_PROPERTY_MANACOST_PERCENTAGE: 127,
MODIFIER_PROPERTY_MANACOST_PERCENTAGE_STACKING: 128,
MODIFIER_PROPERTY_HEALTHCOST_PERCENTAGE: 129,
MODIFIER_PROPERTY_HEALTHCOST_PERCENTAGE_STACKING: 130,
MODIFIER_PROPERTY_DEATHGOLDCOST: 131,
MODIFIER_PROPERTY_EXP_RATE_BOOST: 132,
MODIFIER_PROPERTY_GOLD_RATE_BOOST: 133,
MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE: 134,
MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE: 135,
MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK: 136,
MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK: 137,
MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL: 138,
MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR: 139,
MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK: 140,
MODIFIER_PROPERTY_OVERRIDE_ANIMATION: 141,
MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT: 142,
MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE: 143,
MODIFIER_PROPERTY_ABSORB_SPELL: 144,
MODIFIER_PROPERTY_REFLECT_SPELL: 145,
MODIFIER_PROPERTY_DISABLE_AUTOATTACK: 146,
MODIFIER_PROPERTY_BONUS_DAY_VISION: 147,
MODIFIER_PROPERTY_BONUS_DAY_VISION_PERCENTAGE: 148,
MODIFIER_PROPERTY_BONUS_NIGHT_VISION: 149,
MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE: 150,
MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE: 151,
MODIFIER_PROPERTY_FIXED_DAY_VISION: 152,
MODIFIER_PROPERTY_FIXED_NIGHT_VISION: 153,
MODIFIER_PROPERTY_MIN_HEALTH: 154,
MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL: 155,
MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL: 156,
MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE: 157,
MODIFIER_PROPERTY_IS_ILLUSION: 158,
MODIFIER_PROPERTY_ILLUSION_LABEL: 159,
MODIFIER_PROPERTY_STRONG_ILLUSION: 160,
MODIFIER_PROPERTY_SUPER_ILLUSION: 161,
MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE: 162,
MODIFIER_PROPERTY_XP_DURING_DEATH: 163,
MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE: 164,
MODIFIER_PROPERTY_TURN_RATE_OVERRIDE: 165,
MODIFIER_PROPERTY_DISABLE_HEALING: 166,
MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK: 167,
MODIFIER_PROPERTY_ALWAYS_ETHEREAL_ATTACK: 168,
MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL: 169,
MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH: 170,
MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER: 171,
MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER: 172,
MODIFIER_PROPERTY_UNIT_DISALLOW_UPGRADING: 173,
MODIFIER_PROPERTY_DODGE_PROJECTILE: 174,
MODIFIER_PROPERTY_TRIGGER_COSMETIC_AND_END_ATTACK: 175,
MODIFIER_PROPERTY_MAX_DEBUFF_DURATION: 176,
MODIFIER_PROPERTY_PRIMARY_STAT_DAMAGE_MULTIPLIER: 177,
MODIFIER_PROPERTY_PREATTACK_DEADLY_BLOW: 178,
MODIFIER_PROPERTY_ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION: 179,
MODIFIER_EVENT_ON_SPELL_TARGET_READY: 180,
MODIFIER_EVENT_ON_ATTACK_RECORD: 181,
MODIFIER_EVENT_ON_ATTACK_START: 182,
MODIFIER_EVENT_ON_ATTACK: 183,
MODIFIER_EVENT_ON_ATTACK_LANDED: 184,
MODIFIER_EVENT_ON_ATTACK_FAIL: 185,
MODIFIER_EVENT_ON_ATTACK_ALLIED: 186,
MODIFIER_EVENT_ON_PROJECTILE_DODGE: 187,
MODIFIER_EVENT_ON_ORDER: 188,
MODIFIER_EVENT_ON_UNIT_MOVED: 189,
MODIFIER_EVENT_ON_ABILITY_START: 190,
MODIFIER_EVENT_ON_ABILITY_EXECUTED: 191,
MODIFIER_EVENT_ON_ABILITY_FULLY_CAST: 192,
MODIFIER_EVENT_ON_BREAK_INVISIBILITY: 193,
MODIFIER_EVENT_ON_ABILITY_END_CHANNEL: 194,
MODIFIER_EVENT_ON_PROCESS_UPGRADE: 195,
MODIFIER_EVENT_ON_REFRESH: 196,
MODIFIER_EVENT_ON_TAKEDAMAGE: 197,
MODIFIER_EVENT_ON_DEATH_PREVENTED: 198,
MODIFIER_EVENT_ON_STATE_CHANGED: 199,
MODIFIER_EVENT_ON_ORB_EFFECT: 200,
MODIFIER_EVENT_ON_PROCESS_CLEAVE: 201,
MODIFIER_EVENT_ON_DAMAGE_CALCULATED: 202,
MODIFIER_EVENT_ON_MAGIC_DAMAGE_CALCULATED: 203,
MODIFIER_EVENT_ON_ATTACKED: 204,
MODIFIER_EVENT_ON_DEATH: 205,
MODIFIER_EVENT_ON_DEATH_COMPLETED: 206,
MODIFIER_EVENT_ON_RESPAWN: 207,
MODIFIER_EVENT_ON_SPENT_MANA: 208,
MODIFIER_EVENT_ON_SPENT_HEALTH: 209,
MODIFIER_EVENT_ON_TELEPORTING: 210,
MODIFIER_EVENT_ON_TELEPORTED: 211,
MODIFIER_EVENT_ON_SET_LOCATION: 212,
MODIFIER_EVENT_ON_HEALTH_GAINED: 213,
MODIFIER_EVENT_ON_MANA_GAINED: 214,
MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT: 215,
MODIFIER_EVENT_ON_HERO_KILLED: 216,
MODIFIER_EVENT_ON_HEAL_RECEIVED: 217,
MODIFIER_EVENT_ON_BUILDING_KILLED: 218,
MODIFIER_EVENT_ON_MODEL_CHANGED: 219,
MODIFIER_EVENT_ON_MODIFIER_ADDED: 220,
MODIFIER_PROPERTY_TOOLTIP: 221,
MODIFIER_PROPERTY_MODEL_CHANGE: 222,
MODIFIER_PROPERTY_MODEL_SCALE: 223,
MODIFIER_PROPERTY_MODEL_SCALE_ANIMATE_TIME: 224,
MODIFIER_PROPERTY_MODEL_SCALE_USE_IN_OUT_EASE: 225,
MODIFIER_PROPERTY_MODEL_SCALE_CONSTANT: 226,
MODIFIER_PROPERTY_IS_SCEPTER: 227,
MODIFIER_PROPERTY_IS_SHARD: 228,
MODIFIER_PROPERTY_RADAR_COOLDOWN_REDUCTION: 229,
MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS: 230,
MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND: 231,
MODIFIER_PROPERTY_LIFETIME_FRACTION: 232,
MODIFIER_PROPERTY_PROVIDES_FOW_POSITION: 233,
MODIFIER_PROPERTY_SPELLS_REQUIRE_HP: 234,
MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP: 235,
MODIFIER_PROPERTY_DISABLE_TURNING: 236,
MODIFIER_PROPERTY_IGNORE_CAST_ANGLE: 237,
MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE: 238,
MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL: 239,
MODIFIER_PROPERTY_OVERRIDE_ABILITY_SPECIAL_VALUE: 240,
MODIFIER_PROPERTY_ABILITY_LAYOUT: 241,
MODIFIER_EVENT_ON_DOMINATED: 242,
MODIFIER_EVENT_ON_KILL: 243,
MODIFIER_EVENT_ON_ASSIST: 244,
MODIFIER_PROPERTY_TEMPEST_DOUBLE: 245,
MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE: 246,
MODIFIER_EVENT_ON_ATTACK_FINISHED: 247,
MODIFIER_PROPERTY_IGNORE_COOLDOWN: 248,
MODIFIER_PROPERTY_CAN_ATTACK_TREES: 249,
MODIFIER_PROPERTY_VISUAL_Z_DELTA: 250,
MODIFIER_PROPERTY_VISUAL_Z_SPEED_BASE_OVERRIDE: 251,
MODIFIER_PROPERTY_INCOMING_DAMAGE_ILLUSION: 252,
MODIFIER_PROPERTY_DONT_GIVE_VISION_OF_ATTACKER: 253,
MODIFIER_PROPERTY_TOOLTIP2: 254,
MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY: 255,
MODIFIER_EVENT_ON_PROJECTILE_OBSTRUCTION_HIT: 256,
MODIFIER_PROPERTY_SUPPRESS_TELEPORT: 257,
MODIFIER_EVENT_ON_ATTACK_CANCELLED: 258,
MODIFIER_PROPERTY_SUPPRESS_CLEAVE: 259,
MODIFIER_PROPERTY_BOT_ATTACK_SCORE_BONUS: 260,
MODIFIER_PROPERTY_ATTACKSPEED_REDUCTION_PERCENTAGE: 261,
MODIFIER_PROPERTY_MOVESPEED_REDUCTION_PERCENTAGE: 262,
MODIFIER_PROPERTY_ATTACK_WHILE_MOVING_TARGET: 263,
MODIFIER_PROPERTY_ATTACKSPEED_PERCENTAGE: 264,
MODIFIER_EVENT_ON_ATTEMPT_PROJECTILE_DODGE: 265,
MODIFIER_EVENT_ON_PREDEBUFF_APPLIED: 266,
MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING: 267,
MODIFIER_PROPERTY_SPELL_REDIRECT_TARGET: 268,
MODIFIER_PROPERTY_TURN_RATE_CONSTANT: 269,
MODIFIER_PROPERTY_RAT_PACK: 270,
MODIFIER_PROPERTY_PHYSICALDAMAGEOUTGOING_PERCENTAGE: 271,
MODIFIER_PROPERTY_KNOCKBACK_AMPLIFICATION_PERCENTAGE: 272,
MODIFIER_PROPERTY_HEALTHBAR_PIPS: 273,
MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT: 274,
MODIFIER_EVENT_SPELL_APPLIED_SUCCESSFULLY: 275,
MODIFIER_PROPERTY_AVOID_DAMAGE_AFTER_REDUCTIONS: 276,
MODIFIER_PROPERTY_FAIL_ATTACK: 277,
MODIFIER_PROPERTY_PREREDUCE_INCOMING_DAMAGE_MULT: 278,
MODIFIER_PROPERTY_SUPPRESS_FULLSCREEN_DEATH_FX: 279,
MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT_POST: 280,
MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE: 281,
MODIFIER_PROPERTY_TICK_GOLD_MULTIPLIER: 282,
MODIFIER_PROPERTY_SLOW_RESISTANCE: 283,
MODIFIER_PROPERTY_AOE_BONUS_PERCENTAGE: 284,
MODIFIER_PROPERTY_PROJECTILE_SPEED: 285,
MODIFIER_PROPERTY_BECOME_UNIVERSAL: 286,
MODIFIER_EVENT_ON_FORCE_PROC_MAGIC_STICK: 287,
MODIFIER_PROPERTY_DO_NOT_SINK_AFTER_DEATH: 288,
MODIFIER_EVENT_ON_DAMAGE_HPLOSS: 289,
MODIFIER_PROPERTY_FORCE_MAX_HEALTH: 290,
MODIFIER_PROPERTY_AOE_BONUS_CONSTANT: 291,
MODIFIER_FUNCTION_LAST: 292,
MODIFIER_FUNCTION_INVALID: 65535}


/**
 @enum {number}
 */
var  modifierstate  = {MODIFIER_STATE_ROOTED: 0,
MODIFIER_STATE_DISARMED: 1,
MODIFIER_STATE_ATTACK_IMMUNE: 2,
MODIFIER_STATE_SILENCED: 3,
MODIFIER_STATE_MUTED: 4,
MODIFIER_STATE_STUNNED: 5,
MODIFIER_STATE_HEXED: 6,
MODIFIER_STATE_INVISIBLE: 7,
MODIFIER_STATE_INVULNERABLE: 8,
MODIFIER_STATE_MAGIC_IMMUNE: 9,
MODIFIER_STATE_PROVIDES_VISION: 10,
MODIFIER_STATE_NIGHTMARED: 11,
MODIFIER_STATE_BLOCK_DISABLED: 12,
MODIFIER_STATE_EVADE_DISABLED: 13,
MODIFIER_STATE_UNSELECTABLE: 14,
MODIFIER_STATE_CANNOT_TARGET_ENEMIES: 15,
MODIFIER_STATE_CANNOT_TARGET_BUILDINGS: 16,
MODIFIER_STATE_CANNOT_MISS: 17,
MODIFIER_STATE_SPECIALLY_DENIABLE: 18,
MODIFIER_STATE_FROZEN: 19,
MODIFIER_STATE_COMMAND_RESTRICTED: 20,
MODIFIER_STATE_NOT_ON_MINIMAP: 21,
MODIFIER_STATE_LOW_ATTACK_PRIORITY: 22,
MODIFIER_STATE_NO_HEALTH_BAR: 23,
MODIFIER_STATE_NO_HEALTH_BAR_FOR_ENEMIES: 24,
MODIFIER_STATE_NO_HEALTH_BAR_FOR_OTHER_PLAYERS: 25,
MODIFIER_STATE_FLYING: 26,
MODIFIER_STATE_NO_UNIT_COLLISION: 27,
MODIFIER_STATE_NO_TEAM_MOVE_TO: 28,
MODIFIER_STATE_NO_TEAM_SELECT: 29,
MODIFIER_STATE_PASSIVES_DISABLED: 30,
MODIFIER_STATE_DOMINATED: 31,
MODIFIER_STATE_BLIND: 32,
MODIFIER_STATE_OUT_OF_GAME: 33,
MODIFIER_STATE_FAKE_ALLY: 34,
MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY: 35,
MODIFIER_STATE_TRUESIGHT_IMMUNE: 36,
MODIFIER_STATE_UNTARGETABLE: 37,
MODIFIER_STATE_UNTARGETABLE_ALLIED: 38,
MODIFIER_STATE_UNTARGETABLE_ENEMY: 39,
MODIFIER_STATE_UNTARGETABLE_SELF: 40,
MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS: 41,
MODIFIER_STATE_ALLOW_PATHING_THROUGH_TREES: 42,
MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES: 43,
MODIFIER_STATE_UNSLOWABLE: 44,
MODIFIER_STATE_TETHERED: 45,
MODIFIER_STATE_IGNORING_STOP_ORDERS: 46,
MODIFIER_STATE_FEARED: 47,
MODIFIER_STATE_TAUNTED: 48,
MODIFIER_STATE_CANNOT_BE_MOTION_CONTROLLED: 49,
MODIFIER_STATE_FORCED_FLYING_VISION: 50,
MODIFIER_STATE_ATTACK_ALLIES: 51,
MODIFIER_STATE_ALLOW_PATHING_THROUGH_CLIFFS: 52,
MODIFIER_STATE_ALLOW_PATHING_THROUGH_FISSURE: 53,
MODIFIER_STATE_SPECIALLY_UNDENIABLE: 54,
MODIFIER_STATE_ALLOW_PATHING_THROUGH_OBSTRUCTIONS: 55,
MODIFIER_STATE_DEBUFF_IMMUNE: 56,
MODIFIER_STATE_NO_INVISIBILITY_VISUALS: 57,
MODIFIER_STATE_ALLOW_PATHING_THROUGH_BASE_BLOCKER: 58,
MODIFIER_STATE_IGNORING_MOVE_ORDERS: 59,
MODIFIER_STATE_LAST: 60}


/**
 @enum {number}
 */
var  DOTAModifierAttribute_t  = {MODIFIER_ATTRIBUTE_NONE: 0,
MODIFIER_ATTRIBUTE_PERMANENT: 1,
MODIFIER_ATTRIBUTE_MULTIPLE: 2,
MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE: 4,
MODIFIER_ATTRIBUTE_AURA_PRIORITY: 8,
MODIFIER_ATTRIBUTE_IGNORE_DODGE: 16}


/**
 @enum {number}
 */
var  Attributes  = {DOTA_ATTRIBUTE_STRENGTH: 0,
DOTA_ATTRIBUTE_AGILITY: 1,
DOTA_ATTRIBUTE_INTELLECT: 2,
DOTA_ATTRIBUTE_ALL: 3,
DOTA_ATTRIBUTE_MAX: 4,
DOTA_ATTRIBUTE_INVALID: -1}


/**
 @enum {number}
 */
var  ParticleAttachment_t  = {PATTACH_INVALID: -1,
PATTACH_ABSORIGIN: 0,
PATTACH_ABSORIGIN_FOLLOW: 1,
PATTACH_CUSTOMORIGIN: 2,
PATTACH_CUSTOMORIGIN_FOLLOW: 3,
PATTACH_POINT: 4,
PATTACH_POINT_FOLLOW: 5,
PATTACH_EYES_FOLLOW: 6,
PATTACH_OVERHEAD_FOLLOW: 7,
PATTACH_WORLDORIGIN: 8,
PATTACH_ROOTBONE_FOLLOW: 9,
PATTACH_RENDERORIGIN_FOLLOW: 10,
PATTACH_MAIN_VIEW: 11,
PATTACH_WATERWAKE: 12,
PATTACH_CENTER_FOLLOW: 13,
PATTACH_CUSTOM_GAME_STATE_1: 14,
PATTACH_HEALTHBAR: 15,
MAX_PATTACH_TYPES: 16}


/**
 @enum {number}
 */
var  DOTA_MOTION_CONTROLLER_PRIORITY  = {DOTA_MOTION_CONTROLLER_PRIORITY_LOWEST: 0,
DOTA_MOTION_CONTROLLER_PRIORITY_LOW: 1,
DOTA_MOTION_CONTROLLER_PRIORITY_MEDIUM: 2,
DOTA_MOTION_CONTROLLER_PRIORITY_HIGH: 3,
DOTA_MOTION_CONTROLLER_PRIORITY_HIGHEST: 4,
DOTA_MOTION_CONTROLLER_PRIORITY_ULTRA: 5}


/**
 @enum {number}
 */
var  DOTASpeechType_t  = {DOTA_SPEECH_USER_INVALID: 0,
DOTA_SPEECH_USER_SINGLE: 1,
DOTA_SPEECH_USER_TEAM: 2,
DOTA_SPEECH_USER_TEAM_NEARBY: 3,
DOTA_SPEECH_USER_NEARBY: 4,
DOTA_SPEECH_USER_ALL: 5,
DOTA_SPEECH_GOOD_TEAM: 6,
DOTA_SPEECH_BAD_TEAM: 7,
DOTA_SPEECH_SPECTATOR: 8,
DOTA_SPEECH_USER_TEAM_NOSPECTATOR: 9,
DOTA_SPEECH_RECIPIENT_TYPE_MAX: 10}


/**
 @enum {number}
 */
var  DOTAAbilitySpeakTrigger_t  = {DOTA_ABILITY_SPEAK_START_ACTION_PHASE: 0,
DOTA_ABILITY_SPEAK_CAST: 1}


/**
 @enum {number}
 */
var  DotaCustomUIType_t  = {DOTA_CUSTOM_UI_TYPE_HUD: 0,
DOTA_CUSTOM_UI_TYPE_HERO_SELECTION: 1,
DOTA_CUSTOM_UI_TYPE_PREGAME_STRATEGY: 2,
DOTA_CUSTOM_UI_TYPE_GAME_INFO: 3,
DOTA_CUSTOM_UI_TYPE_GAME_SETUP: 4,
DOTA_CUSTOM_UI_TYPE_FLYOUT_SCOREBOARD: 5,
DOTA_CUSTOM_UI_TYPE_HUD_TOP_BAR: 6,
DOTA_CUSTOM_UI_TYPE_END_SCREEN: 7,
DOTA_CUSTOM_UI_TYPE_COUNT: 8,
DOTA_CUSTOM_UI_TYPE_INVALID: -1}


/**
 @enum {number}
 */
var  DotaDefaultUIElement_t  = {DOTA_DEFAULT_UI_INVALID: -1,
DOTA_DEFAULT_UI_TOP_TIMEOFDAY: 0,
DOTA_DEFAULT_UI_TOP_HEROES: 1,
DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD: 2,
DOTA_DEFAULT_UI_ACTION_PANEL: 3,
DOTA_DEFAULT_UI_ACTION_MINIMAP: 4,
DOTA_DEFAULT_UI_INVENTORY_PANEL: 5,
DOTA_DEFAULT_UI_INVENTORY_SHOP: 6,
DOTA_DEFAULT_UI_INVENTORY_ITEMS: 7,
DOTA_DEFAULT_UI_INVENTORY_QUICKBUY: 8,
DOTA_DEFAULT_UI_INVENTORY_COURIER: 9,
DOTA_DEFAULT_UI_INVENTORY_PROTECT: 10,
DOTA_DEFAULT_UI_INVENTORY_GOLD: 11,
DOTA_DEFAULT_UI_SHOP_SUGGESTEDITEMS: 12,
DOTA_DEFAULT_UI_SHOP_COMMONITEMS: 13,
DOTA_DEFAULT_UI_HERO_SELECTION_TEAMS: 14,
DOTA_DEFAULT_UI_HERO_SELECTION_GAME_NAME: 15,
DOTA_DEFAULT_UI_HERO_SELECTION_CLOCK: 16,
DOTA_DEFAULT_UI_HERO_SELECTION_HEADER: 17,
DOTA_DEFAULT_UI_TOP_MENU_BUTTONS: 18,
DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND: 19,
DOTA_DEFAULT_UI_TOP_BAR_RADIANT_TEAM: 20,
DOTA_DEFAULT_UI_TOP_BAR_DIRE_TEAM: 21,
DOTA_DEFAULT_UI_TOP_BAR_SCORE: 22,
DOTA_DEFAULT_UI_ENDGAME: 23,
DOTA_DEFAULT_UI_ENDGAME_CHAT: 24,
DOTA_DEFAULT_UI_QUICK_STATS: 25,
DOTA_DEFAULT_UI_PREGAME_STRATEGYUI: 26,
DOTA_DEFAULT_UI_KILLCAM: 27,
DOTA_DEFAULT_UI_FIGHT_RECAP: 28,
DOTA_DEFAULT_UI_TOP_BAR: 29,
DOTA_DEFAULT_UI_CUSTOMUI_BEHIND_HUD_ELEMENTS: 30,
DOTA_DEFAULT_UI_AGHANIMS_STATUS: 31,
DOTA_DEFAULT_UI_ELEMENT_COUNT: 32}


/**
 @enum {number}
 */
var  PlayerUltimateStateOrTime_t  = {PLAYER_ULTIMATE_STATE_READY: 0,
PLAYER_ULTIMATE_STATE_NO_MANA: -1,
PLAYER_ULTIMATE_STATE_NOT_LEVELED: -2,
PLAYER_ULTIMATE_STATE_HIDDEN: -3}


/**
 @enum {number}
 */
var  PlayerOrderIssuer_t  = {DOTA_ORDER_ISSUER_SELECTED_UNITS: 0,
DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY: 1,
DOTA_ORDER_ISSUER_HERO_ONLY: 2,
DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY: 3}


/**
 @enum {number}
 */
var  OrderQueueBehavior_t  = {DOTA_ORDER_QUEUE_DEFAULT: 0,
DOTA_ORDER_QUEUE_NEVER: 1,
DOTA_ORDER_QUEUE_ALWAYS: 2}


/**
 @enum {number}
 */
var  CLICK_BEHAVIORS  = {DOTA_CLICK_BEHAVIOR_NONE: 0,
DOTA_CLICK_BEHAVIOR_MOVE: 1,
DOTA_CLICK_BEHAVIOR_ATTACK: 2,
DOTA_CLICK_BEHAVIOR_CAST: 3,
DOTA_CLICK_BEHAVIOR_DROP_ITEM: 4,
DOTA_CLICK_BEHAVIOR_DROP_SHOP_ITEM: 5,
DOTA_CLICK_BEHAVIOR_DRAG: 6,
DOTA_CLICK_BEHAVIOR_LEARN_ABILITY: 7,
DOTA_CLICK_BEHAVIOR_PATROL: 8,
DOTA_CLICK_BEHAVIOR_VECTOR_CAST: 9,
DOTA_CLICK_BEHAVIOR_UNUSED: 10,
DOTA_CLICK_BEHAVIOR_RADAR: 11,
DOTA_CLICK_BEHAVIOR_LAST: 12}


/**
 @enum {number}
 */
var  AbilityLearnResult_t  = {ABILITY_CAN_BE_UPGRADED: 0,
ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE: 1,
ABILITY_CANNOT_BE_UPGRADED_AT_MAX: 2,
ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL: 3,
ABILITY_NOT_LEARNABLE: 4}


/**
 @enum {number}
 */
var  DOTAKeybindCommand_t  = {DOTA_KEYBIND_NONE: 0,
DOTA_KEYBIND_FIRST: 1,
DOTA_KEYBIND_CAMERA_UP: 1,
DOTA_KEYBIND_CAMERA_DOWN: 2,
DOTA_KEYBIND_CAMERA_LEFT: 3,
DOTA_KEYBIND_CAMERA_RIGHT: 4,
DOTA_KEYBIND_CAMERA_GRIP: 5,
DOTA_KEYBIND_CAMERA_YAW_GRIP: 6,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_1: 7,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_2: 8,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_3: 9,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_4: 10,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_5: 11,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_6: 12,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_7: 13,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_8: 14,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_9: 15,
DOTA_KEYBIND_CAMERA_SAVED_POSITION_10: 16,
DOTA_KEYBIND_HERO_ATTACK: 17,
DOTA_KEYBIND_HERO_MOVE: 18,
DOTA_KEYBIND_HERO_MOVE_DIRECTION: 19,
DOTA_KEYBIND_PATROL: 20,
DOTA_KEYBIND_HERO_STOP: 21,
DOTA_KEYBIND_HERO_HOLD: 22,
DOTA_KEYBIND_HERO_SELECT: 23,
DOTA_KEYBIND_COURIER_SELECT: 24,
DOTA_KEYBIND_COURIER_DELIVER: 25,
DOTA_KEYBIND_COURIER_BURST: 26,
DOTA_KEYBIND_COURIER_SHIELD: 27,
DOTA_KEYBIND_PAUSE: 28,
DOTA_SELECT_ALL: 29,
DOTA_SELECT_ALL_OTHERS: 30,
DOTA_RECENT_EVENT: 31,
DOTA_KEYBIND_CHAT_TEAM: 32,
DOTA_KEYBIND_CHAT_GLOBAL: 33,
DOTA_KEYBIND_CHAT_TEAM2: 34,
DOTA_KEYBIND_CHAT_GLOBAL2: 35,
DOTA_KEYBIND_CHAT_VOICE_PARTY: 36,
DOTA_KEYBIND_CHAT_VOICE_TEAM: 37,
DOTA_KEYBIND_CHAT_WHEEL: 38,
DOTA_KEYBIND_CHAT_WHEEL2: 39,
DOTA_KEYBIND_CHAT_WHEEL_CARE: 40,
DOTA_KEYBIND_CHAT_WHEEL_BACK: 41,
DOTA_KEYBIND_CHAT_WHEEL_NEED_WARDS: 42,
DOTA_KEYBIND_CHAT_WHEEL_STUN: 43,
DOTA_KEYBIND_CHAT_WHEEL_HELP: 44,
DOTA_KEYBIND_CHAT_WHEEL_GET_PUSH: 45,
DOTA_KEYBIND_CHAT_WHEEL_GOOD_JOB: 46,
DOTA_KEYBIND_CHAT_WHEEL_MISSING: 47,
DOTA_KEYBIND_CHAT_WHEEL_MISSING_TOP: 48,
DOTA_KEYBIND_CHAT_WHEEL_MISSING_MIDDLE: 49,
DOTA_KEYBIND_CHAT_WHEEL_MISSING_BOTTOM: 50,
DOTA_KEYBIND_HERO_CHAT_WHEEL: 51,
DOTA_KEYBIND_SPRAY_WHEEL: 52,
DOTA_KEYBIND_ABILITY_PRIMARY1: 53,
DOTA_KEYBIND_ABILITY_PRIMARY2: 54,
DOTA_KEYBIND_ABILITY_PRIMARY3: 55,
DOTA_KEYBIND_ABILITY_SECONDARY1: 56,
DOTA_KEYBIND_ABILITY_SECONDARY2: 57,
DOTA_KEYBIND_ABILITY_ULTIMATE: 58,
DOTA_KEYBIND_TALENT_UPGRADE_LEFT: 59,
DOTA_KEYBIND_TALENT_UPGRADE_RIGHT: 60,
DOTA_KEYBIND_TALENT_UPGRADE_ATTRIBUTE: 61,
DOTA_KEYBIND_ABILITY_PRIMARY1_QUICKCAST: 62,
DOTA_KEYBIND_ABILITY_PRIMARY2_QUICKCAST: 63,
DOTA_KEYBIND_ABILITY_PRIMARY3_QUICKCAST: 64,
DOTA_KEYBIND_ABILITY_SECONDARY1_QUICKCAST: 65,
DOTA_KEYBIND_ABILITY_SECONDARY2_QUICKCAST: 66,
DOTA_KEYBIND_ABILITY_ULTIMATE_QUICKCAST: 67,
DOTA_KEYBIND_ABILITY_PRIMARY1_EXPLICIT_AUTOCAST: 68,
DOTA_KEYBIND_ABILITY_PRIMARY2_EXPLICIT_AUTOCAST: 69,
DOTA_KEYBIND_ABILITY_PRIMARY3_EXPLICIT_AUTOCAST: 70,
DOTA_KEYBIND_ABILITY_SECONDARY1_EXPLICIT_AUTOCAST: 71,
DOTA_KEYBIND_ABILITY_SECONDARY2_EXPLICIT_AUTOCAST: 72,
DOTA_KEYBIND_ABILITY_ULTIMATE_EXPLICIT_AUTOCAST: 73,
DOTA_KEYBIND_ABILITY_PRIMARY1_QUICKCAST_AUTOCAST: 74,
DOTA_KEYBIND_ABILITY_PRIMARY2_QUICKCAST_AUTOCAST: 75,
DOTA_KEYBIND_ABILITY_PRIMARY3_QUICKCAST_AUTOCAST: 76,
DOTA_KEYBIND_ABILITY_SECONDARY1_QUICKCAST_AUTOCAST: 77,
DOTA_KEYBIND_ABILITY_SECONDARY2_QUICKCAST_AUTOCAST: 78,
DOTA_KEYBIND_ABILITY_ULTIMATE_QUICKCAST_AUTOCAST: 79,
DOTA_KEYBIND_ABILITY_PRIMARY1_AUTOMATIC_AUTOCAST: 80,
DOTA_KEYBIND_ABILITY_PRIMARY2_AUTOMATIC_AUTOCAST: 81,
DOTA_KEYBIND_ABILITY_PRIMARY3_AUTOMATIC_AUTOCAST: 82,
DOTA_KEYBIND_ABILITY_SECONDARY1_AUTOMATIC_AUTOCAST: 83,
DOTA_KEYBIND_ABILITY_SECONDARY2_AUTOMATIC_AUTOCAST: 84,
DOTA_KEYBIND_ABILITY_ULTIMATE_AUTOMATIC_AUTOCAST: 85,
DOTA_KEYBIND_INVENTORY1: 86,
DOTA_KEYBIND_INVENTORY2: 87,
DOTA_KEYBIND_INVENTORY3: 88,
DOTA_KEYBIND_INVENTORY4: 89,
DOTA_KEYBIND_INVENTORY5: 90,
DOTA_KEYBIND_INVENTORY6: 91,
DOTA_KEYBIND_INVENTORYTP: 92,
DOTA_KEYBIND_INVENTORYNEUTRAL: 93,
DOTA_KEYBIND_INVENTORY1_QUICKCAST: 94,
DOTA_KEYBIND_INVENTORY2_QUICKCAST: 95,
DOTA_KEYBIND_INVENTORY3_QUICKCAST: 96,
DOTA_KEYBIND_INVENTORY4_QUICKCAST: 97,
DOTA_KEYBIND_INVENTORY5_QUICKCAST: 98,
DOTA_KEYBIND_INVENTORY6_QUICKCAST: 99,
DOTA_KEYBIND_INVENTORYTP_QUICKCAST: 100,
DOTA_KEYBIND_INVENTORYNEUTRAL_QUICKCAST: 101,
DOTA_KEYBIND_INVENTORY1_AUTOCAST: 102,
DOTA_KEYBIND_INVENTORY2_AUTOCAST: 103,
DOTA_KEYBIND_INVENTORY3_AUTOCAST: 104,
DOTA_KEYBIND_INVENTORY4_AUTOCAST: 105,
DOTA_KEYBIND_INVENTORY5_AUTOCAST: 106,
DOTA_KEYBIND_INVENTORY6_AUTOCAST: 107,
DOTA_KEYBIND_INVENTORYTP_AUTOCAST: 108,
DOTA_KEYBIND_INVENTORYNEUTRAL_AUTOCAST: 109,
DOTA_KEYBIND_INVENTORY1_QUICKAUTOCAST: 110,
DOTA_KEYBIND_INVENTORY2_QUICKAUTOCAST: 111,
DOTA_KEYBIND_INVENTORY3_QUICKAUTOCAST: 112,
DOTA_KEYBIND_INVENTORY4_QUICKAUTOCAST: 113,
DOTA_KEYBIND_INVENTORY5_QUICKAUTOCAST: 114,
DOTA_KEYBIND_INVENTORY6_QUICKAUTOCAST: 115,
DOTA_KEYBIND_INVENTORYTP_QUICKAUTOCAST: 116,
DOTA_KEYBIND_INVENTORYNEUTRAL_QUICKAUTOCAST: 117,
DOTA_KEYBIND_CONTROL_GROUP1: 118,
DOTA_KEYBIND_CONTROL_GROUP2: 119,
DOTA_KEYBIND_CONTROL_GROUP3: 120,
DOTA_KEYBIND_CONTROL_GROUP4: 121,
DOTA_KEYBIND_CONTROL_GROUP5: 122,
DOTA_KEYBIND_CONTROL_GROUP6: 123,
DOTA_KEYBIND_CONTROL_GROUP7: 124,
DOTA_KEYBIND_CONTROL_GROUP8: 125,
DOTA_KEYBIND_CONTROL_GROUP9: 126,
DOTA_KEYBIND_CONTROL_GROUP10: 127,
DOTA_KEYBIND_CONTROL_GROUPCYCLE: 128,
DOTA_KEYBIND_SELECT_ALLY1: 129,
DOTA_KEYBIND_SELECT_ALLY2: 130,
DOTA_KEYBIND_SELECT_ALLY3: 131,
DOTA_KEYBIND_SELECT_ALLY4: 132,
DOTA_KEYBIND_SELECT_ALLY5: 133,
DOTA_KEYBIND_SHOP_TOGGLE: 134,
DOTA_KEYBIND_SCOREBOARD_TOGGLE: 135,
DOTA_KEYBIND_COMBATLOG_TOGGLE: 136,
DOTA_KEYBIND_SCREENSHOT: 137,
DOTA_KEYBIND_ESCAPE: 138,
DOTA_KEYBIND_CONSOLE: 139,
DOTA_KEYBIND_DEATH_SUMMARY: 140,
DOTA_KEYBIND_LEARN_ABILITIES: 141,
DOTA_KEYBIND_LEARN_STATS: 142,
DOTA_KEYBIND_ACTIVATE_GLYPH: 143,
DOTA_KEYBIND_ACTIVATE_RADAR: 144,
DOTA_KEYBIND_PURCHASE_QUICKBUY: 145,
DOTA_KEYBIND_PURCHASE_STICKY: 146,
DOTA_KEYBIND_GRAB_STASH_ITEMS: 147,
DOTA_KEYBIND_TOGGLE_AUTOATTACK: 148,
DOTA_KEYBIND_TAUNT: 149,
DOTA_KEYBIND_SHOP_CONSUMABLES: 150,
DOTA_KEYBIND_SHOP_ATTRIBUTES: 151,
DOTA_KEYBIND_SHOP_ARMAMENTS: 152,
DOTA_KEYBIND_SHOP_ARCANE: 153,
DOTA_KEYBIND_SHOP_BASICS: 154,
DOTA_KEYBIND_SHOP_SUPPORT: 155,
DOTA_KEYBIND_SHOP_CASTER: 156,
DOTA_KEYBIND_SHOP_WEAPONS: 157,
DOTA_KEYBIND_SHOP_ARMOR: 158,
DOTA_KEYBIND_SHOP_ARTIFACTS: 159,
DOTA_KEYBIND_SHOP_SIDE_PAGE_1: 160,
DOTA_KEYBIND_SHOP_SIDE_PAGE_2: 161,
DOTA_KEYBIND_SHOP_SECRET: 162,
DOTA_KEYBIND_SHOP_SEARCHBOX: 163,
DOTA_KEYBIND_SHOP_SLOT_1: 164,
DOTA_KEYBIND_SHOP_SLOT_2: 165,
DOTA_KEYBIND_SHOP_SLOT_3: 166,
DOTA_KEYBIND_SHOP_SLOT_4: 167,
DOTA_KEYBIND_SHOP_SLOT_5: 168,
DOTA_KEYBIND_SHOP_SLOT_6: 169,
DOTA_KEYBIND_SHOP_SLOT_7: 170,
DOTA_KEYBIND_SHOP_SLOT_8: 171,
DOTA_KEYBIND_SHOP_SLOT_9: 172,
DOTA_KEYBIND_SHOP_SLOT_10: 173,
DOTA_KEYBIND_SHOP_SLOT_11: 174,
DOTA_KEYBIND_SHOP_SLOT_12: 175,
DOTA_KEYBIND_SHOP_SLOT_13: 176,
DOTA_KEYBIND_SHOP_SLOT_14: 177,
DOTA_KEYBIND_SPEC_CAMERA_UP: 178,
DOTA_KEYBIND_SPEC_CAMERA_DOWN: 179,
DOTA_KEYBIND_SPEC_CAMERA_LEFT: 180,
DOTA_KEYBIND_SPEC_CAMERA_RIGHT: 181,
DOTA_KEYBIND_SPEC_CAMERA_GRIP: 182,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_1: 183,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_2: 184,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_3: 185,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_4: 186,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_5: 187,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_6: 188,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_7: 189,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_8: 190,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_9: 191,
DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_10: 192,
DOTA_KEYBIND_SPEC_UNIT_SELECT: 193,
DOTA_KEYBIND_SPEC_HERO_SELECT: 194,
DOTA_KEYBIND_SPEC_PAUSE: 195,
DOTA_KEYBIND_SPEC_CHAT: 196,
DOTA_KEYBIND_SPEC_SCOREBOARD: 197,
DOTA_KEYBIND_SPEC_INCREASE_REPLAY_SPEED: 198,
DOTA_KEYBIND_SPEC_DECREASE_REPLAY_SPEED: 199,
DOTA_KEYBIND_SPEC_STATS_ITEM: 200,
DOTA_KEYBIND_SPEC_STATS_GOLD: 201,
DOTA_KEYBIND_SPEC_STATS_XP: 202,
DOTA_KEYBIND_SPEC_STATS_FANTASY: 203,
DOTA_KEYBIND_SPEC_STATS_WINCHANCE: 204,
DOTA_KEYBIND_SPEC_FOW_TOGGLEBOTH: 205,
DOTA_KEYBIND_SPEC_FOW_TOGGLERADIENT: 206,
DOTA_KEYBIND_SPEC_FOW_TOGGLEDIRE: 207,
DOTA_KEYBIND_SPEC_OPEN_BROADCASTER_MENU: 208,
DOTA_KEYBIND_SPEC_DROPDOWN_KDA: 209,
DOTA_KEYBIND_SPEC_DROPDOWN_LASTHITS_DENIES: 210,
DOTA_KEYBIND_SPEC_DROPDOWN_LEVEL: 211,
DOTA_KEYBIND_SPEC_DROPDOWN_XP_PER_MIN: 212,
DOTA_KEYBIND_SPEC_DROPDOWN_GOLD: 213,
DOTA_KEYBIND_SPEC_DROPDOWN_TOTALGOLD: 214,
DOTA_KEYBIND_SPEC_DROPDOWN_GOLD_PER_MIN: 215,
DOTA_KEYBIND_SPEC_DROPDOWN_BUYBACK: 216,
DOTA_KEYBIND_SPEC_DROPDOWN_NETWORTH: 217,
DOTA_KEYBIND_SPEC_DROPDOWN_FANTASY: 218,
DOTA_KEYBIND_SPEC_DROPDOWN_SORT: 219,
DOTA_KEYBIND_SPEC_DROPDOWN_CLOSE: 220,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_1: 221,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_2: 222,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_3: 223,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_4: 224,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_5: 225,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_6: 226,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_7: 227,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_8: 228,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_9: 229,
DOTA_KEYBIND_SPEC_FOCUS_PLAYER_10: 230,
DOTA_KEYBIND_SPEC_COACH_VIEWTOGGLE: 231,
DOTA_KEYBIND_INSPECTHEROINWORLD: 232,
DOTA_KEYBIND_CAMERA_ZOOM_IN: 233,
DOTA_KEYBIND_CAMERA_ZOOM_OUT: 234,
DOTA_KEYBIND_CONTROL_GROUPCYCLEPREV: 235,
DOTA_KEYBIND_DOTA_ALT: 236,
DOTA_KEYBIND_DOTA_ALTERNATIVE_CAST_SWITCH: 237,
DOTA_KEYBIND_COUNT: 238}


/**
 @enum {number}
 */
var  DOTA_SHOP_TYPE  = {DOTA_SHOP_HOME: 0,
DOTA_SHOP_SIDE: 1,
DOTA_SHOP_SECRET: 2,
DOTA_SHOP_GROUND: 3,
DOTA_SHOP_SIDE2: 4,
DOTA_SHOP_SECRET2: 5,
DOTA_SHOP_CUSTOM: 6,
DOTA_SHOP_NEUTRALS: 7,
DOTA_SHOP_NONE: 8}