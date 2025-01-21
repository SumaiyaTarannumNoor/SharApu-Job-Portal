import React from 'react';

const JobCategoriesCard = () => {
  const categories = {
    'データ入力・商品登録': [
      'データ入力・データチェック',
      'データ収集・分類',
      'その他データ入力・商品登録',
      '商品登録'
    ],
    'ライティング': [
      '記事・ブログ作成',
      'クチコミ・レビュー・体験談',
      'テープ・文字起こし',
      'その他ライティング'
    ],
    '営業・カスタマーサポート・リサーチ': [
      '営業・テレマーケティング',
      'カスタマーサポート',
      'ユーザーインタビュー・ユーザーテスト',
      'モニター・調査・リサーチ',
      'アンケート',
      'その他営業・カスタマーサポート・リサーチ'
    ],
    'デザイン・写真・動画': [
      'イラスト・ロゴ・バナー作成',
      '写真撮影・写真編集・画像加工',
      '動画撮影・動画編集・動画加工',
      'その他デザイン・写真・動画'
    ],
    'Web制作・Webデザイン・開発': [
      'Webデザイン',
      'HTML・CSSコーディング',
      'Webサイトチェック・アプリテスト',
      'その他Web制作・Webデザイン・開発'
    ],
    '翻訳': [
      '英語翻訳',
      'その他翻訳',
      'SharApu Outing',
      '座談会・インタビュー',
      '覆面調査',
      'その他シュフティ外出'
    ]
  };

  return (
    <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center py-6 bg-pink-500 text-white">仕事ジャンル一覧</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="font-bold text-pink-500 border-b-2 border-pink-200 pb-2">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center py-8 bg-gray-50">
        <button className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-pink-600 transition duration-300">
          さっそく無料ではじめる
        </button>
      </div>
    </div>
  );
};

export default JobCategoriesCard;