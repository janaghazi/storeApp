import i18n from "i18n-js";

export const getDropDownListCategorys = () => [
  { label: i18n.t("categories.all"), value: null },
  { label: i18n.t("categories.men"), value: "1" },
  { label: i18n.t("categories.jewelery"), value: "2" },
  { label: i18n.t("categories.electronics"), value: "3" },
  { label: i18n.t("categories.women"), value: "4" },
];

export const getDropDownListPriceRange = () => [
  { label: i18n.t("prices.all"), value: null },
  { label: i18n.t("prices.range1"), value: "1" },
  { label: i18n.t("prices.range2"), value: "2" },
  { label: i18n.t("prices.range3"), value: "3" },
  { label: i18n.t("prices.range4"), value: "4" },
];
