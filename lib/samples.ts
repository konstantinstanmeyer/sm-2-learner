export interface Sample {
    language: string;
    original: string;
    translation: string;
    phonetic?: string;
    isNative: boolean; // determines if the original string is in the user's native language, and decides which side of the card phonetics will be placed
    isCharacter: boolean;
    context?: string;
}

const sample1: Sample = {
    language: "Spanish",
    original: "La ensalada lleva berro y espinaca",
    translation: "The salad has watercress and spinach",
    isNative: false,
    isCharacter: false,
}

const sample2: Sample = {
    language: "Japanese",
    original: "か",
    translation: "ka",
    isNative: false, // false means the original will have the phonetics if they are present in the instance
    isCharacter: true,
}

const sample3: Sample = {
    language: "Japanese",
    original: "おなじ",
    translation: "same",
    phonetic: "o-na-ji",
    isNative: false,
    isCharacter: false,
}

const sample4: Sample = {
    language: "Japanese",
    original: "same",
    translation: "おなじ",
    phonetic: "o-na-ji",
    isNative: true,
    isCharacter: false,
}

const sample5: Sample = {
    language: "Japanese",
    original: "hello",
    translation: "こんにちは",
    phonetic: "kon-ni-chi-wa",
    isNative: true,
    isCharacter: false,
    context: "mid-day"
}

const samples = [
    sample1, sample2, sample3, sample4, sample5
]

export default samples