import{i,_ as b,a as d,b as v,c as I,d as y,e as h,f as T,g as N,h as S,j as k,k as L,l as O,m as C,n as F,o as U}from"./information.bce0b597.js";import{u as w,e as x,w as m,r,c as a,o as n,a as _,b as o,f as E,F as P}from"./index.0f81b69a.js";const R=["src"],$=["src"],V={__name:"PCS",setup(j){const s=w();s.SET_INFO_COUNT(s.menuInfo.menuId,i[s.menuInfo.menuId]);const c=x();m(()=>c.params.childName,async()=>{s.SET_INFO_COUNT(s.menuInfo.menuId,i[s.menuInfo.menuId])}),m(()=>s.currentInfoType,async()=>{e.value=s.currentInfoType});const e=r(s.currentInfoType),g=a(()=>`${s.menuInfo.menuId}${s.menuInfo.infoId}`),f=a(()=>new URL(Object.assign({"/src/assets/images/information/bms1_1.png":b,"/src/assets/images/information/bms2_1.png":d,"/src/assets/images/information/bms2_2.png":v,"/src/assets/images/information/bms3_1.png":I,"/src/assets/images/information/bms_1.png":y,"/src/assets/images/information/ems_1.png":h,"/src/assets/images/information/ems_2.png":T,"/src/assets/images/information/ems_3.png":N,"/src/assets/images/information/ems_4.png":S,"/src/assets/images/information/ems_5.png":k,"/src/assets/images/information/home_1.png":L,"/src/assets/images/information/pcs1_1.png":O,"/src/assets/images/information/pcs2_1.png":C,"/src/assets/images/information/pcs3_1.png":F,"/src/assets/images/information/pcs_1.png":U})[`/src/assets/images/information/${s.fileName}.png`],self.location)),l=a(()=>s.url),u=r(!1),p=t=>{try{t.timeStamp<1e4&&(u.value=!0)}catch{}};return(t,B)=>e.value==="img"?(n(),_("img",{key:o(g),class:"info-img",src:o(f)},null,8,R)):e.value==="url"?(n(),_("iframe",{key:1,id:"homeIframe",name:"homeIframe",seamless:"",scrolling:"yes",src:o(l),onLoad:p},`\r
            \u60A8\u7576\u524D\u7684\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u9801\u9762\u4E0A\u529F\u80FD\uFF0C\u8ACB\u5347\u7D1A\u60A8\u7684\u700F\u89BD\u5668\u3002\r
        `,40,$)):(n(),_(P,{key:2},[E(" PCS ")],64))}};export{V as default};
