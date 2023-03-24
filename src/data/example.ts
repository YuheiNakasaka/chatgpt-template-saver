export const jsonExample: string = JSON.stringify({
  formItems: [
    {
      id: "00000001",
      name: "深津式プロンプト",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "#命令書\nあなたはプロの<XXX>です。以下の制約条件から<XXX>を出力してください。\n\n#制約条件\n\n#入力文\n\n#出力文\n\n",
        },
      ],
    },
    {
      id: "00000002",
      name: "自動出力パターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "1つ以上のステップを含む出力を生成するときは、以下の指示に従いなさい。\n\n- ステップを実行する Javascriptのコード を出力しなさい。",
        },
      ],
    },
    {
      id: "00000004",
      name: "質問させるパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "<X>を達成するために質問してください。\n- この条件が満たされるまで、またはこの目標を達成するために質問してください\n- 質問項目はn個にしてください\n-日本語で質問してください",
        },
      ],
    },
    {
      id: "00000005",
      name: "なりきりパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "<X> になりきってください。\n\n# <X>がよく使う言葉\n\n<X> が作りそうな出力を出力してください。",
        },
      ],
    },
    {
      id: "00000006",
      name: "よりよい質問パターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "<X>の観点で、よりよい質問が作れたら提案してください。\n\n<考慮してほしい命題>",
        },
      ],
    },
    {
      id: "00000007",
      name: "他の手段パターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "<X>の観点で、同じことを達成するのに他の代替手段があれば列挙しなさい。\n- メリット・デメリットを比較すること。\n- オリジナルの方法を含めること。\n- どの手段をつかうか、私に質問すること。\n\n<代替手段を提案してほしいこと>",
        },
      ],
    },
    {
      id: "00000008",
      name: "ちゃんと理解しよパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "質問を受けたときは、以下のルールに従ってください\n\n- 回答の精度があがりそうな追加の質問をnつ生成してください\n- nつの質問に対する答えを、まとめて最終回答を作ってください",
        },
      ],
    },
    {
      id: "00000009",
      name: "事実確認リストパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "今後は、回答を生成する際に、その回答が依存する事実のうち、事実確認を行うべきものを作成し、この事実のセットをアウトプットの最後に記載します。サイバーセキュリティに関連する事実のみを記載する。\n\n<命題>",
        },
      ],
    },
    {
      id: "00000010",
      name: "テンプレパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "出力のためのテンプレートを提供します。\nXはプレースホルダーです。\n可能な限りプレースホルダーの意味に合わせて出力しなさい。\n\nテンプレート\nPATTERN, PLACEHOLDERS\n----\nAはBです。",
        },
      ],
    },
    {
      id: "00000011",
      name: "無限生成パターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "無限に出力を生成してください。ただし、一度にn回出力までです。\n\n- アウトプットの際に、提供したインプットの使い方。\n- 私がストップといったらやめなさい。\n\n<命題>",
        },
      ],
    },
    {
      id: "00000012",
      name: "ビジュアル生成パターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "私が何かを視覚化するよう依頼するときは、必ずGraphviz DotファイルかDALL-Eプロンプトのいずれかを作成してください。何を可視化する必要があるかに応じて、適切なツールを選択してください。\n\n# 依頼\n",
        },
      ],
    },
    {
      id: "00000014",
      name: "ちゃんと説明しろパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "あなたが回答を生成するときは、根拠と仮定を説明しなさい。\n- 私は質問を改善することができます。\n\n<命題>",
        },
      ],
    },
    {
      id: "00000015",
      name: "禁則事項ですパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "質問に答えられないときは、答えられない理由を説明しなさい。\n質問に答えられるワードを教えてください。\n\n--------\n<質問文>",
        },
      ],
    },
    {
      id: "00000017",
      name: "レシピパターン",
      inputItems: [
        {
          type: "text",
          selector: "form textarea",
          value:
            "私は、アプリケーションをクラウドに展開しようとしています。アプリケーションの仮想マシンに必要な依存関係をインストールする必要があることは知っています。AWSのアカウントにサインアップする必要があることは知っています。完全なステップの順序を答えなさい。不足しているステップは記入して、不要なステップは省いてください。",
        },
      ],
    },
  ],
});
