
export interface IAppError {
    msg: string;
    statusCode: number;
}

export class AppError {
    public readonly message: string;
    public readonly statusCode: number;
    
    constructor(errorMsg: IAppError) {
        this.message = errorMsg.msg;
        this.statusCode = errorMsg.statusCode;
    }

}