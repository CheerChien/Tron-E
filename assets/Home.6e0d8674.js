import{i as c,_ as l,a as f,b as p,c as b,d as u,e as v,f as d,g as h,h as y,j as I,k,l as N,m as T,n as B,o as L}from"./information.bce0b597.js";import{u as O,r as S,c as e,o as _,a,b as o,d as t}from"./index.0f81b69a.js";const U=["src"],$=["src"],j={key:2,class:"info-wording"},w=t("span",null,"Welcome",-1),x=t("span",null,"\u5275\u5955\u80FD\u6E90",-1),E=[w,x],M={__name:"Home",setup(R){var i;const s=O();s.SET_INFO_COUNT("home",(i=c)==null?void 0:i.home);const n=S(s.currentInfoType),m=e(()=>`${s.menuInfo.menuId}${s.menuInfo.infoId}`),r=e(()=>new URL(Object.assign({"/src/assets/images/information/bms1_1.png":l,"/src/assets/images/information/bms2_1.png":f,"/src/assets/images/information/bms2_2.png":p,"/src/assets/images/information/bms3_1.png":b,"/src/assets/images/information/bms_1.png":u,"/src/assets/images/information/ems_1.png":v,"/src/assets/images/information/ems_2.png":d,"/src/assets/images/information/ems_3.png":h,"/src/assets/images/information/ems_4.png":y,"/src/assets/images/information/ems_5.png":I,"/src/assets/images/information/home_1.png":k,"/src/assets/images/information/pcs1_1.png":N,"/src/assets/images/information/pcs2_1.png":T,"/src/assets/images/information/pcs3_1.png":B,"/src/assets/images/information/pcs_1.png":L})[`/src/assets/images/information/${s.fileName}.png`],self.location)),g=e(()=>s.url);return(C,F)=>n.value==="img"?(_(),a("img",{key:o(m),class:"info-img",src:o(r)},null,8,U)):n.value==="url"?(_(),a("iframe",{key:1,id:"homeIframe",name:"homeIframe",seamless:"",scrolling:"yes",src:o(g)},`\r
            \u60A8\u7576\u524D\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u9801\u9762\u4E0A\u529F\u80FD\uFF0C\u8ACB\u5347\u7D1A\u60A8\u7684\u700F\u89BD\u5668\u3002\r
        `,8,$)):(_(),a("label",j,E))}};export{M as default};
