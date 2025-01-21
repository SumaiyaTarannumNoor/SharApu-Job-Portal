import React from 'react';
import Check1 from '../../../assets/LandingPageIconImage/Check1.png';
import Penguine1 from '../../../assets/LandingPageIconImage/Penguine1.png';

const ReasonCard = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-full shadow-md">
        <div className="flex items-center justify-center mb-4">
            <img src={icon} alt={title} className="w-16 h-16" />
        </div>
        <h3 className="text-xl font-semibold text-yellow-300 mb-2 text-center">
            {title}
        </h3>
        <p className="text-gray-600 text-center">
            {description}
        </p>
    </div>
);

const ReasonsSection = () => {
    const reasons = [
        {
            title: "高品質なサービス",
            description: "最高品質のサービスを提供し、お客様のニーズに合わせた解決策をご提案します。",
            icon: "/api/placeholder/48/48"
        },
        {
            title: "24時間サポート",
            description: "年中無休で専門スタッフが対応し、迅速なサポートを提供します。",
            icon: "/api/placeholder/48/48"
        },
        {
            title: "リーズナブルな価格",
            description: "競争力のある価格設定で、高品質なサービスを提供します。",
            icon: "/api/placeholder/48/48"
        }
    ];

    return (
        <div className="mt-24 bg-pink-100 py-12 sm:py-16 px-4 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-8 space-y-2 sm:space-y-0">
                <img src={Check1} alt="Check" className="w-16 h-16" />
                <div className="flex flex-col space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-pink-500 text-center">
                        シュフティが選ばれる<span className="text-blue-400">3</span>つの理由
                    </h2>
                    <h4 className="text-md sm:text-md text-black-200">
                        在宅ワークが初めての方も、安心・安全にご利用いただけます！
                    </h4>
                </div>
                <img src={Penguine1} alt="Mascot" className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <ReasonCard key={index} {...reason} />
                ))}
            </div>
        </div>
    );
};

export default ReasonsSection;