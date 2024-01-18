interface Exception {
    statusCode: number;
    message: string;
    data?:any;
}

export const Exception = function (this: Exception, statusCode:number, message:string, data?:any){
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
} as unknown as { new(statusCode: number, message:string, data?:any):Exception}