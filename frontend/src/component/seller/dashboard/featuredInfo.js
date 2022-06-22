
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./dashboard.css"
import Header from "../../../component/sidebarNew/sidebarNew";


export default function FeaturedInfo() {
  



  return (
    <div className="ft">
      <div>
        <Header />
      </div>
      <div>
        <div className="featured">
          <div className="featuredItem-left">
            <span className="featuredTitle">Added Product Count</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,415</span>
              <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$4,415</span>
              <span className="featuredMoneyRate">
                -1.4 <ArrowDownward className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
          <div className="featuredItem-right">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,225</span>
              <span className="featuredMoneyRate">
                +2.4 <ArrowUpward className="featuredIcon" />
              </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
