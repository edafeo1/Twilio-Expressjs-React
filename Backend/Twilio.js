const twilio = require('Twilio');


class Twilio{

phoneNumber = '+1 234 332 2290';
phoneNumberSid = 'PN3ce363d9300dade6bf5879f47fb1658f';
tokenSid = 'SKd2784789f14227013bf150e4ca8b3ca8';
tokenSecret = 'AhGZCnxENnVld7fOEm7x18WVAtyHR48M';
accountSid = 'ACc6bd7b74ce08fe4aba4477e1839c91b3';
verify = 'VA9e7077e9065d7700f9e7e00b03c3a8b2';

client;
constructor(){
    this.client=twilio(this.tokenSid, this.tokenSecret, {
        accountSid: this.accountSid,
    });
}

getTwilio(){
    this.client;
}

async sendVerifyAsync(to, channel){
  const verificationData = await this.client.verify.services(this.verify).verifications.create({
        to,
        channel,
    })//.then(verification => console.log(verification.sid));
   console.log('sendVerify:', verificationData);
   return verificationData;
}

async VerifyAsync(to, code){
    const codeData = await this.client.verify.services(this.verify).verificationChecks.create({
          to,
          channel,
      })//.then(verification => console.log(verification.sid));
     console.log('VerifyCode:', codeData);
     return codeData;
  }

}

const instance = new Twilio();
Object.freeze(instance);

module.exports = instance;