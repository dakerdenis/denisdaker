import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            header: {
                about: "About",
                services: "Services",
                portfolio: "Portfolio",
                contact: "Contacts"
            },
            hero: {
                title: "FULL-STACK WEB DEVELOPER",
                name: "Denis Akershteyn",
                welcome: "Welcome!",
                hero1: "I'm Denis Akershteyn— glad to welcome you to my website",
                hero2: "For more than 4 years, I have been constantly improving my skills in this area.",
                hero3: "Having extensive experience in developing websites, participating in large projects, now I provide both my services and services represented by the studio to private clients.",
                skills1: "Development & processing of sites",
                skills2: "B2C Architecture",
                skills3: "Website development",
                skills4: "Design"
            },
            about:{
                name: "About me",
                experience: "YEARS OF EXPRERIENCE",
                projects: "PROJECTS COMPLETED",
                hi:"Hi!",

                about1: "My name is Denis Akershteyn, and I develop websites and landing pages on a turnkey basis.",
                about2: "For more than 4 years I have been constantly improving my skills in this area.",
                about3: "Having extensive experience in developing websites,participating in large projects, now I provide both my services and services represented by the studio to private clients.",
                about4: "I can and am always sincerely happy to help any business in its development and undertakings, based on modern realities. To bring to life your ideas about how your customers should see your business is the main goal of my work.",
                contactme: "Contact me",
            },
            services:{
                name:"Services",
                web: {
                    web_dev: "Website development",
                    web_dev_desc: "I create modern, scalable websites using PHP, Laravel, HTML, CSS, and JavaScript. My focus is on building sites that are efficient, secure, and tailored to meet your business needs. With expertise in both frontend and backend, I ensure seamless user experiences and optimized performance."
                },
                design: {
                    des_dev: "Design",
                    des_dev_desc: " Creating clean, modern web designs that enhance user experience and highlight brand identity. Design isn’t just about aesthetics, but also about functionality, ensuring every element is both useful and visually appealing. ",
                },
                b2C: {
                    b2c_dev: "B2C Architecture",
                    b2c_dev_desc: " Experienced in designing business logic for B2C projects, ensuring smooth interactions between customers and businesses. Focused on creating user-friendly, scalable systems that support seamless transactions and customer engagement, while meeting business objectives efficiently."
                },
                server: {
                    serveR_dev: "Server Maintenance",
                    serveR_dev_desc: "   Experienced in server setup and maintenance, including working with Nginx for efficient and reliable performance.",
                },
            }
        }
    },
    az: {
        translation: {
            header: {
                about: "Haqqında",
                services: "Xidmətlər",
                portfolio: "Portfel",
                contact: "Əlaqə"
            },
            hero: {
                title: "FULL-STACK VEB TƏRTİBATÇISI",
                name: "Denis Akerşteyn",
                welcome: "Xoş gəlmisiniz!",
                hero1: "Mən Denis Akerşteynəm — sizi saytımda qarşılamağa şadam",
                hero2: "Artıq 4 ildən çoxdur ki, bu sahədə bacarıqlarımı davamlı olaraq təkmilləşdirirəm.",
                hero3: "Geniş veb sayt tərtibatı təcrübəm, böyük layihələrdə iştirakım var və indi həm öz xidmətlərimi, həm də studiyanın təmsil etdiyi xidmətləri fərdi müştərilərə təklif edirəm.",
                skills1: "Saytların hazırlanması və emalı",
                skills2: "B2C Arxitektura",
                skills3: "Veb saytların yaradılması",
                skills4: "Dizayn"
            },
            about: {
                name: "Haqqımda",
                experience: "İLLİK TƏCRÜBƏ",
                projects: "TAMAMLANMIŞ LAYİHƏLƏR",
                hi: "Salam!",
            
                about1: "Mənim adım Denis Akerşteyndir, və mən veb saytlar və açılış səhifələrini tam şəkildə hazırlayıram.",
                about2: "Artıq 4 ildən çoxdur ki, bu sahədə bacarıqlarımı davamlı olaraq təkmilləşdirirəm.",
                about3: "Geniş veb sayt tərtibatı təcrübəm və böyük layihələrdə iştirakım var, indi həm öz xidmətlərimi, həm də studiyanın təmsil etdiyi xidmətləri fərdi müştərilərə təklif edirəm.",
                about4: "Mən hər hansı bir biznesin inkişafına və yeni təşəbbüslərinə kömək etməyə daim səmimi qəlbdən hazıram və bunu etməkdən məmnunam. Müştərilərinizin biznesinizi necə görməli olduğunu həyata keçirmək mənim işimin əsas məqsədidir.",
                contactme: "Əlaqə saxlayın",
            },
            services: {
                name: "Xidmətlər",
                web: {
                    web_dev: "Veb saytların yaradılması",
                    web_dev_desc: "Mən PHP, Laravel, HTML, CSS və JavaScript istifadə edərək müasir, genişlənə bilən veb saytlar yaradıram. Məqsədim, biznes ehtiyaclarınıza uyğun, effektiv və təhlükəsiz saytlar qurmaqdır. Frontend və backend sahəsində təcrübəm sayəsində istifadəçilər üçün rahat təcrübələr və optimallaşdırılmış performans təmin edirəm."
                },
                design: {
                    des_dev: "Dizayn",
                    des_dev_desc: "Təmiz, müasir veb dizaynların yaradılması, istifadəçi təcrübəsini artırmaq və brend kimliyini vurğulamaq. Dizayn təkcə estetikadan ibarət deyil, həm də funksionallıqdır, hər elementin həm faydalı, həm də vizual olaraq cəlbedici olmasını təmin edir."
                },
                b2C: {
                    b2c_dev: "B2C Arxitektura",
                    b2c_dev_desc: "Müştərilərlə biznes arasında rahat qarşılıqlı əlaqəni təmin edən B2C layihələri üçün iş məntiqinin hazırlanmasında təcrübə. İstifadəçi dostu, genişlənə bilən sistemlərin yaradılmasına və biznes məqsədlərinə səmərəli nail olmağa yönəlmişəm."
                },
                server: {
                    serveR_dev: "Serverlərin texniki dəstəyi",
                    serveR_dev_desc: "Effektiv və etibarlı performans üçün Nginx ilə işləmək də daxil olmaqla serverlərin quraşdırılması və texniki dəstək sahəsində təcrübəm var."
                }
            }          
        }
    },
    ru: {
        translation: {
            header: {
                about: "Обо мне",
                services: "Услуги",
                portfolio: "Портфолио",
                contact: "Контакты"
            },
            hero: {
                title: "FULL-STACK ВЕБ-РАЗРАБОТЧИК",
                name: "Денис Акерштейн",
                welcome: "Добро пожаловать!",
                hero1: "Я Денис Акерштейн — рад приветствовать вас на своем сайте",
                hero2: "Уже более 4 лет я постоянно совершенствую свои навыки в этой области.",
                hero3: "Имея обширный опыт в разработке сайтов и участие в крупных проектах, теперь я предоставляю как свои услуги, так и услуги, представленные студией, частным клиентам.",
                skills1: "Разработка и обработка сайтов",
                skills2: "B2C Архитектура",
                skills3: "Разработка веб-сайтов",
                skills4: "Дизайн"
            },
            about: {
                name: "Обо мне",
                experience: "ГОДЫ ОПЫТА",
                projects: "ЗАВЕРШЕННЫЕ ПРОЕКТЫ",
                hi: "Привет!",
            
                about1: "Меня зовут Денис Акерштейн, и я занимаюсь разработкой веб-сайтов и лендингов под ключ.",
                about2: "Уже более 4 лет я постоянно совершенствую свои навыки в этой области.",
                about3: "Имея обширный опыт в разработке сайтов и участие в крупных проектах, теперь я предоставляю как свои услуги, так и услуги, представленные студией, частным клиентам.",
                about4: "Я могу и всегда искренне рад помочь любому бизнесу в его развитии и начинаниях, основываясь на современных реалиях. Воплотить в жизнь ваши идеи о том, как ваши клиенты должны видеть ваш бизнес, — главная цель моей работы.",
                contactme: "Связь со мной",
            },
            services: {
                name: "Услуги",
                web: {
                    web_dev: "Разработка веб-сайтов",
                    web_dev_desc: "Я создаю современные, масштабируемые сайты с использованием PHP, Laravel, HTML, CSS и JavaScript. Моя цель — разрабатывать сайты, которые эффективны, безопасны и адаптированы под потребности вашего бизнеса. Благодаря опыту как в frontend, так и в backend, я обеспечиваю беспрепятственное взаимодействие пользователей и оптимизированную производительность."
                },
                design: {
                    des_dev: "Дизайн",
                    des_dev_desc: "Создание чистых, современных веб-дизайнов, которые улучшают пользовательский опыт и подчеркивают индивидуальность бренда. Дизайн — это не только эстетика, но и функциональность, обеспечивая, чтобы каждый элемент был как полезным, так и визуально привлекательным."
                },
                b2C: {
                    b2c_dev: "B2C Архитектура",
                    b2c_dev_desc: "Опыт в проектировании бизнес-логики для B2C проектов, обеспечивающий плавное взаимодействие между клиентами и бизнесом. Основное внимание уделяется созданию удобных, масштабируемых систем, поддерживающих безупречные транзакции и взаимодействие с клиентами, а также эффективному достижению бизнес-целей."
                },
                server: {
                    serveR_dev: "Обслуживание серверов",
                    serveR_dev_desc: "Опыт в настройке и обслуживании серверов, включая работу с Nginx для обеспечения эффективной и надежной работы."
                }
            }   
        }
    }
};

i18n
    .use(LanguageDetector) // Language detection plugin
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources,
        fallbackLng: 'en', // Default language if no detection
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });

export default i18n;
