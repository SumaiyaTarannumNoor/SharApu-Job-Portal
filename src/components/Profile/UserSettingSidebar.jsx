import { FaUser, FaBell, FaBriefcase, FaCog, FaLock, FaGift, FaCreditCard, FaEnvelope, FaEye, FaTools, FaClock, FaCheckCircle, FaFileInvoice } from "react-icons/fa";

const UserSettingSidebar = () => {
  return (
    <div className="w-64 bg-pink-100 text-pink-900 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Settings</h2>
      
      {/* General Settings */}
      <div>
        <h3 className="font-medium text-pink-700 mb-2">General Settings</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaUser /> Username</li>
          <li className="flex items-center gap-2"><FaUser /> Icon</li>
          <li className="flex items-center gap-2"><FaUser /> Self-Introduction</li>
          <li className="flex items-center gap-2"><FaBell /> Notification</li>
        </ul>
      </div>
      
      {/* Work-related Settings */}
      <div className="mt-4">
        <h3 className="font-medium text-pink-700 mb-2">Work-related Settings</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaBriefcase /> Work facilities and environment</li>
          <li className="flex items-center gap-2"><FaCog /> Interesting Job</li>
          <li className="flex items-center gap-2"><FaTools /> Skill</li>
          <li className="flex items-center gap-2"><FaTools /> Available tools</li>
          <li className="flex items-center gap-2"><FaBriefcase /> Occupations experienced</li>
          <li className="flex items-center gap-2"><FaClock /> Available working hours per day</li>
          <li className="flex items-center gap-2"><FaCheckCircle /> Desire to continue working</li>
        </ul>
      </div>
      
      {/* Privacy and Security Settings */}
      <div className="mt-4">
        <h3 className="font-medium text-pink-700 mb-2">Privacy and Security Settings</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaLock /> Personal Information</li>
          <li className="flex items-center gap-2"><FaEnvelope /> Email Address</li>
          <li className="flex items-center gap-2"><FaLock /> Login Password</li>
          <li className="flex items-center gap-2"><FaEye /> Verify your identity</li>
          <li className="flex items-center gap-2"><FaLock /> Block</li>
          <li className="flex items-center gap-2"><FaFileInvoice /> Qualified invoice issuer registration number</li>
        </ul>
      </div>
      
      {/* Reward Settings */}
      <div className="mt-4">
        <h3 className="font-medium text-pink-700 mb-2">Reward Settings</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaCreditCard /> Reward receiving account</li>
        </ul>
      </div>
      
      {/* Others */}
      <div className="mt-4">
        <h3 className="font-medium text-pink-700 mb-2">Others</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaGift /> Introducing Shuful</li>
          <li className="flex items-center gap-2"><FaGift /> Receive a gift</li>
          <li className="flex items-center gap-2"><FaLock /> Cancel your membership</li>
        </ul>
      </div>
    </div>
  );
};

export default UserSettingSidebar;