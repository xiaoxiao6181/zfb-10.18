(function () {
  var owners = "Ant Group, Hangzhou Jintou Digital Technology Group, Cathay United Bank, Zhejiang Sunny Optical Technology, Transfar Zhilian, Jiangsu Yuyue Medical Equipment, Cathay United Bank (China), CATL, Guangzhou Boguan Information Technology, Beijing Qianfang Technology, China Huarong Asset Management, and Chongqing Rural Credit Investment Group";
  var LAND = {
    "zh-CN": {
      brand: "蚂蚁财富", open: "开户", login: "登录", service: "客服",
      about: "公司简介", products: "产品一览", huabei: "花呗", jiebei: "借呗",
      ant: "蚂蚁金服", yuebao: "余额宝", yulibao: "余利宝",
      borrow: "随借随还", fast: "快速到账", daily: "按日计息", contact: "联系我们",
      p1: "蚂蚁消费金融有限公司（简称「蚂蚁金融」）是经中国银保监会批准、持有消费金融牌照的金融机构。",
      p2: "蚂蚁金融于2021年6月4日成立并开业，注册资本185亿元，股东包括蚂蚁科技集团股份有限公司、杭州金投数字科技集团有限公司、国泰商业银行有限公司、浙江舜宇光学科技股份有限公司、传化智联股份有限公司、江苏鱼跃医疗设备股份有限公司、国泰世华银行（中国）有限公司、宁德时代新能源科技股份有限公司、广州博冠信息科技有限公司、北京千方科技股份有限公司、中国华融资产管理股份有限公司、重庆市农信投资集团有限公司。",
      hotline: "客服（投诉）热线：95188-2（工作时间：00:00-24:00）",
      address: "联系地址：浙江省杭州市滨江区网商路699号",
      police: "公安备案 50010802004448号",
      icp: "ICP备2021007881号-1",
      copy: "Copyright © 2020-至今蚂蚁金融"
    },
    "zh-TW": {
      brand: "螞蟻財富", open: "開戶", login: "登入", service: "客服",
      about: "公司簡介", products: "產品一覽", huabei: "花唄", jiebei: "借唄",
      ant: "螞蟻金服", yuebao: "餘額寶", yulibao: "餘利寶",
      borrow: "隨借隨還", fast: "快速到賬", daily: "按日計息", contact: "聯絡我們",
      p1: "螞蟻消費金融有限公司（簡稱「螞蟻金融」）是經中國銀保監會批准、持有消費金融牌照的金融機構。",
      p2: "螞蟻金融於2021年6月4日成立並開業，註冊資本185億元，股東包括螞蟻科技集團股份有限公司、杭州金投數字科技集團有限公司、國泰商業銀行有限公司、浙江舜宇光學科技股份有限公司、傳化智聯股份有限公司、江蘇魚躍醫療設備股份有限公司、國泰世華銀行（中國）有限公司、寧德時代新能源科技股份有限公司、廣州博冠信息科技有限公司、北京千方科技股份有限公司、中國華融資產管理股份有限公司、重慶市農信投資集團有限公司。",
      hotline: "客服（投訴）熱線：95188-2（工作時間：00:00-24:00）",
      address: "聯絡地址：浙江省杭州市濱江區網商路699號",
      police: "公安备案 50010802004448號",
      icp: "ICP備2021007881號-1",
      copy: "Copyright © 2020-至今螞蟻金融"
    },
    en: {
      brand: "Ant Fortune", open: "Open", login: "Log in", service: "Support",
      about: "About us", products: "Products", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "Borrow anytime", fast: "Fast arrival", daily: "Daily interest", contact: "Contact us",
      p1: "Ant Consumer Finance Co., Ltd. (Ant Finance) is a financial institution approved by the China Banking and Insurance Regulatory Commission and licensed for consumer finance.",
      p2: "Ant Finance was founded and opened on 4 June 2021, with registered capital of 18.5 billion yuan. Shareholders include " + owners + ".",
      hotline: "Support and complaints: 95188-2 (hours 00:00-24:00)",
      address: "Address: 699 Wangshang Road, Binjiang District, Hangzhou, Zhejiang",
      police: "Public security record 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020–present Ant Finance"
    },
    ar: {
      brand: "ثروة النمل", open: "فتح حساب", login: "دخول", service: "الدعم",
      about: "عن الشركة", products: "المنتجات", huabei: "هوايباي", jiebei: "جيبي",
      ant: "مجموعة آنت", yuebao: "يو إي باو", yulibao: "يو لي باو",
      borrow: "اقترض وسدّد", fast: "وصول سريع", daily: "فائدة يومية", contact: "اتصل بنا",
      p1: "شركة آنت للتمويل الاستهلاكي المحدودة (آنت المالية) مؤسسة مالية مرخّصة من لجنة تنظيم البنوك والتأمين الصينية، وتحمل ترخيص التمويل الاستهلاكي.",
      p2: "تأسست آنت المالية وبدأت أعمالها في 4 يونيو 2021، برأس مال مسجّل قدره 18.5 مليار يوان. ويضم المساهمون مجموعة آنت، ومجموعة هانغتشو جينتو للتقنية الرقمية، وبنك كاثاي المتحد، وشركة تشجيانغ ساني للبصريات، وشركة ترانسفار تشيليان، وشركة جيانغسو يويوي للأجهزة الطبية، وبنك كاثاي المتحد (الصين)، وشركة كاتل، وشركة قوانغتشو بوقوان لتقنية المعلومات، وشركة بكين تشيانفانغ للتقنية، وشركة تشاينا هوارونغ لإدارة الأصول، ومجموعة تشونغتشينغ للاستثمار في الائتمان الريفي.",
      hotline: "خط الدعم والشكاوى: 95188-2 (ساعات العمل 00:00-24:00)",
      address: "العنوان: 699 طريق وانغشانغ، حي بينجيانغ، هانغتشو، تشجيانغ",
      police: "سجل الأمن العام 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "حقوق النشر © 2020 حتى الآن، آنت المالية"
    },
    vi: {
      brand: "Ant Fortune", open: "Mở tài khoản", login: "Đăng nhập", service: "Hỗ trợ",
      about: "Giới thiệu", products: "Sản phẩm", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "Vay trả linh hoạt", fast: "Về nhanh", daily: "Lãi theo ngày", contact: "Liên hệ",
      p1: "Công ty TNHH Tài chính tiêu dùng Ant (gọi tắt là Ant Finance) là tổ chức tài chính được Ủy ban Giám sát ngân hàng và bảo hiểm Trung Quốc cấp phép, và nắm giấy phép tài chính tiêu dùng.",
      p2: "Ant Finance thành lập và khai trương ngày 4 tháng 6 năm 2021, vốn điều lệ 18,5 tỷ nhân dân tệ. Cổ đông gồm Tập đoàn Ant, Tập đoàn công nghệ số Hàng Châu Jintou, Ngân hàng Cathay United, Công ty quang học Chiết Giang Sunny, Công ty Transfar Zhilian, Công ty thiết bị y tế Giang Tô Yuyue, Ngân hàng Cathay United (Trung Quốc), CATL, Công ty công nghệ thông tin Quảng Châu Boguan, Công ty công nghệ Bắc Kinh Qianfang, Công ty quản lý tài sản China Huarong và Tập đoàn đầu tư tín dụng nông thôn Trùng Khánh.",
      hotline: "Đường dây hỗ trợ và khiếu nại: 95188-2 (giờ làm việc 00:00-24:00)",
      address: "Địa chỉ: số 699 đường Wangshang, khu Binjiang, Hàng Châu, Chiết Giang",
      police: "Hồ sơ công an 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Bản quyền © 2020 đến nay Ant Finance"
    },
    es: {
      brand: "Ant Fortune", open: "Abrir cuenta", login: "Entrar", service: "Soporte",
      about: "La empresa", products: "Productos", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "Pide y paga", fast: "Llega rápido", daily: "Interés diario", contact: "Contacto",
      p1: "Ant Consumer Finance Co., Ltd. (Ant Finance) es una entidad financiera aprobada por la Comisión de Regulación Bancaria y de Seguros de China, con licencia de crédito al consumo.",
      p2: "Ant Finance se constituyó y abrió el 4 de junio de 2021, con un capital social de 18.500 millones de yuanes. Los accionistas son " + owners + ".",
      hotline: "Atención y reclamaciones: 95188-2 (horario 00:00-24:00)",
      address: "Dirección: calle Wangshang 699, distrito Binjiang, Hangzhou, Zhejiang",
      police: "Registro de seguridad pública 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020-actualidad Ant Finance"
    },
    pt: {
      brand: "Ant Fortune", open: "Abrir conta", login: "Entrar", service: "Suporte",
      about: "A empresa", products: "Produtos", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "Peça e pague", fast: "Chega rápido", daily: "Juros diários", contact: "Contacto",
      p1: "A Ant Consumer Finance Co., Ltd. (Ant Finance) é uma instituição financeira aprovada pela Comissão de Regulação Bancária e de Seguros da China, com licença de crédito ao consumo.",
      p2: "A Ant Finance foi fundada e abriu em 4 de junho de 2021, com capital social de 18,5 mil milhões de yuan. Os acionistas incluem " + owners + ".",
      hotline: "Apoio e reclamações: 95188-2 (horário 00:00-24:00)",
      address: "Morada: Rua Wangshang 699, distrito de Binjiang, Hangzhou, Zhejiang",
      police: "Registo de segurança pública 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020-presente Ant Finance"
    },
    tr: {
      brand: "Ant Fortune", open: "Hesap aç", login: "Giriş", service: "Destek",
      about: "Şirket", products: "Ürünler", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "İstediğin an", fast: "Hızlı aktarım", daily: "Günlük faiz", contact: "İletişim",
      p1: "Ant Consumer Finance Co., Ltd. (Ant Finance), Çin Bankacılık ve Sigorta Düzenleme Komisyonu tarafından onaylanmış, tüketici finansmanı lisansına sahip bir finans kuruluşudur.",
      p2: "Ant Finance 4 Haziran 2021 tarihinde kurulup faaliyete geçti. Kayıtlı sermayesi 18,5 milyar yuan. Ortaklar: " + owners + ".",
      hotline: "Destek ve şikayet hattı: 95188-2 (saat 00:00-24:00)",
      address: "Adres: Wangshang Yolu 699, Binjiang, Hangzhou, Zhejiang",
      police: "Kamu güvenliği kaydı 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Telif hakkı © 2020-bugün Ant Finance"
    },
    th: {
      brand: "Ant Fortune", open: "เปิดบัญชี", login: "เข้าสู่ระบบ", service: "บริการ",
      about: "เกี่ยวกับเรา", products: "ผลิตภัณฑ์", huabei: "ฮวาเป่ย", jiebei: "เจี๋ยเป่ย",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "ยืมคืนได้ทันที", fast: "เงินเข้าเร็ว", daily: "ดอกเบี้ยรายวัน", contact: "ติดต่อเรา",
      p1: "บริษัท Ant Consumer Finance จำกัด (เรียกสั้น ๆ ว่า Ant Finance) เป็นสถาบันการเงินที่ได้รับอนุมัติจากคณะกรรมการกำกับธนาคารและประกันภัยของจีน และถือใบอนุญาตสินเชื่อผู้บริโภค",
      p2: "Ant Finance ก่อตั้งและเปิดดำเนินการเมื่อวันที่ 4 มิถุนายน 2021 มีทุนจดทะเบียน 1.85 หมื่นล้านหยวน ผู้ถือหุ้นประกอบด้วย " + owners + ".",
      hotline: "สายบริการและร้องเรียน: 95188-2 (เวลา 00:00-24:00)",
      address: "ที่อยู่: 699 ถนนหวังซาง เขตปินเจียง หางโจว เจ้อเจียง",
      police: "ทะเบียนความมั่นคง 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "ลิขสิทธิ์ © 2020-ปัจจุบัน Ant Finance"
    },
    ja: {
      brand: "アント・フォーチュン", open: "口座開設", login: "ログイン", service: "サポート",
      about: "会社紹介", products: "商品一覧", huabei: "花唄", jiebei: "借唄",
      ant: "アント", yuebao: "余額宝", yulibao: "余利宝",
      borrow: "随時借入", fast: "即時入金", daily: "日次利息", contact: "お問い合わせ",
      p1: "アント消費金融（略称アント金融）は、中国銀行保険監督管理委員会の認可を受け、消費者金融の免許を保有する金融機関です。",
      p2: "アント金融は2021年6月4日に設立・開業し、登録資本金は185億元です。株主にはアント・グループ、杭州金投デジタル科技集団、キャセイ・ユナイテッド銀行、浙江舜宇光学、伝化智聯、江蘇魚躍医療機器、キャセイ・ユナイテッド銀行（中国）、CATL、広州博冠信息科技、北京千方科技、中国華融資産管理、重慶市農信投資集団が含まれます。",
      hotline: "サポート（苦情）窓口：95188-2（受付 00:00-24:00）",
      address: "所在地：浙江省杭州市浜江区網商路699号",
      police: "公安届出 50010802004448号",
      icp: "ICP備2021007881号-1",
      copy: "Copyright © 2020-現在 アント金融"
    },
    ko: {
      brand: "앤트 포춘", open: "계좌 개설", login: "로그인", service: "고객센터",
      about: "회사 소개", products: "상품", huabei: "화베이", jiebei: "지에베이",
      ant: "앤트그룹", yuebao: "위어바오", yulibao: "위리바오",
      borrow: "수시 대출", fast: "빠른 입금", daily: "일 이자", contact: "문의",
      p1: "앤트 소비자금융 유한공사(약칭 앤트금융)는 중국 은행보험감독관리위원회의 승인을 받고 소비자금융 면허를 보유한 금융기관입니다.",
      p2: "앤트금융은 2021년 6월 4일에 설립되어 영업을 시작했으며 등록자본금은 185억 위안입니다. 주주에는 앤트그룹, 항저우 진터우 디지털기술그룹, 캐세이 유나이티드 은행, 저장 순위 광학, 촨화 즈롄, 장쑤 위웨 의료기기, 캐세이 유나이티드 은행(중국), CATL, 광저우 보관 정보기술, 베이징 첸팡 기술, 중국 화룽 자산관리, 충칭 농신투자그룹이 포함됩니다.",
      hotline: "고객(민원) 전화: 95188-2 (운영 00:00-24:00)",
      address: "주소: 저장성 항저우시 빈장구 왕상로 699",
      police: "공안 등록 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020-현재 앤트금융"
    },
    de: {
      brand: "Ant Fortune", open: "Konto", login: "Anmelden", service: "Service",
      about: "Unternehmen", products: "Produkte", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "Jederzeit", fast: "Schnelle Gutschrift", daily: "Tageszins", contact: "Kontakt",
      p1: "Ant Consumer Finance Co., Ltd. (Ant Finance) ist ein von der chinesischen Banken- und Versicherungsaufsicht zugelassenes Finanzinstitut mit Lizenz für Konsumentenkredite.",
      p2: "Ant Finance wurde am 4. Juni 2021 gegründet und eröffnet. Das Stammkapital beträgt 18,5 Milliarden Yuan. Zu den Gesellschaftern gehören " + owners + ".",
      hotline: "Service und Beschwerden: 95188-2 (Zeiten 00:00-24:00)",
      address: "Adresse: Wangshang-Straße 699, Bezirk Binjiang, Hangzhou, Zhejiang",
      police: "Sicherheitsregister 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020-heute Ant Finance"
    },
    it: {
      brand: "Ant Fortune", open: "Apri conto", login: "Accedi", service: "Assistenza",
      about: "L'azienda", products: "Prodotti", huabei: "Huabei", jiebei: "Jiebei",
      ant: "Ant Group", yuebao: "Yu'e Bao", yulibao: "Yu Li Bao",
      borrow: "Chiedi e rendi", fast: "Accredito rapido", daily: "Interesse giornaliero", contact: "Contatti",
      p1: "Ant Consumer Finance Co., Ltd. (Ant Finance) è un istituto finanziario autorizzato dalla Commissione di vigilanza bancaria e assicurativa cinese, con licenza per il credito al consumo.",
      p2: "Ant Finance è stata costituita e ha aperto il 4 giugno 2021, con capitale sociale di 18,5 miliardi di yuan. Gli azionisti includono " + owners + ".",
      hotline: "Assistenza e reclami: 95188-2 (orario 00:00-24:00)",
      address: "Indirizzo: via Wangshang 699, distretto Binjiang, Hangzhou, Zhejiang",
      police: "Registro di pubblica sicurezza 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020-oggi Ant Finance"
    },
    ru: {
      brand: "Ant Fortune", open: "Счёт", login: "Войти", service: "Поддержка",
      about: "О компании", products: "Продукты", huabei: "Хуабэй", jiebei: "Цзебэй",
      ant: "Ant Group", yuebao: "Юэбао", yulibao: "Юйлибао",
      borrow: "В любой момент", fast: "Быстрое зачисление", daily: "Процент в день", contact: "Контакты",
      p1: "Ant Consumer Finance Co., Ltd. («Ант Финанс») — финансовая организация, одобренная Комиссией по регулированию банковской и страховой деятельности Китая и имеющая лицензию на потребительское финансирование.",
      p2: "«Ант Финанс» учреждена и открылась 4 июня 2021 года. Уставный капитал — 18,5 млрд юаней. В число акционеров входят " + owners + ".",
      hotline: "Поддержка и жалобы: 95188-2 (часы 00:00-24:00)",
      address: "Адрес: ул. Ваншан, 699, район Биньцзян, Ханчжоу, Чжэцзян",
      police: "Реестр общественной безопасности 50010802004448",
      icp: "ICP 2021007881-1",
      copy: "Copyright © 2020 — н. в. Ant Finance"
    }
  };

  function textOf() {
    var code = window.LANG && window.LANG.code;
    if (!code || !LAND[code]) return null;
    return LAND[code];
  }

  function siteBrand() {
    var d = window.SITE || {};
    var name = d.site_name || "";
    var pack = window.LANG && window.LANG.pack;
    if (window.LANG && window.LANG.code !== "zh-CN" && pack && pack.site_name) return pack.site_name;
    return name;
  }

  function paint() {
    var text = textOf();
    var name = siteBrand();
    var nodes = document.querySelectorAll("[data-k]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-k");
      if (key === "brand") {
        nodes[i].textContent = name;
        continue;
      }
      nodes[i].textContent = text && text[key] ? text[key] : "";
    }
    if (name) document.title = name;
  }

  function reveal() {
    document.documentElement.classList.remove("ld-wait");
  }

  function fillFlag() {
    var img = document.getElementById("ld-lang-flag");
    var mark = document.getElementById("ld-lang-mark");
    var lang = window.LANG || {};
    var btn = document.getElementById("ld-lang");
    if (btn) btn.setAttribute("aria-label", lang.name || "");
    if (!img || !lang.icon || !window.fileUrl) return;
    img.alt = "";
    img.src = window.fileUrl(lang.icon);
    img.hidden = false;
    if (mark) mark.hidden = true;
  }

  function useLang(row) {
    if (!row || !row.code) return;
    localStorage.setItem("member-lang", row.code);
    localStorage.setItem("member-lang-picked", "1");
    window.LANG = row;
    document.documentElement.lang = row.code;
    document.documentElement.dir = row.code === "ar" ? "rtl" : "ltr";
    paint();
    fillFlag();
    var box = document.getElementById("ld-langs");
    if (!box) return;
    var items = box.querySelectorAll("button");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle("on", items[i].getAttribute("data-code") === row.code);
    }
    box.hidden = true;
  }

  function fillList(rows) {
    var box = document.getElementById("ld-langs");
    if (!box) return;
    box.innerHTML = "";
    var code = (window.LANG && window.LANG.code) || "";
    for (var i = 0; i < rows.length; i++) {
      (function (row) {
        var item = document.createElement("button");
        item.type = "button";
        item.setAttribute("data-code", row.code || "");
        if (row.code === code) item.className = "on";
        if (row.icon && window.fileUrl) {
          var img = document.createElement("img");
          img.src = window.fileUrl(row.icon);
          img.alt = "";
          item.appendChild(img);
        }
        var name = document.createElement("span");
        name.textContent = row.name || row.code || "";
        item.appendChild(name);
        item.onclick = function (e) {
          e.stopPropagation();
          useLang(row);
        };
        box.appendChild(item);
      })(rows[i]);
    }
  }

  var btn = document.getElementById("ld-lang");
  var box = document.getElementById("ld-langs");
  if (btn && box) {
    btn.onclick = function (e) {
      e.stopPropagation();
      box.hidden = !box.hidden;
    };
    document.addEventListener("click", function () { box.hidden = true; });
  }
  var saved = "";
  var picked = "";
  try {
    picked = localStorage.getItem("member-lang-picked") || "";
    if (picked === "1") saved = localStorage.getItem("member-lang") || "";
  } catch (e) { saved = ""; }
  if (saved && LAND[saved]) {
    window.LANG = { code: saved, name: "", symbol: "", rate: "1" };
    document.documentElement.lang = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    paint();
    reveal();
  }
  if (window.whenSite) {
    whenSite(function (d) {
      paint();
      fillFlag();
      fillList((d && d.langs) || []);
      reveal();
    });
  } else reveal();
})();
