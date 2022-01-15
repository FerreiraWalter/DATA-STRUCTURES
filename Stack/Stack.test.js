const Stack = require("./Stack");

const stack = new Stack();

stack.push("Walter");
stack.push("Joao");
stack.push("Maria");

let mockedStackNames = ["Walter", "Joao", "Maria"];

describe('Stack tests', () => {
  test('Should return the item that was added', () => {
    const firstItem = stack.items[0];
    const mockedFirstItem = mockedStackNames[0];

    expect(firstItem).toBe(mockedFirstItem);
  });

  test('Should return the item that was added at the last position', () => {
    const lastItem = stack.items[stack.items.length - 1];
    const mockedLastItem = mockedStackNames[mockedStackNames.length - 1];

    expect(lastItem).toBe(mockedLastItem);
  });

  test('Should return the correct list size', () => {
    const listSize = stack.size();
    const mockedListSize = mockedStackNames.length;

    expect(listSize).toBe(mockedListSize);
  });

  test('Should return the item that was removed at the last position', () => {
    const exLastItem = stack.items[stack.items.length - 1];
    stack.pop();
    const lastItem = stack.items[stack.items.length - 2];
    const mockedLastItem = mockedStackNames[1];

    console.log(lastItem);

    expect(lastItem).not.toBe(exLastItem);
    expect(lastItem).toBe(mockedLastItem);
  });

  test('Should return false if the list are not empty', () => {
    const isEmpty = stack.isEmpty();

    console.log(stack);

    expect(isEmpty).toEqual(false);
  });

  test('Should return true if the list are empty', () => {
    stack.clear();
    const isEmpty = stack.isEmpty();

    expect(isEmpty).toEqual(true);
  });

  test('Should return a empty list and count equal 0', () => {
    const cleanedList = stack.clear();

    expect(cleanedList).toEqual([]);
  });
});
