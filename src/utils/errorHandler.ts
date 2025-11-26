export class AppError extends Error {
    constructor(
        public message: string,
        public statusCode: number = 500,
        public details?: any,
    ) {
        super(message);
        this.name = "AppError";
    }
}

export function handleError(error: unknown): void {
    if (error instanceof AppError) {
        console.error(`AppError: ${error.message}`);
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