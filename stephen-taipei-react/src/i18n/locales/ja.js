// 日本語 (values-ja)
export default {
  nav: {
    about: "自己紹介",
    skills: "スキル",
    experience: "経歴",
    portfolio: "ポートフォリオ",
    contact: "お問い合わせ",
  },
  hero: {
    name: "Stephen Chuang",
    title: "シニアフルスタック",
    subtitle: "エンジニア",
    description:
      "AIプラットフォーム、ECシステム、フィンテック、教育アプリケーションの経験豊富。マルチプロジェクトモジュール共有と長期メンテナンスのためのNx Monorepoアーキテクチャを実装し、100以上のテーマ設定を可能にし、複雑なコンポーネントコードを1000行から200行に削減。",
    viewWork: "作品を見る",
    contactMe: "お問い合わせ",
  },
  about: {
    title: "アイデアを",
    titleHighlight: "デジタルリアリティに変える",
    location: "台北、台湾",
    badgeTitle: "ダンスチャンピオン",
    badgeValue: "全国優勝 / 世界トップ8",
    description1:
      "学習とクロスドメイン統合に情熱を持っています。デザインのバックグラウンドから情報管理に移行し、最終的にフルスタック開発とシステムアーキテクチャに焦点を当てました。フロントエンドフレームワークからバックエンドアーキテクチャまでの完全な開発経験を持つAngularとLaravelに精通。",
    description2:
      "Git、Trello、Slackを使用したカンバンスタイルのプロジェクト管理で6人のチームをリード。要件分析、システム計画、コラボレーション、コード品質管理の実践的な経験を積みながら、複数のWebApp開発を成功裏に完了。",
    description3:
      "仕事以外では、ストリートダンススタジオを設立し、ダンス大会で全国チャンピオンと世界トップ8を達成。これらの経験は、忍耐力、集中力、困難を乗り越える決意を培いました。",
    performanceTitle: "パフォーマンス",
    performanceDesc: "スピードとスケールの最適化",
    leadershipTitle: "リーダーシップ",
    leadershipDesc: "メンタリングとチームビルディング",
  },
  skills: {
    title: "技術的専門知識",
    subtitle: "現代のデジタルソリューションのための包括的なツールセット",
    frontend: "フロントエンド",
    backend: "バックエンド",
    devops: "DevOps",
    ai: "AIツール",
  },
  experience: {
    title: "キャリア",
    present: "現在",
    jobs: [
      {
        company: "______ Technology Co., Ltd.",
        role: "シニアエンジニア",
        period: "2024/1 - 現在",
        description: [
          "Nx Monorepoアーキテクチャをリードし、モジュール共有で複数のプロジェクトを統合、動的レイアウト切り替えでAPI駆動の100以上のテーマを実現。",
          "Angular 19にアップグレード、Signal/Computed/Effectを完全採用、OnPush最適化でRxJS依存を削減。",
          "複雑なロジックをShared Componentsにモジュール化、1000行のコードを200行以下に削減。",
          "フロントエンドエンジニア2-4名を直接管理、サポートスタッフ6名を間接的に調整、定期的な技術共有セッションを開催。",
        ],
      },
      {
        company: "Shang Shang Design Co., Ltd.",
        role: "フルスタックエンジニア",
        period: "2014/1 - 2023/11",
        description: [
          "Laravel + Angular PWAでダイレクトセールスECプラットフォームを開発、ショッピングカート、会員管理、管理システムを含む。",
          "商品ランキングとキーワードタグのRedisキャッシングを実装、データベースクエリを70%削減。",
          "6人のクロスファンクショナルチームを管理、クライアントが12ヶ月で0から20,000会員に成長するのを支援、月間アクティブ率85%以上を達成。",
          "電子契約プラットフォームを構築、署名、レビュー、店舗開設ワークフローを含む紙のプロセスをデジタル化。",
        ],
      },
      {
        company: "Xin Lin Yang Consultancy Co., Ltd.",
        role: "エンジニア",
        period: "2013/1 - 2014/1",
        description: [
          "PHP (Smarty) + jQueryを使用して内部管理システムを開発・保守。",
          "高度なマルチクライテリア検索を備えた差押え情報システムを構築。",
          "自動フィルタリングと自動レポート配信を備えたカスタマイズされたマッチング戦略を設計。",
        ],
      },
    ],
  },
  portfolio: {
    title: "注目のプロジェクト",
    subtitle: "技術的な深さとイノベーションを紹介",
    clickToView: "詳細を見るにはクリック",
    projectDesc: "プロジェクト説明",
    features: "主な機能",
    techStack: "技術スタック",
    achievement: "主な成果",
    projects: [
      {
        title: "Copila AI",
        desc: "AIカスタマイズプラットフォーム",
        fullDesc:
          "AI会話と描画、AIが生成するカスタマイズチャートを提供。Laravel Swoole OctaneでWebSocketサーバーを実装し、リアルタイムコミュニケーション、AI描画、オンラインスケッチのためにAngularと連携。AIパワードのマインドマップ、フローチャート、マンダラ思考グリッドのためにOpenAI APIを統合。",
        tech: [
          "Angular PWA",
          "Laravel Swoole Octane",
          "WebSocket",
          "OpenAI API",
          "MySQL",
          "Redis",
        ],
        achievement: "ほぼ満点のLighthouseスコア",
        features: [
          "AIマインドマップ生成",
          "AIフローチャート生成",
          "マンダラ思考グリッド",
          "リアルタイムコミュニケーション",
          "AI描画",
          "オンラインスケッチ",
        ],
      },
      {
        title: "Meeple Logistics",
        desc: "OMO ECシステム",
        fullDesc:
          "オークションスタイルのショッピングを備えたマルチベンダーマーケットプレイス、オンラインショッピングとオフライン店舗支払いを統合。動的な商品ページカスタマイズのためのユーザーフットプリントに基づくパーソナライズされたレコメンデーションアルゴリズムを設計。",
        tech: ["Angular PWA", "Laravel", "MySQL", "Redis", "Ubuntu", "Nginx"],
        achievement: "1年で約20,000会員",
        features: [
          "マルチベンダーマーケットプレイス",
          "オークションスタイルショッピング",
          "マルチティアボーナスシステム",
          "Eウォレットシステム",
          "オンライン・オフライン決済統合",
        ],
      },
      {
        title: "StocX",
        desc: "株式市場トレーニングシステム",
        fullDesc:
          "市場感覚と銘柄選択戦略のトレーニングのための過去の株価データを提供。キャッシングとプロセス設計により低コストの共有ホスティングを最適化、500以上の同時接続ユーザーを達成。",
        tech: ["Vue.js", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "500同時接続ユーザー、KOLとベストセラー作家が共有",
        features: [
          "K線チャート分析",
          "有望銘柄スクリーニング",
          "戦略トレーニング",
          "過去データバックテスト",
        ],
      },
      {
        title: "皮紋検出システム",
        desc: "指紋検出プラットフォーム",
        fullDesc:
          "子供と保護者向けの指紋検出とレポート生成を提供。学生管理、皮紋分析、包括的なレポート生成を含む。",
        tech: ["jQuery", "Laravel", "MySQL", "Ubuntu", "Apache"],
        achievement: "自動レポート生成",
        features: [
          "学生管理",
          "皮紋分析",
          "脳機能チャート",
          "PDFレポートエクスポート",
        ],
      },
    ],
  },
  contact: {
    title: "つながりましょう",
    subtitle:
      "ご質問、プロジェクトのアイデア、または最新のテックトレンドについて話したい場合は、お気軽にご連絡ください。",
    email: "メール",
    location: "所在地",
    locationValue: "台北、台湾",
    formName: "お名前",
    formNamePlaceholder: "お名前",
    formEmail: "メール",
    formEmailPlaceholder: "your@email.com",
    formMessage: "メッセージ",
    formMessagePlaceholder: "こんにちは、Stephen...",
    sendMessage: "メッセージを送信",
  },
  footer: {
    copyright: "全著作権所有",
  },
};
