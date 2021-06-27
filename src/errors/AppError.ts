
export interface IAppError {
    msg: string;
    statusCode: number;
}

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    public readonly params?: string[];
    public readonly details?: string;

    constructor(errorMsg: IAppError, params?: string[], details?: string) {
        this.message = errorMsg.msg;
        this.statusCode = errorMsg.statusCode;
        this.params = params;
        this.details = details;
    }

}