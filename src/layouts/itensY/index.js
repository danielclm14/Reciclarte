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
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


// Data
import Grid from "@mui/material/Grid";
//import pinus3 from "../../imagens/pinus3.jpg";
import pinus6 from "../../imagens/pinus6.jpg";
//import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard"
import Descricao1 from "../../examples/Cards/ProjectCards/Descricao1/Descricao1";
import Descricao from "../../examples/Cards/StatisticsCards/Descricao/Descricao";
import PopUp from "../../components/PopUp/PopUp";
import Botao from "../../components/SoftButton/SoftButtonRoot";
import SoftButton from "../../components/SoftButton";


function Itens() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
          <Descricao 
              imagem={pinus6} 
              titulo="Madereireira Y"
              endereco="Endereço" 
              tipo="Pinus " 
              distancia=" 10 KM" 
              comprimento="4x3x2"/>
              
      </SoftBox>
      
    </DashboardLayout>
  );
}

export default Itens;
