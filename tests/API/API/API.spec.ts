import { test, expect, APIResponse } from '@playwright/test';
import CONFIG from "../../config/local.json";

test.describe(
  "Restful 200 response",
  () => {
    test.beforeAll(async ({ request }) => {
      const getResponse: Promise<APIResponse> = request.get(
        CONFIG.API.baseUrl + CONFIG.API.endpoints.ping
      );
      const isApiHealthy: boolean = (await getResponse).status() === 201;
      if (!isApiHealthy) {
        throw new Error("API unavailable.");
      }
    });

    test("Basic version of response",
      async ({ request }) => {
        const response = await request.get(
          CONFIG.API.baseUrl + CONFIG.API.endpoints.ping
        );
        expect(response.status()).toBe(200)
        expect(response.status()).not.toBe(null);
      });
  });