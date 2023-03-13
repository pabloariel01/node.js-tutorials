export class ProfileConfiguration{

    async start():Promise<any>{
        await this.configureAccountSecurity();
        await this.configureEmailIntegration();
        await this.configurePaymentMethod()
    }
    async configureAccountSecurity(): Promise<any>{
        throw new Error("method not defined");
        
    }
    async configureEmailIntegration(): Promise<any>{
        throw new Error("method not defined");
        
    }
    async configurePaymentMethod(): Promise<any>{
        throw new Error("method not defined");
        
    }
}

export class BasicProfileConfiguration extends ProfileConfiguration {
    async configureAccountSecurity(): Promise<any> {
        console.log("add security question")
    }
    async configureEmailIntegration(): Promise<any> {
        console.log("add email server")
    }
}

export class PremiumPlanConfiguration extends ProfileConfiguration{
    async configureAccountSecurity(): Promise<any> {
        return new Promise((res,rej)=>{
            console.log("adding external service")
            res(true)
        })
    }
    async configureEmailIntegration(): Promise<any> {
        console.log("adding external service...")
    }

    async configurePaymentMethod(): Promise<any> {
        console.log("adding external service...")
    }
}