import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/auto-icons"],
  manifest: {
    permissions: [
      "declarativeNetRequest",
      "declarativeNetRequestWithHostAccess",
    ],
    host_permissions: ["*://*.youtube.com/*"],
    browser_specific_settings: {
      gecko: {
        id: "remove-youtube-annoyance@thehaidarbahzi",
        data_collection_permissions: {
          required: ["none"],
        },
      },
    },
  },
});
