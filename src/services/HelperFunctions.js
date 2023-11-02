import store from "../Redux/Store";

export const itemInCart = (id) => {
  const CartData = store.getState().cart.cart;
  const product = CartData?.find((val) => (val._id === id ? val.qty : false));
  if (product === undefined) {
    return 0;
  } else {
    return id;
  }
};
export const itemInWishList = (id) => {
  const WhisListData = store.getState().wishlist.wishlist;
  const product = WhisListData?.find((val) =>
    val._id === id ? val.id : false
  );
  if (product === undefined) {
    return 0;
  } else {
    return id;
  }
};
export function ApplyFilters(ProdDetails) {
  const filtersData = store.getState().filter;
  let newData = [...ProdDetails];
  if (filtersData.Search !== "") {
    newData = newData.filter((val) =>
      val.title.toLowerCase().includes(filtersData.Search)
    );
  }
  if (filtersData.CategoryFilter.length > 0) {
    console.log(filtersData.CategoryFilter);
    newData = newData.filter((val) =>
      filtersData.CategoryFilter.find((item) => item === val.categoryName)
    );
  }
  if (filtersData.SortBy === "l2h") {
    newData = newData.sort((a, b) => a.price - b.price);
  }
  if (filtersData.SortBy === "h2l") {
    newData = newData.sort((a, b) => b.price - a.price);
  }
  if (filtersData.Rating > 0) {
    newData = newData.filter((val) => val.rating >= filtersData.Rating);
  }
  newData = newData.filter((val) => val.price <= filtersData.Range);
  return newData;
}
