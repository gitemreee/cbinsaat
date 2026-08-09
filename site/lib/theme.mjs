// Kategori renkleri ve ikonları.
// Elektrik kırmızı, su mavi, pompa/sulama yeşil, yapı turuncu.
// Hem hizmet grupları hem blog kategorileri buradan renk alır.

// Ana konumlandırma tadilat ve anahtar teslim; marka rengi (kehribar) o gruba ait.
// Elektrik, su ve pompa destekleyici alt gruplar olarak kendi renklerini korur.
export const groupTheme = {
  "Anahtar Teslim Tadilat": { color: "#c47100", soft: "#fdefd6", ink: "#7a4700", icon: "home",     label: "Tadilat" },
  "Mutfak ve Banyo":        { color: "#0f766e", soft: "#dcf2ef", ink: "#0a4a45", icon: "drop",     label: "Mutfak & Banyo" },
  "Ticari Tadilat":         { color: "#2b5f75", soft: "#e2eef3", ink: "#173a49", icon: "factory",  label: "Ticari" },
  "Yapım ve İnşaat":        { color: "#8a5a1d", soft: "#f5ead9", ink: "#54360f", icon: "building", label: "Yapım" },
  Elektrik:                 { color: "#d3271e", soft: "#fde8e6", ink: "#7a1310", icon: "bolt",     label: "Elektrik" },
  "Su ve Tesisat":          { color: "#0b7ac4", soft: "#e0f0fc", ink: "#08466f", icon: "pipe",     label: "Su" },
  "Pompa ve Sulama":        { color: "#0e8f63", soft: "#dcf4ea", ink: "#0a5540", icon: "pump",     label: "Pompa" },
  "Doğalgaz":               { color: "#d9480f", soft: "#fde7dc", ink: "#7d2708", icon: "fire",     label: "Doğalgaz" },
  "Anahtar Teslim Yapım":   { color: "#9a6510", soft: "#f7ecd8", ink: "#5d3c08", icon: "building", label: "Yapım" },
  "Kaba İnşaat":            { color: "#5a6270", soft: "#e9ecf1", ink: "#333a45", icon: "building", label: "Kaba İnşaat" },
  "İnce İnşaat":            { color: "#7a5cb0", soft: "#eee8f8", ink: "#46326b", icon: "wrench",   label: "İnce İnşaat" },
  "Çatı ve Dış Cephe":      { color: "#b03a48", soft: "#fbe5e8", ink: "#6b2029", icon: "home",     label: "Çatı & Cephe" },
  "Bahçe ve Çevre":         { color: "#2e8b32", soft: "#e2f3e2", ink: "#1a5a1d", icon: "leaf",     label: "Bahçe" },
  "Proje Yönetimi":         { color: "#1f6f8b", soft: "#e0eff4", ink: "#12475a", icon: "doc",      label: "Proje" },
};

// Blog kategorileri de aynı renk ailesinden beslenir.
export const categoryTheme = {
  Elektrik:            { color: "#d3271e", soft: "#fde8e6", icon: "bolt" },
  "Sanayi Elektriği":  { color: "#a81d16", soft: "#fbe0de", icon: "factory" },
  Enerji:              { color: "#dd5c05", soft: "#fdead9", icon: "battery" },
  Aydınlatma:          { color: "#c47100", soft: "#fdefd6", icon: "lamp" },
  Güvenlik:            { color: "#3d54a8", soft: "#e6eaf8", icon: "camera" },
  "Sıhhi Tesisat":     { color: "#0b7ac4", soft: "#e0f0fc", icon: "pipe" },
  Isıtma:              { color: "#d9480f", soft: "#fde7dc", icon: "radiator" },
  Bakım:               { color: "#4a5568", soft: "#e9ecf1", icon: "tools" },
  Pompa:               { color: "#0e8f63", soft: "#dcf4ea", icon: "pump" },
  Sulama:              { color: "#2e8b32", soft: "#e2f3e2", icon: "leaf" },
  Tadilat:             { color: "#c47100", soft: "#fdefd6", icon: "home" },
  İnşaat:              { color: "#8a5a1d", soft: "#f5ead9", icon: "building" },
  "Çatı ve Cephe":     { color: "#b03a48", soft: "#fbe5e8", icon: "home" },
  Doğalgaz:            { color: "#d9480f", soft: "#fde7dc", icon: "fire" },
  "İnce İşler":        { color: "#7a5cb0", soft: "#eee8f8", icon: "wrench" },
  "Bahçe ve Çevre":    { color: "#2e8b32", soft: "#e2f3e2", icon: "leaf" },
};

const FALLBACK = { color: "#4a5568", soft: "#e9ecf1", icon: "tools" };

export const themeOfGroup = (group) => groupTheme[group] || FALLBACK;
export const themeOfCategory = (category) => categoryTheme[category] || FALLBACK;

/** Hizmet için tema — kendi ikonunu korur, rengi grubundan alır. */
export const themeOfService = (s) => {
  const t = themeOfGroup(s.group);
  return { ...t, icon: s.icon || t.icon };
};

/** CSS değişkeni olarak inline stil üretir. */
export const themeVars = (t) => `--c:${t.color};--c-soft:${t.soft}`;

/** Tüm renkleri CSS'e sınıf olarak basmak için. */
export const allThemes = () => {
  const map = new Map();
  for (const [k, v] of Object.entries(groupTheme)) map.set(k, v);
  for (const [k, v] of Object.entries(categoryTheme)) if (!map.has(k)) map.set(k, v);
  return map;
};
