import{i as d}from"./http-1f667af7.js";import{r as p,d as _,o,c as r,a as e,F as c,e as i,t as s,f as h,w as u,g as m}from"./app-22d7fab3.js";const v=e("h3",null,"隧道列表",-1),k={class:"table table-hover"},f=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"名称"),e("th",{scope:"col"},"协议"),e("th",{scope:"col"},"本地地址"),e("th",{scope:"col"},"远程端口/域名"),e("th",{scope:"col"},"服务器"),e("th",{scope:"col"},"状态")])],-1),x={key:0},g={key:1},y={key:0,class:"text-success"},b={key:1,class:"text-danger"},V={name:"Index",setup(w){const a=p([{id:"0",protocol:"",server:{server_address:"",server_port:"",name:""},run_id:""}]);return d.get("tunnels").then(l=>{a.value=l.data}),(l,B)=>{const n=_("router-link");return o(),r(c,null,[v,e("table",k,[f,e("tbody",null,[(o(!0),r(c,null,i(a.value,t=>(o(),r("tr",null,[e("th",null,s(t.id),1),e("td",null,[h(n,{to:{name:"tunnels.show",params:{id:t.id}}},{default:u(()=>[m(s(t.name),1)]),_:2},1032,["to"])]),e("td",null,s(t.protocol.toString().toUpperCase()),1),e("td",null,s(t.local_address),1),e("td",null,[t.protocol==="http"||t.protocol==="https"?(o(),r("span",x,s(t.custom_domain),1)):(o(),r("span",g,s(t.server.server_address)+":"+s(t.remote_port),1))]),e("td",null,s(t.server.name),1),e("td",null,[t.run_id?(o(),r("span",y,"在线")):(o(),r("span",b,"离线"))])]))),256))])])],64)}}};export{V as default};
