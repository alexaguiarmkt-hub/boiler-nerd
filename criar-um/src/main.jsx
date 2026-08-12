import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, CalendarDays, MapPin, Menu, Play, Ticket, X, ChevronRight, Zap } from 'lucide-react'
import './styles.css'
import './overrides.css'

const experiences = [
  ['🎮', 'ÁREA GAMER', 'PS5 e Nintendo Switch liberados para jogar.', 'ps5'],
  ['🕹️', 'NINTENDO CLUB', 'Mario Kart, Smash Bros e nostalgia sem limite.', 'switch'],
  ['🎤', 'LINE CONFIRMADO', 'Tetefs, Brunin TKS, Oaleques e DJ Maldita.', 'djs'],
  ['👘', 'DESFILE COSPLAY', 'Vista seu universo e concorra à premiação.', 'cosplay'],
  ['🎨', 'FLASH TATTOO', 'Arte para levar da festa direto para a pele.', 'tattoo'],
  ['🍬', 'DOCE NA PISTA', 'Uma rodada na madrugada para manter o fluxo.', 'kiss'],
  ['🥃', 'TEQUILA GUN', 'Passando pela pista para deixar tudo mais insano.', 'bar'],
  ['🍺', 'MEZANINO OPEN BAR', '5 horas de bebidas liberadas e convidados especiais.', 'more'],
]

const gallery = [
  ['photo-1574391884720-bbc3740c59d1', 'FOTOS'], ['photo-1540039155733-5bb30b53aa14','FOTOS'], ['photo-1524368535928-5b5e00ddc76b','VÍDEOS'], ['photo-1561214115-f2f134cc4912','FOTOS'], ['photo-1571266028243-d220c9c3b4b4','VÍDEOS'], ['photo-1492684223066-81342ee5ff30','FOTOS'], ['photo-1514525253161-7a46d19cd819','FOTOS'], ['photo-1531058020387-3be344556be6','VÍDEOS']
]

function App(){
 const [menu,setMenu]=useState(false), [filter,setFilter]=useState('TODOS'), [time,setTime]=useState({d:0,h:0,m:0,s:0})
 useEffect(()=>{const eventTime=new Date('2026-08-22T23:00:00-03:00').getTime();const update=()=>{const z=Math.max(0,Math.floor((eventTime-Date.now())/1000));setTime({d:Math.floor(z/86400),h:Math.floor(z%86400/3600),m:Math.floor(z%3600/60),s:z%60})};update();const i=setInterval(update,1000);return()=>clearInterval(i)},[])
 useEffect(()=>{document.querySelectorAll('a[href="#comprar"]').forEach(link=>{link.href='https://bileto.sympla.com.br/event/124520/d/402690';link.target='_blank';link.rel='noreferrer'})},[])
 const nav=['HOME','EXPERIÊNCIAS','EVENTOS','GALERIA','SOBRE']
 const ticketUrl='https://bileto.sympla.com.br/event/124520/d/402690'
 const instagramUrl='https://instagram.com/boiler.nerd'
 const whatsappUrl='https://chat.whatsapp.com/EqgDAqFMgjR3FgrVizxjEO'
 return <><header><a className="logo" href="#home"><span>BOILER</span><b>NERD</b><i>★</i></a><nav>{nav.map(n=><a href={'#'+n.toLowerCase().replace('ê','e')} key={n}>{n}</a>)}</nav><a className="ticket top-ticket" href={ticketUrl} target="_blank" rel="noreferrer"><Ticket size={16}/> INGRESSOS</a><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
 {menu&&<div className="mobile-nav">{nav.map(n=><a onClick={()=>setMenu(false)} href={'#'+n.toLowerCase().replace('ê','e')} key={n}>{n}</a>)}</div>}
 <main id="home"><section className="hero"><div className="halftone"></div><div className="hero-lines lines-a">/////</div><div className="hero-lines lines-b">/////</div><div className="burst b1">POW!</div><div className="burst b2">+18</div><div className="hero-content"><p className="eyebrow"><Zap size={15} fill="currentColor"/> A FESTA NERD MAIS AMALDIÇOADA DA CIDADE</p><h1><span>BOILER</span><strong>NERD</strong></h1><div className="edition"><span>2ª EDIÇÃO</span><b>BAILE DO <em>SUKUNA</em></b><p><CalendarDays size={18}/> 22 AGO. 2026 <i/> <MapPin size={18}/> BAR OPINIÃO — PORTO ALEGRE</p></div><div className="hero-actions"><a className="button primary" href={ticketUrl} target="_blank" rel="noreferrer">COMPRAR INGRESSO <ArrowRight/></a><a className="button ghost" href="#experiencias"><Play fill="currentColor"/> VER EXPERIÊNCIAS</a></div></div><div className="hero-character"><div className="character-glow"></div><div className="hero-image"></div><p className="manga-caption">ESCOLHA O LADO<br/>DA MALDADE.</p></div><div className="scroll">SCROLL PARA<br/>ENTRAR NO JOGO <span>↓</span></div></section>

 <section id="experiencias" className="experiences section"><div className="section-head"><div><p className="eyebrow">ESCOLHA SEU PLAYER</p><h2>EXPERIÊNCIAS<br/><span>ÉPICAS.</span></h2></div><p className="section-copy">Cada canto da Boiler Nerd é uma fase nova. Chega junto para viver a sua.</p></div><div className="experience-grid">{experiences.map(([,title,desc,cl],i)=><article className={'experience '+cl} key={title}><span className="exp-no">0{i+1}</span><div><h3>{title}</h3><p>{desc}</p><a href="#eventos">SAIBA MAIS <ChevronRight size={16}/></a></div></article>)}</div></section>

 <section id="eventos" className="event section"><div className="event-ribbon">● EDIÇÃO LIMITADA ● EDIÇÃO LIMITADA ● EDIÇÃO LIMITADA ●</div><div className="event-top"><p className="eyebrow">GARANTA SEU LUGAR</p><h2>A PRÓXIMA<br/>FASE É <span>AGORA.</span></h2></div><div className="event-card"><div className="event-info"><span className="badge">22 AGOSTO 2026 • ABERTURA 23H</span><h3>BAILE DO SUKUNA</h3><p className="location"><MapPin/> BAR OPINIÃO<br/><small>PORTO ALEGRE — RS</small></p><p>Esquece o herói. Uma noite onde o submundo dos animes encontra o fluxo: funk bruxaria, mandelão, phonk, trap, eletrônica e hinos de anime até o amanhecer.</p><div className="lots"><div><b>LOTE PROMOCIONAL</b><span className="sold-out">ESGOTADO</span></div><strong>R$ 20</strong><span className="sold-label">ESGOTADO</span></div><div className="lots active-lot"><div><b>1º LOTE — PISTA</b><span>Chegando ao final</span></div><strong>R$ 30</strong><a href="#comprar">COMPRAR <ArrowRight size={15}/></a></div></div><div className="countdown"><p>ABERTURA DOS PORTÕES • 22 AGO, 23H</p><div className="clock">{Object.entries(time).map(([k,v])=><div key={k}><b>{String(v).padStart(2,'0')}</b><span>{{d:'DIAS',h:'HORAS',m:'MIN',s:'SEG'}[k]}</span></div>)}</div><a id="comprar" className="button primary large" href="#comprar"><Ticket/> QUERO VIVER ISSO</a><small>Open Bar: 23h às 4h • Copo oficial R$ 15</small></div></div></section>

 <section id="galeria" className="gallery section"><div className="section-head"><div><p className="eyebrow">MEMÓRIAS DE OUTRAS DIMENSÕES</p><h2>O QUE JÁ<br/><span>ROLou.</span></h2></div><div className="filters">{['TODOS','FOTOS','VÍDEOS'].map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></div><div className="gallery-grid">{gallery.filter(x=>filter==='TODOS'||x[1]===filter).map(([id,type],i)=><div className={'gallery-item gi'+i} key={id}><img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`} /><div className="gallery-overlay">{type==='VÍDEOS'&&<span className="play"><Play fill="currentColor"/></span>}<b>{type}</b></div></div>)}</div><a className="button black" href="#instagram">VER GALERIA COMPLETA <ArrowRight/></a></section>

 <section className="recap"><div className="recap-video"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=85"/><button className="video-play"><Play fill="currentColor"/></button><div className="video-label">AFTERMOVIE<br/><b>1ª EDIÇÃO</b></div></div><div className="recap-text"><p className="eyebrow">COMO FOI A ESTREIA</p><h2>NÃO FOI UMA<br/>FESTA. FOI UM<br/><span>EVENTO.</span></h2><div className="stats"><div><b>01</b><span>edição histórica</span></div><div><b>04</b><span>DJs confirmados</span></div><div><b>06+</b><span>experiências na edição 2</span></div><div><b>05H</b><span>de Open Bar</span></div></div></div></section>

 <section id="sobre" className="about"><div className="about-art"><span>マンガ</span><b>BOILER<br/>NERD</b><i>!!!</i></div><div><p className="eyebrow">NOSS0 UNIVERSO</p><h2>ONDE O SUBMUNDO<br/><span>DOS ANIMES</span><br/>ENCONTRA O FLUXO.</h2><p className="about-copy">A Boiler Nerd é uma festa onde anime, funk, games, cosplay, phonk e cultura de internet se encontram. No Baile do Sukuna, esquece o herói: é dia de escolher o lado da maldade.</p><a href="#instagram" className="text-link">CONHEÇA A BOILER NERD <ArrowRight/></a></div></section>
 <section id="instagram" className="insta"><p className="eyebrow">SIGA O CAOS</p><h2>@BOILER.NERD</h2><div className="insta-grid">{['photo-1493225457124-a3eb161ffa5f','photo-1501386761578-eac5c94b800a','photo-1470229722913-7c0e2dbbafd3','photo-1506157786151-b8491531f063','photo-1501612780327-45045538702b'].map(id=><img key={id} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`}/>)}</div></section></main>
 <a className="floating-ticket" href={ticketUrl} target="_blank" rel="noreferrer"><Ticket size={18}/> <span>COMPRAR INGRESSO</span></a><footer><a className="logo" href="#home"><span>BOILER</span><b>NERD</b><i>★</i></a><p>© 2026 BOILER NERD. TODOS OS UNIVERSOS RESERVADOS.</p><div className="social-links"><a href={instagramUrl} target="_blank" rel="noreferrer">IG</a><a href={instagramUrl} target="_blank" rel="noreferrer">@boiler.nerd</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WA</a></div><a href="/admin.html" className="admin-link">ÁREA ADMIN</a></footer></>
}
createRoot(document.getElementById('root')).render(<App/>)
