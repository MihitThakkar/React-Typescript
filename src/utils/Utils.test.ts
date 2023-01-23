import stringsSimilar from "./stringsSimilarity";
import getRawMobile from "./getRawMobile";
import isIOS from "./iOSDetector";
import nameFunctions from "./nameFunctions";
import titleCase from "./titleCaseFormat";

it("should convert the given text to title case", () => {
  expect(titleCase("mihit thakkar", " ", " ")).equal("Mihit Thakkar");
});

it("should return 10 digit mobile number", () => {
  expect(getRawMobile(918980994455)).equal("8980994455");
});

it("should check wether the platform is iOS or not", () => {
  expect(isIOS).equal(false);
});

it("should return icon name", () => {
  expect(nameFunctions.getIconName("Mihit Thakkar")).equal("MT");

  expect(nameFunctions.getCompactName("Mihit Manojbhai Thakkar")).equal(
    "M M Thakkar"
  );
});

it("should check if strings are similar or not", () => {
  expect(stringsSimilar("Mihit", "Miit")).equal(true);
  expect(stringsSimilar("Mihit", "Thakkar")).equal(false);
});
