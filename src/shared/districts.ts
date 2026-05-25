import { districts } from "../data/seed";

export const districtAliases = Object.fromEntries(districts.flatMap((district) => [[district.name, district.id], [district.id, district.id]]));
