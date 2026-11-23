(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={meta:{title:{en:`Arnon Hacohen — Self-taught Full Stack Developer`,he:`ארנון הכהן — מפתח Full Stack אוטודידקט`},description:{en:`19, from Israel, self-taught full stack developer. I rebuild stuff I love — including bringing the browser game Ekoloko back online after five years.`,he:`בן 19 מישראל, מפתח Full Stack אוטודידקט. אני בונה מחדש דברים שאני אוהב — כולל החזרת המשחק אקולוקו לפעילות אחרי חמש שנים.`},url:`https://arnon001.com/`,ogImage:`images/og.png`,ogImageAlt:{en:`Arnon Hacohen — developer portfolio, CRT terminal theme`,he:`ארנון הכהן — תיק עבודות למפתח, בעיצוב מסוף CRT`},themeColor:`#080b0e`,twitter:`@arnon001`},ui:{skip:{en:`Skip to content`,he:`דלג לתוכן`},language:{en:`עברית`,he:`English`},languageLabel:{en:`Switch language to Hebrew`,he:`החלף שפה לאנגלית`},menuOpen:{en:`Open menu`,he:`פתח תפריט`},menuClose:{en:`Close menu`,he:`סגור תפריט`},crtOn:{en:`CRT filter: on`,he:`מסנן CRT: פעיל`},crtOff:{en:`CRT filter: off`,he:`מסנן CRT: כבוי`},crtLabel:{en:`Toggle CRT scanline filter`,he:`הפעל או כבה מסנן סריקות CRT`},comingSoon:{en:`coming soon`,he:`בקרוב`},scrollHint:{en:`scroll`,he:`גלול`},copyEmail:{en:`Copy email`,he:`העתק אימייל`},copied:{en:`Copied to clipboard`,he:`הועתק ללוח`},copyFailed:{en:`Select and copy manually`,he:`סמן והעתק ידנית`},backToTop:{en:`Return to title screen`,he:`חזרה למסך הפתיחה`},cheat:{en:`Cheat activated — CRT overdrive`,he:`קוד הופעל — CRT בעוצמה מלאה`},sectionLabel:{en:`Section`,he:`מקטע`}},nav:[{id:`about`,label:{en:`About`,he:`אודות`}},{id:`projects`,label:{en:`Projects`,he:`פרויקטים`}},{id:`skills`,label:{en:`Skills`,he:`כישורים`}},{id:`personal`,label:{en:`Personal`,he:`אישי`}},{id:`contact`,label:{en:`Contact`,he:`צור קשר`}}],hero:{eyebrow:{en:`Self-taught full stack dev`,he:`מפתח Full Stack אוטודידקט`},name:`ARNON HACOHEN`,nameHe:`ארנון הכהן`,pitch:{en:`I rebuild stuff I love.`,he:`אני בונה מחדש דברים שאני אוהב.`},lede:{en:`19, from Israel. I wrote my first game in Java at around 10 and never really stopped. These days I split my time between full stack work and dragging old games back from the dead.`,he:`בן 19, מישראל. כתבתי את המשחק הראשון שלי ב-Java בגיל 10 בערך, ומאז לא באמת עצרתי. היום אני מחלק את הזמן בין עבודת Full Stack לבין החזרת משחקים ישנים לחיים.`},primaryCta:{en:`Press start`,he:`התחל משחק`},secondaryCta:{en:`Get in touch`,he:`דבר איתי`},card:{title:{en:`Player card`,he:`כרטיס שחקן`},handle:`arnon001`,class:{en:`Full stack developer`,he:`מפתח Full Stack`},stats:[{label:{en:`Level`,he:`רמה`},value:`19`,fill:63},{label:{en:`Server`,he:`שרת`},value:`IL`,fill:100},{label:{en:`Grind`,he:`ותק`},value:`9 yrs`,fill:90},{label:{en:`Stack`,he:`סטאק`},value:`TS/Node`,fill:85}],status:{en:`Open to interesting projects`,he:`פתוח לפרויקטים מעניינים`}}},about:{index:`01`,heading:{en:`About`,he:`אודות`},kicker:{en:`How I got here`,he:`איך הגעתי לפה`},paragraphs:[{en:`I'm Arnon, 19, from Israel. I got into coding by accident — around 10 I built my first game in Java, mostly because I wanted to make the things I was playing. That turned into a habit I never dropped.`,he:`אני ארנון, בן 19, מישראל. הגעתי לתכנות בטעות — בגיל 10 בערך בניתי את המשחק הראשון שלי ב-Java, בעיקר כי רציתי ליצור את הדברים ששיחקתי בהם. זה הפך להרגל שמעולם לא זנחתי.`},{en:`I'm self-taught, which means I learn by shipping: pick something I care about, break it, read the source, rebuild it. I love PC games, and a lot of my work starts as "this should exist again".`,he:`אני אוטודידקט, כלומר אני לומד תוך כדי בנייה: בוחר משהו שאכפת לי ממנו, שובר אותו, קורא את הקוד, ובונה מחדש. אני אוהב משחקי מחשב, והרבה מהעבודה שלי מתחילה במחשבה ש"זה צריך להיות קיים שוב".`},{en:`Right now that means TypeScript and Node on the backend, Linux on a server I run myself, and a lot of AI-assisted coding to move faster than I could alone.`,he:`כרגע זה אומר TypeScript ו-Node בצד השרת, Linux על שרת שאני מנהל בעצמי, והרבה קידוד בעזרת AI כדי להתקדם מהר יותר ממה שאוכל לבד.`}],facts:[{label:{en:`Based in`,he:`מיקום`},value:{en:`Israel`,he:`ישראל`}},{label:{en:`First game`,he:`משחק ראשון`},value:{en:`Java, age ~10`,he:`Java, גיל 10`}},{label:{en:`Learning style`,he:`סגנון למידה`},value:{en:`Self-taught`,he:`אוטודידקט`}},{label:{en:`Daily driver`,he:`סביבת עבודה`},value:{en:`Linux + Node`,he:`Linux + Node`}}],terminal:{title:`arnon@israel:~`,lines:[{cmd:`whoami`,out:{en:`self-taught full stack dev, 19, IL`,he:`מפתח Full Stack אוטודידקט, בן 19, ישראל`}},{cmd:`cat stack.txt`,out:{en:`typescript · node · linux · mysql`,he:`typescript · node · linux · mysql`}},{cmd:`uptime --coding`,out:{en:`9 years, still going`,he:`9 שנים, ועדיין ממשיך`}}]}},projects:{index:`02`,heading:{en:`Projects`,he:`פרויקטים`},kicker:{en:`Things I rebuilt`,he:`דברים שבניתי מחדש`},items:[{id:`ekoloko`,index:`01`,title:{en:`Ekoloko Rewritten`,he:`אקולוקו — בנייה מחדש`},tagline:{en:`Bringing a dead MMO back online`,he:`מחזירים MMO כבוי לפעילות`},status:{en:`In progress`,he:`בעבודה`},year:`2025 — now`,summary:{en:`I help rebuild the server side of Ekoloko so the game can return after more than five years offline.`,he:`אני עוזר לבנות מחדש את צד השרת של אקולוקו, כדי שהמשחק יחזור לפעילות אחרי יותר מחמש שנים שבהן היה כבוי.`},detail:{en:`The original client survived in web archives; the backend did not. So we reconstruct it — packet by packet, room by room — vibe coded in ActionScript and driven by a lot of guesswork, old screenshots and packet captures. The goal is a playable hub world again, not a museum piece.`,he:`הקליינט המקורי שרד בארכיוני רשת; צד השרת לא. אז אנחנו משחזרים אותו — חבילה אחרי חבילה, חדר אחרי חדר — בקידוד ActionScript ובהשערות מושכלות, בעזרת צילומי מסך ישנים ולכידות תעבורה. המטרה היא עולם משחק שאפשר לשחק בו שוב, לא פריט מוזיאון.`},tech:[`ActionScript 3`,`Node.js`,`Linux`,`AI-assisted dev`,`Reverse engineering`],media:{src:`images/ekoloko.svg`,alt:{en:`Stylized screenshot of the rebuilt Ekoloko hub world: an island village with avatars, chat log, minimap and skill bar.`,he:`צילום מסך מסוגנן של עולם המשחק אקולוקו שנבנה מחדש: כפר אי עם דמויות, צ'אט, מיני-מפה וסרגל מיומנויות.`},width:1024,height:768},links:[{label:{en:`The story on LinkedIn`,he:`הסיפור בלינקדאין`},url:`https://www.linkedin.com/pulse/ekoloko-from-web-archive-living-game-arnon-hacohen-afrjf/`,kind:`story`}]},{id:`flight-arcade`,index:`02`,title:{en:`Flight Arcade`,he:`Flight Arcade`},tagline:{en:`A pocket arcade cabinet`,he:`מכונת ארקייד לכיס`},status:{en:`Shipped`,he:`שוחרר`},year:`2025`,summary:{en:`A mobile arcade game collection — a Ball Blast-style shooter, a Subway Surfers-style runner and a set of mini games — shipped as an Android APK.`,he:`אוסף משחקי ארקייד למובייל — יריות בסגנון Ball Blast, ראנר בסגנון Subway Surfers ומשחקוני מיני — שיצא לאור כקובץ APK לאנדרואיד.`},detail:{en:`Built as one collection instead of three separate apps: shared menus, shared progression, one install. The shooter is about numbered blocks and a cannon that never stops upgrading; the runner is three lanes and reflexes. Small sessions, instant restart, no waiting around.`,he:`נבנה כאוסף אחד ולא כשלוש אפליקציות נפרדות: תפריטים משותפים, התקדמות משותפת, התקנה אחת. משחק היריות עוסק בבלוקים ממוספרים ובתותח שמשתדרג ללא הפסקה; הראנר הוא שלושה נתיבים ורפלקסים. סשנים קצרים, התחלה מחדש מיידית, בלי זמני המתנה מיותרים.`},tech:[`Android APK`,`Game dev`,`TypeScript`,`AI Coding`],media:{src:`images/flight-arcade.svg`,alt:{en:`Stylized screenshot of the Flight Arcade collection: a shooter with numbered blocks, a three-lane runner and a mini game selection grid.`,he:`צילום מסך מסוגנן של אוסף Flight Arcade: משחק יריות עם בלוקים ממוספרים, ראנר בשלושה נתיבים וגריד בחירת משחקונים.`},width:1024,height:768},links:[{label:{en:`Source code`,he:`קוד מקור`},url:``,kind:`source`,pending:!0}]}]},skills:{index:`03`,heading:{en:`Skills`,he:`כישורים`},kicker:{en:`Loadout`,he:`ציוד`},note:{en:`Everything here is something I actually use, not a checklist I collected.`,he:`כל מה שמופיע כאן הוא משהו שאני באמת משתמש בו, לא רשימה שאספתי.`},groups:[{id:`languages`,label:{en:`Languages`,he:`שפות`},items:[`TypeScript`,`JavaScript`,`Java`,`ActionScript 3`,`HTML & CSS`,`SQL`]},{id:`frameworks`,label:{en:`Frameworks / engines`,he:`ספריות ומנועים`},items:[`Node.js`,`Vite`,`Express`,`Phaser`,`Flash / AS3 runtime`]},{id:`backend`,label:{en:`Backend & DevOps`,he:`שרת ו-DevOps`},items:[`Linux`,`Nginx`,`MySQL`,`MongoDB`,`PM2`,`GitHub Actions`]},{id:`tools`,label:{en:`Tools`,he:`כלים`},items:[`Git & GitHub`,`VS Code`,`AI Coding`,`npm`,`Chrome DevTools`,`Postman`]}]},personal:{index:`04`,heading:{en:`Outside code`,he:`מחוץ לקוד`},kicker:{en:`Side quests`,he:`משימות צד`},items:[{icon:`ball`,title:{en:`Hapoel Jerusalem`,he:`הפועל ירושלים`},text:{en:`Lifelong fan. Red and black, win or lose — and I still believe next season is ours.`,he:`אוהד מגיל צעיר. אדום ושחור, בניצחון או בהפסד — ואני עדיין מאמין שהעונה הבאה שלנו.`}},{icon:`plane`,title:{en:`Travel`,he:`טיולים`},text:{en:`I love going somewhere new. New places reset my head better than any break from the keyboard.`,he:`אני אוהב להגיע למקומות חדשים. מקום חדש מאפס לי את הראש טוב יותר מכל הפסקה מהמקלדת.`}},{icon:`gamepad`,title:{en:`PC games`,he:`משחקי מחשב`},text:{en:`The reason I started coding in the first place. If a game I love dies, I'd rather rebuild it than mourn it.`,he:`הסיבה שבגללה התחלתי לתכנת מלכתחילה. אם משחק שאני אוהב נסגר, אני מעדיף לבנות אותו מחדש מאשר להתאבל עליו.`}}]},contact:{index:`05`,heading:{en:`Contact`,he:`צור קשר`},kicker:{en:`Insert coin to continue`,he:`הכנס מטבע כדי להמשיך`},text:{en:`Got a game that deserves a second life, a project worth building, or just want to talk shop? My inbox is open.`,he:`יש לכם משחק שמגיע לו חיים שניים, פרויקט ששווה לבנות, או שאתם פשוט רוצים לדבר מקצועית? תיבת הדואר שלי פתוחה.`},email:`arnon@arnon001.com`,links:[{icon:`github`,label:`GitHub`,value:`github.com/arnon001`,url:`https://github.com/arnon001`},{icon:`linkedin`,label:`LinkedIn`,value:`in/arnon-hacohen`,url:`https://www.linkedin.com/in/arnon-hacohen-afrjf/`}],form:{title:{en:`Send a message`,he:`שליחת הודעה`},hint:{en:`No backend, no tracking — this opens your mail app with the message pre-filled.`,he:`בלי שרת ובלי מעקב — הטופס פותח את אפליקציית המייל שלך עם ההודעה מוכנה מראש.`},name:{en:`Your name`,he:`השם שלך`},namePlaceholder:{en:`Player one`,he:`שחקן מספר אחת`},email:{en:`Your email`,he:`האימייל שלך`},emailPlaceholder:{en:`you@example.com`,he:`you@example.com`},message:{en:`Message`,he:`הודעה`},messagePlaceholder:{en:`What are we building?`,he:`מה בונים?`},submit:{en:`Send message`,he:`שלח הודעה`},subject:{en:`Portfolio contact`,he:`פנייה דרך תיק העבודות`},sending:{en:`Opening your mail app…`,he:`פותח את אפליקציית המייל…`},sent:{en:`Mail app opened. If nothing happened, email me directly.`,he:`אפליקציית המייל נפתחה. אם כלום לא קרה, שלחו לי מייל ישירות.`},invalid:{en:`Please fill in your name, a valid email and a message.`,he:`נא למלא שם, אימייל תקין והודעה.`}}},footer:{built:{en:`Hand-built with Vite + vanilla TypeScript. No framework, no trackers, one accent color.`,he:`נבנה ידנית עם Vite ו-TypeScript טהור. בלי פריימוורק, בלי כלי מעקב, צבע הדגשה אחד.`},copyright:{en:`© 2026 Arnon Hacohen`,he:`© 2026 ארנון הכהן`},hint:{en:`Try the Konami code.`,he:`נסו את קוד קונאמי.`}}};function t(e,t){return e[t]}function n(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}var r={mail:`<rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M3 6.5 12 13l9-6.5"/>`,github:`<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.6c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.7 5.4 3 5.4 3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.4c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>`,linkedin:`<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.8a2.2 2.2 0 0 1 4.4 0V17M11.5 10.5V17"/>`,arrow:`<path d="M4 12h15M13 6l6 6-6 6"/>`,external:`<path d="M14 4h6v6M20 4 11 13M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>`,copy:`<rect x="9" y="9" width="11" height="11" rx="1.5"/><path d="M15 5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15"/>`,check:`<path d="m4.5 12.5 5 5 10-11"/>`,menu:`<path d="M4 7h16M4 12h16M4 17h16"/>`,close:`<path d="M6 6l12 12M18 6 6 18"/>`,monitor:`<rect x="2.5" y="4" width="19" height="13" rx="1.5"/><path d="M8 21h8M12 17v4M5.5 8.5h13M5.5 11.5h9"/>`,ball:`<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6c3.6 2 8.4 2 12.8 0M5.6 18.4c3.6-2 8.4-2 12.8 0"/>`,plane:`<path d="M10.5 13.5 3 11l1.5-2 6.5 1 4.6-4.6a2 2 0 0 1 2.8 2.8L13.8 13l1 6.5-2 1.5-2.3-7.5Z"/>`,gamepad:`<path d="M7.5 8h9a4.5 4.5 0 0 1 4.4 5.4l-.7 3.4A2.6 2.6 0 0 1 15.8 18l-1.3-1.5h-5L8.2 18a2.6 2.6 0 0 1-4.4-1.2l-.7-3.4A4.5 4.5 0 0 1 7.5 8Z"/><path d="M8 11.5v3M6.5 13h3M15.5 12h.1M17.5 14h.1"/>`,up:`<path d="M12 19V5M6 11l6-6 6 6"/>`,code:`<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>`,spark:`<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>`};function i(e,t=``){let n=r[e]??``;return`<svg${t?` class="${t}"`:``} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${n}</svg>`}var a=`<svg class="logo" viewBox="0 0 5 7" shape-rendering="crispEdges" aria-hidden="true" focusable="false"><g fill="currentColor"><rect x="1" y="0" width="3" height="1"/><rect x="0" y="1" width="1" height="6"/><rect x="4" y="1" width="1" height="6"/><rect x="1" y="3" width="3" height="1"/></g></svg>`;function o(e,t,r,i,a){return`<header class="sec-head reveal">
      <p class="sec-index hud-label"><span class="sec-slash" aria-hidden="true">//</span><span class="sr-only">${n(a)} </span>${n(t)}</p>
      <div class="sec-title-row">
        <h2 id="${e}-title">${n(r)}</h2>
        <span class="sec-rule" aria-hidden="true"></span>
      </div>
      <p class="sec-kicker">${n(i)}</p>
    </header>`}function s(e,r,a){let o=n(t(e.label,r));if(e.pending===!0||e.url===``)return`<span class="cart-link is-pending" aria-disabled="true">${i(e.kind===`source`?`code`:`external`)}<span>${o}</span><em class="soon">${n(a)}</em></span>`;let s=e.kind===`story`?`external`:e.kind===`source`?`code`:`arrow`;return`<a class="cart-link" href="${n(e.url)}" target="_blank" rel="noopener noreferrer">${i(s)}<span>${o}</span>${i(`arrow`,`cart-link-arrow`)}</a>`}function c(e,r,i,a){let o=`project-${e.id}-title`;return`<article class="cartridge reveal${a?` is-flipped`:``}" id="project-${n(e.id)}" aria-labelledby="${o}">
        <div class="cart-media">
          <figure class="screen">
            <div class="screen-bar">
              <span class="hud-label screen-name">${n(e.id)}.exe</span>
              <span class="screen-leds" aria-hidden="true"><i></i><i></i><i></i></span>
            </div>
            <div class="screen-view">
              <img src="${n(e.media.src)}" alt="${n(t(e.media.alt,r))}" width="${e.media.width}" height="${e.media.height}" loading="lazy" decoding="async">
              <span class="screen-glass" aria-hidden="true"></span>
            </div>
            <figcaption class="screen-caption">${n(t(e.tagline,r))}</figcaption>
          </figure>
        </div>
        <div class="cart-body">
          <div class="cart-meta">
            <span class="cart-index hud-label">${n(e.index)}</span>
            <span class="chip chip-status${e.id===`ekoloko`?` is-live`:``}"><i aria-hidden="true"></i>${n(t(e.status,r))}</span>
            <span class="cart-year">${n(e.year)}</span>
          </div>
          <h3 id="${o}">${n(t(e.title,r))}</h3>
          <p class="cart-summary">${n(t(e.summary,r))}</p>
          <p class="cart-detail">${n(t(e.detail,r))}</p>
          <ul class="tech" aria-label="Tech stack">
            ${e.tech.map(e=>`<li>${n(e)}</li>`).join(`
            `)}
          </ul>
          <div class="cart-links">
            ${e.links.map(e=>s(e,r,i)).join(`
            `)}
          </div>
        </div>
      </article>`}function l(e,r){let o=e.nav.find(e=>e.id===`contact`);return`<header class="hud" id="top">
    <div class="hud-progress" aria-hidden="true"><i id="progress-bar"></i></div>
    <div class="hud-inner">
      <a class="brand" href="#hero" aria-label="Arnon Hacohen — ${r===`he`?`ראש הדף`:`home`}">
        <span class="brand-mark">${a}</span>
        <span class="brand-text">ARNON<span class="brand-slash" aria-hidden="true">//</span>HACOHEN</span>
      </a>
      <nav class="nav" id="nav" aria-label="${r===`he`?`ניווט ראשי`:`Primary`}">
        <ul>
          ${e.nav.map(e=>`<li><a href="#${n(e.id)}" data-nav="${n(e.id)}">${n(t(e.label,r))}</a></li>`).join(`
          `)}
        </ul>
      </nav>
      <div class="hud-tools">
        <button class="icon-btn" id="crt-toggle" type="button" aria-pressed="true" title="${n(t(e.ui.crtLabel,r))}" aria-label="${n(t(e.ui.crtLabel,r))}">${i(`monitor`)}</button>
        <button class="lang-btn" id="lang-toggle" type="button" lang="${r===`en`?`he`:`en`}" title="${n(t(e.ui.languageLabel,r))}">${n(t(e.ui.language,r))}</button>
        <a class="btn btn-small hud-cta" href="#contact">${n(o?t(o.label,r):``)}${i(`arrow`)}</a>
        <button class="icon-btn menu-btn" id="menu-toggle" type="button" aria-expanded="false" aria-controls="nav" aria-label="${n(t(e.ui.menuOpen,r))}">${i(`menu`)}</button>
      </div>
    </div>
  </header>`}function u(e,r){let a=e.hero,o=r===`he`?a.nameHe:a.name;return`<section class="hero" id="hero" aria-labelledby="hero-title">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow hud-label"><span class="led" aria-hidden="true"></span>${n(t(a.eyebrow,r))}</p>
          <h1 class="hero-name" id="hero-title">${n(o)}</h1>
          <p class="hero-pitch">${n(t(a.pitch,r))}<span class="caret" aria-hidden="true"></span></p>
          <p class="hero-lede">${n(t(a.lede,r))}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects"><span class="btn-play" aria-hidden="true">▶</span>${n(t(a.primaryCta,r))}</a>
            <a class="btn btn-ghost" href="#contact">${n(t(a.secondaryCta,r))}${i(`arrow`)}</a>
          </div>
        </div>
        <aside class="player-card" aria-label="${n(t(a.card.title,r))}">
          <div class="card-top">
            <span class="hud-label">${n(t(a.card.title,r))}</span>
            <span class="card-handle">@${n(a.card.handle)}</span>
          </div>
          <div class="card-avatar">
            <img src="images/avatar.svg" alt="" width="160" height="160" decoding="async">
            <span class="card-level hud-label" aria-hidden="true">LV.19</span>
          </div>
          <p class="card-class">${n(t(a.card.class,r))}</p>
          <ul class="stats">
            ${a.card.stats.map(e=>`<li>
              <span class="stat-label">${n(t(e.label,r))}</span>
              <span class="stat-bar" role="img" aria-label="${n(t(e.label,r))}: ${n(e.value)}"><i style="--fill:${Math.max(0,Math.min(100,e.fill))}%"></i></span>
              <span class="stat-value">${n(e.value)}</span>
            </li>`).join(`
            `)}
          </ul>
          <p class="card-status"><span class="pulse" aria-hidden="true"></span>${n(t(a.card.status,r))}</p>
        </aside>
      </div>
      <a class="scroll-hint" href="#about"><span class="hud-label">${n(t(e.ui.scrollHint,r))}</span><span class="scroll-arrow" aria-hidden="true">↓</span></a>
    </section>`}function d(e,r){let i=e.about,a=i.terminal;return`<section class="section" id="about" aria-labelledby="about-title">
      ${o(`about`,i.index,t(i.heading,r),t(i.kicker,r),t(e.ui.sectionLabel,r))}
      <div class="about-grid">
        <div class="about-body">
          ${i.paragraphs.map(e=>`<p class="reveal">${n(t(e,r))}</p>`).join(`
          `)}
        </div>
        <div class="about-side">
          <dl class="facts reveal">
            ${i.facts.map(e=>`<div class="fact">
              <dt>${n(t(e.label,r))}</dt>
              <dd>${n(t(e.value,r))}</dd>
            </div>`).join(`
            `)}
          </dl>
          <div class="terminal reveal" aria-hidden="true">
            <div class="term-bar"><span class="term-leds"><i></i><i></i><i></i></span><span class="term-title">${n(a.title)}</span></div>
            <pre class="term-body"><code>${a.lines.map(e=>`<span class="term-cmd">$ ${n(e.cmd)}</span>\n<span class="term-out">${n(t(e.out,r))}</span>`).join(`
`)}
<span class="term-cmd">$ <span class="term-caret"></span></span></code></pre>
          </div>
        </div>
      </div>
    </section>`}function f(e,n){let r=e.projects;return`<section class="section" id="projects" aria-labelledby="projects-title">
      ${o(`projects`,r.index,t(r.heading,n),t(r.kicker,n),t(e.ui.sectionLabel,n))}
      <div class="project-list">
        ${r.items.map((r,i)=>c(r,n,t(e.ui.comingSoon,n),i%2==1)).join(`
        `)}
      </div>
    </section>`}function p(e,r){let i=e.skills;return`<section class="section" id="skills" aria-labelledby="skills-title">
      ${o(`skills`,i.index,t(i.heading,r),t(i.kicker,r),t(e.ui.sectionLabel,r))}
      <p class="skills-note reveal">${n(t(i.note,r))}</p>
      <div class="skill-grid">
        ${i.groups.map((e,i)=>`<section class="skill-panel reveal" aria-labelledby="skill-${n(e.id)}">
          <div class="panel-top">
            <h3 id="skill-${n(e.id)}" class="hud-label">${n(t(e.label,r))}</h3>
            <span class="panel-count" aria-hidden="true">${String(e.items.length).padStart(2,`0`)}</span>
          </div>
          <ul class="chips">
            ${e.items.map(e=>`<li class="chip" style="--i:${i}">${n(e)}</li>`).join(`
            `)}
          </ul>
          <span class="panel-corner" aria-hidden="true"></span>
        </section>`).join(`
        `)}
      </div>
    </section>`}function m(e,r){let a=e.personal;return`<section class="section" id="personal" aria-labelledby="personal-title">
      ${o(`personal`,a.index,t(a.heading,r),t(a.kicker,r),t(e.ui.sectionLabel,r))}
      <div class="quest-grid">
        ${a.items.map(e=>`<article class="quest reveal">
          <span class="quest-icon">${i(e.icon)}</span>
          <h3>${n(t(e.title,r))}</h3>
          <p>${n(t(e.text,r))}</p>
        </article>`).join(`
        `)}
      </div>
    </section>`}function h(e,r){let a=e.contact,s=a.form;return`<section class="section" id="contact" aria-labelledby="contact-title">
      ${o(`contact`,a.index,t(a.heading,r),t(a.kicker,r),t(e.ui.sectionLabel,r))}
      <div class="contact-grid">
        <div class="contact-copy reveal">
          <p class="contact-text">${n(t(a.text,r))}</p>
          <div class="email-row">
            <a class="email-link" href="mailto:${n(a.email)}">${i(`mail`)}<span>${n(a.email)}</span></a>
            <button class="icon-btn" type="button" data-copy="${n(a.email)}" title="${n(t(e.ui.copyEmail,r))}" aria-label="${n(t(e.ui.copyEmail,r))}">${i(`copy`)}</button>
          </div>
          <ul class="social">
            ${a.links.map(e=>`<li>
              <a class="social-link" href="${n(e.url)}" target="_blank" rel="noopener noreferrer">
                <span class="social-icon">${i(e.icon)}</span>
                <span class="social-text"><b>${n(e.label)}</b><small>${n(e.value)}</small></span>
                ${i(`external`,`social-arrow`)}
              </a>
            </li>`).join(`
            `)}
          </ul>
        </div>
        <form class="contact-form reveal" id="contact-form" novalidate>
          <h3 class="form-title">${n(t(s.title,r))}</h3>
          <p class="form-hint">${n(t(s.hint,r))}</p>
          <div class="field">
            <label for="cf-name">${n(t(s.name,r))}</label>
            <input id="cf-name" name="name" type="text" required autocomplete="name" placeholder="${n(t(s.namePlaceholder,r))}">
          </div>
          <div class="field">
            <label for="cf-email">${n(t(s.email,r))}</label>
            <input id="cf-email" name="email" type="email" required autocomplete="email" placeholder="${n(t(s.emailPlaceholder,r))}" dir="ltr">
          </div>
          <div class="field">
            <label for="cf-message">${n(t(s.message,r))}</label>
            <textarea id="cf-message" name="message" rows="4" required placeholder="${n(t(s.messagePlaceholder,r))}"></textarea>
          </div>
          <button class="btn btn-primary form-submit" type="submit">${n(t(s.submit,r))}<span class="btn-play" aria-hidden="true">▶</span></button>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>`}function g(e,r){return`<footer class="footer">
      <div class="footer-inner">
        <p class="footer-built">${i(`code`)}<span>${n(t(e.footer.built,r))}</span></p>
        <div class="footer-meta">
          <span>${n(t(e.footer.copyright,r))}</span>
          <span class="footer-hint">${n(t(e.footer.hint,r))}</span>
        </div>
        <a class="to-top" href="#top">${n(t(e.ui.backToTop,r))}${i(`up`)}</a>
      </div>
    </footer>`}function _(e,r){return`<a class="skip" href="#main">${n(t(e.ui.skip,r))}</a>
  ${l(e,r)}
  <main id="main">
    ${u(e,r)}
    ${d(e,r)}
    ${f(e,r)}
    ${p(e,r)}
    ${m(e,r)}
    ${h(e,r)}
  </main>
  ${g(e,r)}`}var v=e,y=`arnon.lang`,b=`arnon.crt`,x=[`ArrowUp`,`ArrowUp`,`ArrowDown`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowLeft`,`ArrowRight`,`b`,`a`],S=document.documentElement,C=document.querySelector(`#app`),w=document.querySelector(`#toast`),T=S.getAttribute(`lang`)===`he`?`he`:`en`,E=null,D=null,O=0,k=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function A(e){try{return localStorage.getItem(e)}catch{return null}}function j(e,t){try{localStorage.setItem(e,t)}catch{}}function M(e){w&&(w.textContent=e,w.classList.add(`is-visible`),window.clearTimeout(O),O=window.setTimeout(()=>w?.classList.remove(`is-visible`),2600))}function N(){if(!C)return;let e=window.scrollY;C.innerHTML=_(v,T),S.lang=T,S.dir=T===`he`?`rtl`:`ltr`,S.classList.remove(`lang-pending`),window.scrollTo({top:e,behavior:`instant`}),P(),F(),L()}function P(){E?.disconnect();let e=Array.from(document.querySelectorAll(`.reveal`));if(!(`IntersectionObserver`in window)||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)e.forEach(e=>e.classList.add(`is-in`));else{E=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(t.target.classList.add(`is-in`),E?.unobserve(t.target))},{rootMargin:`0px 0px -8% 0px`,threshold:.08});for(let t of e){let e=t.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0?t.classList.add(`is-in`):E.observe(t)}}}function F(){D?.disconnect();let e=Array.from(document.querySelectorAll(`[data-nav]`));if(!(`IntersectionObserver`in window)||e.length===0)return;D=new IntersectionObserver(t=>{for(let n of t){if(!n.isIntersecting)continue;let t=n.target.id;for(let n of e){let e=n.dataset.nav===t;n.classList.toggle(`is-active`,e),e?n.setAttribute(`aria-current`,`true`):n.removeAttribute(`aria-current`)}}},{rootMargin:`-45% 0px -50% 0px`,threshold:0});for(let t of e){let e=document.getElementById(t.dataset.nav??``);e&&D.observe(e)}let t=document.getElementById(`hero`);t&&D.observe(t)}var I=!1;function L(){let e=document.querySelector(`#progress-bar`),t=document.querySelector(`.hud`),n=document.querySelector(`.fx`),r=document.documentElement.scrollHeight-window.innerHeight,i=r>0?Math.min(1,Math.max(0,window.scrollY/r)):0;e&&(e.style.transform=`scaleX(${i})`),n&&!k&&n.style.setProperty(`--sy`,String(Math.round(Math.min(window.scrollY,2400)))),t?.classList.toggle(`is-stuck`,window.scrollY>24)}function R(){I||(I=!0,requestAnimationFrame(()=>{L(),I=!1}))}function z(e){let n=document.querySelector(`#menu-toggle`);document.body.classList.toggle(`nav-open`,e),n?.setAttribute(`aria-expanded`,String(e)),n?.setAttribute(`aria-label`,t(e?v.ui.menuClose:v.ui.menuOpen,T)),n&&(n.innerHTML=e?V():B())}function B(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`}function V(){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`}function H(e){document.body.classList.toggle(`crt-off`,!e);let n=document.querySelector(`#crt-toggle`);n?.setAttribute(`aria-pressed`,String(e)),n?.setAttribute(`title`,t(e?v.ui.crtOn:v.ui.crtOff,T)),j(b,e?`on`:`off`)}async function U(e,n){let r=!1;try{await navigator.clipboard.writeText(e),r=!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();try{r=document.execCommand(`copy`)}catch{r=!1}t.remove()}if(M(t(r?v.ui.copied:v.ui.copyFailed,T)),!r)return;let i=n.innerHTML;n.classList.add(`is-copied`),n.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4.5 12.5 5 5 10-11"/></svg>`,window.setTimeout(()=>{n.classList.remove(`is-copied`),n.innerHTML=i},1600)}function W(e){let n=e.querySelector(`#form-status`),r=e.querySelector(`#cf-name`),i=e.querySelector(`#cf-email`),a=e.querySelector(`#cf-message`);if(!n||!r||!i||!a)return;let o=[r,i,a],s=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(i.value.trim()),c=[r.value.trim()!==``,s,a.value.trim()!==``];if(o.forEach((e,t)=>e.classList.toggle(`is-invalid`,c[t]!==!0)),c.some(e=>!e)){n.textContent=t(v.contact.form.invalid,T),n.dataset.state=`error`,o[c.findIndex(e=>!e)]?.focus();return}let l=v.contact.form,u=`${t(l.subject,T)} — ${r.value.trim()}`,d=`${a.value.trim()}\n\n— ${r.value.trim()}\n${i.value.trim()}`,f=`mailto:${v.contact.email}?subject=${encodeURIComponent(u)}&body=${encodeURIComponent(d)}`;n.textContent=t(l.sending,T),n.dataset.state=`pending`,window.location.href=f,window.setTimeout(()=>{n.textContent=t(l.sent,T),n.dataset.state=`ok`},1200)}function G(){T=T===`en`?`he`:`en`,j(y,T),z(!1),N(),document.querySelector(`#lang-toggle`)?.focus()}var K=0;function q(e){if(e.key===`Escape`){z(!1);return}let n=x[K];n!==void 0&&e.key.toLowerCase()===n.toLowerCase()?(K+=1,K===x.length&&(K=0,document.body.classList.toggle(`crt-overdrive`),M(t(v.ui.cheat,T)))):K=+(e.key===x[0])}function J(e){let t=e.target;if(!t)return;if(t.closest(`#lang-toggle`)){e.preventDefault(),G();return}if(t.closest(`#crt-toggle`)){H(document.body.classList.contains(`crt-off`));return}if(t.closest(`#menu-toggle`)){z(!document.body.classList.contains(`nav-open`));return}let n=t.closest(`[data-copy]`);n?(e.preventDefault(),U(n.dataset.copy??``,n)):(t.closest(`a[href^="#"]`)||document.body.classList.contains(`nav-open`)&&!t.closest(`.hud`))&&z(!1)}function Y(e){let t=e.target;t?.id===`contact-form`&&(e.preventDefault(),W(t))}function X(e){let t=e.target;t?.classList.contains(`is-invalid`)&&t.classList.remove(`is-invalid`)}function Z(){let e=A(y);e===`en`||e===`he`?T=e:navigator.language.toLowerCase().startsWith(`he`)&&(T=`he`),N(),H(A(b)!==`off`),document.addEventListener(`click`,J),document.addEventListener(`submit`,Y),document.addEventListener(`input`,X),document.addEventListener(`keydown`,q),window.addEventListener(`scroll`,R,{passive:!0}),window.addEventListener(`resize`,()=>{window.innerWidth>=900&&z(!1),L()})}Z();