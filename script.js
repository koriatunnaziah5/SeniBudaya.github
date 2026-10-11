var $=function(i){return document.getElementById(i)},app=$('app'),best={},M=[],MA=[],R=0,ac=null,X=0,CL=['#e5484d','#3a86ff','#8338ec','#06a77d','#f08a00','#d6336c'];
var D=[
{id:'rupa',g:[1,3],tag:'Seni Rupa',t:'Seni Rupa',e:'🎨',c:CL[0],w:'mix',intro:'Warna, garis, dan bentuk bikin gambar jadi hidup! Ketuk kartu untuk membuka rahasianya!',
items:`🔴🟡🔵|Warna Pokok|Merah, kuning, dan biru. Warna ini tidak bisa dibuat dari campuran warna lain.
🟠🟢🟣|Warna Campuran|Merah + kuning = oranye. Kuning + biru = hijau. Biru + merah = ungu.
〰️|Garis|Ada garis lurus, garis lengkung seperti ombak, dan garis zigzag seperti petir.
🔷|Bentuk Dasar|Lingkaran, segitiga, dan persegi. Banyak benda di sekitar kita berbentuk seperti ini.
✂️|Kolase|Karya seni dari potongan kertas, kain, atau daun yang ditempel di kertas gambar.
🍃|Cetak Daun|Daun diberi cat lalu ditekan ke kertas sehingga bentuk daunnya tercetak.`,
quiz:`Mana yang termasuk warna pokok?|Merah|Hijau|Oranye
Merah dicampur kuning menjadi warna...|Oranye|Ungu|Hijau
Kuning dicampur biru menjadi warna...|Hijau|Merah|Cokelat
Biru dicampur merah menjadi warna...|Ungu|Oranye|Hijau
Garis yang patah-patah seperti petir disebut garis...|Zigzag|Lurus|Lengkung
Karya dari potongan kertas yang ditempel disebut...|Kolase|Cetak|Patung
Roda sepeda berbentuk...|Lingkaran|Segitiga|Persegi
Cetak daun dibuat dengan cara...|Menekan daun yang diberi cat ke kertas|Menggunting daun|Merebus daun`},
{id:'musik',g:[1,3],tag:'Seni Musik',t:'Musik Daerah',e:'🎵',c:CL[1],w:'tone',intro:'Bunyi bisa tinggi atau rendah. Coba dengarkan nadanya, lalu kenali alat musik daerah!',
items:`🎼|Nada Tinggi dan Rendah|Nada tinggi suaranya kecil dan melengking. Nada rendah suaranya besar dan berat.
🎋|Angklung|Dari Jawa Barat, terbuat dari bambu. Dibunyikan dengan cara digoyangkan.
🥁|Tifa|Dari Papua dan Maluku. Dibunyikan dengan cara dipukul.
🎶|Gamelan|Dari Jawa dan Bali. Dimainkan bersama-sama oleh banyak orang.
🪕|Sasando|Dari Nusa Tenggara Timur. Dibunyikan dengan cara dipetik.
🪵|Kolintang|Dari Sulawesi Utara, terbuat dari bilah kayu yang dipukul.`,
quiz:`Angklung dibunyikan dengan cara...|Digoyangkan|Ditiup|Digesek
Tifa berasal dari...|Papua|Aceh|Bali
Sasando dibunyikan dengan cara...|Dipetik|Dipukul|Ditiup
Kolintang berasal dari...|Sulawesi Utara|Kalimantan|Sumatera Barat
Gamelan dimainkan...|Bersama-sama|Sendirian saja|Tidak dimainkan
Nada yang suaranya kecil dan melengking adalah nada...|Tinggi|Rendah|Diam
Angklung terbuat dari...|Bambu|Besi|Plastik
Sasando berasal dari...|Nusa Tenggara Timur|Papua|Jawa Barat`},
{id:'tari',g:[1,3],tag:'Seni Tari',t:'Tari Daerah',e:'💃',c:CL[2],intro:'Menari artinya bergerak mengikuti irama. Tiap daerah punya tarian khas!',
items:`🙆|Gerak Tari|Menari memakai gerak tangan, kaki, dan kepala yang mengikuti irama musik.
🔥|Tari Kecak|Dari Bali. Ditarikan banyak orang yang duduk melingkar sambil bersuara "cak".
👏|Tari Saman|Dari Aceh. Penari duduk berbaris dan bertepuk tangan dengan kompak.
🍽️|Tari Piring|Dari Sumatera Barat. Penari membawa piring di tangan.
🌺|Tari Pendet|Dari Bali. Ditarikan untuk menyambut tamu sambil menabur bunga.
🦁|Reog Ponorogo|Dari Jawa Timur. Penari memakai topeng singa besar dengan hiasan bulu merak.`,
quiz:`Tari Saman berasal dari...|Aceh|Bali|Papua
Penari membawa piring di tangan pada tari...|Piring|Saman|Kecak
Tari Kecak berasal dari...|Bali|Aceh|Maluku
Tari Pendet ditarikan untuk...|Menyambut tamu|Berperang|Menanam padi
Reog berasal dari...|Jawa Timur|Sumatera Barat|Aceh
Menari harus mengikuti...|Irama musik|Suara hujan|Warna baju
Tari Saman ditarikan sambil...|Bertepuk tangan|Membawa piring|Memakai topeng
Tari Piring berasal dari...|Sumatera Barat|Bali|Jawa Timur`},
{id:'rumah',g:[1,3],tag:'Budaya',t:'Rumah Adat',e:'🏠',c:CL[3],intro:'Rumah adat adalah rumah khas suatu daerah. Bentuknya bermacam-macam!',
items:`🌴|Rumah Adat|Rumah khas suatu daerah. Dibuat dari bahan alam seperti kayu, bambu, dan jerami.
🛖|Honai|Dari Papua. Bentuknya bulat dengan atap jerami.
🏯|Joglo|Dari Jawa Tengah. Atapnya tinggi di bagian tengah.
🐂|Rumah Gadang|Dari Sumatera Barat. Atapnya melengkung seperti tanduk kerbau.
🛶|Tongkonan|Dari Toraja, Sulawesi Selatan. Atapnya melengkung seperti perahu.
🏘️|Rumah Betang|Dari Kalimantan. Rumah panjang di atas tiang yang dihuni banyak keluarga.`,
quiz:`Honai berasal dari...|Papua|Bali|Aceh
Rumah Gadang berasal dari...|Sumatera Barat|Papua|Jawa Tengah
Atap rumah yang seperti perahu ada pada...|Tongkonan|Honai|Joglo
Rumah adat Jawa Tengah bernama...|Joglo|Honai|Betang
Rumah Betang berasal dari...|Kalimantan|Papua|Bali
Rumah Betang dihuni oleh...|Banyak keluarga|Satu orang|Hewan saja
Atap Rumah Gadang seperti...|Tanduk kerbau|Perahu layar|Payung
Rumah adat dibuat dari bahan...|Alam seperti kayu dan bambu|Plastik|Kaca`},
{id:'baju',g:[1,3],tag:'Budaya',t:'Pakaian Adat',e:'👘',c:CL[4],intro:'Pakaian adat dipakai pada acara penting. Setiap daerah punya yang berbeda!',
items:`👘|Batik|Kain bergambar motif indah yang dibuat dengan lilin malam. Terkenal dari Jawa.
🧵|Ulos|Kain tenun dari Sumatera Utara, dipakai suku Batak.
✨|Songket|Kain tenun dari Sumatera dengan benang emas atau perak.
👚|Kebaya|Baju adat perempuan, banyak dipakai di Jawa dan daerah lain.
👗|Baju Bodo|Baju adat Sulawesi Selatan dari suku Bugis dan Makassar.
🎩|Blangkon|Penutup kepala laki-laki dari Jawa.`,
quiz:`Kain bermotif yang dibuat dengan lilin malam disebut...|Batik|Ulos|Songket
Ulos berasal dari...|Sumatera Utara|Papua|Bali
Songket ditenun dengan benang...|Emas atau perak|Tali rafia|Karet
Blangkon dipakai di...|Kepala|Kaki|Tangan
Baju Bodo berasal dari...|Sulawesi Selatan|Aceh|Papua
Baju adat perempuan Jawa adalah...|Kebaya|Blangkon|Ulos
Pakaian adat setiap daerah...|Berbeda-beda|Sama semua|Tidak ada`},
{id:'teater',g:[1,3],tag:'Seni Teater',t:'Lagu & Teater',e:'🎭',c:CL[5],intro:'Nyanyian dan pertunjukan khas daerah bikin budaya kita meriah!',
items:`🎤|Lagu Daerah|Lagu khas suatu daerah, biasanya memakai bahasa daerah.
🍌|Ampar-Ampar Pisang|Lagu dari Kalimantan Selatan.
🏝️|Ayo Mama|Lagu dari Maluku.
🌄|Apuse|Lagu dari Papua.
🎭|Wayang Kulit|Pertunjukan boneka dari kulit hewan. Dalang memainkannya. Dari Jawa.
🪆|Ondel-Ondel|Boneka besar yang diarak, dari budaya Betawi di Jakarta.`,
quiz:`Ampar-Ampar Pisang berasal dari...|Kalimantan Selatan|Maluku|Papua
Ayo Mama berasal dari...|Maluku|Aceh|Bali
Apuse berasal dari...|Papua|Jawa Barat|Sumatera Utara
Orang yang memainkan wayang kulit disebut...|Dalang|Penari|Penyanyi
Wayang kulit dibuat dari...|Kulit hewan|Kain|Kertas
Ondel-ondel berasal dari budaya...|Betawi|Batak|Dayak
Lagu khas suatu daerah disebut lagu...|Daerah|Asing|Kota`}];
try{best=JSON.parse(localStorage.getItem('sbc3')||'{}')}catch(e){}
function sx(s){return String(s==null?'':s).replace(/[<>]/g,'')}
function mk(o,k){var m=Object.assign({},o);m.c=o.c||CL[(k+D.length)%CL.length];
 m.items=o.items.trim().split('\n').map(function(l){var p=l.split('|');return{e:p[0],n:(p[1]||'').trim(),d:(p[2]||'').trim()}}).filter(function(x){return x.n});
 m.quiz=o.quiz.trim().split('\n').map(function(l){var p=l.split('|').map(function(x){return x.trim()}).filter(Boolean);return{q:p[0],o:p.slice(1)}}).filter(function(q){return q.o.length>1});return m}
function rebuild(){MA=D.map(mk);M=MA}
function gr(){var x=db[cur];return x&&x.k?parseInt(x.k,10)||0:0}
function vis(){var g=gr();return MA.filter(function(m){return!g||(g>=m.g[0]&&g<=m.g[1])})}
function mods(f){var g=parseInt(f,10)||0;return MA.filter(function(m){return!g||(g>=m.g[0]&&g<=m.g[1])})}
function sayT(t){try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(t);u.lang='id-ID';u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
function say(i,j){var x=M[i].items[j];sayT(x.n+'. '+x.d)}
function total(){var s=0;M.forEach(function(m){s+=best[m.id]||0});return s}
function max(){var s=0;M.forEach(function(m){s+=m.quiz.length});return s}
function zr(){return Math.max(150,Math.round(80/Math.tan(Math.PI/M.length)+14))}
function home(){
 if(!cur)return pilih();M=vis();mx(1);
 var n=M.length,A=360/n,z=zr();
 var h='<div class="top"><span class="chip">👤 '+cur+'</span><button class="b3 alt" onclick="login()">🔄 Ganti siswa</button></div><h1>🇮🇩 Seni Budaya Nusantara</h1><div class="deco"><span>🎭</span><span>🥁</span><span>🏯</span><span>🎋</span><span>👘</span></div><p class="sub">Kelas 2 SD · untuk semua kurikulum</p><div class="stars">⭐ Bintangmu: '+total()+' / '+max()+'</div><div class="stage" ontouchstart="X=event.touches[0].clientX" ontouchend="sw(event.changedTouches[0].clientX-X)"><div class="ring" id="ring" style="transform:translateZ(-'+z+'px) rotateY('+R+'deg)">';
 M.forEach(function(m,i){h+='<div class="c3" style="background:linear-gradient(145deg,'+m.c+','+m.c+'cc);transform:rotateY('+i*A+'deg) translateZ('+z+'px)" onclick="pickC('+i+')"><span class="big">'+m.e+'</span><b>'+m.t+'</b><small>'+m.tag+'</small><span>'+('⭐'.repeat(best[m.id]||0).slice(0,24)||'Belum main')+'</span></div>'});
 app.innerHTML=h+'</div></div><div class="nav"><button class="b3" onclick="spin(-1)">◀</button><button class="b3" onclick="spin(1)">▶</button></div><div style="text-align:center"><button class="b3 alt" onclick="pilih()">⬅ Kembali</button></div><p class="note kbh" style="text-align:center">⌨️ Di laptop: tombol ◀ ▶ di keyboard untuk memutar kartu, Enter untuk membuka, Esc untuk kembali</p>';scrollTo(0,0)}
function ring(){var r=$('ring');if(r)r.style.transform='translateZ(-'+zr()+'px) rotateY('+R+'deg)'}
function spin(d){R-=d*360/M.length;ring()}
function sw(dx){if(Math.abs(dx)>40)spin(dx<0?1:-1)}
function front(){var n=M.length;return((Math.round(-R/(360/n))%n)+n)%n}
function pickC(i){if(i===front())return learn(i);var A=360/M.length;R=-i*A+360*Math.round((R+i*A)/360);ring()}
var MC={merah:'#e63946',kuning:'#ffd60a',biru:'#1d6fe0'},MR={'biru+kuning':['Hijau','#2fb344'],'biru+merah':['Ungu','#8338ec'],'kuning+merah':['Oranye','#ff8c1a']},pick=[];
function mixer(){
 var h='<div class="card"><b>Campur warna! Pilih 2 warna:</b><div class="mix">';
 for(var k in MC)h+='<span class="dot'+(pick.indexOf(k)>-1?' sel':'')+'" style="background-color:'+MC[k]+'" onclick="pk(\''+k+'\')"></span>';
 var r='',c='var(--bd)';
 if(pick.length==2){var v=MR[pick.slice().sort().join('+')];if(v){r=pick[0]+' + '+pick[1]+' = <b>'+v[0]+'</b>';c=v[1]}}
 return h+'<span>➜</span><span class="dot res" style="background-color:'+c+'"></span></div><div class="msg">'+r+'</div></div>'}
function pk(k){var i=pick.indexOf(k);if(i>-1)pick.splice(i,1);else{if(pick.length==2)pick=[];pick.push(k)}learn(0)}
var mu={on:1,w:0,id:0,t:0,b:0},mg=null,BAL=[2,3,5,3,2,3,1,2,3,5,6,5,3,2,1,2];
try{mu.on=localStorage.getItem('sbc3_mu')!=='0'}catch(e){}
function eng(){ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();if(!mg){mg=ac.createGain();mg.gain.value=.8;mg.connect(ac.destination)}return ac}
function nt(f,t,d,v,k){var o=ac.createOscillator(),p=ac.createOscillator(),pg=ac.createGain(),g=ac.createGain();o.frequency.value=f;p.frequency.value=f*k;pg.gain.value=.35;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.012);g.gain.exponentialRampToValueAtTime(.0005,t+d);o.connect(g);p.connect(pg);pg.connect(g);g.connect(mg);o.start(t);p.start(t);o.stop(t+d);p.stop(t+d)}
function dr(t,f,v){var o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(f,t);o.frequency.exponentialRampToValueAtTime(f*.5,t+.12);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0005,t+.16);o.connect(g);g.connect(mg);o.start(t);o.stop(t+.18)}
function F(d){return 262*Math.pow(2,(d-1)/5)}
var PM=[0,2,4,7,9],MEL=[[2,-1,3,2,0,-1,2,-1,3,-1,4,3,2,-1,3,-1,5,-1,4,3,4,-1,3,2,1,2,0,-1,0,-1,-1,-1],[5,-1,5,6,7,-1,6,5,4,-1,4,5,6,-1,5,4,3,-1,4,3,2,-1,3,4,5,4,3,1,0,-1,-1,-1]],BS=[[131,131,110,98],[110,98,131,131]];
function MF(d){return 262*Math.pow(2,(PM[d%5]+12*Math.floor(d/5))/12)}
function sh(t,v){if(!sh.b){var n=Math.round(ac.sampleRate*.05),d;sh.b=ac.createBuffer(1,n,ac.sampleRate);d=sh.b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1}var o=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();o.buffer=sh.b;f.type='highpass';f.frequency.value=6000;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0005,t+.05);o.connect(f);f.connect(g);g.connect(mg);o.start(t)}
function sched(u){var s=.254;while(mu.t<u){var b=mu.b%64,sec=b>>5,i=b&31,bar=i>>3,p=i&7,t=mu.t,d=MEL[sec][i];
 if(d>=0)nt(MF(d),t,.5,.17,4);
 if(p==0||p==4)nt(BS[sec][bar]*(p==4?1.5:1),t,.4,.2,2);
 if(p==0||p==4)dr(t,120,.11);
 if(p==2||p==6)nt(880,t,.07,.09,1.5);
 sh(t,p&1?.05:.025);
 if(i==0){nt(MF(5),t,.45,.05,3.2);nt(MF(7),t+.07,.45,.05,3.2);nt(MF(9),t+.14,.45,.05,3.2)}
 mu.t+=s;mu.b++}}
function mb(){var b=$('mbtn'),h=$('mh');if(h)h.style.display=(mu.w&&!mu.id)?'block':'none';if(!b)return;b.style.display=mu.w?'flex':'none';b.textContent=mu.on?'🎶':'🔇';b.className='mbtn'+(mu.on&&mu.id?' on':'')}
function go(){if(!mu.id&&mu.w&&mu.on&&ac&&ac.state==='running'){mu.t=ac.currentTime+.15;mu.b=0;mu.id=setInterval(function(){sched(ac.currentTime+.4)},150);mb()}}
function mx(w){mu.w=w;if(w&&mu.on){try{eng();if(ac.state==='running')go();else{var r=ac.resume();if(r&&r.then)r.then(go)}}catch(e){}}else if(mu.id){clearInterval(mu.id);mu.id=0}mb()}
document.addEventListener('pointerdown',function(){if(mu.w&&mu.on&&!mu.id)mx(1)},{passive:true});
function mtg(){mu.on=!mu.on;try{localStorage.setItem('sbc3_mu',mu.on?'1':'0')}catch(e){}mx(mu.w)}
function tone(f){try{eng();nt(f,ac.currentTime,1.6,.28,2.76)}catch(e){}}
function learn(i){
 var m=M[i];app.style.setProperty('--c',m.c);
 var h=bar("home()","Kembali")+'<h1>'+m.e+' '+m.t+'</h1><p class="sub">'+m.intro+'</p><p class="sub" id="rp">📖 Sudah dibaca: '+rd(st(),m)+' / '+m.items.length+' kartu</p>';
 if(m.w==='mix')h+=mixer();
 if(m.w==='tone')h+='<div class="card"><b>Coba dengarkan nada gamelan!</b><div class="tones"><button class="b3" onclick="tone(220)">⬇ Rendah</button><button class="b3" onclick="tone(440)">➡ Sedang</button><button class="b3" onclick="tone(880)">⬆ Tinggi</button></div><p class="note">🎶 Musik latar aplikasi ini ceria dan bernada seperti kolintang dan angklung. Tangga nadanya pentatonik (lima nada dalam satu oktaf). Tombol 🎶 di pojok kanan bawah menyalakan atau mematikannya.</p></div>';
 h+='<div class="grid">';
 m.items.forEach(function(x,j){h+='<div class="fc" onclick="flip(this,'+i+','+j+')"><div class="in"><div class="fr" style="background:linear-gradient(145deg,'+m.c+','+m.c+'cc)">'+fi(m.id,j)+'<span>'+x.e+'</span><b>'+x.n+'</b><small class="tap">'+TP[j%6]+'</small></div><div class="bk" style="--mc:'+m.c+'"><span class="bh">'+BH[j%6]+'</span><p>'+hl(x.d)+'</p><button class="spk sp2" aria-label="Bacakan" onclick="event.stopPropagation();say('+i+','+j+')">🔊 Dengarkan</button></div></div></div>'});
 app.innerHTML=h+'</div><button class="kuis" onclick="quiz('+i+')"><span class="ki">🎯</span><span class="kt"><b>Main Kuis!</b><small>'+m.quiz.length+' soal seru'+(best[m.id]?' · rekormu ⭐ '+best[m.id]+'/'+m.quiz.length:'')+'</small></span></button>';scrollTo(0,0)}
var Q,qi,sc,cm,ql,qr=[];
function rnd(){return Math.random()-.5}
function quiz(i){cm=i;qi=0;sc=0;qr=[];app.style.setProperty('--c',M[i].c);Q=M[i].quiz.map(function(q){var o=q.o.slice().sort(rnd);return{q:q.q,o:o,a:o.indexOf(q.o[0])}}).sort(rnd);showQ()}
var QC=['#e5484d','#3a86ff','#06a77d','#f08a00'],OKM=['Hebat, benar! 🎉','Keren sekali! 🌟','Pintar! 👏','Tepat sekali! 🥳'];
function showQ(){
 var m=M[cm],q=Q[qi],pc=Math.round(qi/Q.length*100);ql=0;
 var h=bar('learn('+cm+')','Belajar')+'<div class="qtop"><span class="qchip">Soal '+(qi+1)+'/'+Q.length+'</span><div class="trk"><i style="width:'+pc+'%"></i><span class="rn" style="left:'+pc+'%">🏃</span><span class="fg">🏁</span></div><span class="qchip">⭐ '+sc+'</span></div><div class="qc"><span class="qe">'+m.e+'</span><span class="qb">Ayo jawab!</span><p class="q">'+q.q+' <button class="spk" aria-label="Bacakan soal" onclick="sayT(Q['+qi+'].q)">🔊</button></p></div>';
 q.o.forEach(function(o,j){h+='<button class="opt" onclick="ans(this,'+j+')"><span class="ol" style="background:'+QC[j%4]+'">'+'ABCD'.charAt(j%4)+'</span><span>'+o+'</span></button>'});
 app.innerHTML=h+'<p class="note kbh" style="text-align:center">⌨️ Tekan 1, 2, 3 (atau A, B, C) untuk menjawab, Enter untuk lanjut</p><div id="fb"></div>';scrollTo(0,0)}
function ans(b,j){
 if(ql)return;ql=1;var q=Q[qi],ok=j===q.a,os=document.querySelectorAll('.opt');
 os[q.a].classList.add('ok');os[q.a].insertAdjacentHTML('beforeend','<span class="om">✅</span>');
 if(ok){sc++;burst(b)}else{b.classList.add('no');b.insertAdjacentHTML('beforeend','<span class="om">❌</span>')}
 qr.push(ok);
 $('fb').innerHTML='<div class="fbk '+(ok?'g':'r')+'">'+(ok?OKM[qi%4]:'💪 Hampir! Jawabannya: '+q.o[q.a])+'</div><button class="b3" style="width:100%;font-size:22px;margin-top:12px" onclick="nx()">'+(qi+1<Q.length?'Lanjut ➡':'Lihat hasil 🏆')+'</button>'}
function nx(){qi++;if(qi<Q.length)showQ();else done()}
function done(){
 var m=M[cm];var s=st(),o=s.q[m.id]||{b:0,n:0};o.n++;o.l=sc;o.m=Q.length;o.d=Date.now();if(sc>o.b)o.b=sc;s.q[m.id]=o;best[m.id]=o.b;s.t=Date.now();saveS();
 var p=sc/Q.length,tr=p==1?'🏆':p>=.75?'🥇':p>=.5?'🥈':'🌱',msg=p==1?'Luar biasa! Kamu juara! 🎉':p>=.5?'Bagus sekali! Terus belajar ya!':'Ayo coba lagi, kamu pasti bisa! 💪',z='';
 qr.forEach(function(r,i){z+='<span style="animation-delay:'+(.15*i)+'s">'+(r?'⭐':'☆')+'</span>'});
 app.innerHTML=bar('learn('+cm+')','Materi')+'<div class="card res2"><div class="trophy">'+tr+'</div><h2>'+sc+' dari '+Q.length+' benar!</h2><div class="stz">'+z+'</div><p>'+msg+'</p><button class="b3" onclick="quiz('+cm+')">Main Lagi 🔄</button> <button class="b3 alt" onclick="home()">Beranda 🏠</button></div>';
 if(p>=.5)rain()}
function rain(){var E=['🎉','⭐','🎊','🌟','🎈','✨'],h='';for(var i=0;i<16;i++)h+='<span style="left:'+Math.round(Math.random()*95)+'%;animation-delay:'+(Math.random()*1.2).toFixed(2)+'s">'+E[i%6]+'</span>';var d=document.createElement('div');d.className='rain';d.innerHTML=h;document.body.appendChild(d);setTimeout(function(){d.remove()},4200)}
var db={},cur='',tOk=0,g2=0,dm=0,kf='';
try{db=JSON.parse(localStorage.getItem('sbc3_s')||'{}')}catch(e){}
function saveS(){try{localStorage.setItem('sbc3_s',JSON.stringify(db))}catch(e){}}
function st(){return db[cur]}
function rd(s,m){return((s.r||{})[m.id]||[]).filter(function(j){return j<m.items.length}).length}
function bar(f,l){return '<div class="top"><button class="b3 alt" onclick="'+f+'">⬅ '+l+'</button><button class="b3 alt" onclick="home()">🏠 Menu</button>'+(cur?'<span class="chip">👤 '+cur+'</span>':'')+'</div>'}
function login(){
 cur='';best={};mx(1);if(!Object.keys(db).length)dm=0;
 var ks=Object.keys(db),h='<h1>👋 Halo!</h1><div class="deco"><span>🎭</span><span>🥁</span><span>🏯</span><span>🎋</span><span>👘</span></div><p class="sub">Siapa namamu?</p><div class="card"><input id="nm" placeholder="Tulis namamu di sini" maxlength="30">'+ksel()+'<button class="b3" style="width:100%" onclick="start()">Mulai Belajar 🚀</button><div class="msg" id="lm"></div></div>';
 if(ks.length){h+='<div class="card"><b>'+(dm?'Ketuk nama yang mau dihapus:':'Atau ketuk namamu:')+'</b>'+(dm&&T.length?'<input id="dp" type="password" inputmode="numeric" placeholder="PIN guru (wajib untuk menghapus)">':'')+'<div class="names">';ks.forEach(function(n,i){h+=dm?'<button class="b3" style="--c:#e5484d" onclick="delN('+i+',this)">🗑️ '+n+'</button>':'<button class="b3 alt" onclick="pickS('+i+')">'+n+'</button>'});h+='</div><div style="margin-top:14px"><button class="b3 alt" onclick="tg()">'+(dm?'✅ Selesai':'✏️ Salah nama? Hapus nama')+'</button></div></div>'}
 app.innerHTML=h+'<div style="text-align:center"><button class="b3 alt" onclick="pilih()">⬅ Kembali</button></div>';scrollTo(0,0)}
function enter(n){dm=0;R=0;cur=n;db[n]=db[n]||{r:{},q:{}};db[n].t=Date.now();best={};for(var k in db[n].q)best[k]=db[n].q[k].b;saveS();mx(1);home()}
function ksel(){return '<select id="kl"><option value="2">Kelas 2</option></select>'}
function kv(){return v('kl')}
function start(){
 var n=sx($('nm').value).replace(/\s+/g,' ').trim();
 if(!n)return $('lm').textContent='Tulis namamu dulu ya 🙂';
 if(!v('kl'))return $('lm').textContent='Pilih kelasmu dulu ya 🙂';
 var k=kv(),key=n+' ('+k+')';if(!db[key])db[key]={r:{},q:{},n:n,k:k};enter(key)}
function askK(i){app.innerHTML='<h1>🏫 Kelas berapa?</h1><div class="card"><b>'+Object.keys(db)[i]+'</b>'+ksel()+'<button class="b3" style="width:100%" onclick="setK('+i+')">Simpan ➡</button><div class="msg" id="lm"></div></div>'}
function setK(i){if(!v('kl'))return $('lm').textContent='Pilih kelasmu dulu ya 🙂';var n=Object.keys(db)[i];db[n].k=kv();saveS();enter(n)}
function tg(){dm=!dm;login()}
function delN(i,b){
 if(!okPin(v('dp')))return $('lm').textContent='PIN salah. Minta bantuan guru ya.';
 if(!b.dataset.s){b.dataset.s=1;b.textContent='Yakin dihapus? Ketuk lagi';return}
 delete db[Object.keys(db)[i]];saveS();login()}
function pickS(i){var n=Object.keys(db)[i];if(!db[n].k)return askK(i);enter(n)}
var FOTO=1,FX=['jpg','png','webp','jpeg'];
function fi(id,j){return FOTO?'<img class="foto" alt="" src="gambar/'+id+'-'+(j+1)+'.jpg" data-x="0" onload="fok(this)" onerror="fer(this)">':''}
function fok(e){e.classList.add('ok');e.parentNode.classList.add('has')}
function fer(e){var x=+e.dataset.x+1;if(x<FX.length){e.dataset.x=x;e.src=e.src.replace(/\.\w+$/,'.'+FX[x])}}
var BH=['🌟 Fakta unik!','💡 Ayo ingat!','🎈 Fakta seru!','🧠 Catat, ya!','🔎 Yuk kenali!','🎉 Wah, keren!'];
function hl(t){return t.replace(/^([^.]{8,60}\.)(\s|$)/,'<b class="hl">$1</b> ')}
var TP=['👆 Ketuk aku!','🎁 Kejutan!','🔍 Intip, yuk!','✨ Buka, yuk!','🌟 Rahasia!','🎉 Tebak, yuk!'];
function burst(el){var E=['✨','⭐','🎉','🌟','💫','🎈','🎊'],h='';for(var i=0;i<7;i++){var a=i/7*6.28;h+='<i class="pt" style="--x:'+Math.round(Math.cos(a)*75)+'px;--y:'+Math.round(Math.sin(a)*75)+'px">'+E[i]+'</i>'}var d=document.createElement('div');d.className='bst';d.innerHTML=h;el.appendChild(d);setTimeout(function(){d.remove()},1000)}
function flip(el,i,j){
 el.classList.toggle('f');if(el.classList.contains('f'))burst(el);var s=st(),id=M[i].id,a=(s.r[id]=s.r[id]||[]);if(a.indexOf(j)<0)a.push(j);s.t=Date.now();saveS();
 var r=$('rp');if(r)r.textContent='📖 Sudah dibaca: '+rd(s,M[i])+' / '+M[i].items.length+' kartu'}
function v(id){return $(id).value.trim()}
var T=[],ti=-1;
try{T=JSON.parse(localStorage.getItem('sbc3_t')||'[]')}catch(e){}
if(!T.length){try{var g0=localStorage.getItem('sbc3_g'),p0=localStorage.getItem('sbc3_pin');if(g0&&p0){T=[{n:g0,p:p0,k:''}];saveT()}}catch(e){}}
function saveT(){try{localStorage.setItem('sbc3_t',JSON.stringify(T));return 1}catch(e){return 0}}
function gname(){return ti>=0&&T[ti]?T[ti].n:''}
function lock(){tOk=0;g2=0;ti=-1}
function okPin(p){return T.some(function(t){return t.p===p})}
function daftar(first,msg){
 mx(1);cur='';var au=first||tOk;
 app.innerHTML=(first?'':bar(tOk?'teacher()':'masukG()','Kembali'))+'<h2>'+(first?'👩‍🏫 Halo, Guru!':'➕ Daftar Guru Baru')+'</h2><p class="sub">'+(first?'Daftar dulu sebelum siswa mulai belajar':'Buat akun guru baru')+'</p><div class="card"><b>Nama guru</b><input id="gn" placeholder="Contoh: Bu Rina" maxlength="30"><b>Buat PIN</b><p class="note">4 sampai 8 angka. Catat PIN-nya!</p><input id="g1" type="password" inputmode="numeric" maxlength="8" placeholder="PIN, contoh: 2468"><input id="g2" type="password" inputmode="numeric" maxlength="8" placeholder="Ulangi PIN">'+(au?'':'<b>Izin pendaftaran</b><p class="note">Masukkan PIN dari salah satu guru yang sudah terdaftar.</p><input id="g0" type="password" inputmode="numeric" maxlength="8" placeholder="PIN guru terdaftar">')+'<button class="b3" style="width:100%" onclick="saveDaftar('+(first?1:0)+')">Daftar ➡</button><div class="msg" id="sm">'+(msg||'')+'</div></div><p class="note" id="mh" style="text-align:center">🎶 Ketuk layar untuk memulai musik ceria</p>';scrollTo(0,0);mb()}
function saveDaftar(first){
 var n=sx(v('gn')).replace(/["']/g,'').replace(/\s+/g,' ').trim(),a=v('g1'),b=v('g2'),m=$('sm'),k='';
 if(!n)return m.textContent='Tulis nama guru dulu ya.';
 if(T.some(function(t){return t.n.toLowerCase()===n.toLowerCase()}))return m.textContent='Nama guru itu sudah terdaftar. Pakai nama lain, atau langsung Masuk.';
 if(!/^\d{4,8}$/.test(a))return m.textContent='PIN harus 4 sampai 8 angka.';
 if(a!==b)return m.textContent='Kedua PIN belum sama. Coba ketik lagi.';
 if(!first&&!tOk&&!okPin(v('g0')))return m.textContent='PIN guru terdaftar salah. Minta guru yang sudah terdaftar mengisinya.';
 T.push({n:n,p:a,k:k});
 if(!saveT()){T.pop();return m.textContent='Peramban memblokir penyimpanan, jadi akun tidak bisa disimpan.'}
 if(tOk)teacher();else masukG('Pendaftaran berhasil. Silakan masuk.')}
function utama(tab,msg){
 mx(1);cur='';lock();M=MA;
 var h='<h1>🇮🇩 Seni Budaya Nusantara</h1><div class="deco"><span>🎭</span><span>🥁</span><span>🏯</span><span>🎋</span><span>👘</span></div><p class="sub">Kelas 2 SD · Halaman Guru</p><div class="tabs"><button class="b3'+(tab=='m'?'':' alt')+'" onclick="utama(\'m\')">🔒 Masuk</button><button class="b3'+(tab=='d'?'':' alt')+'" style="--c:#06a77d" onclick="utama(\'d\')">➕ Daftar</button></div>';
 if(tab=='m')h+=T.length?'<div class="card"><h2 style="margin:0 0 6px">🔒 Masuk Guru</h2><b>Nama guru</b><input id="gs" placeholder="Ketik nama guru" maxlength="30" autocomplete="off"><b>PIN</b><input id="pn" type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="Masukkan PIN"><button class="b3" style="width:100%" onclick="chk()">Masuk</button><div class="msg" id="pm">'+(msg||'')+'</div></div>':'<div class="card"><h2 style="margin:0 0 6px">🔒 Masuk Guru</h2><p>Belum ada akun guru di perangkat ini. Daftar dulu, ya.</p><button class="b3" style="--c:#06a77d;width:100%" onclick="utama(\'d\')">➕ Daftar sekarang</button></div>';
 else h+='<div class="card"><h2 style="margin:0 0 6px">➕ Daftar Guru</h2><b>Nama guru</b><input id="gn" placeholder="Contoh: Bu Rina" maxlength="30"><b>Buat PIN</b><p class="note">4 sampai 8 angka. Catat PIN-nya!</p><input id="g1" type="password" inputmode="numeric" maxlength="8" placeholder="PIN, contoh: 2468"><input id="g2" type="password" inputmode="numeric" maxlength="8" placeholder="Ulangi PIN">'+(T.length?'<b>Izin pendaftaran</b><p class="note">Masukkan PIN dari salah satu guru yang sudah terdaftar.</p><input id="g0" type="password" inputmode="numeric" maxlength="8" placeholder="PIN guru terdaftar">':'')+'<button class="b3" style="--c:#06a77d;width:100%" onclick="saveDaftar('+(T.length?0:1)+')">Daftar ➡</button><div class="msg" id="sm">'+(msg||'')+'</div></div>';
 app.innerHTML=h+'<p class="note" id="mh" style="text-align:center">🎶 Ketuk layar untuk memulai musik ceria</p>';scrollTo(0,0);mb()}
function masukG(msg){utama(T.length?'m':'d',msg)}
function chk(){var n=sx(v('gs')).replace(/["']/g,'').replace(/\s+/g,' ').trim().toLowerCase();if(!n)return $('pm').textContent='Tulis nama guru dulu, ya.';var i=-1;T.forEach(function(t,k){if(t.n.toLowerCase()===n)i=k});if(i>=0&&v('pn')===T[i].p){tOk=1;ti=i;kf=T[i].k||'';pilih()}else $('pm').textContent='Nama atau PIN salah, coba lagi.'}
function teacher(){
 M=MA;
 if(!tOk)return masukG();
 if(!g2)return kunci();
 mx(1);
 app.innerHTML=bar('pilih()','Kembali')+'<h2>👩‍🏫 Mode Guru</h2><p class="sub">Halo, '+gname()+'! Pilih yang ingin dilakukan:</p><div class="hub"><button class="b3" style="--c:#b3261e" onclick="tAbs()">📋<br>Absensi &amp; Rekap Siswa</button><button class="b3" style="--c:#1e2a5a" onclick="tPin()">👤<br>Profil &amp; PIN Saya</button><button class="b3" style="--c:#06a77d" onclick="daftar(0)">➕<br>Daftar Guru Baru</button><button class="b3" style="--c:#6a4c93" onclick="keluarG()">🚪<br>Keluar</button></div><p class="note" style="text-align:center;margin-top:12px">Guru terdaftar: '+T.map(function(t){return t.n}).join(', ')+'</p>';scrollTo(0,0)}
function pilih(){
 if(!tOk)return masukG();
 cur='';g2=0;mx(1);M=MA;
 app.innerHTML='<h1>🇮🇩 Seni Budaya Nusantara</h1><div class="deco"><span>🎭</span><span>🥁</span><span>🏯</span><span>🎋</span><span>👘</span></div><p class="sub">Halo, '+gname()+'! Pilih halaman:</p><div class="pil"><button class="b3" style="--c:#06a77d" onclick="login()"><span class="pe">🧒</span>Mulai Belajar<small>Halaman Siswa</small></button><button class="b3" style="--c:#b3261e" onclick="kunci()"><span class="pe">👩‍🏫</span>Mode Guru<small>Rekap &amp; pengaturan guru</small></button></div><div style="text-align:center;margin-top:16px"><button class="b3 alt" onclick="keluarG()">🚪 Keluar</button></div>';scrollTo(0,0)}
function kunci(msg){
 if(!tOk)return masukG();
 mx(1);
 app.innerHTML=bar('pilih()','Kembali')+'<h2>🔒 Mode Guru</h2><p class="sub">Masukkan PIN '+gname()+' untuk membuka</p><div class="card"><input id="pn" type="password" inputmode="numeric" maxlength="8" placeholder="PIN guru"><button class="b3" style="width:100%" onclick="kunciOk()">Buka Mode Guru</button><div class="msg" id="pm">'+(msg||'')+'</div></div>';scrollTo(0,0);try{$('pn').focus()}catch(e){}}
function kunciOk(){if(T[ti]&&v('pn')===T[ti].p){g2=1;teacher()}else $('pm').textContent='PIN salah, coba lagi.'}
function keluarG(){masukG()}
function tPin(msg){
 var t=T[ti],h=bar('teacher()','Menu Guru')+'<h2>👤 Profil &amp; PIN</h2><div class="card"><b>Nama guru</b><input id="gn" maxlength="30" value="'+t.n+'"><b>Ganti PIN (opsional)</b><p class="note">Kosongkan jika tidak diganti. 4 sampai 8 angka.</p><input id="pn" type="password" inputmode="numeric" maxlength="8" placeholder="PIN baru"><button class="b3" style="width:100%" onclick="setPin()">Simpan</button><div class="msg" id="pm"></div></div>';
 h+='<div class="card" style="border-color:#e5484d"><b>🗑️ Hapus profil &amp; PIN</b><p class="note">Menghapus akun guru (nama dan PIN sekaligus). PIN tidak bisa dihapus sendirian karena dipakai untuk mengunci Mode Guru. Data siswa dan nilai mereka tidak ikut terhapus.</p><input id="dpin" type="password" inputmode="numeric" maxlength="8" placeholder="Masukkan PIN kamu untuk konfirmasi">';
 T.forEach(function(u,k){if(k!==ti)h+='<div class="top"><b style="flex:1">'+u.n+'</b><button class="b3 alt" onclick="hapusGuru('+k+',this)">Hapus</button></div>'});
 h+='<button class="b3" style="--c:#e5484d;width:100%;margin-top:8px" onclick="hapusSaya(this)">🗑️ Hapus Profil Saya</button><div class="msg" id="hm">'+(msg||'')+'</div></div>';
 app.innerHTML=h;scrollTo(0,0)}
function hapusSaya(b){
 var m=$('hm'),t=T[ti];if(!t)return;
 if(v('dpin')!==t.p)return m.textContent='PIN salah. Masukkan PIN kamu untuk menghapus.';
 if(!b.dataset.s){b.dataset.s=1;b.textContent='Yakin? Ketuk lagi untuk menghapus';return}
 T.splice(ti,1);saveT();kf='';lock();
 masukG(T.length?'Profil kamu sudah dihapus.':'Profil dihapus. Buat akun guru baru.')}
function hapusGuru(k,b){
 var m=$('hm'),t=T[ti];if(!t||k===ti||!T[k])return;
 if(v('dpin')!==t.p)return m.textContent='PIN salah. Masukkan PIN kamu untuk menghapus.';
 if(!b.dataset.s){b.dataset.s=1;b.textContent='Yakin? Ketuk lagi';return}
 T.splice(k,1);if(k<ti)ti--;saveT();tPin('Guru itu sudah dihapus.')}
function setPin(){
 var t=T[ti],n=sx(v('gn')).replace(/["']/g,'').replace(/\s+/g,' ').trim(),x=v('pn'),m=$('pm');
 if(!n)return m.textContent='Nama guru tidak boleh kosong.';
 if(T.some(function(u,i){return i!==ti&&u.n.toLowerCase()===n.toLowerCase()}))return m.textContent='Nama itu sudah dipakai guru lain.';
 if(x&&!/^\d{4,8}$/.test(x))return m.textContent='PIN harus 4 sampai 8 angka.';
 t.n=n;if(x)t.p=x;
 m.textContent=saveT()?'Tersimpan ✅':'Gagal menyimpan.'}
function nat(a,b){return a.localeCompare(b,'id',{numeric:true})}
function kls(s){return s.k||'-'}
function klas(){var o={};Object.keys(db).forEach(function(k){o[kls(db[k])]=1});return Object.keys(o).sort(nat)}
function list(f){var a=[];Object.keys(db).forEach(function(k,i){var s=db[k];if(!f||kls(s)===f)a.push({key:k,i:i,s:s})});return a.sort(function(x,y){return nat(kls(x.s),kls(y.s))||nat(x.s.n||x.key,y.s.n||y.key)})}
function stat(s,ms){ms=ms||M;var g=s.k?parseInt(s.k,10)||0:0,dn=0,t=0,c=ms.map(function(m){if(g&&(g<m.g[0]||g>m.g[1]))return{na:1};t++;var a=rd(s,m),z=s.q[m.id],f=a>=m.items.length&&!!z;if(f)dn++;return{a:a,b:z?z.b:null,f:f}});return{c:c,dn:dn,pc:t?Math.round(dn/t*100):0}}
function rpt(f){
 var M=mods(f),L=list(f),nc=M.length*2+5,T='border:1px solid #444;padding:4px 6px;text-align:center',H=T+';background:#ffd966;font-weight:bold',
 d=new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}),
 h='<table style="border-collapse:collapse;font-family:Calibri,Arial,sans-serif;font-size:12px;color:#000"><colgroup><col width="40"><col width="170"><col width="60">';
 M.forEach(function(){h+='<col width="75"><col width="75">'});
 h+='<col width="90"><col width="70"></colgroup><tr><td colspan="'+nc+'" style="font-size:18px;font-weight:bold">REKAP BELAJAR SENI BUDAYA</td></tr><tr><td colspan="'+nc+'">Guru: '+gname()+'</td></tr><tr><td colspan="'+nc+'">'+(f==='-'?'Kelas belum diisi':'Kelas '+f)+' · '+d+'</td></tr><tr><td colspan="'+nc+'"></td></tr><tr><th style="'+H+'" rowspan="2">No</th><th style="'+H+'" rowspan="2">Nama Siswa</th><th style="'+H+'" rowspan="2">Kelas</th>';
 M.forEach(function(m){h+='<th style="'+H+'" colspan="2">'+m.t+'</th>'});
 h+='<th style="'+H+'" rowspan="2">Modul Tuntas</th><th style="'+H+'" rowspan="2">Persen</th></tr><tr>';
 M.forEach(function(m){h+='<th style="'+H+'">Baca (/'+m.items.length+')</th><th style="'+H+'">Kuis (/'+m.quiz.length+')</th>'});
 h+='</tr>';
 L.forEach(function(x,i){var o=stat(x.s,M);h+='<tr><td style="'+T+'">'+(i+1)+'</td><td style="'+T+';text-align:left">'+(x.s.n||x.key)+'</td><td style="'+T+'">'+kls(x.s)+'</td>';
  o.c.forEach(function(c){var g=T+(c.f?';background:#c6efce':'');h+='<td style="'+g+'">'+c.a+'</td><td style="'+g+'">'+(c.b==null?'-':c.b)+'</td>'});
  h+='<td style="'+T+';font-weight:bold">'+o.dn+' / '+M.length+'</td><td style="'+T+'">'+o.pc+'%</td></tr>'});
 return h+'</table>'}
function rptAll(f){return f?rpt(f):klas().map(rpt).join('<br style="page-break-before:always">')}
function q(x){return '"'+String(x==null?'':x).replace(/"/g,'""')+'"'}
function csv(f){
 var M=mods(f),h=['No','Nama Siswa','Kelas'];
 M.forEach(function(m){h.push(m.t+' - Baca (dari '+m.items.length+')',m.t+' - Kuis (dari '+m.quiz.length+')')});
 h.push('Modul Tuntas','Persen Tuntas','Terakhir Aktif');
 var r=[h.map(q).join(';')];
 list(f).forEach(function(x,i){var o=stat(x.s,M),row=[i+1,x.s.n||x.key,kls(x.s)];o.c.forEach(function(c){if(c.na){row.push('','');return}row.push(c.a,c.b==null?'':c.b)});row.push(o.dn,o.pc+'%',x.s.t?new Date(x.s.t).toLocaleString('id-ID'):'');r.push(row.map(q).join(';'))});
 return r.join('\r\n')}
function slug(){return gname().toLowerCase().replace(/\W+/g,'-').replace(/^-|-$/g,'')||'guru'}
function fn(x){return 'rekap-seni-budaya-'+slug()+'-'+(kf?'kelas-'+kf:'semua-kelas')+'-'+new Date().toISOString().slice(0,10)+'.'+x}
function save(f,t,ty){try{var u=URL.createObjectURL(t instanceof Blob?t:new Blob(['\ufeff'+t],{type:ty+';charset=utf-8'})),a=document.createElement('a');a.href=u;a.download=f;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},1500);$('dm').textContent='Mengunduh '+f+' ... cek folder Downloads.'}catch(e){$('dm').textContent='Unduhan tidak didukung di sini.'}}
function dlCsv(){save(fn('csv'),csv(kf),'text/csv')}
function col(i){var o='';i++;while(i>0){var m=(i-1)%26;o=String.fromCharCode(65+m)+o;i=Math.floor((i-1)/26)}return o}
function xe(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function sn(k){return(k==='-'?'Belum diisi':'Kelas '+k).replace(/[\[\]:*?\/\\]/g,'').slice(0,31)}
function sheet(f){
 var M=mods(f),L=list(f),nc=M.length*2+5,x='',r=0,mg=[],lc=col(nc-1);
 function R(cells,h){r++;x+='<row r="'+r+'"'+(h?' ht="'+h+'" customHeight="1"':'')+'>';cells.forEach(function(c,i){var ref=col(i)+r;x+=typeof c[0]==='number'?'<c r="'+ref+'" s="'+c[1]+'"><v>'+c[0]+'</v></c>':'<c r="'+ref+'" s="'+c[1]+'" t="inlineStr"><is><t xml:space="preserve">'+xe(c[0])+'</t></is></c>'});x+='</row>'}
 R([['REKAP BELAJAR SENI BUDAYA',1]],26);R([['Guru: '+gname(),0]]);
 R([[(f==='-'?'Kelas belum diisi':'Kelas '+f)+' · '+new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}),0]]);R([]);
 mg.push('A1:'+lc+'1','A2:'+lc+'2','A3:'+lc+'3');
 var h1=[['No',2],['Nama Siswa',2],['Kelas',2]],h2=[['',2],['',2],['',2]];
 M.forEach(function(m,k){h1.push([m.t,2],['',2]);h2.push(['Baca (/'+m.items.length+')',2],['Kuis (/'+m.quiz.length+')',2]);mg.push(col(3+2*k)+'5:'+col(4+2*k)+'5')});
 h1.push(['Modul Tuntas',2],['Persen',2]);h2.push(['',2],['',2]);
 for(var c=0;c<3;c++)mg.push(col(c)+'5:'+col(c)+'6');
 mg.push(col(nc-2)+'5:'+col(nc-2)+'6',col(nc-1)+'5:'+col(nc-1)+'6');
 R(h1,22);R(h2,22);
 L.forEach(function(y,i){var o=stat(y.s,M),row=[[i+1,3],[y.s.n||y.key,4],[kls(y.s),3]];
  o.c.forEach(function(c){var st=c.f?5:3;row.push([c.a,st],[c.b==null?'-':c.b,st])});
  row.push([o.dn+' / '+M.length,6],[o.pc/100,7]);R(row)});
 return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetPr><pageSetUpPr fitToPage="1"/></sheetPr><sheetViews><sheetView workbookViewId="0"><pane xSplit="3" ySplit="6" topLeftCell="D7" activePane="bottomRight" state="frozen"/></sheetView></sheetViews><cols><col min="1" max="1" width="5" customWidth="1"/><col min="2" max="2" width="26" customWidth="1"/><col min="3" max="3" width="8" customWidth="1"/><col min="4" max="'+(nc-2)+'" width="12" customWidth="1"/><col min="'+(nc-1)+'" max="'+(nc-1)+'" width="14" customWidth="1"/><col min="'+nc+'" max="'+nc+'" width="9" customWidth="1"/></cols><sheetData>'+x+'</sheetData><mergeCells count="'+mg.length+'">'+mg.map(function(m){return '<mergeCell ref="'+m+'"/>'}).join('')+'</mergeCells><pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.3" footer="0.3"/><pageSetup paperSize="9" orientation="landscape" fitToWidth="1" fitToHeight="0"/></worksheet>'}
var STY='<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="3"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="16"/><name val="Calibri"/></font></fonts><fills count="4"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFD966"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFC6EFCE"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color auto="1"/></left><right style="thin"><color auto="1"/></right><top style="thin"><color auto="1"/></top><bottom style="thin"><color auto="1"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="8"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="9" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>';
function crc(b){var t=crc.t,c;if(!t){t=crc.t=[];for(var n=0;n<256;n++){c=n;for(var k=0;k<8;k++)c=c&1?0xEDB88320^(c>>>1):c>>>1;t[n]=c>>>0}}var r=-1;for(var i=0;i<b.length;i++)r=t[(r^b[i])&255]^(r>>>8);return(r^-1)>>>0}
function zip(files){
 var en=new TextEncoder(),P=[],CD=[],off=0;
 files.forEach(function(f){var nm=en.encode(f[0]),d=en.encode(f[1]),c=crc(d),h=new DataView(new ArrayBuffer(30)),g=new DataView(new ArrayBuffer(46));
  h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint16(6,0x0800,true);h.setUint16(12,0x21,true);h.setUint32(14,c,true);h.setUint32(18,d.length,true);h.setUint32(22,d.length,true);h.setUint16(26,nm.length,true);
  g.setUint32(0,0x02014b50,true);g.setUint16(4,20,true);g.setUint16(6,20,true);g.setUint16(8,0x0800,true);g.setUint16(14,0x21,true);g.setUint32(16,c,true);g.setUint32(20,d.length,true);g.setUint32(24,d.length,true);g.setUint16(28,nm.length,true);g.setUint32(42,off,true);
  P.push(new Uint8Array(h.buffer),nm,d);CD.push(new Uint8Array(g.buffer),nm);off+=30+nm.length+d.length});
 var cs=CD.reduce(function(a,x){return a+x.length},0),e=new DataView(new ArrayBuffer(22));
 e.setUint32(0,0x06054b50,true);e.setUint16(8,files.length,true);e.setUint16(10,files.length,true);e.setUint32(12,cs,true);e.setUint32(16,off,true);
 return new Blob(P.concat(CD,[new Uint8Array(e.buffer)]),{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
function xlsx(f){
 var ks=f?[f]:klas(),H='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',RT='http://schemas.openxmlformats.org/officeDocument/2006/relationships',PK='http://schemas.openxmlformats.org/package/2006/relationships',O='application/vnd.openxmlformats-officedocument.spreadsheetml.';
 return zip([
 ['[Content_Types].xml',H+'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="'+O+'sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="'+O+'styles+xml"/>'+ks.map(function(k,i){return '<Override PartName="/xl/worksheets/sheet'+(i+1)+'.xml" ContentType="'+O+'worksheet+xml"/>'}).join('')+'</Types>'],
 ['_rels/.rels',H+'<Relationships xmlns="'+PK+'"><Relationship Id="rId1" Type="'+RT+'/officeDocument" Target="xl/workbook.xml"/></Relationships>'],
 ['xl/workbook.xml',H+'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="'+RT+'"><sheets>'+ks.map(function(k,i){return '<sheet name="'+xe(sn(k))+'" sheetId="'+(i+1)+'" r:id="rId'+(i+1)+'"/>'}).join('')+'</sheets></workbook>'],
 ['xl/_rels/workbook.xml.rels',H+'<Relationships xmlns="'+PK+'">'+ks.map(function(k,i){return '<Relationship Id="rId'+(i+1)+'" Type="'+RT+'/worksheet" Target="worksheets/sheet'+(i+1)+'.xml"/>'}).join('')+'<Relationship Id="rId'+(ks.length+1)+'" Type="'+RT+'/styles" Target="styles.xml"/></Relationships>'],
 ['xl/styles.xml',H+STY]].concat(ks.map(function(k,i){return['xl/worksheets/sheet'+(i+1)+'.xml',sheet(k)]})))}
function dlXls(){save(fn('xlsx'),xlsx(kf),'')}
function tPrint(){app.innerHTML=bar('tAbs()','Rekap')+'<div class="card noprint"><b>🖨️ Pratinjau cetak</b><p class="note">Kertas A4 mendatar (landscape) sudah diatur otomatis di Chrome dan Edge. Tiap kelas dicetak di halaman terpisah. Kalau peramban lain, pilih Landscape sendiri.</p><button class="b3" onclick="window.print()">🖨️ Cetak sekarang</button></div><div class="rpt">'+rptAll(kf)+'</div>';scrollTo(0,0)}
function tAbs(){
 var h=bar('teacher()','Menu Guru')+'<h2>📋 Absensi &amp; Rekap</h2><p class="note">Hijau = modul tuntas (semua kartu dibaca dan sudah kuis). Data ada di perangkat ini.</p>';
 if(!Object.keys(db).length)return app.innerHTML=h+'<div class="card">Belum ada siswa yang masuk.</div>';
 if(kf&&!list(kf).length)kf='';
 var L=list(kf);
 h+='<div class="card"><b>Tampilkan kelas:</b> <select id="kf" onchange="kf=this.value;tAbs()"><option value="">Semua kelas</option>'+klas().map(function(k){return '<option'+(k===kf?' selected':'')+'>'+k+'</option>'}).join('')+'</select></div><div class="rpt">'+rptAll(kf)+'</div>';
 h+='<div class="card"><b>⬇️ Unduh &amp; cetak</b><p class="note">Excel (.xlsx) dibuat rapi: satu lembar (tab) per kelas, siap dicetak A4 mendatar, dan terbuka tanpa peringatan.</p><div class="hub"><button class="b3" onclick="tPrint()">🖨️<br>Cetak</button><button class="b3" style="--c:#06a77d" onclick="dlXls()">📗<br>Excel (.xlsx)</button></div><button class="b3 alt" style="width:100%;margin-top:12px" onclick="dlCsv()">📄 Unduh CSV</button><div class="msg" id="dm"></div></div>';
 h+='<div class="card"><b>Teks CSV</b><p class="note">Kalau unduhan tidak berjalan, salin teks ini ke Notepad dan simpan sebagai rekap.csv.</p><textarea readonly onclick="this.select()">'+csv(kf)+'</textarea></div><div class="card"><b>Hapus data siswa</b>';
 L.forEach(function(x){h+='<div class="top"><b style="flex:1">'+x.key+'</b><button class="b3 alt" onclick="delS('+x.i+',this)">Hapus</button></div>'});
 app.innerHTML=h+'</div>';scrollTo(0,0)}
function delS(i,b){if(!b.dataset.s){b.dataset.s=1;b.textContent='Yakin?';return}delete db[Object.keys(db)[i]];saveS();tAbs()}
function goBack(){var bs=document.querySelectorAll('#app button');for(var i=0;i<bs.length;i++){if(bs[i].textContent.indexOf('⬅')===0&&!bs[i].closest('.rpt')){bs[i].click();return true}}return false}
document.addEventListener('keydown',function(e){
 var t=e.target,tg=t&&t.tagName,k=e.key;
 if(tg==='INPUT'||tg==='TEXTAREA'||tg==='SELECT'||e.ctrlKey||e.metaKey||e.altKey)return;
 var fb=$('fb'),nb=fb&&fb.querySelector('button');
 if(nb&&(k==='ArrowRight'||k==='Enter'||k===' ')){e.preventDefault();nb.click();return}
 var os=document.querySelectorAll('.opt');
 if(os.length&&!ql&&k.length==1){var n='123456'.indexOf(k);if(n<0)n='abcd'.indexOf(k.toLowerCase());if(n>=0&&n<os.length){e.preventDefault();os[n].click();return}}
 if($('ring')){
  if(k==='ArrowRight'){e.preventDefault();spin(1);return}
  if(k==='ArrowLeft'){e.preventDefault();spin(-1);return}
  if((k==='Enter'||k===' ')&&tg!=='BUTTON'){e.preventDefault();pickC(front());return}
 }
 if(k==='Escape'||k==='Backspace'||(k==='ArrowLeft'&&!os.length)){if(goBack())e.preventDefault()}
});
var tx0=0,ty0=0,tno=0;
document.addEventListener('touchstart',function(e){var t=e.touches[0];tx0=t.clientX;ty0=t.clientY;tno=!!(e.target.closest&&e.target.closest('.stage,.rpt,input,textarea,select,table'))},{passive:true});
document.addEventListener('touchend',function(e){var t=e.changedTouches[0];if(!tno&&t.clientX-tx0>90&&Math.abs(t.clientY-ty0)<60&&!document.querySelector('.opt'))goBack()},{passive:true});
try{history.replaceState({a:1},'');history.pushState({a:2},'');new MutationObserver(function(){try{history.pushState({a:2},'')}catch(e){}}).observe(app,{childList:true});window.addEventListener('popstate',function(){goBack()})}catch(e){}
rebuild();masukG();
