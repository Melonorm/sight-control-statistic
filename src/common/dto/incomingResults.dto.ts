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
                shoots: [{
                    distance: number,
                    height: number,
                    accuracy: number
                }]
            }]
        }]
    }]
}