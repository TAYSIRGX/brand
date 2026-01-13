var $=function(s,c){return(c||document).querySelector(s)};var $$=function(s,c){return(c||document).querySelectorAll(s)};
var toast=function(m){var t=$("#toast");if(!t)return;t.textContent=m;t.classList.add("show");setTimeout(function(){t.classList.remove("show")},2200)};
var smoothLinks=function(){$$(".smooth-link").forEach(function(a){a.addEventListener("click",function(e){var href=a.getAttribute("href");if(!href)return;var same=href.indexOf("#")===0;var ext=href.indexOf("http")==0;if(same||ext)return;e.preventDefault();document.body.style.opacity="0.8";setTimeout(function(){location.href=href},120)})})};
var Auth=(function(){var k="bc_user";
 function current(){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}}
 function login(email,password){if(!email||!password)return{ok:false,msg:"يرجى إدخال البريد وكلمة المرور"};var u=current();if(u&&u.email===email){localStorage.setItem(k,JSON.stringify(u));return{ok:true,msg:"تم تسجيل الدخول"}}
 var nu={name:email.split("@")[0],email:email};localStorage.setItem(k,JSON.stringify(nu));return{ok:true,msg:"تم تسجيل الدخول"}}
 function signup(name,email,password){if(!name||!email||!password)return{ok:false,msg:"يرجى إدخال البيانات"};var u={name:name,email:email};localStorage.setItem(k,JSON.stringify(u));return{ok:true,msg:"تم إنشاء الحساب"}}
 function logout(){localStorage.removeItem(k);return{ok:true,msg:"تم تسجيل الخروج"}}
 return{current:current,login:login,signup:signup,logout:logout}})();
var updateNavAuth=function(){var u=Auth.current();var el=$("#nav-auth");if(!el)return;if(u){el.textContent="حسابي";el.setAttribute("href","profile.html")}else{el.textContent="دخول";el.setAttribute("href","login.html")}};
var initHome=function(){};
var initProducts=function(){};
var initProduct=function(){var main=$("#productMain");$$(".thumb").forEach(function(b){b.addEventListener("click",function(){var v=b.getAttribute("data-variant");main.className="product-main "+v})});var add=$("#addToCart");if(add){add.addEventListener("click",function(){toast("تمت إضافة المنتج إلى السلة")})}};
var initLogin=function(){var f=$("#loginForm");if(!f)return;f.addEventListener("submit",function(e){e.preventDefault();var email=$("#loginEmail").value.trim();var password=$("#loginPassword").value.trim();var r=Auth.login(email,password);toast(r.msg);if(r.ok){setTimeout(function(){location.href="profile.html"},500)}})};
var initSignup=function(){var f=$("#signupForm");if(!f)return;f.addEventListener("submit",function(e){e.preventDefault();var name=$("#signupName").value.trim();var email=$("#signupEmail").value.trim();var password=$("#signupPassword").value.trim();var r=Auth.signup(name,email,password);toast(r.msg);if(r.ok){setTimeout(function(){location.href="profile.html"},500)}})};
var initProfile=function(){var u=Auth.current();if(!u){toast("يرجى تسجيل الدخول");setTimeout(function(){location.href="login.html"},500);return}var n=$("#pName");var e=$("#pEmail");if(n)n.textContent=u.name||"—";if(e)e.textContent=u.email||"—";var out=$("#logoutBtn");if(out)out.addEventListener("click",function(){var r=Auth.logout();toast(r.msg);setTimeout(function(){location.href="index.html"},500)})};
document.addEventListener("DOMContentLoaded",function(){smoothLinks();updateNavAuth();var p=document.body.getAttribute("data-page");if(p==="home")initHome();if(p==="products")initProducts();if(p==="product")initProduct();if(p==="login")initLogin();if(p==="signup")initSignup();if(p==="profile")initProfile()});
