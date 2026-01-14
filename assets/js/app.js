var $=function(s,c){return(c||document).querySelector(s)};
var $$=function(s,c){return(c||document).querySelectorAll(s)};

var toast=function(m){
  var t=$("#toast");
  if(!t)return;
  t.textContent=m;
  t.classList.add("show");
  setTimeout(function(){t.classList.remove("show")},2200);
};

var smoothLinks=function(){
  $$("a.smooth-link, .btn.smooth-link").forEach(function(a){
    a.addEventListener("click",function(e){
      var href=a.getAttribute("href");
      if(!href || href === "#") return;
      var same=href.indexOf("#")===0;
      var ext=href.indexOf("http")===0;
      if(same||ext)return;
      e.preventDefault();
      document.body.style.opacity="0.8";
      setTimeout(function(){location.href=href},150);
    });
  });
};

var Lang=(function(){
  var k="bc_lang";
  function get(){return localStorage.getItem(k)||"ar"}
  function set(v){localStorage.setItem(k,v);apply()}
  var dict={
    ar:{
      nav_products:"المنتجات",nav_login:"دخول",nav_account:"حسابي",
      nav_men:"رجالي",nav_women:"نسائي",nav_accessories:"إكسسوارات",nav_orders:"الطلبات",
      hero_title:"فخامة ترتديها، هوية تعكسك",
      hero_lead:"براند عالمي بلمسات حديثة، تجربة راقية وتصميمات عالية الجودة.",
      hero_shop_now:"تسوّق الآن", hero_signup:"أنشئ حسابًا",
      featured_title:"مختاراتنا",
      add_to_cart:"أضف إلى السلة", buy_now: "شراء الآن",
      cart_title: "سلة التسوق", total: "المجموع:", checkout: "إتمام الشراء",
      checkout_title: "إتمام الشراء", shipping_info: "بيانات الشحن",
      full_name: "الاسم الكامل", address: "العنوان", phone: "رقم الجوال",
      payment_method: "طريقة الدفع", confirm_order: "تأكيد الطلب", order_summary: "ملخص الطلب",
      profile_title:"الملف الشخصي", email:"البريد الإلكتروني", change_password:"تغيير كلمة المرور",
      update_password:"تحديث كلمة المرور", logout:"تسجيل الخروج", logout_btn:"تسجيل الخروج",
      name_label:"الاسم", full_name_label:"الاسم الكامل",
      email_label:"البريد الإلكتروني", password_label:"كلمة المرور",
      signup_title:"إنشاء حساب", signup_btn:"إنشاء حساب",
      have_account:"لديك حساب بالفعل؟", login_link:"سجّل دخولك",
      login_title:"تسجيل الدخول", login_btn:"دخول",
      no_account:"ليس لديك حساب؟", create_account_link:"أنشئ حسابًا",
      product_title:"جاكيت جلد فاخر", product_desc:"جاكيت جلد عالي الجودة بتفاصيل دقيقة ولمسات حديثة، مناسب للإطلالات الرسمية والكاجوال ويعكس هوية فاخرة راقية.",
      size_label:"المقاس",
      payment_methods:"طرق الدفع:", payments_title:"طرق الدفع",
      pay_visa:"Visa", pay_cod:"الدفع عند الاستلام", pay_vodafone_cash:"فودافون كاش",
      phone_label:"رقم الهاتف", address_label:"العنوان",
      edit_profile_title:"تعديل البيانات", save_changes:"حفظ التعديلات",
      forgot_title:"نسيت كلمة المرور", forgot_lead:"أدخل بريدك وكلمة مرور جديدة لاستعادة الدخول",
      reset_btn:"إعادة ضبط", forgot_link:"نسيت كلمة المرور؟",
      toast_add_cart:"تمت إضافة المنتج إلى السلة", toast_order_placed:"تم استلام طلبك بنجاح!",
      toast_pass_changed:"تم تحديث كلمة المرور", toast_login_ok:"تم تسجيل الدخول",
      toast_need_input:"يرجى إدخال البريد وكلمة المرور",
      toast_signup_need:"يرجى إدخال الاسم والبريد وكلمة المرور",
      toast_profile_updated:"تم حفظ التعديلات",
      toast_item_removed:"تمت إزالة المنتج",
      clear_cart:"تفريغ السلة",
      toast_signup_ok:"تم إنشاء الحساب", toast_logout_ok:"تم تسجيل الخروج",
      empty_cart: "السلة فارغة حالياً",
      card_number:"رقم البطاقة",
      card_name:"اسم حامل البطاقة",
      card_expiry:"MM/YY",
      card_cvv:"CVV",
      cod_note:"سيتم الدفع عند الاستلام. يرجى التأكد من صحة العنوان ورقم الهاتف.",
      vodafone_number_label:"رقم التحويل",
      send_whatsapp_btn:"إرسال واتساب",
      vodafone_hint:"أرسل صورة التحويل على رقم الواتساب لمراجعة الطلب.",
      order_placed_message:"تم استلام طلبك، سنتواصل معك قريبًا."
    },
    en:{
      nav_products:"Products",nav_login:"Login",nav_account:"Account",
      nav_men:"Men",nav_women:"Women",nav_accessories:"Accessories",nav_orders:"Orders",
      hero_title:"Luxury you wear, identity that reflects you",
      hero_lead:"A global brand with modern touches, premium experience and high-quality designs.",
      hero_shop_now:"Shop Now", hero_signup:"Create Account",
      featured_title:"Featured",
      add_to_cart:"Add to Cart", buy_now: "Buy Now",
      cart_title: "Shopping Cart", total: "Total:", checkout: "Checkout",
      checkout_title: "Checkout", shipping_info: "Shipping Info",
      full_name: "Full Name", address: "Address", phone: "Phone Number",
      payment_method: "Payment Method", confirm_order: "Confirm Order", order_summary: "Order Summary",
      profile_title:"Profile", email:"Email", change_password:"Change Password",
      update_password:"Update Password", logout:"Logout", logout_btn:"Logout",
      name_label:"Name", full_name_label:"Full Name",
      email_label:"Email", password_label:"Password",
      signup_title:"Create Account", signup_btn:"Create Account",
      have_account:"Already have an account?", login_link:"Log in",
      login_title:"Login", login_btn:"Login",
      no_account:"Don't have an account?", create_account_link:"Create an account",
      product_title:"Premium Leather Jacket", product_desc:"High-quality leather jacket with fine details and modern touches, suitable for formal and casual looks and reflects a refined luxury identity.",
      size_label:"Size",
      payment_methods:"Payment Methods:", payments_title:"Payment Methods",
      pay_visa:"Visa", pay_cod:"Cash on Delivery", pay_vodafone_cash:"Vodafone Cash",
      toast_add_cart:"Added to cart", toast_order_placed:"Order placed successfully!",
      toast_pass_changed:"Password updated", toast_login_ok:"Signed in",
      toast_need_input:"Please enter email and password",
      toast_signup_need:"Please enter name, email and password",
      toast_profile_updated:"Changes saved",
      toast_item_removed:"Item removed",
      clear_cart:"Clear Cart",
      toast_signup_ok:"Account created", toast_logout_ok:"Signed out",
      empty_cart: "Cart is empty",
      card_number:"Card Number",
      card_name:"Cardholder Name",
      card_expiry:"MM/YY",
      card_cvv:"CVV",
      cod_note:"You will pay upon delivery. Please ensure address and phone are correct.",
      vodafone_number_label:"Transfer Number",
      send_whatsapp_btn:"Send WhatsApp",
      vodafone_hint:"Send the transfer screenshot to the WhatsApp number to review your order.",
      order_placed_message:"Your order is received. We'll contact you soon."
    }
  };
  function t(key){var d=dict[get()]||{};return d[key]||key}
  function apply(){
    var lang=get();
    var html=document.documentElement;
    html.setAttribute("lang",lang);
    html.setAttribute("dir",lang==="ar"?"rtl":"ltr");
    $$("[data-i18n]").forEach(function(el){
      var k=el.getAttribute("data-i18n");
      var v=t(k);
      if(v)el.textContent=v;
    });
    var b=$("#langToggle");
    if(b)b.textContent=lang==="ar"?"EN":"ع";
  }
  return{get:get,set:set,apply:apply,t:t};
})();

var Auth=(function(){
  var k="bc_user";
  var USERS_KEY="bc_users";
  function hash(s){var h=0;for(var i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0}return "h"+(h>>>0).toString(16)}
  function users(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||"[]")}catch(e){return[]}}
  function saveUsers(arr){localStorage.setItem(USERS_KEY,JSON.stringify(arr))}
  function current(){try{return JSON.parse(localStorage.getItem(k)||"null")}catch(e){return null}}
  function save(u){localStorage.setItem(k,JSON.stringify(u))}
  function login(email,password){
    if(!email||!password)return{ok:false,msg:Lang.t("toast_need_input")};
    var list=users();
    var u=list.find(function(x){return x.email.toLowerCase()===email.toLowerCase()});
    if(!u)return{ok:false,msg:Lang.t("toast_need_input")};
    if(u.passwordHash!==hash(password))return{ok:false,msg:Lang.t("toast_need_input")};
    u.loginCount=(u.loginCount||0)+1; u.lastLogin=Date.now();
    saveUsers(list.map(function(x){return x.email===u.email?u:x}));
    save(u);
    return{ok:true,msg:Lang.t("toast_login_ok")};
  }
  function signup(name,email,password){
    if(!name||!email||!password)return{ok:false,msg:Lang.t("toast_signup_need")};
    var list=users();
    var exists=list.some(function(x){return x.email.toLowerCase()===email.toLowerCase()});
    if(exists)return{ok:false,msg:Lang.t("toast_signup_need")};
    var u={name:name,email:email,avatar:null,isAdmin:(email.toLowerCase()==="admin@brand.com"),passwordHash:hash(password),loginCount:0,lastLogin:null,phone:null,address:null};
    list.push(u); saveUsers(list); save(u);
    return{ok:true,msg:Lang.t("toast_signup_ok")};
  }
  function update(data){
    var u=current();
    if(!u)return;
    if(data.avatar) u.avatar = data.avatar;
    if(data.password) u.passwordHash = hash(data.password);
    if(typeof data.name!=="undefined") u.name = data.name;
    if(typeof data.email!=="undefined") u.email = data.email;
    if(typeof data.phone!=="undefined") u.phone = data.phone;
    if(typeof data.address!=="undefined") u.address = data.address;
    save(u);
    var list=users().map(function(x){return x.email.toLowerCase()===u.email.toLowerCase()?u:x}); saveUsers(list);
  }
  function logout(){localStorage.removeItem(k);return{ok:true,msg:Lang.t("toast_logout_ok")}}
  function all(){return users()}
  function adminReset(email){var list=users(); var u=list.find(function(x){return x.email===email}); if(!u)return null; var np="BRAND-"+Math.random().toString(36).slice(2,8); u.passwordHash=hash(np); saveUsers(list.map(function(x){return x.email===email?u:x})); return np}
  return{current:current,login:login,signup:signup,logout:logout,update:update,all:all,adminReset:adminReset};
})();

var Cart=(function(){
  var k="bc_cart";
  function get(){try{return JSON.parse(localStorage.getItem(k)||"[]")}catch(e){return[]}}
  function add(item){
    var items=get();
    item._id = Date.now()+"-"+Math.random().toString(16).slice(2);
    items.push(item);
    localStorage.setItem(k,JSON.stringify(items));
    toast(Lang.t("toast_add_cart"));
    updateCartBadge();
  }
  function clear(){localStorage.removeItem(k)}
  function total(){
    return get().reduce((sum, item) => sum + (parseInt(item.price.replace(/[^0-9]/g,'')) || 0), 0);
  }
  function remove(id){
    var items=get().filter(function(it){return it._id!==id});
    localStorage.setItem(k,JSON.stringify(items));
    toast(Lang.t("toast_item_removed"));
    updateCartBadge();
  }
  return{get:get,add:add,clear:clear,total:total,remove:remove};
})();

var updateNavAuth=function(){
  var u=Auth.current();
  var el=$("#nav-auth");
  if(!el)return;
  if(u){el.textContent=Lang.t("nav_account");el.setAttribute("href","profile.html")}
  else{el.textContent=Lang.t("nav_login");el.setAttribute("href","login.html")}
  var ord=$("#nav-orders"); if(ord) ord.style.display = (u && u.isAdmin) ? "inline" : "none";
};

var updateCartBadge=function(){
  var el=$("#cartCount"); if(!el) return;
  var count = Cart.get().length;
  el.textContent = count;
};

// Page Initializers
var initProduct=function(){
  var main=$("#productMain");
  $$(".thumb").forEach(function(b){
    b.addEventListener("click",function(){
      var src=b.getAttribute("data-src");
      if(src) main.style.backgroundImage = "url('"+src+"')";
    });
  });
  
  var add=$("#addToCart");
  var buy=$("#buyNow");
  
  // Fake product data
  var productData = {
    title: $(".product-title")?.textContent || "Product",
    price: $(".price")?.textContent || "0",
    image: main.style.backgroundImage.slice(5, -2)
  };

  if(add){
    add.addEventListener("click",function(){
      Cart.add(productData);
    });
  }
  
  if(buy){
    buy.addEventListener("click",function(){
      Cart.add(productData);
      setTimeout(()=>location.href="checkout.html", 300);
    });
  }
};

var initCart=function(){
  var items = Cart.get();
  var container = $("#cartItems");
  var totalEl = $("#cartTotal");
  var clearBtn = $("#clearCartBtn");
  
  if(items.length === 0){
    container.innerHTML = `<div class="card" style="padding: 20px; text-align: center; color: var(--muted);">${Lang.t("empty_cart")}</div>`;
    if(totalEl) totalEl.textContent = "0";
    if(clearBtn) clearBtn.style.display="none";
    return;
  }
  
  container.innerHTML = items.map(item => `
    <div class="card" style="display: flex; gap: 15px; padding: 10px; align-items: center;">
      <div style="width: 80px; height: 80px; background-image: url('${item.image}'); background-size: cover; background-position: center; border-radius: 8px;"></div>
      <div style="flex: 1;">
        <div style="font-weight: 600;">${item.title}</div>
        <div style="color: var(--gold);">${item.price}</div>
      </div>
      <button class="btn btn-outline" data-remove="${item._id}">${Lang.t("toast_item_removed")}</button>
    </div>
  `).join("");
  
  if(totalEl) totalEl.textContent = Cart.total() + " " + (Lang.get()==="ar"?"ج.م":"EGP");
  if(clearBtn){ clearBtn.style.display="inline-flex"; clearBtn.textContent = Lang.t("clear_cart"); clearBtn.onclick=function(){ Cart.clear(); initCart(); updateCartBadge(); }; }
  
  container.addEventListener("click", function(ev){
    var btn = ev.target.closest("[data-remove]");
    if(btn){
      var id = btn.getAttribute("data-remove");
      Cart.remove(id);
      initCart();
    }
  });
};

var initCheckout=function(){
  var items = Cart.get();
  var container = $("#orderItems");
  var totalEl = $("#checkoutTotal");
  var details = $("#paymentDetails");
  
  if(container && items.length > 0){
    container.innerHTML = items.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 14px;">
        <span>${item.title}</span>
        <span>${item.price}</span>
      </div>
    `).join("");
    if(totalEl) totalEl.textContent = Cart.total() + " " + (Lang.get()==="ar"?"ج.م":"EGP");
  }

  var VODAFONE_NUMBER = "01006966403";
  var WHATSAPP_NUMBER = "01006966403";
  function render(method){
    if(!details) return;
    if(method==="visa"){
      details.innerHTML = `
        <div class="card" style="padding: 16px; display:grid; gap:10px;">
          <div style="font-weight:700;">${Lang.t("pay_visa")}</div>
          <input type="text" class="input" id="cardNumber" placeholder="${Lang.t("card_number")}" maxlength="19">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            <input type="text" class="input" id="cardName" placeholder="${Lang.t("card_name")}">
            <input type="text" class="input" id="cardExpiry" placeholder="${Lang.t("card_expiry")}">
          </div>
          <input type="password" class="input" id="cardCvv" placeholder="${Lang.t("card_cvv")}" maxlength="4">
        </div>
      `;
    }else if(method==="cod"){
      details.innerHTML = `
        <div class="card" style="padding: 16px;">
          <div style="font-weight:700;">${Lang.t("pay_cod")}</div>
          <div style="color:var(--muted); margin-top:6px;">${Lang.t("cod_note")}</div>
        </div>
      `;
    }else if(method==="vodafone_cash"){
      var link = "https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(Lang.get()==="ar"?"مرحبًا، أرسلت التحويل لفودافون كاش بقيمة "+Cart.total()+" ج.م.":"Hello, I sent Vodafone Cash transfer of "+Cart.total()+" EGP.");
      details.innerHTML = `
        <div class="card" style="padding: 16px; display:grid; gap:8px;">
          <div style="font-weight:700;">${Lang.t("pay_vodafone_cash")}</div>
          <div>${Lang.t("vodafone_number_label")}: <span style="color:var(--gold);font-weight:700;">${VODAFONE_NUMBER}</span></div>
          <a href="${link}" class="btn btn-outline" target="_blank">${Lang.t("send_whatsapp_btn")}</a>
          <div style="color:var(--muted);">${Lang.t("vodafone_hint")}</div>
        </div>
      `;
    }
  }
  var method = (document.querySelector('input[name="payment"]:checked')?.value)||"visa";
  render(method);
  var opts = document.querySelector(".payment-options");
  if(opts){
    opts.addEventListener("change", function(e){
      var v = document.querySelector('input[name="payment"]:checked')?.value;
      render(v);
    });
  }
  
  var form = $("#checkoutForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var selected = document.querySelector('input[name="payment"]:checked')?.value;
      if(selected==="visa"){
        var num=$("#cardNumber")?.value||"", name=$("#cardName")?.value||"", exp=$("#cardExpiry")?.value||"", cvv=$("#cardCvv")?.value||"";
        if(!num || !name || !exp || !cvv){ toast(Lang.t("toast_need_input")); return; }
      }
      toast(Lang.t("toast_order_placed"));
      Cart.clear();
      if(totalEl) totalEl.textContent = "0 " + (Lang.get()==="ar"?"ج.م":"EGP");
      if(container) container.innerHTML = `<div class="card" style="padding:16px; text-align:center;">${Lang.t("order_placed_message")}</div>`;
      if(details) details.innerHTML = "";
    });
  }
};

var initProfile=function(){
  var u=Auth.current();
  if(!u){
    location.href="login.html";
    return;
  }
  
  var n=$("#pName"); var nDisplay=$("#pNameDisplay");
  var e=$("#pEmail"); var img=$("#avatarImg");
  var p=$("#pPhone"); var a=$("#pAddress");
  
  if(n) n.textContent = u.name||"—";
  if(nDisplay) nDisplay.textContent = u.name||"—";
  if(e) e.textContent = u.email||"—";
  if(img && u.avatar) img.src = u.avatar;
  if(p) p.textContent = u.phone||"—";
  if(a) a.textContent = u.address||"—";
  
  // Avatar Upload
  var inp = $("#avatarInput");
  if(inp){
    inp.addEventListener("change", function(){
      var file = this.files[0];
      if(file){
        var reader = new FileReader();
        reader.onload = function(e){
          var res = e.target.result;
          img.src = res;
          Auth.update({avatar: res});
        };
        reader.readAsDataURL(file);
      }
    });
  }
  
  // Edit Profile
  var formU = $("#updateProfileForm");
  if(formU){
    var en=$("#editName"), ee=$("#editEmail"), ep=$("#editPhone"), ea=$("#editAddress");
    if(en) en.value = u.name||"";
    if(ee) ee.value = u.email||"";
    if(ep) ep.value = u.phone||"";
    if(ea) ea.value = u.address||"";
    formU.addEventListener("submit", function(ev){
      ev.preventDefault();
      Auth.update({
        name: en?.value||u.name,
        email: ee?.value||u.email,
        phone: ep?.value||u.phone,
        address: ea?.value||u.address
      });
      toast(Lang.t("toast_profile_updated"));
      initProfile();
    });
  }
  
  // Password Change
  var passForm = $("#changePassForm");
  if(passForm){
    passForm.addEventListener("submit", function(ev){
      ev.preventDefault();
      var newP = $("#newPass").value;
      if(newP){
        Auth.update({password: newP});
        toast(Lang.t("toast_pass_changed"));
        $("#newPass").value = "";
      }
    });
  }

  var out=$("#logoutBtn");
  if(out)out.addEventListener("click",function(){
    var r=Auth.logout();
    toast(r.msg);
    setTimeout(function(){location.href="index.html"},500);
  });
};

var initLogin = function(){
    var f=$("#loginForm");if(!f)return;
    f.addEventListener("submit",function(e){
        e.preventDefault();
        var email=$("#loginEmail").value.trim();
        var password=$("#loginPassword").value.trim();
        var r=Auth.login(email,password);
        toast(r.msg);
        if(r.ok){setTimeout(function(){location.href="profile.html"},500)}
    });
};

var initSignup = function(){
    var f=$("#signupForm");if(!f)return;
    f.addEventListener("submit",function(e){
        e.preventDefault();
        var name=$("#signupName").value.trim();
        var email=$("#signupEmail").value.trim();
        var password=$("#signupPassword").value.trim();
        var r=Auth.signup(name,email,password);
        toast(r.msg);
        if(r.ok){setTimeout(function(){location.href="profile.html"},500)}
  });
};

var initForgot = function(){
  var f=$("#forgotForm"); if(!f) return;
  f.addEventListener("submit", function(e){
    e.preventDefault();
    var email = $("#forgotEmail").value.trim();
    var newPass = $("#forgotNewPass").value.trim();
    var u = Auth.current();
    if(!email || !newPass){ toast(Lang.t("toast_need_input")); return; }
    if(u && u.email === email){
      Auth.update({password: newPass});
      toast(Lang.t("toast_pass_changed"));
      setTimeout(function(){ location.href="login.html" }, 800);
    }else{
      toast(Lang.t("toast_need_input"));
    }
  });
};

// Admin Orders storage and page
var adminOrderStorage = {
  key: "bc_admin_orders",
  save: function(order){
    var list = this.get();
    list.push(order);
    localStorage.setItem(this.key, JSON.stringify(list));
  },
  get: function(){
    try{ return JSON.parse(localStorage.getItem(this.key)||"[]") }catch(e){ return [] }
  }
};

var initOrders = function(){
  var u = Auth.current();
  if(!u || !u.isAdmin){ location.href="login.html"; return; }
  var listEl = $("#ordersList");
  var totalEl = $("#totalOrdersAmount");
  var orders = adminOrderStorage.get();
  if(!listEl) return;
  if(orders.length===0){
    listEl.innerHTML = `<div class="card" style="padding:16px; text-align:center; color:var(--muted);">لا توجد طلبات حتى الآن</div>`;
    if(totalEl) totalEl.textContent = "0";
    return;
  }
  var sum = 0;
  listEl.innerHTML = orders.map(function(o){
    sum += (o.total||0);
    var itemsHtml = (o.items||[]).map(function(it){
      return `<div style="display:flex; justify-content:space-between;"><span>${it.title}</span><span>${it.price}</span></div>`;
    }).join("");
    return `
      <div class="card" style="padding:16px; display:grid; gap:10px;">
        <div style="display:flex; justify-content:space-between;">
          <div>طلب #${o.id}</div>
          <div>${new Date(o.createdAt).toLocaleString()}</div>
        </div>
        <div>العميل: ${o.customer?.name||"—"} | ${o.customer?.phone||"—"} | ${o.customer?.email||"—"}</div>
        <div>العنوان: ${o.customer?.address||"—"}</div>
        <div>طريقة الدفع: ${o.method}</div>
        <div>${itemsHtml}</div>
        <div style="font-weight:700;">المجموع: ${o.total} ${Lang.get()==="ar"?"ج.م":"EGP"}</div>
      </div>
    `;
  }).join("");
  if(totalEl) totalEl.textContent = sum + " " + (Lang.get()==="ar"?"ج.م":"EGP");
};

var initAdminUsers=function(){
  var u=Auth.current(); if(!u||!u.isAdmin){location.href="login.html";return}
  var usersBox=$("#adminUsersList"); var statsBox=$("#adminStats");
  if(!usersBox||!statsBox)return;
  var list=Auth.all();
  var total=list.length; var totalLogins=list.reduce(function(a,b){return a+(b.loginCount||0)},0);
  statsBox.innerHTML=`<div class="card" style="padding:16px; display:grid; grid-template-columns:1fr 1fr; gap:10px;">
    <div>عدد الحسابات: <span style="color:var(--gold);font-weight:700">${total}</span></div>
    <div>إجمالي مرات الدخول: <span style="color:var(--gold);font-weight:700">${totalLogins}</span></div>
  </div>`;
  usersBox.innerHTML=list.map(function(x){
    return `<div class="card" style="padding:12px; display:grid; gap:8px;">
      <div style="display:flex; justify-content:space-between;"><div>${x.name||"—"}</div><div>${x.isAdmin?"مالك":"مستخدم"}</div></div>
      <div>البريد: ${x.email}</div>
      <div>الهاتف: ${x.phone||"—"}</div>
      <div>العنوان: ${x.address||"—"}</div>
      <div>آخر دخول: ${x.lastLogin?new Date(x.lastLogin).toLocaleString():"—"}</div>
      <div>مرات الدخول: ${x.loginCount||0}</div>
      <button class="btn btn-outline" data-reset="${x.email}">توليد كلمة مرور جديدة</button>
    </div>`
  }).join("");
  usersBox.addEventListener("click",function(ev){
    var b=ev.target.closest("[data-reset]"); if(b){
      var email=b.getAttribute("data-reset");
      var np=Auth.adminReset(email);
      if(np){ toast("كلمة المرور الجديدة: "+np) }
    }
  });
};

document.addEventListener("DOMContentLoaded",function(){
  Lang.apply();
  updateNavAuth();
  smoothLinks();
  updateCartBadge();
  var mt=$("#menuToggle"); var nv=$(".nav"); if(mt&&nv){mt.addEventListener("click",function(){nv.classList.toggle("open")})}
  
  var p=document.body.getAttribute("data-page");
  var b=$("#langToggle");
  if(b)b.addEventListener("click",function(){
    Lang.set(Lang.get()==="ar"?"en":"ar");
    updateNavAuth();
    // Refresh to update direction dependent layouts if needed
    location.reload(); 
  });
  
  if(p==="product") initProduct();
  if(p==="cart") initCart();
  if(p==="checkout") initCheckout();
  if(p==="profile") initProfile();
  if(p==="login") initLogin();
  if(p==="signup") initSignup();
  if(p==="forgot") initForgot();
  if(p==="orders") initOrders();
  if(p==="orders") initAdminUsers();
});
