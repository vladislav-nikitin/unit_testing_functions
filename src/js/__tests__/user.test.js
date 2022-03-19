import fetchData from "../http";
import getLevel from "../user";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("getLevelTesting", () => {
  fetchData.mockReturnValue({ status: "ok", level: 500 });
  expect(getLevel(1)).toBe("Ваш текущий уровень: 500");
});

test("getLevelTesting", () => {
  fetchData.mockReturnValue({ status: "error", level: 500 });
  expect(getLevel(1)).toBe("Информация об уровне временно недоступна");
});

test("getLevelTesting", () => {
  fetchData.mockReturnValue({});
  expect(getLevel(1)).toBe("Информация об уровне временно недоступна");
});
