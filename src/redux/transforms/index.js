const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};

const parseIncomingData = data => {
  return data.map(item => ({
    key: generateKey(item.id),
    name: item.name
  }));
};

export default parseIncomingData;
