import { Character, Lesson, Vocabulary } from '../core/models';

export const CHARACTERS: Record<string, Character> = {
 'ㅏ':{symbol:'ㅏ',type:'vowel',roman:'a',note:'basic vowel',examples:['아','마','나','다']}, 'ㅑ':{symbol:'ㅑ',type:'vowel',roman:'ya',note:'y + ㅏ',examples:['야','먀','냐']},
 'ㅓ':{symbol:'ㅓ',type:'vowel',roman:'eo',note:'open uh-like vowel',examples:['어','머','너']}, 'ㅕ':{symbol:'ㅕ',type:'vowel',roman:'yeo',note:'y + ㅓ',examples:['여','며','녀']},
 'ㅗ':{symbol:'ㅗ',type:'vowel',roman:'o',note:'o',examples:['오','모','노']}, 'ㅛ':{symbol:'ㅛ',type:'vowel',roman:'yo',note:'y + ㅗ',examples:['요','묘','뇨']},
 'ㅜ':{symbol:'ㅜ',type:'vowel',roman:'u',note:'oo/u',examples:['우','무','누']}, 'ㅠ':{symbol:'ㅠ',type:'vowel',roman:'yu',note:'y + ㅜ',examples:['유','뮤','뉴']},
 'ㅡ':{symbol:'ㅡ',type:'vowel',roman:'eu',note:'Korean eu',examples:['으','므','느']}, 'ㅣ':{symbol:'ㅣ',type:'vowel',roman:'i',note:'ee/i',examples:['이','미','니']},
 'ㄱ':{symbol:'ㄱ',type:'consonant',roman:'g/k',note:'basic consonant',examples:['가','고','구','기']}, 'ㄴ':{symbol:'ㄴ',type:'consonant',roman:'n',note:'basic consonant',examples:['나','너','누','니']},
 'ㄷ':{symbol:'ㄷ',type:'consonant',roman:'d/t',note:'basic consonant',examples:['다','더','도','두']}, 'ㄹ':{symbol:'ㄹ',type:'consonant',roman:'r/l',note:'context-dependent',examples:['라','러','로','루']},
 'ㅁ':{symbol:'ㅁ',type:'consonant',roman:'m',note:'basic consonant',examples:['마','머','모','무']}, 'ㅂ':{symbol:'ㅂ',type:'consonant',roman:'b/p',note:'basic consonant',examples:['바','버','보','부']},
 'ㅅ':{symbol:'ㅅ',type:'consonant',roman:'s',note:'basic consonant',examples:['사','서','소','수']}, 'ㅇ':{symbol:'ㅇ',type:'consonant',roman:'silent/ng',note:'silent initially; ng finally',examples:['아','어','오','우']},
 'ㅈ':{symbol:'ㅈ',type:'consonant',roman:'j',note:'basic consonant',examples:['자','저','조','주']}, 'ㅎ':{symbol:'ㅎ',type:'consonant',roman:'h',note:'basic consonant',examples:['하','허','호','후']},
 'ㅋ':{symbol:'ㅋ',type:'consonant',roman:'k',note:'aspirated ㄱ',examples:['카','커','코','쿠']}, 'ㅌ':{symbol:'ㅌ',type:'consonant',roman:'t',note:'aspirated ㄷ',examples:['타','터','토','투']},
 'ㅍ':{symbol:'ㅍ',type:'consonant',roman:'p',note:'aspirated ㅂ',examples:['파','퍼','포','푸']}, 'ㅊ':{symbol:'ㅊ',type:'consonant',roman:'ch',note:'aspirated ㅈ',examples:['차','처','초','추']}
};

export const VOCAB: Vocabulary[] = [
 {word:'나',roman:'na',meaning:'I / me',chars:['ㄴ','ㅏ'],tags:['people','starter']},{word:'너',roman:'neo',meaning:'you (informal)',chars:['ㄴ','ㅓ'],tags:['people','starter']},{word:'누나',roman:'nuna',meaning:'older sister (male speaker)',chars:['ㄴ','ㅜ','ㄴ','ㅏ'],tags:['people']},
 {word:'나라',roman:'nara',meaning:'country',chars:['ㄴ','ㅏ','ㄹ','ㅏ'],tags:['starter']},{word:'머리',roman:'meori',meaning:'head',chars:['ㅁ','ㅓ','ㄹ','ㅣ'],tags:['body']},{word:'다리',roman:'dari',meaning:'leg / bridge',chars:['ㄷ','ㅏ','ㄹ','ㅣ'],tags:['body']},
 {word:'친구',roman:'chingu',meaning:'friend',chars:['ㅊ','ㅣ','ㄴ','ㄱ','ㅜ'],tags:['people','starter']},{word:'가족',roman:'gajok',meaning:'family',chars:['ㄱ','ㅏ','ㅈ','ㅗ','ㄱ'],tags:['people']},{word:'사람',roman:'saram',meaning:'person',chars:['ㅅ','ㅏ','ㄹ','ㅏ','ㅁ'],tags:['people']},
 {word:'엄마',roman:'eomma',meaning:'mom',chars:['ㅇ','ㅓ','ㅁ','ㅁ','ㅏ'],tags:['people']},{word:'집',roman:'jip',meaning:'house / home',chars:['ㅈ','ㅣ','ㅂ'],tags:['places']},{word:'물',roman:'mul',meaning:'water',chars:['ㅁ','ㅜ','ㄹ'],tags:['food']},{word:'밥',roman:'bap',meaning:'rice / meal',chars:['ㅂ','ㅏ','ㅂ'],tags:['food']},
 {word:'학교',roman:'hakgyo',meaning:'school',chars:['ㅎ','ㅏ','ㄱ','ㄱ','ㅛ'],tags:['places']},{word:'회사',roman:'hoesa',meaning:'company / workplace',chars:['ㅎ','ㅚ','ㅅ','ㅏ'],tags:['places']},
 {word:'가다',roman:'gada',meaning:'to go',chars:['ㄱ','ㅏ','ㄷ','ㅏ'],tags:['verbs']},{word:'오다',roman:'oda',meaning:'to come',chars:['ㅇ','ㅗ','ㄷ','ㅏ'],tags:['verbs']},{word:'먹다',roman:'meokda',meaning:'to eat',chars:['ㅁ','ㅓ','ㄱ','ㄷ','ㅏ'],tags:['verbs']},{word:'마시다',roman:'masida',meaning:'to drink',chars:['ㅁ','ㅏ','ㅅ','ㅣ','ㄷ','ㅏ'],tags:['verbs']},
 {word:'좋다',roman:'jota',meaning:'to be good',chars:['ㅈ','ㅗ','ㅎ','ㄷ','ㅏ'],tags:['adjectives']},{word:'재미있다',roman:'jaemiitda',meaning:'to be fun / interesting',chars:['ㅈ','ㅐ','ㅁ','ㅣ','ㅇ','ㅣ','ㅆ','ㄷ','ㅏ'],tags:['adjectives']}
];

export const LESSONS: Lesson[] = [
 {id:'w1',title:'Week 1 · Core vowels',meta:'ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ',items:['ㅏ','ㅑ','ㅓ','ㅕ','ㅗ','ㅛ','ㅜ','ㅠ','ㅡ','ㅣ'],vocabulary:[]},
 {id:'w2',title:'Week 2 · Consonants I',meta:'ㄱ ㄴ ㄷ ㄹ ㅁ + syllable building',items:['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ'],vocabulary:['나','너','나라','누나','머리','다리']},
 {id:'w3',title:'Week 3 · Consonants II',meta:'ㅂ ㅅ ㅇ ㅈ ㅎ + first words',items:['ㅂ','ㅅ','ㅇ','ㅈ','ㅎ'],vocabulary:['사람','가족','엄마','친구']},
 {id:'w4',title:'Week 4 · Remaining consonants',meta:'ㅋ ㅌ ㅍ ㅊ + review',items:['ㅋ','ㅌ','ㅍ','ㅊ'],vocabulary:['집','물','밥','학교']},
 {id:'w5',title:'Week 5 · 받침 basics',meta:'Final consonants + common patterns',items:['받침'],vocabulary:['집','물','밥']},
 {id:'w6',title:'Week 6 · Introductions',meta:'이에요/예요, 은/는, basic people words',items:['grammar1'],vocabulary:['사람','친구','가족']},
 {id:'w7',title:'Week 7 · Actions',meta:'가다, 오다, 먹다, 마시다 + 을/를',items:['grammar2'],vocabulary:['가다','오다','먹다','마시다']},
 {id:'w8',title:'Week 8 · Places & daily life',meta:'있다/없다, 에, 에서',items:['grammar3'],vocabulary:['집','학교','회사']}
];
