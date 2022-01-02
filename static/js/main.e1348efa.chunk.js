(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{31:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},47:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},80:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),n=i(19),c=i.n(n),o=i(29),r=i(6),l=i(58),m=i(11),d=i(38),j=i(50),b=i(10),p=i(39),h=(i(44),i(25)),u=i(2),g={sidebarData:[{id:"menu-0",title:"Home",path:"/portfolio",icon:Object(u.jsx)(b.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Projects",path:"/projects",icon:Object(u.jsx)(b.e,{size:35}),className:"nav-text"},{id:"menu-2",title:"Blogs",path:"/blogs",icon:Object(u.jsx)(h.b,{size:35}),className:"nav-text"},{id:"menu-3",title:"Skills",path:"/skills",icon:Object(u.jsx)(b.a,{size:35}),className:"nav-text"}]},x=function(e){return Object(u.jsx)(p.a,{children:g.sidebarData.map((function(t){return Object(u.jsx)(p.a.Item,{children:Object(u.jsxs)(p.a.Link,{as:o.b,to:t.path,onClick:e.onSelection,children:[t.icon,Object(u.jsx)("span",{children:t.title})]})},t.id)}))})},f=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),i=t[0],s=t[1];return Object(u.jsx)(d.a,{className:"navbar",expand:"sm",expanded:i,children:Object(u.jsxs)(j.a,{fluid:!0,children:[Object(u.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return s(!i&&"expanded")},children:Object(u.jsx)(b.f,{className:"toggle-icon"})}),Object(u.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsx)(x,{onSelection:function(){s(!1)}})})]})})},k=i(85),O=i(86),y=i(51),N=i.n(y),v=function(e){return Object(u.jsx)(N.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},w=function(e){var t=e.about.start,i=e.about.exit;return Object(u.jsx)("section",{id:"about",children:Object(u.jsxs)("div",{className:"about-card",style:{backgroundColor:"#263238"},children:[Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",Object(u.jsx)("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",Object(u.jsx)("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})]}),Object(u.jsxs)("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"},children:[t,Object(u.jsx)("br",{}),i]})]})})},S=i(42),z=(i(73),i(52)),_=(i(74),function(e){return Object(u.jsx)("div",{className:"tags",children:e.tags.map((function(t,i){return Object(u.jsx)(z.a,{pill:!0,className:"tag mr-2 mb-2",bg:"secondary",children:t},e.id+i)}))})}),A=(i(75),function(e){return Object(u.jsx)(S.VerticalTimeline,{children:e.items.map((function(e){return Object(u.jsxs)(S.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.date,icon:e.icon,children:[Object(u.jsx)("h2",{className:"vertical-timeline-element-title",children:Object(u.jsx)("strong",{children:e.title})}),Object(u.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:e.company}),Object(u.jsx)("p",{className:"vertical-timeline-element-description",children:e.description}),Object(u.jsx)(_,{id:e.id,tags:e.tags})]},e.id)}))})}),P=i(53),I=i(54),L=i(26),B={greeting:Object(u.jsxs)("h1",{className:"heading",children:["Hi! I'm ",Object(u.jsx)("strong",{className:"main-name",children:" Rodrigo Arenas"})]}),titles:["Data Scientist","Machine Learning Specialist","Open Source Contributor","Backend Developer","Colombian"],about:{start:"I've been working for over six years on data science projects. I'm excited by learning new things, contributing to the data science community, and spreading the word of data!",exit:"I'm fluent at Python, SQL databases, BI tools, and more, with a deep interest in machine learning."},workTimeline:[{id:"work-3",title:"Sr Data Scientist",company:"Globant",description:"Build AutoML models and make them available to non-technical users from a graphical interface.",date:"2021-present",icon:Object(u.jsx)(P.a,{}),tags:["ml","automl","python","docker","redshift","superset"]},{id:"work-2",title:"BI Manager",company:"Rappi",description:"Leading a team of analysts and data scientists to execute different projects, including the construction of ETLs, data lakes, data warehouses, and machine learning models.",date:"2019-2021",icon:Object(u.jsx)(L.c,{}),tags:["ml","airflow","python","docker","snowflake","postgres","azure"]},{id:"work-1",title:"CRM Analytics Coordinator",company:"Avianca",description:"Tech leader of a BI, Data Science and DBA team. Build forecast models, data warehouse and Power BI dashboards.",date:"2018-2019",icon:Object(u.jsx)(I.a,{}),tags:["ml","mssql","python","docker","pbi","azure"]},{id:"work-0",title:"BI Analyst",company:"Onelink BPO",description:"Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",date:"2016-2018",icon:Object(u.jsx)(h.a,{}),tags:["python","mssql","pbi","excel"]}]},M=(i(76),function(){return Object(u.jsxs)("section",{children:[Object(u.jsx)(j.a,{fluid:!0,className:"home-content",id:"home",children:Object(u.jsx)(k.a,{children:Object(u.jsxs)(O.a,{className:"home-header",children:[Object(u.jsx)("div",{children:B.greeting}),Object(u.jsx)("div",{style:{textAlign:"center"},children:Object(u.jsx)(v,{titles:B.titles})}),Object(u.jsx)("div",{children:Object(u.jsx)(w,{about:B.about})})]})})}),Object(u.jsx)(j.a,{fluid:!0,className:"resume-content",id:"resume",children:Object(u.jsx)("div",{className:"col-md-8 mx-auto",children:Object(u.jsx)(A,{items:B.workTimeline})})})]})}),C=(i(31),function(e){return Object(u.jsx)("ul",{className:"card__footer",children:e.item.links.map((function(t){return Object(u.jsx)("li",{title:t.name,children:Object(u.jsx)("a",{className:"card__btn",href:t.url,target:e.item.target,rel:"noopener noreferrer",children:t.icon})},e.item.id+t.name)}))})}),T=function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("a",{style:{display:"flex"},href:e.item.links[0].url,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("div",{style:{backgroundImage:"url('"+e.item.image+"')"},className:"card__img",alt:e.item.title})}),Object(u.jsxs)("div",{className:"card__body",children:[Object(u.jsx)("h2",{className:"card__title",children:Object(u.jsx)("strong",{children:e.item.title})}),Object(u.jsx)("p",{className:"card__description",children:e.item.description}),Object(u.jsx)("hr",{className:"card__line"}),Object(u.jsx)(C,{item:e.item})]})]},e.item.id)},D=i(28),F=i(55),K=i.p+"static/media/sklearn_genetic_opt.15b892ad.png",E=i.p+"static/media/kafkaml.5ee10c15.png",G=i.p+"static/media/scikit_pipes.9e05aff9.png",H=i.p+"static/media/portfolio.565c9c29.png",R=[{id:"project-4",title:"Sklearn Genetic Opt",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt",icon:Object(u.jsx)(b.c,{})},{name:"fork",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",icon:Object(u.jsx)(D.a,{})},{name:"subscription",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",icon:Object(u.jsx)(b.b,{})},{name:"docs",url:"https://sklearn-genetic-opt.readthedocs.io/en/stable/",icon:Object(u.jsx)(F.a,{})}],image:K,description:"scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",target:"_blank"},{id:"project-3",title:"Kafkaml Anomalies",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",icon:Object(u.jsx)(b.c,{})},{name:"fork",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",icon:Object(u.jsx)(D.a,{})},{name:"subscription",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",icon:Object(u.jsx)(b.b,{})}],image:E,description:"Project for real-time anomaly detection using kafka and python.",target:"_blank"},{id:"project-2",title:"Portfolio Web",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/portfolio",icon:Object(u.jsx)(b.c,{})},{name:"fork",url:"https://github.com/rodrigo-arenas/portfolio/fork",icon:Object(u.jsx)(D.a,{})},{name:"subscription",url:"https://github.com/rodrigo-arenas/portfolio/subscription",icon:Object(u.jsx)(b.b,{})}],image:H,description:"Source code of my current portfolio web page as data scientist.",target:"_blank"},{id:"project-1",title:"Pyworkforce",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/pyworkforce",icon:Object(u.jsx)(b.c,{})},{name:"fork",url:"https://github.com/rodrigo-arenas/pyworkforce/fork",icon:Object(u.jsx)(D.a,{})},{name:"subscription",url:"https://github.com/rodrigo-arenas/pyworkforce/subscription",icon:Object(u.jsx)(b.b,{})}],image:"https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",description:"Common tools for workforce management, schedule and optimization problems, built on top of packages like google's or-tools and custom modules.",target:"_blank"},{id:"project-0",title:"Scikit-Pipes",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/scikit-pipes",icon:Object(u.jsx)(b.c,{})},{name:"fork",url:"https://github.com/rodrigo-arenas/scikit-pipes/fork",icon:Object(u.jsx)(D.a,{})},{name:"subscription",url:"https://github.com/rodrigo-arenas/scikit-pipes/subscription",icon:Object(u.jsx)(b.b,{})}],image:G,description:"Scikit-Learn practical pre-defined Pipelines Hub.",target:"_blank"}],Q=function(){return Object(u.jsx)("div",{className:"wrapper",children:R.map((function(e){return Object(u.jsx)(T,{item:e})}))})},U=i(43),Y=(i(45),function(e){return Object(u.jsx)("ul",{className:"skill-icons",children:e.config.map((function(e,t){return Object(u.jsxs)("li",{className:e.className,children:[e.icon,Object(u.jsx)("p",{className:e.className+"-text",children:e.text})]},e.id)}))})}),V=i(9),Z=i(56),q={mainSkills:[{id:"skills-0",className:"skill-icon",icon:Object(u.jsx)(V.l,{size:50}),text:"Python"},{id:"skills-1",className:"skill-icon",icon:Object(u.jsx)(V.j,{size:50}),text:"Postgres"},{id:"skills-2",className:"skill-icon",icon:Object(u.jsx)(V.i,{size:50}),text:"MSSQL"},{id:"skills-3",className:"skill-icon",icon:Object(u.jsx)(V.d,{size:50}),text:"Docker"},{id:"skills-4",className:"skill-icon",icon:Object(u.jsx)(V.h,{size:50}),text:"Azure"},{id:"skills-5",className:"skill-icon",icon:Object(u.jsx)(L.a,{size:50}),text:"Git"}],complementarySkills:[{id:"skills-5",className:"skill-icon",icon:Object(u.jsx)(Z.a,{size:50}),text:"MySQL"},{id:"skills-6",className:"skill-icon",icon:Object(u.jsx)(V.n,{size:50}),text:"Redis"},{id:"skills-7",className:"skill-icon",icon:Object(u.jsx)(V.p,{size:50}),text:"Bash"},{id:"skills-8",className:"skill-icon",icon:Object(u.jsx)(V.o,{size:50}),text:"Snowflake"},{id:"skills-9",className:"skill-icon",icon:Object(u.jsx)(V.a,{size:50}),text:"Airflow"},{id:"skills-10",className:"skill-icon",icon:Object(u.jsx)(V.f,{size:50}),text:"JS"},{id:"skills-11",className:"skill-icon",icon:Object(u.jsx)(V.c,{size:50}),text:"CSS 3"},{id:"skills-12",className:"skill-icon",icon:Object(u.jsx)(V.e,{size:50}),text:"HTML 5"},{id:"skills-13",className:"skill-icon",icon:Object(u.jsx)(V.m,{size:50}),text:"React"},{id:"skills-14",className:"skill-icon",icon:Object(u.jsx)(V.b,{size:50}),text:"Kafka"},{id:"skills-15",className:"skill-icon",icon:Object(u.jsx)(V.k,{size:50}),text:"Power BI"}]},J=function(){return Object(u.jsx)("section",{id:"skills",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"skills-div",children:[Object(u.jsx)("h1",{className:"main-skills-h1",children:Object(u.jsx)("span",{className:"main-skills",children:Object(u.jsx)("strong",{children:"Main Skills & Tools"})})}),Object(u.jsx)(U.a,{effect:"bounce",children:Object(u.jsx)("div",{className:"main-skills",children:Object(u.jsx)(Y,{config:q.mainSkills})})}),Object(u.jsx)("h1",{className:"complementary-skills-h1",children:Object(u.jsx)("span",{className:"complementary-skills",children:Object(u.jsx)("strong",{children:"Complementary Skills & Tools"})})}),Object(u.jsx)(U.a,{effect:"bounce",children:Object(u.jsx)("div",{className:"complementary-skills",children:Object(u.jsx)(Y,{config:q.complementarySkills})})})]})})})},W=i.p+"static/media/fastapi_sklearn.0bfaec4c.png",X=[{id:"blog-6",title:"Evolutionary Feature Selection for Machine Learning",links:[{name:"article",url:"https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12",icon:Object(u.jsx)(V.g,{})}],image:"https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",description:"Learn how to make feature selection for machine learning algorithms using evolutionary models.",target:"_blank"},{id:"blog-5",title:"Real-time anomaly detection with Apache Kafka and Python",links:[{name:"article",url:"https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9",icon:Object(u.jsx)(V.g,{})},{name:"repo",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",icon:Object(u.jsx)(b.c,{})}],image:"https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",description:"Learn how to make predictions over streaming data coming from Kafka using Python.",target:"_blank"},{id:"blog-4",title:"Serve a machine learning model using Sklearn, FastAPI, and Docker",links:[{name:"article",url:"https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b",icon:Object(u.jsx)(V.g,{})},{name:"repo",url:"https://github.com/rodrigo-arenas/fast-ml-deploy",icon:Object(u.jsx)(b.c,{})}],image:W,description:"Get your model machine learning model to production as a containerized API.",target:"_blank"},{id:"blog-3",title:"Are You Still Using Grid Search for Hyperparameters Optimization?",links:[{name:"article",url:"https://towardsdatascience.com/hyperparameters-tuning-from-grid-search-to-optimization-a09853e4e9b8",icon:Object(u.jsx)(V.g,{})}],image:"https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",description:"Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",target:"_blank"},{id:"blog-2",title:"Tune Your Scikit-learn Model Using Evolutionary Algorithms",links:[{name:"article",url:"https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16",icon:Object(u.jsx)(V.g,{})}],image:"https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",description:"Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",target:"_blank"},{id:"blog-1",title:"Manage your machine learning life cycle with MLflow in Python",links:[{name:"article",url:"https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682",icon:Object(u.jsx)(V.g,{})},{name:"repo",url:"https://github.com/rodrigo-arenas/mlflow-basics",icon:Object(u.jsx)(b.c,{})}],image:"https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",description:"Enable collaboration across data scientists; gain control over different models versions, multiple experiments within the same problem, and models management and deployment.",target:"_blank"},{id:"blog-0",title:"Workforce planning optimization using Python",links:[{name:"article",url:"https://medium.com/mlearning-ai/workforce-planning-optimization-using-python-69af0ef9011a",icon:Object(u.jsx)(V.g,{})}],image:"https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",description:"Learn how to find the optimal number of positions needed to manage incoming traffic.",target:"_blank"}],$=function(){return Object(u.jsx)("div",{className:"wrapper",children:X.map((function(e){return Object(u.jsx)(T,{item:e})}))})};var ee=function(){var e=Object(r.e)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},te={icons:[{id:"footer-0",url:"https://github.com/rodrigo-arenas",className:"social-icon",target:"_blank",icon:Object(u.jsx)(b.c,{size:50})},{id:"footer-1",url:"https://linkedin.com/in/rodrigo-arenas-gomez",className:"social-icon",target:"_blank",icon:Object(u.jsx)(L.b,{size:50})},{id:"footer-2",url:"https://rodrigo-arenas.medium.com",className:"social-icon",target:"_blank",icon:Object(u.jsx)(h.b,{size:50})}]},ie=(i(47),function(){return Object(u.jsx)("div",{className:"social-icons",children:te.icons.map((function(e){return Object(u.jsx)("a",{href:e.url,className:e.className,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer",children:e.icon},e.id)}))})}),ae=function(){return Object(u.jsx)(j.a,{fluid:!0,className:"footer",children:Object(u.jsx)(k.a,{children:Object(u.jsx)(O.a,{className:"footer-body",children:Object(u.jsx)(ie,{})})})})};i(80),i(81);l.a.initialize("G-YC8H8WGHT3");var se=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)(ee,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/portfolio",exact:!0,element:Object(u.jsx)(M,{})}),Object(u.jsx)(r.a,{path:"/projects",exact:!0,element:Object(u.jsx)(Q,{})}),Object(u.jsx)(r.a,{path:"/blogs",exact:!0,element:Object(u.jsx)($,{})}),Object(u.jsx)(r.a,{path:"/skills",exact:!0,element:Object(u.jsx)(J,{})})]}),Object(u.jsx)(ae,{})]})})};i(82);c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(se,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.e1348efa.chunk.js.map