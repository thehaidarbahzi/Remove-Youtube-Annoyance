export default defineBackground(() => {
  const redirectRule: Browser.declarativeNetRequest.Rule = {
    id: 1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        transform: {
          queryTransform: {
            removeParams: ["t", "themeRefresh"],
          },
        },
      },
    },
    condition: {
      urlFilter: "||youtube.com/*",
      resourceTypes: ["main_frame"],
    },
  };

  const stupidShit = [
    "*://*.googlesyndication.com/*",
    "*://*.doubleclick.net/*",
  ];

  const blockRules: Browser.declarativeNetRequest.Rule[] = stupidShit.map(
    (url, index) => ({
      id: index + 2,
      priority: 1,
      action: {
        type: "block",
      },
      condition: {
        urlFilter: url,
      },
    }),
  );

  const allRules = [redirectRule, ...blockRules];

  browser.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: allRules.map((r) => r.id),
    addRules: allRules,
  });
});
