import jsonData from "../resultats/codes_postaux.json";

const dataReduced = jsonData.reduce(
  (aggregation, current) =>
    !aggregation.find((el) => el.nomCommune === current.nomCommune)
      ? [...aggregation, current]
      : aggregation,
  []
);

export default dataReduced;
