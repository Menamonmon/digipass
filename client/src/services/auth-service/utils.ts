export const getJwtFromLocalStorage = () => {
  return;
};

export const persistState = (values: Object, key: string) => {
  localStorage.setItem(key, JSON.stringify(values));
};

export const retrievePersistedState = (
  key: string
): Record<string, any> | undefined => {
  const rawState = localStorage.getItem(key);
  if (rawState) {
    return JSON.parse(rawState);
  }
};
