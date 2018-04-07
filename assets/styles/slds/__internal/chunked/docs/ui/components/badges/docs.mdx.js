var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/badges/docs.mdx.js"]=webpackJsonpSLDS___internal_chunked_docs([7],{0:function(e,t){e.exports=React},4:function(e,t){e.exports=JSBeautify},53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var s=a(0),n=(c(s),a(2)),l=c(n),d=a(54),i=a(16),o=c(a(3));function c(e){return e&&e.__esModule?e:{default:e}}const{code:r,h2:u,p:g,table:h,tbody:m,td:f,th:b,thead:B,tr:x}=n.factories,_=t.getElement=(()=>(0,s.createElement)(l.default,{},(0,s.createElement)("div",{className:"lead"},"Badges are labels which hold small amounts of information."),(0,s.createElement)(o.default,{toggleCode:!1},(0,s.createElement)(d.Badge,null,"I am Badge")),u({id:"Badge-Colors"},"Badge Colors"),g({},"There are three different color badges you can use."),h({},B({},x({},b({},"Badge"),b({},"class"),b({},"description"))),m({},x({},f({},(0,s.createElement)(d.Badge,{key:"1"},"Defaut Badge")),f({},r({},".slds-badge")),f({},"This is the default badge. You probably want to use this one unless you fall into a specific use-case.")),x({},f({},(0,s.createElement)(d.InverseBadge,{key:"2"},"Darker Badge")),f({},r({},".slds-badge_inverse")),f({},"This badge is used when you need higher contrast than our default badge.")),x({},f({},(0,s.createElement)(d.LightBadge,{key:"3"},"Lightest Badge")),f({},r({},".slds-badge_lightest")),f({},"This badge is used when you want to include an icon.")))),u({id:"Badges-with-Icons"},"Badges with Icons"),g({},"You can include an icon in your badge. The icon can be aligned to the left or right side of the text. You may also choose to put an icon in a badge without text, but in that case, be sure to include assitive text."),(0,s.createElement)(d.LightBadge,null,(0,s.createElement)(i.UtilityIcon,{containerClassName:"slds-m-right_xx-small",className:"slds-icon_xx-small slds-icon-text-default",assistiveText:!1,symbol:"world"}),"Icon on the left"),(0,s.createElement)(d.LightBadge,null,"Icon on the right",(0,s.createElement)(i.UtilityIcon,{containerClassName:"slds-m-left_xx-small",className:"slds-icon_xx-small slds-icon-text-default",assistiveText:!1,symbol:"world"})),g({},"If your badge contains an icon with no text, you need to include assitive text. If your icon indicates state make sure the user can read it."),(0,s.createElement)(d.LightBadge,null,(0,s.createElement)(i.UtilityIcon,{className:"slds-icon_xx-small slds-icon-text-default",assistiveText:"assistive text goes here, do it!",symbol:"world"}))));t.getContents=(()=>(0,n.createTableOfContents)(_()))},54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LightBadge=t.InverseBadge=t.Badge=t.BaseBadge=void 0;var s=l(a(0)),n=l(a(1));function l(e){return e&&e.__esModule?e:{default:e}}var d=t.BaseBadge=function(e){return s.default.createElement("span",{className:(0,n.default)("slds-badge",e.className)},e.children)},i=t.Badge=d;t.InverseBadge=function(e){return s.default.createElement(i,{className:"slds-badge_inverse"},e.children)},t.LightBadge=function(e){return s.default.createElement(i,{className:"slds-badge_lightest"},e.children)}}},[53]);