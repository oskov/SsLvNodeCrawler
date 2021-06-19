import {SsLvListPageParser} from "./ssLvPageParser";
import {DEFAULT_SS_LV_BASE_URL} from "./consts";

test('parse riga/centre ru', () => {
    const page = '<!DOCTYPE html>\n' +
        '<HTML><HEAD>\n' +
        '<title>SS.LV Квартиры - Рига, Цены, Продают - Все объявления</title>\n' +
        '<meta http-equiv="Content-Type" CONTENT="text/html; charset=UTF-8">\n' +
        '<meta name="viewport" content="user-scalable=1, width=device-width, initial-scale=1.0"/>\n' +
        '<meta name="keywords" content="Объявления рига квартиры недвижимость цены квартира комнатная квартиру после косметического продажа покупка сдаю снимут обмен разное">\n' +
        '<meta name="description" content="Объявления. Квартиры - Рига - Все объявления, Цены, торговля, Фото, Kартинки, Продажа">\n' +
        '<link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/">\n' +
        '\n' +
        '<meta http-equiv="imagetoolbar" content="no">\n' +
        '\n' +
        '<BASE href="https://www.ss.lv/">\n' +
        '<link href="https://i.ss.lv/w_inc/style.css?v=220" rel="stylesheet" />\n' +
        '<style>html{overflow-y:scroll;}.page_bg{background-image:url(\'https://i.ss.lv/img/head/sludinajumi-ss-lv.jpg\' );background-repeat:no-repeat;}@media screen and (min-width:1280px){.page_bg{background-image:url(\'https://i.ss.lv/img/head/sludinajumi-ss-lv-1280.jpg\' );}}\n' +
        '.l50{width:50px;}.l70{width:70px;}.l35{width:35px;}.l23{width:23px;}.l85{width:85px;}.l100{width:100px;}@media screen and (min-width:1280px){.l50{width:calc(50px*1.25);}.l70{width:calc(70px*1.25);}.l35{width:calc(35px*1.25);}.l23{width:calc(23px*1.25);}.l85{width:calc(85px*1.25);}.l100{width:calc(100px*1.25);}}</style>\n' +
        '<link rel="shortcut icon" href="/favicon.ico?v=1" type="image/x-icon" />\n' +
        '<link rel="apple-touch-icon" sizes="57x57" href="/img/m/ss-com-57x57.png"/>\n' +
        '<link rel="apple-touch-icon" sizes="72x72" href="/img/m/ss-com-72x72.png"/>\n' +
        '<link rel="apple-touch-icon" sizes="114x114" href="/img/m/ss-com-114x114.png"/>\n' +
        '<link rel="alternate" hreflang="lv" href="https://www.ss.lv/lv/real-estate/flats/riga/all/sell/" /><link rel="alternate" hreflang="ru" href="https://www.https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/" />\n' +
        '<script src="https://i.ss.lv/w_inc/js/main.ru.ss.js?v=563" type="text/javascript"></script>\n' +
        '<script async src="https://i.ss.lv/w_inc/adsbygoogle.js?v=563"></script>\n' +
        '<SCRIPT type="text/javascript">\n' +
        '<!--\n' +
        'LINK_MAIN_HOST = "https://www.ss.lv";var REGION = "";SS_Lang = "1";get_page_zoom();\n' +
        'if(window._setCookie){_setCookie("LG","ru",365,"www.ss.lv");};if(window._check_remote_id){_check_remote_id( "always", "https://www.ss.com" );}\n' +
        '-->\n' +
        '</SCRIPT>\n' +
        '</HEAD>\n' +
        '<BODY onLoad="window.defaultStatus=\'Объявления - SS.LV\';" bgcolor="#FFFFFF" class="body">\n' +
        '<div style="position:absolute;height:0px;width:0px;top:15px;left:10px;z-index:0;" id="left_banner" z-index="0"></div>\n' +
        '<div align=center>\n' +
        '\t<div id="main_table" class="page_header page_bg">\n' +
        '\t\t<div z-index="20" id="sslogin"></div>\n' +
        '\t\t<span class="page_header_head_ss"><a href="/" title="Объявления"><img class="page_header_logo_ss" src="https://i.ss.lv/img/p.gif" border="0" alt="Объявления"></a><h1>ОБЪЯВЛЕНИЯ</h1></span>\n' +
        '\t\t<span class="page_header_menu"><b class="menu_main"><a href="/ru/real-estate/flats/new/" class="a_menu" title="Подать Объявление">Подать Объявление</a></b>\n' +
        '<b class="menu_main"><a href="/ru/login/" class="a_menu" title="Мои Объявления">Мои Объявления</a></b>\n' +
        '<b class="menu_main"><a href="/ru/real-estate/flats/riga/search/" class="a_menu" title="Искать объявления">Поиск</a></b>\n' +
        '<span style="display:inline-block;text-align:left;"><b class="menu_main" style="padding-right:0px;"><a href="/ru/favorites/" class="a_menu" title="Закладки">Закладки</a></b><span id="mnu_fav_id"></span></span></span>\n' +
        '\t\t<span id="mails_status_menu"></span>\n' +
        '\t\t<span class="menu_lang"><a href="/lv/real-estate/flats/riga/all/sell/" class=a_menu title="Latviski">LV</a></span>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div align=center>\n' +
        '\t<div class="page_header">\n' +
        '\t\t<table border=0 cellpadding=0 cellspacing=0 width="100%"><tr><td>\n' +
        '\t\t\t<div style="float:left;">\n' +
        '\t\t\t<table id="page_main" border=0 cellpadding=0 cellspacing=0 width="100%"><tr><td valign=top><div class="top_head"><div style="float:left;padding-top:2px;"><h2 class="headtitle"><a href="/ru/real-estate/flats/"  title="Объявления Квартиры">Квартиры</a> / <a href="/ru/real-estate/flats/riga/"  title="Объявления Рига">Рига</a> / Все объявления / Продажа<!-- CAT_LIST --></h2></div><div style="float:right;"><select id="today_cnt_sl" onchange="go(this.value+\'\');"><option selected value="/ru/real-estate/flats/riga/sell/">Все объявления</option><option value="/ru/real-estate/flats/riga/today/sell/">Сегодня - 25</option><option value="/ru/real-estate/flats/riga/today-2/sell/">За 2 дня - 243</option><option value="/ru/real-estate/flats/riga/today-5/sell/">За 5 дней - 470</option></select></div></div><form id="filter_frm" name="filter_frm" action="/ru/real-estate/flats/riga/all/sell/filter/" method=post>\n' +
        '\t<table cellpadding=1 cellspacing=0 border=0 width="100%" bgcolor="#EEEEEE" style="margin-top:5px;" id="filter_tbl">\n' +
        '\t<tr><td style="padding-bottom:3px;"><table border=0 cellpadding=1 cellspacing=0><tr><td class="filter_name" valign=bottom nowrap>Цена:<br><span id="foptfld_8"><input id="f_o_8_min"  class="filter_txt l50"  type=text name="topt[8][min]" value="">-<input id="f_o_8_max"  class="filter_txt l50"  type=text name="topt[8][max]" value=""></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Комнат:<br><span id="foptfld_1"><select onchange="this.form.submit();" class="filter_sel l50" id="f_o_1" name="topt[1][min]"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="-">-</option></select>-<select onchange="this.form.submit();" class="filter_sel l50" id="f_o_1" name="topt[1][max]"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="-">-</option></select></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Площадь:<br><span id="foptfld_3"><input class="filter_txt l35" id="f_o_3_min" maxlength=5 type=text name="topt[3][min]" value="">-<input id="f_o_3_max" class="filter_txt l35" maxlength=5 type=text name="topt[3][max]" value=""></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Этаж:<br><span id="foptfld_4"><input class="filter_txt l23" id="f_o_4_min" maxlength=2 type=text name="topt[4][min]" value="">-<input id="f_o_4_max" class="filter_txt l23" maxlength=2 type=text name="topt[4][max]" value=""></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Серия:<br><span id="foptfld_6"><select class="filter_sel l85" id="f_o_6"  onchange="this.form.submit();" name="opt[6]"><option value=""></option><option value="67">103-я</option><option value="68">104-я</option><option value="69">119-я</option><option value="70">467-я</option><option value="71">602-я</option><option value="79">Дов. дом</option><option value="72">Лит. пр.</option><option value="74">М. сем.</option><option value="3616">Рекон.</option><option value="78">Спец. пр.</option><option value="75">Сталинка</option><option value="76">Хрущ.</option><option value="77">Ч. дом</option><option value="73">Чеш. пр.</option><option value="3596">Нов.</option></select></span>&nbsp;</td></tr></table></td><td width="100%" align="right" style="padding-top:14px;"><input class="b s12" style="padding-top:1px;padding-bottom:2px;" type=submit value="Искать"></td></tr></table><div class="filter_second_line_dv"><span class="filter_opt_dv">Режим:<br><noindex><select onchange="go(this[this.selectedIndex].value);" title="Выберите способ вывода объявлений" class="filter_sel w95">\n' +
        '\t\t\t\t<option selected value="/ru/real-estate/flats/riga/all/sell/">Список</option>\n' +
        '\t\t\t\t<option value="/ru/real-estate/flats/riga/all/sell/photo/">Альбом</option>\n' +
        '\t\t\t\t<option value="/ru/real-estate/flats/riga/all/sell/fDgQeF4S.html">Карта</option>\n' +
        '\t\t\t\t</select></noindex>\n' +
        '\t\t\t</span>\n' +
        '<span class="filter_opt_dv">Тип сделки:<br><select name=sid onchange="go(this[this.selectedIndex].value);" class="filter_sel l100"><option value="/ru/real-estate/flats/riga/all/">Все</option><option selected value="/ru/real-estate/flats/riga/all/sell/">Продажа</option><option value="/ru/real-estate/flats/riga/all/buy/">Покупка</option><option value="/ru/real-estate/flats/riga/all/hand_over/">Сдаю</option><option value="/ru/real-estate/flats/riga/all/remove/">Снимут</option><option value="/ru/real-estate/flats/riga/all/change/">Обмен</option><option value="/ru/real-estate/flats/riga/all/-other/">Разное</option></select></span>\n' +
        '<span class="filter_opt_dv">Район:<br>\n' +
        '<select class="filter_sel" style="min-width:50px;max-width:200px;" onchange="go( this[this.selectedIndex].value );">\n' +
        '<option value="/ru/real-estate/flats/riga/all/sell/">Все</option>\n' +
        '\n' +
        '<option value="/ru/real-estate/flats/riga/centre/sell/">Центр</option><option value="/ru/real-estate/flats/riga/agenskalns/sell/">Агенскалнс</option><option value="/ru/real-estate/flats/riga/aplokciems/sell/">Аплокциемс</option><option value="/ru/real-estate/flats/riga/bergi/sell/">Берги</option><option value="/ru/real-estate/flats/riga/bierini/sell/">Биерини</option><option value="/ru/real-estate/flats/riga/bolderaya/sell/">Болдерая</option><option value="/ru/real-estate/flats/riga/vecaki/sell/">Вецаки</option><option value="/ru/real-estate/flats/riga/vecdaugava/sell/">Вецдаугава</option><option value="/ru/real-estate/flats/riga/vecmilgravis/sell/">Вецмилгравис</option><option value="/ru/real-estate/flats/riga/vecriga/sell/">Вецрига (Старая Рига)</option><option value="/ru/real-estate/flats/riga/voleri/sell/">Волери</option><option value="/ru/real-estate/flats/riga/grizinkalns/sell/">Гризинькалнс</option><option value="/ru/real-estate/flats/riga/darzciems/sell/">Дарзциемс</option><option value="/ru/real-estate/flats/riga/daugavgriva/sell/">Даугавгрива</option><option value="/ru/real-estate/flats/riga/dzeguzhkalns/sell/">Дзегужкалнс (Дзирциемс)</option><option value="/ru/real-estate/flats/riga/ziepniekkalns/sell/">Зиепниеккалнс</option><option value="/ru/real-estate/flats/riga/zolitude/sell/">Золитуде</option><option value="/ru/real-estate/flats/riga/ilguciems/sell/">Ильгюциемс</option><option value="/ru/real-estate/flats/riga/imanta/sell/">Иманта</option><option value="/ru/real-estate/flats/riga/katlakalns/sell/">Катлакалнс</option><option value="/ru/real-estate/flats/riga/kengarags/sell/">Кенгарагс</option><option value="/ru/real-estate/flats/riga/kipsala/sell/">Кипсала</option><option value="/ru/real-estate/flats/riga/kleisti/sell/">Клейсти</option><option value="/ru/real-estate/flats/riga/kliversala/sell/">Кливерсала</option><option value="/ru/real-estate/flats/riga/kundzinsala/sell/">Кундзиньсала</option><option value="/ru/real-estate/flats/riga/mangali/sell/">Мангали</option><option value="/ru/real-estate/flats/riga/mezhapark/sell/">Межапарк</option><option value="/ru/real-estate/flats/riga/mezhciems/sell/">Межциемс</option><option value="/ru/real-estate/flats/riga/plyavnieki/sell/">Плявниеки</option><option value="/ru/real-estate/flats/riga/purvciems/sell/">Пурвциемс</option><option value="/ru/real-estate/flats/riga/krasta-st-area/sell/">р-н ул.Краста</option><option value="/ru/real-estate/flats/riga/maskavas-priekshpilseta/sell/">р-он ул. Маскавас</option><option value="/ru/real-estate/flats/riga/sarkandaugava/sell/">Саркандаугава</option><option value="/ru/real-estate/flats/riga/teika/sell/">Тейка</option><option value="/ru/real-estate/flats/riga/tornjakalns/sell/">Торнякалнс</option><option value="/ru/real-estate/flats/riga/chiekurkalns/sell/">Чиекуркалнс</option><option value="/ru/real-estate/flats/riga/shampeteris-pleskodale/sell/">Шампетерис-Плескодале</option><option value="/ru/real-estate/flats/riga/shkirotava/sell/">Шкиротава</option><option value="/ru/real-estate/flats/riga/yugla/sell/">Югла</option><option value="/ru/real-estate/flats/riga/jaunciems/sell/">Яунциемс</option><option value="/ru/real-estate/flats/riga/other/sell/">Другой</option>\n' +
        '</select></span>\n' +
        '<span class="filter_opt_dv" style="padding-right:5px;">Улица:<br><input id="f_o_11" class="filter_txt l70" maxlength=70 type=text name="topt[11]" value=""></span></div>\n' +
        '<table align=center cellpadding=2 cellspacing=0 border=0 width="100%">\n' +
        '<tr id="head_line">\n' +
        '\t<td class="msg_column" colspan=3 width="70%">\n' +
        '\t<span style="float:left;">&nbsp;Объявления\n' +
        '</span>\n' +
        '<span align=right class="msg_column" style="float:right;text-align:right;padding-right:3px;">\n' +
        '<noindex>\n' +
        '\t<a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4S.html"\n' +
        '\t\tclass=a19>дата</a></noindex></span>\n' +
        '</td>\n' +
        '<td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4bEFV8FQ==.html" class=a18 title="">Район</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4SelM=.html" class=a18 title="">К.</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4QelM=.html" class=a18 title="">m2</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4XelM=.html" class=a18 title="">Этаж</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4VelM=.html" class=a18 title="">Серия</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/riga/all/sell/fDgSeF4belM=.html" class=a18 title="">Цена</a></noindex></td></tr><tr id="tr_47427837"><td class="msga2 pp0"><input type=checkbox id="c47427837" name="mid[]" value="47427837_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/adkci.html" id="im47427837"><img src="https://i.ss.lv/gallery/4/683/170606/34121100.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JThEJUFEJTg5JTkwJTk4JUJGJUE1JThFciVBOCU4QiVBOSU4MCU4RSU5OHglQTklOER3JUEwJTg5JUE1JTgwJThB|XuPZgCtXAp" id="dm_47427837" class="am" href="/msg/ru/real-estate/flats/riga/centre/adkci.html">Владелец продает квартиру в здании проектированном знаменитом ар</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Авоту 4</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>27</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>44,310  €</td></tr>\n' +
        '<tr id="tr_47687131"><td class="msga2 pp0"><input type=checkbox id="c47687131" name="mid[]" value="47687131_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/ffijj.html" id="im47687131"><img src="https://i.ss.lv/gallery/4/733/183057/36611369.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk4bW4lOUUlN0YlRjAlOTRrZiVBMCU4MSVBOCU5M2lmJTlEJTgzJUE5JTk5ZWYlOTglN0UlQTQ=|c55hNt" id="dm_47687131" class="am" href="/msg/ru/real-estate/flats/riga/centre/ffijj.html">Īpašnieks pārdod dzīvokli renovētā namā Rīgas centrā. Skats no d</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Авоту 4</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>33</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>55,832  €</td></tr>\n' +
        '<tr id="tr_49734246"><td class="msga2 pp0"><input type=checkbox id="c49734246" name="mid[]" value="49734246_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/bgcfg.html" id="im49734246"><img src="https://i.ss.lv/gallery/4/718/179427/35885394.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTkyJTgwJUE5ZiU5MSU3QyU4MSVERCU3RiVBQmYlOEJ0JTgxJTk3JTgwJUE2aCU4QnQlODQlOTElODMlQTVkJThB|aNu4ZCM" id="dm_49734246" class="am" href="/msg/ru/real-estate/flats/riga/centre/bgcfg.html">Pārdošanai tiek piedāvāts gaišs un ļoti silts 1-istabas dzīvokli</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Лугажу 6</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>32</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>Лит. пр.</td><td class="msga2-o pp6" nowrap c=1>30,950  €</td></tr>\n' +
        '<tr id="tr_49603585"><td class="msga2 pp0"><input type=checkbox id="c49603585" name="mid[]" value="49603585_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/eijmk.html" id="im49603585"><img src="https://i.ss.lv/gallery/4/733/183103/36620410.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="aiVBRW0lN0RzJUNGJTlDayVBQWYlN0VzJThBJTlCayVBOW8lODByJTgzJUEwZSVBOWY=|5y6MASk" id="dm_49603585" class="am" href="/msg/ru/real-estate/flats/riga/centre/eijmk.html">Dizainera veidota apdare, pilnībā mēbelēts, stilīgs 2-līmeņu man</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Садовникова 23</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>77</td><td class="msga2-o pp6" nowrap c=1>5/6</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>175,000  €</td></tr>\n' +
        '<tr id="tr_49602979"><td class="msga2 pp0"><input type=checkbox id="c49602979" name="mid[]" value="49602979_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/bfbpe.html" id="im49602979"><img src="https://i.ss.lv/gallery/4/785/196201/39240193.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="eGslOUZjeiVCMyVBNnlnJTk4ZHpuJUE1eWYlQTFmeWclQUFzZiU5OA==|C6h3H7u" id="dm_49602979" class="am" href="/msg/ru/real-estate/flats/riga/centre/bfbpe.html">Īpašnieks pārdod 3 - līmeņu dzīvokli renovētā pagalma mājā pie T</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Артилерияс 6A</td><td class="msga2-o pp6" nowrap c=1>4</td><td class="msga2-o pp6" nowrap c=1>140</td><td class="msga2-o pp6" nowrap c=1>2/3</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>330,000  €</td></tr>\n' +
        '<tr id="tr_49889514"><td class="msga2 pp0"><input type=checkbox id="c49889514" name="mid[]" value="49889514_1090_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/vecmilgravis/ajdkl.html" id="im49889514"><img src="https://i.ss.lv/gallery/5/811/202557/40511352.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTgwJTlEJTdGJTlEJUFDJUEwJUM5JTk5JTgzJTk3JUFCJTlGJTgyJTk5JTdFJTk5JUFGJUEyJTgwJUEwJTdEJTk3JUFBJTlCJTdE|MhMezk" id="dm_49889514" class="am" href="/msg/ru/real-estate/flats/riga/vecmilgravis/ajdkl.html">Продаётся 2-комнатная квартира в тихом, зелёном районе, недалеко</a></div></td><td class="msga2-o pp6" nowrap c=1>Вецмилгравис<br>Ринужу 11</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>52</td><td class="msga2-o pp6" nowrap c=1>3/5</td><td class="msga2-o pp6" nowrap c=1>Спец. пр.</td><td class="msga2-o pp6" nowrap c=1>49,000  €</td></tr>\n' +
        '<tr id="tr_49895392"><td class="msga2 pp0"><input type=checkbox id="c49895392" name="mid[]" value="49895392_1104_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/sarkandaugava/hgkbk.html" id="im49895392"><img src="https://i.ss.lv/gallery/5/811/202677/40535304.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTdDJTkxJUE1ZSU4NCVBMyVENXQlOTclQTZiJTg0JTlFJTg5JTdDJTkyJUE3YiU4NyVBMyU4OXglOTElQTRi|Cat2SkY" id="dm_49895392" class="am" href="/msg/ru/real-estate/flats/riga/sarkandaugava/hgkbk.html">Все удобства – душ, туалет, центральное отопление, горячая и хол</a></div></td><td class="msga2-o pp6" nowrap c=1>Саркандаугава<br>Софияс 6</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>30</td><td class="msga2-o pp6" nowrap c=1>1/5</td><td class="msga2-o pp6" nowrap c=1>103-я</td><td class="msga2-o pp6" nowrap c=1>12,999  €</td></tr>\n' +
        '<tr id="tr_49122130"><td class="msga2 pp0"><input type=checkbox id="c49122130" name="mid[]" value="49122130_1120_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/tornjakalns/agood.html" id="im49122130"><img src="https://i.ss.lv/gallery/5/809/202080/40415946.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlEJTkzJUFDJTk3JTg0JTlEJUUzJTkyJUE3JTlCJThDJTk4JUEwJTlBJUFDJTlFJTg3JTlBJTlDJTk5JUFDJTlD|gaseSh" id="dm_49122130" class="am" href="/msg/ru/real-estate/flats/riga/tornjakalns/agood.html">Pārdod plašu trīs istabu dzīvokli Torņkalnā. \n' +
        '\n' +
        'Dzīvoklis sastā</a></div></td><td class="msga2-o pp6" nowrap c=1>Торнякалнс<br>Баускас 8</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>70</td><td class="msga2-o pp6" nowrap c=1>3/3</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>88,700  €</td></tr>\n' +
        '<tr id="tr_49895270"><td class="msga2 pp0"><input type=checkbox id="c49895270" name="mid[]" value="49895270_1114_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/aplokciems/ajgix.html" id="im49895270"><img src="https://i.ss.lv/gallery/4/797/199138/39827420.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUFDJTk3YnolOTMlODIlQjUlQUIlOURiJTdGJTk2JTdGbCVBQyVBMGklN0QlOTIlODBpJUFCJTk3YXY=|zg1FaM9" id="dm_49895270" class="am" href="/msg/ru/real-estate/flats/riga/aplokciems/ajgix.html">Dzīvokļu rezervācija un tirdzniecība jaunā daudzdzīvokļu majā “H</a></div></td><td class="msga2-o pp6" nowrap c=1>Аплокциемс<br>Крапес 8</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>45</td><td class="msga2-o pp6" nowrap c=1>2/3</td><td class="msga2-o pp6" nowrap c=1>Нов.</td><td class="msga2-o pp6" nowrap c=1>75,950  €</td></tr>\n' +
        '<tr id="tr_49828012"><td class="msga2 pp0"><input type=checkbox id="c49828012" name="mid[]" value="49828012_1114_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/aplokciems/ajhxi.html" id="im49828012"><img src="https://i.ss.lv/gallery/5/811/202673/40534473.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="eiU5NiVBMyU5OCU4NCU5RCVENCU5RmxkJTgxJTlCJUE0JTk3JTg0JUExJTkwJUE1Z2Z4JTk3JUEyJTk0JTgy|HfrdRhXn63" id="dm_49828012" class="am" href="/msg/ru/real-estate/flats/riga/aplokciems/ajhxi.html">Продажа от застройщика в проекте "Harmonija". \n' +
        '"Harmonija" - эт</a></div></td><td class="msga2-o pp6" nowrap c=1>Аплокциемс<br>Аплокциема 8</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>30</td><td class="msga2-o pp6" nowrap c=1>2/3</td><td class="msga2-o pp6" nowrap c=1>Нов.</td><td class="msga2-o pp6" nowrap c=1>48,900  €</td></tr>\n' +
        '<tr id="tr_49459158"><td class="msga2 pp0"><input type=checkbox id="c49459158" name="mid[]" value="49459158_1111_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/darzciems/gfhpp.html" id="im49459158"><img src="https://i.ss.lv/gallery/5/811/202671/40534151.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUIwJTdGaSVBNG8lODQlQzBkJUFFeGglQUJuJTg0JTdEZiVBQyU3Q2clQTlpJTg3dGMlQTg=|xF5s9SD3" id="dm_49459158" class="am" href="/msg/ru/real-estate/flats/riga/darzciems/gfhpp.html">Pārdodam klusu dzīvokli labā koka mājā starp jaunbūvēm. Sētā ir </a></div></td><td class="msga2-o pp6" nowrap c=1>Дарзциемс<br>Стопиню 12</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>25</td><td class="msga2-o pp6" nowrap c=1>1/2</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>15,900  €</td></tr>\n' +
        '<tr id="tr_49868658"><td class="msga2 pp0"><input type=checkbox id="c49868658" name="mid[]" value="49868658_1091_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/vecriga/bdddb.html" id="im49868658"><img src="https://i.ss.lv/gallery/5/809/202124/40424684.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUE3dGIlOUZoJUFBJUI1JUFCeSVBOXRrJUEyZiVBNHElQUF6JUE5dmIlQTJmJUE0aQ==|rB2n6t9zD" id="dm_49868658" class="am" href="/msg/ru/real-estate/flats/riga/vecriga/bdddb.html">Īpašnieks pārdod dzīvokli Vecrīgā pie Zviedru vārtiem, pirmskara</a></div></td><td class="msga2-o pp6" nowrap c=1>Вецрига<br>Алдару 11</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>43</td><td class="msga2-o pp6" nowrap c=1>1/3</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>110,000  €</td></tr>\n' +
        '<tr id="tr_49895153"><td class="msga2 pp0"><input type=checkbox id="c49895153" name="mid[]" value="49895153_1090_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/vecmilgravis/delib.html" id="im49895153"><img src="https://i.ss.lv/gallery/5/811/202671/40534191.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk3JUE5JTk4JTk4JTlFJTg0JUNBZSU5QyU5MyVBOCU5NiU5NCU5OCU3RiU3RmklOUIlOTYlQTclOTMlOTIlOTglN0UlN0U=|brcahNN4f" id="dm_49895153" class="am" href="/msg/ru/real-estate/flats/riga/vecmilgravis/delib.html">Добротный дом. Отличное место. Хорошая планировка. \n' +
        'Звоните, до</a></div></td><td class="msga2-o pp6" nowrap c=1>Вецмилгравис<br>Эммас 30</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>63</td><td class="msga2-o pp6" nowrap c=1>2/4</td><td class="msga2-o pp6" nowrap c=1>Сталинка</td><td class="msga2-o pp6" nowrap c=1>41,800  €</td></tr>\n' +
        '<tr id="tr_49696144"><td class="msga2 pp0"><input type=checkbox id="c49696144" name="mid[]" value="49696144_5070_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/maskavas-priekshpilseta/aggxd.html" id="im49696144"><img src="https://i.ss.lv/gallery/4/784/195768/39153578.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUE4JTg4JThEJTk3dSVGMGQlOEUlOUUlQTYlQUIlODUlOEElOUF0JUE2aCU4OSU5QiVBMiVBNSU4MCU4QSU5MQ==|rPZaCt3Yfr" id="dm_49696144" class="am" href="/msg/ru/real-estate/flats/riga/maskavas-priekshpilseta/aggxd.html">Īpašnieks pārdod modernu 3 istabu dzīvokli ar zemi īpašumā, kurš</a></div></td><td class="msga2-o pp6" nowrap c=1>р-он ул. Маскавас<br>Даугавпилс 49</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>57</td><td class="msga2-o pp6" nowrap c=1>3/5</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>60,000  €</td></tr>\n' +
        '<tr id="tr_49530058"><td class="msga2 pp0"><input type=checkbox id="c49530058" name="mid[]" value="49530058_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/eoinp.html" id="im49530058"><img src="https://i.ss.lv/gallery/3/559/139749/27949762.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUE1JTg3YWYlOUF4JUFFJUYwJTg1ZmglOUQlN0UlQUUlQTglODlhaiU5OCU3QiVBQiVBNCU4QWFhJTk0|tT11dFy" id="dm_49530058" class="am" href="/msg/ru/real-estate/flats/riga/centre/eoinp.html">Īpašnieks pārdod dzīvokli ar āra terasi ar pēlēko apdari jaunbūv</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Кунгу 25</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>110</td><td class="msga2-o pp6" nowrap c=1>6/6</td><td class="msga2-o pp6" nowrap c=1>Нов.</td><td class="msga2-o pp6" nowrap c=1>159,990  €</td></tr>\n' +
        '<tr id="tr_48722161"><td class="msga2 pp0"><input type=checkbox id="c48722161" name="mid[]" value="48722161_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/aexik.html" id="im48722161"><img src="https://i.ss.lv/gallery/4/632/157947/31589272.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk5cyVBMmclODhpJUVBJUFBJTk4JTk0dCVBN2glOEVuJUE3JUFFJTlBJTk2dyVBMmQlODVoJTlF|bAr1U8nyb" id="dm_48722161" class="am" href="/msg/ru/real-estate/flats/riga/centre/aexik.html">Pie Dailes Teātra Tev ir iespēja iegādāties viesmīlīgu divistabu</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Бривибас 84</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>72</td><td class="msga2-o pp6" nowrap c=1>5/6</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>119,000  €</td></tr>\n' +
        '<tr id="tr_48084170"><td class="msga2 pp0"><input type=checkbox id="c48084170" name="mid[]" value="48084170_1102_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/plyavnieki/elfgn.html" id="im48084170"><img src="https://i.ss.lv/gallery/4/674/168394/33678729.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTg3aSU4RHolQTYlRDAlODNoJThFcSVBNCU4OSU4OGwlOEJyJUFCJTg0JThBZiU4RXQ=|R3YArT" id="dm_48084170" class="am" href="/msg/ru/real-estate/flats/riga/plyavnieki/elfgn.html">Продаем квартиру на улице Лубанас 56, 4-ый этаж 9-ти этажного до</a></div></td><td class="msga2-o pp6" nowrap c=1>Плявниеки<br>Лубанас 56</td><td class="msga2-o pp6" nowrap c=1>4</td><td class="msga2-o pp6" nowrap c=1>80</td><td class="msga2-o pp6" nowrap c=1>4/9</td><td class="msga2-o pp6" nowrap c=1>467-я</td><td class="msga2-o pp6" nowrap c=1>67,000  €</td></tr>\n' +
        '<tr id="tr_49570545"><td class="msga2 pp0"><input type=checkbox id="c49570545" name="mid[]" value="49570545_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/aakjj.html" id="im49570545"><img src="https://i.ss.lv/gallery/5/811/202608/40521468.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="cnclN0QlQjFtJUEweSVDMXYlQUVnJTlBcnYlN0IlQjBtJTlFcXh2JUE4aCU5OHF1|AEEx5h" id="dm_49570545" class="am" href="/msg/ru/real-estate/flats/riga/centre/aakjj.html">Pārdod 2-istabu dzīvokli centrā, Zvaigžņu ielā 31. Dzīvoklis sas</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Звайгжню 31</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>38</td><td class="msga2-o pp6" nowrap c=1>3/3</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>22,500  €</td></tr>\n' +
        '<tr id="tr_49689943"><td class="msga2 pp0"><input type=checkbox id="c49689943" name="mid[]" value="49689943_1103_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/purvciems/afbnx.html" id="im49689943"><img src="https://i.ss.lv/gallery/5/811/202667/40533270.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="dyU5RSU4Nm4lREUlOUN3JTlGJTg3ZyU5NyU5RXQlQTQlODNqJTk1JTlGeCVBNyU4Qw==|BnS6bk" id="dm_49689943" class="am" href="/msg/ru/real-estate/flats/riga/purvciems/afbnx.html">Продается 3-комнатная квартира только после косметического ремон</a></div></td><td class="msga2-o pp6" nowrap c=1>Пурвциемс<br>Дзелзавас 82</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>61</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>Лит. пр.</td><td class="msga2-o pp6" nowrap c=1>63,000  €</td></tr>\n' +
        '<tr id="tr_49634966"><td class="msga2 pp0"><input type=checkbox id="c49634966" name="mid[]" value="49634966_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/ggpod.html" id="im49634966"><img src="https://i.ss.lv/gallery/4/790/197435/39486876.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk3JUEyJUFCJTkyaSU5RiVGMCU3RiU4RiU5NyU5NiU5RSVBQSU5OGYlOUUlQTQlODclOEMlOTclOTYlQTIlQTglOTFm|fmxa6htNYf" id="dm_49634966" class="am" href="/msg/ru/real-estate/flats/riga/centre/ggpod.html">Cenā autostāvvieta. \n' +
        'Saulains dzīvoklis rekonstruētā mājā, 5 is</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Валдемара 37</td><td class="msga2-o pp6" nowrap c=1>5</td><td class="msga2-o pp6" nowrap c=1>129</td><td class="msga2-o pp6" nowrap c=1>6/6</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>320,168  €</td></tr>\n' +
        '<tr id="tr_47253842"><td class="msga2 pp0"><input type=checkbox id="c47253842" name="mid[]" value="47253842_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/bxbeg.html" id="im47253842"><img src="https://i.ss.lv/gallery/4/764/190917/38183371.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUFBJThEZiU4QSU5OSVBOSVBRCU4NiU5QSVBQSU4OGQlOEIlOUQlQTJnJTg1JTlEJUFDJTg5YyU4RSU5NiVBMmE=|yX3Yfr1Ud" id="dm_47253842" class="am" href="/msg/ru/real-estate/flats/riga/centre/bxbeg.html">Cenā autostāvvieta. \n' +
        'Saulains dzīvoklis rekonstruētā mājā. \n' +
        'Dz</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Валдемара 37</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>109</td><td class="msga2-o pp6" nowrap c=1>5/6</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>275,301  €</td></tr>\n' +
        '<tr id="tr_49894863"><td class="msga2 pp0"><input type=checkbox id="c49894863" name="mid[]" value="49894863_5070_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/maskavas-priekshpilseta/choce.html" id="im49894863"><img src="https://i.ss.lv/gallery/5/811/202666/40533099.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="eCU5OSU5OXklQUElQTclQURlbnglOTMlOTd4JUE1JUFBZGRwJTgwJTlCJTk2diVBMiVBNWE=|GbfEru148" id="dm_49894863" class="am" href="/msg/ru/real-estate/flats/riga/maskavas-priekshpilseta/choce.html">Pārdod vienistabas dzīvokli Maskavas forštatē, logi vērsti gan u</a></div></td><td class="msga2-o pp6" nowrap c=1>р-он ул. Маскавас<br>Екабпилс 16</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>23</td><td class="msga2-o pp6" nowrap c=1>3/3</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>17,900  €</td></tr>\n' +
        '<tr id="tr_49894854"><td class="msga2 pp0"><input type=checkbox id="c49894854" name="mid[]" value="49894854_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/ffnkj.html" id="im49894854"><img src="https://i.ss.lv/gallery/5/811/202666/40533060.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlFZiU5NCU3QyVBMCU4RSVBMyVCMSU5NXglQTQlOEUlQTVpJTlBJTdCJUE1JThDJUE0ZiU5QXMlQTElODglOURl|m5dCnX" id="dm_49894854" class="am" href="/msg/ru/real-estate/flats/riga/centre/ffnkj.html">Pārdod dzīvokli Rīgas centrā renovētā ēkā, kurā šobrīd vēl tikai</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Лиенес 24</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>26</td><td class="msga2-o pp6" nowrap c=1>1/4</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>41,000  €</td></tr>\n' +
        '<tr id="tr_49395576"><td class="msga2 pp0"><input type=checkbox id="c49395576" name="mid[]" value="49395576_1100_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/mezhciems/cdhnf.html" id="im49395576"><img src="https://i.ss.lv/gallery/5/810/202287/40457345.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="dGMlOTR6JTlEJTg0JUIwJTk0eGwlOUF5JUE0JTg2ayU5NnNlJTk3diU5QiU4OWQlOTNz|C3bAkT4c" id="dm_49395576" class="am" href="/msg/ru/real-estate/flats/riga/mezhciems/cdhnf.html">Rus/lv. Большая квартира, 3 изолированные спальни, 200 м. до лес</a></div></td><td class="msga2-o pp6" nowrap c=1>Межциемс<br>Бикерниеку 160/7</td><td class="msga2-o pp6" nowrap c=1>4</td><td class="msga2-o pp6" nowrap c=1>88</td><td class="msga2-o pp6" nowrap c=1>1/5</td><td class="msga2-o pp6" nowrap c=1>Нов.</td><td class="msga2-o pp6" nowrap c=1>156,700  €</td></tr>\n' +
        '<tr id="tr_49894221"><td class="msga2 pp0"><input type=checkbox id="c49894221" name="mid[]" value="49894221_1096_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/imanta/aapdk.html" id="im49894221"><img src="https://i.ss.lv/gallery/5/811/202661/40532075.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUE2ciVBMCU4MiU4NyU4NmwlRjFzJUEzJTdCJTg5JThEbCVBNXIlQTAlN0QlODclOERoJUE1dyU5RCU3QiU4MA==|uBmKPU5" id="dm_49894221" class="am" href="/msg/ru/real-estate/flats/riga/imanta/aapdk.html">Īpašnieks pārdod 3-istabu dzīvokli. \n' +
        '\n' +
        'Kvalitatīvs kapitāls rem</a></div></td><td class="msga2-o pp6" nowrap c=1>Иманта<br>Анниньмуйжас 54</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>63</td><td class="msga2-o pp6" nowrap c=1>4/9</td><td class="msga2-o pp6" nowrap c=1>602-я</td><td class="msga2-o pp6" nowrap c=1>84,000  €</td></tr>\n' +
        '<tr id="tr_49030077"><td class="msga2 pp0"><input type=checkbox id="c49030077" name="mid[]" value="49030077_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/afcde.html" id="im49030077"><img src="https://i.ss.lv/gallery/4/759/189695/37938896.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTdGJTlCdXolQzklQUFobyU3RCU5N3UlN0YlODAlQUVqaiU3RSU5QXN6JTdEJUE5Yw==|KdCGMy36" id="dm_49030077" class="am" href="/msg/ru/real-estate/flats/riga/centre/afcde.html">Cenā autostāvvieta, 5 istabas ar pilnu apdari kapitāli renovētā </a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Валдемара 37</td><td class="msga2-o pp6" nowrap c=1>5</td><td class="msga2-o pp6" nowrap c=1>129</td><td class="msga2-o pp6" nowrap c=1>6/6</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>320,168  €</td></tr>\n' +
        '<tr id="tr_49889106"><td class="msga2 pp0"><input type=checkbox id="c49889106" name="mid[]" value="49889106_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/agfdh.html" id="im49889106"><img src="https://i.ss.lv/gallery/4/759/189695/37938825.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTgyeCU5RCVBMyVGMSU4NWklODdzJTlFJUEyJUFEJTg3aSU4NXUlOUUlQTYlQTUlODdkJTdFcQ==|NAkpuT4" id="dm_49889106" class="am" href="/msg/ru/real-estate/flats/riga/centre/agfdh.html">Cenā autostāvvieta, dzīvoklis kapitāli renovētā, elegantā arhite</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Валдемара 37</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>109</td><td class="msga2-o pp6" nowrap c=1>5/6</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>275,301  €</td></tr>\n' +
        '<tr id="tr_49893976"><td class="msga2 pp0"><input type=checkbox id="c49893976" name="mid[]" value="49893976_1093_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/ziepniekkalns/hgjko.html" id="im49893976"><img src="https://i.ss.lv/gallery/5/811/202654/40530707.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTg5dyU5QiU5RGZlJUQwdiU5RCU5RGJoJThEdiU5QSVBNmVlJTg1eiU5NyVBMmFlJTg0|TEgm15" id="dm_49893976" class="am" href="/msg/ru/real-estate/flats/riga/ziepniekkalns/hgjko.html">Квартира освобождена. Новые пластиковые окна (2021). Заменены вс</a></div></td><td class="msga2-o pp6" nowrap c=1>Зиепниеккалнс<br>Вадакстес 20</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>36</td><td class="msga2-o pp6" nowrap c=1>2/5</td><td class="msga2-o pp6" nowrap c=1>Хрущ.</td><td class="msga2-o pp6" nowrap c=1>29,000  €</td></tr>\n' +
        '<tr id="tr_49689021"><td class="msga2 pp0"><input type=checkbox id="c49689021" name="mid[]" value="49689021_1102_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/plyavnieki/bidnf.html" id="im49689021"><img src="https://i.ss.lv/gallery/4/794/198473/39694530.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTdFcSU3QiVBMCVBRCVBQyVDN2p4JUE3JUFEJUIxJTdFcnUlQTYlQTclQUIlN0RucyVBMCVBNCVBOSU3Qg==|K9Cnty" id="dm_49689021" class="am" href="/msg/ru/real-estate/flats/riga/plyavnieki/bidnf.html">Pārdod 3. istabu dzīvokli pie Pļavnieku pamatskolas. Dzīvoklis l</a></div></td><td class="msga2-o pp6" nowrap c=1>Плявниеки<br>Праулиенас 10</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>63</td><td class="msga2-o pp6" nowrap c=1>6/9</td><td class="msga2-o pp6" nowrap c=1>602-я</td><td class="msga2-o pp6" nowrap c=1>75,000  €</td></tr>\n' +
        '<tr id="tr_49755845"><td class="msga2 pp0"><input type=checkbox id="c49755845" name="mid[]" value="49755845_1106_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/riga/centre/aepxp.html" id="im49755845"><img src="https://i.ss.lv/gallery/4/717/179092/35818336.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTgwJTkyJTlBdyVBOSU3RSVCMyU5NyU3QyU5OCU5QXQlQTIlODJoJTlDJTdDJTk3JTk4eiVBMyU4MWglOTklN0MlOTU=|GbeDpN7f" id="dm_49755845" class="am" href="/msg/ru/real-estate/flats/riga/centre/aepxp.html">Pārdod vienistabas dzīvokli labā stāvoklī pirmskara mājā ar visā</a></div></td><td class="msga2-o pp6" nowrap c=1>центр<br>Валдемара 159</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>35</td><td class="msga2-o pp6" nowrap c=1>2/5</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>45,900  €</td></tr>\n' +
        '\n' +
        '\t<tr id="tr_bnr_712" style="display:none;"><td colspan=12 align=center>\n' +
        '\t\n' +
        '\t<div id="div_bnr_712" align=center></div>\n' +
        '\t<script>load_script_async("/w_inc/reklama.728.php?441||14195||"+escape(document.referrer)+"||1");</script>\n' +
        '\t\n' +
        '\t</td></tr>\n' +
        '\t</table><br><table border=0 cellpasdding=0 cellspacing=0 width="100%"><tr><td width=24 nowrap></td><td><div align=center class=td2 nowrap><a name="nav_id" rel="prev" class="navi" href="/ru/real-estate/flats/riga/all/sell/page70.html"><img src="https://i.ss.lv/img/s_left.png" border=0 width=9 height=5 style="padding-bottom:2px;"> Предыдущие</a> &nbsp;&nbsp; <button onclick="return false;" class=navia>1</button> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page2.html">2</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page3.html">3</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page4.html">4</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page5.html">5</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page6.html">6</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page7.html">7</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page8.html">8</a> <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page9.html">9</a> ..  &nbsp;&nbsp; <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/riga/all/sell/page2.html">Следующие <img src="https://i.ss.lv/img/s_right.png" border=0 width=9 height=5 style="padding-bottom:2px;"></a></div><br></td><td width=24 nowrap valign=top><script>if(document.documentElement &&document.documentElement.clientHeight &&document.documentElement.offsetHeight && ( document.documentElement.offsetHeight-document.documentElement.clientHeight )>30){D.write( \'<img src="https://i.ss.lv/img/up.png" width=24 height=24 border=0 onclick="window.scrollTo(0,0);return false;" style="opacity:0.3;cursor:pointer;position:absolute;" onmouseover="this.style.opacity=1;" onmouseout="this.style.opacity=0.3;" title="Наверх">\'); }</script></td></table>\n' +
        '\t<table border=0 width="100%" cellpadding=2 cellspacing=0><tr>\n' +
        '\t<td width="40%" nowrap title="Показать выбранные объявления" class=td7><noindex><a rel="nofollow" id="show_selected_a" class=td15 href="/ru/show-selected/fDgReF4S.html" onclick="if( !check_selected_msg( \'У вас не выбрано ни одного объявления.\' ) ){event.returnValue=false;return false;}">Показать выбранные объявления</a></noindex> <span id="sel_cnt_obj" class=td15></span></td>\n' +
        '\t<td width="20%" align=center rowspan=4 valign=center><input type=button class=b onclick="go(\'/ru/real-estate/flats/riga/new/\' );" value="Разместить объявление"></td>\n' +
        '\t<td width="40%" align=right class=td7>&nbsp;</td>\n' +
        '\t</tr>\n' +
        '\t\n' +
        '\t<tr><td class=td7><noindex><a rel="nofollow" id="a_fav_sel" style="display:none;" class="a9a" href="javascript:;" onclick="af(-1,\'ru\')">Добавить выбранные в закладки</a></noindex></td></tr>\n' +
        '\t<tr><td class=td7 valign=top><a id="clear_selected_a" style="display:none;" class=a9a href="javascript:;" onclick="dsl(1);return false;">Снять выделение</a></td></tr>\n' +
        '\t</table><br>\n' +
        '\t\n' +
        '\t\n' +
        '\t\n' +
        '\t\n' +
        '\t<br></form>\n' +
        '\t<iframe width=0 height=0 frameborder=0 style="display:none" id="ss_mframe" name="ss_mframe"></iframe></td></tr></table>\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<div style="float:left;"><div id="page_right"><div id="ads_sys_div1"></div><script type="text/javascript">load_script_async( "/w_inc/reklama.php?1529|0|14195|"+Math.random()+"|1|"+escape(document.referrer)+"|1" );</script></div></div>\n' +
        '\t\t</td></tr></table>\n' +
        '\t\t\n' +
        '\t\t<div id="page_footer"><a class="a1" href="/ru/rules/">Правила</a>  &nbsp;|&nbsp;  <a class="a1" href="/ru/feedback/">Связь с редактором</a>  &nbsp;|&nbsp;  <a class="a1" href="/ru/reklama/">Реклама</a>  &nbsp;|&nbsp;  <a class="a1" href="/ru/api/">Сотрудничество</a> &nbsp;|&nbsp; <a href="/ru/real-estate/flats/riga/sell/rss/" class=a1 target="_blank">RSS</a> &nbsp;|&nbsp; Объявления © ss sia 2000</div>\n' +
        '\n' +
        '\t</div>\n' +
        '</div>\n' +
        '\n' +
        '<script type="text/javascript">\n' +
        '<!--\n' +
        'if( window.add_link_to_selection && document.body.addEventListener ){document.body.addEventListener( "copy", add_link_to_selection );}ads_line_init(0,0);load_script_async("/w_inc/set.cookie.php?a=1&lg=1");window.onscroll=scbnrtop;window.onresize = new Function ( "scbnrtop();" );\n' +
        'load_script_async( "https://i.ss.lv/w_inc/js/msg.count-ss.js?"+new Date() );\n' +
        'load_script_async( "/w_inc/chk.php?mm=1&c=14195&db=ru&mode=1&g=1&a=1" );\n' +
        '-->\n' +
        '</script>\n' +
        '<div style="display:none;">\n' +
        '<script>document.write( \'<img src="/counter/index.php?c=14195&m=1&\'+new Date()+Math.random()+\'" width=1 height=1 border=0 alt="">\' );</script>\n' +
        '\n' +
        '<script async src="/w_inc/gcntr.php?id=ss"></script>\n' +
        '\n' +
        '<!-- puls.lv START //-->\n' +
        '<div id="_puls.lv_232-26935-27304-27306" style="display:inline-block;"></div>\n' +
        '<script type="text/javascript">_puls_counter_local( "232-26935-27304-27306" );</script>\n' +
        '<noscript>\n' +
        '<a href="http://puls.lv/" target="_blank"><img src="https://hits.puls.lv/?sid=232-26935-27304-27306&jsver=0" width=1 height=1 border=0 alt=""></a>\n' +
        '</noscript>\n' +
        '<!-- puls.lv END //-->\n' +
        '<!-- europuls.eu START //-->\n' +
        '<div id="_europuls.eu_2" style="display:inline-block;"></div>\n' +
        '<SCRIPT type="text/javascript">_ps_counter_local(2);</SCRIPT>\n' +
        '<noscript>\n' +
        '<a href="http://europuls.eu/" target="_blank"><img src="https://hits.europuls.eu/?sid=2&jsver=0"  width=1 height=1 border=0 alt=""></a>\n' +
        '</noscript>\n' +
        '<!-- europuls.eu END //-->\n' +
        '<img src="https://top.lv/counter.php?sid=2774&type=4" width="1" height="1" border="0" style="display:none" alt="">\n' +
        '\n' +
        '</div></BODY>\n' +
        '</HTML>';
    const parser = new SsLvListPageParser({
        baseUrl: DEFAULT_SS_LV_BASE_URL,
        city: 'riga',
        adType: 'sell',
    });
    const actual = parser.parseMainPage(page);
    const expected = {
        "flats": [
            {
                "id": 47427837,
                "adType": "sell",
                "city": "riga",
                "title": "Владелец продает квартиру в здании проектированном знаменитом ар",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/adkci.html",
                "district": "центр",
                "street": "Авоту 4",
                "rooms": 1,
                "apartmentArea": 27,
                "floor": "5/5",
                "houseType": "Дов. дом",
                "price": 44310
            },
            {
                "id": 47687131,
                "adType": "sell",
                "city": "riga",
                "title": "Īpašnieks pārdod dzīvokli renovētā namā Rīgas centrā. Skats no d",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/ffijj.html",
                "district": "центр",
                "street": "Авоту 4",
                "rooms": 2,
                "apartmentArea": 33,
                "floor": "5/5",
                "houseType": "Рекон.",
                "price": 55832
            },
            {
                "id": 49734246,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdošanai tiek piedāvāts gaišs un ļoti silts 1-istabas dzīvokli",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/bgcfg.html",
                "district": "центр",
                "street": "Лугажу 6",
                "rooms": 1,
                "apartmentArea": 32,
                "floor": "5/5",
                "houseType": "Лит. пр.",
                "price": 30950
            },
            {
                "id": 49603585,
                "adType": "sell",
                "city": "riga",
                "title": "Dizainera veidota apdare, pilnībā mēbelēts, stilīgs 2-līmeņu man",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/eijmk.html",
                "district": "центр",
                "street": "Садовникова 23",
                "rooms": 3,
                "apartmentArea": 77,
                "floor": "5/6",
                "houseType": "Дов. дом",
                "price": 175000
            },
            {
                "id": 49602979,
                "adType": "sell",
                "city": "riga",
                "title": "Īpašnieks pārdod 3 - līmeņu dzīvokli renovētā pagalma mājā pie T",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/bfbpe.html",
                "district": "центр",
                "street": "Артилерияс 6A",
                "rooms": 4,
                "apartmentArea": 140,
                "floor": "2/3",
                "houseType": "Рекон.",
                "price": 330000
            },
            {
                "id": 49889514,
                "adType": "sell",
                "city": "riga",
                "title": "Продаётся 2-комнатная квартира в тихом, зелёном районе, недалеко",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/vecmilgravis/ajdkl.html",
                "district": "Вецмилгравис",
                "street": "Ринужу 11",
                "rooms": 2,
                "apartmentArea": 52,
                "floor": "3/5",
                "houseType": "Спец. пр.",
                "price": 49000
            },
            {
                "id": 49895392,
                "adType": "sell",
                "city": "riga",
                "title": "Все удобства – душ, туалет, центральное отопление, горячая и хол",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/sarkandaugava/hgkbk.html",
                "district": "Саркандаугава",
                "street": "Софияс 6",
                "rooms": 1,
                "apartmentArea": 30,
                "floor": "1/5",
                "houseType": "103-я",
                "price": 12999
            },
            {
                "id": 49122130,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdod plašu trīs istabu dzīvokli Torņkalnā. \n\nDzīvoklis sastā",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/tornjakalns/agood.html",
                "district": "Торнякалнс",
                "street": "Баускас 8",
                "rooms": 3,
                "apartmentArea": 70,
                "floor": "3/3",
                "houseType": "Рекон.",
                "price": 88700
            },
            {
                "id": 49895270,
                "adType": "sell",
                "city": "riga",
                "title": "Dzīvokļu rezervācija un tirdzniecība jaunā daudzdzīvokļu majā “H",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/aplokciems/ajgix.html",
                "district": "Аплокциемс",
                "street": "Крапес 8",
                "rooms": 2,
                "apartmentArea": 45,
                "floor": "2/3",
                "houseType": "Нов.",
                "price": 75950
            },
            {
                "id": 49828012,
                "adType": "sell",
                "city": "riga",
                "title": "Продажа от застройщика в проекте \"Harmonija\". \n\"Harmonija\" - эт",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/aplokciems/ajhxi.html",
                "district": "Аплокциемс",
                "street": "Аплокциема 8",
                "rooms": 1,
                "apartmentArea": 30,
                "floor": "2/3",
                "houseType": "Нов.",
                "price": 48900
            },
            {
                "id": 49459158,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdodam klusu dzīvokli labā koka mājā starp jaunbūvēm. Sētā ir ",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/darzciems/gfhpp.html",
                "district": "Дарзциемс",
                "street": "Стопиню 12",
                "rooms": 2,
                "apartmentArea": 25,
                "floor": "1/2",
                "houseType": "Дов. дом",
                "price": 15900
            },
            {
                "id": 49868658,
                "adType": "sell",
                "city": "riga",
                "title": "Īpašnieks pārdod dzīvokli Vecrīgā pie Zviedru vārtiem, pirmskara",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/vecriga/bdddb.html",
                "district": "Вецрига",
                "street": "Алдару 11",
                "rooms": 1,
                "apartmentArea": 43,
                "floor": "1/3",
                "houseType": "Дов. дом",
                "price": 110000
            },
            {
                "id": 49895153,
                "adType": "sell",
                "city": "riga",
                "title": "Добротный дом. Отличное место. Хорошая планировка. \nЗвоните, до",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/vecmilgravis/delib.html",
                "district": "Вецмилгравис",
                "street": "Эммас 30",
                "rooms": 3,
                "apartmentArea": 63,
                "floor": "2/4",
                "houseType": "Сталинка",
                "price": 41800
            },
            {
                "id": 49696144,
                "adType": "sell",
                "city": "riga",
                "title": "Īpašnieks pārdod modernu 3 istabu dzīvokli ar zemi īpašumā, kurš",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/maskavas-priekshpilseta/aggxd.html",
                "district": "р-он ул. Маскавас",
                "street": "Даугавпилс 49",
                "rooms": 3,
                "apartmentArea": 57,
                "floor": "3/5",
                "houseType": "Дов. дом",
                "price": 60000
            },
            {
                "id": 49530058,
                "adType": "sell",
                "city": "riga",
                "title": "Īpašnieks pārdod dzīvokli ar āra terasi ar pēlēko apdari jaunbūv",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/eoinp.html",
                "district": "центр",
                "street": "Кунгу 25",
                "rooms": 1,
                "apartmentArea": 110,
                "floor": "6/6",
                "houseType": "Нов.",
                "price": 159990
            },
            {
                "id": 48722161,
                "adType": "sell",
                "city": "riga",
                "title": "Pie Dailes Teātra Tev ir iespēja iegādāties viesmīlīgu divistabu",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/aexik.html",
                "district": "центр",
                "street": "Бривибас 84",
                "rooms": 2,
                "apartmentArea": 72,
                "floor": "5/6",
                "houseType": "Дов. дом",
                "price": 119000
            },
            {
                "id": 48084170,
                "adType": "sell",
                "city": "riga",
                "title": "Продаем квартиру на улице Лубанас 56, 4-ый этаж 9-ти этажного до",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/plyavnieki/elfgn.html",
                "district": "Плявниеки",
                "street": "Лубанас 56",
                "rooms": 4,
                "apartmentArea": 80,
                "floor": "4/9",
                "houseType": "467-я",
                "price": 67000
            },
            {
                "id": 49570545,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdod 2-istabu dzīvokli centrā, Zvaigžņu ielā 31. Dzīvoklis sas",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/aakjj.html",
                "district": "центр",
                "street": "Звайгжню 31",
                "rooms": 2,
                "apartmentArea": 38,
                "floor": "3/3",
                "houseType": "Дов. дом",
                "price": 22500
            },
            {
                "id": 49689943,
                "adType": "sell",
                "city": "riga",
                "title": "Продается 3-комнатная квартира только после косметического ремон",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/purvciems/afbnx.html",
                "district": "Пурвциемс",
                "street": "Дзелзавас 82",
                "rooms": 3,
                "apartmentArea": 61,
                "floor": "5/5",
                "houseType": "Лит. пр.",
                "price": 63000
            },
            {
                "id": 49634966,
                "adType": "sell",
                "city": "riga",
                "title": "Cenā autostāvvieta. \nSaulains dzīvoklis rekonstruētā mājā, 5 is",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/ggpod.html",
                "district": "центр",
                "street": "Валдемара 37",
                "rooms": 5,
                "apartmentArea": 129,
                "floor": "6/6",
                "houseType": "Рекон.",
                "price": 320168
            },
            {
                "id": 47253842,
                "adType": "sell",
                "city": "riga",
                "title": "Cenā autostāvvieta. \nSaulains dzīvoklis rekonstruētā mājā. \nDz",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/bxbeg.html",
                "district": "центр",
                "street": "Валдемара 37",
                "rooms": 3,
                "apartmentArea": 109,
                "floor": "5/6",
                "houseType": "Рекон.",
                "price": 275301
            },
            {
                "id": 49894863,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdod vienistabas dzīvokli Maskavas forštatē, logi vērsti gan u",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/maskavas-priekshpilseta/choce.html",
                "district": "р-он ул. Маскавас",
                "street": "Екабпилс 16",
                "rooms": 1,
                "apartmentArea": 23,
                "floor": "3/3",
                "houseType": "Дов. дом",
                "price": 17900
            },
            {
                "id": 49894854,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdod dzīvokli Rīgas centrā renovētā ēkā, kurā šobrīd vēl tikai",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/ffnkj.html",
                "district": "центр",
                "street": "Лиенес 24",
                "rooms": 1,
                "apartmentArea": 26,
                "floor": "1/4",
                "houseType": "Рекон.",
                "price": 41000
            },
            {
                "id": 49395576,
                "adType": "sell",
                "city": "riga",
                "title": "Rus/lv. Большая квартира, 3 изолированные спальни, 200 м. до лес",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/mezhciems/cdhnf.html",
                "district": "Межциемс",
                "street": "Бикерниеку 160/7",
                "rooms": 4,
                "apartmentArea": 88,
                "floor": "1/5",
                "houseType": "Нов.",
                "price": 156700
            },
            {
                "id": 49894221,
                "adType": "sell",
                "city": "riga",
                "title": "Īpašnieks pārdod 3-istabu dzīvokli. \n\nKvalitatīvs kapitāls rem",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/imanta/aapdk.html",
                "district": "Иманта",
                "street": "Анниньмуйжас 54",
                "rooms": 3,
                "apartmentArea": 63,
                "floor": "4/9",
                "houseType": "602-я",
                "price": 84000
            },
            {
                "id": 49030077,
                "adType": "sell",
                "city": "riga",
                "title": "Cenā autostāvvieta, 5 istabas ar pilnu apdari kapitāli renovētā ",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/afcde.html",
                "district": "центр",
                "street": "Валдемара 37",
                "rooms": 5,
                "apartmentArea": 129,
                "floor": "6/6",
                "houseType": "Рекон.",
                "price": 320168
            },
            {
                "id": 49889106,
                "adType": "sell",
                "city": "riga",
                "title": "Cenā autostāvvieta, dzīvoklis kapitāli renovētā, elegantā arhite",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/agfdh.html",
                "district": "центр",
                "street": "Валдемара 37",
                "rooms": 3,
                "apartmentArea": 109,
                "floor": "5/6",
                "houseType": "Рекон.",
                "price": 275301
            },
            {
                "id": 49893976,
                "adType": "sell",
                "city": "riga",
                "title": "Квартира освобождена. Новые пластиковые окна (2021). Заменены вс",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/ziepniekkalns/hgjko.html",
                "district": "Зиепниеккалнс",
                "street": "Вадакстес 20",
                "rooms": 1,
                "apartmentArea": 36,
                "floor": "2/5",
                "houseType": "Хрущ.",
                "price": 29000
            },
            {
                "id": 49689021,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdod 3. istabu dzīvokli pie Pļavnieku pamatskolas. Dzīvoklis l",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/plyavnieki/bidnf.html",
                "district": "Плявниеки",
                "street": "Праулиенас 10",
                "rooms": 3,
                "apartmentArea": 63,
                "floor": "6/9",
                "houseType": "602-я",
                "price": 75000
            },
            {
                "id": 49755845,
                "adType": "sell",
                "city": "riga",
                "title": "Pārdod vienistabas dzīvokli labā stāvoklī pirmskara mājā ar visā",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/riga/centre/aepxp.html",
                "district": "центр",
                "street": "Валдемара 159",
                "rooms": 1,
                "apartmentArea": 35,
                "floor": "2/5",
                "houseType": "Дов. дом",
                "price": 45900
            }
        ],
        "pageLinks": [
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page70.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page2.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page3.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page4.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page5.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page6.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page7.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page8.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page9.html",
            "https:/www.ss.lv/ru/real-estate/flats/riga/all/sell/page2.html"
        ]
    };

    expect(actual).toStrictEqual(expected);
});

test('parse jelgava-and-reg ru', () => {
    const page = '<!DOCTYPE html>\n' +
        '<HTML><HEAD>\n' +
        '<title>SS.LV Квартиры - Елгава и р-он, Цены. Комнатную, встроенный..., Продают - Все объявления</title>\n' +
        '<meta http-equiv="Content-Type" CONTENT="text/html; charset=UTF-8">\n' +
        '<meta name="viewport" content="user-scalable=1, width=device-width, initial-scale=1.0"/>\n' +
        '<meta name="keywords" content="Объявления елгава р-он квартиры недвижимость озолниекская вол калнциемс яунсвирлаукская элейская сесавская цены квартиру комнатную продаю продаёт новадс продажа покупка сдаю снимут обмен разное">\n' +
        '<meta name="description" content="Объявления. Квартиры - Елгава и р-он - Все объявления, Елгава, Озолниекская вол., Калнциемс, Яунсвирлаукская вол., Элейская вол., Сесавская вол., Цены, торговля, Фото, Kартинки. Комнатную, встроенный..., Продажа">\n' +
        '<link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/page4.html">\n' +
        '\n' +
        '<meta http-equiv="imagetoolbar" content="no">\n' +
        '\n' +
        '<BASE href="https://www.ss.lv/">\n' +
        '<link href="https://i.ss.lv/w_inc/style.css?v=220" rel="stylesheet" />\n' +
        '<style>html{overflow-y:scroll;}.page_bg{background-image:url(\'https://i.ss.lv/img/head/sludinajumi-ss-lv.jpg\' );background-repeat:no-repeat;}@media screen and (min-width:1280px){.page_bg{background-image:url(\'https://i.ss.lv/img/head/sludinajumi-ss-lv-1280.jpg\' );}}\n' +
        '.l50{width:50px;}.l70{width:70px;}.l35{width:35px;}.l23{width:23px;}.l85{width:85px;}.l100{width:100px;}@media screen and (min-width:1280px){.l50{width:calc(50px*1.25);}.l70{width:calc(70px*1.25);}.l35{width:calc(35px*1.25);}.l23{width:calc(23px*1.25);}.l85{width:calc(85px*1.25);}.l100{width:calc(100px*1.25);}}</style>\n' +
        '<link rel="shortcut icon" href="/favicon.ico?v=1" type="image/x-icon" />\n' +
        '<link rel="apple-touch-icon" sizes="57x57" href="/img/m/ss-com-57x57.png"/>\n' +
        '<link rel="apple-touch-icon" sizes="72x72" href="/img/m/ss-com-72x72.png"/>\n' +
        '<link rel="apple-touch-icon" sizes="114x114" href="/img/m/ss-com-114x114.png"/>\n' +
        '<link rel="alternate" hreflang="lv" href="https://www.ss.lv/lv/real-estate/flats/jelgava-and-reg/all/sell/page4.html" /><link rel="alternate" hreflang="ru" href="https://www.https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/page4.html" />\n' +
        '<script src="https://i.ss.lv/w_inc/js/main.ru.ss.js?v=563" type="text/javascript"></script>\n' +
        '\n' +
        '<script type="text/javascript" src="//www.https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/js-count-1208-0-0-0-1.js"></script><script async src="https://i.ss.lv/w_inc/adsbygoogle.js?v=563"></script>\n' +
        '<SCRIPT type="text/javascript">\n' +
        '<!--\n' +
        'LINK_MAIN_HOST = "https://www.ss.lv";var REGION = "";SS_Lang = "1";get_page_zoom();\n' +
        'if(window._setCookie){_setCookie("LG","ru",365,"www.ss.lv");};if(window._check_remote_id){_check_remote_id( "always", "https://www.ss.com" );}\n' +
        '-->\n' +
        '</SCRIPT>\n' +
        '</HEAD>\n' +
        '<BODY onLoad="window.defaultStatus=\'Объявления - SS.LV\';" bgcolor="#FFFFFF" class="body">\n' +
        '<div style="position:absolute;height:0px;width:0px;top:15px;left:10px;z-index:0;" id="left_banner" z-index="0"></div>\n' +
        '<div align=center>\n' +
        '\t<div id="main_table" class="page_header page_bg">\n' +
        '\t\t<div z-index="20" id="sslogin"></div>\n' +
        '\t\t<span class="page_header_head_ss"><a href="/" title="Объявления"><img class="page_header_logo_ss" src="https://i.ss.lv/img/p.gif" border="0" alt="Объявления"></a><h1>ОБЪЯВЛЕНИЯ</h1></span>\n' +
        '\t\t<span class="page_header_menu"><b class="menu_main"><a href="/ru/real-estate/flats/new/" class="a_menu" title="Подать Объявление">Подать Объявление</a></b>\n' +
        '<b class="menu_main"><a href="/ru/login/" class="a_menu" title="Мои Объявления">Мои Объявления</a></b>\n' +
        '<b class="menu_main"><a href="/ru/real-estate/flats/jelgava-and-reg/search/" class="a_menu" title="Искать объявления">Поиск</a></b>\n' +
        '<span style="display:inline-block;text-align:left;"><b class="menu_main" style="padding-right:0px;"><a href="/ru/favorites/" class="a_menu" title="Закладки">Закладки</a></b><span id="mnu_fav_id"></span></span></span>\n' +
        '\t\t<span id="mails_status_menu"></span>\n' +
        '\t\t<span class="menu_lang"><a href="/lv/real-estate/flats/jelgava-and-reg/all/sell/page4.html" class=a_menu title="Latviski">LV</a></span>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div align=center>\n' +
        '\t<div class="page_header">\n' +
        '\t\t<table border=0 cellpadding=0 cellspacing=0 width="100%"><tr><td>\n' +
        '\t\t\t<div style="float:left;">\n' +
        '\t\t\t<table id="page_main" border=0 cellpadding=0 cellspacing=0 width="100%"><tr><td valign=top><div class="top_head"><div style="float:left;padding-top:2px;"><h2 class="headtitle"><a href="/ru/real-estate/flats/"  title="Объявления Квартиры">Квартиры</a> / <a href="/ru/real-estate/flats/jelgava-and-reg/"  title="Объявления Елгава и р-он">Елгава и р-он</a> / Все объявления / Продажа <img onclick="open_close_cat_menu(1);" id="cat_list_img1" src="https://i.ss.lv/img/cat_right.png" border=0 width=16 height=16 style="margin-bottom:-4px;cursor:pointer;"><img onclick="open_close_cat_menu(0);"  id="cat_list_img2" src="https://i.ss.lv/img/cat_bottom.png" border=0 width=16 height=16 style="margin-bottom:-4px;display:none;cursor:pointer;"></h2></div><div style="float:right;"><select id="today_cnt_sl" onchange="go(this.value+\'\');"><option selected value="/ru/real-estate/flats/jelgava-and-reg/sell/">Все объявления</option><option value="/ru/real-estate/flats/jelgava-and-reg/today/sell/">Сегодня - 2</option><option value="/ru/real-estate/flats/jelgava-and-reg/today-2/sell/">За 2 дня - 10</option><option value="/ru/real-estate/flats/jelgava-and-reg/today-5/sell/">За 5 дней - 24</option></select></div></div><div id="cat_list_dv" style="display:none;"><br><div align=right><table border=0 cellpadding=0 cellspacing=0 align=center width=100% style="padding-left:1px;"><tr>\n' +
        '\t\t\t\t<td width="25%" valign=top nowrap align=left>\n' +
        '\t\t\t\t<table cellpadding=0 cellspacing=0 border=0>\n' +
        '\t\t\t\t<tr><td nowrap align=left><h4 class="category" id="sc_14739"><a id="ahc_14739" href="/ru/real-estate/flats/jelgava-and-reg/jelgava/sell/" class="a_category" title="Елгава, Объявления">Елгава</a></h4>\n' +
        '<h4 class="category" id="sc_14360"><a id="ahc_14360" href="/ru/real-estate/flats/jelgava-and-reg/kalnciems/sell/" class="a_category" title="Калнциемс, Объявления">Калнциемс</a></h4>\n' +
        '<br><h4 class="category" id="sc_14371"><a id="ahc_14371" href="/ru/real-estate/flats/jelgava-and-reg/vilces-pag/sell/" class="a_category" title="Вилценская вол., Объявления">Вилценская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_14362"><a id="ahc_14362" href="/ru/real-estate/flats/jelgava-and-reg/gludas-pag/sell/" class="a_category" title="Глудская вол., Объявления">Глудская вол.</a></h4>\n' +
        '</td></tr></table></td>\n' +
        '\n' +
        '\t\t\t\t<td width="25%" valign=top nowrap align=center>\n' +
        '\t\t\t\t<table cellpadding=0 cellspacing=0 border=0>\n' +
        '\t\t\t\t<tr><td nowrap align=left><h4 class="category" id="sc_14373"><a id="ahc_14373" href="/ru/real-estate/flats/jelgava-and-reg/zalenieku-pag/sell/" class="a_category" title="Залениекская вол., Объявления">Залениекская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_14366"><a id="ahc_14366" href="/ru/real-estate/flats/jelgava-and-reg/livberzes-pag/sell/" class="a_category" title="Ливберзская вол., Объявления">Ливберзская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_14764"><a id="ahc_14764" href="/ru/real-estate/flats/jelgava-and-reg/ozolnieku-pag/sell/" class="a_category" title="Озолниекская вол., Объявления">Озолниекская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_14368"><a id="ahc_14368" href="/ru/real-estate/flats/jelgava-and-reg/sesavas-pag/sell/" class="a_category" title="Сесавская вол., Объявления">Сесавская вол.</a></h4>\n' +
        '</td></tr></table></td>\n' +
        '\n' +
        '\t\t\t\t<td width="25%" valign=top nowrap align=center>\n' +
        '\t\t\t\t<table cellpadding=0 cellspacing=0 border=0>\n' +
        '\t\t\t\t<tr><td nowrap align=left><h4 class="category" id="sc_14763"><a id="ahc_14763" href="/ru/real-estate/flats/jelgava-and-reg/cenu-pag/sell/" class="a_category" title="Ценская вол., Объявления">Ценская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_14361"><a id="ahc_14361" href="/ru/real-estate/flats/jelgava-and-reg/elejas-pag/sell/" class="a_category" title="Элейская вол., Объявления">Элейская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_14363"><a id="ahc_14363" href="/ru/real-estate/flats/jelgava-and-reg/jaunsvirlaukas-pag/sell/" class="a_category" title="Яунсвирлаукская вол., Объявления">Яунсвирлаукская вол.</a></h4>\n' +
        '<h4 class="category" id="sc_15278"><a id="ahc_15278" href="/ru/real-estate/flats/jelgava-and-reg/other/sell/" class="a_category" title="Другое, Объявления">Другое</a></h4>\n' +
        '</td></tr></table></td>\n' +
        '</tr>\n' +
        '</table></div><br></div><SCRIPT type="text/javascript">print_ccnt();print_ccnts();</SCRIPT><form id="filter_frm" name="filter_frm" action="/ru/real-estate/flats/jelgava-and-reg/all/sell/filter/" method=post>\n' +
        '\t<table cellpadding=1 cellspacing=0 border=0 width="100%" bgcolor="#EEEEEE" style="margin-top:5px;" id="filter_tbl">\n' +
        '\t<tr><td style="padding-bottom:3px;"><table border=0 cellpadding=1 cellspacing=0><tr><td class="filter_name" valign=bottom nowrap>Цена:<br><span id="foptfld_8"><input id="f_o_8_min"  class="filter_txt l50"  type=text name="topt[8][min]" value="">-<input id="f_o_8_max"  class="filter_txt l50"  type=text name="topt[8][max]" value=""></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Комнат:<br><span id="foptfld_1"><select onchange="this.form.submit();" class="filter_sel l50" id="f_o_1" name="topt[1][min]"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="-">-</option></select>-<select onchange="this.form.submit();" class="filter_sel l50" id="f_o_1" name="topt[1][max]"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="-">-</option></select></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Площадь:<br><span id="foptfld_3"><input class="filter_txt l35" id="f_o_3_min" maxlength=5 type=text name="topt[3][min]" value="">-<input id="f_o_3_max" class="filter_txt l35" maxlength=5 type=text name="topt[3][max]" value=""></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Этаж:<br><span id="foptfld_4"><input class="filter_txt l23" id="f_o_4_min" maxlength=2 type=text name="topt[4][min]" value="">-<input id="f_o_4_max" class="filter_txt l23" maxlength=2 type=text name="topt[4][max]" value=""></span>&nbsp;</td><td class="filter_name" valign=bottom nowrap>Серия:<br><span id="foptfld_6"><select class="filter_sel l85" id="f_o_6"  onchange="this.form.submit();" name="opt[6]"><option value=""></option><option value="67">103-я</option><option value="68">104-я</option><option value="69">119-я</option><option value="70">467-я</option><option value="71">602-я</option><option value="79">Дов. дом</option><option value="72">Лит. пр.</option><option value="74">М. сем.</option><option value="3616">Рекон.</option><option value="78">Спец. пр.</option><option value="75">Сталинка</option><option value="76">Хрущ.</option><option value="77">Ч. дом</option><option value="73">Чеш. пр.</option><option value="3596">Нов.</option></select></span>&nbsp;</td></tr></table></td><td width="100%" align="right" style="padding-top:14px;"><input class="b s12" style="padding-top:1px;padding-bottom:2px;" type=submit value="Искать"></td></tr></table><div class="filter_second_line_dv"><span class="filter_opt_dv">Режим:<br><noindex><select onchange="go(this[this.selectedIndex].value);" title="Выберите способ вывода объявлений" class="filter_sel w95">\n' +
        '\t\t\t\t<option selected value="/ru/real-estate/flats/jelgava-and-reg/all/sell/">Список</option>\n' +
        '\t\t\t\t<option value="/ru/real-estate/flats/jelgava-and-reg/all/sell/photo/">Альбом</option>\n' +
        '\t\t\t\t<option value="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgQeF4S.html">Карта</option>\n' +
        '\t\t\t\t</select></noindex>\n' +
        '\t\t\t</span>\n' +
        '<span class="filter_opt_dv">Тип сделки:<br><select name=sid onchange="go(this[this.selectedIndex].value);" class="filter_sel l100"><option value="/ru/real-estate/flats/jelgava-and-reg/all/">Все</option><option selected value="/ru/real-estate/flats/jelgava-and-reg/all/sell/">Продажа</option><option value="/ru/real-estate/flats/jelgava-and-reg/all/buy/">Покупка</option><option value="/ru/real-estate/flats/jelgava-and-reg/all/hand_over/">Сдаю</option><option value="/ru/real-estate/flats/jelgava-and-reg/all/remove/">Снимут</option><option value="/ru/real-estate/flats/jelgava-and-reg/all/change/">Обмен</option><option value="/ru/real-estate/flats/jelgava-and-reg/all/-other/">Разное</option></select></span>\n' +
        '<span class="filter_opt_dv">Город, волость:<br>\n' +
        '<select class="filter_sel" style="min-width:126px;max-width:200px;" onchange="go( this[this.selectedIndex].value );">\n' +
        '<option value="/ru/real-estate/flats/jelgava-and-reg/all/sell/">Все</option>\n' +
        '\n' +
        '<option value="/ru/real-estate/flats/jelgava-and-reg/jelgava/sell/">Елгава</option><option value="/ru/real-estate/flats/jelgava-and-reg/kalnciems/sell/">Калнциемс</option><option value="/ru/real-estate/flats/jelgava-and-reg/vilces-pag/sell/">Вилценская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/gludas-pag/sell/">Глудская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/zalenieku-pag/sell/">Залениекская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/livberzes-pag/sell/">Ливберзская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/ozolnieku-pag/sell/">Озолниекская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/sesavas-pag/sell/">Сесавская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/cenu-pag/sell/">Ценская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/elejas-pag/sell/">Элейская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/jaunsvirlaukas-pag/sell/">Яунсвирлаукская вол.</option><option value="/ru/real-estate/flats/jelgava-and-reg/other/sell/">Другое</option>\n' +
        '</select></span>\n' +
        '<span class="filter_opt_dv" style="padding-right:5px;">Улица:<br><input id="f_o_11" class="filter_txt l70" maxlength=70 type=text name="topt[11]" value=""></span></div>\n' +
        '<table align=center cellpadding=2 cellspacing=0 border=0 width="100%">\n' +
        '<tr id="head_line">\n' +
        '\t<td class="msg_column" colspan=3 width="70%">\n' +
        '\t<span style="float:left;">&nbsp;Объявления\n' +
        '</span>\n' +
        '<span align=right class="msg_column" style="float:right;text-align:right;padding-right:3px;">\n' +
        '<noindex>\n' +
        '\t<a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4S.html"\n' +
        '\t\tclass=a19>дата</a></noindex></span>\n' +
        '</td>\n' +
        '<td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4bEFV8FQ==.html" class=a18 title="">Город/волость</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4SelM=.html" class=a18 title="">К.</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4QelM=.html" class=a18 title="">m2</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4XelM=.html" class=a18 title="">Этаж</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4VelM=.html" class=a18 title="">Серия</a></noindex></td><td class="msg_column_td" nowrap><noindex><a rel="nofollow" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/fDgSeF4belM=.html" class=a18 title="">Цена</a></noindex></td></tr><tr id="tr_49786918"><td class="msga2 pp0"><input type=checkbox id="c49786918" name="mid[]" value="49786918_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/cghel.html" id="im49786918"><img src="https://i.ss.lv/gallery/5/802/200430/40085998.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTgwbGUlQTZ5JUFBJUM5Z2klQTN6JUE3JTg0bGwlQTklN0IlQTYlN0VnYyVBM3UlQTIlN0Q=|M63rEr" id="dm_49786918" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/cghel.html">Pārdot plašu izremontētu trīs istabu dzīvokli ar ērtu plānojumu daļē</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>61</td><td class="msga2-o pp6" nowrap c=1>7/9</td><td class="msga2-o pp6" nowrap c=1>602-я</td><td class="msga2-o pp6" nowrap c=1>56,000  €</td></tr>\n' +
        '<tr id="tr_49305926"><td class="msga2 pp0"><input type=checkbox id="c49305926" name="mid[]" value="49305926_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/hdjjg.html" id="im49305926"><img src="https://i.ss.lv/gallery/4/765/191189/38237670.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk4dm5qZiU4NCVBNiVDRiVBNiVBNyU5RnZsaGclOEIlQUQlODMlQTclQUIlOUVzbmZjJTgz|gC963SuSur" id="dm_49305926" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/hdjjg.html">Centrs. Saskaņota pārplanošana. Izcils remonts, jaunas mēbeles un ja</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>34</td><td class="msga2-o pp6" nowrap c=1>4/5</td><td class="msga2-o pp6" nowrap c=1>103-я</td><td class="msga2-o pp6" nowrap c=1>37,000  €</td></tr>\n' +
        '<tr id="tr_49496541"><td class="msga2 pp0"><input type=checkbox id="c49496541" name="mid[]" value="49496541_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ajgnd.html" id="im49496541"><img src="https://i.ss.lv/gallery/4/699/174540/34907947.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTg4JThBJUFFJTg0JTlFdyVFMCU5MiU4OCU4RCVBOSU4MSVBMnolOUMlOTglODQlOEQlQUQlN0YlOUR1JTk0JTkxJTgz|STuKmBda" id="dm_49496541" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ajgnd.html">Pārdodu plašu, izremontētu trīs istabu dzīvokli ar ļoti ērtu plānoju</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>63</td><td class="msga2-o pp6" nowrap c=1>8/9</td><td class="msga2-o pp6" nowrap c=1>467-я</td><td class="msga2-o pp6" nowrap c=1>51,000  €</td></tr>\n' +
        '<tr id="tr_49768140"><td class="msga2 pp0"><input type=checkbox id="c49768140" name="mid[]" value="49768140_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/aienm.html" id="im49768140"><img src="https://i.ss.lv/gallery/5/801/200037/40007262.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlBJTk3JTk4ZyU4OCVCMiU4OSVBRSU4QyU5RiU5OSU5QWUlOENnJTkxJUIxJThDJTlBJTk4JTkzag==|fgc5U6XyX" id="dm_49768140" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/aienm.html">Продаётся 2-х комнатная квартира с изолированными комнатами в хороше</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>47</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>103-я</td><td class="msga2-o pp6" nowrap c=1>36,200  €</td></tr>\n' +
        '<tr id="tr_49237982"><td class="msga2 pp0"><input type=checkbox id="c49237982" name="mid[]" value="49237982_14361_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/elejas-pag/fihlj.html" id="im49237982"><img src="https://i.ss.lv/gallery/4/761/190089/38017763.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JUFDJTg2JUEyJTk4JTk2JTk4JUUxZ2glQUIlN0QlQTclQTAlOUElOTklOUNoZSVBNCU4MyU5RSU5RSU5NSU5OCU5NQ==|sMnhehe63" id="dm_49237982" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/elejas-pag/fihlj.html">Продам квартиру с печным отоплением. Санузел совмещенный, вода в ква</a></div></td><td class="msga2-o pp6" nowrap c=1>Элейская вол.</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>31</td><td class="msga2-o pp6" nowrap c=1>1/4</td><td class="msga2-o pp6" nowrap c=1>Хрущ.</td><td class="msga2-o pp6" nowrap c=1>5,000  €</td></tr>\n' +
        '<tr id="tr_49313783"><td class="msga2 pp0"><input type=checkbox id="c49313783" name="mid[]" value="49313783_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/chfcd.html" id="im49313783"><img src="https://i.ss.lv/gallery/3/573/143031/28606122.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlEJUExd2ptJUQ1JTg0JThGJTg1JTlDJTlGeGltJThBJTg5JThEJTg0JTlEJTlFdmlmJTg5|dnD96YSYT" id="dm_49313783" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/chfcd.html">Pārdod vienistabas dzīvoklī netālu no centra. Dzīvoklīs nav stūrā, s</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>38</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>103-я</td><td class="msga2-o pp6" nowrap c=1>20,500  €</td></tr>\n' +
        '<tr id="tr_49671719"><td class="msga2 pp0"><input type=checkbox id="c49671719" name="mid[]" value="49671719_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/afien.html" id="im49671719"><img src="https://i.ss.lv/gallery/4/793/198153/39630520.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTdCJTgyJUE2JUEyJTlCJTkzJUQ1JTk0JThGJThEcyU4NSVBNSU5QyU5NSU5NCU4RSU5NiU4QiU4RHMlN0YlQTAlOUIlOTU=|CNpkebYcZU" id="dm_49671719" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/afien.html"><b>Продаю двухкомнатную квартиру в центре города в кирпичном доме на вт</b></a></div></td><td class="msga2-o pp6" nowrap c=1><b>Елгава</b></td><td class="msga2-o pp6" nowrap c=1><b>2</b></td><td class="msga2-o pp6" nowrap c=1><b>46</b></td><td class="msga2-o pp6" nowrap c=1><b>2/5</b></td><td class="msga2-o pp6" nowrap c=1><b>Лит. пр.</b></td><td class="msga2-o pp6" nowrap c=1><b>52,000</b>  €</td></tr>\n' +
        '<tr id="tr_49675797"><td class="msga2 pp0"><input type=checkbox id="c49675797" name="mid[]" value="49675797_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/agkjb.html" id="im49675797"><img src="https://i.ss.lv/gallery/4/793/198214/39642730.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTkzayU4QiVBQSVBN2IlODElQzclOUUlOThnJThDJUFCJUE2YiU4MyU3RiVBNCU5OW0lOTAlQUElQTdhJTgwJTdC|b7Yzu1PKm" id="dm_49675797" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/agkjb.html">Tiek pārdots silts un saulains dzīvoklis. Klusi kaimiņi. Atsevišķi s</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>36</td><td class="msga2-o pp6" nowrap c=1>3/5</td><td class="msga2-o pp6" nowrap c=1>М. сем.</td><td class="msga2-o pp6" nowrap c=1>26,500  €</td></tr>\n' +
        '<tr id="tr_48752220"><td class="msga2 pp0"><input type=checkbox id="c48752220" name="mid[]" value="48752220_14360_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/kalnciems/emxhi.html" id="im48752220"><img src="https://i.ss.lv/gallery/4/725/181108/36221481.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTg4ciVBRiVBQiVBQyVDQSVBMSU4QW8lQUYlQUQlQUYlN0YlQTQlOENuJUE5JUE5JUE5JTdFJUE2JTg1aSVBOQ==|U9ytyNp" id="dm_48752220" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/kalnciems/emxhi.html">Pārdodas 2istabu dzīvoklis rekonstruētā 103. sērijas māja, kas atrod</a></div></td><td class="msga2-o pp6" nowrap c=1>Калнциемс</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>54</td><td class="msga2-o pp6" nowrap c=1>4/5</td><td class="msga2-o pp6" nowrap c=1>Рекон.</td><td class="msga2-o pp6" nowrap c=1>17,900  €</td></tr>\n' +
        '<tr id="tr_49758000"><td class="msga2 pp0"><input type=checkbox id="c49758000" name="mid[]" value="49758000_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dpxbx.html" id="im49758000"><img src="https://i.ss.lv/gallery/4/800/199810/39961917.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlBJTlGJTk2b2clQ0ZkJUIwJTk3JTlGJTlBa2klODdnJUFDJTlEJTk5JTk1ZmclODNjJUFB|ggd63S3z" id="dm_49758000" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dpxbx.html"><b>Īpašnieks pārdod saulainu 3 istabu dzīvokli ar augstajiem griestiem </b></a></div></td><td class="msga2-o pp6" nowrap c=1><b>Елгава</b></td><td class="msga2-o pp6" nowrap c=1><b>3</b></td><td class="msga2-o pp6" nowrap c=1><b>74</b></td><td class="msga2-o pp6" nowrap c=1><b>2/4</b></td><td class="msga2-o pp6" nowrap c=1><b>Сталинка</b></td><td class="msga2-o pp6" nowrap c=1><b>59,000</b>  €</td></tr>\n' +
        '<tr id="tr_49749149"><td class="msga2 pp0"><input type=checkbox id="c49749149" name="mid[]" value="49749149_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/gcifh.html" id="im49749149"><img src="https://i.ss.lv/gallery/4/799/199625/39924851.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTg2ciU5MiU4QyU4MyVBNSVGNiVBNSVBNSU4RXAlOTklOEMlODMlQUQlQUIlQTklQTElODhyJTkxJThEJTgzJUE0JUFB|U9aXStztp" id="dm_49749149" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/gcifh.html">Pārdod dzivokli, 3 istabas, Mežciemā. Mājai ielikti pakešu logi. \n' +
        'D</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>38</td><td class="msga2-o pp6" nowrap c=1>1/2</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>16,990  €</td></tr>\n' +
        '<tr id="tr_48234327"><td class="msga2 pp0"><input type=checkbox id="c48234327" name="mid[]" value="48234327_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/bhghg.html" id="im48234327"><img src="https://i.ss.lv/gallery/4/686/171280/34255894.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="dyU4MCVBMSU5QSU5RCVERXQlODMlOUUlOUYlOUElOUJ2JTg1JUEzJUEwJTlCJTlCcyU3RCU5RiU5OCU5NSU5Mg==|CMnheb" id="dm_48234327" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/bhghg.html">Pārdod dzīvokli Jelgavas centrā labā stāvoklī. Visas ērtības un pils</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>42</td><td class="msga2-o pp6" nowrap c=1>3/5</td><td class="msga2-o pp6" nowrap c=1>Спец. пр.</td><td class="msga2-o pp6" nowrap c=1>45,000  €</td></tr>\n' +
        '<tr id="tr_48150327"><td class="msga2 pp0"><input type=checkbox id="c48150327" name="mid[]" value="48150327_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/fmije.html" id="im48150327"><img src="https://i.ss.lv/gallery/3/525/131058/26211563.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="eSU3QnMlOTVkJTk5JUIwJTg2JUFEZyU3QyU3QnUlOTdtJTk0aCU4OSVCMWR0dnElOTJk|DDAb4c4Ux1" id="dm_48150327" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/fmije.html">Продаёт хозяен. Место нахождения квартиры Калциемс. Елгавас новадс.</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>65</td><td class="msga2-o pp6" nowrap c=1>1/3</td><td class="msga2-o pp6" nowrap c=1>Сталинка</td><td class="msga2-o pp6" nowrap c=1>15,500  €</td></tr>\n' +
        '<tr id="tr_49745310"><td class="msga2 pp0"><input type=checkbox id="c49745310" name="mid[]" value="49745310_15278_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/other/niixb.html" id="im49745310"><img src="https://i.ss.lv/gallery/4/791/197706/39541070.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="aCU5RSVBMCU5Q2pmJTk2JUQ0aCVBMyU5OCU5N2trJTk1JThDbyU5RSVBMCU5Nm5iJTk1JTg4ZyU5RA==|7mgc52aX" id="dm_49745310" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/other/niixb.html">Pārdodu 2-istabu dzīvokli 47 kv. m platībā ar kvalitatīvu balto apda</a></div></td><td class="msga2-o pp6" nowrap c=1>-</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>47</td><td class="msga2-o pp6" nowrap c=1>5/7</td><td class="msga2-o pp6" nowrap c=1>Нов.</td><td class="msga2-o pp6" nowrap c=1>51,183  €</td></tr>\n' +
        '<tr id="tr_49107308"><td class="msga2 pp0"><input type=checkbox id="c49107308" name="mid[]" value="49107308_14360_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/kalnciems/fhemo.html" id="im49107308"><img src="https://i.ss.lv/gallery/4/622/155292/31058317.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlDJTgzJUEyJTdFJTlEJTlEJTlBJUUwZ2glOUQlODElQTJ3JTlEJTk0JTk4JTk1a2MlOUMlODAlQTZ2JTk3JTk0|kPrFgdgd62" id="dm_49107308" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/kalnciems/fhemo.html">Продаю- 50 м от берега реки Лиелупе , 2х комнатную квартиру 56м2 , в</a></div></td><td class="msga2-o pp6" nowrap c=1>Калнциемс</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>56</td><td class="msga2-o pp6" nowrap c=1>1/2</td><td class="msga2-o pp6" nowrap c=1>Сталинка</td><td class="msga2-o pp6" nowrap c=1>13,500  €</td></tr>\n' +
        '<tr id="tr_49725678"><td class="msga2 pp0"><input type=checkbox id="c49725678" name="mid[]" value="49725678_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dbpje.html" id="im49725678"><img src="https://i.ss.lv/gallery/4/780/194835/38966821.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk3JTlBJTlBbCU4QyU4NyU5QyVFMyU5NGolODUlODMlOUQlQTAlOTVsJTg5JThCJTlFJTk4JTk2ZyU4QQ==|fgc5UR" id="dm_49725678" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dbpje.html"><b>Собственница продаёт 2-х комнатную квартиру с удобным расположением.</b></a></div></td><td class="msga2-o pp6" nowrap c=1><b>Елгава</b></td><td class="msga2-o pp6" nowrap c=1><b>2</b></td><td class="msga2-o pp6" nowrap c=1><b>53</b></td><td class="msga2-o pp6" nowrap c=1><b>5/5</b></td><td class="msga2-o pp6" nowrap c=1><b>Спец. пр.</b></td><td class="msga2-o pp6" nowrap c=1><b>37,000</b>  €</td></tr>\n' +
        '<tr id="tr_49707639"><td class="msga2 pp0"><input type=checkbox id="c49707639" name="mid[]" value="49707639_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/adimk.html" id="im49707639"><img src="https://i.ss.lv/gallery/4/796/198802/39760205.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="aCU5NmklOEQlQUNrJUFCJUVGJTlGeW0lOThnJTg4JUFBZSVCMSVBNiU5RXZpJTkzZSU4NSVBOGI=|7c4Ux2xsnD" id="dm_49707639" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/adimk.html">Piedāvājumā brīnišķīgs vienistabas dzīvoklis , kurš pēc platības pie</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>44</td><td class="msga2-o pp6" nowrap c=1>1/5</td><td class="msga2-o pp6" nowrap c=1>М. сем.</td><td class="msga2-o pp6" nowrap c=1>25,000  €</td></tr>\n' +
        '<tr id="tr_49720486"><td class="msga2 pp0"><input type=checkbox id="c49720486" name="mid[]" value="49720486_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ajccb.html" id="im49720486"><img src="https://i.ss.lv/gallery/4/797/199067/39813350.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="aWxvZiVCMyVBOCVCNGprYyVCMiVBOWlqa2MlQjMlQTlub25kJUFC|8963zt" id="dm_49720486" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ajccb.html">Pārdodu nesen daļēji izremontētu 2-istabu dzīvoklīti (38 kv-m) Jelga</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>2</td><td class="msga2-o pp6" nowrap c=1>43</td><td class="msga2-o pp6" nowrap c=1>1/2</td><td class="msga2-o pp6" nowrap c=1>Дов. дом</td><td class="msga2-o pp6" nowrap c=1>28,000  €</td></tr>\n' +
        '<tr id="tr_49663389"><td class="msga2 pp0"><input type=checkbox id="c49663389" name="mid[]" value="49663389_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dmgkh.html" id="im49663389"><img src="https://i.ss.lv/gallery/4/793/198002/39600367.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTk5JUFCaiVBMSU5RW8lRTMlQTRvJTlBJTk1aCU5RiVBOHElOUUlOURqJTlBJUE3aSU5QSU5NWYlOTc=|gs9he6" id="dm_49663389" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dmgkh.html">Pārdošanā trīsistabu dzīvoklis vinā no veiksmīgākajām padomju laiku </a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>3</td><td class="msga2-o pp6" nowrap c=1>65</td><td class="msga2-o pp6" nowrap c=1>5/5</td><td class="msga2-o pp6" nowrap c=1>103-я</td><td class="msga2-o pp6" nowrap c=1>46,000  €</td></tr>\n' +
        '<tr id="tr_49706823"><td class="msga2 pp0"><input type=checkbox id="c49706823" name="mid[]" value="49706823_14739_0"></td><td class="msga2"><a href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ahxgl.html" id="im49706823"><img src="https://i.ss.lv/gallery/4/796/198793/39758562.th2.jpg" alt="" class="isfoto foto_list"></a></td><td class=msg2><div class=d1><a data="JTlGJUFBJTg0eHQlQTElRTklQTklODF3dSVBMiU5RiVBRiU3RSU3QyU3QiVBNiVBMCVBQiU3QiU3QnMlOUUlOUQ=|mxKFCn" id="dm_49706823" class="am" href="/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ahxgl.html">Pārdodu ļoti siltu un plašu 1 istabas dzīvokli. Augstais pirmais stā</a></div></td><td class="msga2-o pp6" nowrap c=1>Елгава</td><td class="msga2-o pp6" nowrap c=1>1</td><td class="msga2-o pp6" nowrap c=1>39</td><td class="msga2-o pp6" nowrap c=1>1/5</td><td class="msga2-o pp6" nowrap c=1>Лит. пр.</td><td class="msga2-o pp6" nowrap c=1>35,000  €</td></tr>\n' +
        '\n' +
        '\t<tr id="tr_bnr_712" style="display:none;"><td colspan=12 align=center>\n' +
        '\t\n' +
        '\t<div id="div_bnr_712" align=center></div>\n' +
        '\t<script>load_script_async("/w_inc/reklama.728.php?441||1208||"+escape(document.referrer)+"||1");</script>\n' +
        '\t\n' +
        '\t</td></tr>\n' +
        '\t</table><br><table border=0 cellpasdding=0 cellspacing=0 width="100%"><tr><td width=24 nowrap></td><td><div align=center class=td2 nowrap><a name="nav_id" rel="prev" class="navi" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/page3.html"><img src="https://i.ss.lv/img/s_left.png" border=0 width=9 height=5 style="padding-bottom:2px;"> Предыдущие</a> &nbsp;&nbsp; <a name="nav_id" rel="prev" class="navi" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/">1</a> <a name="nav_id" rel="prev" class="navi" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/page2.html">2</a> <a name="nav_id" rel="prev" class="navi" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/page3.html">3</a> <button onclick="return false;" class=navia>4</button> &nbsp;&nbsp; <a name="nav_id" rel="next" class="navi" href="/ru/real-estate/flats/jelgava-and-reg/all/sell/">Следующие <img src="https://i.ss.lv/img/s_right.png" border=0 width=9 height=5 style="padding-bottom:2px;"></a></div><br></td><td width=24 nowrap valign=top><script>if(document.documentElement &&document.documentElement.clientHeight &&document.documentElement.offsetHeight && ( document.documentElement.offsetHeight-document.documentElement.clientHeight )>30){D.write( \'<img src="https://i.ss.lv/img/up.png" width=24 height=24 border=0 onclick="window.scrollTo(0,0);return false;" style="opacity:0.3;cursor:pointer;position:absolute;" onmouseover="this.style.opacity=1;" onmouseout="this.style.opacity=0.3;" title="Наверх">\'); }</script></td></table>\n' +
        '\t<table border=0 width="100%" cellpadding=2 cellspacing=0><tr>\n' +
        '\t<td width="40%" nowrap title="Показать выбранные объявления" class=td7><noindex><a rel="nofollow" id="show_selected_a" class=td15 href="/ru/show-selected/fDgReF4S.html" onclick="if( !check_selected_msg( \'У вас не выбрано ни одного объявления.\' ) ){event.returnValue=false;return false;}">Показать выбранные объявления</a></noindex> <span id="sel_cnt_obj" class=td15></span></td>\n' +
        '\t<td width="20%" align=center rowspan=4 valign=center><input type=button class=b onclick="go(\'/ru/real-estate/flats/jelgava-and-reg/new/\' );" value="Разместить объявление"></td>\n' +
        '\t<td width="40%" align=right class=td7>&nbsp;</td>\n' +
        '\t</tr>\n' +
        '\t\n' +
        '\t<tr><td class=td7><noindex><a rel="nofollow" id="a_fav_sel" style="display:none;" class="a9a" href="javascript:;" onclick="af(-1,\'ru\')">Добавить выбранные в закладки</a></noindex></td></tr>\n' +
        '\t<tr><td class=td7 valign=top><a id="clear_selected_a" style="display:none;" class=a9a href="javascript:;" onclick="dsl(1);return false;">Снять выделение</a></td></tr>\n' +
        '\t</table><br>\n' +
        '\t\n' +
        '\t\n' +
        '\t\n' +
        '\t\n' +
        '\t<br></form>\n' +
        '\t<iframe width=0 height=0 frameborder=0 style="display:none" id="ss_mframe" name="ss_mframe"></iframe></td></tr></table>\n' +
        '\t\t\t</div>\n' +
        '\t\t\t<div style="float:left;"><div id="page_right"><div id="ads_sys_div1"></div><script type="text/javascript">load_script_async( "/w_inc/reklama.php?1529|0|1208|"+Math.random()+"|1|"+escape(document.referrer)+"|1" );</script></div></div>\n' +
        '\t\t</td></tr></table>\n' +
        '\t\t\n' +
        '\t\t<div id="page_footer"><a class="a1" href="/ru/rules/">Правила</a>  &nbsp;|&nbsp;  <a class="a1" href="/ru/feedback/">Связь с редактором</a>  &nbsp;|&nbsp;  <a class="a1" href="/ru/reklama/">Реклама</a>  &nbsp;|&nbsp;  <a class="a1" href="/ru/api/">Сотрудничество</a> &nbsp;|&nbsp; <a href="/ru/real-estate/flats/jelgava-and-reg/sell/rss/" class=a1 target="_blank">RSS</a> &nbsp;|&nbsp; Объявления © ss sia 2000</div>\n' +
        '\n' +
        '\t</div>\n' +
        '</div>\n' +
        '\n' +
        '<script type="text/javascript">\n' +
        '<!--\n' +
        'if( window.add_link_to_selection && document.body.addEventListener ){document.body.addEventListener( "copy", add_link_to_selection );}ads_line_init(0,0);load_script_async("/w_inc/set.cookie.php?a=1&lg=1");window.onscroll=scbnrtop;window.onresize = new Function ( "scbnrtop();" );\n' +
        'load_script_async( "https://i.ss.lv/w_inc/js/msg.count-ss.js?"+new Date() );\n' +
        'load_script_async( "/w_inc/chk.php?mm=1&c=1208&db=ru&mode=1&g=1&a=1" );\n' +
        '-->\n' +
        '</script>\n' +
        '<div style="display:none;">\n' +
        '<script>document.write( \'<img src="/counter/index.php?c=1208&m=1&\'+new Date()+Math.random()+\'" width=1 height=1 border=0 alt="">\' );</script>\n' +
        '\n' +
        '<script async src="/w_inc/gcntr.php?id=ss"></script>\n' +
        '\n' +
        '<!-- puls.lv START //-->\n' +
        '<div id="_puls.lv_232-26935-27304-27306" style="display:inline-block;"></div>\n' +
        '<script type="text/javascript">_puls_counter_local( "232-26935-27304-27306" );</script>\n' +
        '<noscript>\n' +
        '<a href="http://puls.lv/" target="_blank"><img src="https://hits.puls.lv/?sid=232-26935-27304-27306&jsver=0" width=1 height=1 border=0 alt=""></a>\n' +
        '</noscript>\n' +
        '<!-- puls.lv END //-->\n' +
        '<!-- europuls.eu START //-->\n' +
        '<div id="_europuls.eu_2" style="display:inline-block;"></div>\n' +
        '<SCRIPT type="text/javascript">_ps_counter_local(2);</SCRIPT>\n' +
        '<noscript>\n' +
        '<a href="http://europuls.eu/" target="_blank"><img src="https://hits.europuls.eu/?sid=2&jsver=0"  width=1 height=1 border=0 alt=""></a>\n' +
        '</noscript>\n' +
        '<!-- europuls.eu END //-->\n' +
        '<img src="https://top.lv/counter.php?sid=2774&type=4" width="1" height="1" border="0" style="display:none" alt="">\n' +
        '\n' +
        '</div></BODY>\n' +
        '</HTML>';
    const parser = new SsLvListPageParser({
        baseUrl: DEFAULT_SS_LV_BASE_URL,
        city: 'jelgava',
        adType: 'sell',
    });
    const actual = parser.parseMainPage(page);
    const expected = {
        "flats": [
            {
                "id": 49786918,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdot plašu izremontētu trīs istabu dzīvokli ar ērtu plānojumu daļē",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/cghel.html",
                "district": "Елгава",
                "rooms": 3,
                "apartmentArea": 61,
                "floor": "7/9",
                "houseType": "602-я",
                "price": 56000
            },
            {
                "id": 49305926,
                "adType": "sell",
                "city": "jelgava",
                "title": "Centrs. Saskaņota pārplanošana. Izcils remonts, jaunas mēbeles un ja",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/hdjjg.html",
                "district": "Елгава",
                "rooms": 1,
                "apartmentArea": 34,
                "floor": "4/5",
                "houseType": "103-я",
                "price": 37000
            },
            {
                "id": 49496541,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdodu plašu, izremontētu trīs istabu dzīvokli ar ļoti ērtu plānoju",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ajgnd.html",
                "district": "Елгава",
                "rooms": 3,
                "apartmentArea": 63,
                "floor": "8/9",
                "houseType": "467-я",
                "price": 51000
            },
            {
                "id": 49768140,
                "adType": "sell",
                "city": "jelgava",
                "title": "Продаётся 2-х комнатная квартира с изолированными комнатами в хороше",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/aienm.html",
                "district": "Елгава",
                "rooms": 2,
                "apartmentArea": 47,
                "floor": "5/5",
                "houseType": "103-я",
                "price": 36200
            },
            {
                "id": 49237982,
                "adType": "sell",
                "city": "jelgava",
                "title": "Продам квартиру с печным отоплением. Санузел совмещенный, вода в ква",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/elejas-pag/fihlj.html",
                "district": "Элейская вол.",
                "rooms": 1,
                "apartmentArea": 31,
                "floor": "1/4",
                "houseType": "Хрущ.",
                "price": 5000
            },
            {
                "id": 49313783,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdod vienistabas dzīvoklī netālu no centra. Dzīvoklīs nav stūrā, s",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/chfcd.html",
                "district": "Елгава",
                "rooms": 1,
                "apartmentArea": 38,
                "floor": "5/5",
                "houseType": "103-я",
                "price": 20500
            },
            {
                "id": 49671719,
                "adType": "sell",
                "city": "jelgava",
                "title": "Продаю двухкомнатную квартиру в центре города в кирпичном доме на вт",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/afien.html",
                "district": "Елгава",
                "rooms": 2,
                "apartmentArea": 46,
                "floor": "2/5",
                "houseType": "Лит. пр.",
                "price": 52000
            },
            {
                "id": 49675797,
                "adType": "sell",
                "city": "jelgava",
                "title": "Tiek pārdots silts un saulains dzīvoklis. Klusi kaimiņi. Atsevišķi s",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/agkjb.html",
                "district": "Елгава",
                "rooms": 1,
                "apartmentArea": 36,
                "floor": "3/5",
                "houseType": "М. сем.",
                "price": 26500
            },
            {
                "id": 48752220,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdodas 2istabu dzīvoklis rekonstruētā 103. sērijas māja, kas atrod",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/kalnciems/emxhi.html",
                "district": "Калнциемс",
                "rooms": 2,
                "apartmentArea": 54,
                "floor": "4/5",
                "houseType": "Рекон.",
                "price": 17900
            },
            {
                "id": 49758000,
                "adType": "sell",
                "city": "jelgava",
                "title": "Īpašnieks pārdod saulainu 3 istabu dzīvokli ar augstajiem griestiem ",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dpxbx.html",
                "district": "Елгава",
                "rooms": 3,
                "apartmentArea": 74,
                "floor": "2/4",
                "houseType": "Сталинка",
                "price": 59000
            },
            {
                "id": 49749149,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdod dzivokli, 3 istabas, Mežciemā. Mājai ielikti pakešu logi. \nD",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/gcifh.html",
                "district": "Елгава",
                "rooms": 3,
                "apartmentArea": 38,
                "floor": "1/2",
                "houseType": "Дов. дом",
                "price": 16990
            },
            {
                "id": 48234327,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdod dzīvokli Jelgavas centrā labā stāvoklī. Visas ērtības un pils",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/bhghg.html",
                "district": "Елгава",
                "rooms": 2,
                "apartmentArea": 42,
                "floor": "3/5",
                "houseType": "Спец. пр.",
                "price": 45000
            },
            {
                "id": 48150327,
                "adType": "sell",
                "city": "jelgava",
                "title": "Продаёт хозяен. Место нахождения квартиры Калциемс. Елгавас новадс.",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/fmije.html",
                "district": "Елгава",
                "rooms": 3,
                "apartmentArea": 65,
                "floor": "1/3",
                "houseType": "Сталинка",
                "price": 15500
            },
            {
                "id": 49745310,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdodu 2-istabu dzīvokli 47 kv. m platībā ar kvalitatīvu balto apda",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/other/niixb.html",
                "district": "-",
                "rooms": 2,
                "apartmentArea": 47,
                "floor": "5/7",
                "houseType": "Нов.",
                "price": 51183
            },
            {
                "id": 49107308,
                "adType": "sell",
                "city": "jelgava",
                "title": "Продаю- 50 м от берега реки Лиелупе , 2х комнатную квартиру 56м2 , в",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/kalnciems/fhemo.html",
                "district": "Калнциемс",
                "rooms": 2,
                "apartmentArea": 56,
                "floor": "1/2",
                "houseType": "Сталинка",
                "price": 13500
            },
            {
                "id": 49725678,
                "adType": "sell",
                "city": "jelgava",
                "title": "Собственница продаёт 2-х комнатную квартиру с удобным расположением.",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dbpje.html",
                "district": "Елгава",
                "rooms": 2,
                "apartmentArea": 53,
                "floor": "5/5",
                "houseType": "Спец. пр.",
                "price": 37000
            },
            {
                "id": 49707639,
                "adType": "sell",
                "city": "jelgava",
                "title": "Piedāvājumā brīnišķīgs vienistabas dzīvoklis , kurš pēc platības pie",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/adimk.html",
                "district": "Елгава",
                "rooms": 1,
                "apartmentArea": 44,
                "floor": "1/5",
                "houseType": "М. сем.",
                "price": 25000
            },
            {
                "id": 49720486,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdodu nesen daļēji izremontētu 2-istabu dzīvoklīti (38 kv-m) Jelga",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ajccb.html",
                "district": "Елгава",
                "rooms": 2,
                "apartmentArea": 43,
                "floor": "1/2",
                "houseType": "Дов. дом",
                "price": 28000
            },
            {
                "id": 49663389,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdošanā trīsistabu dzīvoklis vinā no veiksmīgākajām padomju laiku ",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/dmgkh.html",
                "district": "Елгава",
                "rooms": 3,
                "apartmentArea": 65,
                "floor": "5/5",
                "houseType": "103-я",
                "price": 46000
            },
            {
                "id": 49706823,
                "adType": "sell",
                "city": "jelgava",
                "title": "Pārdodu ļoti siltu un plašu 1 istabas dzīvokli. Augstais pirmais stā",
                "url": "https:/www.ss.lv/msg/ru/real-estate/flats/jelgava-and-reg/jelgava/ahxgl.html",
                "district": "Елгава",
                "rooms": 1,
                "apartmentArea": 39,
                "floor": "1/5",
                "houseType": "Лит. пр.",
                "price": 35000
            }
        ],
        "pageLinks": [
            "https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/page3.html",
            "https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/",
            "https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/page2.html",
            "https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/page3.html",
            "https:/www.ss.lv/ru/real-estate/flats/jelgava-and-reg/all/sell/"
        ]
    };

    expect(actual).toStrictEqual(expected);
});
