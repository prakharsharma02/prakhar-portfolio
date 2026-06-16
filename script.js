function scrollToAbout(){
  const activePanel = document.querySelector('.panel.active');
  const aboutSection = activePanel ? activePanel.querySelector('section') : null;
  if(aboutSection) aboutSection.scrollIntoView({behavior:'smooth', block:'start'});
}

function scrollToProjects(){
  const activePanel = document.querySelector('.panel.active');
  const sections = activePanel ? activePanel.querySelectorAll('section') : [];
  const projectSection = sections[sections.length - 1];
  if(projectSection) projectSection.scrollIntoView({behavior:'smooth', block:'start'});
}

function switchMode(mode){
  const music=document.getElementById('panel-music');
  const dev=document.getElementById('panel-dev');
  const bm=document.getElementById('btn-music');
  const bd=document.getElementById('btn-dev');
  const aboutDev=document.getElementById('nav-about-dev');
  const aboutMusic=document.getElementById('nav-about-music');
  if(mode==='music'){
    music.classList.add('active');dev.classList.remove('active');
    bm.classList.add('active');bd.classList.remove('active');
    aboutMusic.style.display='inline';aboutDev.style.display='none';
  } else {
    dev.classList.add('active');music.classList.remove('active');
    bd.classList.add('active');bm.classList.remove('active');
    aboutDev.style.display='inline';aboutMusic.style.display='none';
  }
  const divider=document.querySelector('hr.divider');
  if(divider) window.scrollTo({top:divider.offsetTop-80,behavior:'smooth'});
}

// Subtle parallax on hero bg text
window.addEventListener('scroll',()=>{
  const bg=document.querySelector('.hero-bg-text');
  if(bg) bg.style.transform=`translateY(calc(-50% + ${window.scrollY*0.15}px))`;
});