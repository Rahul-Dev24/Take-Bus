import{a as ee}from"./chunk-VGPRVJU2.js";import{a as K}from"./chunk-5HESVPQ2.js";import{a as Y}from"./chunk-X5OPW46L.js";import{a as Q,b as k}from"./chunk-NW6NHDHC.js";import{a as q}from"./chunk-O7NVKCFB.js";import"./chunk-GHOB3V4F.js";import{a as O,b as U,c as R,d as b,e as $,f as W,g as J}from"./chunk-2OFVGRYZ.js";import{l as X}from"./chunk-GJHMN62X.js";import{b as L}from"./chunk-AXSQGWF4.js";import{b as P,c as z,d as D}from"./chunk-RO2DPKCW.js";import{h as F,m as A}from"./chunk-23TUFUZG.js";import{$ as u,Eb as w,Ga as C,Ma as v,Sa as y,V as s,Va as f,Wa as e,Xa as r,Ya as l,_ as G,aa as h,ab as _,ba as m,c as se,ca as g,db as x,eb as d,nb as a,ob as Z,pb as S,rb as N,sb as B,va as V,xa as p}from"./chunk-SFNGWMRT.js";var T=(t,c)=>{let i=s(k),o=s(b),n=i.role(),E=i.isLoggedIn$();return w(()=>{n=i.role(),E=i.isLoggedIn$()}),E?n=="user"?(o.navigate(["/user/home"]),!1):!0:!1};var H=(t,c)=>{let i=s(k),o=s(b),n=i.isLoggedIn$();return w(()=>{n=i.isLoggedIn$()}),n?(o.navigate(["/user/home"]),!1):!0};var M=(t,c)=>{let i=s(k),o=s(b),n=i.isLoggedIn$();return w(()=>{n=i.isLoggedIn$()}),n?!0:(o.navigate(["/login"]),!1)};var te=[{path:"",redirectTo:"user/home",pathMatch:"full"},{path:"login",canActivate:[H],loadComponent:()=>import("./chunk-BF7245MN.js").then(t=>t.LoginComponent)},{path:"forgot-password",canActivate:[H],loadComponent:()=>import("./chunk-YAUKFXBI.js").then(t=>t.ForeigtPasswordComponent)},{path:"otp-verify",loadComponent:()=>import("./chunk-VW4GAXSO.js").then(t=>t.OtpVerifyComponent)},{path:"register",canActivate:[H],loadComponent:()=>import("./chunk-AO2B34AA.js").then(t=>t.RegisterComponent)},{path:"profile",canActivate:[M],loadComponent:()=>import("./chunk-WAZ7FXMV.js").then(t=>t.ProfileComponent)},{path:"work-area",canActivate:[M],loadComponent:()=>import("./chunk-TEC6NWPZ.js").then(t=>t.WorkAreaComponent)},{path:"user",children:[{path:"home",loadComponent:()=>import("./chunk-G4RI4HGT.js").then(t=>t.HomePageComponent)},{path:"booking",loadComponent:()=>import("./chunk-OZRWNKSO.js").then(t=>t.BookingPageComponent)},{path:"check-out",loadComponent:()=>import("./chunk-LCGG4LOK.js").then(t=>t.CheckoutPageComponent),canActivate:[M]}]},{path:"partner",children:[{path:"new-booking",canActivate:[M],loadComponent:()=>import("./chunk-RBIUTLSV.js").then(t=>t.NewBookingComponent)}]},{path:"admin",children:[{path:"home",component:K,canActivate:[T]},{path:"updateHomePage",canActivate:[T],loadComponent:()=>import("./chunk-QZ3R4AL4.js").then(t=>t.HomePageUpdateComponent)},{path:"category",canActivate:[T],loadComponent:()=>import("./chunk-ZCN6ZLSW.js").then(t=>t.CategoryComponent)}]}];var re=(t,c)=>{if(["api.cloudinary.com"].some(E=>t.url.includes(E)))return c(t);let o=s(Q).get("token"),n=o?t.clone({setHeaders:{Authorization:`Bearer ${o}`}}):t;return c(n)};var ie={providers:[J(te),P(D(),z([re]))]};var j={};se(j,{adminMenu:()=>de,default:()=>pe,userMenu:()=>me});var me=[{id:1,label:"Home",route:"",icon:"/assets/img/home.png",role:"user"},{id:2,label:"Flights",route:"",icon:"/assets/img/flight.png",role:"user"},{id:3,label:"Hotals",route:"",icon:"/assets/img/hotel.png",role:"user"},{id:4,label:"Bus",route:"",icon:"/assets/img/bus.png",role:"user"},{id:5,label:"Holidays",route:"",icon:"/assets/img/beach.png",role:"user"},{id:6,label:"Hotels & Flights",route:"",icon:"/assets/img/arrival-flight.png",role:"user"}],de=[{id:6,label:"Hotels & Flights",route:"",icon:"/assets/img/arrival-flight.png",role:"user"}],pe={userMenu:me,adminMenu:de};var ce=t=>[t],ge=()=>["admin/category"];function ue(t,c){if(t&1){let i=_();e(0,"div",17,0)(2,"div",18)(3,"span",19),a(4,"Bonnie Green"),r(),e(5,"span",20),a(6),r()(),e(7,"ul",21)(8,"li")(9,"p",22),x("click",function(){u(i);let n=d(3);return h(n.openMenu())}),a(10," Profile"),r()(),e(11,"li")(12,"p",23),x("click",function(){u(i);let n=d(3);return h(n.openMenu())}),a(13," Booking"),r()(),e(14,"li")(15,"p",23),x("click",function(){u(i);let n=d(3);return h(n.openMenu())}),a(16," Wellet (0)"),r()(),e(17,"li")(18,"p",23),x("click",function(){u(i);let n=d(3);return h(n.logout())}),a(19," Sign out"),r()()()()}t&2&&(p(6),Z("name@flowbite.com"))}function he(t,c){if(t&1){let i=_();e(0,"button",15),x("click",function(){u(i);let n=d(2);return h(n.openMenu())}),e(1,"span",9),a(2,"Open user menu"),r(),l(3,"img",16),r(),v(4,ue,20,1,"div",17)}if(t&2){let i=d(2);p(3),y("src",i.profileImg?i.profileImg:"/assets/img/default-profile.jpg",V),p(),f(i.isMenu?4:-1)}}function xe(t,c){t&1&&(e(0,"button",7),a(1," Login "),r())}function ve(t,c){if(t&1&&(l(0,"img",25),e(1,"div",26),a(2),r()),t&2){let i=d().$implicit;y("src",i==null?null:i.icon,V),p(),y("routerLink",B(3,ce,i==null?null:i.route)),p(),Z(i==null?null:i.label)}}function fe(t,c){if(t&1&&(e(0,"li",24),v(1,ve,3,5),r()),t&2){let i=c.$implicit;p(),f((i==null?null:i.role)=="user"?1:-1)}}function ye(t,c){if(t&1&&(e(0,"div",1),a(1,"dskfjdk"),r(),e(2,"nav",2)(3,"div",3)(4,"p",4),l(5,"img",5),r(),e(6,"div",6),v(7,he,5,2)(8,xe,2,0,"button",7),e(9,"button",8)(10,"span",9),a(11,"Open main menu"),r(),m(),e(12,"svg",10),l(13,"path",11),r()()(),g(),e(14,"div",12)(15,"ul",13),v(16,fe,2,1,"li",14),r()()()()),t&2){let i=d();p(7),f(i.isUserLogin?7:8),p(9),y("ngForOf",i.userMenuList)}}function we(t,c){if(t&1){let i=_();e(0,"div",40)(1,"div",77)(2,"p",78),a(3," Neil Sims "),r(),e(4,"p",79),a(5),r()(),e(6,"ul",80)(7,"li")(8,"p",22),x("click",function(){u(i);let n=d(2);return h(n.openMenu())}),a(9," Profile"),r()(),e(10,"li")(11,"p",81),a(12,"Settings"),r()(),e(13,"li")(14,"p",81),a(15,"Earnings"),r()(),e(16,"li")(17,"p",82),x("click",function(){u(i);let n=d(2);return h(n.logout())}),a(18,"Sign out"),r()()()()}t&2&&(p(5),S(" ","neil.sims@flowbite.com"," "))}function be(t,c){if(t&1){let i=_();e(0,"nav",27)(1,"div",28)(2,"div",29)(3,"div",30)(4,"button",31)(5,"span",9),a(6,"Open sidebar"),r(),m(),e(7,"svg",32),l(8,"path",33),r()(),g(),e(9,"a",34),l(10,"img",35),r()(),e(11,"div",36)(12,"div",37)(13,"div")(14,"button",38),x("click",function(){u(i);let n=d();return h(n.openMenu())}),e(15,"span",9),a(16,"Open user menu"),r(),l(17,"img",39),r()(),v(18,we,19,1,"div",40),r()()()()(),e(19,"aside",41)(20,"div",42)(21,"ul",43)(22,"li")(23,"a",44),m(),e(24,"svg",45),l(25,"path",46)(26,"path",47),r(),g(),e(27,"span",48),a(28,"Dashboard"),r()()(),e(29,"li")(30,"div",49),m(),e(31,"svg",50),l(32,"path",51),r(),g(),e(33,"span",52),a(34,"Category"),r()()(),e(35,"li")(36,"div",53),m(),e(37,"svg",54),l(38,"path",55),r(),g(),e(39,"span",52),a(40,"Work Area"),r(),e(41,"span",56),a(42,"3"),r()()(),e(43,"li")(44,"a",44),m(),e(45,"svg",57),l(46,"path",58),r(),g(),e(47,"span",52),a(48,"Users"),r()()(),e(49,"li")(50,"a",44),m(),e(51,"svg",59),l(52,"path",60),r(),g(),e(53,"span",52),a(54,"Products"),r()()(),e(55,"li")(56,"a",44),m(),e(57,"svg",61),l(58,"path",62),r(),g(),e(59,"span",52),a(60,"Sign In"),r()()(),e(61,"li")(62,"a",44),m(),e(63,"svg",54),l(64,"path",63)(65,"path",64)(66,"path",65),r(),g(),e(67,"span",52),a(68,"Sign Up"),r()()()(),e(69,"ul",66)(70,"li")(71,"div",67),m(),e(72,"svg",68),l(73,"path",69),r(),g(),e(74,"span",48),a(75,"Home Page"),r()()(),e(76,"li")(77,"a",70),m(),e(78,"svg",68),l(79,"path",69),r(),g(),e(80,"span",48),a(81,"Upgrade to Pro"),r()()(),e(82,"li")(83,"a",70),m(),e(84,"svg",71),l(85,"path",72),r(),g(),e(86,"span",48),a(87,"Documentation"),r()()(),e(88,"li")(89,"a",70),m(),e(90,"svg",57),l(91,"path",73)(92,"path",74),r(),g(),e(93,"span",48),a(94,"Components"),r()()(),e(95,"li")(96,"a",70),m(),e(97,"svg",75),l(98,"path",76),r(),g(),e(99,"span",48),a(100,"Help"),r()()()()()(),e(101,"div"),a(102,` jhgjh
`),r()}if(t&2){let i=d();p(17),y("src",i.profileImg?i.profileImg:"/assets/img/default-profile.jpg",V),p(),f(i.isMenu?18:-1),p(12),y("routerLink",N(3,ge))}}var ae=(()=>{class t{constructor(){this.role="user",this.authService=s(k),this.userMenuList=j?.userMenu,this.router=s(b),this.userService=s(q),this.isUserLogin=this.authService.isLoggedIn$(),this.isMenu=!1,w(()=>{this.role=this.authService.role(),this.isUserLogin=this.authService.isLoggedIn$(),this.profileImg=this.userService?.getProfileImg()})}ngOnInit(){}ngOnChanges(i){this.isMenu=!1,this.role=i?.role?.currentValue}openMenu(){this.isMenu=!this.isMenu}logout(){this.openMenu(),this.authService.logout(),this.router.navigate(["/user/home"])}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=C({type:t,selectors:[["app-navbar"]],inputs:{role:"role"},features:[G],decls:2,vars:1,consts:[["userDropdown",""],[1,"h-[4.5rem]"],[1,"bg-white","fixed","top-0","w-full","border-gray-200","dark:bg-gray-900","drop-shadow-md",2,"z-index","90000990"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],["routerLink","/user/home",1,"flex","cursor-pointer","items-center","space-x-3","rtl:space-x-reverse"],["src","/assets/img/logo.svg","alt","Take Bus",1,"h-7","md:h-9"],[1,"flex","items-center","md:order-2","space-x-3","md:space-x-0","rtl:space-x-reverse"],["routerLink","login",1,"block","text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"],["data-collapse-toggle","navbar-user","type","button","aria-controls","navbar-user","aria-expanded","false",1,"inline-flex","items-center","p-2","w-10","h-10","justify-center","text-sm","text-gray-500","rounded-lg","md:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],[1,"sr-only"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 17 14",1,"w-5","h-5"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 1h15M1 7h15M1 13h15"],["id","navbar-user",1,"items-center","justify-between","hidden","w-full","md:flex","md:w-auto","md:order-1"],[1,"flex","flex-col","font-medium","p-4","md:p-0","mt-4","border","border-gray-100","rounded-lg","bg-gray-50","md:space-x-8","rtl:space-x-reverse","md:flex-row","md:mt-0","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["class","flex items-center gap-2 cursor-pointer",4,"ngFor","ngForOf"],["type","button",1,"flex","text-sm","bg-gray-800","rounded-full","md:me-0","focus:ring-4","focus:ring-gray-300","dark:focus:ring-gray-600",3,"click"],["alt","user photo",1,"w-8","h-8","object-cover","rounded-full",3,"src"],[1,"z-50","absolute","top-10","right-20","border-2","border-zinc-200","my-4","text-base","list-none","bg-white","divide-y","divide-gray-100","rounded-lg","shadow","dark:bg-gray-700","dark:divide-gray-600"],[1,"px-4","py-3"],[1,"block","text-sm","text-gray-900","dark:text-white"],[1,"block","text-sm","text-gray-500","truncate","dark:text-gray-400"],["aria-labelledby","user-menu-button",1,"py-2"],["routerLink","/profile",1,"block","cursor-pointer","px-4","py-2","text-sm","text-gray-700","hover:bg-gray-100","dark:hover:bg-gray-600","dark:text-gray-200","dark:hover:text-white",3,"click"],[1,"block","cursor-pointer","px-4","py-2","text-sm","text-gray-700","hover:bg-gray-100","dark:hover:bg-gray-600","dark:text-gray-200","dark:hover:text-white",3,"click"],[1,"flex","items-center","gap-2","cursor-pointer"],["alt","",1,"w-4","h-4",3,"src"],["aria-current","page",1,"block","py-2","px-3","text-gray-900","rounded","hover:bg-gray-100","md:hover:bg-transparent","md:border-0","md:hover:text-blue-700","md:p-0","dark:text-white","md:dark:hover:text-blue-500","dark:hover:bg-gray-700","dark:hover:text-white","md:dark:hover:bg-transparent",3,"routerLink"],[1,"fixed","top-0","z-50","w-full","bg-white","border-b","border-gray-200","dark:bg-gray-800","dark:border-gray-700"],[1,"px-3","py-3","lg:px-5","lg:pl-3"],[1,"flex","items-center","justify-between","px-2"],[1,"flex","items-center","justify-start","rtl:justify-end"],["data-drawer-target","logo-sidebar","data-drawer-toggle","logo-sidebar","aria-controls","logo-sidebar","type","button",1,"inline-flex","items-center","p-2","text-sm","text-gray-500","rounded-lg","sm:hidden","hover:bg-gray-100","focus:outline-none","focus:ring-2","focus:ring-gray-200","dark:text-gray-400","dark:hover:bg-gray-700","dark:focus:ring-gray-600"],["aria-hidden","true","fill","currentColor","viewBox","0 0 20 20","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6"],["clip-rule","evenodd","fill-rule","evenodd","d","M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"],["href","",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["src","/assets/img/logo.svg","alt","Take Bus",1,"h-9"],[1,"flex","items-center"],[1,"flex","items-center","ms-3"],["type","button",1,"flex","text-sm","bg-gray-800","rounded-full","focus:ring-4","focus:ring-gray-300","dark:focus:ring-gray-600",3,"click"],["alt","user photo",1,"w-8","h-8","rounded-full",3,"src"],[1,"z-50","absolute","top-8","right-5","my-4","text-base","list-none","bg-white","divide-y","divide-gray-100","rounded","shadow","dark:bg-gray-700","dark:divide-gray-600"],["id","logo-sidebar","aria-label","Sidebar",1,"fixed","top-0","left-0","z-40","w-64","h-screen","pt-20","transition-transform","-translate-x-full","bg-white","border-r","border-gray-200","sm:translate-x-0","dark:bg-gray-800","dark:border-gray-700"],[1,"h-full","px-3","pb-4","overflow-y-auto","bg-white","dark:bg-gray-800"],[1,"space-y-2","font-medium"],["href","#",1,"flex","items-center","p-2","text-gray-900","rounded-lg","dark:text-white","hover:bg-gray-100","dark:hover:bg-gray-700","group"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 22 21",1,"w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"],["d","M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"],[1,"ms-3"],["routerLinkActive","bg-gray-200",1,"flex","cursor-pointer","items-center","p-2","text-gray-900","rounded-lg","dark:text-white","hover:bg-gray-100","dark:hover:bg-gray-700","group",3,"routerLink"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 18 18",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"],[1,"flex-1","ms-3","whitespace-nowrap"],["routerLink","work-area","routerLinkActive","bg-gray-200",1,"flex","cursor-pointer","items-center","p-2","text-gray-900","rounded-lg","dark:text-white","hover:bg-gray-100","dark:hover:bg-gray-700","group"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"],[1,"inline-flex","items-center","justify-center","w-3","h-3","p-3","ms-3","text-sm","font-medium","text-blue-800","bg-blue-100","rounded-full","dark:bg-blue-900","dark:text-blue-300"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 18",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 18 20",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 18 16",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"],["d","M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"],["d","M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"],["d","M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"],[1,"pt-4","mt-4","space-y-2","font-medium","border-t","border-gray-200","dark:border-gray-700"],["routerLink","admin/updateHomePage",1,"flex","items-center","p-2","text-gray-900","transition","duration-75","rounded-lg","hover:bg-gray-100","dark:hover:bg-gray-700","dark:text-white","group"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 17 20",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"],["href","#",1,"flex","items-center","p-2","text-gray-900","transition","duration-75","rounded-lg","hover:bg-gray-100","dark:hover:bg-gray-700","dark:text-white","group"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 20",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z"],["d","M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"],["d","M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 21 21",1,"flex-shrink-0","w-5","h-5","text-gray-500","transition","duration-75","dark:text-gray-400","group-hover:text-gray-900","dark:group-hover:text-white"],["d","m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z"],["role","none",1,"px-4","py-3"],["role","none",1,"text-sm","text-gray-900","dark:text-white"],["role","none",1,"text-sm","font-medium","text-gray-900","truncate","dark:text-gray-300"],["role","none",1,"py-1"],["role","menuitem",1,"block","cursor-pointer","px-4","py-2","text-sm","text-gray-700","hover:bg-gray-100","dark:text-gray-300","dark:hover:bg-gray-600","dark:hover:text-white"],["role","menuitem",1,"block","cursor-pointer","px-4","py-2","text-sm","text-gray-700","hover:bg-gray-100","dark:text-gray-300","dark:hover:bg-gray-600","dark:hover:text-white",3,"click"]],template:function(o,n){o&1&&v(0,ye,17,2)(1,be,103,4),o&2&&f(n.role=="user"?0:n.role=="admin"||n.role=="partner"?1:-1)},dependencies:[A,F,$,W],encapsulation:2})}}return t})();function ke(t,c){if(t&1){let i=_();e(0,"div",1)(1,"div",4),m(),e(2,"svg",5),l(3,"path",6),r(),g(),e(4,"span",7),a(5,"Check icon"),r()(),e(6,"div",8),a(7),r(),e(8,"button",9),x("click",function(){u(i);let n=d();return h(n.close())}),e(9,"span",7),a(10,"Close"),r(),m(),e(11,"svg",10),l(12,"path",11),r()()()}if(t&2){let i=d();p(7),S("",i.message,".")}}function _e(t,c){if(t&1){let i=_();e(0,"div",2)(1,"div",12),m(),e(2,"svg",5),l(3,"path",13),r(),g(),e(4,"span",7),a(5,"Error icon"),r()(),e(6,"div",8),a(7),r(),e(8,"button",14),x("click",function(){u(i);let n=d();return h(n.close())}),e(9,"span",7),a(10,"Close"),r(),m(),e(11,"svg",10),l(12,"path",11),r()()()}if(t&2){let i=d();p(7),S("",i.message,".")}}function Ce(t,c){if(t&1){let i=_();e(0,"div",3)(1,"div",15),m(),e(2,"svg",5),l(3,"path",16),r(),g(),e(4,"span",7),a(5,"Warning icon"),r()(),e(6,"div",8),a(7),r(),e(8,"button",17),x("click",function(){u(i);let n=d();return h(n.close())}),e(9,"span",7),a(10,"Close"),r(),m(),e(11,"svg",10),l(12,"path",11),r()()()}if(t&2){let i=d();p(7),S("",i.message,".")}}var oe=(()=>{class t{constructor(){this.alertService=s(L),this.showToast=!0}ngOnInit(){setTimeout(()=>{this.alertService.closeToast()},3e3)}close(){this.alertService.closeToast()}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=C({type:t,selectors:[["app-toast"]],inputs:{message:"message",type:"type"},decls:4,vars:1,consts:[[1,"toastMessage","absolute","w-full","flex","justify-center","top-20"],["id","toast-success","role","alert",1,"flex","items-center","toastMessage","w-full","max-w-xs","p-4","mb-4","text-gray-500","bg-white","rounded-lg","shadow-2xl","dark:text-gray-400","dark:bg-gray-800"],["id","toast-danger","role","alert",1,"flex","items-center","w-full","max-w-xs","p-4","mb-4","text-gray-500","bg-white","rounded-lg","shadow","dark:text-gray-400","dark:bg-gray-800"],["id","toast-warning","role","alert",1,"flex","items-center","w-full","max-w-xs","p-4","text-gray-500","bg-white","rounded-lg","shadow","dark:text-gray-400","dark:bg-gray-800"],[1,"inline-flex","items-center","justify-center","flex-shrink-0","w-8","h-8","text-green-500","bg-green-100","rounded-lg","dark:bg-green-800","dark:text-green-200"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 20 20",1,"w-5","h-5"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"],[1,"sr-only"],[1,"ms-3","text-sm","font-normal"],["type","button","data-dismiss-target","#toast-success","aria-label","Close",1,"ms-auto","-mx-1.5","-my-1.5","bg-white","text-gray-400","hover:text-gray-900","rounded-lg","focus:ring-2","focus:ring-gray-300","p-1.5","hover:bg-gray-100","inline-flex","items-center","justify-center","h-8","w-8","dark:text-gray-500","dark:hover:text-white","dark:bg-gray-800","dark:hover:bg-gray-700",3,"click"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 14 14",1,"w-3","h-3"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"],[1,"inline-flex","items-center","justify-center","flex-shrink-0","w-8","h-8","text-red-500","bg-red-100","rounded-lg","dark:bg-red-800","dark:text-red-200"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"],["type","button","data-dismiss-target","#toast-danger","aria-label","Close",1,"ms-auto","-mx-1.5","-my-1.5","bg-white","text-gray-400","hover:text-gray-900","rounded-lg","focus:ring-2","focus:ring-gray-300","p-1.5","hover:bg-gray-100","inline-flex","items-center","justify-center","h-8","w-8","dark:text-gray-500","dark:hover:text-white","dark:bg-gray-800","dark:hover:bg-gray-700",3,"click"],[1,"inline-flex","items-center","justify-center","flex-shrink-0","w-8","h-8","text-orange-500","bg-orange-100","rounded-lg","dark:bg-orange-700","dark:text-orange-200"],["d","M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"],["type","button","data-dismiss-target","#toast-warning","aria-label","Close",1,"ms-auto","-mx-1.5","-my-1.5","bg-white","text-gray-400","hover:text-gray-900","rounded-lg","focus:ring-2","focus:ring-gray-300","p-1.5","hover:bg-gray-100","inline-flex","items-center","justify-center","h-8","w-8","dark:text-gray-500","dark:hover:text-white","dark:bg-gray-800","dark:hover:bg-gray-700",3,"click"]],template:function(o,n){o&1&&(e(0,"div",0),v(1,ke,13,1,"div",1)(2,_e,13,1,"div",2)(3,Ce,13,1,"div",3),r()),o&2&&(p(),f(n.type==="success"?1:n.type==="error"?2:n.type==="warning"?3:-1))},encapsulation:2})}}return t})();function Se(t,c){t&1&&l(0,"app-footer")}function Me(t,c){if(t&1&&l(0,"app-toast",3),t&2){let i=d();y("message",i.alertData.message)("type",i.alertData.type)}}var le=(()=>{class t{constructor(){this.router=s(b),this.activatedRoute=s(U),this.alertService=s(L),this.authService=s(k),this.role="user",w(()=>{this.role=this.authService.role()})}ngOnInit(){Y(),this.alertService.currentMessage$.subscribe(i=>{this.alertData=i})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=C({type:t,selectors:[["app-root"]],decls:6,vars:3,consts:[[3,"role"],[1,"w-full"],[1,"md:w-[65%]","lg:md:w-[83%]","w-full","absolute","right-0","top-20","bg-zinc-100","min-h-screen","p-4","dark:bg-gray-500"],[3,"message","type"]],template:function(o,n){o&1&&(l(0,"app-navbar",0),e(1,"div",1)(2,"div",2),l(3,"router-outlet"),r()(),v(4,Se,1,0,"app-footer")(5,Me,1,2,"app-toast",3)),o&2&&(y("role",n.role),p(4),f(n.role=="user"?4:-1),p(),f(n.alertData.message!==""||n.alertData.type!==""?5:-1))},dependencies:[A,ae,oe,X,R,ee],encapsulation:2})}}return t})();O(le,ie).catch(t=>console.error(t));
