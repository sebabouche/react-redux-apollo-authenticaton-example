module.exports = {
    "env": {
        "browser": true,
        "commonjs": false,
        "node": true,
        "es6": true,
        "jest": true,
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "never"
        ],
        "react/jsx-filename-extension": "off",
        "no-console": [
          "warn",
          {
            allow: ["warn", "error", "info"],
          },
        ]
    }
};
