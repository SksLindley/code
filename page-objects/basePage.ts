import { Page as PlaywrightPage } from "@playwright/test";
import CONFIG from "C:/code/tests/config/local.json";


export abstract class basePage {

constructor (public readonly page: PlaywrightPage) {}

path = "/";
    
async goTo (){
    await this.page.goto(CONFIG.UI.baseUrl+this.path)
    await this.page.waitForLoadState('load');  // CH: Ensures the page is fully loaded

  }
}