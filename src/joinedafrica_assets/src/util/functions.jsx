import React from "react";
/**
 * Exact produduct specification extacts the product specification details provided by the user
 * @param {*} response Response is the post we get from the back
 * @returns Returns an extracted product specification.
 */
export function extractProductSpecification(response) {
  let productSpecification = {};
  if (response.category == "Electronics")
    productSpecification = { ...response.productSpecification.Electronics };
  if (response.category == "Properties") {
    if (response.subcategory == "Houses_and_apartments_for_rent")
      productSpecification = {
        ...response.productSpecification.Properties
          .Houses_and_apartments_for_rent,
      };
    if (response.subcategory == "Houses_and_apartments_for_sale")
      productSpecification = {
        ...response.productSpecification.Properties
          .Houses_and_apartments_for_sale,
      };
    if (response.subcategory == "Land_and_plots_for_sale")
      productSpecification = {
        ...response.productSpecification.Properties.Land_and_plots_for_sale,
      };
  }
  return productSpecification;
}
