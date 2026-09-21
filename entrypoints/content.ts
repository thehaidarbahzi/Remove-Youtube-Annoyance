export default defineContentScript({
  matches: ["*://*.youtube.com/*"],
  main(ctx) {
    const cleanLink = (link: HTMLAnchorElement) => {
      try {
        if (!link.href) return;

        const url = new URL(link.href);
        if (url.hostname.includes("youtube.com") && url.searchParams.has("t")) {
          url.searchParams.delete("t");
          link.href = url.toString();
        }
      } catch (e) {}
    };

    const cleanAllExistingLinks = () => {
      document.querySelectorAll("a").forEach(cleanLink);
    };
    cleanAllExistingLinks();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;

            if (el.tagName === "A") {
              cleanLink(el as HTMLAnchorElement);
            }

            el.querySelectorAll?.("a").forEach(cleanLink);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    ctx.onInvalidated(() => {
      observer.disconnect();
    });
  },
});
