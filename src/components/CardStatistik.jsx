import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";

function CardStatistik() {
  const [lenEmployeeStatus, setLenEmployeeStatus] = useState(0);
  const [lenJobPosition, setLenJobPosition] = useState(0);
  const { user } = useSelector((state) => state.auth);
  const api_url = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEmployeStatus = await axios.get(
          `${api_url}/employment-status/${user?.user?.company?.company_id}`
        );
        const responseJobPosition = await axios.get(
          `${api_url}/job-position/${user?.user?.company?.company_id}`
        );
        const employmentStatusLength =
          responseEmployeStatus?.data?.data?.employmentStatus?.length;
        const jobPositionLength =
          responseJobPosition?.data?.data?.jobPosition?.length;
        setLenEmployeeStatus(employmentStatusLength);
        setLenJobPosition(jobPositionLength);
      } catch (error) {
        console.error("Error saat mengambil data:", error);
      }
    };

    fetchData();
  });

  return (
    <>
      <div className="mr-[40px]">
        <div className="mb-8">
          <div className="stats mr-[40px] w-[200px] h-[150px]">
            <div className="stat bg-red-100">
              <div className="stat-title font-semibold text-black mb-3">
                Available Position
              </div>
              <div className="stat-value mb-3">{lenJobPosition}</div>
              <div className="stat-desc text-red-500">4 urgently needed</div>
            </div>
          </div>
          <div className="stats mr-[40px] w-[200px] h-[150px]">
            <div className="stat bg-blue-100">
              <div className="stat-title font-semibold text-black mb-3">
                Job Level
              </div>
              <div className="stat-value mb-3">10</div>
              <div className="stat-desc text-blue-500">4 active hiring</div>
            </div>
          </div>
          <div className="stats w-[200px] h-[150px]">
            <div className="stat bg-pink-100">
              <div className="stat-title font-semibold text-black mb-3">
                Who&apos;s Off
              </div>
              <div className="stat-value mb-3">0</div>
              <div className="stat-desc text-pink-500">
                No employee of today
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="stats border w-[320px] h-[270px] mr-[40px]">
            <div className="stat gap-16">
              <div className="stat-title font-semibold text-black">
                Employment Status
              </div>
              <div className="stat-value">{lenEmployeeStatus}</div>
              <div className="stat-desc">
                <p className="mb-2">120 Men</p>
                <p>96 Women</p>
              </div>
            </div>
          </div>
          <div className="stats border w-[320px] h-[270px]">
            <div className="stat gap-16">
              <div className="stat-title font-semibold text-black">
                Length of Service
              </div>
              <div className="stat-value">16</div>
              <div className="stat-desc">
                <p className="mb-2">6 Men</p>
                <p>10 Women</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardStatistik;
