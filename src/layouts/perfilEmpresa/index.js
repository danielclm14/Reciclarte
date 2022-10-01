
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/perfilEmpresa/components/Header";

// Data

// Images
import pinus3 from "imagens/pinus3.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Meu Perfil"
              description="A Madereira dois irmãos tem o prazer  de participar desse projeto "
              info={{
                fullName: "Madereira Dois Irmãos",
                mobile: "(81) 997845-4488",
                email: "madereira@gmail.com",
                location: "Rua do Amor, 452",
              }}
              social={[
                {
                  link: "https://www.facebook.com/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
   
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Meus Registros
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                Aqui estão meus registros de madeira:
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={pinus3}
                  // label="project #2"
                  title="Madereira X"
                  description="A madereira X é top"
                  action={{
                    type: "internal",
                    route: "/itens",
                    color: "info",
                    label: "Mais informações",
                  }}
               
                />
              </Grid>
              
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "Inserir Madeira" }} outlined />
              </Grid>
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Overview;
