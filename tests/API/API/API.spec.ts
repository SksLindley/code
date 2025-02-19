import { test, expect } from '@playwright/test';
import CONFIG from "../../config/local.json";

test.describe(
  "Restful 200 response",
  () => {
    test("Basic version of response",
      async ({ request }) => {
        const response = await request.get(
          CONFIG.API.baseUrl + CONFIG.API.endpoints.health
        );
        expect(response.status()).toBe(200)
        expect(response.status()).not.toBe(null);
      });
  });