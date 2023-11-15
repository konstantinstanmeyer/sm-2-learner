import { Card } from "@/types/models"

function precise(x: Number){
    // console.log(x)
    return parseFloat(x.toFixed(3));
}

interface SM2Inputs {
    card: Card;
    userGrade: number;
}

const sm2 = ({card, userGrade }: SM2Inputs) => {
    let { EF, repititions, interval } = card.superMemo;

    if (userGrade >= 3){
        switch (repititions){
            case 0:
                interval = 0.07; // fraction for 10min in a day
                break;
            case 1:
                interval = 0.1; // slightly more time between testing if already correct once before
                break;
            default:
                interval = precise(interval * EF); // implemented for exponential growth if correct >= 2 times in a row
        }

        repititions++;
    } else {
        repititions = 0;
        interval = 0.003; // fraction for 5min in a day
    }

    EF = EF + (0.1 - (5 - userGrade) * (0.08 + (5 - userGrade) * 0.02));

    if(EF < 1.3){
        EF = 1.3;
    }

    card.superMemo = {
        repititions: repititions,
        interval: interval,
        EF: EF
    }

    return card;
}

export default sm2