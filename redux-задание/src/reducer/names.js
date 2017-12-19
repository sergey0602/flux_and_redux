export default (names = [], action) => {
  switch (action.type) {
    case 'ADD_NAME': return [...names, action.payload];
  }
  return names;
}
