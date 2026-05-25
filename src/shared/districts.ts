import { districts } from "../data/seed";

export const districtAliases = Object.fromEntries(
  districts.flatMap((district) => {
    const aliases = new Set([district.id, district.name]);

    if (district.type === "district") {
      const baseName = district.name.replace(/\s+район$/i, "");
      aliases.add(`${baseName} муниципальный район`);
      aliases.add(`муниципальный район ${baseName}`);
    } else {
      aliases.add(`город ${district.name}`);
      aliases.add(`городской округ ${district.name}`);
      aliases.add(`городской округ город ${district.name}`);
      aliases.add(`городской округ ЗАТО город ${district.name}`);
      aliases.add(`ЗАТО город ${district.name}`);
    }

    return [...aliases].flatMap((alias) => [
      [alias, district.id],
      [normalizeAlias(alias), district.id]
    ]);
  })
);

function normalizeAlias(value: string): string {
  return value.replace(/ё/g, "е").replace(/Ё/g, "Е").replace(/\s+/g, " ").trim();
}
