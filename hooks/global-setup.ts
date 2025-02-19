import { APIResponse, request } from "@playwright/test";
import CONFIG from "../tests/config/local.json";

async function globalSetup() {
    console.log("running global setup");

    await Promise.all([checkApiHealth(), await checkUIHealth()]);
    console.log("Global set up complete");
}

async function checkApiHealth() {
    const getResponse: Promise<APIResponse> = (await request.newContext()).get(
        CONFIG.API.baseUrl + CONFIG.API.endpoints.health

    );
    const isApiHealthy: boolean = (await getResponse).status() === 201;
    if (!isApiHealthy) {
        throw new Error("The API is not available");
    } else {

        console.log("The API is healthy!");
    }
}
async function checkUIHealth() {
    const getResponse: Promise<APIResponse> = (await request.newContext()).get(
        CONFIG.UI.baseUrl
    );
    const websiteAvailable: boolean = (await getResponse).status() === 200;
    if (!websiteAvailable) {
        throw new Error("This website is not available");
    } else {
        console.log("This website is healthy");
    }
}
export default globalSetup;