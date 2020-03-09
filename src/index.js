import { $ } from "@dekproject/scope";
import SendGrid from '@sendgrid/mail';

export default () => {
    try{
        if(!process.env.hasOwnProperty('SENDGRID_API_KEY')){
            console.log('[ SendGrid ] - There is no SENDGRID_API_KEY variable in the .env file.');
        }
        else{
            SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
            $.set("sendgrid", SendGrid);
        }
    }
    catch (e) {
        console.log(`[ SendGrid ] - ${e.message}`);
    }
}
