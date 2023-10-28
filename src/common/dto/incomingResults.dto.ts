export class IncomingResultsDto {
    shooters: IncomingShooter[];
}

export class IncomingShooter {
    firstName: string;
    lastName: string;
    fatherName?: string;
    callName?: string;  // позывной
    yearBorn?: number;
    exercises: IncomingExercise[];
}

export class IncomingExercise {
    timestamp: number;
    flights: IncomingFlight[];
}

export class IncomingFlight {
    type?: string;
    speed: number;
    shots: IncomingShot[];
}

export class IncomingShot {
    distance: number;
    height: number;
    accuracy: number;
}


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
