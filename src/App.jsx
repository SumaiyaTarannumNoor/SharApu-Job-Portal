import React from 'react';
import Navbar from './components/Navbar/Navbar';


const WorkerCard = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" crossOrigin="anonymous" />
    <div className="p-4">
      <h3 className="text-pink-500 font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ReasonCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-full p-8 text-center shadow-lg">
    <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" crossOrigin="anonymous" />
    <h3 className="text-pink-500 font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const JobCard = ({ type, reward, daysLeft, title }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-2">
      <span className={`px-2 py-1 rounded text-white text-sm ${type === 'プロジェクト' ? 'bg-red-500' : 'bg-yellow-500'}`}>
        {type}
      </span>
      <span className="text-gray-600 text-sm">報酬額：{reward} | あと{daysLeft}日</span>
    </div>
    <p className="text-gray-800">{title}</p>
  </div>
);

const App = () => {
  const workers = [
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+1",
      title: "ダブルワーク＋ご家庭のバランスの取り方とは",
      description: "現在は総務所にて医療事務の仕事とfondesk のオペレーター業務を..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+2",
      title: "転勤や育児との両立は在宅オペレータの仕事で全てクリア",
      description: "最初は国内の損害保険会社で3年ほど事務職に就いていました。夫の..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+3",
      title: "ライティングを中心に月5万円の収入",
      description: "時間に拘束されず、趣味の園芸の時間もあって、とても時間に余裕..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+4",
      title: "ママと子供が笑顔になれば社会が変わる！",
      description: "まじめなワーカーさんが多いので現在は安心して発注できるシュ..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+5",
      title: "事業のコアを強化するためクラウドソーシングを活用",
      description: "初めて依頼した方から非常にクオリティの高い文章を書いていた..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+6",
      title: "クラウドソーシングは業務拡張の要！",
      description: "主婦とか女性のワーカーさんはトラブルが少なく良い記事を書い..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+7",
      title: "ライティングを強みに持つシュフティで効率アップ",
      description: "主に依頼している仕事内容はブログ記事のライティングで、大量の..."
    },
    {
      imageSrc: "https://placehold.co/300x200/pink/white?text=Worker+8",
      title: "何気なく始めた在宅ワークは最高の恩恵き！",
      description: "日中は子供たちがいるので仕事をすることはできません。ですの..."
    },
  ];

  const reasons = [
    {
      icon: "https://placehold.co/64x64/FFA500/white?text=OK",
      title: "スキル不要",
      description: "簡単な記事作成やアンケートならスマホで完結できます"
    },
    {
      icon: "https://placehold.co/64x64/FFA500/white?text=Time",
      title: "自分のペースで働ける",
      description: "1日10分程度の仕事もあるので無理なく始められます"
    },
    {
      icon: "https://placehold.co/64x64/FFA500/white?text=Safety",
      title: "報酬未払いの防止",
      description: "仮払い制度の導入でより安心・安全なお取引へ"
    }
  ];

  const jobs = [
    {
      type: 'プロジェクト',
      reward: '500 円',
      daysLeft: 4,
      title: 'ECサイトの在庫確認業務の募集します！✨完全在宅♪ マニュアルあります♪'
    },
    {
      type: 'タスク',
      reward: '100 円 / 件',
      daysLeft: 14,
      title: 'お葬式をあげた方へのアンケート_ver101_017'
    },
    {
      type: 'プロジェクト',
      reward: '300 円',
      daysLeft: 5,
      title: '【フルリモートの在宅作業！】ECサイトの商品データのダブルチェックのお手伝いスタッフを募集します！再出品作業に...'
    },
    {
      type: 'プロジェクト',
      reward: '50 円',
      daysLeft: 11,
      title: '【初心者限定】動画を1本ご覧いただき感想を書いていただくお仕事②'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mt-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4">スキマ時間に自分のペースで仕事できる</h1>
            <p className="text-lg sm:text-xl mb-6">シュフティなら自分なりのワークスタイルきっと見つかります</p>
            <button className="bg-pink-500 text-white px-6 sm:px-8 py-3 rounded-lg text-lg sm:text-xl w-full sm:w-auto">
              3分で完了！無料会員登録はこちら
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Smiling woman" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Workers Section */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-4">主婦の在宅ワーカーさんが多数活躍中！</h2>
          <p className="text-base sm:text-lg mb-8">時間の使い方や仕事の選び方など、参考になるインタビューを多数掲載</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workers.map((worker, index) => (
              <WorkerCard key={index} {...worker} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-3 rounded-full text-xl hover:bg-pink-100 transition duration-300">
              インタビューをもっと見る
            </button>
          </div>
        </div>

        {/* Reasons Section */}
        <div className="mt-24 bg-gray-100 py-12 sm:py-16 px-4 rounded-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 space-y-4 sm:space-y-0">
            <img src="/api/placeholder/64/64" alt="Check" className="w-12 h-12" />
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-500">シュフティが選ばれる<span className="text-blue-400">3</span>つの理由</h2>
            <img src="/api/placeholder/64/64" alt="Mascot" className="w-16 h-16" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <ReasonCard key={index} {...reason} />
            ))}
          </div>
        </div>

        {/* Jobs Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 bg-gray-100 p-4">多彩なジャンルあり！自分の体験談を活用できる仕事</h3>
              <div className="space-y-4">
                <JobCard
                  type="プロジェクト"
                  reward="2,303 円"
                  daysLeft={6}
                  title="【1文字1.5円〜】記事作成のお仕事！富谷市の街の魅力を発信！"
                />
                <JobCard
                  type="プロジェクト"
                  reward="2,303 円"
                  daysLeft={6}
                  title="【1文字1.5円〜】記事作成のお仕事！二子玉川の街の魅力を発信！"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 bg-gray-100 p-4">スキル不要ですぐに参加できる仕事</h3>
              <div className="space-y-4">
                <JobCard
                  type="プロジェクト"
                  reward="400 円"
                  daysLeft={2}
                  title="【完全在宅♡丁寧サポート♡】スマホのみで隙間時間に簡単データ入力"
                />
                <JobCard
                  type="タスク"
                  reward="30 円 / 件"
                  daysLeft={13}
                  title="【90字以上/30円/1記事】WEBサービス・ツールの使用経験レビュー"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mt-12 bg-pink-500 text-white pt-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">仕事ジャンル一覧</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <div className="space-y-4">
              <h4 className="font-bold">データ入力・商品登録</h4>
              <div className="space-y-2">
                <p className="hover:text-pink-200 cursor-pointer">データ入力・データチェック</p>
                <p className="hover:text-pink-200 cursor-pointer">データ収集・分類</p>
                <p className="hover:text-pink-200 cursor-pointer">商品登録</p>
              </div>
            </div>
            {/* Add more category sections as needed */}
          </div>
          <div className="text-center mt-8 pb-8">
            <button className="bg-white text-pink-500 px-8 py-3 rounded-lg text-xl hover:bg-pink-100 transition duration-300">
              さっそく無料ではじめる
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-500 text-white mt-16">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Main Menu</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-200">Search for a job</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-200">User Guide</a></li>
                <li><a href="#" className="hover:text-pink-200">Q&A List</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Link</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-200">Shufuti Blog</a></li>
                <li><a href="#" className="hover:text-pink-200">Official Twitter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Operating Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-200">Company Information</a></li>
                <li><a href="#" className="hover:text-pink-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pink-400 mt-8 pt-8 text-center">
            <p>© 2007-2025 ULURU CO., LTD.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
