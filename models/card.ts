import { Schema } from "mongoose";

const cardSchema = new Schema(
    {
        language: {
            type: String,
            required: true
        },
        original: {
            type: String,
            required: true,
        },
        translation: {
            type: String,
            requried: true,
        },
        phonetic: {
            type: String,
            required: false,
        },
        isNative: {
            type: Boolean,
            required: true
        }, // determines if the original string is in the user's native language, and decides which side of the card phonetics will be placed
        isCharacter: {
            type: String,
            required: true
        },
        context: {
            type: String,
            required: false,
        },
        superMemo: {
            repitition: {
                type: Number,
                required: true,
            },
            EF: {
                type: Number,
                required: true
            },
            interval: {
                type: Number,
                required: true,
            }
        },
        image: {
            required: false,
            type: String
        }
    },
    { timestamps: true }
)

export default cardSchema;