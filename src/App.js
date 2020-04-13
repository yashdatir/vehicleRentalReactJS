import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Navbar/Banner';
import Footer from './components/Footer';
import Estimate from './components/Estimation/estimate';
import Login from './pages/login';
import User from './components/User/user';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class App extends React.Component{
  render(){
    return(
      <Router>
      <Switch>

          <Route path="/home">
          <Navbar />
          <Banner />
          <Footer />
          </Route>
          
          <Route path="/estimate">
          <Navbar />
          <Estimate />
          <Footer />
          </Route>

          <Route path="/user">
          <Navbar />
          <User />
          <Footer />
          </Route>

          <Route path="/login">
          <Login />
          </Route>

          <Route path="/">
          <Navbar />
          <Banner />
          <Footer />
          </Route>

        </Switch>
      </Router>
    )
  }
}
// import React from 'react';
// import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Avatar from '@material-ui/core/Avatar';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import {SocialIcon} from 'react-social-icons';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Icon from '@material-ui/core/Icon';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// const drawerWidth = 240;
// const useStyles = makeStyles(theme => ({
//   sidebar:{
//   },
//   root: {
//     display: 'flex',
//   },
//   card: {
//     maxWidth: 1380,
//   },
//   drawer: {
//     [theme.breakpoints.up('sm')]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     marginLeft: drawerWidth,
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   bigAvatar: {
//     margin: 10,
//     width: 60,
//     height: 60,
//   }
// }));
// function App() {
//   const classes = useStyles();
//   return (
//     <Router>
//     <div className={classes.root}>
//       <Grid container>
//         <Grid item xs={12} className={classes.sidebar}>
//           <Paper>
//           <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Roads"
//           height="140"
//           image={require('./road.jpeg')}
//           title="Roads"
//         />
//         </CardActionArea>
//         <CardContent>
//         <center>
//           <Avatar src={require('./vehicle.png')} className='classes.bigAvatar' />
//           <h2>Vehicle Rental System</h2>
          
//           <Link to='/'><Button color='primary'>Home</Button></Link>
//           <Link to='/About'><Button color='primary'>Login</Button></Link>
//           <Link to='/Details'><Button color='primary'>Details</Button></Link>
//       <Divider />
//       </center>
//       <center>
//         <Grid item xs={10}>
//         <Paper className={classes.paper}>
//         <Route path='/' exact component={Index} />
//         <Route path='/About' component={About} />
//         <Route path='/Details' component={Users} />
//         </Paper>
//         </Grid>
//         </center>
//         </CardContent>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//       <Divider />
//           </Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <paper className={classes.paper}>
//          <p align="center"> 
//            <SocialIcon url="https://www.facebook.com/yash.datir" />
//       <SocialIcon url="https://www.youtube.com/user/yashdatir" />
//       <SocialIcon url="https://www.instagram.com/yashdatir/" />
//       <SocialIcon url="https://www.linkedin.com/in/yash-datir-a99237121" />
//       </p>
//       <Divider />
//       <center>Thankyou</center>
//           </paper>
//         </Grid>
//         </Grid>
//     </div>
//     </Router>
//   );
// }
// function Index() {
//   return (
//     <div>
//       <h1>  Welcome</h1>
//           <p align='center'>
//         In order to revolutionise the idea of <b>Integrated Vehicle Rental and Management System</b>, we have made this project which will also facilitate the customer with proper finance and opportunities of transport, commute, travel, explore, work etc. This will help in <b>developing easy employment</b>, proper taxi management and also commute to the users. Due to no limitations on the type of vehicle, this is
//         a flexible option for a provider and customer. 
//       </p>
//       <p align='center'>
//         An extensive use to <b>Blitscaling</b> is made as a business model. The approach from zero to one is known to all but this is the approach from one to <b>one billion</b>. 
//         Silicon Valley is renowned for its striking number of businesses which have grown from garage start-ups into global giants; Apple, Cisco, Google, Hp and Intel to name a few. But what is the secret to their outstanding success? The answer is they’ve learnt how to blitzscale.
//       </p>
//     </div>
//   );
// }
// function About() {
//   return (
//   <div>
//     <h2>Login or <Button href="http://localhost:8084/Project/" color='primary'>Register</Button></h2>
//     <form method="GET" action="http://localhost:8084/Project/login.jsp">
//       Login: <input type="text" name="login" placeholder="Insert your login here" /> Password: <input type="password" placeholder="Insert your password here" name="pswd" />
//       <br /><Button color='secondary' type="submit">Login to Dashboard</Button>
//     </form>
//         </div>
//   );
// }
// function Users() {
//   return <div>
//     <h2>Project Details</h2>
//     <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<Icon>+</Icon>} aria-controls="panel1a-content" id="panel1a-header" >
//           Features</ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//             <ul align="left">
//               <li>Easy Sales and services</li>
//               <li>Rent or Lease a vehicle using our social network</li>
//               <li>Safe and secure option for vehicle management</li>
//               <li>Easy and integrated Billing options</li>
//               <li>Roadside Assistance</li>
//               <li>Driver on Demand</li>
//             </ul>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<Icon>+</Icon>} aria-controls="panel1a-content" id="panel1a-header" >
//           Technology</ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//         <ul align="left">
//           <li>ReactJS</li>
//           <li>Java JSP</li>
//           <li>MySQL</li>
//           <li>JSON and Javascript</li>
//         </ul>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<Icon>+</Icon>} aria-controls="panel1a-content" id="panel1a-header" >
//           Users</ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//            <ul align="left">
//              <li>Vehicle Provider</li>
//              <li>Vehicle User</li>
//              <li>Driver</li>
//              <li>RSA mechanic</li>
//            </ul>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<Icon>+</Icon>} aria-controls="panel1a-content" id="panel1a-header" >
//           Team</ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//            <ul align="left">
//              <li>Darshak Dungrani</li>
//              <li>Krishna Sharma</li>
//              <li>Shubhanshu Shrivishal</li>
//              <li>Yash Datir</li>
//              </ul>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     </div>;
// }
// export default App;