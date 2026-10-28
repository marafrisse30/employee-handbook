(()=>{
const data={id:'md',title:'Managing Director',sub:'Управляющий директор',kicker:'Executive leadership',children:[
{id:'cso',title:'CSO',sub:'Коммерческое направление',kicker:'01 / Commercial',children:[{id:'sales',title:'Sales Department',sub:'Продажи'},{id:'bd',title:'Business Development',sub:'Развитие бизнеса'},{id:'crm',title:'CRM Department',sub:'Клиентские отношения',children:[{id:'ss',title:'Sales Support',sub:'Поддержка продаж'},{id:'cs',title:'Customer Support',sub:'Поддержка клиентов'}]},{id:'collection',title:'Collection / Compliance',sub:'Взыскание и комплаенс'}]},
{id:'finance',title:'Finance Department',sub:'Финансы',kicker:'02 / Finance',children:[{id:'accountant',title:'Accountant',sub:'Бухгалтер'},{id:'analyst',title:'Financial Analyst',sub:'Финансовый аналитик'},{id:'escrow',title:'Escrow Accountant',sub:'Эскроу'}]},
{id:'project',title:'Project Department',sub:'Object 1',kicker:'03 / Projects'},
{id:'legal',title:'Legal Department',sub:'Юридический департамент',kicker:'04 / Legal'},
{id:'it',title:'IT Department',sub:'Object 1',kicker:'05 / Technology'},
{id:'hr',title:'HR Department',sub:'Управление персоналом',kicker:'06 / People',children:[{id:'admin',title:'Administration Department',sub:'Административный департамент'}]},
{id:'marketing',title:'Marketing Department',sub:'Маркетинг',kicker:'07 / Marketing',children:[{id:'digital',title:'Digital Marketing',sub:'Цифровой маркетинг'},{id:'smm',title:'SMM',sub:'Социальные сети'},{id:'pr',title:'PR'}]}
]};
const expanded=new Set(['md']);let scale=1;const tree=document.querySelector('#tree');
function node(d,root=false){const el=document.createElement('div');el.className=root?'root':'child';const card=document.createElement(d.children&&!root?'button':'div');card.className='card';card.innerHTML=`<span class="title">${d.title}</span>${d.children&&!root?'<span class="toggle" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>':''}`;el.append(card);if(d.id==='project'||d.id==='it'||d.id==='legal'){const badge=document.createElement('div');badge.className='object1-badge';badge.innerHTML='<img src="assets/object1.svg" alt="Object 1" width="48" height="13">';card.append(badge);}if(d.children&&!root){card.setAttribute('aria-expanded',expanded.has(d.id));card.setAttribute('aria-controls','branch-'+d.id);card.onclick=()=>toggle(d.id);card.dataset.node=d.id;}return el;}
function branch(d){const wrap=document.createElement('div');wrap.className='children-wrap'+(expanded.has(d.id)?' open':'');wrap.id='branch-'+d.id;wrap.inert=!expanded.has(d.id);const clip=document.createElement('div');clip.className='children';const list=document.createElement('div');list.className=d.id==='md'?'departments':'child-list';d.children.forEach(c=>{const n=node(c);if(d.id==='md')n.className='department';if(c.children)n.append(branch(c));list.append(n)});clip.append(list);wrap.append(clip);return wrap;}
tree.append(node(data,true),branch(data));
function toggle(id,force){if(id==='md')return;const on=force===undefined?!expanded.has(id):force;if(on)expanded.add(id);else expanded.delete(id);const el=document.getElementById('branch-'+id);el.classList.toggle('open',on);el.inert=!on;document.querySelector(`[data-node="${id}"]`).setAttribute('aria-expanded',on);if(on)animateBranch(el);}
function all(d,on){if(d.children){toggle(d.id,on);d.children.forEach(c=>all(c,on))}}
document.querySelector('#expand').onclick=()=>all(data,true);document.querySelector('#collapse').onclick=()=>{all(data,false);toggle('md',true)};
function size(){const box=document.querySelector('#scale-box');box.style.width=tree.offsetWidth*scale+'px';box.style.height=tree.offsetHeight*scale+'px';tree.style.transform=`scale(${scale})`;}
function fit(){const canvas=document.querySelector('#canvas');scale=innerWidth<=1100?1:Math.min(1,(canvas.clientWidth-32)/1600);size()}
new ResizeObserver(size).observe(tree);new ResizeObserver(fit).observe(document.querySelector('#canvas'));fit();
function animateBranch(){}
})();
