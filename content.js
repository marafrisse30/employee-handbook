const sections=[
{id:'home',label:'Overview',icon:'home',desc:'Your employee handbook, in one place.'},
{id:'about',label:'About the company',icon:'building',desc:'Who we are and what we do.'},
{id:'team',label:'Our team',icon:'people',desc:'Meet the people in your handbook.'},
{id:'structure',label:'Company structure',icon:'tree',desc:'Explore departments and reporting lines.'},
{id:'hours',label:'Working hours',icon:'clock',desc:'Office schedules and attendance.'},
{id:'leave',label:'Leave & benefits',icon:'sun',desc:'Time off, compensation and support.'},
{id:'conduct',label:'Code of conduct',icon:'shield',desc:'The standards we share at work.'},
{id:'dress',label:'Dress code',icon:'spark',desc:'A guide to professional appearance.'},
{id:'career',label:'Career & procedures',icon:'steps',desc:'Development, processes and offboarding.'}
];
const team=[["Tatiana Tonu", "CEO", 5, "tatiana-tonu.png"], ["Danil Maslennikov", "Managing Director", 5, "person-0.jpg"], ["Julia Stupina", "CFO", 5, "person-1.jpg"], ["Viktoria Polley", "Head of Legal", 6, "person-2.jpg"], ["Iryna Burkova", "Head of HR Department", 6, "person-3.jpg"], ["Khalida Rustamova", "Head of Financial Reporting, Tax & Compliance", 6, "person-5.jpg"], ["Serhii Khyzhniak", "Head of IT Department", 7, "serhii-khyzhniak.png"], ["Irina Cojuhari", "Head of Marketing", 7, "person-8.jpg"], ["Yevanhelina Hranat", "HR Manager", 7, "person-4.jpg"], ["Yevheniia Chunykhyna", "Administration Manager", 7, "person-6.jpg"], ["Shahbaz Nasim", "Chief Sales Officer", 8, "person-9.jpg"], ["Zoheb Khan", "Sales Director", 8, "person-10.jpg"], ["Zeina Al Ali", "Sales Director", 8, "zeina-al-ali.png"]];
const leavePolicies=[
{title:'Annual leave',value:'30',unit:'calendar days',body:'30 calendar days upon completion of 1 year of continuous service.',page:11},
{title:'Sick leave',value:'90',unit:'calendar days, in three stages',body:'First 15 calendar days: full pay. Next 30 calendar days: half pay. Remaining 45 calendar days: unpaid.',page:11},
{title:'Maternity leave',value:'60',unit:'calendar days',body:'Female employees are entitled to 60 calendar days of leave: first 45 calendar days at full pay; next 15 calendar days at half pay.',page:11},
{title:'Paternity leave',value:'5',unit:'working days',body:'Male employees are entitled to 5 working days of paid leave.',page:11},
{title:'Bereavement leave',value:'3–5',unit:'working days',body:'Paid leave: 5 working days upon the death of a spouse; 3 working days upon the death of a parent, child, sibling, grandchild or grandparent.',page:11},
{title:'Public holidays',value:'UAE',unit:'announced holidays',body:'As announced by the UAE Government and communicated by HR.',page:11}
];
const conduct=[['Integrity & honesty','Act with integrity and honesty, ensuring transparency and ethical behavior at all times.'],['Professionalism & excellence','Deliver high-quality work with responsibility and attention to detail.'],['Fair decisions','Make objective and fair decisions based on facts and the best interests of the company.'],['Respect & equality','Treat all individuals with respect and equality, fostering an inclusive and professional workplace.'],['Teamwork & cooperation','Support colleagues and contribute to shared success.'],['Accountability','Take accountability for actions, decisions and performance, and comply with company procedures.'],['Confidentiality & trust','Protect company and client information.'],['A positive work environment','Contribute to a positive and ethical work environment that reflects the values and reputation of Object 1.']];
const dress={
'women-yes':{page:16,title:'Women · Permitted',items:['Tailored suits, blazers and coordinated business outfits','Elegant, modest dresses suitable for a corporate environment','Skirts of knee length or longer','Traditional GCC attire, including robe / abaya','Formal footwear such as heels, loafers or ballet flats','Well-maintained grooming: neat hair, tidy nails, polished makeup and a subtle fragrance']},
'women-no':{page:17,title:'Women · Not permitted',items:['Mini-skirts above corporate standard','Short dresses not suitable for a business environment','Ripped jeans, casual denim or leggings worn as pants','Sportswear, loungewear or beachwear','Flip-flops, slippers, sneakers or beach sandals']},
'men-yes':{page:18,title:'Men · Permitted',items:['Tailored suits or blazers paired with formal shirts','Smart, well-fitted dress trousers appropriate for business settings','Formal, polished shoes suitable for office and client meetings','Neat, well-groomed appearance with a light, subtle fragrance']},
'men-no':{page:19,title:'Men · Not permitted',items:['Shorts','T-shirts, hoodies or casual tops','Slippers, sandals or open footwear','Ripped, distressed or overly casual jeans']}
};
const searchEntries=[
...sections.map(s=>({title:s.label,text:s.desc,target:s.id})),
...team.map(p=>({title:p[0],text:p[1],target:'team'})),
...leavePolicies.map(p=>({title:p.title,text:p.body,target:'leave',anchor:'leave-'+p.title.split(' ')[0].toLowerCase()})),
...conduct.map((p,i)=>({title:p[0],text:p[1],target:'conduct',anchor:'conduct-'+i})),
{title:'Salary & WPS',text:'Salary payment bank account compensation cash cheque 27th 12th',target:'leave',anchor:'salary'},
{title:'Visa & medical insurance',text:'Employment visa sponsorship BUPA Sukoon Max Health Qatar Insurance Al Madallah',target:'leave',anchor:'visa'},
{title:'Fingerprint attendance',text:'Sales attendance late check-ins Building 3 sixth floor deductions',target:'hours',anchor:'attendance'},
{title:'Smoking & vaping',text:'No smoking vape IQOS office designated outdoor areas',target:'conduct',anchor:'smoking'},
{title:'Lapel pin',text:'Company lapel pin required during business hours',target:'dress',anchor:'lapel'},
{title:'Exit & offboarding',text:'Resignation email notice period probation 14 30 days return assets visa cancellation final settlement',target:'career',anchor:'exit'},
{title:'Disciplinary process',text:'Verbal written final warning termination',target:'career',anchor:'discipline'},
...Object.values(dress).map(d=>({title:d.title,text:d.items.join(' '),target:'dress'}))
];
