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

import pinus3 from '../../imagens/pinus3.jpg';
import pinus4 from '../../imagens/pinus4.jpg';
import pinus5 from '../../imagens/pinus5.jpg';
import pinus6 from '../../imagens/pinus6.jpg';


import { useLocation, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";
import bolo from "./vitrine";


function Home() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  let aux = "";
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
    return (<NavLink to={'/itens'} key={key}>
              ww
              {bolo}
              <vitrine/>
              {/*<vitrine name='name' descricao='descr'/>*/}
          </NavLink>);
  });




  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
            

                { aux = aux++ }
                { renderRoutes }

          </Grid>
        </Grid>

        </SoftBox>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Home;
