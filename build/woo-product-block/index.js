(()=>{"use strict";var o,r={175:()=>{const o=window.wp.blocks,r=window.React,e=window.wp.i18n,t=window.wp.components,c=window.wp.blockEditor;(0,o.registerBlockType)("your-namespace/woocommerce-product-block",{apiVersion:2,title:"WooCommerce Product Block",description:"A block for creating WooCommerce products.",category:"widgets",icon:"cart",supports:{html:!1},edit:()=>{const o=(0,c.useBlockProps)();return(0,r.createElement)("div",{...o},(0,r.createElement)(t.Placeholder,{icon:"admin-post",label:(0,e.__)("WooCommerce Product Form","woo-product-block"),instructions:(0,e.__)("Product form will display here on the frontend.","woo-product-block")}))},save:()=>null})}},e={};function t(o){var c=e[o];if(void 0!==c)return c.exports;var n=e[o]={exports:{}};return r[o](n,n.exports,t),n.exports}t.m=r,o=[],t.O=(r,e,c,n)=>{if(!e){var i=1/0;for(p=0;p<o.length;p++){for(var[e,c,n]=o[p],l=!0,s=0;s<e.length;s++)(!1&n||i>=n)&&Object.keys(t.O).every((o=>t.O[o](e[s])))?e.splice(s--,1):(l=!1,n<i&&(i=n));if(l){o.splice(p--,1);var a=c();void 0!==a&&(r=a)}}return r}n=n||0;for(var p=o.length;p>0&&o[p-1][2]>n;p--)o[p]=o[p-1];o[p]=[e,c,n]},t.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),(()=>{var o={23:0,159:0};t.O.j=r=>0===o[r];var r=(r,e)=>{var c,n,[i,l,s]=e,a=0;if(i.some((r=>0!==o[r]))){for(c in l)t.o(l,c)&&(t.m[c]=l[c]);if(s)var p=s(t)}for(r&&r(e);a<i.length;a++)n=i[a],t.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return t.O(p)},e=globalThis.webpackChunkwoo_product_block=globalThis.webpackChunkwoo_product_block||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})();var c=t.O(void 0,[159],(()=>t(175)));c=t.O(c)})();