"use strict";(self.webpackChunkFreshcart=self.webpackChunkFreshcart||[]).push([[159],{159:(N,m,c)=>{c.r(m),c.d(m,{HomeComponent:()=>P});var p=c(1120),g=c(460),a=c(6814),l=c(756),t=c(4769),u=c(0),d=c(6286),h=c(2425),x=c(9196);function f(i,n){1&i&&t._UZ(0,"img",11)}function v(i,n){1&i&&t._UZ(0,"img",12)}function T(i,n){1&i&&t._UZ(0,"img",13)}function C(i,n){1&i&&t._UZ(0,"img",14)}function Z(i,n){1&i&&t._UZ(0,"img",15)}function O(i,n){if(1&i&&(t.TgZ(0,"div",19),t._UZ(1,"img",20),t.TgZ(2,"h3",21),t._uU(3),t.qZA()()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function D(i,n){if(1&i&&(t.ynx(0),t.YNc(1,O,4,4,"ng-template",18),t.BQk()),2&i){const e=n.$implicit;t.xp6(1),t.Q6J("id",e._id)}}function E(i,n){if(1&i&&(t.TgZ(0,"section")(1,"h2",16),t._uU(2,"Shop Popular Categories"),t.qZA(),t.TgZ(3,"owl-carousel-o",4),t.YNc(4,D,2,1,"ng-container",17),t.qZA()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("options",e.categoryOptions),t.xp6(1),t.Q6J("ngForOf",e.categories)}}function S(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"i",40),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.removeItemFromWishList(s._id))}),t.qZA()}}function A(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"i",41),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.goWish(s._id))}),t.qZA()}}function L(i,n){if(1&i&&t._UZ(0,"i",42),2&i){const e=n.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const w=function(i){return["/details",i]},M=function(){return[1,2,3,4,5]};function W(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",25)(1,"div",26),t.YNc(2,S,1,0,"i",27),t.YNc(3,A,1,0,"i",28),t.TgZ(4,"div",29)(5,"div"),t._UZ(6,"img",30),t.TgZ(7,"h3",31),t._uU(8),t.ALo(9,"cuttext"),t.qZA(),t.TgZ(10,"h4",32),t._uU(11),t.qZA(),t.TgZ(12,"div",33)(13,"span"),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"div"),t.YNc(17,L,1,2,"i",34),t.qZA()()()(),t.TgZ(18,"div",35),t.NdJ("click",function(){const r=t.CHM(e).$implicit,_=t.MAs(20),U=t.MAs(22),I=t.oxw(2);return t.KtG(I.goCart(r._id,_,U))}),t._UZ(19,"i",36,37)(21,"i",38,39),t.qZA()()()}if(2&i){const e=n.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngIf",o.wishListDetails.includes(e._id)),t.xp6(1),t.Q6J("ngIf",!o.wishListDetails.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(16,w,e._id)),t.xp6(2),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(t.xi3(9,10,e.title,2)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.Oqu(t.xi3(15,13,e.price,"EGP ")),t.xp6(3),t.Q6J("ngForOf",t.DdM(18,M))}}function H(i,n){if(1&i&&(t.TgZ(0,"section",22)(1,"h2",16),t._uU(2,"Shop Popular Products"),t.qZA(),t.TgZ(3,"div",23),t.YNc(4,W,23,19,"div",24),t.ALo(5,"slice"),t.qZA()()),2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.Dn7(5,1,e.products,0,18))}}let P=(()=>{class i{constructor(e,o,s,r,_){this._ProductService=e,this._CartService=o,this._ToastrService=s,this._Renderer2=r,this._WishlistService=_,this.products=[],this.categories=[],this.wishListDetails=[],this.categoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:1e3,responsive:{0:{items:2},400:{items:3},740:{items:4},940:{items:6}},nav:!1},this.mainSlideOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:3e3,autoplaySpeed:700,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{this.products=e.data},error:e=>{console.log(e)}}),this._ProductService.getCategories().subscribe({next:e=>{this.categories=e.data},error:e=>{console.log(e)}}),this._WishlistService.getWishList().subscribe({next:e=>{console.log(e.data);const o=e.data.map(s=>s._id);this.wishListDetails=o,this._WishlistService.wishNumber.next(e.count)},error:e=>{console.log(e)}})}goCart(e,o,s){this._Renderer2.addClass(o,"d-none"),this._Renderer2.removeClass(s,"d-none"),this._CartService.addToCart(e).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.addClass(s,"d-none"),this._Renderer2.removeClass(o,"d-none"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{console.log(r),this._Renderer2.addClass(s,"d-none"),this._Renderer2.removeClass(o,"d-none")}})}goWish(e){this._WishlistService.addToWishList(e).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message),this.wishListDetails=o.data,this._WishlistService.getWishList().subscribe({next:s=>{this._WishlistService.wishNumber.next(s.count)},error:s=>{console.log(s)}})},error:o=>{console.log(o)}})}removeItemFromWishList(e){this._WishlistService.removeItem(e).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message),this.wishListDetails=o.data,this._WishlistService.getWishList().subscribe({next:s=>{console.log(s.data),this._WishlistService.wishNumber.next(s.count)},error:s=>{console.log(s)}})},error:o=>{console.log(o)}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u.M),t.Y36(d.N),t.Y36(h._W),t.Y36(t.Qsj),t.Y36(x.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:15,vars:3,consts:[[1,"py-3"],[1,"container"],[1,"row","g-0"],[1,"col-md-8"],[3,"options"],["carouselSlide",""],[1,"col-md-4"],["src","./assets/images/main-slider-2.jpeg","height","250px","alt","main slider photo 2",1,"w-100"],["src","./assets/images/main-slider-3.jpeg","height","250px","alt","main slider photo 3",1,"w-100"],[4,"ngIf"],["class","mt-2 mb-4",4,"ngIf"],["src","./assets/images/main-slider-1.jpeg","height","500px","alt","main slider photo 1"],["src","./assets/images/main-slider-2.jpeg","height","500px","alt","main slider photo 2",1,"w-100"],["src","./assets/images/\u0631\u0645\u0636\u0627\u0646.jpg","height","500px","alt","main slider photo 2"],["src","./assets/images/main-slider-3.jpeg","height","500px","alt","main slider photo 3",1,"w-100"],["src","./assets/images/\u0639\u0631\u0648\u0636-\u0628\u064a\u0645-\u0644\u0634\u0647\u0631-\u0631\u0645\u0636\u0627\u0646-2024-2-800x600.jpg","height","500px","alt","main slider photo 2"],[1,"h4","pt-4","fw-bold"],[4,"ngFor","ngForOf"],["carouselSlide","",3,"id"],[1,"text-center","bg-main-light"],["height","300",1,"",3,"src","alt","title"],[1,"h6","text-main","small","fw-bold"],[1,"mt-2","mb-4"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","p-2","position-relative"],["class","fa-solid fa-heart cursor-pointer text-danger heart",3,"click",4,"ngIf"],["class","fa-regular fa-heart heart text-danger cursor-pointer",3,"click",4,"ngIf"],[1,"cursor-pointer",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6","fw-bold","pt-1"],[1,"h6","text-main","py-0"],[1,"small"],["class","fa-solid fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"position-absolute","cart-shopping","cursor-pointer",3,"click"],[1,"fa-solid","fa-cart-shopping","text-main","fs-3"],["shopping",""],[1,"fa-solid","fa-check","text-main","fs-3","d-none"],["correct",""],[1,"fa-solid","fa-heart","cursor-pointer","text-danger","heart",3,"click"],[1,"fa-regular","fa-heart","heart","text-danger","cursor-pointer",3,"click"],[1,"fa-solid","fa-star"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"owl-carousel-o",4),t.YNc(5,f,1,0,"ng-template",5),t.YNc(6,v,1,0,"ng-template",5),t.YNc(7,T,1,0,"ng-template",5),t.YNc(8,C,1,0,"ng-template",5),t.YNc(9,Z,1,0,"ng-template",5),t.qZA()(),t.TgZ(10,"div",6),t._UZ(11,"img",7)(12,"img",8),t.qZA()()()(),t.YNc(13,E,5,2,"section",9),t.YNc(14,H,6,5,"section",10)),2&o&&(t.xp6(4),t.Q6J("options",s.mainSlideOptions),t.xp6(9),t.Q6J("ngIf",s.categories.length>0),t.xp6(1),t.Q6J("ngIf",s.products.length>0))},dependencies:[a.ez,a.sg,a.O5,a.OU,a.H9,g.r,l.bB,l.Fy,l.Mp,p.rH]})}return i})()}}]);