import { test, expect } from "../../fixtures/fixtures";

test.describe(
  "happy path test",

  () => {
    test.beforeEach(async ({ homePage, cookieModal }) => {

      await homePage.goTo();
      await cookieModal.denyCookiesButton.click();
    });

    test(
      "Test visibility of Buttons",
      async ({ homePage }) => {
        await expect(homePage.contactUsButton).toBeVisible();
        await expect(homePage.aboutUsButton).toBeVisible();
        await expect(homePage.industriesButton).toBeVisible();
        await expect(homePage.whatWeDoButton).toBeVisible();

      });
  });