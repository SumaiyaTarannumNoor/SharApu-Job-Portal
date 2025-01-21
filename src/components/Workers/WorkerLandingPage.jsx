import React from 'react';
import Worker1 from "../../../assets/Workers/Worker1.png";
import Worker2 from "../../../assets/Workers/Worker2.png";
import Worker3 from "../../../assets/Workers/Worker3.png";
import Worker4 from "../../../assets/Workers/Worker4.png";
import Worker5 from "../../../assets/Workers/Worker5.png";
import Worker6 from "../../../assets/Workers/Worker6.png";
import Worker7 from "../../../assets/Workers/Worker7.png";
import Worker8 from "../../../assets/Workers/Worker8.png";

// Worker Card Component
const WorkerCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-56 mb-8">
      <div className="w-52 h-44 bg-white">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-pink-600">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

// Main WorkerLandingPage Component
const WorkerLandingPage = () => {
  const workers = [
    {
      imageSrc: Worker1,
      title: "ダブルワーク＋ご家庭のバランスの取り方とは",
      description: "現在は総務所にて医療事務の仕事とfondesk のオペレーター業務を..."
    },
    {
      imageSrc: Worker2,
      title: "転勤や育児との両立は在宅オペレータの仕事で全てクリア",
      description: "最初は国内の損害保険会社で3年ほど事務職に就いていました。夫の..."
    },
    {
      imageSrc: Worker3,
      title: "ライティングを中心に月5万円の収入",
      description: "時間に拘束されず、趣味の園芸の時間もあって、とても時間に余裕..."
    },
    {
      imageSrc: Worker4,
      title: "ママと子供が笑顔になれば社会が変わる！",
      description: "まじめなワーカーさんが多いので現在は安心して発注できるシュ..."
    },
    {
      imageSrc: Worker5,
      title: "事業のコアを強化するためクラウドソーシングを活用",
      description: "初めて依頼した方から非常にクオリティの高い文章を書いていた..."
    },
    {
      imageSrc: Worker6,
      title: "クラウドソーシングは業務拡張の要！",
      description: "主婦とか女性のワーカーさんはトラブルが少なく良い記事を書い..."
    },
    {
      imageSrc: Worker7,
      title: "ライティングを強みに持つシュフティで効率アップ",
      description: "主に依頼している仕事内容はブログ記事のライティングで、大量の..."
    },
    {
      imageSrc: Worker8,
      title: "何気なく始めた在宅ワークは最高の恩恵き！",
      description: "日中は子供たちがいるので仕事をすることはできません。ですの..."
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mt-16">
        <h2 className="text-xl sm:text-2xl font-bold text-pink-500 mb-4">
          主婦の在宅ワーカーさんが多数活躍中！
        </h2>
        <p className="text-base sm:text-lg mb-8">
          時間の使い方や仕事の選び方など、参考になるインタビューを多数掲載
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {workers.map((worker, index) => (
            <WorkerCard key={index} {...worker} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-3 rounded-full text-xl hover:bg-pink-100 transition duration-300">
            インタビューをもっと見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkerLandingPage;