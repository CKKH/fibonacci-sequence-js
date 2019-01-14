describe ('Fibonacci', function() {
  it("returns 0 for the first number in the sequence", function(){
    expect(Fibonacci(1)).toBe(0);
  });

  it("returns 1 if asked for the 2nd number of the sequence", function(){
    expect(Fibonacci(2)).toBe(1);
  });

  it("returns 1 if asked for the 3rd number of the sequence", function(){
    expect(Fibonacci(3)).toBe(1);
  });

  it("returns 2 if asked for the 4th number of the sequence", function(){
    expect(Fibonacci(4)).toBe(2);
  });
});
