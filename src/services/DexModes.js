import SortModes from "./SortModes";

export default class DexModes {
  static DEX = "dex";
  static GODEX = "godex";
  static SHINY = "shiny";
  static LUCKY = "lucky";
  static UNOWN = "unown";
  static SHINYUNOWN = "shinyunown";
  static SHADOW = "shadow";

  static getPageTitle(mode) {
    switch (mode) {
      case DexModes.DEX:
        return "Dex";
      case DexModes.GODEX:
        return "GoDex";
      case DexModes.SHINY:
        return "ShinyDex";
      case DexModes.LUCKY:
        return "LuckyDex";
      case DexModes.UNOWN:
        return "UnownDex";
      case DexModes.SHINYUNOWN:
        return "ShinyUnownDex";
      case DexModes.SHADOW:
        return "ShadowDex";
      default:
        throw new Error("Unknown page mode");
    }
  }

  static getSaveKey(mode) {
    switch (mode) {
      case DexModes.DEX:
        return "dex";
      case DexModes.GODEX:
        return "godex";
      case DexModes.SHINY:
        return "shinies";
      case DexModes.LUCKY:
        return "luckies";
      case DexModes.UNOWN:
        return "unown";
      case DexModes.SHINYUNOWN:
        return "shinyunown";
      case DexModes.SHADOW:
        return "shadows";
      default:
        throw new Error();
    }
  }

  static getDefaultSortOrder(mode) {
    // return mode === DexModes.UNOWN || DexModes.SHINYUNOWN ? SortModes.NAME : SortModes.ID;
    if(mode === DexModes.UNOWN){
      return SortModes.NAME
    }
    else if(mode === DexModes.SHINYUNOWN){
      return SortModes.NAME
    }
    return SortModes.ID
  }
}
