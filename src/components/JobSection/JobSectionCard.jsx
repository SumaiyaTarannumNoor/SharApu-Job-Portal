import React from 'react';

const JobCard = ({ type, reward, daysLeft, title }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-center mb-2">
      <span className="px-3 py-1 rounded text-white text-sm bg-pink-500">
        {type}
      </span>
      <span className="text-gray-600 text-sm">報酬額：{reward} | あと{daysLeft}日</span>
    </div>
    <p className="text-gray-800 line-clamp-2">{title}</p>
  </div>
);

const JobSectionCard = () => {
  const jobSections = [
    {
      title: "多彩なジャンルあり！自分の体験談を活用できる仕事",
      jobs: [
        {
          type: "プロジェクト",
          reward: "3,284 円",
          daysLeft: 7,
          title: "【1文字2.0円〜】記事作成のお仕事！横浜市戸塚区の街の魅力を発信！2つから自由に選択可能です。マニュアル完備♪"
        },
        {
          type: "プロジェクト",
          reward: "2,303 円",
          daysLeft: 7,
          title: "【1文字1.5円〜】記事作成のお仕事！八千代市の街の魅力を発信！2つから自由に選択可能です。マニュアル完備♪"
        }
      ]
    },
    {
      title: "スキル不要ですぐに参加できる仕事",
      jobs: [
        {
          type: "プロジェクト",
          reward: "3,000 円",
          daysLeft: 1,
          title: "【スキマ時間に対応！在宅OK】3000円/1件 保険相談サービスのオンライン調査 男女歓迎"
        },
        {
          type: "プロジェクト",
          reward: "3,000 円",
          daysLeft: 1,
          title: "【20代限定！在宅OK】3000円/1件 転職・スキルアップスクールのオンライン調査 男女歓迎"
        }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
      {jobSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3 className="text-xl font-semibold mb-4 bg-gray-100 p-4">
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.jobs.map((job, jobIndex) => (
              <JobCard key={jobIndex} {...job} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-pink-500 hover:text-pink-600 text-sm">
              類似の仕事をもっと見る
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSectionCard;