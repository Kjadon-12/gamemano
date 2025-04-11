export const minMaxPrice = (products) => {
    return products?.reduce(
      (acc, curr) => {
        return {
          min: Math.min(acc?.min, curr?.price),
          max: Math.max(acc?.max, curr?.price),
        };
      },
      { min: Infinity, max: -Infinity }
    );
  };
  