const fs = require("fs")
const path = require("path")
const { createDir, createComponent } = require("./helpers/utils")

const params = process.argv

params.shift()
const root = path.dirname(params.shift())


const action  = params.shift()



if((action === "c") || (action === "components")){
    params.forEach(name => {
        console.log({root});
        createComponent(root,name)
    });
}

