# ChatGPTTemplateSaver

## How to use

1. Download `release.zip`.
2. Extract `release.zip`.
3. Add the extracted `dist` folder into `chrome://extensions/`.

- [Releases](https://github.com/YuheiNakasaka/chatgpt-template-saver/releases)

## Form Data Format

### Field

- `formItems[]`: Forms(exp. Personal Informaion).
  - `id`: Random text. Not allowed to duplicate in the FormItems.
  - `name`: FormItem name.
  - `inputItems[]`: Form item's type, selector and value
    - `type`: text | radio | checkbox | select
    - `selector`: Any selector accepted in `document.querySelector(selector)`
    - `value`: string

### Example

```json
{
  "formItems": [
    {
      "id": "00000001",
      "name": "深津式プロンプト",
      "inputItems": [
        {
          "type": "text",
          "selector": "form textarea",
          "value": "#命令書\nあなたはプロの<XXX>です。以下の制約条件から<XXX>を出力してください。\n\n#制約条件\n\n#入力文\n\n#出力文\n\n"
        }
      ]
    }
  ]
}
```

## Prerequisites

- [node + npm](https://nodejs.org/) (Current Version)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

```
npm install
```

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test

`npx jest` or `npm run test`
