"use strict";(self.webpackChunkglui=self.webpackChunkglui||[]).push([[9191],{"./.storybook/tokens/shadow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Core:()=>Core,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Core_parameters,_Core_parameters_docs,_Core_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),__webpack_require__("./node_modules/tailwindcss/resolveConfig.js")),tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_2__),_tailwind_config_cjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./tailwind.config.cjs"),_tailwind_config_cjs__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_tailwind_config_cjs__WEBPACK_IMPORTED_MODULE_3__);const fullConfig=tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_2___default()(_tailwind_config_cjs__WEBPACK_IMPORTED_MODULE_3___default()),__WEBPACK_DEFAULT_EXPORT__={title:"design/Shadow",argTypes:{},args:{shadow:Object.keys(fullConfig.theme.boxShadow).map((name=>({name,value:fullConfig.theme.boxShadow[name]})))},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table",{className:"w-full table-auto text-left text-sm text-foreground rtl:text-right",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead",{className:"text-xs bg-muted uppercase",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th",{scope:"col",className:"hidden px-6 py-3 sm:table-cell",children:"Size"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th",{scope:"col",className:"px-6 py-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"sr-only",children:"Preview"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody",{children:args.shadow.map((param=>{let{name,value}=param;var _value_match;const style=window.getComputedStyle(document.body);var _value_match_;const variable=null!==(_value_match_=null===(_value_match=value.match(/var\(([^)]+),/))||void 0===_value_match?void 0:_value_match[1])&&void 0!==_value_match_?_value_match_:"",resolved=style.getPropertyValue(variable),resolvedValue=value.replace(/var\(--(.*?)\)/,resolved).replace(/,/g,",\n").replace(/\n\n/g,"\n");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr",{className:"border-b bg-card",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td",{className:"px-6 py-4",children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td",{className:"hidden whitespace-pre-line px-6 py-4 sm:table-cell",children:resolvedValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td",{className:"px-6 py-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"size-20 rounded border bg-background",style:{boxShadow:value}})})]},name)}))})]})},Core={};Core.parameters={...Core.parameters,docs:{...null===(_Core_parameters=Core.parameters)||void 0===_Core_parameters?void 0:_Core_parameters.docs,source:{originalSource:"{}",...null===(_Core_parameters1=Core.parameters)||void 0===_Core_parameters1||null===(_Core_parameters_docs=_Core_parameters1.docs)||void 0===_Core_parameters_docs?void 0:_Core_parameters_docs.source}}};const __namedExportsOrder=["Core"]},"./tailwind.config.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports={darkMode:["class"],content:["./components/**/*.{ts,tsx}","./app/**/*.{ts,tsx}","./stories/**/*.{ts,tsx}","./storybook/**/*.{ts,tsx}","./content/**/*.mdx","./gluons/**/*.{ts,tsx}"],prefix:"",theme:{container:{center:!0,padding:"2rem",screens:{"2xl":"1400px"}},extend:{colors:{border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"}},borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"},keyframes:{"accordion-down":{from:{height:"0"},to:{height:"var(--radix-accordion-content-height)"}},"accordion-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:"0"}}},animation:{"accordion-down":"accordion-down 0.2s ease-out","accordion-up":"accordion-up 0.2s ease-out"},backgroundImage:{"dot-grid":"url('/dot-grid.svg')",grid:"url('/bg-grid.svg')","diagonal-lines":"url('/diagonal-lines.svg')"}}},plugins:[__webpack_require__("./node_modules/tailwindcss-animate/index.js"),__webpack_require__("./node_modules/@tailwindcss/container-queries/dist/index.js")]}}}]);