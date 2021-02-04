export default ($string: string) => {
  const timestamp = `${new Date().getTime() / 1000}`;
  return `${$string}-${parseInt(timestamp, 10)}`;
};
