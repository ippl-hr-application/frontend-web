import Navbar from "../components/Navbar";
import CardProfile from "../components/CardProfile";
import CardStatistik from "../components/CardStatistik";
import CardSchedule from "../components/CardSchedule";
import CardQuickLink from "../components/CardQuickLink";
import CardTabs from "../components/CardTabs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMe } from "../redux/actions/authActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token) {
      dispatch(getMe(navigate, null, "/login"));
    }
  }, [dispatch, navigate, token]);

  return (
    <div>
      <Navbar />
      <div className="pt-[73px] container mx-auto">
        <CardProfile />
        <div className="flex">
          <CardStatistik />
          <div>
            <CardSchedule />
          </div>
        </div>
        <div className="flex">
          <CardQuickLink />
          <div>
            <CardTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
