export const rangeValidator = (
  value: string | number,
  min: number,
  max: number
) => {
  try {
    const parsed = typeof value === "string" ? parseInt(value) : value;
    if (parsed >= min && parsed <= max) return true;
    return false;
  } catch (err) {
    return false;
  }
};
