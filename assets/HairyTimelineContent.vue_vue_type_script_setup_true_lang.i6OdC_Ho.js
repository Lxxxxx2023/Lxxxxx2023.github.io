import{e as f,t as p}from"./app.C-a7vcDG.js";import{d as c}from"./chunks/dayjs.CCYrSalk.js";import{u as g}from"./chunks/vue-router.B4chQHFU.js";import"./chunks/pinia.B4e18374.js";import{k,O as y,F as h,Q as r,M as C,R as v,S as a,x as n,X as $,Y,N as m}from"./framework.BBlErx2S.js";function _(t){var o=t==null?0:t.length;return o?t[o-1]:void 0}const B={class:"mb-1 text-size-3.5 mt-1.5 flex items-center"},N={class:"mr-2.2 dark:text-gray-500 text-gray-400"},w=k({__name:"HairyTimelineContent",props:{post:{},format:{default:"YYYY-MM-DD"}},setup(t){const o=g();function l(e=[]){o.push({path:`/categories/${p(e).join("/")}`})}return(e,s)=>{var i;const u=f;return m(),y(h,null,[r("div",B,[r("div",N,a(n(c)(e.post.date).format(e.format)),1),(i=e.post.categories)!=null&&i.length?(m(),C(u,{key:0,bordered:"",type:"white",onClick:s[0]||(s[0]=d=>l(e.post.categories))},{default:$(()=>[Y(a(e.$t(n(_)(n(p)(e.post.categories))||"",{},{missingWarn:!1})),1)]),_:1})):v("v-if",!0)]),r("a",{class:"cursor-pointer text-size-4",onClick:s[1]||(s[1]=d=>e.$router.push(e.post.path||""))},a(e.post.title),1)],64)}}});export{w as _};
