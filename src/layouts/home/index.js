/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-home-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import List from "@mui/material/List";

// Dashboard layout components
import BuildByDevelopers from "layouts/home/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/home/components/WorkWithTheRockets";
import Projects from "layouts/home/components/Projects";
import OrderOverview from "layouts/home/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/home/data/reportsBarChartData";
//import gradientLineChartData from "layouts/home/data/gradientLineChartData";

//igor 
import CardItem from "examples/Cards/StatisticsCards/CardItem/CardItem";
import pinus1 from '../../imagens/pinus1.png';
//import pinus2 from '../../imagens/pinus2.png';
import pinus3 from '../../imagens/pinus3.jpg';
import pinus4 from '../../imagens/pinus4.jpg';
import pinus5 from '../../imagens/pinus5.jpg';
import pinus6 from '../../imagens/pinus6.jpg';


import { useLocation, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";
import style from "../../layouts/home/style.scss";

const madeiras =  new Array(pinus3, pinus4, pinus5, pinus6, pinus1);

function painel(param) {
  //var aux = madeiras[param];
  return (<div>
            <img src={ madeiras[param%5] }/>
            <div>
                <h1>madeira pinus</h1>
                <span>sacos de 5kg</span>
                <span>jaboatão dos guararapes</span>
                <span>madereira do jorge</span>
            </div>
        </div>);
}


function Home() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  var index = 0;

  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    return (<div className="produto">
                < NavLink to={{'pathname': '/itens'}}                       
                          state= {{imagem: madeiras[index%5], index: 'precisamos definir os indexes'}}                         
                  key={key}>
                    {painel(index++)}
                </NavLink>
          </div>);
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <div className="teste-grid">
            {renderRoutes}
          </div>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Home;
