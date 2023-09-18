"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/styles/index.ts
var styles_exports = {};
__export(styles_exports, {
  BaseStyles: () => BaseStyles,
  BtnNoStyles: () => BtnNoStyles,
  BtnStyles: () => BtnStyles,
  SpanStyles: () => SpanStyles
});
module.exports = __toCommonJS(styles_exports);

// src/styles/Base.css.ts
var BaseStyles = "Base_BaseStyles__itxq2m0";

// src/styles/Btn.css.ts
var BtnNoStyles = "Btn_BtnNoStyles__189r6i90";
var BtnStyles = "Btn_BtnStyles__189r6i91 Btn_BtnNoStyles__189r6i90";

// src/styles/Text.css.ts
var SpanStyles = "Text_SpanStyles__3m5fq30";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseStyles,
  BtnNoStyles,
  BtnStyles,
  SpanStyles
});
//# sourceMappingURL=index.cjs.map