/**
 * Contains a response from the API. It can be OK or with ERROR with a message.
 */
export class ActionStatus {

    status: string;
    msg: string;

    public static readonly API_STATUS_OK: string = "OK";
    public static readonly API_STATUS_ERROR: string = "ERROR";

    constructor(status: string = ActionStatus.API_STATUS_OK, message: string = null) {
        this.msg = message;
        this.status = status;
    }

}
