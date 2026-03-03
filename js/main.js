// ============================================================================
// メインスクリプト (js/main.js)
// data.js の内容をHTMLに反映させるためのスクリプトです。
// 基本的にこのファイルを編集する必要はありません。
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 年の自動更新
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // サイトタイトルの反映
  const titleElements = [document.getElementById('site-title'), document.getElementById('footer-site-title')];
  titleElements.forEach(el => {
    if (el) el.textContent = siteData.siteInfo.title;
  });

  // ヒーロー説明文の反映
  const heroDesc = document.getElementById('hero-description');
  if (heroDesc) {
    heroDesc.textContent = siteData.siteInfo.heroDescription;
  }

  // フッターのお問い合わせ情報の反映
  const footerContact = document.getElementById('footer-contact');
  if (footerContact) {
    footerContact.innerHTML = `
      <li>${siteData.contact.postalCode}</li>
      <li>${siteData.contact.address}</li>
      <li>TEL: ${siteData.contact.phone}</li>
      <li>Email: ${siteData.contact.email}</li>
    `;
  }

  // ニュースの反映 (index.html)
  const newsContainer = document.getElementById('news-container');
  if (newsContainer && siteData.news) {
    let newsHTML = '';
    siteData.news.forEach(item => {
      newsHTML += `
        <a href="#" class="block group">
          <div class="rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition-colors hover:border-blue-200 hover:shadow-md">
            <div class="p-4 flex gap-4 items-center">
              <div class="w-24 h-24 rounded-lg bg-slate-200 flex-shrink-0 overflow-hidden">
                <img src="${item.image}" alt="News thumbnail" class="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerpolicy="no-referrer">
              </div>
              <div>
                <div class="text-sm text-slate-500 mb-1">${item.date}</div>
                <h3 class="font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  ${item.title}
                </h3>
              </div>
            </div>
          </div>
        </a>
      `;
    });
    newsContainer.innerHTML = newsHTML;
  }

  // 科目一覧の反映 (academics.html)
  const subjectsTable = document.getElementById('subjects-table-body');
  if (subjectsTable && siteData.subjects) {
    let subjectsHTML = '';
    siteData.subjects.forEach(item => {
      subjectsHTML += `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-3 px-4 text-slate-800 font-medium">${item.subject}</td>
          <td class="py-3 px-4 text-slate-600">${item.name}</td>
          <td class="py-3 px-4 text-slate-600">${item.grade}</td>
          <td class="py-3 px-4 text-slate-600">${item.format}</td>
        </tr>
      `;
    });
    subjectsTable.innerHTML = subjectsHTML;
  }

  // 連携校一覧の反映 (network.html)
  const regionsContainer = document.getElementById('regions-container');
  if (regionsContainer && siteData.network.regions) {
    let regionsHTML = '';
    siteData.network.regions.forEach((item, index) => {
      const isLast = index === siteData.network.regions.length - 1;
      const borderClass = isLast ? 'pb-2' : 'border-b border-slate-100 pb-2';
      regionsHTML += `
        <div class="flex justify-between items-center ${borderClass}">
          <span class="font-medium text-slate-800">${item.name}</span>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${item.count}</span>
        </div>
      `;
    });
    regionsContainer.innerHTML = regionsHTML;
  }

  const schoolsTable = document.getElementById('schools-table-body');
  if (schoolsTable && siteData.network.schools) {
    let schoolsHTML = '';
    siteData.network.schools.forEach(item => {
      schoolsHTML += `
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="py-4 px-6 font-medium text-slate-900">${item.name}</td>
          <td class="py-4 px-6 text-slate-600">${item.location}</td>
          <td class="py-4 px-6 text-slate-600">${item.subjects}</td>
          <td class="py-4 px-6 text-slate-600">${item.year}</td>
        </tr>
      `;
    });
    schoolsTable.innerHTML = schoolsHTML;
  }

  // 概要ページの反映 (about.html)
  const aboutElements = {
    'about-purpose': siteData.about.purpose,
    'about-philosophy-quote': siteData.about.philosophyQuote,
    'about-philosophy-text': siteData.about.philosophyText,
    'about-facility': siteData.about.facilityDescription,
    'about-address': `${siteData.contact.postalCode} ${siteData.contact.address}`,
    'about-access': siteData.about.access,
    'about-staff-director': siteData.about.staff.director,
    'about-staff-teachers': siteData.about.staff.teachers,
    'about-staff-support': siteData.about.staff.support,
  };

  for (const [id, value] of Object.entries(aboutElements)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  const purposeList = document.getElementById('about-purpose-list');
  if (purposeList && siteData.about.purposeList) {
    let listHTML = '';
    siteData.about.purposeList.forEach(item => {
      listHTML += `<li>${item}</li>`;
    });
    purposeList.innerHTML = listHTML;
  }

  // お問い合わせページの反映 (contact.html)
  const contactElements = {
    'contact-phone': siteData.contact.phone,
    'contact-hours': siteData.contact.businessHours,
    'contact-email': siteData.contact.email,
    'contact-address': `${siteData.contact.postalCode} ${siteData.contact.address}`,
    'contact-staff': siteData.contact.staff,
  };

  for (const [id, value] of Object.entries(contactElements)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
});
