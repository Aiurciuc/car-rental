export function mapCarsResponse(response) {
  return {
    cars: response[0].VehAvailRSCore.VehVendorAvails.map((vendor) =>
      vendor.VehAvails.map((car) => ({
        id: `${vendor.Vendor["@Code"]}_${car.Vehicle["@Code"]}`,
        price: sanitizeObject(car.TotalCharge),
        vendor: sanitizeObject(vendor.Vendor),
        ...sanitizeObject(car.Vehicle),
      }))
    ).flat(),
    legend: sanitizeObject(response[0].VehAvailRSCore.VehRentalCore),
  };
}

export function sanitizeObject(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (isObject(value)) {
      acc[sanitizeKey(key)] = sanitizeObject(value);
    } else {
      acc[sanitizeKey(key)] = value;
    }
    return acc;
  }, {});
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function sanitizeKey(key) {
  if (/^[a-zA-Z]$/.test(key.charAt(0))) {
    return key.toLowerCase();
  } else {
    return key.slice(1).toLowerCase();
  }
}
