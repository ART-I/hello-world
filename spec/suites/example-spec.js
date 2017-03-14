describe("example", function () {
  it("should return 'qué tal?'", function () {
    var result = "qué tal?";
    expect(example("hola")).toEqual(result);
  });

  it("should return 'nos vemos'", function () {
    var result = 'nos vemos';
    expect(example("adios")).toEqual(result);
  });

  it("should return 'no te entiendo'", function () {
    var result = 'no te entiendo';
    expect(example("jeje")).toEqual(result);
  });
});

describe("otherExample", function () {
  it("should return true", function () {
    expect(otherExample("bien")).toEqual("bien");
  });

  it("should return 'mal'", function () {
    expect(otherExample("mal")).toEqual("mal");
  });
});
