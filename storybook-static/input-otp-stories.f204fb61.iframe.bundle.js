/*! For license information please see input-otp-stories.f204fb61.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkglui=self.webpackChunkglui||[]).push([[6685],{"./stories/input-otp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SeparatedGroup:()=>SeparatedGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_otp_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),Wt=Object.defineProperty,Bt=Object.defineProperties,At=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,pt=(r,s,e)=>s in r?Wt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,bt="^\\d+$";var Gt=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");var xt=react.createContext({}),jt=react.forwardRef(((m,v)=>{var Y,it,lt,ut,dt,g=m,{value:r,onChange:s,maxLength:e,textAlign:u="left",pattern:h=bt,inputMode:W="numeric",onComplete:B,pushPasswordManagerStrategy:z="increase-width",containerClassName:q,noScriptCSSFallback:j=Lt,render:A,children:V}=g,c=((r,s)=>{var e={};for(var u in r)Rt.call(r,u)&&s.indexOf(u)<0&&(e[u]=r[u]);if(null!=r&&U)for(var u of U(r))s.indexOf(u)<0&&vt.call(r,u)&&(e[u]=r[u]);return e})(g,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]);let[k,M]=react.useState("string"==typeof c.defaultValue?c.defaultValue:""),a=null!=r?r:k,b=function ht(r){let s=react.useRef();return react.useEffect((()=>{s.current=r})),s.current}(a),O=react.useCallback((t=>{null==s||s(t),M(t)}),[s]),d=react.useMemo((()=>h?"string"==typeof h?new RegExp(h):h:null),[h]),i=react.useRef(null),K=react.useRef(null),J=react.useRef({value:a,onChange:O,isIOS:"undefined"!=typeof window&&(null==(it=null==(Y=null==window?void 0:window.CSS)?void 0:Y.supports)?void 0:it.call(Y,"-webkit-touch-callout","none"))}),X=react.useRef({prev:[null==(lt=i.current)?void 0:lt.selectionStart,null==(ut=i.current)?void 0:ut.selectionEnd,null==(dt=i.current)?void 0:dt.selectionDirection]});react.useImperativeHandle(v,(()=>i.current),[]),react.useEffect((()=>{let t=i.current,o=K.current;if(!t||!o)return;function f(){if(document.activeElement!==t)return N(null),void $(null);let I,l=t.selectionStart,S=t.selectionEnd,w=t.selectionDirection,y=t.maxLength,D=t.value,P=X.current.prev,E=-1,T=-1;if(0!==D.length&&null!==l&&null!==S){let yt=l===S,Dt=l===D.length&&D.length<y;if(yt&&!Dt){let H=l;if(0===H)E=0,T=1,I="forward";else if(H===y)E=H-1,T=H,I="backward";else if(y>1&&D.length>1){let et=0;if(null!==P[0]&&null!==P[1]){I=H<P[1]?"backward":"forward";let Ht=P[0]===P[1]&&P[0]<y;"backward"===I&&!Ht&&(et=-1)}E=et+H,T=et+H+1}}-1!==E&&-1!==T&&E!==T&&i.current.setSelectionRange(E,T,I)}let ft=-1!==E?E:l,mt=-1!==T?T:S,Ct=null!=I?I:w;N(ft),$(mt),X.current.prev=[ft,mt,Ct]}if(J.current.value!==t.value&&J.current.onChange(t.value),X.current.prev=[t.selectionStart,t.selectionEnd,t.selectionDirection],document.addEventListener("selectionchange",f,{capture:!0}),f(),document.activeElement===t&&Q(!0),!document.getElementById("input-otp-style")){let l=document.createElement("style");if(l.id="input-otp-style",document.head.appendChild(l),l.sheet){let S="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";F(l.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),F(l.sheet,`[data-input-otp]:autofill { ${S} }`),F(l.sheet,`[data-input-otp]:-webkit-autofill { ${S} }`),F(l.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),F(l.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let p=()=>{o&&o.style.setProperty("--root-height",`${t.clientHeight}px`)};p();let _=new ResizeObserver(p);return _.observe(t),()=>{document.removeEventListener("selectionchange",f,{capture:!0}),_.disconnect()}}),[]);let[nt,ot]=react.useState(!1),[L,Q]=react.useState(!1),[C,N]=react.useState(null),[G,$]=react.useState(null);react.useEffect((()=>{!function Pt(r){return[setTimeout(r,0),setTimeout(r,10),setTimeout(r,50)]}((()=>{var p,_,l,S;null==(p=i.current)||p.dispatchEvent(new Event("input"));let t=null==(_=i.current)?void 0:_.selectionStart,o=null==(l=i.current)?void 0:l.selectionEnd,f=null==(S=i.current)?void 0:S.selectionDirection;null!==t&&null!==o&&(N(t),$(o),X.current.prev=[t,o,f])}))}),[a,L]),react.useEffect((()=>{void 0!==b&&a!==b&&b.length<e&&a.length===e&&(null==B||B(a))}),[e,B,b,a]);let x=function wt({containerRef:r,inputRef:s,pushPasswordManagerStrategy:e,isFocused:u}){let h=react.useRef({done:!1,refocused:!1}),[W,B]=react.useState(!1),[z,q]=react.useState(!1),[j,A]=react.useState(!1),V=react.useMemo((()=>"none"!==e&&("increase-width"===e||"experimental-no-flickering"===e)&&W&&z),[W,z,e]),c=react.useCallback((()=>{let v=r.current,m=s.current;if(!v||!m||j||"none"===e)return;let g=v,a=g.getBoundingClientRect().left+g.offsetWidth-18,b=g.getBoundingClientRect().top+g.offsetHeight/2;if((0!==document.querySelectorAll(Gt).length||document.elementFromPoint(a,b)!==v)&&(B(!0),A(!0),!h.current.refocused&&document.activeElement===m)){let d=[m.selectionStart,m.selectionEnd];m.blur(),m.focus(),m.setSelectionRange(d[0],d[1]),h.current.refocused=!0}}),[r,s,j,e]);return react.useEffect((()=>{let v=r.current;if(!v||"none"===e)return;function m(){let M=window.innerWidth-v.getBoundingClientRect().right;q(M>=40)}m();let g=setInterval(m,1e3);return()=>{clearInterval(g)}}),[r,e]),react.useEffect((()=>{let v=u||document.activeElement===s.current;if("none"===e||!v)return;let m=setTimeout(c,0),g=setTimeout(c,2e3),k=setTimeout(c,5e3),M=setTimeout((()=>{A(!0)}),6e3);return()=>{clearTimeout(m),clearTimeout(g),clearTimeout(k),clearTimeout(M)}}),[s,u,e,c]),{hasPWMBadge:W,willPushPWMBadge:V,PWM_BADGE_SPACE_WIDTH:"40px"}}({containerRef:K,inputRef:i,pushPasswordManagerStrategy:z,isFocused:L}),rt=react.useCallback((t=>{let o=t.currentTarget.value.slice(0,e);o.length>0&&d&&!d.test(o)?t.preventDefault():("string"==typeof b&&o.length<b.length&&document.dispatchEvent(new Event("selectionchange")),O(o))}),[e,O,b,d]),st=react.useCallback((()=>{var t;if(i.current){let o=Math.min(i.current.value.length,e-1),f=i.current.value.length;null==(t=i.current)||t.setSelectionRange(o,f),N(o),$(f)}Q(!0)}),[e]),ct=react.useCallback((t=>{var P,E;let o=i.current;if(!J.current.isIOS||!t.clipboardData||!o)return;let f=t.clipboardData.getData("text/plain");t.preventDefault();let p=null==(P=i.current)?void 0:P.selectionStart,_=null==(E=i.current)?void 0:E.selectionEnd,w=(p!==_?a.slice(0,p)+f+a.slice(_):a.slice(0,p)+f+a.slice(p)).slice(0,e);if(w.length>0&&d&&!d.test(w))return;o.value=w,O(w);let y=Math.min(w.length,e-1),D=w.length;o.setSelectionRange(y,D),N(y),$(D)}),[e,O,d,a]),Tt=react.useMemo((()=>({position:"relative",cursor:c.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"})),[c.disabled]),at=react.useMemo((()=>({position:"absolute",inset:0,width:x.willPushPWMBadge?`calc(100% + ${x.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:x.willPushPWMBadge?`inset(0 ${x.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"})),[x.PWM_BADGE_SPACE_WIDTH,x.willPushPWMBadge,u]),It=react.useMemo((()=>react.createElement("input",((r,s)=>Bt(r,At(s)))(((r,s)=>{for(var e in s||(s={}))Rt.call(s,e)&&pt(r,e,s[e]);if(U)for(var e of U(s))vt.call(s,e)&&pt(r,e,s[e]);return r})({autoComplete:c.autoComplete||"one-time-code"},c),{"data-input-otp":!0,"data-input-otp-mss":C,"data-input-otp-mse":G,inputMode:W,pattern:null==d?void 0:d.source,style:at,maxLength:e,value:a,ref:i,onPaste:t=>{var o;ct(t),null==(o=c.onPaste)||o.call(c,t)},onChange:rt,onMouseOver:t=>{var o;ot(!0),null==(o=c.onMouseOver)||o.call(c,t)},onMouseLeave:t=>{var o;ot(!1),null==(o=c.onMouseLeave)||o.call(c,t)},onFocus:t=>{var o;st(),null==(o=c.onFocus)||o.call(c,t)},onBlur:t=>{var o;Q(!1),null==(o=c.onBlur)||o.call(c,t)}}))),[rt,st,ct,W,at,e,G,C,c,null==d?void 0:d.source,a]),tt=react.useMemo((()=>({slots:Array.from({length:e}).map(((t,o)=>{let f=L&&null!==C&&null!==G&&(C===G&&o===C||o>=C&&o<G),p=void 0!==a[o]?a[o]:null;return{char:p,isActive:f,hasFakeCaret:f&&null===p}})),isFocused:L,isHovering:!c.disabled&&nt})),[L,nt,e,G,C,c.disabled,a]),Mt=react.useMemo((()=>A?A(tt):react.createElement(xt.Provider,{value:tt},V)),[V,tt,A]);return react.createElement(react.Fragment,null,null!==j&&react.createElement("noscript",null,react.createElement("style",null,j)),react.createElement("div",{ref:K,"data-input-otp-container":!0,style:Tt,className:q},Mt,react.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},It)))}));function F(r,s){try{r.insertRule(s)}catch(e){console.error("input-otp could not insert CSS rule:",s)}}jt.displayName="Input";var Lt="\n[data-input-otp] {\n  --nojs-bg: white !important;\n  --nojs-fg: black !important;\n\n  background-color: var(--nojs-bg) !important;\n  color: var(--nojs-fg) !important;\n  caret-color: var(--nojs-fg) !important;\n  letter-spacing: .25em !important;\n  text-align: center !important;\n  border: 1px solid var(--nojs-fg) !important;\n  border-radius: 4px !important;\n  width: 100% !important;\n}\n@media (prefers-color-scheme: dark) {\n  [data-input-otp] {\n    --nojs-bg: black !important;\n    --nojs-fg: white !important;\n  }\n}";const Dot=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var utils=__webpack_require__("./lib/utils.ts");const InputOTP=react.forwardRef(((param,ref)=>{let{className,containerClassName,...props}=param;return(0,jsx_runtime.jsx)(jt,{ref,containerClassName:(0,utils.cn)("flex items-center gap-2 has-[:disabled]:opacity-50",containerClassName),className:(0,utils.cn)("disabled:cursor-not-allowed",className),...props})}));InputOTP.displayName="InputOTP";const InputOTPGroup=react.forwardRef(((param,ref)=>{let{className,...props}=param;return(0,jsx_runtime.jsx)("div",{ref,className:(0,utils.cn)("flex items-center",className),...props})}));InputOTPGroup.displayName="InputOTPGroup";const InputOTPSlot=react.forwardRef(((param,ref)=>{let{index,className,...props}=param;const inputOTPContext=react.useContext(xt),{char,hasFakeCaret,isActive}=inputOTPContext.slots[index];return(0,jsx_runtime.jsxs)("div",{ref,className:(0,utils.cn)("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",isActive&&"z-10 ring-2 ring-ring ring-offset-background",className),...props,children:[char,hasFakeCaret&&(0,jsx_runtime.jsx)("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:(0,jsx_runtime.jsx)("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})}));InputOTPSlot.displayName="InputOTPSlot";const InputOTPSeparator=react.forwardRef(((param,ref)=>{let{...props}=param;return(0,jsx_runtime.jsx)("div",{ref,role:"separator",...props,children:(0,jsx_runtime.jsx)(Dot,{})})}));var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_Default_parameters_docs1,_Default_parameters2,_SeparatedGroup_parameters,_SeparatedGroup_parameters_docs,_SeparatedGroup_parameters1,_SeparatedGroup_parameters_docs1,_SeparatedGroup_parameters2;InputOTPSeparator.displayName="InputOTPSeparator",InputOTP.__docgenInfo={description:"",methods:[],displayName:"InputOTP"},InputOTPGroup.__docgenInfo={description:"",methods:[],displayName:"InputOTPGroup"},InputOTPSlot.__docgenInfo={description:"",methods:[],displayName:"InputOTPSlot"},InputOTPSeparator.__docgenInfo={description:"",methods:[],displayName:"InputOTPSeparator"};const input_otp_stories={title:"ui/InputOTP",component:InputOTP,tags:["autodocs"],argTypes:{},args:{maxLength:6,pattern:"^[a-zA-Z0-9]+$",children:null},render:args=>(0,jsx_runtime.jsx)(InputOTP,{...args,render:void 0,children:(0,jsx_runtime.jsxs)(InputOTPGroup,{children:[(0,jsx_runtime.jsx)(InputOTPSlot,{index:0}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:1}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:2}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:3}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:4}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:5})]})}),parameters:{layout:"centered",docs:{description:{component:"Accessible one-time password component with copy paste functionality."}}}},Default={},SeparatedGroup={render:args=>(0,jsx_runtime.jsxs)(InputOTP,{...args,render:void 0,children:[(0,jsx_runtime.jsxs)(InputOTPGroup,{children:[(0,jsx_runtime.jsx)(InputOTPSlot,{index:0}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:1}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:2})]}),(0,jsx_runtime.jsx)(InputOTPSeparator,{}),(0,jsx_runtime.jsxs)(InputOTPGroup,{children:[(0,jsx_runtime.jsx)(InputOTPSlot,{index:3}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:4}),(0,jsx_runtime.jsx)(InputOTPSlot,{index:5})]})]})};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source},description:{story:"The default form of the InputOTP field.",...null===(_Default_parameters2=Default.parameters)||void 0===_Default_parameters2||null===(_Default_parameters_docs1=_Default_parameters2.docs)||void 0===_Default_parameters_docs1?void 0:_Default_parameters_docs1.description}}},SeparatedGroup.parameters={...SeparatedGroup.parameters,docs:{...null===(_SeparatedGroup_parameters=SeparatedGroup.parameters)||void 0===_SeparatedGroup_parameters?void 0:_SeparatedGroup_parameters.docs,source:{originalSource:"{\n  render: args => <InputOTP {...args} render={undefined}>\n      <InputOTPGroup>\n        <InputOTPSlot index={0} />\n        <InputOTPSlot index={1} />\n        <InputOTPSlot index={2} />\n      </InputOTPGroup>\n      <InputOTPSeparator />\n      <InputOTPGroup>\n        <InputOTPSlot index={3} />\n        <InputOTPSlot index={4} />\n        <InputOTPSlot index={5} />\n      </InputOTPGroup>\n    </InputOTP>\n}",...null===(_SeparatedGroup_parameters1=SeparatedGroup.parameters)||void 0===_SeparatedGroup_parameters1||null===(_SeparatedGroup_parameters_docs=_SeparatedGroup_parameters1.docs)||void 0===_SeparatedGroup_parameters_docs?void 0:_SeparatedGroup_parameters_docs.source},description:{story:"Use multiple groups to separate the input slots.",...null===(_SeparatedGroup_parameters2=SeparatedGroup.parameters)||void 0===_SeparatedGroup_parameters2||null===(_SeparatedGroup_parameters_docs1=_SeparatedGroup_parameters2.docs)||void 0===_SeparatedGroup_parameters_docs1?void 0:_SeparatedGroup_parameters_docs1.description}}};const __namedExportsOrder=["Default","SeparatedGroup"]},"./lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:["lucide",`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className].join(" "),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]);var string}));return Component.displayName=`${iconName}`,Component}}}]);