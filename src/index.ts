export default class Sms {
    private _hand: SmsDriver;
    /**
     * 短信通道
     * @param Type 短信通道名称 
     * @param Config 该短息通道的配置信息
     */
    constructor(Type: string, Config: Object) {
        try {
            let Driver = require(`castle-sms-${Type.toLowerCase()}`)
            if (Driver.default) {
                this._hand = new Driver.default(Config)
            } else {
                throw new Error('ERROR_SMS_DRIVER')
            }
        } catch (error) {

        }
    }
    /**
     * 发送一条信息
     * @param Phone 
     * @param Params 
     */
    async send(Phone: number, Params: object) {
        return await this._hand.send(Phone, Params);
    }
    /**
     * 批量发送
     * @param Phones 
     * @param Params 
     */
    async sendBatch(Phones: number[], Params: object) {
        return await this._hand.sendBatch(Phones, Params);
    }
}
export class SmsDriver {
    /**
     * 发送一个
     * @param Phone 
     * @param Params 
     */
    async send(Phone: number, Params: object) {
        throw new Error('NOT_SUPPORT')
    }
    /**
     * 批量发送
     * @param Phones 
     * @param Params 
     */
    async sendBatch(Phones: number[], Params: object) {
        throw new Error('NOT_SUPPORT')
    }
}