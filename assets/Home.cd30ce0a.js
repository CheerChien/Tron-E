import{i as c,_ as l,a as f,b as p,c as b,d as u,e as v,f as d,g as h,h as y,j as I,k,l as N,m as T,n as B,o as L,p as O,q as S,r as U,s as $}from"./information.a5da22f1.js";import{u as j,r as w,c as _,o as e,a,b as o,d as t}from"./index.3112be95.js";const x=["src"],E=["src"],R={key:2,class:"info-wording"},q=t("span",null,"Welcome",-1),C=t("span",null,"\u5275\u5955\u80FD\u6E90",-1),F=[q,C],W={__name:"Home",setup(H){var i;const s=j();s.SET_INFO_COUNT("home",(i=c)==null?void 0:i.home);const n=w(s.currentInfoType),m=_(()=>`${s.menuInfo.menuId}${s.menuInfo.infoId}`),r=_(()=>new URL(Object.assign({"/src/assets/images/information/bms1_1.png":l,"/src/assets/images/information/bms1_2.png":f,"/src/assets/images/information/bms2_1.png":p,"/src/assets/images/information/bms3_1.png":b,"/src/assets/images/information/bms_1.png":u,"/src/assets/images/information/bms_2.png":v,"/src/assets/images/information/bms_3.png":d,"/src/assets/images/information/bms_4.png":h,"/src/assets/images/information/bms_5.png":y,"/src/assets/images/information/ems1_1.png":I,"/src/assets/images/information/ems1_2.png":k,"/src/assets/images/information/ems2_1.png":N,"/src/assets/images/information/ems2_2.png":T,"/src/assets/images/information/home_1.png":B,"/src/assets/images/information/pcs1_1.png":L,"/src/assets/images/information/pcs2_1.png":O,"/src/assets/images/information/pcs2_2.png":S,"/src/assets/images/information/pcs3_1.png":U,"/src/assets/images/information/pcs_1.png":$})[`/src/assets/images/information/${s.fileName}.png`],self.location)),g=_(()=>s.url);return(K,M)=>n.value==="img"?(e(),a("img",{key:o(m),class:"info-img",src:o(r)},null,8,x)):n.value==="url"?(e(),a("iframe",{key:1,id:"homeIframe",name:"homeIframe",seamless:"",scrolling:"yes",src:o(g)},`\r
            \u60A8\u7576\u524D\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u9801\u9762\u4E0A\u529F\u80FD\uFF0C\u8ACB\u5347\u7D1A\u60A8\u7684\u700F\u89BD\u5668\u3002\r
        `,8,E)):(e(),a("label",R,F))}};export{W as default};
