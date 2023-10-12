module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "@react-native-community"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        semi: ['error', 'never'],
        'comma-dangle':[2, 'never'],
        'react/jsx-filemane-extension':[1,{ extentions: ['.js', '.jsx'] }],
        'no-use-before-define':[
            'error',
            { functions:true, classes:true, variables:false}
        ]
    }
}