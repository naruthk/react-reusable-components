// It's a single function. An arrow function!
export default (property='all', length='1s', ease='ease') => `
    transition: ${property} ${length} ${ease};
`;