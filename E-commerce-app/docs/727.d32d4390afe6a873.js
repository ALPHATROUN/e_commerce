"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[727],{7727:(A,f,c)=>{c.r(f),c.d(f,{ProductsComponent:()=>ee});var p=c(6814),x=c(1120),P=c(460),e=c(4769);function _(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const a=e.MAs(1);return e.KtG(a.previous())})("click",function(){e.CHM(t),e.oxw(3);const a=e.MAs(1);return e.KtG(a.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function u(i,s){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function l(i,s){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,_,4,2,"a",10),e.YNc(2,u,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function m(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const a=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(a.value))})("click",function(){e.CHM(t);const a=e.oxw().$implicit;e.oxw(2);const r=e.MAs(1);return e.KtG(r.setCurrent(a.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function M(i,s){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function Z(i,s){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,m,6,5,"a",10),e.YNc(2,M,7,5,"ng-container",15),e.qZA()),2&i){const t=s.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function S(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const a=e.MAs(1);return e.KtG(a.next())})("click",function(){e.CHM(t),e.oxw(3);const a=e.MAs(1);return e.KtG(a.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,s){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function F(i,s){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,S,4,2,"a",10),e.YNc(2,D,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function N(i,s){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,l,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,Z,3,6,"li",7),e.YNc(5,F,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class I{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(s){return null==s.id&&(s.id=this.DEFAULT_ID),this.instances[s.id]?this.updateInstance(s):(this.instances[s.id]=s,!0)}updateInstance(s){let t=!1;for(let n in this.instances[s.id])s[n]!==this.instances[s.id][n]&&(this.instances[s.id][n]=s[n],t=!0);return t}getCurrentPage(s){return this.instances[s]?this.instances[s].currentPage:1}setCurrentPage(s,t){if(this.instances[s]){let n=this.instances[s];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[s].currentPage=t,this.change.emit(s))}}setTotalItems(s,t){this.instances[s]&&0<=t&&(this.instances[s].totalItems=t,this.change.emit(s))}setItemsPerPage(s,t){this.instances[s]&&(this.instances[s].itemsPerPage=t,this.change.emit(s))}getInstance(s=this.DEFAULT_ID){return this.instances[s]?this.clone(this.instances[s]):{}}clone(s){var t={};for(var n in s)s.hasOwnProperty(n)&&(t[n]=s[n]);return t}}const U=Number.MAX_SAFE_INTEGER;let E=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let C=n.id||this.service.defaultId();return this.state[C]?this.state[C].slice:t}let g,d,a=n.totalItems&&n.totalItems!==t.length,r=this.createInstance(t,n),o=r.id,h=r.itemsPerPage,L=this.service.register(r);if(!a&&t instanceof Array){if(h=+h||U,g=(r.currentPage-1)*h,d=g+h,this.stateIsIdentical(o,t,g,d))return this.state[o].slice;{let T=t.slice(g,d);return this.saveState(o,t,T,g,d),this.service.change.emit(o),T}}return L&&this.service.change.emit(o),this.saveState(o,t,t,g,d),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const a=["itemsPerPage","currentPage"].filter(r=>!(r in t));if(0<a.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${a.join(", ")}`)}saveState(t,n,a,r,o){this.state[t]={collection:n,size:n.length,slice:a,start:r,end:o}}stateIsIdentical(t,n,a,r){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==a||o.end!==r)&&o.slice.every((d,h)=>d===n[a+h])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(I,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),H=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(a=>{this.id===a&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,a,r){r=+r;let o=[];const g=Math.max(Math.ceil(a/n),1),d=Math.ceil(r/2),h=t<=d,L=g-d<t,C=!h&&!L;let T=r<g,v=1;for(;v<=g&&v<=r;){let y,w=this.calculatePageNumber(v,t,r,g);y=T&&(2===v&&(C||L)||v===r-1&&(C||h))?"...":w,o.push({label:y,value:w}),v++}return o}calculatePageNumber(t,n,a,r){let o=Math.ceil(a/2);return t===a?r:1===t?t:a<r?r-o<n?r-a+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(I),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function k(i){return!!i&&"false"!==i}let O=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=k(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=k(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=k(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(r){return n.pageChange.emit(r)})("pageBoundsCorrection",function(r){return n.pageBoundsCorrection.emit(r)}),e.TgZ(2,"nav",2),e.YNc(3,N,6,8,"ul",3),e.qZA()()),2&t){const a=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&a.pages.length<=1))}},dependencies:[H,p.O5,p.sg,p.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[I],imports:[[p.ez]]}),i})(),R=(()=>{class i{transform(t,n){return t.filter(a=>a.title.toLowerCase().includes(n.toLowerCase()))}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275pipe=e.Yjl({name:"search",type:i,pure:!0,standalone:!0})}return i})();var b=c(95),J=c(0),Y=c(6286),z=c(2425),q=c(9196);function Q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"i",24),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.removeItemFromWishList(a._id))}),e.qZA()}}function W(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"i",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.goWish(a._id))}),e.qZA()}}function $(i,s){if(1&i&&e._UZ(0,"i",26),2&i){const t=s.$implicit,n=e.oxw().$implicit;e.ekj("rating-color",n.ratingsAverage>=t)}}const j=function(i){return["/details",i]},G=function(){return[1,2,3,4,5]};function K(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e.YNc(2,Q,1,0,"i",11),e.YNc(3,W,1,0,"i",12),e.TgZ(4,"div",13)(5,"div"),e._UZ(6,"img",14),e.TgZ(7,"h3",15),e._uU(8),e.ALo(9,"cuttext"),e.qZA(),e.TgZ(10,"h4",16),e._uU(11),e.qZA(),e.TgZ(12,"div",17)(13,"span"),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"div"),e.YNc(17,$,1,2,"i",18),e.qZA()()()(),e.TgZ(18,"div",19),e.NdJ("click",function(){const r=e.CHM(t).$implicit,o=e.MAs(20),g=e.MAs(22),d=e.oxw(2);return e.KtG(d.goCart(r._id,o,g))}),e._UZ(19,"i",20,21)(21,"i",22,23),e.qZA()()()}if(2&i){const t=s.$implicit,n=e.oxw(2);e.xp6(2),e.Q6J("ngIf",n.wishListDetails.includes(t._id)),e.xp6(1),e.Q6J("ngIf",!n.wishListDetails.includes(t._id)),e.xp6(1),e.Q6J("routerLink",e.VKq(16,j,t._id)),e.xp6(2),e.Q6J("src",t.imageCover,e.LSH)("title",t.title)("alt",t.title),e.xp6(2),e.Oqu(e.xi3(9,10,t.title,2)),e.xp6(3),e.Oqu(t.category.name),e.xp6(3),e.Oqu(e.xi3(15,13,t.price,"EGP ")),e.xp6(3),e.Q6J("ngForOf",e.DdM(18,G))}}const V=function(i,s,t){return{id:"pagePagination",itemsPerPage:i,currentPage:s,totalItems:t}};function X(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"section",1)(1,"div",2)(2,"h2",3),e._uU(3,"All Products"),e.qZA(),e.TgZ(4,"input",4),e.NdJ("ngModelChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.searchTerm=a)}),e.qZA()(),e.TgZ(5,"div",5),e.YNc(6,K,23,19,"div",6),e.ALo(7,"paginate"),e.ALo(8,"search"),e.qZA(),e.TgZ(9,"div",7)(10,"pagination-controls",8),e.NdJ("pageChange",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(a))})("pageBoundsCorrection",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.pageChanged(a))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.searchTerm),e.xp6(2),e.Q6J("ngForOf",e.xi3(7,6,e.xi3(8,9,t.products,t.searchTerm),e.kEZ(12,V,t.pageSize,t.currentPage,t.total))),e.xp6(4),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let ee=(()=>{class i{constructor(t,n,a,r,o){this._ProductService=t,this._CartService=n,this._ToastrService=a,this._Renderer2=r,this._WishlistService=o,this.products=[],this.pageSize=0,this.currentPage=1,this.total=0,this.searchTerm="",this.wishListDetails=[]}ngOnInit(){this._ProductService.getProducts().subscribe({next:t=>{this.products=t.data,this.pageSize=t.metadata.limit,this.currentPage=t.metadata.currentPage,this.total=t.results},error:t=>{console.log(t)}})}goCart(t,n,a){this._Renderer2.addClass(n,"d-none"),this._Renderer2.removeClass(a,"d-none"),this._CartService.addToCart(t).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.addClass(a,"d-none"),this._Renderer2.removeClass(n,"d-none"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{console.log(r),this._Renderer2.addClass(a,"d-none"),this._Renderer2.removeClass(n,"d-none")}})}pageChanged(t){this._ProductService.getProducts(t).subscribe({next:n=>{this.products=n.data,this.pageSize=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.total=n.results},error:n=>{console.log(n)}})}goWish(t){this._WishlistService.addToWishList(t).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this.wishListDetails=n.data,this._WishlistService.getWishList().subscribe({next:a=>{this._WishlistService.wishNumber.next(a.count)},error:a=>{console.log(a)}})},error:n=>{console.log(n)}})}removeItemFromWishList(t){this._WishlistService.removeItem(t).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this.wishListDetails=n.data,this._WishlistService.getWishList().subscribe({next:a=>{this._WishlistService.wishNumber.next(a.count)},error:a=>{console.log(a)}})},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(J.M),e.Y36(Y.N),e.Y36(z._W),e.Y36(e.Qsj),e.Y36(q.M))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","mt-2 mb-4",4,"ngIf"],[1,"mt-2","mb-4"],[1,"d-flex","align-content-center","justify-content-between"],[1,"h4","pt-4","fw-bold"],["type","search","placeholder","Search...",1,"form-control","w-25","m-4",3,"ngModel","ngModelChange"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"pagination","d-flex","justify-content-center","mt-4"],["id","pagePagination","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","p-2","position-relative"],["class","fa-solid fa-heart cursor-pointer text-danger heart",3,"click",4,"ngIf"],["class","fa-regular fa-heart heart text-danger cursor-pointer",3,"click",4,"ngIf"],[1,"cursor-pointer",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6","fw-bold","pt-1"],[1,"h6","text-main","py-0"],[1,"small"],["class","fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"position-absolute","cart-shopping","cursor-pointer",3,"click"],[1,"fa-solid","fa-cart-shopping","text-main","fs-3"],["shopping",""],[1,"fa-solid","fa-check","text-main","fs-3","d-none"],["correct",""],[1,"fa-solid","fa-heart","cursor-pointer","text-danger","heart",3,"click"],[1,"fa-regular","fa-heart","heart","text-danger","cursor-pointer",3,"click"],[1,"fa-solid","fa-star"]],template:function(n,a){1&n&&e.YNc(0,X,11,16,"section",0),2&n&&e.Q6J("ngIf",a.products.length>0)},dependencies:[p.ez,p.sg,p.O5,p.H9,x.rH,P.r,B,E,O,R,b.u5,b.Fj,b.JJ,b.On]})}return i})()},6286:(A,f,c)=>{c.d(f,{N:()=>e});var p=c(5619),x=c(4769),P=c(9862);let e=(()=>{class _{constructor(l){this._HttpClient=l,this.baseUrl="https://ecommerce.routemisr.com",this.cartNumber=new p.X(0)}addToCart(l){return this._HttpClient.post(this.baseUrl+"/api/v1/cart",{productId:l})}getUserCart(){return this._HttpClient.get(this.baseUrl+"/api/v1/cart")}removeProductCart(l){return this._HttpClient.delete(this.baseUrl+`/api/v1/cart/${l}`)}updateQuantity(l,m){return this._HttpClient.put(this.baseUrl+`/api/v1/cart/${m}`,{count:l})}clearCart(){return this._HttpClient.delete(this.baseUrl+"/api/v1/cart")}checkOut(l,m){return this._HttpClient.post(this.baseUrl+`/api/v1/orders/checkout-session/${l}?url=https://github.com/AhmedElsoudy/E-commerce-app.git`,{shippingAddress:m})}static#e=this.\u0275fac=function(m){return new(m||_)(x.LFG(P.eN))};static#t=this.\u0275prov=x.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},0:(A,f,c)=>{c.d(f,{M:()=>P});var p=c(4769),x=c(9862);let P=(()=>{class e{constructor(u){this._HttpClient=u,this.baseUrl="https://ecommerce.routemisr.com"}getProducts(u=1){return this._HttpClient.get(this.baseUrl+`/api/v1/products?page=${u}`)}getCategories(){return this._HttpClient.get(this.baseUrl+"/api/v1/categories")}getCategoryDetails(u){return this._HttpClient.get(this.baseUrl+`/api/v1/categories/${u}`)}getSubCategoryOnCategory(u){return this._HttpClient.get(this.baseUrl+`/api/v1/categories/${u}/subcategories`)}getProductDetails(u){return this._HttpClient.get(this.baseUrl+`/api/v1/products/${u}`)}getBrands(){return this._HttpClient.get(this.baseUrl+"/api/v1/brands")}static#e=this.\u0275fac=function(l){return new(l||e)(p.LFG(x.eN))};static#t=this.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);