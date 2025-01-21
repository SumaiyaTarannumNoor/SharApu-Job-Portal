import React from 'react';

const JobCard = ({ type, reward, daysLeft, title }) => (
  <div className="bg-white rounded-lg shadow p-4 h-40 flex flex-col justify-between">
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{type}</span>
        <span className="text-gray-600 text-sm">{daysLeft}日残り</span>
      </div>
      <h4 className="font-medium line-clamp-2 text-base lg:text-lg">
        {title}
      </h4>
    </div>
    <div className="text-right">
      <span className="text-gray-900 font-semibold">{reward}</span>
    </div>
  </div>
);

const JobSectionCard1 = () => (
  <div className="mt-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="bg-gray-100 p-4 h-16 flex items-center mb-4">
          <h3 className="text-xl font-semibold line-clamp-1">
            多彩なジャンルあり！自分の体験談を活用できる仕事
          </h3>
        </div>
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
        <div className="bg-gray-100 p-4 h-16 flex items-center mb-4">
          <h3 className="text-xl font-semibold line-clamp-1">
            スキル不要ですぐに参加できる仕事
          </h3>
        </div>
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
);

export default JobSectionCard1;