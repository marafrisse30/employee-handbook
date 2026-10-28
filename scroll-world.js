(()=>{
 if(!window.gsap||!window.ScrollTrigger)return;
 const media=gsap.matchMedia();
 media.add('(prefers-reduced-motion: no-preference)',()=>{
  const cover=document.querySelector('.cover');
  const gallery=document.querySelector('.gallery-scene');
  function wrap(el,name){const frame=document.createElement('div');frame.className=name;el.before(frame);frame.append(el);return frame;}
  const coverFrame=wrap(cover,'camera-cover');

  const mobile=()=>innerWidth<=700;
  const intro=gsap.timeline({scrollTrigger:{trigger:coverFrame,start:'top top',end:'bottom bottom',scrub:.65,invalidateOnRefresh:true}});
  intro.to('.cover-copy',{y:-48,opacity:0,ease:'none',duration:.65},0)
       .to('.cover-flower',{scale:()=>mobile()?2.5:2.1,rotation:32,xPercent:()=>mobile()?-12:-28,yPercent:-8,ease:'none',duration:1},0)
       .to(cover,{borderRadius:0,ease:'none',duration:.4},.5);
  // New content heights are established before recalculating scroll positions.
  document.fonts.ready.then(()=>ScrollTrigger.refresh());
  return ()=>{coverFrame.replaceWith(cover);};
 });
})();
