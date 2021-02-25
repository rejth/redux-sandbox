// reducer для изменения state
// нужен для обновления глобального state и
// служит связующим звеном между View Layer (React-компоненты) и Data Model (state),
// поскольку React-компоненты из View Layer не могут напрямую обновлять state
const reducer = (state = 0, { type }) => {
  switch (type) {
    case 'INC':
      return ++state;
    case 'DEC':
      return --state;
    default:
      return state;
  }
};

export default reducer;
