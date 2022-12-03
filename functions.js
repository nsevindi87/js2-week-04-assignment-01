const getProductsOfNormalQuality = (pProducts) => pProducts.filter(product => product.quality === "Normal");

const getProductImageWithPngExtension = (pProducts) => pProducts.filter((url) => (/png/).test(url.productImage));

const getCalorieOfTheMostExpensiveProduct = (pProducts) => pProducts.sort((a,b)=> b.price - a.price)[0].totalCalories;

const sortByExpirationDate = (pProducts) => pProducts.sort((a,b) => a.expireDate - b.expireDate);

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
