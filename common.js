(function () {
  function base() {
    return String(window.API_BASE || "").replace(/\/$/, "");
  }
  function token() {
    return localStorage.getItem("token") || "";
  }
  window.setToken = function (value) {
    localStorage.setItem("token", value);
  };
  window.clearToken = function () {
    localStorage.removeItem("token");
  };
  window.requireLogin = function () {
    if (!token()) location.replace("index.html?stay=1");
  };
  var langFallback = { code: "zh-CN", name: "简体中文", symbol: "¥", rate: "1", is_default: "1" };
  window.LANG = langFallback;
  var siteWaiters = [];
  var siteReady = false;
  window.whenSite = function (fn) {
    if (siteReady) fn(window.SITE || {});
    else siteWaiters.push(fn);
  };
  function flushSite() {
    siteReady = true;
    var list = siteWaiters.slice();
    siteWaiters = [];
    list.forEach(function (fn) { fn(window.SITE || {}); });
  }
  function pickedCode() {
    try {
      if (localStorage.getItem("member-lang-picked") !== "1") return "";
      return localStorage.getItem("member-lang") || "";
    } catch (err) {
      return "";
    }
  }
  function rememberLang(code) {
    localStorage.setItem("member-lang", code || "");
    localStorage.setItem("member-lang-picked", "1");
  }
  function applyMemberLang(d) {
    var rows = (d && d.langs) || [];
    if (!rows.length) rows = [langFallback];
    var saved = pickedCode();
    var current = null;
    rows.forEach(function (row) {
      if (!current && saved && row.code === saved) current = row;
    });
    if (!current) {
      rows.forEach(function (row) {
        if (!current && row.is_default === "1") current = row;
      });
    }
    window.LANG = current || rows[0];
    if (window.LANG.code) document.documentElement.lang = window.LANG.code;
    document.documentElement.dir = window.LANG.code === "ar" ? "rtl" : "ltr";
    var header = document.querySelector("header");
    if (!header || document.getElementById("lang-switch")) return;
    var sel = document.createElement("select");
    sel.id = "lang-switch";
    sel.setAttribute("aria-label", "语言");
    sel.style.cssText = "height:28px;margin:0 0 0 8px;padding:0 8px;border-radius:6px;border:1px solid #3d5340;background:#1c261c;color:#fff;";
    rows.forEach(function (row) {
      var opt = document.createElement("option");
      opt.value = row.code;
      opt.textContent = row.name + (row.symbol ? " " + row.symbol : "");
      if (row.code === window.LANG.code) opt.selected = true;
      sel.appendChild(opt);
    });
    sel.onchange = function () {
      rememberLang(sel.value);
      location.reload();
    };
    header.appendChild(sel);
  }
  var zhUi = {
    nav_home: "首页", nav_deposit: "存款", nav_service: "客服", nav_atm: "提现", nav_mine: "我的",
    notice: "公告", recommend: "收益推荐", can_yield: "可收益", empty_product: "暂无产品", other: "其他",
    lang_title: "语言设置", mine_account: "会员账号", mine_id: "会员ID", mine_level: "会员等级",
    asset: "总资产", score: "信誉分", income: "收益明细", deposits: "存款记录", cash: "取款记录",
    card: "绑定地址", logs: "资金流水", mail: "站内信", news: "资讯", setup: "系统设置",
    kyc: "实名认证", app: "下载APP", logout: "退出登录",
    unit_minute: "分钟", unit_hour: "小时", unit_day: "天",
    balance: "总余额", sum: "总金额", out_amt: "可转出金额", gain: "当前收益", rate_now: "当前利率：",
    min_in: "最低转入金额", max_in: "最高转入金额", transfer_in: "转入", transfer_out: "转出",
    in_amt: "转入金额", cancel: "取消", ok: "确定", out_ask: "确定转出？", product: "产品",
    balance_note: "总余额为本金与当前收益合计", enter_amt: "请输入转入金额", next: "下一条", got: "知道了"
  };
  function ownPack() {
    var ui = window.LANG && window.LANG.pack && window.LANG.pack.ui;
    if (!ui || typeof ui !== "object" || !window.LANG || window.LANG.code === "zh-CN") return false;
    var key;
    for (key in ui) {
      if (Object.prototype.hasOwnProperty.call(ui, key)) return true;
    }
    return false;
  }
  window.t = function (key) {
    var ui = window.LANG && window.LANG.pack && window.LANG.pack.ui;
    if (ui && typeof ui === "object" && ui[key]) return String(ui[key]);
    if (ownPack()) return "";
    return zhUi[key] || "";
  };
  window.termText = function (row) {
    if (!row) return "";
    var n = row.term_days == null ? "" : String(row.term_days);
    var unit = String(row.term_unit || "");
    var key = unit === "minute" ? "unit_minute" : unit === "hour" ? "unit_hour" : "unit_day";
    var label = n !== "" && unit ? window.t(key) : "";
    return label ? n + label : (row.term_text || "");
  };
  function setLinkText(link, text) {
    if (!link || !text) return;
    var hit = false;
    Array.prototype.forEach.call(link.childNodes, function (node) {
      if (node.nodeType === 3 && node.textContent.trim()) {
        node.textContent = text;
        hit = true;
      }
    });
    if (!hit) link.appendChild(document.createTextNode(text));
  }
  function applyChrome() {
    var tabs = ["nav_home", "nav_deposit", "nav_service", "nav_atm", "nav_mine"];
    Array.prototype.forEach.call(document.querySelectorAll(".mh-tab"), function (nav) {
      var links = nav.querySelectorAll("a");
      tabs.forEach(function (key, index) {
        setLinkText(links[index], window.t(key));
      });
    });
    var menu = {
      mine_income: "income", mine_deposit: "deposits", mine_cash: "cash", mine_card: "card",
      mine_logs: "logs", mine_mail: "mail", mine_news: "news", mine_setup: "setup",
      mine_kyc: "kyc", mine_app: "app", mine_lang: "lang_title"
    };
    Object.keys(menu).forEach(function (name) {
      setLinkText(document.querySelector("[data-mine='" + name + "']"), window.t(menu[name]));
    });
    setLinkText(document.querySelector("[data-logout]"), window.t("logout"));
  }
  function packText(key, fallback) {
    var pack = window.LANG && window.LANG.pack;
    if (window.LANG && window.LANG.code !== "zh-CN" && pack && pack[key]) return pack[key];
    return fallback || "";
  }
  window.langName = function (kind, id, fallback) {
    var items = (window.LANG && window.LANG.items) || {};
    var hit = items[kind + ":" + id];
    if (hit == null || hit === "") return ownPack() ? "" : (fallback == null ? "" : String(fallback));
    if (typeof hit === "string") return hit;
    return hit.name || (fallback == null ? "" : String(fallback));
  };
  window.langIntro = function (kind, id, fallback) {
    var items = (window.LANG && window.LANG.items) || {};
    var hit = items[kind + ":" + id];
    if (!hit || typeof hit === "string") return ownPack() ? "" : (fallback == null ? "" : String(fallback));
    return hit.intro || (ownPack() ? "" : (fallback == null ? "" : String(fallback)));
  };
  window.money = function (amount) {
    var raw = String(amount == null ? "" : amount).trim();
    var symbol = (window.LANG && window.LANG.symbol) || "";
    if (raw === "") return symbol + "--";
    var neg = raw.charAt(0) === "-";
    var n = Number(neg ? raw.slice(1) : raw);
    if (!isFinite(n)) return symbol + raw;
    var rate = Number(window.LANG && window.LANG.rate);
    if (!isFinite(rate) || rate <= 0) rate = 1;
    var shown = Math.round(n * rate * 100) / 100;
    return (neg ? "-" : "") + symbol + shown.toFixed(2);
  };
  window.toBase = function (input) {
    var raw = String(input == null ? "" : input).trim();
    var n = Number(raw);
    if (!isFinite(n)) return raw;
    var rate = Number(window.LANG && window.LANG.rate);
    if (!isFinite(rate) || rate <= 0) rate = 1;
    var neg = n < 0;
    var base = Math.round((Math.abs(n) / rate) * 100) / 100;
    return (neg ? "-" : "") + base.toFixed(2);
  };
  window.fileUrl = function (path) {
    var raw = String(path || "");
    if (!raw || raw.indexOf("data:") === 0) return raw;
    var found = raw.match(/^https?:\/\/[^/]+(\/uploads\/\S+)$/i);
    var rel = found ? found[1] : raw;
    if (rel.charAt(0) !== "/") return "";
    return base() + rel;
  };
  window.applyFavicon = function (path) {
    var href = window.fileUrl(path);
    var node = document.querySelector('link[rel="icon"]');
    if (!href) {
      if (node && node.parentNode) node.parentNode.removeChild(node);
      return;
    }
    if (!node) {
      node = document.createElement("link");
      node.rel = "icon";
      document.head.appendChild(node);
    }
    node.type = /\.ico(\?|$)/i.test(href) ? "image/x-icon" : "image/png";
    node.href = href;
  };
  function minutesNow(tz) {
    var opt = { hour: "2-digit", minute: "2-digit", hour12: false };
    if (tz) opt.timeZone = tz;
    var parts = {};
    try {
      new Intl.DateTimeFormat("en-GB", opt).formatToParts(new Date()).forEach(function (part) { parts[part.type] = part.value; });
    } catch (err) {
      delete opt.timeZone;
      new Intl.DateTimeFormat("en-GB", opt).formatToParts(new Date()).forEach(function (part) { parts[part.type] = part.value; });
    }
    var hour = parts.hour === "24" ? 0 : Number(parts.hour);
    return hour * 60 + Number(parts.minute || 0);
  }
  function onDuty(d) {
    var begin = d.service_begin || "";
    var end = d.service_end || "";
    if (!begin && !end) return true;
    var start = Number(begin.slice(0, 2)) * 60 + Number(begin.slice(3));
    var stop = Number(end.slice(0, 2)) * 60 + Number(end.slice(3));
    if (start === stop) return true;
    var now = minutesNow(d.site_tz || "");
    if (start < stop) return now >= start && now < stop;
    return now >= start || now < stop;
  }
  function offTip(d) {
    var pack = window.LANG && window.LANG.pack;
    if (window.LANG && window.LANG.code !== "zh-CN" && pack && pack.service_off_tip) return pack.service_off_tip;
    return (d && d.service_off_tip) || "客服已下班";
  }
  function showDuty(text) {
    var node = document.getElementById("duty-note");
    if (!node) {
      node = document.createElement("p");
      node.id = "duty-note";
      node.className = "msg";
      var main = document.querySelector("main") || document.body;
      main.insertBefore(node, main.firstChild);
    }
    node.textContent = text;
  }
  function serviceUrl(d, n, done) {
    if (!onDuty(d)) {
      showDuty(offTip(d));
      return;
    }
    var url = n === 2 ? d.service_url2 : d.service_url;
    if (!url) {
      showDuty("还没有客服链接");
      return;
    }
    if (token()) {
      window.api("/api/app/service-link?n=" + (n === 2 ? 2 : 1)).then(function (res) {
        var go = res && res.data && res.data.url;
        if (go) done(go);
        else showDuty((res && res.msg) || "还没有客服链接");
      });
      return;
    }
    done(url);
  }
  function openMemberService(d, n) {
    serviceUrl(d, n, function (url) { window.open(url, "_blank", "noopener"); });
  }
  window.jumpMemberService = function (n) {
    if (!window.SITE) return;
    serviceUrl(window.SITE, n || 1, function (url) { location.href = url; });
  };
  window.openMemberService = function (n) {
    if (window.SITE) openMemberService(window.SITE, n || 1);
  };
  window.api = function (path, body, extra) {
    var headers = { Accept: "application/json" };
    var current = token();
    if (current) headers.Authorization = "Bearer " + current;
    if (extra && extra.idem) headers["Idempotency-Key"] = extra.idem;
    var opt = { method: body ? "POST" : "GET", headers: headers };
    if (body) {
      headers["Content-Type"] = "application/json";
      opt.body = JSON.stringify(body);
    }
    return fetch(base() + path, opt).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data && data.code === 401 && location.pathname.indexOf("index.html") === -1) {
        clearToken();
        location.replace("index.html?stay=1");
      }
      return data;
    }).catch(function () {
      return { code: 1, msg: "网络异常" };
    });
  };
  window.readForm = function (form) {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (el.name) data[el.name] = el.value;
    });
    return data;
  };
  window.showMsg = function (id, res) {
    var node = document.getElementById(id);
    if (node) node.textContent = (res && res.msg) || "请求失败";
  };
  window.cell = function (text) {
    var td = document.createElement("td");
    td.textContent = text == null ? "" : String(text);
    return td;
  };
  document.addEventListener("click", function (event) {
    var node = event.target;
    while (node && node !== document) {
      if (node.getAttribute && node.getAttribute("data-logout") != null) {
        event.preventDefault();
        clearToken();
        location.href = "index.html?stay=1";
        return;
      }
      node = node.parentNode;
    }
  });
  var root = String(window.API_BASE || "").replace(/\/$/, "");
  if (root) {
    fetch(root + "/api/site", { headers: { Accept: "application/json" } }).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (!res || res.code) {
        applyMemberLang(null);
        flushSite();
        return;
      }
      var d = res.data || {};
      var strong = document.querySelector("header strong");
      if (strong) {
        strong.className = "brand";
        strong.textContent = "";
        if (d.logo_front) {
          var logo = document.createElement("img");
          logo.src = window.fileUrl(d.logo_front);
          logo.alt = "";
          strong.appendChild(logo);
        }
        strong.appendChild(document.createTextNode(""));
        strong.dataset.brand = "1";
      }
      var header = document.querySelector("header");
      if (header && d.avatar) {
        var face = document.createElement("img");
        face.className = "avatar";
        face.src = window.fileUrl(d.avatar);
        face.alt = "";
        header.insertBefore(face, header.firstChild);
      }
      if (header && d.app_download && /^https?:\/\//i.test(d.app_download)) {
        var link = document.createElement("a");
        link.href = d.app_download;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "下载APP";
        header.appendChild(link);
      }
      if (header && d.service_phone) {
        var phone = document.createElement("a");
        phone.href = "tel:" + d.service_phone;
        phone.textContent = "客服电话";
        header.appendChild(phone);
      }
      function addService(text, url, n) {
        if (!header || !url) return;
        var a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = text;
        a.onclick = function (event) {
          event.preventDefault();
          openMemberService(d, n);
        };
        header.appendChild(a);
      }
      addService("客服", d.service_url, 1);
      addService("客服2", d.service_url2, 2);
      applyMemberLang(d);
      applyChrome();
      var brandName = packText("site_name", d.site_name) || d.site_name || "会员";
      if (strong) {
        var brandNode = strong.lastChild;
        if (brandNode && brandNode.nodeType === 3) brandNode.textContent = brandName;
      }
      var keywords = packText("site_keywords", d.site_keywords);
      if (keywords) {
        var key = document.querySelector('meta[name="keywords"]');
        if (!key) {
          key = document.createElement("meta");
          key.name = "keywords";
          document.head.appendChild(key);
        }
        key.content = keywords;
      }
      var description = packText("site_desc", d.site_desc);
      if (description) {
        var desc = document.querySelector('meta[name="description"]');
        if (!desc) {
          desc = document.createElement("meta");
          desc.name = "description";
          document.head.appendChild(desc);
        }
        desc.content = description;
      }
      var mark = document.querySelector(".gate-card .mark");
      if (mark) {
        if (d.logo_front) {
          var cardLogo = document.createElement("img");
          cardLogo.className = "logo";
          cardLogo.src = window.fileUrl(d.logo_front);
          cardLogo.alt = "";
          mark.parentNode.insertBefore(cardLogo, mark);
        }
        var shownName = packText("site_name", d.site_name) || d.site_name;
        if (shownName) mark.textContent = shownName;
      }
      var siteTitle = packText("site_title", d.site_title);
      if (siteTitle) document.title = document.title + " · " + siteTitle;
      if (window.applyFavicon) window.applyFavicon(d.favicon || "");
      window.SITE = d;
      if (window.onSite) window.onSite(d);
      flushSite();
    }).catch(function () {
      applyMemberLang(null);
      flushSite();
    });
  } else {
    applyMemberLang(null);
    flushSite();
  }
  Array.prototype.forEach.call(document.querySelectorAll("img[data-file]"), function (img) {
    var next = window.fileUrl(img.getAttribute("data-file"));
    if (next) img.src = next;
  });
  function fitSelect(sel) {
    if (!sel || sel.getAttribute("data-fit") === "1") return;
    sel.setAttribute("data-fit", "1");
    var wrap = document.createElement("div");
    wrap.className = "fit-select";
    sel.parentNode.insertBefore(wrap, sel);
    wrap.appendChild(sel);
    sel.classList.add("fit-native");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fit-select-btn";
    btn.setAttribute("aria-haspopup", "listbox");
    var menu = document.createElement("div");
    menu.className = "fit-select-menu";
    menu.hidden = true;
    wrap.appendChild(btn);
    wrap.appendChild(menu);
    function iconOf(opt, parent) {
      var path = opt && opt.getAttribute("data-icon");
      if (!path || !window.fileUrl) return;
      var img = document.createElement("img");
      img.src = window.fileUrl(path);
      img.alt = "";
      parent.appendChild(img);
    }
    function label() {
      var opt = sel.options[sel.selectedIndex];
      btn.textContent = "";
      iconOf(opt, btn);
      var name = document.createElement("span");
      name.textContent = opt ? opt.textContent : "";
      btn.appendChild(name);
      btn.classList.toggle("empty", !sel.value);
      btn.disabled = !!sel.disabled;
    }
    function fill() {
      menu.textContent = "";
      for (var i = 0; i < sel.options.length; i++) {
        var opt = sel.options[i];
        var item = document.createElement("button");
        item.type = "button";
        item.className = "fit-select-item";
        if (opt.value === sel.value) item.classList.add("on");
        iconOf(opt, item);
        var name = document.createElement("span");
        name.textContent = opt.textContent;
        item.appendChild(name);
        item.onclick = (function (value) {
          return function () {
            sel.value = value;
            sel.dispatchEvent(new Event("change"));
            close();
            label();
          };
        })(opt.value);
        menu.appendChild(item);
      }
    }
    function place() {
      var col = wrap.closest("main") || document.body;
      var cr = col.getBoundingClientRect();
      var br = btn.getBoundingClientRect();
      if (sel.getAttribute("data-compact") === "1") {
        var w = 168;
        var edge = Math.min(window.innerWidth - 8, br.right);
        menu.style.width = w + "px";
        menu.style.left = Math.max(8, edge - w) + "px";
      } else {
        var left = Math.max(8, cr.left + 12);
        var right = Math.min(window.innerWidth - 8, cr.right - 12);
        menu.style.left = left + "px";
        menu.style.width = Math.max(120, right - left) + "px";
      }
      var tab = document.querySelector(".mh-tab");
      var floor = tab ? tab.getBoundingClientRect().top - 8 : window.innerHeight - 8;
      var below = floor - br.bottom - 4;
      var above = br.top - 8;
      if (below >= 120 || below >= above) {
        menu.style.top = (br.bottom + 4) + "px";
        menu.style.maxHeight = Math.max(72, Math.min(240, below)) + "px";
      } else {
        var h = Math.max(72, Math.min(240, above));
        menu.style.maxHeight = h + "px";
        menu.style.top = Math.max(8, br.top - 4 - h) + "px";
      }
    }
    function close() { menu.hidden = true; }
    function open() {
      var menus = document.querySelectorAll(".fit-select-menu");
      for (var i = 0; i < menus.length; i++) if (menus[i] !== menu) menus[i].hidden = true;
      fill();
      menu.hidden = false;
      place();
    }
    btn.addEventListener("click", function (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (menu.hidden) open();
      else close();
    });
    document.addEventListener("click", function (ev) {
      if (!wrap.contains(ev.target)) close();
    });
    window.addEventListener("resize", function () { if (!menu.hidden) place(); });
    window.addEventListener("scroll", function (ev) {
      if (menu.hidden) return;
      if (ev.target && menu.contains(ev.target)) return;
      close();
    }, true);
    new MutationObserver(function () { if (!menu.hidden) fill(); label(); }).observe(sel, { childList: true });
    sel.addEventListener("change", label);
    label();
  }
  function fitAll(root) {
    var list = (root || document).querySelectorAll("select");
    for (var i = 0; i < list.length; i++) fitSelect(list[i]);
  }
  fitAll(document);
  new MutationObserver(function (records) {
    records.forEach(function (rec) {
      for (var i = 0; i < rec.addedNodes.length; i++) {
        var node = rec.addedNodes[i];
        if (!node || node.nodeType !== 1) continue;
        if (node.tagName === "SELECT") fitSelect(node);
        else if (node.querySelectorAll) fitAll(node);
      }
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
  Array.prototype.forEach.call(document.querySelectorAll("[data-cs]"), function (node) {
    node.addEventListener("click", function (event) {
      event.preventDefault();
      function go() {
        if (window.jumpMemberService) window.jumpMemberService(1);
      }
      if (window.SITE) go();
      else if (window.whenSite) window.whenSite(function () { go(); });
    });
  });
})();
