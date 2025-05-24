export function sortCars(cars, sortBy) {
  if (!cars || !Array.isArray(cars) || cars.length === 0) {
    return [];
  }
  switch (sortBy.value) {
    case "priceUp":
      return cars.sort(
        (a, b) => a.price.rateTotalAmount - b.price.rateTotalAmount
      );

    case "priceDown":
      return cars.sort(
        (a, b) => b.price.rateTotalAmount - a.price.rateTotalAmount
      );
    case "vendor":
      return cars.sort((a, b) => b.vendor.name - a.vendor.name);
  }

  return cars;
}
