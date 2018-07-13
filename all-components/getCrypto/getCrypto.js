﻿/**
 * getCrypto v1.3.8 - jQuery JavaScript Library
 *
 * Copyright hiTech Office
 * Released under the MIT license
 * https://opensource.org/licenses/MIT
 *
 * Date: 26.04.2018
 **/
!function(K,P,e){"use strict";var j={crypto:"Bitcoin",from:0,currency:"USD",preloader:!1,lang:"auto",cache:!0,socket:!1,live:{price:function(e,t,r){return e},delta:function(e,t,r){return e}},start:function(){},show:function(e,t){K(this).append("<div>"+e.name+": "+e.currency.iso+e.price.current+"</div>")},end:function(e){}},O=0,x=0,A={},c={init:function(s,u,c){e=K.extend({},j,u),s.data("setting",e),u=e;var e,o=[],l=[],p=Date.now(),d=1;if(!1!==u.preloader&&function(){var e=u.preloader;if(Array.isArray(e))switch(e[0].toLowerCase()){case"class":s.addClass(e[1]);break;case"img":s.append('<div class="preloader-container">'+('<img src="'+e[1]+'"/>')+"</div>")}else"css"===e&&s.append(((t=K("[data-preloader-html]")).is(":visible")&&t.hide(),'<div class="preloader-container">'+t.html()+"</div>"));var t}(),!0===u.socket)try{io}catch(e){console.error("getCrypto.js: Библиотека socket.io.js не найдена!"),u.socket=!1}"auto"===u.lang.toLowerCase()&&(u.lang=function(){var e=L();{if(e)return e;var t=K("title").text();return t?E("latin",t)&&!E("cirilic",t)?"EN":(!E("latin",t)&&E("cirilic",t),"RU"):"RU"}}());var f=function(){switch(u.lang.toUpperCase()){case"RU":return{digits:["тыс","млн","млрд","трлн","квадрлн","квинтлн"],months:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],time:{update:["Обновлено","и","назад"],declension:{minutes:["минут","минуту","минуты"],seconds:["секунд","секунду","секунды"]}},currency:{AUD:"Австралийский Доллар",BRL:"Бразильский Реал",CAD:"Канадский Доллар",CHF:"Швейцарский Франк",CLP:"Чилийское Песо",CNY:"Китайский Юань",CZK:"Чешская Крона",DKK:"Датская Крона",EUR:"Европейский Евро",USD:"Доллар США",GBP:"Фунт Стерлингов",HKD:"Гонконгский Доллар",HUF:"Венгерский Форинт",IDR:"Индонезийская Рупия",ILS:"Израильский Шекель",INR:"Индийская Рупия",JPY:"Японская Иена",KRW:"Корейская Вона",MXN:"Мексиканский Песо",MYR:"Малайзийский Ринггит",NOK:"Норвежская Крона",NZD:"Новозеландский Доллар",PHP:"Филиппинское Песо",PKR:"Пакистанская Рупия",PLN:"Польский Злотый",RUB:"Российский Рубль",SEK:"Шведская Крона",SGD:"Сингапурский Доллар",THB:"Тайский Бат",TRY:"Турецкая Лира",TWD:"Тайваньский Доллар",ZAR:"Южноафриканский Ранд"}};case"EN":return{digits:["Th","M","B","T","QA","QU"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],time:{update:["Updated","and","ago"],declension:{minutes:["minute","minutes"],seconds:["second","seconds"]}},currency:{AUD:"Australian Dollar",BRL:"Brazil Real",CAD:"Canadian Dollar",CHF:"Swiss Frank",CLP:"Chilean Peso",CNY:"Chinese Yuan",CZK:"Czech Krone",DKK:"Danish Krone",EUR:"European Euro",USD:"USA Dollar",GBP:"Pound Sterling",HKD:"Hong Kong Dollar",HUF:"Hungarian Forint",IDR:"Indonesian Rupee",ILS:"Israeli Shekel",INR:"Indian Rupee",JPY:"Japanese Yen",KRW:"Korean Won",MXN:"Mexican Peso",MYR:"Malaysian Ringgit",NOK:"Norwegian Krone",NZD:"New Zealand Dollar",PHP:"Philippine Peso",PKR:"Pakistani Rupee",PLN:"Polish Zloty",RUB:"Russian Ruble",SEK:"Swedish Krone",SGD:"Singapore Dollar",THB:"Thai Bath",TRY:"Turkish Lira",TWD:"Taiwan Dollar",ZAR:"South African Rand"}}}}();"init"===c&&(x+=1);var t,r,a,n,g=(t=x,r=Math.abs(~~String(125*(t+621)*61).slice(0,6)),a=function(e){for(var t="",r=0;r<e.length;r++)t+=e.charCodeAt(r).toString(10);return Number(t.slice(-8))}(P.location.href),n="getCrypto_"+String(r)+String(a),s.prop("attributes")[0].cache_id=n);function i(e){return{crypto:e.crypto,from:e.from,currency:e.currency,lang:e.lang,socket:e.socket}}function m(e,t){!1!==u.preloader&&function(){var e=u.preloader;if(Array.isArray(e))switch(e[0].toLowerCase()){case"class":s.removeClass(e[1]);break;case"img":K(".preloader-container",s).fadeOut(350,function(){K(this).remove()})}else"css"===e&&K(".preloader-container",s).fadeOut(650,function(){K(this).remove()})}(),u.show.call(s.get(0),e,t)}function h(e,t){if("object"==typeof e&&!K.isEmptyObject(e)&&"object"==typeof t&&!K.isEmptyObject(t)){var r=[];for(var a in t)b(e,[a,"update","unix"])&&b(t,[a,"update","unix"])&&e[a].update.unix!==t[a].update.unix&&r.push(Number(a));return 0!==r.length&&r}}function b(e,t){for(var r=0;r<t.length;r++)if(!(e=e[t[r]]))return null;return e}function v(e){var t=function(){switch(typeof u.crypto){case"string":return"https://api.coinmarketcap.com/v1/ticker/"+u.crypto.toLowerCase()+"/?convert="+u.currency.toUpperCase();case"number":return"https://api.coinmarketcap.com/v1/ticker/?convert="+u.currency.toUpperCase()+"&start="+u.from+"&limit="+u.crypto;case"object":return"https://api.coinmarketcap.com/v1/ticker/"}}();return K.ajax({url:t+("object"==typeof u.crypto?u.crypto[e].toLowerCase()+"/?convert="+u.currency.toUpperCase():""),method:"GET",dataType:"json",cache:u.cache,success:function(e){for(var t in e)l.push(S(e[t]));k("loaded",[l,{type:"request",time:y(p)}])},error:function(e,t,r){k("failed",[e,t,r])}})}function y(e){return Date.now()-e}function k(e,t){setTimeout(function(){s.trigger(e+".getCrypto",t)})}function N(e){var t="";if("0"===(e=String(Math.floor(e))))return"0";switch(e.length){case 1:case 2:case 3:t="0.0"+e.slice(0,2)+" "+f.digits[0];break;case 4:t=e.slice(0,1)+"."+e.slice(1,3)+" "+f.digits[0];break;case 5:t=e.slice(0,2)+"."+e.slice(2,4)+" "+f.digits[0];break;case 6:t=e.slice(0,3)+"."+e.slice(3,5)+" "+f.digits[0];break;case 7:t=e.slice(0,1)+"."+e.slice(1,3)+" "+f.digits[1];break;case 8:t=e.slice(0,2)+"."+e.slice(2,4)+" "+f.digits[1];break;case 9:t=e.slice(0,3)+"."+e.slice(3,5)+" "+f.digits[1];break;case 10:t=e.slice(0,1)+"."+e.slice(1,3)+" "+f.digits[2];break;case 11:t=e.slice(0,2)+"."+e.slice(2,4)+" "+f.digits[2];break;case 12:t=e.slice(0,3)+"."+e.slice(3,5)+" "+f.digits[2];break;case 13:t=e.slice(0,1)+"."+e.slice(1,3)+" "+f.digits[3];break;case 14:t=e.slice(0,2)+"."+e.slice(2,4)+" "+f.digits[3];break;case 15:t=e.slice(0,3)+"."+e.slice(3,5)+" "+f.digits[3];break;case 16:t=e.slice(0,1)+"."+e.slice(1,3)+" "+f.digits[4];break;case 17:t=e.slice(0,2)+"."+e.slice(2,4)+" "+f.digits[4];break;case 18:t=e.slice(0,3)+"."+e.slice(3,5)+" "+f.digits[4];break;case 19:t=e.slice(0,1)+"."+e.slice(1,3)+" "+f.digits[5];break;case 20:t=e.slice(0,2)+"."+e.slice(2,4)+" "+f.digits[5];break;case 21:t=e.slice(0,3)+"."+e.slice(3,5)+" "+f.digits[5]}return t}function S(e){var t=w(e,"price");return{id:e.id,name:e.name,symbol:e.symbol,rank:Number(e.rank),currency:{symbol:u.currency.toUpperCase(),iso:function(e){var t="";switch(e.toUpperCase()){case"USD":t="&#36;";break;case"AUD":t="&#8371;";break;case"BRL":case"CAD":t="&#36;";break;case"CHF":t="&#8355;";break;case"CLP":t="&#8369;";break;case"CNY":t="&#165;";break;case"CZK":t="&#75;&#269;";break;case"DKK":t="&#107;&#114;";break;case"EUR":t="&#8364;";break;case"GBP":t="&#163;";break;case"HKD":t="&#36;";break;case"HUF":t="&#70;&#116;";break;case"IDR":t="&#82;&#112;";break;case"ILS":t="&#8362;";break;case"INR":t="&#8377;";break;case"JPY":t="&#165;";break;case"KRW":t="&#8361;";break;case"MXN":t="&#36;";break;case"MYR":t="&#82;&#77;";break;case"NOK":t="&#107;&#114;";break;case"NZD":t="&#36;";break;case"PHP":t="&#8369;";break;case"PKR":t="&#8377;";break;case"PLN":t="&#122;&#322;";break;case"RUB":t="&#8381;";break;case"SEK":t="&#107;&#114;";break;case"SGD":t="&#36;";break;case"THB":t="&#3647;";break;case"TRY":t="&#8378;";break;case"TWD":t="&#36;";break;case"ZAR":t="&#82;"}return t}(u.currency),txt:f.currency[u.currency.toUpperCase()]},price:{current:t,btc:Number(e.price_btc),last:{hour:C(t,Number(e.percent_change_1h)),day:C(t,Number(e.percent_change_24h)),week:C(t,Number(e.percent_change_7d))}},delta:{hour:Number(e.percent_change_1h),day:Number(e.percent_change_24h),week:Number(e.percent_change_7d)},supply:{total:{number:Number(e.total_supply),txt:N(Number(e.total_supply))},available:{number:Number(e.available_supply),txt:N(Number(e.available_supply))}},market:{volume:{number:w(e,"24h_volume"),txt:N(w(e,"24h_volume"))},cap:{number:w(e,"market_cap"),txt:N(w(e,"market_cap"))}},update:{unix:Number(e.last_updated),iso:function(e){var t=(r=new Date(1e3*e),{year:r.getFullYear(),month:f.months[r.getMonth()],day:r.getDate(),hour:r.getHours(),min:r.getMinutes(),sec:r.getSeconds()});var r;for(var a in t)"year"!==a&&"month"!==a&&(t[a]=U(t[a]));return t.day+" "+t.month+" "+t.year+" "+t.hour+":"+t.min+":"+t.sec}(e.last_updated),txt:R(e.last_updated),ago:{minutes:R(e.last_updated,"minutes"),seconds:R(e.last_updated,"seconds")}}}}function C(e,t){var r,a=100*Number(e)/(Number(t)+100);if(2<String(a).split(".").length){var n=String(e).split(".")[1].length;r=String(a).split(".")[0]+"."+String(a).split(".")[1].substr(0,n)}else r=a;return Number(r)}function w(e,t){return Number(e[t+"_"+u.currency.toLowerCase()])}function R(e,t){var r=Date.now()/1e3,a=Math.floor(r-e),n=Math.floor(a/60),i=a-60*Math.floor(a/60),c=function(){switch(u.lang.toUpperCase()){case"RU":return T(f.time.declension.minutes,n);case"EN":return H(f.time.declension.minutes,n)}}(),s=function(){switch(u.lang.toUpperCase()){case"RU":return T(f.time.declension.seconds,i);case"EN":return H(f.time.declension.seconds,i)}}(),o=f.time.update;return"minutes"===t?n:"seconds"===t?i:1<a/60?o[0]+" "+n+" "+c+" "+o[1]+" "+i+" "+s+" "+o[2]:o[0]+" "+a+" "+s+" "+o[2]}function U(e){return(e=Number(e))<10?"0"+e:e}function D(){(A=io.connect("https://coincap.io")).on("connect",function(){if(s.find("[data-live-item]").length){var r=function(){var e=[],t=s.data("crypto");for(var r in t)e.push(t[r].name);return e}();A.on("trades",function(e){var t=function(e,t){if(Array.isArray(t)){for(var r in t)if(e.msg.long===t[r])return e}else if(e.msg.long===t)return e}(e,r);t&&function(e){_(e,"price")&&I(e,"price");_(e,"delta")&&I(e,"delta")}(t.msg)})}})}function _(e,t){var r=K('[data-live-item="'+e.long+'"]',s);return!!r.length&&!!K('[data-live="'+t+'"]',r).length}function I(e,t){var r=K('[data-live-item="'+e.long+'"]',s),a=function(){switch(t.toLowerCase()){case"price":return"USD"!==u.currency?e.price*d:e.price;case"delta":return e.cap24hrChange}}(),n=K('[data-live="'+t+'"]',r);n.attr("data-live-value",a);var i=Number(n.data("live-value")),c=a-i;if(0!==c){switch(k("live",[n,a,i,c]),t){case"price":k("live:price",[n,a,i,c]);break;case"delta":k("live:delta",[n,a,i,c])}n.html(u.live[t].call(n.get(0),a,i,c))}}!0===u.cache?(!function(e){var t=localStorage.getItem(e+"_setting");if(null===t)localStorage.setItem(e+"_setting",JSON.stringify(i(u)));else{var r=JSON.parse(t),a=i(u);(function e(t,r){{if(t===r)return!0;if("object"==typeof t&&null!==t&&"object"==typeof r&&null!==r){if(Object.keys(t).length!==Object.keys(r).length)return[Object.keys(r).length];for(var a in t){if(!r.hasOwnProperty(a))return!1;if(!e(t[a],r[a]))return!1}return!0}return!1}})(r,a)||(localStorage.removeItem(e),localStorage.setItem(e+"_setting",JSON.stringify(a)))}}(g),0===O&&("object"==typeof u.crypto?setInterval(function(){s.getCrypto("refresh")},18e4):setInterval(function(){var n=!1;if("update"===c)var i=l;l=[],v().done(function(e){var t=JSON.parse(localStorage.getItem(g));for(var r in e)if(Number(t[r].last_updated)<Number(e[r].last_updated)){n=!0;break}if(!0===n){"update"===c&&k("update",[i,l,h(i,l)]),s.data("crypto",l),o=s.data("crypto"),s.empty();var a=Date.now();for(var r in u.start(s),o)m(o[r],Number(r));u.end(o,s),k("rendered",[o,y(a)]),localStorage.setItem(g,JSON.stringify(e)),n=!1}})},18e4),O++)):null!==localStorage.getItem(g)&&(localStorage.removeItem(g),localStorage.removeItem(g+"_setting")),function e(t){t||(t=0);if(!0===u.cache)if(null===localStorage.getItem(g)){if("update"===c)var n=s.data("crypto");l=[],v(t).done(function(e){"update"===c&&k("update",[n,l,h(n,l)]),s.data("crypto",l),o=s.data("crypto"),s.empty();var t=Date.now();for(var r in u.start.call(s.get(0)),o)m(o[r],Number(r));u.end.call(s.get(0),o),k("rendered",[o,y(t)]);var a=JSON.parse(localStorage.getItem(g));localStorage.getItem(g)?(a.push(e[0]),localStorage.setItem(g,JSON.stringify(a))):localStorage.setItem(g,JSON.stringify(e))}),"object"==typeof u.crypto&&t<u.crypto.length-1&&e(t+1)}else{var r=JSON.parse(localStorage.getItem(g));for(var a in k("loaded",[r,{type:"cache",time:y(p)}]),r)l.push(S(r[a]));s.data("crypto",l),o=s.data("crypto"),s.empty();var i=Date.now();for(var t in u.start.call(s.get(0)),o)m(o[t],Number(t));u.end.call(s.get(0),o),k("rendered",[o,y(i)])}else{if("update"===c)var n=s.data("crypto");l=[],v(t).done(function(e){"update"===c&&k("update",[n,l,h(n,l)]),s.data("crypto",l),o=s.data("crypto"),s.empty();var t=Date.now();for(var r in u.start.call(s.get(0)),o)m(o[r],Number(r));u.end.call(s.get(0),o),k("rendered",[o,y(t)])}),"object"==typeof u.crypto&&t<u.crypto.length-1&&e(t+1)}}(),!0===u.socket&&("USD"!==u.currency?K.ajax({url:"https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms="+u.currency.toUpperCase(),method:"GET",dataType:"json"}).done(function(e){d=e[u.currency.toUpperCase()],D()}).fail(function(e){console.error("getCrypto.js: произошла ошибка при запросе курсов валют для socket",e)}):D()),Object.keys||(Object.keys=function(e){if(e===Object(e)){var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}})},set:function(e,t,r){var a=K(this).data("setting");if(null!==e&&"object"==typeof e)for(var n in e)a[n]=e[n];else{if(e.includes("."))return s("set",a,e,t);a[e]=t}if(K(this).data("setting",a),!0===a.cache&&!1!==r){var i=K(this).prop("attributes")[0].cache_id;localStorage.removeItem(i),!0===a.socket&&A.disconnect()}c.init(K(this),a,"update")},get:function(e){var t=K(this).data("setting");return e.includes(".")?s("get",t,e):Object.getOwnPropertyDescriptor(t,e).value},destroy:function(){var t=K(this).data("setting");K(this).fadeOut(200,function(){if(K(this).off(".getCrypto"),K(this).empty().show(),!0===t.cache){var e=K(this).prop("attributes")[0].cache_id;localStorage.removeItem(e)}!0===t.socket&&A.disconnect()})},data:function(e){var t=K(this).data();return e?e.includes(".")?s("get",t,e):t[e]:t},refresh:function(e,t){if(!0===(e=K.extend(!0,K(this).data("setting"),e)).cache&&!1!==t){var r=K(this).prop("attributes")[0].cache_id;localStorage.removeItem(r)}c.init(K(this),e,"update")}};function L(){var e=K("html").attr("lang");if(e)switch(e.toUpperCase()){case"UK-RU":case"RU-RU":case"RU-UA":case"RU":return"RU";case"EN-US":case"EN":return"EN"}}function E(t,e){return!!function(){if(t)switch(t.toLowerCase()){case"latin":return/[a-zA-Z]/g;case"cirilic":return/[а-яА-Я]/g}else{var e=L();if(e)return e}}().test(e)}function r(e,t){if(!isNaN(Number(e))){e=Number(e);var r,a=K.extend(!0,[" ","."],t),n=new RegExp(/\./g),i=new RegExp(/(\d)(?=(\d\d\d)+([^\d]|$))/g);if(0===e[0])r=String(e).replace(n,a[1]);else if(1==String(e).split(".").length)r=String(e).split(".")[0].replace(i,"$1"+a[0]);else{var c=String(e).split(".")[0].replace(i,"$1"+a[0]),s=String(e).split(".")[1].replace(n,a[1]);r=c+a[1]+s}return r}}function a(e,t){if(!isNaN(Number(e))){if(1<(e=String(e)).split(".").length){var r=e.split(".")[0],a=e.split(".")[1].substr(0,t||4);return Number(r+(0!==t?"."+a:""))}return Number(e)}}function T(e,t){var r=t%100;return e[r=11<=r&&r<=14?0:(r%=10)<5?2<r?2:r:0]}function H(e,t){return e[1!==t?1:0]}function s(e,t,r,a){for(var n=[],i=0;i<r.split(".").length;i++)n.push(r.split(".")[i]);switch(n.length){case 2:if("get"===e)return t[n[0]][n[1]];"set"===e&&(t[n[0]][n[1]]=a);break;case 3:if("get"===e)return t[n[0]][n[1]][n[2]];"set"===e&&(t[n[0]][n[1]][n[2]]=a);break;case 4:if("get"===e)return t[n[0]][n[1]][n[2]][n[3]];"set"===e&&(t[n[0]][n[1]][n[2]][n[3]]=a)}}function n(e,t){switch(e.split(":")[1].toLowerCase()){case"init":return' data-live-item="'+t.name+'" ';case"price":return' data-live="price" ';case"delta":return' data-live="delta" '}}K.extend({getCrypto:function(e,t){if(e)switch(e.toLowerCase()){case"fixed":return a(t[0],t[1]);case"format":return r(t[0],t[1]);case"fixedformat":case"formatfixed":return r(a(t[0],t[1]),t[2]);case"trand":return function(e,t){e=String(e),t||(t=["up","down","null"]);return"-"===e[0]?t[1]:"0"!==e?t[0]:t[2]}(t[0],t[1]);case"removesymbol":return function(e){"-"===(e=String(e))[0]&&(e=e.slice(1));return e}(t[0]);case"addsymbol":return function(e){"-"!==(e=String(e))[0]&&"0"!==e&&(e="+"+e);return e}(t[0]);case"declen":return function(e,t,r){r||(a=e.join(","),r=E("latin",a)?"EN":E("cirilic",a)?"RU":void 0);var a;switch(r.toUpperCase()){case"RU":return T(e,t);case"EN":return H(e,t)}}(t[0],t[1],t[2]);case"live:init":return n(e,t[0]);case"live:price":case"live:delta":return n(e);case"live:counter":return function(e,t,r,a){a||(a=500);K({Counter:e}).animate({Counter:t},{duration:a,easing:"swing",step:function(){r(this.Counter)}})}(t[0],t[1],t[2],t[3])}}}),K.fn.getCrypto=function(e,t,r,a){if("object"==typeof e||!e)return K.each(this,function(){c.init(K(this),e,"init",x)});if("string"==typeof e)switch(e.toLowerCase()){case"set":return c.set.call(this.get(0),t,r,a);case"get":return c.get.call(this.get(0),t);case"destroy":return c.destroy.call(this.get(0));case"data":return c.data.call(this.get(0),t);case"refresh":return c.refresh.call(this.get(0),t,r)}}}(jQuery,window);