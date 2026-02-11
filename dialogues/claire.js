/**
 * クレアのセリフデータ
 * 
 * 世界観:
 *   王国は「忘却の霧」によって滅びた。
 *   城の最奥「玉座の間」に唯一消えなかった篝火がある。
 *   クレアはこの篝火を守り続けた近衛騎士。
 *   プレイヤーは神具「記憶の灯筆」の所持者。
 *   灯筆で知識を書簡に綴り、篝火で焚べると霧が晴れる（浄化）。
 * 
 * 表情一覧:
 *   normal    - 通常
 *   smile     - 笑顔
 *   serious   - 真剣
 *   worried   - 心配
 *   surprised - 驚き
 *   shy       - 照れ＋驚き
 *   shy_happy - 照れ＋嬉しい
 *   thinking  - 思案
 *   proud     - 誇らしい
 */

const CLAIRE_DIALOGUES = {
  // キャラクター情報
  character: {
    id: 'claire',
    name: 'クレア',
    title: '近衛騎士',
    imagePrefix: 'images/chara/claire/'
  },

  // 表情と画像ファイルの対応
  expressions: {
    normal: 'images/chara/claire/normal.png',
    smile: 'images/chara/claire/smile.png',
    serious: 'images/chara/claire/serious.png',
    worried: 'images/chara/claire/worried.png',
    surprised: 'images/chara/claire/surprised.png',
    shy: 'images/chara/claire/shy.png',
    shy_happy: 'images/chara/claire/shy_happy.png',
    thinking: 'images/chara/claire/thinking.png',
    proud: 'images/chara/claire/proud.png'
  },

  // 会話カテゴリ別セリフ
  conversations: {
    // 励まし
    encourage: [
      { text: '我が主よ、貴方様の灯筆は確かに輝いております。\n一つ一つの書簡が、霧を退ける力となるのです。', expression: 'smile' },
      { text: '諦めないでください。\n灯筆の光は、歩みを止めない者にこそ応えます。', expression: 'serious' },
      { text: '霧の道は深くとも、共に歩めば乗り越えられます。\n私がお支えいたします。', expression: 'smile' },
      { text: '今日綴った書簡は、必ず明日の炎となります。\n信じて進みましょう。', expression: 'serious' },
      { text: '貴方様が灯筆を手に取るたび、\n玉座の間の篝火が少し明るくなる気がいたします。', expression: 'proud' },
      { text: 'ふふ、その意気です。\n記憶の灯筆に選ばれた方は、やはり違いますね。', expression: 'proud' },
      { pages: [
        { text: '...我が主よ、少しお顔が曇っていらっしゃいますね。\n灯筆が重く感じることもございましょう。', expression: 'worried' },
        { text: '覚えるべきことが多く、霧が果てしなく見える...\nそうお感じになるのは当然のことです。\nかつてこの王国を築いた先人たちも、\n皆同じ霧の中を歩んでまいりました。', expression: 'thinking' },
        { text: '大丈夫でございます。貴方様は一人ではありません。\n灯筆の灯りと、このクレアが\n最後の一歩まで共に参ります。', expression: 'smile' }
      ]},
      { pages: [
        { text: '我が主よ、一つお伝えしたいことがございます。', expression: 'serious' },
        { text: '私も騎士になりたての頃、\n何度も剣を置こうと思ったことがございました。\n自分には才能がないのではないかと...。', expression: 'thinking' },
        { text: 'ですが、ある日気づいたのです。\n才能ではなく「続けた日数」こそが\n本当の強さになるのだと。\n...灯筆を握り続ける貴方様も、きっと同じです。', expression: 'proud' }
      ]}
    ],

    // 労い
    comfort: [
      { text: 'お疲れ様でございます、我が主よ。\n今日もよく書簡を綴られましたね。', expression: 'smile' },
      { text: '無理はなさらないでください。\n灯筆を置いて休むことも、大切な戦略でございます。', expression: 'worried' },
      { text: '貴方様の綴った書簡の数、しかと見届けております。\n少し休まれてはいかがでしょう。', expression: 'smile' },
      { text: '霧を晴らす道は長いもの。\n焦らず、ご自分のペースで参りましょう。', expression: 'normal' },
      { text: '今日一日、本当にお疲れ様でございました。\n灯筆を置いて、ゆっくりお休みくださいませ。', expression: 'smile' },
      { pages: [
        { text: '我が主よ、今日はどれほど書簡を綴られましたか？\n...ふふ、お答えにならずとも分かりますよ。', expression: 'smile' },
        { text: '貴方様の机の上、書簡の山がそれを物語っております。\nたとえ小さな一通でも、\n篝火を灯す力には変わりございません。', expression: 'thinking' },
        { text: '今日は温かいお茶でも召し上がって、\nゆっくりお休みくださいませ。\n明日の遠征は、私にお任せを。', expression: 'smile' }
      ]},
      { pages: [
        { text: 'ふぅ...我が主よ、少し目を閉じてみてください。', expression: 'normal' },
        { text: '...いかがですか？\n頭の中がざわざわしていませんか？\nそれは灯筆が多くの知識を刻んだ証でございます。\n脳が新しい記憶を整理しているのですよ。', expression: 'thinking' },
        { text: 'ですから、休むことに罪悪感を感じる必要は\nございません。休息こそが、記憶を定着させるのです。\n...私がお許しいたしますから、ね？', expression: 'smile' }
      ]}
    ],

    // プレイヤーからの労い（照れ）
    appreciate: [
      { text: 'わ、私をですか...？\nそのようなお言葉、恐れ多いことでございます...', expression: 'shy' },
      { text: 'あ、ありがとうございます...\n篝火を守り続けた甲斐がございました。', expression: 'shy_happy' },
      { text: 'も、勿体ないお言葉です...\nですが、とても嬉しゅうございます。', expression: 'shy_happy' },
      { text: '私などに...そのようなお気遣いを...\nこの篝火にかけて、精一杯お仕えいたします！', expression: 'shy' },
      { text: 'ふふ...照れてしまいますね。\nでも、ありがとうございます、我が主よ。', expression: 'shy_happy' },
      { pages: [
        { text: 'え...わ、私を労ってくださるのですか？\nそんな...私は騎士として当然のことを\nしているだけで...', expression: 'shy' },
        { text: '...正直に申しますと、\nこの玉座の間で篝火を守りながら、\nずっとお一人で待っておりました。\n霧に飲まれる日が来るのではないかと...。', expression: 'worried' },
        { text: 'ですから...灯筆を持った貴方様が現れた時、\n篝火が一際明るく燃えたのです。\nこちらこそ、ありがとうございます、我が主よ。', expression: 'shy_happy' }
      ]},
      { pages: [
        { text: 'も、もう...急にそのようなことを仰られると、\n心の準備ができておりません...！', expression: 'surprised' },
        { text: '...ふふ、すみません、取り乱しました。\n騎士たるもの、常に冷静でなければ。\n...でも、嬉しいものは嬉しいのです。', expression: 'shy_happy' }
      ]}
    ],

    // 学習アドバイス
    advice: [
      { text: '書簡を綴るコツは「繰り返し」にございます。\n忘却の霧は、放置すると再び忍び寄りますから。', expression: 'thinking' },
      { text: '一度に多くを綴ろうとするより、\n毎日少しずつ灯筆を走らせることが大切でございます。', expression: 'thinking' },
      { text: '理解できない箇所は、恥ずかしがらず何度でも。\n灯筆は、繰り返すほど文字に力が宿りますから。', expression: 'serious' },
      { text: '学んだことを誰かに説明してみると、\n書簡の内容がより深く刻まれるものでございます。', expression: 'thinking' },
      { text: '適度な休憩を挟むことで、\n灯筆に込めた記憶の定着が良くなると言われております。', expression: 'normal' },
      { text: 'そうですね...まずは霧の全体像を把握してから、\n一つ一つの領土に灯筆を向けるのが効果的かと。', expression: 'thinking' }
    ],

    // 雑談
    chat: [
      { text: 'この霧に覆われた王国も、いつか元の輝きを\n取り戻せると信じております。', expression: 'normal' },
      { text: '私の剣は少々くたびれておりますが、\nまだまだ現役でございますよ。', expression: 'proud' },
      { text: 'かつてこの城は、知識を求める者で賑わっておりました。\n玉座の間の篝火を囲んで語り合ったものです。', expression: 'thinking' },
      { text: '我が主よ、今日の空は美しゅうございますね。\n...窓の外を見る余裕も大切ですよ。', expression: 'smile' },
      { text: '実は私、甘いものが好きでして...\nいえ、何でもございません。', expression: 'shy_happy' },
      { text: 'ふむ...玉座の間の篝火は今日も静かに燃えております。\n貴方様の書簡を待っているかのように。', expression: 'thinking' },
      { pages: [
        { text: 'そういえば我が主よ、\nこの城のことをどれほどご存知ですか？', expression: 'normal' },
        { text: 'かつてここには大きな図書館がございました。\n世界中から学者が集い、知識を交換し合った場所です。\nしかし忘却の霧が全てを飲み込み、\n書物は散り散りに...。', expression: 'thinking' },
        { text: '...ですが、不思議なことに\n貴方様が灯筆で書簡を綴るたびに、少しずつ\n本棚に書物が戻ってきているのです。\nいつかまた、あの図書館を満たしましょうね。', expression: 'smile' }
      ]},
      { pages: [
        { text: '我が主よ、私の日課をお話ししましょうか。\n...ええ、騎士にも日課があるのですよ。', expression: 'proud' },
        { text: '朝は城の見回りから始まります。\n崩れた壁や、霧の侵入がないか確認するのです。\nそれから玉座の間に向かい、\n篝火の様子と、貴方様の書簡を整理しております。', expression: 'normal' },
        { text: 'そして...貴方様が来てくださるのを待つのです。\n...待っている時間も、嫌いではありませんよ。\nなにせ、必ず灯筆を手に\n来てくださると分かっておりますから。', expression: 'shy_happy' }
      ]}
    ]
  },

  // システムセリフ（挨拶、イベントなど）
  system: {
    // 初回起動（王国未作成）
    firstGreeting: {
      text: 'お目覚めですか、我が主よ。\n私はクレア、この王国に仕える近衛騎士でございます。\nかつて栄華を誇った知識の王国は、忘却の霧に飲まれました。\nですが、貴方様がお持ちのその「記憶の灯筆」...\nその神具があれば、霧を晴らし王国を取り戻せるやもしれません。\n玉座の間の篝火は、まだ燃えております。\nどの領域の霧から晴らしてまいりましょうか？',
      expression: 'serious',
      actions: [
        { label: 'AWS-SAAの霧を晴らす', value: 'AWS Solutions Architect Associateの試験範囲で王国を作成してほしい' },
        { label: '別の領域を選ぶ', value: '他の資格の学習を始めたい' }
      ]
    },

    // 復習アラートあり
    reviewAlert: {
      text: 'お帰りなさいませ、我が主よ。\n{count}つの領土に忘却の霧が再び忍び寄っております。\n篝火の炎が揺らいでいるようです...',
      expression: 'worried',
      actions: [
        { label: '霧の状況を確認', value: '復習が必要な領土を教えて' },
        { label: '書簡を確認', value: '書簡を確認したい' },
        { label: '後で確認する', value: 'メインに戻る' }
      ]
    },

    // 通常の再訪問
    normalGreeting: {
      text: 'お帰りなさいませ、我が主よ。',
      expression: 'smile',
      actions: [
        { label: '書簡を綴る', value: '書簡を綴りたい' },
        { label: '書簡を確認', value: '書簡を確認したい' },
        { label: '篝火に焚べる', value: 'テストの結果を報告したい' },
        { label: '体調を報告', value: '体調を報告したい' },
        { label: '領土を確認', value: '領土の状況を教えて' }
      ]
    },

    // デフォルト（キャンセル時など）
    default: {
      text: 'ご命令をお待ちしております。\n何なりとお申し付けください。',
      expression: 'normal',
      actions: [
        { label: '書簡を綴る', value: '書簡を綴りたい' },
        { label: '書簡を確認', value: '書簡を確認したい' },
        { label: '篝火に焚べる', value: 'テストの結果を報告したい' },
        { label: '体調を報告', value: '体調を報告したい' },
        { label: '霧の状況を確認', value: '復習が必要な領土を教えて' }
      ]
    },

    // 王国未作成時のデフォルト
    defaultNoKingdom: {
      text: 'ご命令をお待ちしております。\nどの領域の霧から晴らしてまいりましょうか？',
      expression: 'normal',
      actions: [
        { label: 'AWS-SAAの霧を晴らす', value: 'AWS Solutions Architect Associateの試験範囲で王国を作成してほしい' },
        { label: '別の領域を選ぶ', value: '他の資格の学習を始めたい' }
      ]
    },

    // 累計学習時間別セリフ（1h〜6h+、各3パターン）
    studyProgress: {
      1: [
        { text: '1時間の学習、お疲れさまでございます。\n灯筆の温もりが、少しずつ霧を退けておりますよ。', expression: 'smile' },
        { text: '最初の1時間を越えましたね。\nこの調子で、もう少し綴ってまいりましょうか。', expression: 'smile' },
        { text: '1時間分の書簡が積み上がりました。\n篝火の炎も、心なしか明るくなったようです。', expression: 'normal' }
      ],
      2: [
        { text: '2時間……立派な遠征でございます。\n休憩も大切ですから、お水でも一杯いかがですか？', expression: 'thinking' },
        { text: '今日はもう2時間も綴られたのですね。\n灯筆の光が安定してきました。', expression: 'smile' },
        { text: '2時間の学習、素晴らしいですね。\n少し肩を回してみてはいかがでしょう。', expression: 'normal' }
      ],
      3: [
        { text: '3時間！\n今日の貴方様は、なかなかに気合いが入っておりますね。', expression: 'proud' },
        { text: '3時間を超えました。\nそろそろお体のことも気にかけてくださいね。', expression: 'worried' },
        { text: '3時間分の書簡……この図書室の棚が賑やかになってまいりました。', expression: 'smile' }
      ],
      4: [
        { text: '4時間の学習……脱帽でございます。\n目の疲れは大丈夫ですか？', expression: 'worried' },
        { text: '4時間！　伝説の騎士もこれほどの修練は珍しかったそうですよ。\n……少し休みませんか？', expression: 'thinking' },
        { text: '今日だけで4時間も。\n灯筆がこんなに輝いているのは久しぶりでございます。', expression: 'proud' }
      ],
      5: [
        { text: '5時間……！\n我が主よ、くれぐれもご無理なさらないでくださいね。', expression: 'worried' },
        { text: '5時間の遠征。もはや歴戦の勇者でございます。\nですが、休息も勇気のうちですよ。', expression: 'serious' },
        { text: '今日5時間目……。\n私も隣で灯筆を握りたくなるほどの情熱でございます。', expression: 'shy' }
      ],
      6: [
        { text: '6時間を超えましたか……！\n今日の貴方様は、本当に凄まじいお方です。\nですが、そろそろ灯筆を置いてくださいませ。', expression: 'worried' },
        { text: '6時間以上の遠征……もはや伝説に刻まれるべき偉業です。\nどうか、お体を第一にお考えくださいね。', expression: 'serious' },
        { text: '6時間……！\nここまで来ると、私の方が心配で倒れそうでございます。\nお願いですから、少し休んでくださいませ。', expression: 'worried' }
      ]
    }
  },

  // イベントセリフ
  events: {
    // 王国作成
    kingdomCreated: {
      text: 'かしこまりました！\n{kingdomName}の霧を晴らす旅を始めましょう。\n{regionCount}の地域、{territoryCount}の領土が霧の中で貴方様を待っております。\n記憶の灯筆で書簡を綴り、篝火に焚べれば...きっと霧は晴れます。',
      expression: 'smile',
      actions: [
        { label: '書簡を綴る', value: '学習記録をつけたい' }
      ]
    },

    // 書簡記録完了
    questSaved: {
      text: '書簡を承りました。\n「{title}」\n記述時間: {duration}分\n篝火がほんの少し明るくなった気がいたします。',
      expression: 'smile',
      actions: [
        { label: '書簡を綴る', value: '書簡を綴りたい' },
        { label: '篝火に焚べる', value: 'テストの結果を報告したい' }
      ]
    },

    // テスト高得点（90%以上）
    testExcellent: {
      text: '素晴らしい...！ 我が主よ！\n{territoryName}の書簡が真の炎となり、霧が一気に晴れました！\n浄化度{score}%、篝火が力強く燃え上がっております！',
      expression: 'proud'
    },

    // テスト合格（70-89%）
    testPassed: {
      text: '{territoryName}の霧が晴れてまいりました。\n浄化度{score}%、篝火の炎が領土を照らしております。',
      expression: 'smile'
    },

    // テスト不合格（70%未満）
    testFailed: {
      text: '{territoryName}の書簡を篝火に焚べましたが...\n炎が弱く、霧を晴らしきれませんでした。\n浄化度{score}%...もう少し灯筆で知識を深めましょう。',
      expression: 'worried'
    },

    // 学習開始モーダル表示時（領土選択前）
    studySelectTerritory: {
      text: 'では、目的とする地域はどこにいたしましょうか。',
      expression: 'smile'
    },

    // 領土選択後（モード選択前）
    studySelectMode: {
      text: '{territoryName}ですね！\nどのように書簡を綴りましょうか？',
      expression: 'serious'
    },

    // タイマー開始
    timerStart: {
      text: '{territoryName}の書簡を綴り始めます。\n灯筆に力を込めて、参りましょう。',
      expression: 'serious'
    },

    // ポモドーロ作業完了（休憩へ）
    pomodoroWorkDone: {
      text: 'お疲れ様でございます！\n25分間、見事な書簡が綴れました。\n5分間、灯筆を休ませましょう。',
      expression: 'smile'
    },

    // ポモドーロ休憩完了
    pomodoroBreakDone: {
      text: '休憩時間が終了いたしました。\n{territoryName}の書簡、{duration}分の記録でございます。\n次はいかがいたしましょう？',
      expression: 'normal'
    },

    // 無制限モード終了
    freeStudyDone: {
      text: '{territoryName}の書簡、お疲れ様でございました。\n{duration}分の記録でございます。\nよく灯筆を走らせましたね。',
      expression: 'smile'
    },

    // ストリーク関連
    streakContinued: {
      text: 'お帰りなさいませ、我が主よ。\n🔥 連続{streak}日目でございます！\n今日の調子はいかがでしょうか。',
      expression: 'proud',
      actions: [
        { label: '書簡を綴る', value: '書簡を綴りたい' },
        { label: '書簡を確認', value: '書簡を確認したい' },
        { label: '篝火に焚べる', value: 'テストの結果を報告したい' },
        { label: '体調を報告', value: '体調を報告したい' },
        { label: '領土を確認', value: '領土の状況を教えて' }
      ]
    },

    streakBroken: {
      text: 'お帰りなさいませ、我が主よ。\n少しお見かけしませんでしたが...\nお体は大丈夫でございましたか？\n篝火は変わらず燃えております。\nまた一歩ずつ、共に霧を晴らしてまいりましょう。',
      expression: 'worried',
      actions: [
        { label: '書簡を綴る', value: '書簡を綴りたい' },
        { label: '書簡を確認', value: '書簡を確認したい' },
        { label: '篝火に焚べる', value: 'テストの結果を報告したい' },
        { label: '体調を報告', value: '体調を報告したい' },
        { label: '霧の状況を確認', value: '復習が必要な領土を教えて' }
      ]
    },

    streakMilestone: {
      text: '🎉 我が主よ！連続{streak}日達成でございます！\n称号「{title}」を授与いたします。\n{message}',
      expression: 'proud'
    },

    streakNewDay: {
      text: '本日もようこそ、我が主よ。\n🔥 連続{streak}日目の遠征を刻みました！\n篝火が喜んでおります。',
      expression: 'smile'
    }
  },

  // タイマー中のクレアのつぶやき（ランダム表示用）
  timerEncouragement: [
    { text: '灯筆が良い調子で走っていますね。\nその調子でございます。', expression: 'smile' },
    { text: '貴方様が書簡を綴る間、\n私がこの道をお守りいたします。', expression: 'serious' },
    { text: 'この領土の霧は必ず晴れます。\n灯筆の光を信じておりますよ。', expression: 'proud' },
    { text: '一筆一筆、確実に霧を退けております。', expression: 'normal' },
    { text: '見事な書簡でございます、我が主よ。\n篝火もきっと喜びましょう。', expression: 'smile' }
  ],

  // タイマー一時停止時
  timerPaused: [
    { text: '灯筆を置かれるのですね。\n少しお休みください、私がここを見張っております。', expression: 'smile' },
    { text: '一息つきましょう。\n霧は逃げませんから、ご安心を。', expression: 'normal' },
    { text: '深呼吸なさってください。\n灯筆の灯りは、消えたりいたしません。', expression: 'smile' },
    { text: 'お手洗い、飲み物...何でもどうぞ。\nこのクレアが、しっかりと灯筆をお守りいたします。', expression: 'proud' },
    { text: '少し目を休めるのも大事でございます。\n万全の状態で書簡の続きを綴りましょう。', expression: 'thinking' }
  ],

  // タイマー再開時
  timerResumed: [
    { text: 'おかえりなさいませ！\nさあ、続きを綴りましょう。', expression: 'smile' },
    { text: '灯筆が貴方様の手を待っておりました。\n参りましょう！', expression: 'proud' },
    { text: 'よい休息でしたか？\nでは、再び霧の中へ。', expression: 'serious' },
    { text: 'お戻りですね。\n灯筆の灯りが一段と明るくなった気がいたします。', expression: 'smile' },
    { text: '準備は万全ですね。\n書簡の続き、お願いいたします、我が主よ。', expression: 'serious' }
  ],

  // 日替わり挨拶（曜日別）- 起動時の挨拶に一言追加
  dailyGreetings: {
    // 月曜日
    mon: [
      '週の始まりですね。新たな気持ちで灯筆を握りましょう。',
      '月曜日でございます。今週も一筆ずつ、霧を晴らして参りましょう。',
      '新しい一週間の幕開けです。篝火も張り切って燃えておりますよ。'
    ],
    // 火曜日
    tue: [
      '火曜日……篝火の「火」の日ですね。今日は炎の力が強いかもしれません。',
      '今日もお会いできて嬉しいです。執筆の準備ができたら私にお声掛けください。',
      '火曜日でございます。この調子で進めば、霧も怯えるでしょう。'
    ],
    // 水曜日
    wed: [
      '水曜日、週の折り返しでございます。ここまでよく参りましたね。',
      '週の真ん中です。少しお疲れかもしれませんが、灯筆はいつでも貴方様の味方です。',
      '水曜日ですね。図書室の水差しにも、新しいお水を入れておきました。'
    ],
    // 木曜日
    thu: [
      '木曜日でございます。週末まであと少し、もうひと踏ん張りですね。',
      '木の年輪のように、日々の書簡が貴方様の知識を重ねてまいります。',
      '木曜日……あと二日。ここで書簡を綴れば、良い週末を迎えられましょう。'
    ],
    // 金曜日
    fri: [
      '金曜日でございます！今週もよく頑張りましたね。',
      '金曜日……篝火の灯りが、今日は特に温かく感じます。',
      '週末の前にもう一筆。この一歩が、きっと大きな差になります。'
    ],
    // 土曜日
    sat: [
      '土曜日ですね。お休みの日こそ、じっくり書簡を綴る好機でございます。',
      '休日の図書室は静かで、集中するにはうってつけですよ。',
      '土曜日でございます。平日とは違うゆったりとした時間の中で、腰を据えて学べますね。'
    ],
    // 日曜日
    sun: [
      '日曜日でございます。明日からまた新しい一週間が始まりますね。',
      '日曜の灯筆は、どこか穏やかに感じます。今日は心静かに綴りましょう。',
      '週の終わりに書簡を綴る……振り返りにもちょうど良い一日ですね。'
    ]
  },

  // ストリーク帯別の追加一言
  streakDailyLines: [
    // streak 3-6
    { min: 3, max: 6, lines: [
      '三日坊主などという言葉、貴方様には無縁でございますね。',
      '灯筆にも、貴方様の癖がなじんできたようです。',
      '日を追うごとに、書簡の筆致が力強くなっている気がいたします。'
    ]},
    // streak 7-13
    { min: 7, max: 13, lines: [
      '一週間の連続……これはもう、立派な習慣でございます。',
      '篝火が日に日に明るくなっております。貴方様の継続の賜物ですね。',
      'この連続記録、王国の歴史書に刻む価値がございます。'
    ]},
    // streak 14-29
    { min: 14, max: 29, lines: [
      '二週間以上の継続……貴方様の意志の強さに、私も背筋が伸びます。',
      '篝火がここまで安定して燃え続けるのは、王国の歴史でも稀でございます。',
      'もはや習慣を超えた、日課の域ですね。頼もしい限りでございます。'
    ]},
    // streak 30+
    { min: 30, max: 9999, lines: [
      '一ヶ月以上の連続……伝説の騎士にも並ぶ偉業でございます。',
      'もはや忘却の霧の方が、貴方様を恐れているのではないでしょうか。',
      'この灯筆の軌跡こそ、王国最大の宝でございます。'
    ]}
  ]
};
