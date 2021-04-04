const add = (a, b) => a + b;

const generateGreetings = (name = "Anonymous") => {
  return `hello ${name}`;
};

test("Should add 2 numbers", () => {
  const result = add(4, 3);
  expect(result).toBe(7);
});

test("Should say hello with name", () => {
  const greeting = generateGreetings("Aguibou");
  expect(greeting).toBe("hello Aguibou");
});

test("Should say hello with no name", () => {
  const greeting = generateGreetings();
  expect(greeting).toBe("hello Anonymous");
});
