'use client'
import { Typography, Grid, Paper, Box } from '@mui/material';
import Card from './components/Card/card';
import { useState } from 'react';
import { DashboardInterface, DashboardMenuinterface } from './utils/interface/interface';
import DashboardMenuCard from './components/DashboardMenuCard/dashboardmenucard';
const DashboardOverview = () => {

  const [DashboardData,setDashboardData] = useState<DashboardInterface|undefined>(undefined);
  return (
  <Box>
    <Typography variant="h5" gutterBottom>
      Dashboard Overview
    </Typography>
    <Grid container spacing={1}>
        {DashboardData && Object.keys(DashboardData).map((key) => (
          <Grid item xs={12} md={6} key={key}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Card
                title={key}
                subtitle={key}
                icon="Dollar"
                value={`$ ${DashboardData[key as keyof DashboardInterface].TotalSales}`}
              />
            </Paper>
          </Grid>
        ))}
      <Grid borderRadius={8} item xs={12} md={4}>  
        <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Card title='Total Sales' subtitle='Total Sales' icon={'Dollar'} value={'$ 3.460K'} />
        </Paper>
      </Grid>
      <Grid borderRadius={8} item xs={12} md={4}>  
        <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Card title='Total Orders' subtitle='Total Sales' icon={'Dollar'} value={'$ 3.460K'} />
        </Paper>
      </Grid>
      <Grid borderRadius={8} item xs={12} md={4}>  
        <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Card title='pending Orders' subtitle='Total Sales' icon={'Dollar'} value={'$ 3.460K'} />
        </Paper>
      </Grid>
      <Grid borderRadius={8} item xs={12} md={4}>  
        <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Card title='Total Tables' subtitle='Total Sales' icon={'Dollar'} value={'$ 3.460K'} />
        </Paper>
      </Grid>
      <Grid borderRadius={8} item xs={12} md={4}>  
        <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Card title='Empty Table' subtitle='Total Sales' icon={'Dollar'} value={'$ 3.460K'} />
        </Paper>
      </Grid>
      <Grid borderRadius={8} item xs={12} md={4}>  
        <Paper sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
          <Card title='Reserved Table' subtitle='Total Sales' icon={'Dollar'} value={'$ 3.460K'} />
        </Paper>
      </Grid>

      {/* Menu */}
        <Box width={'100%'} px={1} py={2}>
          <DashboardMenuCard/>
        </Box>
    </Grid>
  </Box>
  )
};

export default DashboardOverview;
