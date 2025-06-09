// paohData.js

const paohBasicData = {
    paliVowels: [
        { paoh: 'အ', roman: 'a', ipa: '/a/' },
        { paoh: 'အာ', roman: 'ā', ipa: '/aː/' },
        { paoh: 'ဣ', roman: 'i', ipa: '/i/' },
        { paoh: 'ဤ', roman: 'ī', ipa: '/iː/' },
        { paoh: 'ဥ', roman: 'u', ipa: '/u/' },
        { paoh: 'ဦ', roman: 'ū', ipa: '/uː/' },
        { paoh: 'ဧ', roman: 'e', ipa: '/e/' },
        { paoh: 'ဩ', roman: 'o', ipa: '/o/' },
    ],
    paohVowels: [
        { paoh: 'အ', roman: 'a1', ipa: '/a/' },     // Short 'a'
        { paoh: 'အာ', roman: 'aa3', ipa: '/aː/' },   // Long 'a'
        { paoh: 'အိ', roman: 'i1', ipa: '/i/' },     // Short 'i'
        { paoh: 'အီ', roman: 'ee3', ipa: '/iː/' },   // Long 'i'
        { paoh: 'အု', roman: 'u1', ipa: '/u/' },     // Short 'u'
        { paoh: 'အူ', roman: 'oo3', ipa: '/uː/' },   // Long 'u'
        { paoh: 'အေ့', roman: 'e1', ipa: '/e/' },     // Mid-front unrounded vowel
        { paoh: 'အေ', roman: 'ay3', ipa: '/ei/' },   // Diphthong 'ei'
        { paoh: 'အဲ့', roman: 'ae1', ipa: '/ɛ/' },    // Open-mid front unrounded vowel
        { paoh: 'အဲ', roman: 'ae3', ipa: '/ɛː/' },  // Longer version of 'ae'
        { paoh: 'အုဲင့်', roman: 'aik1', ipa: '/eɪŋ/' }, // Nasalized diphthong, similar to 'aing' with an 'e' start
        { paoh: 'အုဲင်', roman: 'aing3', ipa: '/aʊŋ/' }, // Nasalized diphthong, similar to 'ow' in "cow" + ng
        { paoh: 'အော့', roman: 'aw1', ipa: '/ɔ/' },   // Open-mid back rounded vowel
        { paoh: 'အော်', roman: 'aw3', ipa: '/o/' },    // Close-mid back rounded vowel
        { paoh: 'အို့', roman: 'o1', ipa: '/oː/' },   // Longer 'o' sound
        { paoh: 'အို', roman: 'o3', ipa: '/ou/' },   // Diphthong 'ou'
    ],
    paohConsonants: [
        { paoh: 'က', roman: 'k', ipa: '/k/' },
        { paoh: 'ခ', roman: 'kh', ipa: '/kʰ/' },
        { paoh: 'ဂ', roman: 'g', ipa: '/ɡ/' },
        { paoh: 'ဃ', roman: 'gh', ipa: '/ɡʱ/' }, // Or sometimes /k/ in Pa'O depending on dialect
        { paoh: 'င', roman: 'ng', ipa: '/ŋ/' },
        { paoh: 'စ', roman: 'j', ipa: '/t͡ɕ/' }, // Pa'O "Ja" sound (စရီး)
        { paoh: 'ဆ', roman: 'sh', ipa: '/ɕ/' }, // Pa'O "ch" or "sh" sound (ဆရီး)
        { paoh: 'ဇ', roman: 'jh', ipa: '/t͡ɕʰ/' }, // Pa'O "j" sound (ဇဆဲုင် ꩻ)
        { paoh: 'ဈ', roman: 'zh', ipa: '/ɕʰ/' }, // Pa'O "zh" sound (ဈဆဲုင် ꩻ)
        { paoh: 'ည', roman: 'ny', ipa: '/ɲ/' },
        { paoh: 'ဋ', roman: 't', ipa: '/t/' },
        { paoh: 'ဌ', roman: 'ht', ipa: '/tʰ/' }, // Pa'O 'ht' sound (ဌရီး)
        { paoh: 'ဍ', roman: 'd', ipa: '/d/' },
        { paoh: 'ဎ', roman: 'ht', ipa: '/tʰ/' }, // Pa'O "ht" sound (ဎထာ ꩻ ဝ)
        { paoh: 'ဏ', roman: 'n', ipa: '/n/' },
        { paoh: 'တ', roman: 't', ipa: '/t/' },
        { paoh: 'ထ', roman: 'ht', ipa: '/tʰ/' }, // Pa'O 'ht' sound (ထဆဲုင် ꩻ)
        { paoh: 'ဒ', roman: 'd', ipa: '/d/' },
        { paoh: 'ဓ', roman: 'd', ipa: '/d/' }, // Pa'O 'd' sound (ဓဆဲုင် ꩻ သွတ် ꩻ)
        { paoh: 'န', roman: 'n', ipa: '/n/' },
        { paoh: 'ပ', roman: 'p', ipa: '/p/' },
        { paoh: 'ဖ', roman: 'ph', ipa: '/pʰ/' }, // Pa'O "ph" sound (ဖရီး)
        { paoh: 'ဗ', roman: 'b', ipa: '/b/' },
        { paoh: 'ဘ', roman: 'ph', ipa: '/pʰ/' }, // Pa'O "ph" sound (ဘဆဲုင် ꩻ)
        { paoh: 'မ', roman: 'm', ipa: '/m/' },
        { paoh: 'ယ', roman: 'y', ipa: '/j/' },
        { paoh: 'ရ', roman: 'r', ipa: '/r/' }, // Trilled 'r' or sometimes /j/ or /l/
        { paoh: 'လ', roman: 'l', ipa: '/l/' },
        { paoh: 'ဝ', roman: 'w', ipa: '/w/' },
        { paoh: 'သ', roman: 's', ipa: '/s/' },
        { paoh: 'ဟ', roman: 'h', ipa: '/h/' },
        { paoh: 'ဠ', roman: 'l', ipa: '/l/' }, // Often same pronunciation as 'လ'
        { paoh: 'အ', roman: 'a.', ipa: '/ʔ/' } // Glottal Stop (often considered a consonant in Pa'O at the beginning of words)
    ],
    paohNumbers: [
        { paoh: '&#x116D0;', roman: '0', unicode: '116D0' }, // ပအိုဝ်းဂဏန်း ၀
        { paoh: '&#x116D1;', roman: '1', unicode: '116D1' }, // ပအိုဝ်းဂဏန်း ၁
        { paoh: '&#x116D2;', roman: '2', unicode: '116D2' }, // ပအိုဝ်းဂဏန်း ၂
        { paoh: '&#x116D3;', roman: '3', unicode: '116D3' }, // ပအိုဝ်းဂဏန်း ၃
        { paoh: '&#x116D4;', roman: '4', unicode: '116D4' },
        { paoh: '&#x116D5;', roman: '5', unicode: '116D5' },
        { paoh: '&#x116D6;', roman: '6', unicode: '116D6' },
        { paoh: '&#x116D7;', roman: '7', unicode: '116D7' },
        { paoh: '&#x116D8;', roman: '8', unicode: '116D8' },
        { paoh: '&#x116D9;', roman: '9', unicode: '116D9' },
    ],
    paohDiacritics: [
        { paoh: 'ာ', roman: 'à', description: 'Long A sound' },
        { paoh: 'ါ', roman: 'à' },
        { paoh: 'ိ', roman: 'i', description: 'Short/Long I sound' },
        { paoh: 'ီ', roman: 'ī' },
        { paoh: 'ု', roman: 'u', description: 'Short/Long U sound' },
        { paoh: 'ူ', roman: 'ū' },
        { paoh: 'ေ', roman: 'e', description: 'Various E sounds' },
        { paoh: 'ဲ', roman: 'ae' },
        { paoh: 'ံ', roman: 'ṁ' / '.', description: 'Nasalization / Tone marker' },
        { paoh: '့', roman: '.' },
        { paoh: 'း', roman: 'h (creaky/glottalized tone)', description: 'Tone marker' },
        { paoh: 'ꩻ', roman: '(Tone markers)', description: 'Specific Paoh tone markers' },
        { paoh: 'ႏ', roman: '(Tone markers)' },
        { paoh: 'ျ', roman: 'y', description: 'Medial Y and R' },
        { paoh: 'ြ', roman: 'r,l' },
        { paoh: 'ွ', roman: 'wa', description: 'Medial W and final consonant marker' },
        { paoh: '်', roman: 'sot' },
        { paoh: 'က်', roman: '-ak', description: 'Final K and NG sounds' },
        { paoh: 'င်', roman: '-ng' },
    ],
    toneSets: {
        set1: [
            { paoh: 'အ', roman: 'a1' }, { paoh: 'အꩻ', roman: 'a2' }, { paoh: 'အာ', roman: 'aa3' }, { paoh: 'အာꩻ', roman: 'aa4' }, { paoh: 'အား', roman: 'aa5' }, { paoh: 'အာႏ', roman: 'aa6' },
                        { paoh: 'အိ', roman: 'i1' }, { paoh: 'အိꩻ', roman: 'i2' }, { paoh: 'အီ', roman: 'ee3' }, { paoh: 'အီꩻ', roman: 'ee4' }, { paoh: 'အီး', roman: 'ee5' }, { paoh: 'အီႏ', roman: 'ee6' },
            { paoh: 'အု', roman: 'u1' }, { paoh: 'အုꩻ', roman: 'u2' }, { paoh: 'အူ', roman: 'oo3' }, { paoh: 'အူꩻ', roman: 'oo4' }, { paoh: 'အူး', roman: 'oo5' }, { paoh: 'အူႏ', roman: 'oo6' },
            { paoh: 'အေ့', roman: 'e1' }, { paoh: 'အေ့ꩻ', roman: 'e2' }, { paoh: 'အေ', roman: 'ay3' }, { paoh: 'အေꩻ', roman: 'ay4' }, { paoh: 'အေး', roman: 'ay5' }, { paoh: 'အေႏ', roman: 'ay6' },
            { paoh: 'အဲ့', roman: 'ae1' }, { paoh: 'အဲ့ꩻ', roman: 'ae2' }, { paoh: 'အဲ', roman: 'ae3' }, { paoh: 'အဲꩻ', roman: 'ae4' }, { paoh: 'အဲး', roman: 'ae5' }, { paoh: 'အဲႏ', roman: 'ae6' },
            { paoh: 'အုဲင့်', roman: 'aik1' },//oik 
            { paoh: 'အုဲင့်ꩻ', roman: 'aik2' }, { paoh: 'အုဲင်', roman: 'aing3' }, { paoh: 'အုဲင်ꩻ', roman: 'aing4' }, { paoh: 'အုဲင်း', roman: 'aing5' }, { paoh: 'အုဲင်ႏ', roman: 'aing6' },//oing
            { paoh: 'အော့', roman: 'aw1' }, { paoh: 'အော့ꩻ', roman: 'aw2' }, { paoh: 'အော်', roman: 'aaw3' }, { paoh: 'အော်ꩻ', roman: 'aaw4' }, { paoh: 'အေား', roman: 'aaw5' }, { paoh: 'အောႏ', roman: 'aaw6' },
            { paoh: 'အို့', roman: 'o1' }, { paoh: 'အို့ꩻ', roman: 'o2' }, { paoh: 'အို', roman: 'o3' }, { paoh: 'အိုꩻ', roman: 'o4' }, { paoh: 'အိုး', roman: 'o5' }, { paoh: 'အိုႏ', roman: 'o6' },
            { paoh: 'အံ့', roman: 'ap1' }, { paoh: 'အံ့ꩻ', roman: 'ap2' }, { paoh: 'အံ', roman: 'am3' }, { paoh: 'အံꩻ', roman: 'am4' }, { paoh: 'အံး', roman: 'am5' }, { paoh: 'အံႏ', roman: 'am6' },
            { paoh: 'အုံ့', roman: 'um1' }, { paoh: 'အုံ့ꩻ', roman: 'um2' }, { paoh: 'အုံ', roman: 'um3' }, { paoh: 'အုံꩻ', roman: 'um4' }, { paoh: 'အုံး', roman: 'um5' }, { paoh: 'အုံႏ', roman: 'um6' },
        ],
        set2: [
            { paoh: 'အွ', roman: 'wa1' }, { paoh: 'အွꩻ', roman: 'wa2' }, { paoh: 'အွာ', roman: 'waa3' }, { paoh: 'အွာꩻ', roman: 'waa4' }, { paoh: 'အွား', roman: 'waa5' }, { paoh: 'အွာႏ', roman: 'waa6' },
            { paoh: 'အွိ', roman: 'wi1' }, { paoh: 'အွိꩻ', roman: 'wi2' }, { paoh: 'အွီ', roman: 'wee3' }, { paoh: 'အွီꩻ', roman: 'wee4' }, { paoh: 'အွီး', roman: 'wee5' }, { paoh: 'အွီႏ', roman: 'wee6' },
            { paoh: 'အွု', roman: 'wu1' }, { paoh: 'အွုꩻ', roman: 'wu2' }, { paoh: 'အွူ', roman: 'woo3' }, { paoh: 'အွူꩻ', roman: 'woo4' }, { paoh: 'အွူး', roman: 'woo5' }, { paoh: 'အွူႏ', roman: 'woo6' },
            { paoh: 'အွေ့', roman: 'way1' }, { paoh: 'အွေ့ꩻ', roman: 'way2' }, { paoh: 'အွေ', roman: 'way3' }, { paoh: 'အွေꩻ', roman: 'way4' }, { paoh: 'အွေး', roman: 'way5' }, { paoh: 'အွေႏ', roman: 'way6' },
            { paoh: 'အွဲ့', roman: 'wea1' }, { paoh: 'အွဲ့ꩻ', roman: 'wea2' }, { paoh: 'အွဲ', roman: 'weā1' }, { paoh: 'အွဲꩻ', roman: 'weā2' }, { paoh: 'အွဲး', roman: 'weā4' }, { paoh: 'အွဲႏ', roman: 'weā3' },
            { paoh: 'အွော့', roman: 'waw1' }, { paoh: 'အွော့ꩻ', roman: 'waw2' }, { paoh: 'အွော်', roman: 'waaw1' }, { paoh: 'အွော်ꩻ', roman: 'waaw2' }, { paoh: 'အွေား', roman: 'waaw4' }, { paoh: 'အွောႏ', roman: 'waaw3' },
            { paoh: 'အွို့', roman: 'wo1' }, { paoh: 'အွို့ꩻ', roman: 'wo2' }, { paoh: 'အွို', roman: 'wou1' }, { paoh: 'အွိုꩻ', roman: 'wou2' }, { paoh: 'အွိုး', roman: 'wou4' }, { paoh: 'အွိုႏ', roman: 'wou3' },
            { paoh: 'အွံ့', roman: 'wom1' }, { paoh: 'အွံ့ꩻ', roman: 'wom2' }, { paoh: 'အွံ', roman: 'wom3' }, { paoh: 'အွံꩻ', roman: 'wom4' }, { paoh: 'အွံး', roman: 'wom5' }, { paoh: 'အွံႏ', roman: 'wom6' },
            { paoh: 'အွုံ့', roman: 'wum1' }, { paoh: 'အွုံ့ꩻ', roman: 'wum2' }, { paoh: 'အွုံ', roman: 'wun1' }, { paoh: 'အွုံꩻ', roman: 'wun2' }, { paoh: 'အွုံး', roman: 'wun4' }, { paoh: 'အွုံႏ', roman: 'wun3' },
        ],
        set3: [
            { paoh: 'အက်', roman: 'ak1' }, { paoh: 'အက်ꩻ', roman: 'ak2' }, { paoh: 'အင်', roman: 'ang3' }, { paoh: 'အင်ꩻ', roman: 'ang4' }, { paoh: 'အင်း', roman: 'ang5' }, { paoh: 'အင်ႏ', roman: 'ang6' },
            { paoh: 'အဲက်', roman: 'aek1' }, { paoh: 'အဲက်ꩻ', roman: 'aek2' }, { paoh: 'အဲင်', roman: 'aeng1' }, { paoh: 'အဲင်ꩻ', roman: 'aeng2' }, { paoh: 'အဲင်း', roman: 'aeng4' }, { paoh: 'အဲင်ႏ', roman: 'aeng3' },
            { paoh: 'အစ်', roman: 'it1' }, { paoh: 'အစ်ꩻ', roman: 'it2' }, { paoh: 'အဉ်', roman: 'iny1' }, { paoh: 'အဉ်ꩻ', roman: 'iny2' }, { paoh: 'အဉ်း', roman: 'iny4' }, { paoh: 'အဉ်ႏ', roman: 'iny3' },
            { paoh: 'အဲစ်', roman: 'et1' }, { paoh: 'အဲစ်ꩻ', roman: 'et2' }, { paoh: 'အဲဉ်', roman: 'en3' }, { paoh: 'အဲဉ်ꩻ', roman: 'en4' }, { paoh: 'အဲဉ်း', roman: 'en5' }, { paoh: 'အဲဉ်ႏ', roman: 'en6' },
            { paoh: 'အတ်', roman: 'at1' }, { paoh: 'အတ်ꩻ', roman: 'at2' }, { paoh: 'အန်', roman: 'an3' }, { paoh: 'အန်ꩻ', roman: 'an4' }, { paoh: 'အန်း', roman: 'an5' }, { paoh: 'အန်ႏ', roman: 'an6' },
            { paoh: 'အေတ်', roman: 'et1' }, { paoh: 'အေတ်ꩻ', roman: 'et2' }, { paoh: 'အေန်', roman: 'en1' }, { paoh: 'အေန်ꩻ', roman: 'en2' }, { paoh: 'အေန်း', roman: 'en4' }, { paoh: 'အေန်ႏ', roman: 'en3' },
            { paoh: 'အပ်', roman: 'ap1' }, { paoh: 'အပ်ꩻ', roman: 'ap2' }, { paoh: 'အမ်', roman: 'am3' }, { paoh: 'အမ်ꩻ', roman: 'am4' }, { paoh: 'အမ်း', roman: 'am5' }, { paoh: 'အမ်ႏ', roman: 'am6' },
            { paoh: 'အဲပ်', roman: 'aep1' }, { paoh: 'အဲပ်ꩻ', roman: 'aep2' }, { paoh: 'အဲမ်', roman: 'aem3' }, { paoh: 'အဲမ်ꩻ', roman: 'aem4' }, { paoh: 'အဲမ်း', roman: 'aem5' }, { paoh: 'အဲမ်ႏ', roman: 'aem6' },
            { paoh: 'အယ့်', roman: 'ae1' }, { paoh: 'အယ့်ꩻ', roman: 'ae2' }, { paoh: 'အယ်', roman: 'el3' }, { paoh: 'အယ်ꩻ', roman: 'el4' }, { paoh: 'အယ်း', roman: 'el5' }, { paoh: 'အယ်ႏ', roman: 'el6' },
            { paoh: 'အောဝ့်', roman: 'aow1' }, { paoh: 'အောဝ့်ꩻ', roman: 'aow2' }, { paoh: 'အောဝ်', roman: 'aow1' }, { paoh: 'အောဝ်ꩻ', roman: 'aow2' }, { paoh: 'အောဝ်း', roman: 'aow4' }, { paoh: 'အောဝ်ႏ', roman: 'aow3' },
        ],
        set4: [
            { paoh: 'အွက်', roman: 'wak1' }, { paoh: 'အွက်ꩻ', roman: 'wak2' }, { paoh: 'အွင်', roman: 'wang3' }, { paoh: 'အွင်ꩻ', roman: 'wang4' }, { paoh: 'အွင်း', roman: 'wang5' }, { paoh: 'အွင်ႏ', roman: 'wang6' },
            { paoh: 'အွဲက်', roman: 'waek1' }, { paoh: 'အွဲက်ꩻ', roman: 'waek2' }, { paoh: 'အွဲင်', roman: 'waeng1' }, { paoh: 'အွဲင်ꩻ', roman: 'waeng2' }, { paoh: 'အွဲင်း', roman: 'waeng4' }, { paoh: 'အွဲင်ႏ', roman: 'waeng3' },
            { paoh: 'အွစ်', roman: 'wit1' }, { paoh: 'အွစ်ꩻ', roman: 'wit2' }, { paoh: 'အွဉ်', roman: 'winy1' }, { paoh: 'အွဉ်ꩻ', roman: 'winy2' }, { paoh: 'အွဉ်း', roman: 'winy4' }, { paoh: 'အွဉ်ႏ', roman: 'winy3' },
            { paoh: 'အွတ်', roman: 'wat1' }, { paoh: 'အွတ်ꩻ', roman: 'wat2' }, { paoh: 'အွန်', roman: 'wan1' }, { paoh: 'အွန်ꩻ', roman: 'wan2' }, { paoh: 'အွန်း', roman: 'wan4' }, { paoh: 'အွန်ႏ', roman: 'wan3' },
            { paoh: 'အွပ်', roman: 'wap1' }, { paoh: 'အွပ်ꩻ', roman: 'wap2' }, { paoh: 'အွမ်', roman: 'wam1' }, { paoh: 'အွမ်ꩻ', roman: 'wam2' }, { paoh: 'အွမ်း', roman: 'wam4' }, { paoh: 'အွမ်ႏ', roman: 'wam3' },
            { paoh: 'အွယ့်', roman: 'way1' }, { paoh: 'အွယ့်ꩻ', roman: 'way2' }, { paoh: 'အွယ်', roman: 'way1' }, { paoh: 'အွယ်ꩻ', roman: 'way2' }, { paoh: 'အွယ်း', roman: 'way4' }, { paoh: 'အွယ်ႏ', roman: 'way3' },
        ],
        set5: [
            { paoh: 'အိတ်', roman: 'eik1' }, { paoh: 'အိတ်ꩻ', roman: 'eik2' }, { paoh: 'အိန်', roman: 'ein1' }, { paoh: 'အိန်ꩻ', roman: 'ein2' }, { paoh: 'အိန်း', roman: 'ein4' }, { paoh: 'အိန်ႏ', roman: 'ein3' },
            { paoh: 'အိပ်', roman: 'eip1' }, { paoh: 'အိပ်ꩻ', roman: 'eip2' }, { paoh: 'အိမ်', roman: 'eim1' }, { paoh: 'အိမ်ꩻ', roman: 'eim2' }, { paoh: 'အိမ်း', roman: 'eim4' }, { paoh: 'အိမ်ႏ', roman: 'eim3' },
            { paoh: 'အုတ်', roman: 'ok1' }, { paoh: 'အုတ်ꩻ', roman: 'ok2' }, { paoh: 'အုန်', roman: 'on3' }, { paoh: 'အုန်ꩻ', roman: 'on4' }, { paoh: 'အုန်း', roman: 'on5' }, { paoh: 'အုန်ႏ', roman: 'on6' },
            { paoh: 'အုပ်', roman: 'op1' }, { paoh: 'အုပ်ꩻ', roman: 'op2' }, { paoh: 'အုမ်', roman: 'om3' }, { paoh: 'အုမ်ꩻ', roman: 'om4' }, { paoh: 'အုမ်း', roman: 'om5' }, { paoh: 'အုမ်ႏ', roman: 'om6' },
            { paoh: 'အေက်', roman: 'eit1' }, { paoh: 'အေက်ꩻ', roman: 'eit2' }, { paoh: 'အေင်', roman: 'ein3' }, { paoh: 'အေင်ꩻ', roman: 'ein4' }, { paoh: 'အေင်း', roman: 'ein5' }, { paoh: 'အေင်ႏ', roman: 'ein6' },
            { paoh: 'အေပ်', roman: 'eip1' }, { paoh: 'အေပ်ꩻ', roman: 'eip2' }, { paoh: 'အေမ်', roman: 'eim1' }, { paoh: 'အေမ်ꩻ', roman: 'eim2' }, { paoh: 'အေမ်း', roman: 'eim4' }, { paoh: 'အေမ်ႏ', roman: 'eim3' },
            { paoh: 'အိုတ်', roman: 'oit1' }, { paoh: 'အိုတ်ꩻ', roman: 'oit2' }, { paoh: 'အိုန်', roman: 'oin1' }, { paoh: 'အိုန်ꩻ', roman: 'oin2' }, { paoh: 'အိုန်း', roman: 'oin4' }, { paoh: 'အိုန်ႏ', roman: 'oin3' },
            { paoh: 'အောက်', roman: 'auk1' }, { paoh: 'အောက်ꩻ', roman: 'auk2' }, { paoh: 'အောင်', roman: 'aung3' }, { paoh: 'အောင်ꩻ', roman: 'aung4' }, { paoh: 'အောင်း', roman: 'aung5' }, { paoh: 'အောင်ႏ', roman: 'aung6' },
        ],
        set6: [
            { paoh: 'အွုက်', roman: 'wuk1' }, { paoh: 'အွုက်ꩻ', roman: 'wuk2' }, { paoh: 'အွုင်', roman: 'wung1' }, { paoh: 'အွုင်ꩻ', roman: 'wung2' }, { paoh: 'အွုင်း', roman: 'wung4' }, { paoh: 'အွုင်ႏ', roman: 'wung3' },
            { paoh: 'အွုတ်', roman: 'wot1' }, { paoh: 'အွုတ်ꩻ', roman: 'wot2' }, { paoh: 'အွုန်', roman: 'won1' }, { paoh: 'အွုန်ꩻ', roman: 'won2' }, { paoh: 'အွုန်း', roman: 'won4' }, { paoh: 'အွုန်ႏ', roman: 'won3' },
            { paoh: 'အွုပ်', roman: 'wop1' }, { paoh: 'အွုပ်ꩻ', roman: 'wop2' }, { paoh: 'အွုမ်', roman: 'wom1' }, { paoh: 'အွုမ်ꩻ', roman: 'wom2' }, { paoh: 'အွုမ်း', roman: 'wom4' }, { paoh: 'အွုမ်ႏ', roman: 'wom3' },
            { paoh: 'အွိုက်', roman: 'wok1' }, { paoh: 'အွိုက်ꩻ', roman: 'wok2' }, { paoh: 'အွိုင်', roman: 'wong3' }, { paoh: 'အွိုင်ꩻ', roman: 'wong4' }, { paoh: 'အွိုင်း', roman: 'wong5' }, { paoh: 'အွိုင်ႏ', roman: 'wong6' },
            { paoh: 'အွိုတ်', roman: 'woit1' }, { paoh: 'အွိုတ်ꩻ', roman: 'woit2' }, { paoh: 'အွိုန်', roman: 'woin1' }, { paoh: 'အွိုန်ꩻ', roman: 'woin2' }, { paoh: 'အွိုန်း', roman: 'woin4' }, { paoh: 'အွိုန်ႏ', roman: 'woin3' },
            { paoh: 'အွိုပ်', roman: 'woip1' }, { paoh: 'အွိုပ်ꩻ', roman: 'woip2' }, { paoh: 'အွိုမ်', roman: 'woim1' }, { paoh: 'အွိုမ်ꩻ', roman: 'woim2' }, { paoh: 'အွိုမ်း', roman: 'woim4' }, { paoh: 'အွိုမ်ႏ', roman: 'woim3' },
            { paoh: 'အွောက်', roman: 'wauk1' }, { paoh: 'အွောက်ꩻ', roman: 'wauk2' }, { paoh: 'အွောင်', roman: 'waung1' }, { paoh: 'အွောင်ꩻ', roman: 'waung2' }, { paoh: 'အွောင်း', roman: 'waung4' }, { paoh: 'အွောင်ႏ', roman: 'waung3' },
        ],
    }
};
