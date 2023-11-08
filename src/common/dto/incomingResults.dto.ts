export class IncomingResultsDto {
    shooters: IncomingShooter[];
}

export class IncomingShooter {
    firstName: string;
    lastName: string;
    fatherName?: string;
    callName?: string;  // позывной
    yearBorn: number;

    groupName?: string;

    exercises: IncomingExercise[];
}

export class IncomingExercise {
    timestamp: number;

    difficultyLevel: number;
    hitsCount: number;
    targetsCount: number;
    shellsUsed: number;
    infoLevel: string;   // на стороне Android - ENUM
    points: number;

    flights: IncomingFlight[];
}

export class IncomingFlight {
    speed: number;

    height: number;
    no: number;
    startX: number;
    startY: number;
    finishX: number;
    finishY: number;
    durationSec: number;
    lengthPlan: number;
    heading: number;

    shots: IncomingShot[];
}

export class IncomingShot {
    distance: number;
    height: number;
    accuracy: number;

    velocity: number;
    elevation: number;
    azimuthSpeed: number;
    elevationSpeed: number;
    calcHorizLead: number;
    calcVertLead: number;
    fireHorizLead: number;
    fireVertLead: number;
    shotTime: string; // "2012-04-21T18:25:43.415Z"  ISO 8601
}


/*
export class IncomingResultsDto {
    shooters: [{
        firstName: string;
        lastName: string;
        fatherName?: string;
        callName?: string;       // позывной
        yearBorn?: number;
        groupName?: string;
        exercises: [{
            timestamp: number;
            difficultyLevel: number;
            hitsCount: number;
            targetsCount: number;
            shellsUsed: number;
            infoLevel: string;       // на стороне Android - ENUM
            points: number;
            flights: [{
                speed: number;

                height: number;
                no: number;
                startX: number;
                startY: number;
                finishX: number;
                finishY: number;
                durationSec: number;
                lengthPlan: number;
                heading: number;
                shots: [{
                    distance: number;
                    height: number;
                    accuracy: number;
                    velocity: number;
                    elevation: number;
                    azimuthSpeed: number;
                    elevationSpeed: number;
                    calcHorizLead: number;
                    calcVertLead: number;
                    fireHorizLead: number;
                    fireVertLead: number;
                    shotTime: string;       // "2012-04-21T18:25:43.415Z"  ISO 8601
                }]
            }]
        }]
    }]
}*/


/*
export class IncomingResultsDto {
    shooters: [{
        firstName: string;
        lastName: string;
        fatherName?: string;
        callName?: string;  // позывной
        yearBorn?: number;
        exercises: [{
            timestamp: number,
            flights: [{
                type?: string,
                speed: number
                shots: [{
                    distance: number,
                    height: number,
                    accuracy: number
                }]
            }]
        }]
    }]
}*/

