export interface Card {
    _id: string;
    language: string;
    original: string;
    translation: string;
    phonetic?: string;
    isNative: boolean; // determines if the original string is in the user's native language, and decides which side of the card phonetics will be placed
    isCharacter: boolean;
    context?: string;
    superMemo: {
        repititions: number;
        EF: number;
        interval: number;
    }
}