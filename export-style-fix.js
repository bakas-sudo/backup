(function () {
  "use strict";

  const set = (element, declarations) => {
    Object.entries(declarations).forEach(([property, value]) => {
      element.style.setProperty(property, value, "important");
    });
  };

  function inlinePreviewDesign(preview) {
    // Roll20's separator is hidden only by the site's preview CSS. Remove it
    // from the exported markup so it cannot reappear on another site.
    preview.querySelectorAll(".message .spacer, .message .flyout").forEach((node) => node.remove());

    preview.querySelectorAll(".message").forEach((message) => {
      set(message, {
        "box-sizing": "border-box",
        "width": "100%",
        "max-width": "100%",
        "min-height": "0",
        "overflow-wrap": "anywhere",
        "font-family": "Pretendard, 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "font-size": "14px",
        "line-height": "1.68"
      });
    });

    preview.querySelectorAll(".message.general").forEach((message) => {
      const isYou = message.classList.contains("you");
      const hasAvatar = message.classList.contains("has-avatar");
      set(message, {
        "display": "block",
        "position": "relative",
        "margin": "0 0 8px",
        "padding": `14px 18px 14px ${hasAvatar ? "62px" : "18px"}`,
        "background": isYou ? "#e7f3f9" : "#e9f6ed",
        "border": `1px solid ${isYou ? "#d1e6ef" : "#d5eadc"}`,
        "border-radius": "12px",
        "color": "#20383e",
        "text-align": "left",
        "text-indent": "0",
        "white-space": "normal",
        "overflow": "hidden"
      });
    });

    preview.querySelectorAll(".message .avatar").forEach((avatar) => {
      set(avatar, {
        "box-sizing": "border-box",
        "position": "absolute",
        "top": "13px",
        "left": "14px",
        "width": "34px",
        "height": "34px",
        "margin": "0",
        "padding": "0",
        "background": "rgba(255, 255, 255, 0.72)",
        "border": "1px solid rgba(115, 158, 156, 0.24)",
        "border-radius": "10px",
        "overflow": "hidden"
      });
      if (avatar.classList.contains("avatar-placeholder")) {
        avatar.style.setProperty("visibility", "hidden", "important");
      }
    });

    preview.querySelectorAll(".message .avatar img").forEach((image) => {
      set(image, {
        "display": "block",
        "box-sizing": "border-box",
        "width": "34px",
        "min-width": "34px",
        "max-width": "34px",
        "height": "34px",
        "max-height": "34px",
        "margin": "0",
        "padding": "0",
        "border": "0",
        "border-radius": "9px",
        "box-shadow": "none",
        "object-fit": "cover"
      });
    });

    preview.querySelectorAll(".trpg-message-main > .by").forEach((speaker) => {
      set(speaker, {
        "position": "static",
        "display": "inline",
        "left": "auto",
        "margin": "0 6px 0 0",
        "padding": "0",
        "border": "0",
        "color": "#315c5c",
        "font-size": "12px",
        "font-weight": "700"
      });
    });

    preview.querySelectorAll(".trpg-message-main, .trpg-message-body").forEach((body) => {
      set(body, { "display": "inline" });
    });

    preview.querySelectorAll(".trpg-message-continuation").forEach((continuation) => {
      const isInline = continuation.classList.contains("is-inline");
      set(continuation, {
        "display": isInline ? "inline" : "block",
        "margin": isInline ? "0" : "6px 0 0",
        "padding": isInline ? "0" : "0 0 0 1em"
      });
    });

    preview.querySelectorAll(".message.desc").forEach((message) => {
      const start = message.classList.contains("is-group-start");
      const end = message.classList.contains("is-group-end");
      set(message, {
        "display": "block",
        "position": "relative",
        "clear": "both",
        "margin": end ? "0 0 10px" : "0",
        "padding": `${start ? "14px" : "8px"} 18px ${end ? "14px" : "8px"}`,
        "background": "#f3f7f6",
        "border-top": start ? "1px solid #e2eeea" : "0",
        "border-right": "1px solid #e2eeea",
        "border-bottom": end ? "1px solid #e2eeea" : "0",
        "border-left": "1px solid #e2eeea",
        "border-radius": start && end ? "11px" : start ? "11px 11px 0 0" : end ? "0 0 11px 11px" : "0",
        "color": "#5e7475",
        "font-style": "normal",
        "font-weight": "500",
        "text-align": "center",
        "overflow": "hidden"
      });
    });

    preview.querySelectorAll(".message.emote").forEach((message) => {
      set(message, {
        "display": "block",
        "position": "relative",
        "margin": "0 0 8px",
        "padding": "11px 18px",
        "background": "#f1f6e8",
        "border": "1px solid #dfe9d3",
        "border-radius": "10px",
        "color": "#687865",
        "font-style": "normal",
        "font-weight": "600",
        "text-align": "center",
        "overflow": "hidden"
      });
    });

    preview.querySelectorAll("[class*='sheet-rolltemplate-']").forEach((roll) => {
      set(roll, {
        "display": "block",
        "box-sizing": "border-box",
        "width": "100%",
        "max-width": "100%",
        "margin": "12px 0",
        "border-radius": "10px",
        "overflow": "hidden"
      });
    });

    preview.querySelectorAll("[class*='sheet-rolltemplate-'] table").forEach((table) => {
      set(table, {
        "display": "table",
        "box-sizing": "border-box",
        "table-layout": "fixed",
        "border-collapse": "collapse",
        "width": "100%",
        "min-width": "0",
        "max-width": "100%",
        "margin": "0",
        "background": "#fbfefd",
        "border": "1px solid #d5e9e3"
      });
    });

    preview.querySelectorAll("[class*='sheet-rolltemplate-'] caption").forEach((caption) => {
      set(caption, {
        "padding": "9px 12px",
        "background": "#4f8f8b",
        "border": "0",
        "color": "#ffffff",
        "font-size": "12px"
      });
    });

    preview.querySelectorAll("[class*='sheet-rolltemplate-'] td").forEach((cell) => {
      set(cell, {
        "padding": "8px 10px",
        "border": "1px solid #d5e9e3",
        "font-size": "12px",
        "overflow-wrap": "anywhere"
      });
    });

    preview.querySelectorAll(".inlinerollresult").forEach((roll) => {
      set(roll, {
        "display": "inline-block",
        "min-width": "1.6em",
        "padding": "1px 5px",
        "background": "#e2f2ec",
        "border": "1px solid #9fcfc1",
        "border-radius": "5px",
        "color": "#315c5c",
        "font-weight": "700",
        "text-align": "center"
      });
    });

    preview.querySelectorAll("img").forEach((image) => {
      if (!image.closest(".avatar")) {
        set(image, { "max-width": "100%", "height": "auto" });
      }
    });
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".export button");
    if (!button) return;
    const preview = document.querySelector(".preview");
    if (preview) inlinePreviewDesign(preview);
  }, true);
})();
