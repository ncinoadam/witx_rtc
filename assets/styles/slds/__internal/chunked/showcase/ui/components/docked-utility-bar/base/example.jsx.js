var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/docked-utility-bar/base/example.jsx.js"]=webpackJsonpSLDS___internal_chunked_showcase([73,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],{0:function(e,l){e.exports=React},168:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.states=l.Context=l.UtilityBar=l.UtilityBarItem=l.UtilityPanel=void 0;var a=d(t(0)),s=d(t(2)),n=d(t(3)),i=d(t(1));function d(e){return e&&e.__esModule?e:{default:e}}var c=l.UtilityPanel=function(e){return a.default.createElement("div",{className:(0,i.default)("slds-utility-panel slds-grid slds-grid_vertical",e.className),role:"dialog","aria-labelledby":"panel-heading-01"},a.default.createElement("div",{className:"slds-utility-panel__header slds-grid slds-shrink-none"},a.default.createElement("div",{className:"slds-media slds-media_center"},a.default.createElement("div",{className:"slds-media__figure slds-m-right_x-small"},a.default.createElement("span",{className:"slds-icon_container"},a.default.createElement(s.default,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"standard",symbol:"call"}))),a.default.createElement("div",{className:"slds-media__body"},a.default.createElement("h2",{id:"panel-heading-01"},e.header||"Header"))),a.default.createElement("div",{className:"slds-col_bump-left slds-shrink-none"},a.default.createElement(n.default,{className:"slds-button_icon",symbol:"minimize_window",assistiveText:"Close Panel",title:"Close Panel"}))),a.default.createElement("div",{className:"slds-utility-panel__body"},e.children))},m=l.UtilityBarItem=function(e){return a.default.createElement("li",{className:(0,i.default)("slds-utility-bar__item",{"slds-has-notification":e.notification},e.className)},a.default.createElement("button",{className:(0,i.default)("slds-button slds-utility-bar__action",{"slds-is-active":e.active}),"aria-pressed":!!e.active},e.notification?a.default.createElement("abbr",{className:"slds-indicator_unread",title:"Unread Item","aria-label":"Unread Item"},a.default.createElement("span",{className:"slds-assistive-text"},"●")):null,a.default.createElement(s.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:e.symbol}),a.default.createElement("span",{className:"slds-utility-bar__text"},e.children)))},r=l.UtilityBar=function(e){return a.default.createElement("footer",{className:"slds-utility-bar_container","aria-label":"Utility Bar"},a.default.createElement("h2",{className:"slds-assistive-text"},"Utility Bar"),a.default.createElement("ul",{className:(0,i.default)("slds-utility-bar",e.className)},e.children),e.panel)},o=a.default.createElement(c,{className:"slds-is-open",header:"Call"},a.default.createElement("div",{className:"slds-align_absolute-center"},"Utility Panel Body"));l.Context=function(e){return a.default.createElement("div",{style:{height:"540px"}},e.children)};l.default=a.default.createElement(r,{panel:a.default.createElement(c,{header:"Call"},a.default.createElement("div",{className:"slds-align_absolute-center"},"Utility Panel Body"))},a.default.createElement(m,{symbol:"call"},"Call"),a.default.createElement(m,{symbol:"clock"},"History"),a.default.createElement(m,{symbol:"note"},"Notes"),a.default.createElement(m,{symbol:"omni_channel"},a.default.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),a.default.createElement("span",null,"Omni-Channel")));l.states=[{id:"open",label:"Panel Open",element:a.default.createElement(r,{panel:o},a.default.createElement(m,{symbol:"call",active:!0},"Call"),a.default.createElement(m,{symbol:"clock"},"History"),a.default.createElement(m,{symbol:"note"},"Notes"),a.default.createElement(m,{symbol:"omni_channel"},a.default.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),a.default.createElement("span",null,"Omni-Channel")))},{id:"notification",label:"Item has notification",element:a.default.createElement(r,null,a.default.createElement(m,{symbol:"call"},"Call"),a.default.createElement(m,{symbol:"clock"},"History"),a.default.createElement(m,{symbol:"note"},"Notes"),a.default.createElement(m,{symbol:"omni_channel",notification:!0},a.default.createElement("span",{className:"slds-m-bottom_xxx-small"},"Online"),a.default.createElement("span",null,"Omni-Channel")))}]}},[168]);