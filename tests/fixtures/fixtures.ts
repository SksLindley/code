import { HomePage } from "../../page-objects/pages/homePage";
import { test as PlaywrightTest } from "@playwright/test"
import { CookieModal } from "../../page-objects/components/cookie-modal";

type pages = {
    homePage: HomePage;
    cookieModal: CookieModal;
}


export const test = PlaywrightTest.extend<pages>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    cookieModal: async ({ page }, use) => {
        await use(new CookieModal(page));
    },
});

export const expect = PlaywrightTest.expect;