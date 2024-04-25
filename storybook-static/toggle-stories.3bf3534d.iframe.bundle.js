"use strict";(self.webpackChunkglui=self.webpackChunkglui||[]).push([[707],{"./stories/toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Large:()=>Large,Outline:()=>Outline,Small:()=>Small,WithText:()=>WithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Default_parameters_docs1,_Default_parameters2,_Outline_parameters,_Outline_parameters_docs,_Outline_parameters1,_Outline_parameters_docs1,_Outline_parameters2,_WithText_parameters,_WithText_parameters_docs,_WithText_parameters1,_WithText_parameters_docs1,_WithText_parameters2,_Small_parameters,_Small_parameters_docs,_Small_parameters1,_Small_parameters_docs1,_Small_parameters2,_Large_parameters,_Large_parameters_docs,_Large_parameters1,_Large_parameters_docs1,_Large_parameters2,_Disabled_parameters,_Disabled_parameters_docs,_Disabled_parameters1,_Disabled_parameters_docs1,_Disabled_parameters2,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Bold_Italic_lucide_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/bold.js"),_barrel_optimize_names_Bold_Italic_lucide_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/italic.js"),_components_ui_toggle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/ui/toggle.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"ui/Toggle",component:_components_ui_toggle__WEBPACK_IMPORTED_MODULE_1__.l,tags:["autodocs"],argTypes:{children:{control:{disable:!0}}},args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Bold_Italic_lucide_react__WEBPACK_IMPORTED_MODULE_2__.A,{className:"h-4 w-4"}),"aria-label":"Toggle bold"},parameters:{layout:"centered",docs:{description:{component:"A two-state button that can be either on or off."}}}},Default={},Outline={args:{variant:"outline",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Bold_Italic_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,{className:"h-4 w-4"}),"aria-label":"Toggle italic"}},WithText={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_toggle__WEBPACK_IMPORTED_MODULE_1__.l,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Bold_Italic_lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,{className:"mr-2 h-4 w-4"}),"Italic"]}),args:{...Outline.args}},Small={args:{size:"sm"}},Large={args:{size:"lg"}},Disabled={args:{disabled:!0}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source},description:{story:"The default form of the toggle.",...null===(_Default_parameters2=Default.parameters)||void 0===_Default_parameters2||null===(_Default_parameters_docs1=_Default_parameters2.docs)||void 0===_Default_parameters_docs1?void 0:_Default_parameters_docs1.description}}},Outline.parameters={...Outline.parameters,docs:{...null===(_Outline_parameters=Outline.parameters)||void 0===_Outline_parameters?void 0:_Outline_parameters.docs,source:{originalSource:'{\n  args: {\n    variant: "outline",\n    children: <Italic className="h-4 w-4" />,\n    "aria-label": "Toggle italic"\n  }\n}',...null===(_Outline_parameters1=Outline.parameters)||void 0===_Outline_parameters1||null===(_Outline_parameters_docs=_Outline_parameters1.docs)||void 0===_Outline_parameters_docs?void 0:_Outline_parameters_docs.source},description:{story:"Use the `outline` variant for a distinct outline, emphasizing the boundary\nof the selection circle for clearer visibility",...null===(_Outline_parameters2=Outline.parameters)||void 0===_Outline_parameters2||null===(_Outline_parameters_docs1=_Outline_parameters2.docs)||void 0===_Outline_parameters_docs1?void 0:_Outline_parameters_docs1.description}}},WithText.parameters={...WithText.parameters,docs:{...null===(_WithText_parameters=WithText.parameters)||void 0===_WithText_parameters?void 0:_WithText_parameters.docs,source:{originalSource:'{\n  render: args => <Toggle {...args}>\n      <Italic className="mr-2 h-4 w-4" />\n      Italic\n    </Toggle>,\n  args: {\n    ...Outline.args\n  }\n}',...null===(_WithText_parameters1=WithText.parameters)||void 0===_WithText_parameters1||null===(_WithText_parameters_docs=_WithText_parameters1.docs)||void 0===_WithText_parameters_docs?void 0:_WithText_parameters_docs.source},description:{story:"Use the text element to add a label to the toggle.",...null===(_WithText_parameters2=WithText.parameters)||void 0===_WithText_parameters2||null===(_WithText_parameters_docs1=_WithText_parameters2.docs)||void 0===_WithText_parameters_docs1?void 0:_WithText_parameters_docs1.description}}},Small.parameters={...Small.parameters,docs:{...null===(_Small_parameters=Small.parameters)||void 0===_Small_parameters?void 0:_Small_parameters.docs,source:{originalSource:'{\n  args: {\n    size: "sm"\n  }\n}',...null===(_Small_parameters1=Small.parameters)||void 0===_Small_parameters1||null===(_Small_parameters_docs=_Small_parameters1.docs)||void 0===_Small_parameters_docs?void 0:_Small_parameters_docs.source},description:{story:"Use the `sm` size for a smaller toggle, suitable for interfaces needing\ncompact elements without sacrificing usability.",...null===(_Small_parameters2=Small.parameters)||void 0===_Small_parameters2||null===(_Small_parameters_docs1=_Small_parameters2.docs)||void 0===_Small_parameters_docs1?void 0:_Small_parameters_docs1.description}}},Large.parameters={...Large.parameters,docs:{...null===(_Large_parameters=Large.parameters)||void 0===_Large_parameters?void 0:_Large_parameters.docs,source:{originalSource:'{\n  args: {\n    size: "lg"\n  }\n}',...null===(_Large_parameters1=Large.parameters)||void 0===_Large_parameters1||null===(_Large_parameters_docs=_Large_parameters1.docs)||void 0===_Large_parameters_docs?void 0:_Large_parameters_docs.source},description:{story:"Use the `lg` size for a larger toggle, offering better visibility and\neasier interaction for users.",...null===(_Large_parameters2=Large.parameters)||void 0===_Large_parameters2||null===(_Large_parameters_docs1=_Large_parameters2.docs)||void 0===_Large_parameters_docs1?void 0:_Large_parameters_docs1.description}}},Disabled.parameters={...Disabled.parameters,docs:{...null===(_Disabled_parameters=Disabled.parameters)||void 0===_Disabled_parameters?void 0:_Disabled_parameters.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...null===(_Disabled_parameters1=Disabled.parameters)||void 0===_Disabled_parameters1||null===(_Disabled_parameters_docs=_Disabled_parameters1.docs)||void 0===_Disabled_parameters_docs?void 0:_Disabled_parameters_docs.source},description:{story:"Add the `disabled` prop to prevent interactions with the toggle.",...null===(_Disabled_parameters2=Disabled.parameters)||void 0===_Disabled_parameters2||null===(_Disabled_parameters_docs1=_Disabled_parameters2.docs)||void 0===_Disabled_parameters_docs1?void 0:_Disabled_parameters_docs1.description}}};const __namedExportsOrder=["Default","Outline","WithText","Small","Large","Disabled"]},"./components/ui/toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Toggle,v:()=>toggleVariants});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-toggle/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/utils.ts");const toggleVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),Toggle=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(((param,ref)=>{let{className,variant,size,...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__.b,{ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(toggleVariants({variant,size,className})),...props})}));Toggle.displayName=_radix_ui_react_toggle__WEBPACK_IMPORTED_MODULE_3__.b.displayName,Toggle.__docgenInfo={description:"",methods:[]}},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);