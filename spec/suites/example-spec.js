describe("example", function () {
  it("should return 'qué tal?'", function () {
    var result = "qué tal?";
    expect(example("hola")).toEqual(result);
  });

  it("should return 'nos vemos'", function () {
    var result = 'nos vemos!';
    expect(example("adios")).toEqual(result);
  });
});
