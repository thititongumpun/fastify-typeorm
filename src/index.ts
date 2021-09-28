import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {
    const user = new User();
    user.firstName = 'suwit';
    user.lastName = 'sakidtaling';
    user.age = 30;

    await connection.manager.save(user);

    console.log('User Created');

}).catch(error => console.log(error));
