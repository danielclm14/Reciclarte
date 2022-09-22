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
import pinus3 from "../../imagens/pinus3.jpg";
//import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard"
import Descricao1 from "../../examples/Cards/ProjectCards/Descricao1/Descricao1";
import Descricao from "../../examples/Cards/StatisticsCards/Descricao/Descricao";


function Tables() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      
        
          {/* <SoftBox display="flex" justifyContent="space-between" alignItems="center" px={1}>
            <SoftTypography variant="h6">Descrição do Item</SoftTypography>
          </SoftBox> */}
                <Grid container spacing={3}>
                  <Grid item xs={12} md={2} xl={3}>
                      {/* <Descricao1
                              image={pinus3}
                              // label="project #2"
                              title="Madereira X"
                              action={{
                                type: "internal",
                                route: "/tables",
                              }}
                              description="A madereira X é top"
                              
                              endereco="Endereço"
                              tipo="Pinus"
                              comprimento="2x3x4"
                          
                            /> */}
                            <Descricao 
                            imagem={pinus3} 
                            titulo="Madereireira X"
                            endereco="Endereço" 
                            tipo="Pinus " 
                            distancia=" 5 KM" 
                            comprimento="2x3x4"
                            
                            />
                  </Grid>
                </Grid>
                
        
      </SoftBox>
      
    </DashboardLayout>
  );
}

export default Tables;
