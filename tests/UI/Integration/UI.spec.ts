import { test, expect } from "../../fixtures/fixtures";
import CONFIG from "../../config/local.json";
import { APIResponse } from "@playwright/test"

test.describe(
  "happy path test",

  () => {
    test.beforeAll(async ({ request }) => {
      const getResponse: Promise<APIResponse> = request.get(
        CONFIG.UI.baseUrl
      );
      const websiteAvailable: boolean = (await getResponse).status() === 200;
      if (!websiteAvailable)
        throw new Error(
          "The website is not available"
        );
    })
  });


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

  }
);

