import{b as E}from"./chunk-NW6NHDHC.js";import{d as C,e as F}from"./chunk-2OFVGRYZ.js";import{b as S,c as a,d as L,e as N,h as R,i as P,k as T,m as q}from"./chunk-GJHMN62X.js";import{b as _}from"./chunk-AXSQGWF4.js";import"./chunk-RO2DPKCW.js";import"./chunk-23TUFUZG.js";import{$ as f,Ga as x,Ma as u,Sa as g,V as p,Va as c,Wa as t,Xa as r,Ya as n,aa as h,ab as k,ba as b,ca as w,db as y,eb as v,nb as i,xa as l}from"./chunk-SFNGWMRT.js";function M(o,s){o&1&&(t(0,"small",20),i(1,"Name Required."),r())}function V(o,s){o&1&&(t(0,"small",20),i(1,"Must be more the 3 characters."),r())}function B(o,s){o&1&&(t(0,"small",20),i(1,"Email Required."),r())}function j(o,s){o&1&&(t(0,"small",20),i(1,"Please Enter valid email."),r())}function G(o,s){o&1&&(t(0,"small",20),i(1,"Password Required."),r())}function A(o,s){o&1&&(t(0,"small",20),i(1,"Must be 8 characters."),r())}function D(o,s){o&1&&(t(0,"small",20),i(1,"Password Not Mached."),r())}function H(o,s){o&1&&(t(0,"small",20),i(1,"Phone Number Required."),r())}function Z(o,s){o&1&&(t(0,"small",20),i(1,"Invalid Phone Number."),r())}function z(o,s){if(o&1){let d=k();t(0,"button",33),y("click",function(){f(d);let e=v();return h(e.register())}),b(),t(1,"svg",34),n(2,"path",35)(3,"path",36),r()()}}function I(o,s){if(o&1){let d=k();t(0,"button",33),y("click",function(){f(d);let e=v();return h(e.register())}),i(1," Register "),r()}}var X=(()=>{class o{constructor(){this.formBuilder=p(T),this.authService=p(E),this.alertService=p(_),this.router=p(C),this.loading=!1,this.registerForm=this.formBuilder.group({name:["",[a.required,a.minLength(3)]],email:["",[a.required,a.email]],password:["",[a.required,a.minLength(8)]],confirmPassword:[""],phoneNo:[null,[a.required,a.minLength(10),a.pattern(/^\d+$/),a.maxLength(10)]]})}register(){if(this.registerForm.markAllAsTouched(),this.registerForm.invalid)return;let d=this.registerForm.value;if(d?.password!==d?.confirmPassword){alert("Password must be same.");return}this.loading=!0,delete d.confirmPassword,this.authService.regesterUser(d).subscribe({next:m=>{console.log(m),this.router.navigate(["/otp-verify"])},complete:()=>{this.loading=!1},error:m=>{this.loading=!1,this.alertService.showError(m)}})}ngOnDestroy(){this.registerForm.reset()}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=x({type:o,selectors:[["app-register"]],decls:58,vars:12,consts:[[1,"loginBg","flex","align-center","justify-center","overflow-y-auto","overflow-x-hidden","fixed","top-0","right-0","left-0","z-50","items-center","w-full","md:inset-0","h-[calc(100%-1rem)]","max-h-full"],[1,"relative","w-full","max-w-fit"],[1,"flex","flex-col","items-center","rounded-lg","shadow","md:flex-row","dark:border-gray-700","dark:bg-gray-800","dark:hover:bg-gray-700"],["src","assets/img/signup_banner.jpeg","alt","",1,"object-cover","w-[19vw]","rounded-t-lg","h-[30rem]","md:rounded-none","md:rounded-s-lg"],[1,"flex","flex-col","justify-between","leading-normal","w-[22rem]"],[1,"bg-white","rounded-lg","shadow","dark:bg-gray-700"],[1,"flex","items-center","gap-3","justify-between","p-4","md:p-3","md:px-5","border-b","rounded-t","dark:border-gray-600"],["routerLink","/login",1,"w-5","cursor-pointer"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor"],["d","M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"],[1,"text-xl","font-semibold","text-gray-900","dark:text-white"],["type","button","routerLink","/user/home","data-modal-hide","authentication-modal",1,"end-2.5","text-gray-400","bg-transparent","ml-3","hover:bg-gray-200","hover:text-gray-900","rounded-lg","text-sm","w-8","h-8","ms-auto","inline-flex","justify-center","items-center","dark:hover:bg-gray-600","dark:hover:text-white"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"sr-only"],[1,"p-4","md:p-5"],[1,"max-w-md","mx-auto",3,"formGroup"],[1,"relative","z-0","w-full","mb-5","group"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","password","id","password","placeholder","Enter Name","formControlName","name",3,"classList"],[1,"text-red-700","ml-2","-mt-2","text-[0.6rem]"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","email","name","email","id","email","formControlName","email","placeholder","Enter Email",3,"classList"],[1,"grid","md:grid-cols-2","md:gap-6"],["type","password","name","password","id","password","placeholder","Enter Password","formControlName","password",3,"classList"],["type","password","name","password","id","password","placeholder","Conform Password","formControlName","confirmPassword",3,"classList"],["type","text","placeholder","Enter Number","formControlName","phoneNo",3,"classList"],[1,"flex","items-start","mb-5"],[1,"flex","items-center","h-5"],["id","terms","type","checkbox","value","","required","",1,"w-4","h-4","border","border-gray-300","rounded","bg-gray-50","focus:ring-3","focus:ring-blue-300","dark:bg-gray-700","dark:border-gray-600","dark:focus:ring-blue-600","dark:ring-offset-gray-800","dark:focus:ring-offset-gray-800"],["for","terms",1,"ms-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],["href","#",1,"text-blue-600","hover:underline","dark:text-blue-500"],["type","submit",1,"w-full","text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"],["type","submit",1,"w-full","text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800",3,"click"],["aria-hidden","true","role","status","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"inline","w-4","h-4","me-3","text-white","animate-spin"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","#E5E7EB"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentColor"]],template:function(m,e){m&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),n(3,"img",3),t(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),b(),t(8,"svg",8),n(9,"path",9),r()(),w(),t(10,"h3",10),i(11," Sign-up "),r(),t(12,"button",11),b(),t(13,"svg",12),n(14,"path",13),r(),w(),t(15,"span",14),i(16,"Close modal"),r()()(),t(17,"div",15)(18,"div",16)(19,"div",17)(20,"label",18),i(21," Name"),r(),n(22,"input",19),u(23,M,2,0,"small",20)(24,V,2,0,"small",20),r(),t(25,"div",17)(26,"label",21),i(27,"Your email"),r(),n(28,"input",22),u(29,B,2,0,"small",20)(30,j,2,0,"small",20),r(),t(31,"div",23)(32,"div",17)(33,"label",18),i(34,"Your password"),r(),n(35,"input",24),u(36,G,2,0,"small",20)(37,A,2,0,"small",20),r(),t(38,"div",17)(39,"label",18),i(40,"Conform password"),r(),n(41,"input",25),u(42,D,2,0,"small",20),r()(),t(43,"div",17)(44,"label",18),i(45," Phone Number"),r(),n(46,"input",26),u(47,H,2,0,"small",20)(48,Z,2,0,"small",20),r(),t(49,"div",27)(50,"div",28),n(51,"input",29),r(),t(52,"label",30),i(53,"I agree with the "),t(54,"a",31),i(55,"terms and conditions"),r()()(),u(56,z,4,0,"button",32)(57,I,2,0,"button",32),r()()()()()()()),m&2&&(l(18),g("formGroup",e.registerForm),l(4),g("classList",e.registerForm.controls.name.touched&&(e.registerForm.controls.name.errors!=null&&e.registerForm.controls.name.errors.minlength||e.registerForm.controls.name.errors!=null&&e.registerForm.controls.name.errors.required)?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"),l(),c(e.registerForm.controls.name.touched&&(e.registerForm.controls.name.errors!=null&&e.registerForm.controls.name.errors.required)?23:e.registerForm.controls.name.touched&&(e.registerForm.controls.name.errors!=null&&e.registerForm.controls.name.errors.minlength)?24:-1),l(5),g("classList",e.registerForm.controls.email.touched&&(e.registerForm.controls.email.errors!=null&&e.registerForm.controls.email.errors.required||e.registerForm.controls.email.errors!=null&&e.registerForm.controls.email.errors.email)?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"),l(),c(e.registerForm.controls.email.touched&&(e.registerForm.controls.email.errors!=null&&e.registerForm.controls.email.errors.required)?29:e.registerForm.controls.email.touched&&(e.registerForm.controls.email.errors!=null&&e.registerForm.controls.email.errors.email)?30:-1),l(6),g("classList",e.registerForm.controls.password.touched&&(e.registerForm.controls.password.errors!=null&&e.registerForm.controls.password.errors.minlength||e.registerForm.controls.password.errors!=null&&e.registerForm.controls.password.errors.required)?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"),l(),c(e.registerForm.controls.password.touched&&(e.registerForm.controls.password.errors!=null&&e.registerForm.controls.password.errors.required)?36:e.registerForm.controls.password.touched&&(e.registerForm.controls.password.errors!=null&&e.registerForm.controls.password.errors.minlength)?37:-1),l(5),g("classList",e.registerForm.controls.password.touched&&e.registerForm.controls.password.value!==e.registerForm.controls.confirmPassword.value?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"),l(),c(e.registerForm.controls.confirmPassword.touched&&e.registerForm.controls.password.value!=e.registerForm.controls.confirmPassword.value?42:-1),l(4),g("classList",e.registerForm.controls.phoneNo.touched&&e.registerForm.controls.phoneNo.errors?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"),l(),c(e.registerForm.controls.phoneNo.touched&&(e.registerForm.controls.phoneNo.errors!=null&&e.registerForm.controls.phoneNo.errors.required)?47:e.registerForm.controls.phoneNo.touched&&e.registerForm.controls.phoneNo.errors?48:-1),l(9),c(e.loading?56:57))},dependencies:[q,S,L,N,R,P,F],styles:[".loginBg[_ngcontent-%COMP%]{background-color:#000000d3;height:100vh}"]})}}return o})();export{X as RegisterComponent};
