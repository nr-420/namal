// src/translations.ts

export type Language = 'en' | 'si' | 'ta';

export const translations = {
    // =========================================================================
    // ENGLISH
    // =========================================================================
    en: {
        hero: {
            quote: "Look to the Rajapaksas for how to handle a disaster",
            author: "- Namal Rajapaksa (2025)",
            cta: "Sure, let's take a look."
        },
        sectionOne: {
            title: "Who Pledged Help?",
            subtitle: "Major donors pledged over 122 Billion LKR to rebuild Sri Lanka.",
            chart: {
                eu: "European Union",
                ngo: "Private / NGO",
                japan: "Japan",
                adb: "ADB",
                wb: "World Bank",
                usa: "USA",
                ger: "Germany"
            },
            source: "Summary of World Bank assistance to Sri Lanka"
        },
        sectionTwo: {
            title: "The Missing Money",
            subtitle: "Of the 122 Billion LKR received, nearly half vanished. And this is all in 2007 money! Imagine how much it's worth now!",
            statLabelOne: "Expended",
            statLabelTwo: "Unaccounted For",
            totalLabel: "Total Aid Received",
            source: "Transparency International Sri Lanka (2007)"
        },
        sectionThree: {
            title: "The Promise vs. Reality",
            subtitle: "They had the money (122 Billion LKR). Why were people still in tents?",
            chart: {
                housing: "Housing & Townships",
                roads: "Roads & Transport",
                water: "Water & Sanitation",
                fish: "Livelihood (Fisheries)",
                other: "Other Infrastructure"
            },
            goalLabel: "Housing Goal",
            goalCount: "98,525 Homes",
            actualLabel: "Actual Completion (Year 1)",
            actualNote: "Only ~13,000 units built by end of 2005",
            source: "UNOCA Report (2005)"
        },
        sectionFour: {
            title: "The \"Helping Hambantota\" Scandal",
            subtitle: "Disaster relief... or personal relief?",
            desc: "In 2005, investigations revealed that Rs. 82.9 Million was diverted from the Treasury into a private bank account controlled by the Prime Minister.",
            chart: {
                treasury: "National Treasury (Legal)",
                private: "Helping Hambantota (Private)"
            },
            quote: "\"The transfer of these funds to a private account constituted a criminal misappropriation.\"",
            quoteAuthor: "— Initial Police Report (CID)",
            source: "BBC: 'Helping Hambantota' probe halted",
            cjApology: "I met a JVP member at the Narahenpita pola recently and he asked me as to why I did not give the right judgment in 2005 and I could not answer him. But today I tender an apology for it. I am very sorry,",
            cjName: "Sarath N. Silva",
            cjContext: "Former Chief Justice (Referring to his 2005 judgment halting the investigation)",
        },
        sectionFive: {
            title: "The Myth of \"Efficiency\"",
            subtitle: "Namal says: \"Look to us.\" The Reality: 9 months later, money was still rotting in banks.",
            chart: {
                spent: "Aid Spent on Victims",
                idle: "Idle / Stuck in Banks"
            },
            alertTitle: "The Cost of Incompetence:",
            alertDesc: "While funds sat idle, the Auditor General found that 686 containers of food and medical relief were abandoned at Colombo Port.",
            source: "Auditor General S.C. Mayadunne: Interim Tsunami Aid Audit (2005)"
        },
        sectionSix: {
            title: "The \"Rajapaksa Model\" Scorecard",
            subtitle: "Namal says to follow their example. We graded it.",
            headers: {
                metric: "Metric",
                finding: "Audit Finding",
                grade: "Grade"
            },
            rows: {
                transparency: {
                    name: "Transparency",
                    desc: "45% of Aid (LKR 53.6B) Unaccounted For",
                    grade: "F"
                },
                efficiency: {
                    name: "Speed / Efficiency",
                    desc: "86.5% of funds idle; 686 containers abandoned",
                    grade: "F"
                },
                execution: {
                    name: "Project Execution",
                    desc: "Only 13% of housing targets met in Year 1",
                    grade: "F"
                },
                politics: {
                    name: "Political Consequences",
                    desc: "Zero. Despite the theft, Mahinda was elected President 2 months later.",
                    grade: "A+"
                }
            },
            verdictTitle: "Overall Verdict",
            verdictMain: "Failed the Country.",
            verdictSub: "But saved the Family.",
            source: "Consolidated findings from Auditor General & TISL"
        },
        footer: {
            lead: "Namal asked us to look to the Rajapaksas for a disaster model. We looked. We saw theft. We saw neglect.",
            summary: "So, in summary:",
            punchline: "FUCK YOU.",
            legal: "Data sourced from Auditor General, NGO reports, & Supreme Court Reports. Fair comment on public interest."
        },
        sectionOffshore: {
            title: "The Offshore Connection",
            subtitle: "While the country begged for aid, the family built a labyrinth.",
            desc: "We may never know exactly which bank account the Tsunami aid hit. But we know where the family kept their wealth.",
            cards: {
                pandora: {
                    title: "The Pandora Papers (2021)",
                    body: "Leaked documents exposed Nirupama Rajapaksa (Cousin) and her husband Nadesan holding millions in secret shell companies in Samoa and the BVI."
                },
                assets: {
                    title: "Unexplained Wealth",
                    body: "While Tsunami victims waited for housing, the ruling family acquired luxury properties in London, Sydney, and Dubai."
                }
            },
            quote: "\"They have accumulated wealth offshore while the country drowns in debt.\"",
            quoteAuthor: "— ICIJ Investigation Summary",
            source: "International Consortium of Investigative Journalists (ICIJ) - Pandora Papers"
        },
    },

    // =========================================================================
    // SINHALA
    // =========================================================================
    si: {
        hero: {
            quote: "\"ආපදාවක් කළමනාකරණය කරගන්නා ආකාරය රාජපක්ෂලාගෙන් ඉගෙන ගන්න\"",
            author: "- නාමල් රාජපක්ෂ (2025)",
            cta: "හරි, අපි බලමු."
        },
        sectionOne: {
            title: "උදව් පොරොන්දු වූයේ කවුද?",
            subtitle: "ශ්‍රී ලංකාව නැවත ගොඩනැගීම සඳහා ඩොලර් බිලියන 2.2 කට අධික මුදලක් පොරොන්දු විය.",
            chart: {
                eu: "යුරෝපා සංගමය",
                ngo: "පෞද්ගලික / රාජ්‍ය නොවන",
                japan: "ජපානය",
                adb: "ADB බැංකුව",
                wb: "ලෝක බැංකුව",
                usa: "ඇමරිකාව",
                ger: "ජර්මනිය"
            },
            source: "Summary of World Bank assistance to Sri Lanka"
        },
        sectionTwo: {
            title: "අතුරුදහන් වූ මුදල්",
            subtitle: "ලැබුණු ඩොලර් බිලියන 2.2 න් අඩකට ආසන්න ප්‍රමාණයක් අතුරුදහන් විය.",
            statLabelOne: "ගිණුම්ගත නොකළ",
            statLabelTwo: "",
            totalLabel: "ලැබුණු මුළු ආධාර",
            source: "ට්‍රාන්ස්පේරන්සි ඉන්ටර්නැෂනල් ශ්‍රී ලංකා (2007)"
        },
        sectionThree: {
            title: "පොරොන්දුව සහ යථාර්ථය",
            subtitle: "ඔවුන් සතුව මුදල් තිබුණි ($ බිලියන 2.2). එසේ නම් මිනිසුන් තවමත් කූඩාරම් වල සිටියේ ඇයි?",
            chart: {
                housing: "නිවාස සහ නගර",
                roads: "මාර්ග සහ ප්‍රවාහන",
                water: "ජලය සහ සනීපාරක්ෂක",
                fish: "ජීවනෝපාය (ධීවර)",
                other: "වෙනත් යටිතල පහසුකම්"
            },
            goalLabel: "නිවාස ඉලක්කය",
            goalCount: "නිවාස 98,525",
            actualLabel: "සැබෑ නිම කිරීම (වසර 1)",
            actualNote: "2005 අවසානයේ නිම කර තිබුණේ නිවාස ~13,000 පමණි",
            source: "UNOCA Report (2005)"
        },
        sectionFour: {
            title: "\"හෙල්පින් හම්බන්තොට\" වංචාව",
            subtitle: "ආපදා සහනයක්ද... නැත්නම් පුද්ගලික සහනයක්ද?",
            desc: "2005 දී, මහජනතාවගෙන් ලැබුණු රු. මිලියන 82.9 ක මුදලක් මහා භාණ්ඩාගාරයෙන් ඉවත් කර අගමැතිවරයාගේ පාලනය යටතේ පැවති පුද්ගලික ගිණුමකට බැර කළ බව හෙළි විය.",
            chart: {
                treasury: "මහා භාණ්ඩාගාරය (නීත්‍යානුකූල)",
                private: "හෙල්පින් හම්බන්තොට (පුද්ගලික)"
            },
            quote: "\"මෙම මුදල් පුද්ගලික ගිණුමකට මාරු කිරීම සාපරාධී සාවද්‍ය පරිහරණයකි.\"",
            quoteAuthor: "— මූලික පොලිස් වාර්තාව (CID)",
            source: "BBC: 'Helping Hambantota' probe halted"
        },
        sectionFive: {
            title: "\"කාර්යක්ෂමතාවයේ\" මිථ්‍යාව",
            subtitle: "නාමල් කියයි: \"අපි දිහා බලන්න.\" යථාර්ථය: මාස 9 කට පසුවත් ආධාර මුදල් බැංකු වල කුණු වෙමින් තිබුණි.",
            chart: {
                spent: "විපතට පත් වූවන් සඳහා වියදම් කළ",
                idle: "බැංකු වල හිර වූ මුදල්"
            },
            alertTitle: "කාර්යක්ෂමතාවයේ වියදම:",
            alertDesc: "මුදල් ගිණුම් වල තිබියදී, පරිපාලන ප්‍රමාදයන් නිසා ආහාර සහ ඖෂධ කන්ටේනර් 686 ක් වරායේ අතහැර දමා තිබූ බව විගණකාධිපතිවරයා සොයා ගත්තේය.",
            source: "විගණකාධිපති S.C. මායාදුන්නේ: සුනාමි ආධාර අතුරු විගණනය (2005)"
        },
        sectionSix: {
            title: "රාජපක්ෂ මාදිලියේ ලකුණු පත",
            subtitle: "නාමල් කියන්නේ ඔවුන්ව ආදර්ශයට ගන්න කියාය. අපි එයට ලකුණු දැමුවෙමු.",
            headers: {
                metric: "මිනුම",
                finding: "විගණන සොයාගැනීම",
                grade: "ශ්‍රේණිය"
            },
            rows: {
                transparency: {
                    name: "විනිවිදභාවය",
                    desc: "ආධාර වලින් 45% ක් ($ මිලියන 535) අතුරුදහන්",
                    grade: "F"
                },
                efficiency: {
                    name: "කාර්යක්ෂමතාව",
                    desc: "ප්‍රතිපාදන වලින් 86.5% ක් භාවිතයට නොගෙන හිරවී ඇත",
                    grade: "F"
                },
                execution: {
                    name: "ව්‍යාපෘති ක්‍රියාත්මක කිරීම",
                    desc: "වසරක් තුළ නිවාස ඉලක්කයෙන් සපුරා ඇත්තේ 13% යි",
                    grade: "F"
                },
                politics: {
                    name: "දේශපාලන ප්‍රතිඵල",
                    desc: "ශුන්‍යයි. සොරකම තිබියදීම මාස 2 කට පසු මහින්ද ජනාධිපති විය.",
                    grade: "A+"
                }
            },
            verdictTitle: "සමස්ත තීන්දුව",
            verdictMain: "රට අසමත් විය.",
            verdictSub: "නමුත් පවුල ගොඩ ගියේය.",
            source: "විගණකාධිපති සහ TISL සොයාගැනීම්"
        },
        footer: {
            lead: "ආපදා ආදර්ශයක් සඳහා රාජපක්ෂලා දෙස බලන්නැයි නාමල් අපෙන් ඉල්ලා සිටියේය. අපි බැලුවෙමු. අප දුටුවේ සොරකමයි. නොසලකා හැරීමයි.",
            summary: "එහෙනම්, කෙටියෙන් කියනවනම්:",
            punchline: "තොපිට හෙන ගහපන්.", // "May lightning strike you" (Curse)
            legal: "මූලාශ්‍ර: විගණකාධිපති සහ ශ්‍රේෂ්ඨාධිකරණ වාර්තා. මෙය පොදු ජන යහපත උදෙසා කළ හෙළිදරව්වකි."
        },
        sectionOffshore: {
            title: "පිටරට සැඟවූ වත්කම්",
            subtitle: "රට ආධාර යදිද්දී, පවුල රහස් ගිණුම් තැනුවේය.",
            desc: "සුනාමි ආධාර ගියේ කුමන ගිණුමටදැයි අපට කිසිදා සොයාගත නොහැකි වනු ඇත. නමුත් පවුලේ වත්කම් තිබුණේ කොහේදැයි අපි දනිමු.",
            cards: {
                pandora: {
                    title: "පැන්ඩෝරා පත්‍රිකා (2021)",
                    body: "නිරූපමා රාජපක්ෂ (ඥාති සොහොයුරිය) සහ ඇගේ සැමියා විසින් සැමෝවා සහ BVI හි රහසිගත සමාගම් හරහා මිලියන ගණනක් සඟවා තබාගත් බව හෙළි විය."
                },
                assets: {
                    title: "පැහැදිලි කළ නොහැකි වත්කම්",
                    body: "සුනාමි විපතට පත් වූවන් නිවාස ඉල්ලා සිටින විට, පාලක පවුල ලන්ඩන්, සිඩ්නි සහ ඩුබායි හි සුඛෝපභෝගී දේපල මිලදී ගත්තේය."
                }
            },
            quote: "\"රට ණය බරින් මිරිකෙද්දී ඔවුන් පිටරට වත්කම් ගොඩගසා ගත්හ.\"",
            quoteAuthor: "— ICIJ විමර්ශන සාරාංශය",
            source: "විමර්ශන මාධ්‍යවේදීන්ගේ ජාත්‍යන්තර එකමුතුව (ICIJ) - Pandora Papers"
        }
    },

    // =========================================================================
    // TAMIL
    // =========================================================================
    ta: {
        hero: {
            quote: "\"பேரிடரை எவ்வாறு கையாள்வது என்பதை ராஜபக்ஷக்களிடம் பாருங்கள்\"",
            author: "- நாமல் ராஜபக்ஷ (2025)",
            cta: "சரி, நாம் பார்ப்போம்."
        },
        sectionOne: {
            title: "உதவிக்கு உறுதியளித்தது யார்?",
            subtitle: "இலங்கையை மீண்டும் கட்டியெழுப்ப நன்கொடையாளர்கள் $2.2 பில்லியனுக்கும் அதிகமான தொகையை உறுதியளித்தனர்.",
            chart: {
                eu: "ஐரோப்பிய ஒன்றியம்",
                ngo: "தனியார் / NGO",
                japan: "ஜப்பான்",
                adb: "ஆசிய அபிவிருத்தி வங்கி",
                wb: "உலக வங்கி",
                usa: "அமெரிக்கா",
                ger: "ஜெர்மனி"
            },
            source: "Summary of World Bank assistance to Sri Lanka"
        },
        sectionTwo: {
            title: "காணாமல் போன பணம்",
            subtitle: "பெறப்பட்ட $2.2 பில்லியனில், கிட்டத்தட்ட பாதி மறைந்துவிட்டது.",
            statLabelOne: "கணக்கில் வராதவை",
            statLabelTwo: "",
            totalLabel: "பெறப்பட்ட மொத்த உதவி",
            source: "டிரான்ஸ்பரன்சி இன்டர்நேஷனல் ஸ்ரீலங்கா (2007)"
        },
        sectionThree: {
            title: "வாக்குறுதி மற்றும் யதார்த்தம்",
            subtitle: "அவர்களிடம் பணம் இருந்தது ($2.2 பில்லியன்). அப்படியானால் மக்கள் ஏன் இன்னும் கூடாரங்களில் இருந்தார்கள்?",
            chart: {
                housing: "வீட்டுத்திட்டம் & நகரங்கள்",
                roads: "சாலைகள் & போக்குவரத்து",
                water: "நீர் & சுகாதாரம்",
                fish: "வாழ்வாதாரம் (மீன்பிடி)",
                other: "பிற உள்கட்டமைப்பு"
            },
            goalLabel: "வீட்டு இலக்கு",
            goalCount: "98,525 வீடுகள்",
            actualLabel: "நிறைவு (ஆண்டு 1)",
            actualNote: "2005 இறுதியில் ~13,000 வீடுகள் மட்டுமே கட்டப்பட்டன",
            source: "UNOCA Report (2005)"
        },
        sectionFour: {
            title: "\"ஹெல்ப்பிங் அம்பாந்தோட்டை\" ஊழல்",
            subtitle: "பேரிடர் நிவாரணமா... அல்லது தனிப்பட்ட நிவாரணமா?",
            desc: "2005 ஆம் ஆண்டில், பொதுமக்களின் ரூ. 82.9 மில்லியன் நிதியானது திறைசேரியிலிருந்து பிரதமரின் கட்டுப்பாட்டில் உள்ள ஒரு தனியார் வங்கிக் கணக்கிற்கு மாற்றப்பட்டமை விசாரணையில் தெரியவந்தது.",
            chart: {
                treasury: "தேசிய திறைசேரி (சட்டபூர்வமானது)",
                private: "ஹெல்ப்பிங் அம்பாந்தோட்டை (தனியார்)"
            },
            quote: "\"இந்த நிதியை தனியார் கணக்கிற்கு மாற்றியது கிரிமினல் முறைகேடாகும்.\"",
            quoteAuthor: "— முதல் பொலிஸ் அறிக்கை (CID)",
            source: "BBC: 'Helping Hambantota' probe halted"
        },
        sectionFive: {
            title: "\"செயல்திறன்\" என்ற கட்டுக்கதை",
            subtitle: "நாமல் கூறுகிறார்: \"எங்களைப் பாருங்கள்.\" உண்மை: 9 மாதங்களுக்குப் பிறகும், பணம் வங்கிகளில் உறங்கிக்கொண்டிருந்தது.",
            chart: {
                spent: "பாதிக்கப்பட்டவர்களுக்கு செலவிடப்பட்டது",
                idle: "வங்கிகளில் முடங்கியது"
            },
            alertTitle: "இயலாமையின் விலை:",
            alertDesc: "நிதிகள் முடங்கியிருந்த நிலையில், அதிகாரத்துவ தாமதங்களால் கொழும்பு துறைமுகத்தில் 686 உணவு மற்றும் மருத்துவ கொள்கலன்கள் கைவிடப்பட்டதை கணக்காய்வாளர் நாயகம் கண்டறிந்தார்.",
            source: "கணக்காய்வாளர் நாயகம் S.C. மாயாதுன்னே (2005)"
        },
        sectionSix: {
            title: "ராஜபக்ஷ மாடல்: மதிப்பீடு",
            subtitle: "அவர்களை முன்மாதிரியாகக் கொள்ளுமாறு நாமல் கூறுகிறார். நாங்கள் அதை மதிப்பிட்டோம்.",
            headers: {
                metric: "அளவீடு",
                finding: "கணக்காய்வு முடிவு",
                grade: "தரநிலை"
            },
            rows: {
                transparency: {
                    name: "வெளிப்படைத்தன்மை",
                    desc: "45% உதவி (LKR 53.6B) கணக்கில் இல்லை",
                    grade: "F"
                },
                efficiency: {
                    name: "வேகம் / செயல்திறன்",
                    desc: "86.5% நிதி முடக்கம்; 686 கொள்கலன்கள் கைவிடப்பட்டன",
                    grade: "F"
                },
                execution: {
                    name: "திட்ட அமலாக்கம்",
                    desc: "முதலாண்டில் வீட்டுவசதி இலக்கில் 13% மட்டுமே எட்டப்பட்டது",
                    grade: "F"
                },
                politics: {
                    name: "அரசியல் விளைவுகள்",
                    desc: "பூஜ்ஜியம். திருட்டு நடந்தும், 2 மாதங்களுக்குப் பிறகு மஹிந்த ஜனாதிபதியானார்.",
                    grade: "A+"
                }
            },
            verdictTitle: "மொத்தத் தீர்ப்பு",
            verdictMain: "நாடு தோற்றது.",
            verdictSub: "ஆனால் குடும்பம் தப்பித்தது.",
            source: "கணக்காய்வாளர் நாயகம் மற்றும் TISL கண்டுபிடிப்புகள்"
        },
        footer: {
            lead: "ஒரு பேரிடர் மாதிரிக்காக ராஜபக்ஷக்களை பார்க்குமாறு நாமல் கேட்டார். நாங்கள் பார்த்தோம். திருட்டைப் பார்த்தோம். புறக்கணிப்பைப் பார்த்தோம்.",
            summary: "சுருக்கமாகச் சொன்னால்:",
            punchline: "நாசமாய் போங்கள்.", // "Go to ruin / destruction" (Curse)
            legal: "ஆதாரங்கள்: கணக்காய்வாளர் நாயகம் மற்றும் உயர் நீதிமன்ற அறிக்கைகள். இது பொது நலன் சார்ந்த வெளிப்படுத்தல்."
        },
        sectionOffshore: {
            title: "வெளிநாட்டுத் தொடர்புகள்",
            subtitle: "நாடு உதவிக்காக கெஞ்சியபோது, குடும்பம் சுரங்கப்பாதையை அமைத்தது.",
            desc: "சுனாமி உதவி எந்த வங்கிக் கணக்கிற்குச் சென்றது என்பது நமக்குத் தெரியாமல் போகலாம். ஆனால் குடும்பம் தங்கள் செல்வத்தை எங்கே வைத்திருந்தது என்பது நமக்குத் தெரியும்.",
            cards: {
                pandora: {
                    title: "பண்டோரா ஆவணங்கள் (2021)",
                    body: "நிரூபமா ராஜபக்ஷ (உறவினர்) மற்றும் அவரது கணவர் ஆகியோர் சமோவா மற்றும் BVI இல் இரகசிய நிறுவனங்கள் மூலம் மில்லியன் கணக்கான பணத்தை பதுக்கி வைத்திருந்ததை கசிந்த ஆவணங்கள் அம்பலப்படுத்தின."
                },
                assets: {
                    title: "விளக்க முடியாத செல்வம்",
                    body: "சுனாமியால் பாதிக்கப்பட்டவர்கள் வீடுகளுக்காக காத்திருந்தபோது, ஆளும் குடும்பம் லண்டன், சிட்னி மற்றும் டுபாயில் சொத்துக்களை வாங்கியது."
                }
            },
            quote: "\"நாடு கடனில் மூழ்கும் போது அவர்கள் வெளிநாடுகளில் செல்வத்தை குவித்துள்ளனர்.\"",
            quoteAuthor: "— ICIJ விசாரணை சுருக்கம்",
            source: "சர்வதேச புலனாய்வு பத்திரிகையாளர்கள் கூட்டமைப்பு (ICIJ)"
        }
    }
};