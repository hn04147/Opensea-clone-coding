## 폰트 적용 하기
1. 폰트 사이트에서 복사해온 ```@import ~~~```를 ```tailwindcss.css```에 붙여넣기한다.
```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```
2. ```tailwind.config.js```에 추가할 폰트를 넣어준다.
```
module.exports = {
    content: ["./**/*.{ts,tsx}"],
    theme: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
        },
    },
}
```
3. ```global.css```에서 폰트 적용
```
* {
    font-family: Poppins, ...
}
```

<br />
<br />
<br />
<br />
<br />
<br />

# Requirement

* nodejs 16.14+
* yarn pnp

# how to run

## dev
```bash
yarn start
```

## lint
```bash
yarn lint
```

## deploy
```bash
yarn delpoy
```

```