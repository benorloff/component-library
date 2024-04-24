/*! For license information please see breadcrumb-stories.55191aef.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkglui=self.webpackChunkglui||[]).push([[6324],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>$6ed0406888f73fc4$export$c7b2cbe3552a0d05,t:()=>$6ed0406888f73fc4$export$43e446d32b3d21af});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...refs),refs)}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>$5e63c961fc1ce211$export$8c6ed5c666ac1360,xV:()=>$5e63c961fc1ce211$export$d9f1ccf0bdb05d45});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs");const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},slotProps,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(newElement)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(newElement,void 0,newChildren):null)}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($5e63c961fc1ce211$var$SlotClone,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.A)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,children.ref):children.ref}):react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}},"./stories/breadcrumb.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomSeparator:()=>WithCustomSeparator,__namedExportsOrder:()=>__namedExportsOrder,default:()=>breadcrumb_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const SquareArrowRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("SquareArrowRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),chevron_right=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/chevron-right.js"),ellipsis=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/ellipsis.js"),utils=__webpack_require__("./lib/utils.ts");const Breadcrumb=react.forwardRef(((param,ref)=>{let{...props}=param;return(0,jsx_runtime.jsx)("nav",{ref,"aria-label":"breadcrumb",...props})}));Breadcrumb.displayName="Breadcrumb";const BreadcrumbList=react.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("ol",{ref,className:(0,utils.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",className),...props})}));BreadcrumbList.displayName="BreadcrumbList";const BreadcrumbItem=react.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("li",{ref,className:(0,utils.cn)("inline-flex items-center gap-1.5",className),...props})}));BreadcrumbItem.displayName="BreadcrumbItem";const BreadcrumbLink=react.forwardRef(((param,ref)=>{let{asChild,className,...props}=param;const Comp=asChild?dist.DX:"a";return(0,jsx_runtime.jsx)(Comp,{ref,className:(0,utils.cn)("transition-colors hover:text-foreground",className),...props})}));BreadcrumbLink.displayName="BreadcrumbLink";const BreadcrumbPage=react.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("span",{ref,role:"link","aria-disabled":"true","aria-current":"page",className:(0,utils.cn)("font-normal text-foreground",className),...props})}));BreadcrumbPage.displayName="BreadcrumbPage";const BreadcrumbSeparator=param=>{let{children,className,...props}=param;return(0,jsx_runtime.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,utils.cn)("[&>svg]:size-3.5",className),...props,children:null!=children?children:(0,jsx_runtime.jsx)(chevron_right.A,{})})};BreadcrumbSeparator.displayName="BreadcrumbSeparator";const BreadcrumbEllipsis=param=>{let{className,...props}=param;return(0,jsx_runtime.jsxs)("span",{role:"presentation","aria-hidden":"true",className:(0,utils.cn)("flex h-9 w-9 items-center justify-center",className),...props,children:[(0,jsx_runtime.jsx)(ellipsis.A,{className:"h-4 w-4"}),(0,jsx_runtime.jsx)("span",{className:"sr-only",children:"More"})]})};var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Default_parameters_docs1,_Default_parameters2,_WithCustomSeparator_parameters,_WithCustomSeparator_parameters_docs,_WithCustomSeparator_parameters1,_WithCustomSeparator_parameters_docs1,_WithCustomSeparator_parameters2;BreadcrumbEllipsis.displayName="BreadcrumbElipssis",Breadcrumb.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"},BreadcrumbList.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"},BreadcrumbItem.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"},BreadcrumbLink.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"},BreadcrumbPage.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"},BreadcrumbSeparator.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"},BreadcrumbEllipsis.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbElipssis"};const breadcrumb_stories={title:"ui/Breadcrumb",component:Breadcrumb,tags:["autodocs"],argTypes:{},args:{},render:args=>(0,jsx_runtime.jsx)(Breadcrumb,{...args,children:(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{children:"Components"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbPage,{children:"Breadcrumb"})})]})}),parameters:{layout:"centered",docs:{description:{component:"Displays the path to the current resource using a hierarchy of links."}}}},Default={},WithCustomSeparator={render:args=>(0,jsx_runtime.jsx)(Breadcrumb,{...args,children:(0,jsx_runtime.jsxs)(BreadcrumbList,{children:[(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{children:"Home"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{children:(0,jsx_runtime.jsx)(SquareArrowRight,{})}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbLink,{children:"Components"})}),(0,jsx_runtime.jsx)(BreadcrumbSeparator,{children:(0,jsx_runtime.jsx)(SquareArrowRight,{})}),(0,jsx_runtime.jsx)(BreadcrumbItem,{children:(0,jsx_runtime.jsx)(BreadcrumbPage,{children:"Breadcrumb"})})]})})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source},description:{story:"Displays the path of links to the current resource.",...null===(_Default_parameters2=Default.parameters)||void 0===_Default_parameters2||null===(_Default_parameters_docs1=_Default_parameters2.docs)||void 0===_Default_parameters_docs1?void 0:_Default_parameters_docs1.description}}},WithCustomSeparator.parameters={...WithCustomSeparator.parameters,docs:{...null===(_WithCustomSeparator_parameters=WithCustomSeparator.parameters)||void 0===_WithCustomSeparator_parameters?void 0:_WithCustomSeparator_parameters.docs,source:{originalSource:"{\n  render: args => <Breadcrumb {...args}>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <BreadcrumbLink>Home</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>\n          <ArrowRightSquare />\n        </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbLink>Components</BreadcrumbLink>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>\n          <ArrowRightSquare />\n        </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\n        </BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n}",...null===(_WithCustomSeparator_parameters1=WithCustomSeparator.parameters)||void 0===_WithCustomSeparator_parameters1||null===(_WithCustomSeparator_parameters_docs=_WithCustomSeparator_parameters1.docs)||void 0===_WithCustomSeparator_parameters_docs?void 0:_WithCustomSeparator_parameters_docs.source},description:{story:"Displays the path with a custom icon for the separator.",...null===(_WithCustomSeparator_parameters2=WithCustomSeparator.parameters)||void 0===_WithCustomSeparator_parameters2||null===(_WithCustomSeparator_parameters_docs1=_WithCustomSeparator_parameters2.docs)||void 0===_WithCustomSeparator_parameters_docs1?void 0:_WithCustomSeparator_parameters_docs1.description}}};const __namedExportsOrder=["Default","WithCustomSeparator"]},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}},"./node_modules/lucide-react/dist/esm/icons/chevron-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ChevronRight});const ChevronRight=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},"./node_modules/lucide-react/dist/esm/icons/ellipsis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Ellipsis});const Ellipsis=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])}}]);