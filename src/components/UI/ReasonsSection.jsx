import React from 'react';
import Check1 from '../../../assets/LandingPageIconImage/Check1.png';
import Penguine1 from '../../../assets/LandingPageIconImage/Penguine1.png';
import Ok from '../../../assets/LandingPageIconImage/Ok.png';
import Work_Time from '../../../assets/LandingPageIconImage/Work_Time.png';
import Safety from '../../../assets/LandingPageIconImage/Safety.png';

const ReasonCard = ({ title, description, icon }) => (
    <div className="bg-pink-50 p-6 rounded-full shadow-md h-full flex flex-col">
        <div className="flex items-center justify-center mb-4">
            <img src={icon} alt={title} className="w-24 h-24" />
        </div>
        <h3 className="text-center text-yellow-300 font-semibold 
            text-xl md:text-lg sm:text-base 
            mb-2 max-w-full break-words">
            {title}
        </h3>
        <p className="text-black text-center flex-grow
            text-base md:text-sm sm:text-xs 
            max-w-full break-words">
            {description}
        </p>
    </div>
);

const ReasonsSection = () => {
    const reasons = [
        {
            title: "高品質なサービス",
            description: "最高品質のサービスを提供し、お客様のニーズに合わせた解決策をご提案します。",
            icon: Ok
        },
        {
            title: "24時間サポート",
            description: "年中無休で専門スタッフが対応し、迅速なサポートを提供します。",
            icon: Work_Time
        },
        {
            title: "リーズナブルな価格",
            description: "競争力のある価格設定で、高品質なサービスを提供します。",
            icon: Safety
        }
    ];

    return (
        <div className="mt-24 bg-pink-200 py-24 sm:py-16 px-4 rounded-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-8 space-y-2 sm:space-y-0">
                <img src={Check1} alt="Check" className="w-16 h-16" />
                <div className="flex flex-col space-y-2 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-pink-500">
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