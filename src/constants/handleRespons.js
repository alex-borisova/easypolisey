export const handleRespons = (response) => {
  return response.text().then((text) => {
    return text && JSON.parse(text);
  });
};
