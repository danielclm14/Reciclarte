/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
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

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
//import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

//igor 
import CardItem from "examples/Cards/StatisticsCards/CardItem/CardItem";
import pinus1 from '../../imagens/pinus1.png';

import pinus3 from '../../imagens/pinus3.jpg';
import pinus4 from '../../imagens/pinus4.jpg';
import pinus5 from '../../imagens/pinus5.jpg';
import pinus6 from '../../imagens/pinus6.jpg';

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus3} titulo="Madereireira X" tipo="Pinus " distancia=" 5 KM" comprimento="2x3x4" /> 
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus6} titulo="Madereireira Y" tipo="Pinus " distancia=" 10 KM" comprimento="4x3x2" />

              {/* <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "success", component: "public" }}
              /> */}
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus4} titulo="Madereireira Z" tipo="Pinus " distancia=" 15 KM" comprimento="5x4x3" />

            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus5} titulo="Madereireira R" tipo="Pinus " distancia=" 20 KM" comprimento="1x2x3" />

            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus3} titulo="Madereireira X" tipo="Pinus " distancia=" 5 KM" comprimento="2x3x4" /> 

            </Grid>
            
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus6} titulo="Madereireira Y" tipo="Pinus " distancia=" 10 KM" comprimento="4x3x2" />

            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus4} titulo="Madereireira Z" tipo="Pinus " distancia=" 15 KM" comprimento="5x4x3" />

            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
            <CardItem imagem={pinus5} titulo="Madereireira R" tipo="Pinus " distancia=" 20 KM" comprimento="1x2x3" />

            </Grid>

          </Grid>
        </SoftBox>
        {/* <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox> */}
        {/* <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox> */}
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid> */}
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
