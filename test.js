test("to pass or not to pass, let me think about it", () => {
  const shouldTheTestPass = Math.random() < 0.5;
  expect(shouldTheTestPass).toBeTruthy();
});
