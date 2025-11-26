export class appError extends Error {
    constructor(
        public message: string,
        public statusCode: number = 500,
        public details?: any,
    ) {
        super(message);
        this.name = "appError";
    }
}

export function handleError(error: unknown): void {
    if (error instanceof appError) {
        console.error(`appError: ${error.message}`);
        console.error(`Status Code: ${error.statusCode}`);
        if(error.details) {
            console.error("Details:", error.details);
        }
    }else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.error("uknown error:", error)
    }
}