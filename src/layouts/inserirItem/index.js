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


// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";



// Data
import Grid from "@mui/material/Grid";
//-------
import Formulario from "../../components/Formulario/formulario"

function Inserir() {
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={2} xl={3}>
                  <Formulario />
                  </Grid>
                </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}
export default Inserir;