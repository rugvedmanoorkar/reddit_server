import {MikroORM } from "@mikro-orm/core"

const main = async () => {
    const orm = await MikroORM.init()
    console.log('Hello world')
}

main()
//this is a commit 