import { validIP } from "./validIP";

test("Recibimos ip, retorna false", () => {
    expect(validIP("123.35.35")).toBe(false);
})

test("Recibimos ip, retorna true", () => {
    expect(validIP("123.35.35.34")).toBe(true);
})


test("Recibimos ip, retorna false", () => {
    expect(validIP("123.35")).toBe(false);
})