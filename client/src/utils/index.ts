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

export const minuteValidator = (value: string | number) => {
  return rangeValidator(value, 0, 59);
};

export const hourValidator = (value: string | number) => {
  return rangeValidator(value, 0, 24);
};

export const timeStringFromISODateTime = (datetime: string) => {
  const date = new Date(datetime);
  return date.toLocaleDateString("en-US", {
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
  });
};
