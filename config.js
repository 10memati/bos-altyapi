module.exports = {
    Bot: {
        token: "MTAzMzY3NTU4NDAyMDE2ODcwNA.GaDySn.9yGk_xsSLXWVVyiwIc-j1OYFJGgkz1ymEuLXRs",
        prefix: ".",
        intents: "all",
        database: {
            db: require("dbdjs.db"),
            type: "dbdjs.db",
            path: "./database/",
            tables: ["main"],
          }
        },
        respondOnEdit: {
            commands: true
        },
        suppressAllErrors: false,
        errorMessage: ""
}