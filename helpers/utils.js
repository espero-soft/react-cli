const fs = require("fs")

const camelCase = async (name) =>{
    return name.charAt(0).toUpperCase()+name.slice(1)
}

const createDir = async (path) => {
    const root = path.split("/")

    let start = []
    while (root.length) {
        try {
            start.push(root.shift())
            // console.log(start);
            await fs.mkdirSync(start.join('/'))

        } catch (error) {

        }
    }
}
const createComponent = async (root,name) => {
    
    const newName = name.charAt(0).toUpperCase()+name.slice(1)
    const date = new Date()
    let newDate = date.toLocaleDateString()
    newDate += " "+date.toLocaleTimeString()

    const variables = [{ key: "Name", value: newName }, { key: "date", value: newDate }]
    let compTs = fs.readFileSync(root+"/templates/component.ts", { encoding: "utf-8" })
    let compCss = fs.readFileSync(root+"/templates/component.css", { encoding: "utf-8" })

    variables.forEach(async ({key, value}) => {
        while (compTs.search(`{{${key}}}`) !== -1) {
            compTs = compTs.replace(`{{${key}}}`, value)
        }
        while (compCss.search(`{{${key}}}`) !== -1) {
            compCss = compCss.replace(`{{${key}}}`, value)
        }
        await createDir(process.cwd()+`/src/components/${newName}`)
        fs.writeFileSync(process.cwd()+`/src/components/${newName}/${newName}.tsx`, compTs)
        fs.writeFileSync(process.cwd()+`/src/components/${newName}/${newName}.css`, compCss)
    });
    console.log(`CREATE : src/components/${newName}/${newName}.tsx`)
    console.log(`CREATE : src/components/${newName}/${newName}.css`)

    // console.log(compTs);
}
const createSimpleComponent = async (root,name) => {
    
    const newName = name.charAt(0).toUpperCase()+name.slice(1)
    const date = new Date()
    let newDate = date.toLocaleDateString()
    newDate += " "+date.toLocaleTimeString()

    const variables = [{ key: "Name", value: newName }, { key: "date", value: newDate }]
    let compTs = fs.readFileSync(root+"/templates/components.ts", { encoding: "utf-8" })
    let compCss = fs.readFileSync(root+"/templates/component.css", { encoding: "utf-8" })

    variables.forEach(async ({key, value}) => {
        while (compTs.search(`{{${key}}}`) !== -1) {
            compTs = compTs.replace(`{{${key}}}`, value)
        }
        while (compCss.search(`{{${key}}}`) !== -1) {
            compCss = compCss.replace(`{{${key}}}`, value)
        }
        await createDir(process.cwd()+`/src/components/${newName}`)
        fs.writeFileSync(process.cwd()+`/src/components/${newName}/${newName}.tsx`, compTs)
        fs.writeFileSync(process.cwd()+`/src/components/${newName}/${newName}.css`, compCss)
    });
    console.log(`CREATE : src/components/${newName}/${newName}.tsx`)
    console.log(`CREATE : src/components/${newName}/${newName}.css`)

    // console.log(compTs);
}
const createPage = async (root,name) => {
    // console.log(root);
    const newName = name.charAt(0).toUpperCase()+name.slice(1)
    const date = new Date()
    let newDate = date.toLocaleDateString()
    newDate += " "+date.toLocaleTimeString()

    const variables = [{ key: "Name", value: newName }, { key: "date", value: newDate }]
    let compTs = fs.readFileSync(root+"/templates/component.ts", { encoding: "utf-8" })
    let compCss = fs.readFileSync(root+"/templates/component.css", { encoding: "utf-8" })

    variables.forEach(async ({key, value}) => {
        while (compTs.search(`{{${key}}}`) !== -1) {
            compTs = compTs.replace(`{{${key}}}`, value)
        }
        while (compCss.search(`{{${key}}}`) !== -1) {
            compCss = compCss.replace(`{{${key}}}`, value)
        }
        await createDir(process.cwd()+`/src/pages/${newName}`)
        fs.writeFileSync(process.cwd()+`/src/pages/${newName}/${newName}.tsx`, compTs)
        fs.writeFileSync(process.cwd()+`/src/pages/${newName}/${newName}.css`, compCss)
    });
    console.log(`CREATE : src/pages/${newName}/${newName}.tsx`)
    console.log(`CREATE : src/pages/${newName}/${newName}.css`)

    // console.log(compTs);
}
const createGuard = async (root,name) => {
    // console.log(root);
    const newName = name.charAt(0).toUpperCase()+name.slice(1)
    const date = new Date()
    let newDate = date.toLocaleDateString()
    newDate += " "+date.toLocaleTimeString()

    const variables = [{ key: "Name", value: newName }, { key: "date", value: newDate }]
    let compTs = fs.readFileSync(root+"/templates/garde.ts", { encoding: "utf-8" })

    variables.forEach(async ({key, value}) => {
        while (compTs.search(`{{${key}}}`) !== -1) {
            compTs = compTs.replace(`{{${key}}}`, value)
        }
        await createDir(process.cwd()+`/src/guard/${newName}`)
        fs.writeFileSync(process.cwd()+`/src/guard/${newName}/${newName}.tsx`, compTs)
    });
    console.log(`CREATE : src/guard/${newName}/${newName}.tsx`)

    // console.log(compTs);
}

const displayHelp = async () =>{
   
}

module.exports = { createDir,createSimpleComponent, createComponent, createPage, displayHelp, createGuard }