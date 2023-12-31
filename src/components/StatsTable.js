import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CollapseDetails from './CollapseDetails';
import { usePlayerData } from './usePlayerData';

//showing the stats of the player

const perModes = ["Overview Per Game", "Overview Per 36", "Overview Per 75", "Overview Per 100", "Overview Total"];

const glossary = [
  { term: 'GP', definition: 'Games Played' },
  { term: 'GS', definition: 'Games Started' },
  { term: 'MIN', definition: 'Minutes Played' },
  { term: 'PTS', definition: 'Points Per Game' },
  { term: 'EFF%', definition: 'Efficiency Percentage' },
  { term: 'FTA', definition: 'Free Throws Attempted' },
  { term: 'FT%', definition: 'Free Throw Percentage' },
  { term: '3PA', definition: 'Three-Pointers Attempted' },
  { term: '3P%', definition: 'Three-Point Percentage' },
  { term: 'OREB', definition: 'Offensive Rebounds' },
  { term: 'DREB', definition: 'Defensive Rebounds' },
  { term: 'REB', definition: 'Rebounds Per Game' },
  { term: 'AST', definition: 'Assists Per Game' },
  { term: 'STL', definition: 'Steals Per Game' },
  { term: 'BLK', definition: 'Blocks Per Game' },
  { term: 'TOV', definition: 'Turnovers Per Game' },
  { term: 'FTO', definition: 'Forced turnovers Per Game' },
  { term: 'MS', definition: 'Minutes per Game Score' },
  //I am not sure about the meaning of FTO and MS
];


function StatsTable() {
  const [selectedYear, setSeasonYear] = React.useState('');
  const [perMode, setPerMode] = React.useState('');
  const [open, setOpen] = useState(false);
  const { playerData, seasonYear } = usePlayerData(selectedYear, perMode);
  const yearList = seasonYear;
  if (!yearList.includes("ALL")) {
    yearList.push("ALL");
  }
  const handleSeasonTypeChange = (event) => {
    setSeasonYear(event.target.value);
  };

  const handlePerModeChange = (event) => {
    setPerMode(event.target.value);
  };
  const rows = playerData ? Object.values(playerData) : [];

  return (
    <Box sx={{ flexGrow: 1, padding:{sm:'2.75rem',xs:'1.0rem'},bgcolor: '#f6f6f6'}}>
      <Grid container sx={{bgcolor:'#ffffff', padding:'1.2rem'}}>
        <Grid item xs={12} sm={3} sx={{paddingRight:{sm:'1.5rem'}, paddingBottom:{xs:'0.5rem'}}}>
          <FormControl fullWidth>
            <InputLabel id="season-year-label">Season Year</InputLabel>
            <Select
              labelId="season-year-label"
              id="season-year"
              value={selectedYear}
              label="Season Year"
              onChange={handleSeasonTypeChange}
            >
              {yearList.map((year, index) => (
                <MenuItem key={index} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} >
          <FormControl fullWidth>
            <InputLabel id="per-mode-label">Per Mode</InputLabel>
            <Select
              labelId="per-mode-label"
              id="per-mode"
              value={perMode}
              label="Per Mode"
              onChange={handlePerModeChange}
            >
              {perModes.map((mode, index) => (
                <MenuItem key={index} value={mode}>{mode}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{marginTop:'1rem'}}>
        <Table sx={{ minWidth: ' 650px' }} aria-label="details table">
          <TableHead>
            <TableRow sx={{ '& > *': { padding: '0.5rem' } }}>
              <TableCell sx={{fontWeight:'bold'}} align="left">By Year</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="left">Team</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">GP</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">GS</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">MIN</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">PTS</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">EFF%</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">FTA</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">FT%</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">3PA</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">3P%</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">OREB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">DREB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">REB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">AST</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">STL</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">BLK</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">TOV</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">FTO</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">MS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{padding:'2rem'}}>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ '& > *': { padding: '0.5rem' } }}>
                  <TableCell>{row.Season}</TableCell>
                  <TableCell align="left">{row.team}</TableCell>
                  <TableCell align="right">{row.gp}</TableCell>
                  <TableCell align="right">{row.gs}</TableCell>
                  <TableCell align="right">{row.min}</TableCell>
                  <TableCell align="right">{row.PTS}</TableCell>
                  <TableCell align="right">{row['EFF%'].toFixed(1)}</TableCell>
                  <TableCell align="right">{row.FTA}</TableCell>
                  <TableCell align="right">{row['FT%'].toFixed(1)}</TableCell>
                  <TableCell align="right">{row['3PA']}</TableCell>
                  <TableCell align="right">{row['3P%'].toFixed(1)}</TableCell>
                  <TableCell align="right">{row.OREB}</TableCell>
                  <TableCell align="right">{row.DREB}</TableCell>
                  <TableCell align="right">{row.REB}</TableCell>
                  <TableCell align="right">{row.AST}</TableCell>
                  <TableCell align="right">{row.STL}</TableCell>
                  <TableCell align="right">{row.BLK}</TableCell>
                  <TableCell align="right">{row.TOV}</TableCell>
                  <TableCell align="right">{row.FTO}</TableCell>
                  <TableCell align="right">{row.MS}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
            </Table>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end">
              <IconButton
                aria-label="expand row"
                size="medium"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              <CollapseDetails open ={open} glossary={glossary}/>
            </Box>
      </TableContainer>
    </Box>
  );
}

export default StatsTable;
