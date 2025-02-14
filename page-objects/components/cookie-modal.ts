import { basePage } from "../basePage";

export class CookieModal extends basePage {
  readonly denyCookiesButton = this.page.getByRole("button", {
    name: "Deny",
  });
}