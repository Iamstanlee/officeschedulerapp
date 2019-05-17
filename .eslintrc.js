module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier", "prettier/react"],
  "env": {
    "jest": true,
    "browser": true,
    "mocha": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "max-len": [
      0,
      {
        "code": 100
      }
    ],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "no-mixed-operators": 0,
    "no-console": 0,
    "class-methods-use-this": 0,
    "react/no-did-update-set-state": 0,
    "react/prefer-stateless-function": "on",
    "no-underscore-dangle": 0
  },
  "globals": {
    "navigator": false,
    "navigation": false,
    "nav": false
  }
};
