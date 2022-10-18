"use strict";(self["webpackChunkhexagon_coffee_factory"]=self["webpackChunkhexagon_coffee_factory"]||[]).push([[986],{7986:function(t,e,o){o.r(e),o.d(e,{default:function(){return V}});var l=o(6252),a=o(3577),n=o(9963);const r=(0,l._)("ul",{class:"progress-cart list-unstyled d-flex justify-content-center mt-5"},[(0,l._)("li",{class:"active"},"購物車清單"),(0,l._)("li",null,"輸入資料"),(0,l._)("li",null,"確認付款")],-1),s={class:"row justify-content-center"},c={class:"col-lg-8 col-10 border border-secondary border-3 p-3 mb-5 me-lg-5 table-responsive-lg"},i={class:"table"},d=(0,l._)("thead",{class:"table-dark"},[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"項次"),(0,l._)("th",{scope:"col"},"購物車"),(0,l._)("th",{scope:"col"},"數量"),(0,l._)("th",{scope:"col"},"總計"),(0,l._)("th",{scope:"col"},"刪除")])],-1),u={scope:"row"},p={class:"d-flex align-items-center"},h=["src"],b={class:"ms-2"},_={class:"input-group",style:{width:"150px"}},m=["onClick","disabled"],y=(0,l._)("i",{class:"bi bi-dash"},null,-1),f=[y],C=["onUpdate:modelValue","onChange"],g=["onClick"],v=(0,l._)("i",{class:"bi bi-plus"},null,-1),k=[v],w={class:"text-center fs-3"},x=["onClick"],P=(0,l._)("i",{class:"bi bi-x-square-fill"},null,-1),U=[P],$={class:"col-lg-3 col-10 border border-secondary border-3 p-3 mb-5 h-100"},j={class:"fs-3 fw-bold ms-2"},q={class:"input-group mb-3 mt-auto"},D=(0,l._)("button",{type:"button",class:"btn btn-dark w-100"},"進入下一步",-1);function M(t,e,o,y,v,P){const M=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,(0,l._)("div",s,[(0,l._)("div",c,[(0,l._)("table",i,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.ProductCart,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:t,class:"align-middle"},[(0,l._)("th",u,(0,a.zw)(e+1),1),(0,l._)("td",null,[(0,l._)("div",p,[(0,l._)("img",{src:t.product.imageUrl,alt:"",style:{width:"150px",height:"90px","object-fit":"cover"}},null,8,h),(0,l._)("p",b,(0,a.zw)(t.product.title),1)])]),(0,l._)("td",null,[(0,l._)("div",_,[(0,l._)("button",{type:"button",class:"btn btn-outline-dark",onClick:(0,n.iM)((e=>P.UpdateCartQty(t.id,t.qty-1)),["prevent"]),disabled:1==t.qty},f,8,m),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e=>t.qty=e,onChange:e=>P.UpdateCartQty(t.id,t.qty),type:"text",min:"1",class:"form-control form-control-sm text-center border-dark bg-transparent"},null,40,C),[[n.nr,t.qty]]),(0,l._)("button",{type:"button",class:"btn btn-outline-dark",onClick:(0,n.iM)((e=>P.UpdateCartQty(t.id,t.qty+1)),["prevent"])},k,8,g)])]),(0,l._)("td",null,(0,a.zw)(t.final_total),1),(0,l._)("td",w,[(0,l._)("button",{onClick:(0,n.iM)((e=>P.DeleteCart(t.id)),["prevent"])},U,8,x)])])))),128))])])]),(0,l._)("div",$,[(0,l._)("p",null,[(0,l.Uk)("商品總計:"),(0,l._)("span",j,(0,a.zw)(v.totalPrice),1)]),(0,l._)("div",q,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"輸入優惠碼","aria-label":"Recipient's username","aria-describedby":"button-addon2","onUpdate:modelValue":e[0]||(e[0]=t=>v.couponcode=t)},null,512),[[n.nr,v.couponcode]]),(0,l._)("button",{class:"btn btn-outline-dark",type:"button",id:"button-addon2",onClick:e[1]||(e[1]=(0,n.iM)((t=>P.UseCoupon(v.couponcode)),["prevent"]))},"輸入優惠碼")]),(0,l._)("button",{type:"button",class:"btn btn-danger w-100 mb-4",onClick:e[2]||(e[2]=(0,n.iM)(((...t)=>P.DeleteAllCart&&P.DeleteAllCart(...t)),["prevent"]))},"刪除所有購物車"),(0,l.Wm)(M,{class:"nav-link fs-3",to:"/SendOrder"},{default:(0,l.w5)((()=>[D])),_:1})])])],64)}var z={data(){return{ProductCart:[],totalPrice:0,couponcode:""}},methods:{getProductCart(){const t="https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/cart";this.$http.get(t).then((t=>{this.ProductCart=t.data.data.carts,this.totalPrice=t.data.data.final_total}))},UpdateCartQty(t,e){const o={product_id:t,qty:Number(e)},l=`https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/cart/${t}`;this.$http.put(l,{data:o}).then((()=>{this.getProductCart()}))},DeleteCart(t){const e=`https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/cart/${t}`;this.$http.delete(e).then((()=>{this.getProductCart(),this.$emitter.emit("productcart","觸發子元件重新整理")}))},DeleteAllCart(){const t="https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/carts";this.$http.delete(t).then((()=>{this.getProductCart(),this.$emitter.emit("productcart","觸發子元件重新整理"),this.$emitter.emit("opentoast",{style:"danger",text:"移除所有購物車"})}))},UseCoupon(t){const e={code:t},o="https://vue3-course-api.hexschool.io/api/noname-myfirst-vueproject/coupon";this.$http.post(o,{data:e}).then((()=>{this.getProductCart()}))}},created(){this.getProductCart()}},Q=o(3744);const A=(0,Q.Z)(z,[["render",M]]);var V=A}}]);
//# sourceMappingURL=986.33b7e2fe.js.map