export default (data) => {
  const dataString = data.slice(2);

  return {
    atTimestamp: new Date(parseInt(dataString.slice(0, 64), 16) * 1000),
    ofPrice: parseInt(dataString.slice(65), 16),
  };
};
