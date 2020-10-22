const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-19.8784499",
        lng: "-43.9328707",
        name: "Lar das Meninas Felizes",
        about: "Presta assistência à crianças de 03 a 10 anos que se encontram em situação de risco e/ou vulnerabilidade.",
        whatsapp: "31 933224455",
        images: [
            "https://images.unsplash.com/photo-1602622931974-78228760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1583526362016-c3137c71cc3a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1596908876749-b8f0f3972240?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601180964546-f5c6ac9fdc14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para distribuir! 💙",
        opening_hours: "Horário de visita das 09h às 16h",
        open_on_weekends: "1",
 });  */
    
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 
    
    //consultar somente 1 orfanato pela ID
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage) */

    //deletar dado especifico da tabela
    /*console.log(await db.run("DELETE FROM orphanages")) */

})
