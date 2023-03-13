const user = require("./user")
class Signup{
    async create({name, email, age}){ //interpolate so can retrieve from this
        const  newUser= await new user(name, nickname)
        // const newSession =await new Session(topics) 
    }
}

class SignupBuilder{
    constructor(name, email, age){
        this.name=name;
        this.email=email;
        this.age=age
    }

    setNickname(nickname){
        this.nickname=nickname
        return this
    }
    setPhoto(photo){
        this.photo=photo
        return this
    }
    setTopics(topics){
        this.topics=topics
        return this
    }

    createUSer(){
        return Signup.create(this)
    }
}

new SignupBuilder('peter',"peter@asd.com",24)
    .setNickname('pete')
    .setPhoto("profile.jpg")
    .createUSer()