import{i as r,_ as b,a as v,b as d,c as I,d as y,e as h,f as T,g as N,h as S,j as k,k as L,l as O,m as B,n as E,o as F}from"./information.bce0b597.js";import{u as U,e as w,w as c,r as g,c as a,o as n,a as _,b as o,f as x,F as M}from"./index.0f81b69a.js";const R=["src"],$=["src"],V={__name:"BMS",setup(j){const s=U();s.SET_INFO_COUNT(s.menuInfo.menuId,r[s.menuInfo.menuId]);const f=w();c(()=>f.params.childName,async()=>{s.SET_INFO_COUNT(s.menuInfo.menuId,r[s.menuInfo.menuId])}),c(()=>s.currentInfoType,async()=>{e.value=s.currentInfoType});const e=g(s.currentInfoType),u=a(()=>`${s.menuInfo.menuId}${s.menuInfo.infoId}`),l=a(()=>new URL(Object.assign({"/src/assets/images/information/bms1_1.png":b,"/src/assets/images/information/bms2_1.png":v,"/src/assets/images/information/bms2_2.png":d,"/src/assets/images/information/bms3_1.png":I,"/src/assets/images/information/bms_1.png":y,"/src/assets/images/information/ems_1.png":h,"/src/assets/images/information/ems_2.png":T,"/src/assets/images/information/ems_3.png":N,"/src/assets/images/information/ems_4.png":S,"/src/assets/images/information/ems_5.png":k,"/src/assets/images/information/home_1.png":L,"/src/assets/images/information/pcs1_1.png":O,"/src/assets/images/information/pcs2_1.png":B,"/src/assets/images/information/pcs3_1.png":E,"/src/assets/images/information/pcs_1.png":F})[`/src/assets/images/information/${s.fileName}.png`],self.location)),p=a(()=>s.url),t=g(!1),i=m=>{try{m.timeStamp<1e4&&(t.value=!0)}catch{}};return(m,C)=>e.value==="img"?(n(),_("img",{key:o(u),class:"info-img",src:o(l)},null,8,R)):e.value==="url"||t.value?(n(),_("iframe",{key:1,id:"homeIframe",name:"homeIframe",scrolling:"yes",src:o(p),onLoad:i,onError:i},`\r
            \u60A8\u7576\u524D\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u9801\u9762\u4E0A\u529F\u80FD\uFF0C\u8ACB\u5347\u7D1A\u60A8\u7684\u700F\u89BD\u5668\u3002\r
        `,40,$)):(n(),_(M,{key:2},[x(" BMS ")],64))}};export{V as default};
