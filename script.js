/* Ganesh Utsav 2027 - Vignahartha Friends Circle
   Edit the CONFIG and DAYS blocks below. Everything else can stay as it is. */
/* =====================================================
   EDIT THIS BLOCK — your details go here
   ===================================================== */
var CONFIG = {
  committee: { te: 'విఘ్నహర్త ఫ్రెండ్స్ సర్కిల్', en: 'Vignahartha Friends Circle' },
  venue:     { te: 'చిన్న ఇటికంపాడు', en: 'Chinna Itikampadu' },   // add the full address / landmark if you like
  mapUrl: '',                       // e.g. a Google Maps link. Leave '' to hide the map button.
  phone: '918106216993',            // country code + number, no + or spaces
  phoneDisplay: '+91 8106216993',
  upi: {
    id: 'saikrishnarsk1552@axl',           // your real UPI ID, e.g. name@okhdfcbank
    name: 'Vignahartha Friends Circle'   // name that shows on the payment screen
  },
  // Paste your Google Apps Script web-app URL here (emails + Google Sheet log).
  endpoint: 'PASTE-APPS-SCRIPT-URL-HERE',
  // Festival start (Day 1, Ganesh Chaturthi). Day 11 = Visarjan (Anant Chaturdashi).
  start: '2027-09-04T06:00:00+05:30',
  visarjanStartHour: 12             // hour (IST) when the Visarjan procession begins
};

/* Daily programme: time is 24-hour "HH:MM" */
var DAYS = [
  { title:{te:'గణపతి ఆగమనం', en:'Ganesha arrives'}, items:[
    ['07:00',{te:'డప్పు వాద్యాలతో గణపతి విగ్రహ ఆగమన శోభాయాత్ర', en:'Idol welcome procession with dhol and music'}],
    ['11:00',{te:'ప్రాణప్రతిష్ఠ మరియు కలశ స్థాపన', en:'Pranapratishtha and Kalasha Sthapana'}],
    ['13:00',{te:'మహా నైవేద్యం మరియు ప్రసాద వితరణ', en:'Maha Naivedyam and prasadam distribution'}],
    ['19:00',{te:'సాయంత్ర హారతి', en:'Evening aarti'}] ]},
  { title:{te:'అభిషేకం మరియు హోమం', en:'Abhishekam and homam'}, items:[
    ['07:00',{te:'గణపతి అభిషేకం', en:'Ganapati Abhishekam'}],
    ['10:00',{te:'గణపతి హోమం', en:'Ganapati Homam'}],
    ['17:00',{te:'పిల్లల చిత్రలేఖన పోటీలు', en:"Children's drawing competition"}],
    ['19:00',{te:'హారతి మరియు భజనలు', en:'Aarti and bhajans'}] ]},
  { title:{te:'మహిళల భక్తి దినం', en:"Women's devotional day"}, items:[
    ['09:00',{te:'లలితా సహస్రనామ పారాయణం', en:'Lalitha Sahasranama parayanam'}],
    ['16:00',{te:'కోలాటం మరియు ముగ్గుల పోటీలు', en:'Kolatam and rangoli competition'}],
    ['19:00',{te:'హారతి', en:'Aarti'}] ]},
  { title:{te:'అన్నదానం', en:'Annadanam'}, items:[
    ['07:00',{te:'ఉదయ పూజ', en:'Morning puja'}],
    ['12:30',{te:'అన్నదానం (సామూహిక భోజనం)', en:'Annadanam (community meal)'}],
    ['19:00',{te:'భక్తి సంగీత సాయంత్రం', en:'Devotional music evening'}] ]},
  { title:{te:'హరికథ మరియు సంగీతం', en:'Stories and music'}, items:[
    ['10:00',{te:'గణపతి అథర్వశీర్ష పారాయణం', en:'Ganapati Atharvashirsha parayanam'}],
    ['18:00',{te:'హరికథా కాలక్షేపం', en:'Harikatha'}],
    ['20:00',{te:'హారతి', en:'Aarti'}] ]},
  { title:{te:'సేవా దినం', en:'Service day'}, items:[
    ['09:00',{te:'ఉచిత వైద్య శిబిరం', en:'Free health check-up camp'}],
    ['10:00',{te:'రక్తదాన శిబిరం', en:'Blood donation camp'}],
    ['19:00',{te:'హారతి', en:'Aarti'}] ]},
  { title:{te:'సాంస్కృతిక సాయంత్రం', en:'Cultural evening'}, items:[
    ['17:00',{te:'పిల్లల వేషధారణ పోటీలు', en:'Fancy dress for children'}],
    ['18:30',{te:'శాస్త్రీయ మరియు జానపద నృత్య ప్రదర్శనలు', en:'Classical and folk dance performances'}],
    ['20:30',{te:'హారతి', en:'Aarti'}] ]},
  { title:{te:'భజన సంధ్య', en:'Bhajan sandhya'}, items:[
    ['09:00',{te:'విష్ణు సహస్రనామ పారాయణం', en:'Vishnu Sahasranama parayanam'}],
    ['18:00',{te:'భజన సంధ్య', en:'Bhajan sandhya'}],
    ['20:00',{te:'హారతి', en:'Aarti'}] ]},
  { title:{te:'ఆటలు మరియు సామూహిక దినం', en:'Games and community day'}, items:[
    ['16:00',{te:'పిల్లలు మరియు కుటుంబాలకు ఆటల పోటీలు', en:'Games for children and families'}],
    ['19:00',{te:'బహుమతి ప్రదానం', en:'Prize distribution'}],
    ['20:00',{te:'హారతి', en:'Aarti'}] ]},
  { title:{te:'మహా పూర్ణాహుతి', en:'Maha Poornahuti'}, items:[
    ['09:00',{te:'మహా పూర్ణాహుతి', en:'Maha Poornahuti'}],
    ['13:00',{te:'మహా అన్నదానం', en:'Maha Annadanam'}],
    ['17:00',{te:'లడ్డూ వేలం', en:'Laddu auction'}],
    ['20:00',{te:'ప్రత్యేక మహా హారతి', en:'Special maha aarti'}] ]},
  { visarjan:true, title:{te:'నిమజ్జనం', en:'Visarjan'}, items:[
    ['09:00',{te:'వీడ్కోలు పూజ మరియు హారతి', en:'Farewell puja and aarti'}],
    ['12:00',{te:'శోభాయాత్ర ప్రారంభం', en:'Shobha Yatra begins'}],
    ['17:00',{te:'నిర్ణీత ప్రదేశంలో నిమజ్జనం', en:'Visarjan at the immersion point'}] ]}
];

/* =====================================================
   Translations
   ===================================================== */
var STR = {
  te: {
    brandShort:'విఘ్నహర్త ఫ్రెండ్స్ సర్కిల్', navProgramme:'కార్యక్రమాలు', navDonate:'విరాళం', navContact:'సంప్రదించండి',
    heroTitle:'గణేష్ ఉత్సవ్ 2027', heroChant:'గణపతి బప్పా మోరియా!',
    ctaDonate:'విరాళం ఇవ్వండి', ctaProgramme:'రోజువారీ కార్యక్రమాలు',
    venuePrefix:'వేదిక: ',
    unitDays:'రోజులు', unitHours:'గంటలు', unitMins:'నిమిషాలు', unitSecs:'సెకన్లు',
    countBefore:'ఉత్సవం ప్రారంభానికి ఇంకా', countDuring:'నిమజ్జన శోభాయాత్రకు ఇంకా',
    countToday:'నేడు నిమజ్జన శోభాయాత్ర. గణపతి బప్పా మోరియా!', countAfter:'వచ్చే ఏడాది మళ్లీ రావయ్యా గణపతి!',
    progTitle:'రోజువారీ కార్యక్రమాలు', progIntro:'ఒక రోజును ఎంచుకుని ఆ రోజు కార్యక్రమాలు చూడండి.',
    progNote:'సమయాలు మారే అవకాశం ఉంది. తాజా సమాచారం కోసం వాట్సాప్‌లో సంప్రదించండి.',
    today:'నేడు', visarjan:'నిమజ్జనం', dayLabel:'రోజు',
    donTitle:'ఉత్సవానికి విరాళం ఇవ్వండి',
    donIntro:'మీ విరాళం అలంకరణ, అన్నదానం, పూజా సామగ్రి మరియు నిమజ్జన ఏర్పాట్లకు ఉపయోగపడుతుంది.',
    amtLabel:'సేవ / మొత్తం ఎంచుకోండి', amtOther:'ఇతర మొత్తం (₹)', nameLabel:'మీ పేరు (ఐచ్ఛికం)',
    seva1:'పుష్ప సేవ', seva2:'నైవేద్య సేవ', seva3:'అభిషేక సేవ', seva4:'అన్నదాన సేవ',
    emailLabel:'ఈమెయిల్ (రసీదు కోసం)', phoneLabel:'ఫోన్ నంబర్ (ఐచ్ఛికం)', utrPh:'UTR / ట్రాన్సాక్షన్ ID',
    errAmount:'దయచేసి మొత్తం నమోదు చేయండి.', errEmail:'సరైన ఈమెయిల్ ఇవ్వండి.', errUtr:'UTR / ట్రాన్సాక్షన్ ID నమోదు చేయండి.',
    thanks:'ధన్యవాదాలు! మీ ఈమెయిల్‌కు నిర్ధారణ వస్తుంది.',
    payBtn:'UPI తో చెల్లించండి',
    appsTitle:'మీ UPI యాప్ ఎంచుకోండి', appsNote:'యాప్ మొత్తంతో తెరుచుకుంటుంది. అక్కడ మీ UPI PIN నమోదు చేసి చెల్లించండి.', otherApp:'ఇతర UPI యాప్',
    omChant:'ఓం గం గణపతయే నమః', modalCopy:'మీ యాప్ కనిపించలేదా? వివరాలు కాపీ చేయండి', closeBtn:'మూసివేయండి', soundMute:'చాంటింగ్ ఆపండి', soundPlay:'చాంటింగ్ ప్లే చేయండి',
    manualToggle:'చెల్లింపు విఫలమైందా? UPI ID తో చెల్లించండి', manualTitle:'UPI ID తో చెల్లించండి',
    manualSteps:'PhonePe / GPay / Paytm తెరిచి “UPI ID కి చెల్లించండి” ఎంచుకోండి. క్రింది వివరాలను కాపీ చేసి అతికించండి. చెల్లించిన తర్వాత కింద UTR ఇవ్వండి.',
    lblUpi:'UPI ID', lblAmt:'మొత్తం (₹)', lblRef:'సందేశం / నోట్',
    scanTitle:'లేదా స్కాన్ చేయండి', scanHelp:'ఏదైనా UPI యాప్‌తో ఈ QR స్కాన్ చేయండి.',
    upiIdLabel:'UPI ID', copy:'కాపీ', copied:'కాపీ అయింది',
    paidTitle:'చెల్లించారా?',
    paidText:'PhonePe లో చెల్లించిన తర్వాత UTR / ట్రాన్సాక్షన్ ID ఇక్కడ ఇవ్వండి.',
    paidBtn:'చెల్లించాను',
    qrWait:'UPI ID జోడించిన తర్వాత QR ఇక్కడ కనిపిస్తుంది.',
    unset:'UPI వివరాలు ఇంకా నమోదు కాలేదు. వెబ్‌సైట్ యజమాని వాటిని జోడించాలి.',
    contactTitle:'సంప్రదించండి', callBtn:'కాల్ చేయండి', mapBtn:'మ్యాప్‌లో చూడండి',
    footerChant:'గణపతి బప్పా మోరియా! వచ్చే ఏడాది మళ్లీ రావయ్యా.',
    dayWord:function(n){return n+'వ రోజు';},
    payeeCheck:function(n){return 'చెల్లించే ముందు గ్రహీత పేరు “'+n+'” అని సరిచూసుకోండి.';},
    dateRange:function(a,b){return a+' నుండి '+b+' వరకు';},
    waHello:'నమస్కారం, గణేష్ ఉత్సవ్ 2027 గురించి తెలుసుకోవాలి.'
  },
  en: {
    brandShort:'Vignahartha Friends Circle', navProgramme:'Programme', navDonate:'Donate', navContact:'Contact',
    heroTitle:'Ganesh Utsav 2027', heroChant:'Ganapati Bappa Morya!',
    ctaDonate:'Donate now', ctaProgramme:'Daily programme',
    venuePrefix:'Venue: ',
    unitDays:'Days', unitHours:'Hours', unitMins:'Minutes', unitSecs:'Seconds',
    countBefore:'Utsav begins in', countDuring:'Visarjan Shobha Yatra begins in',
    countToday:'Visarjan Shobha Yatra is today. Ganapati Bappa Morya!', countAfter:'See you next year, Ganapati Bappa!',
    progTitle:'Daily programme', progIntro:'Pick a day to see what is planned.',
    progNote:'Timings may change. Message us on WhatsApp for the latest updates.',
    today:'Today', visarjan:'Visarjan', dayLabel:'Day',
    donTitle:'Contribute to the Utsav',
    donIntro:'Your contribution goes toward decorations, annadanam, puja items and the Visarjan arrangements.',
    amtLabel:'Choose a seva / amount', amtOther:'Other amount (₹)', nameLabel:'Your name (optional)',
    seva1:'Flowers', seva2:'Naivedyam', seva3:'Abhishekam', seva4:'Annadanam',
    emailLabel:'Email (for your receipt)', phoneLabel:'Phone (optional)', utrPh:'UTR / transaction ID',
    errAmount:'Please choose an amount.', errEmail:'Please enter a valid email.', errUtr:'Please enter the UTR / transaction ID.',
    thanks:'Thank you! A confirmation email is on its way.',
    payBtn:'Pay with UPI',
    appsTitle:'Choose your UPI app', appsNote:'The app opens with the amount filled in. Enter your UPI PIN there to pay.', otherApp:'Other UPI app',
    omChant:'Om Gam Ganapataye Namaha', modalCopy:'App not listed? Copy the details instead', closeBtn:'Close', soundMute:'Mute chant', soundPlay:'Play chant',
    manualToggle:'Payment declined? Pay with the UPI ID', manualTitle:'Pay using the UPI ID',
    manualSteps:'Open PhonePe, GPay or Paytm and choose "Pay to UPI ID". Copy and paste the details below. After paying, enter the UTR further down.',
    lblUpi:'UPI ID', lblAmt:'Amount (₹)', lblRef:'Note / message',
    scanTitle:'Or scan to pay', scanHelp:'Scan this QR with any UPI app.',
    upiIdLabel:'UPI ID', copy:'Copy', copied:'Copied',
    paidTitle:'Already paid?',
    paidText:'After paying in PhonePe, enter the UTR / transaction ID here.',
    paidBtn:"I've paid",
    qrWait:'The QR code appears here once the UPI ID is added.',
    unset:'UPI details are not set yet. The site owner needs to add them.',
    contactTitle:'Contact', callBtn:'Call us', mapBtn:'View on map',
    footerChant:'Ganapati Bappa Morya! Come again soon next year.',
    dayWord:function(n){return 'Day '+n;},
    payeeCheck:function(n){return 'Before you pay, check that the payee name shows as “'+n+'”.';},
    dateRange:function(a,b){return a+' to '+b;},
    waHello:'Namaskaram, I would like to know more about Ganesh Utsav 2027.'
  }
};

/* =====================================================
   App
   ===================================================== */
(function(){
  var $ = function(s,r){return (r||document).querySelector(s);};
  var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};

  var START = new Date(CONFIG.start).getTime();
  var DAY_MS = 864e5;
  var VIS_START = START + 10*DAY_MS + (CONFIG.visarjanStartHour-6)*36e5;
  var END = START + 10*DAY_MS + 18*36e5;

  var lang = 'te';
  try{ var saved = localStorage.getItem('gu27-lang'); if(saved==='te'||saved==='en') lang = saved; }catch(e){}

  var selected = 0, amount = '';
  var pledgeRef = 'GU27-' + Math.random().toString(36).slice(2,6).toUpperCase();
  var dayDates = DAYS.map(function(_,i){return new Date(START + i*DAY_MS);});
  function istKey(d){return d.toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'});}
  var todayIdx = dayDates.map(istKey).indexOf(istKey(new Date()));
  selected = todayIdx>=0 ? todayIdx : 0;

  function t(k){return STR[lang][k];}
  function loc(){return lang==='te' ? 'te-IN' : 'en-IN';}
  function fmt(d,o){o.timeZone='Asia/Kolkata';return d.toLocaleDateString(loc(),o);}
  function fmtTime(hhmm){
    var p=hhmm.split(':'), h=+p[0], m=p[1], h12=h%12||12;
    if(lang==='en') return h12+':'+m+' '+(h<12?'AM':'PM');
    var w = h<12?'ఉదయం':(h<16?'మధ్యాహ్నం':(h<20?'సాయంత్రం':'రాత్రి'));
    return w+' '+h12+':'+m;
  }
  function upiUnset(){return /^REPLACE/i.test(CONFIG.upi.id);}

  /* --- Decorative SVG: paper bunting strung across the top of the hero --- */
  function drawBunting(){
    var svg=$('#bunting'), W=1200, H=120, swags=6, sw=W/swags, sag=40, n=9, out='', ci=0;
    var cols=['#D6246E','#FFD23F','#0F7A80','#F26B1D','#7B5CE6'];
    svg.setAttribute('viewBox','0 0 '+W+' '+H);
    svg.setAttribute('preserveAspectRatio','xMidYMin slice');
    for(var s=0;s<swags;s++){
      var x0=s*sw, x1=x0+sw, cx=(x0+x1)/2, y0=6, cy=y0+2*sag;
      out+='<path d="M'+x0+' '+y0+' Q'+cx+' '+cy+' '+x1+' '+y0+'" fill="none" stroke="#FFF3D6" stroke-width="2.5"/>';
      for(var i=1;i<n;i++){
        var u=i/n, m=1-u;
        var x=m*m*x0+2*m*u*cx+u*u*x1, y=m*m*y0+2*m*u*cy+u*u*y0;
        var dx=2*m*(cx-x0)+2*u*(x1-cx), dy=2*m*(cy-y0)+2*u*(y0-cy);
        var ang=Math.atan2(dy,dx)*180/Math.PI;
        out+='<polygon transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+ang.toFixed(1)+')" points="-12,0 12,0 0,36" fill="'+cols[ci++%cols.length]+'"/>';
      }
    }
    svg.innerHTML=out;
  }

  /* --- Static text --- */
  function applyText(){
    $$('[data-i18n]').forEach(function(el){var v=t(el.getAttribute('data-i18n')); if(typeof v==='string') el.textContent=v;});
    $('#committee').textContent = CONFIG.committee[lang];
    $('#venueLine').textContent = t('venuePrefix') + CONFIG.venue[lang];
    $('#dateRange').textContent = t('dateRange')(
      fmt(dayDates[0],{day:'numeric',month:'long'}),
      fmt(dayDates[10],{day:'numeric',month:'long',year:'numeric'})
    );
    $('#contactName').textContent = CONFIG.committee[lang];
    $('#footName').textContent = CONFIG.committee[lang] + ', ' + CONFIG.venue[lang];
    $('#contactVenue').textContent = CONFIG.venue[lang];
    $('#payeeCheck').textContent = t('payeeCheck')(CONFIG.upi.name);
    $('#unsetWarn').hidden = !upiUnset();
    $('#upiId').textContent = CONFIG.upi.id;
    $('#utr').placeholder = t('utrPh');
    $('#utr').setAttribute('aria-label', t('utrPh'));
    $('#callBtn').href = 'tel:+' + CONFIG.phone;
    $('#callBtn').setAttribute('aria-label', t('callBtn')+' '+CONFIG.phoneDisplay);
    $('#waBtn').href = 'https://wa.me/'+CONFIG.phone+'?text='+encodeURIComponent(t('waHello'));
    if(CONFIG.mapUrl){ $('#mapBtn').hidden=false; $('#mapBtn').href=CONFIG.mapUrl; }
    document.documentElement.lang = lang;
    document.title = lang==='te' ? 'గణేష్ ఉత్సవ్ 2027' : 'Ganesh Utsav 2027';
    $$('[data-set-lang]').forEach(function(b){b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang')===lang));});
  }

  /* --- Countdown --- */
  function tick(){
    var now=Date.now(), target=0, mode='';
    if(now<START){target=START;mode='before';}
    else if(now<VIS_START){target=VIS_START;mode='during';}
    else if(now<END){mode='today';}
    else mode='after';
    var cells=$('#cells');
    if(target){
      cells.hidden=false;
      var s=Math.max(0,Math.floor((target-now)/1000));
      $('#cd-d').textContent=Math.floor(s/86400);
      $('#cd-h').textContent=Math.floor(s%86400/3600);
      $('#cd-m').textContent=Math.floor(s%3600/60);
      $('#cd-s').textContent=s%60;
      $('#countLabel').textContent = mode==='before' ? t('countBefore') : t('countDuring');
    } else {
      cells.hidden=true;
      $('#countLabel').textContent = mode==='today' ? t('countToday') : t('countAfter');
    }
  }

  /* --- Programme --- */
  function dayLabel(i){return DAYS[i].visarjan ? t('visarjan') : t('dayWord')(i+1);}
  function renderDays(){
    var html='';
    DAYS.forEach(function(d,i){
      var on=(i===selected);
      html+='<div class="slot'+(on?' on':'')+'" role="presentation">'+
        '<button type="button" class="flag" role="tab" id="tab'+i+'" data-i="'+i+'" aria-selected="'+on+'" tabindex="'+(on?0:-1)+'">'+
        (d.visarjan ? '<b class="word">'+t('visarjan')+'</b>' : '<small>'+t('dayLabel')+'</small><b>'+(i+1)+'</b>')+
        '<i>'+fmt(dayDates[i],{day:'numeric',month:'short'})+'</i></button>'+
        (i===todayIdx?'<em class="tag">'+t('today')+'</em>':'')+'</div>';
    });
    $('#days').innerHTML=html;
    renderPanel();
  }
  function renderPanel(){
    var d=DAYS[selected], html='';
    html+='<div class="panel-head"><p class="daynum">'+dayLabel(selected)+'</p>'+
      '<h3 class="display">'+d.title[lang]+'</h3>'+
      '<p class="date">'+fmt(dayDates[selected],{weekday:'long',day:'numeric',month:'long',year:'numeric'})+'</p></div><ol class="items">';
    d.items.forEach(function(it){
      html+='<li><time>'+fmtTime(it[0])+'</time><span>'+it[1][lang]+'</span></li>';
    });
    html+='</ol>';
    var p=$('#panel'); p.innerHTML=html; p.setAttribute('aria-labelledby','tab'+selected);
  }
  function selectDay(i,focus){
    selected=i;
    $$('.slot').forEach(function(sl,j){sl.classList.toggle('on',j===i);});
    $$('.flag').forEach(function(b,j){
      b.setAttribute('aria-selected',String(j===i)); b.tabIndex=(j===i?0:-1); b.classList.remove('swing');
    });
    var f=$('#tab'+i); void f.offsetWidth; f.classList.add('swing');
    renderPanel();
    if(focus){ f.focus(); f.scrollIntoView({inline:'center',block:'nearest'}); }
  }
  $('#days').addEventListener('click',function(e){
    var b=e.target.closest('.flag'); if(b) selectDay(+b.getAttribute('data-i'),false);
  });
  $('#days').addEventListener('keydown',function(e){
    var k=e.key, n=DAYS.length;
    if(k==='ArrowRight') {e.preventDefault(); selectDay((selected+1)%n,true);}
    if(k==='ArrowLeft')  {e.preventDefault(); selectDay((selected-1+n)%n,true);}
    if(k==='Home')       {e.preventDefault(); selectDay(0,true);}
    if(k==='End')        {e.preventDefault(); selectDay(n-1,true);}
  });

  /* --- Donate --- */
  function query(){
    var p=['pa='+CONFIG.upi.id,'pn='+encodeURIComponent(CONFIG.upi.name)];
    if(amount) p.push('am='+amount+'.00');
    p.push('cu=INR','tn='+encodeURIComponent('Ganesh Utsav '+pledgeRef));
    return p.join('&');
  }
  function upiLink(){return 'upi://pay?'+query();}
  function phonepeLink(){return 'phonepe://pay?'+query();}
  var EMAIL_RE=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  function showErr(k){var e=$('#formErr'); e.hidden=!k; if(k) e.textContent=t(k);}
  function send(stage,extra){
    if(!CONFIG.endpoint || /PASTE/.test(CONFIG.endpoint)) return;
    var body=Object.assign({ref:pledgeRef,stage:stage,amount:amount,name:$('#donor').value.trim(),
      email:$('#email').value.trim(),phone:$('#phone').value.trim()},extra||{});
    try{
      fetch(CONFIG.endpoint,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(body),keepalive:true}).catch(function(){});
    }catch(e){}
  }
  function updateDonate(){
    var btn=$('#payBtn'), box=$('#qr'), unset=upiUnset();
    if(!$('#manual').hidden) renderManual();
    if(unset){
      btn.setAttribute('aria-disabled','true'); btn.setAttribute('href','#donate');
    } else {
      btn.removeAttribute('aria-disabled'); btn.setAttribute('href',phonepeLink());
    }
    box.innerHTML='';
    if(unset){ box.innerHTML='<span class="qr-wait">'+t('qrWait')+'</span>'; }
    if(!unset && window.QRCode){
      try{
        new QRCode(box,{text:upiLink(),width:200,height:200,colorDark:'#000000',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
      }catch(e){}
    }
  }
  $('#amts').addEventListener('click',function(e){
    var b=e.target.closest('.amt'); if(!b) return;
    var same = b.getAttribute('aria-pressed')==='true';
    $$('.amt').forEach(function(x){x.setAttribute('aria-pressed','false');});
    if(same){amount='';} else {b.setAttribute('aria-pressed','true'); amount=b.getAttribute('data-amt');}
    $('#custom').value=amount;
    updateDonate();
  });
  $('#custom').addEventListener('input',function(e){
    var v=e.target.value.replace(/\D/g,'').slice(0,7);
    e.target.value=v; amount=v;
    $$('.amt').forEach(function(x){x.setAttribute('aria-pressed','false');});
    updateDonate();
  });
  var started=false, manualRows=[];
  function check(){
    if(!(+amount>0)){showErr('errAmount');return false;}
    if(!EMAIL_RE.test($('#email').value.trim())){showErr('errEmail');return false;}
    showErr('');return true;
  }
  function copyText(text,btn){
    var done=function(){btn.textContent=t('copied');setTimeout(function(){btn.textContent=t('copy');},1500);};
    try{ if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done);return;} }catch(e){}
    var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
    document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');done();}catch(e){}
    document.body.removeChild(ta);
  }
  function renderManual(){
    manualRows=[[t('lblUpi'),CONFIG.upi.id],[t('lblAmt'),amount||''],[t('lblRef'),'Ganesh Utsav '+pledgeRef]];
    var h='<ul class="mrows">';
    manualRows.forEach(function(r,i){
      h+='<li><span>'+r[0]+'</span><b>'+(r[1]||'-')+'</b>'+(r[1]?'<button type="button" class="copy" data-c="'+i+'">'+t('copy')+'</button>':'')+'</li>';
    });
    $('#manualRows').innerHTML=h+'</ul>';
  }
  function startOnce(){ if(!started){started=true;send('started');} }
  function openManual(){
    startOnce();
    $('#manual').hidden=false; renderManual();
  }
  var modal=$('#appModal');
  function openModal(){
    startOnce();
    $('#modalAmt').textContent='₹'+amount;
    modal.hidden=false; document.body.style.overflow='hidden';
    var f=$('#apps .app'); if(f) f.focus();
  }
  function closeModal(){ modal.hidden=true; document.body.style.overflow=''; $('#payBtn').focus(); }
  $('#modalClose').addEventListener('click',closeModal);
  modal.addEventListener('click',function(e){ if(e.target===modal) closeModal(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape' && !modal.hidden) closeModal(); });
  $('#modalCopy').addEventListener('click',function(){
    closeModal(); openManual(); $('#manual').scrollIntoView({block:'center'});
  });
  var APPS={
    phonepe:{pkg:'com.phonepe.app',scheme:'phonepe://pay?'},
    gpay:{pkg:'com.google.android.apps.nbu.paisa.user',scheme:'tez://upi/pay?'},
    paytm:{pkg:'net.one97.paytm',scheme:'paytmmp://pay?'},
    bhim:{pkg:'in.org.npci.upiapp',scheme:'upi://pay?'},
    other:{scheme:'upi://pay?'}
  };
  function appLink(key){
    var a=APPS[key], q=query();
    if(/Android/i.test(navigator.userAgent) && a.pkg) return 'intent://pay?'+q+'#Intent;scheme=upi;package='+a.pkg+';end';
    return a.scheme+q;
  }
  $('#apps').addEventListener('click',function(e){
    var b=e.target.closest('[data-app]'); if(!b||upiUnset()||!check()) return;
    var url=appLink(b.getAttribute('data-app'));
    closeModal();
    window.location.href=url;
  });
  $('#manualRows').addEventListener('click',function(e){
    var b=e.target.closest('[data-c]'); if(b) copyText(String(manualRows[+b.getAttribute('data-c')][1]),b);
  });
  $('#manualToggle').addEventListener('click',function(){
    if(upiUnset()) return;
    if(!$('#manual').hidden){$('#manual').hidden=true;return;}
    if(check()) openManual();
  });
  $('#payBtn').addEventListener('click',function(e){
    e.preventDefault();
    if(upiUnset()||!check()) return;
    openModal();
  });
  $('#paidBtn').addEventListener('click',function(){
    if(!(+amount>0)) return showErr('errAmount');
    if(!EMAIL_RE.test($('#email').value.trim())) return showErr('errEmail');
    var utr=$('#utr').value.trim();
    if(!/^[A-Za-z0-9]{8,30}$/.test(utr)) return showErr('errUtr');
    showErr('');
    send('paid',{utr:utr});
    var th=$('#thanks'); th.hidden=false; th.textContent=t('thanks');
  });
  $('#copyBtn').addEventListener('click',function(){
    var text=CONFIG.upi.id, done=function(){
      $('#copyLive').textContent=t('copied');
      var b=$('#copyBtn'); b.textContent=t('copied');
      setTimeout(function(){b.textContent=t('copy'); $('#copyLive').textContent='';},1800);
    };
    try{
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done,function(){fallback();});
      } else fallback();
    }catch(e){fallback();}
    function fallback(){
      var ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      try{document.execCommand('copy'); done();}catch(e){}
      document.body.removeChild(ta);
    }
  });

  /* --- Chant audio: ganpati_namah.mp3 sits next to index.html, loops non-stop --- */
  var chant=new Audio('ganpati_namah.mp3'); chant.loop=true; chant.preload='auto';
  var sbtn=$('#soundBtn'), userMuted=false;
  try{ userMuted = localStorage.getItem('gu27-mute')==='1'; }catch(e){}
  function paintSound(){
    var on=!chant.paused;
    sbtn.textContent = on ? '🔊' : '🔇';
    sbtn.setAttribute('aria-pressed',String(on));
    sbtn.setAttribute('aria-label', on ? t('soundMute') : t('soundPlay'));
    sbtn.title = on ? t('soundMute') : t('soundPlay');
  }
  function stopChant(){ userMuted=true; chant.pause(); chant.currentTime=0; chant.muted=true; }
  function playChant(){ userMuted=false; chant.muted=false; chant.play().catch(function(){}); }
  chant.addEventListener('play',function(){ if(userMuted){ chant.pause(); } paintSound(); });  // guard: never sound while muted
  chant.addEventListener('pause',paintSound);
  chant.addEventListener('ended',function(){ if(!userMuted){ chant.currentTime=0; chant.play().catch(function(){}); } });  // safety net if loop stops
  document.addEventListener('visibilitychange',function(){   // resume after returning from a payment app / another tab
    if(!document.hidden && !userMuted && chant.paused && chant.currentTime>0) chant.play().catch(function(){});
  });
  window.addEventListener('pageshow',function(){ if(!userMuted && chant.paused && chant.currentTime>0) chant.play().catch(function(){}); });
  chant.addEventListener('canplay',function(){ sbtn.hidden=false; paintSound(); });
  chant.addEventListener('error',function(){ sbtn.hidden=true; });
  sbtn.addEventListener('click',function(){
    if(!chant.paused) stopChant(); else playChant();
    try{ localStorage.setItem('gu27-mute',userMuted?'1':'0'); }catch(e){}
    paintSound();
  });
  function onFirstTap(e){
    if(e.target.closest && e.target.closest('#soundBtn')) return;
    document.removeEventListener('pointerdown',onFirstTap);
    document.removeEventListener('keydown',onFirstTap);
    if(!userMuted) playChant();
  }
  if(!userMuted){
    chant.play().catch(function(){   /* browsers block sound until the first tap */
      document.addEventListener('pointerdown',onFirstTap);
      document.addEventListener('keydown',onFirstTap);
    });
  }

  /* --- Language switch --- */
  function setLang(l){
    lang=l;
    try{localStorage.setItem('gu27-lang',l);}catch(e){}
    applyText(); renderDays(); tick(); updateDonate(); paintSound();
    if(!modal.hidden) $('#modalAmt').textContent='₹'+amount;
    if(!$('#formErr').hidden) showErr('');
    if(!$('#thanks').hidden) $('#thanks').textContent=t('thanks');
  }
  $$('[data-set-lang]').forEach(function(b){
    b.addEventListener('click',function(){setLang(b.getAttribute('data-set-lang'));});
  });

  drawBunting();
  applyText(); renderDays(); updateDonate(); tick();
  setInterval(tick,1000);
  if(todayIdx>=0){   // on phones, bring today's flag into view
    var sc=$('.days-scroll'), sl=$('.slot.on');
    if(sc&&sl) sc.scrollLeft=sl.offsetLeft-sc.clientWidth/2+sl.offsetWidth/2;
  }
})();