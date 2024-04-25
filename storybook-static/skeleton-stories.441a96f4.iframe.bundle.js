"use strict";(self.webpackChunkglui=self.webpackChunkglui||[]).push([[1442],{"./stories/skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>skeleton_stories});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Default_parameters_docs1,_Default_parameters2,jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./lib/utils.ts");function Skeleton(param){let{className,...props}=param;return(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("animate-pulse rounded-md bg-muted",className),...props})}Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const skeleton_stories={title:"ui/Skeleton",component:Skeleton,tags:["autodocs"],argTypes:{},parameters:{layout:"centered",docs:{description:{component:"Use to show a placeholder while content is loading."}}}},Default={render:args=>(0,jsx_runtime.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,jsx_runtime.jsx)(Skeleton,{...args,className:"h-12 w-12 rounded-full"}),(0,jsx_runtime.jsxs)("div",{className:"space-y-2",children:[(0,jsx_runtime.jsx)(Skeleton,{...args,className:"h-4 w-[250px]"}),(0,jsx_runtime.jsx)(Skeleton,{...args,className:"h-4 w-[200px]"})]})]})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:'{\n  render: args => <div className="flex items-center space-x-4">\n      <Skeleton {...args} className="h-12 w-12 rounded-full" />\n      <div className="space-y-2">\n        <Skeleton {...args} className="h-4 w-[250px]" />\n        <Skeleton {...args} className="h-4 w-[200px]" />\n      </div>\n    </div>\n}',...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source},description:{story:"The default form of the skeleton.",...null===(_Default_parameters2=Default.parameters)||void 0===_Default_parameters2||null===(_Default_parameters_docs1=_Default_parameters2.docs)||void 0===_Default_parameters_docs1?void 0:_Default_parameters_docs1.description}}};const __namedExportsOrder=["Default"]},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);