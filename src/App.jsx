import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import JobSectionCard from './components/JobSection/JobSectionCard';
import JobSectionCard1 from './components/JobSection/JobSectionCard1';
import JobCategoriesCard from './components/JobCategories/JobCategoriesCard';
import Footer from './components/UI/Footer';
import HeroImage from '../assets/LandingPageImage/HeroImage.png';
import HeroSection from './components/UI/Hero';
import WorkerLandingPage from './components/Workers/WorkerLandingPage';
import Check1 from '../assets/LandingPageIconImage/Check1.png';
import Penguine1 from '../assets/LandingPageIconImage/Penguine1.png';
import ReasonsSection from './components/UI/ReasonsSection';
import MembershipForm from './components/Authenticator/membershipform';
import PersonalInformationForm from './components/Authenticator/personalInformationForm';
import SearchForAJobPage from './Pages/SearchForAJob';
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

// Homepage component to contain all the landing page content
const Homepage = ({ HeroImage }) => {
  return (
    <>
      <HeroSection HeroImage={HeroImage} />
      <WorkerLandingPage />
      <ReasonsSection />
      <JobSectionCard1 />
      <JobSectionCard />
      <JobCategoriesCard />
    </>
  );
};

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
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="container px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-64 max-w-[2000px]">
          <Routes>
            <Route path="/" element={<Homepage HeroImage={HeroImage} />} />
            <Route path="/membership-registration" element={<MembershipForm />} />
            <Route path="/personal-information" element={<PersonalInformationForm />} />
            <Route path="/search-for-a-job" element={<SearchForAJobPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;