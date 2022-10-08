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

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import List from "@mui/material/List";

// Data
import reportsBarChartData from "layouts/home/data/reportsBarChartData";
//import gradientLineChartData from "layouts/home/data/gradientLineChartData";

//igor 

import { useLocation, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";
import style from "../../layouts/home/style.scss";
import { array } from "prop-types";

import madeiras from '../../dados_itens'



function painel(param) {
  var temp = madeiras[param%(madeiras.length)];

  return (<div>
            <img src={ temp.img }/>
            <div>
                <h1>{temp.name}</h1>
                <span>{temp.src}</span>
                <span>{temp.descr}</span>
                <span>{temp.local}</span>
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
                state={madeiras[index%5]}       
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
