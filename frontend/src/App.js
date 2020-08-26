import React, { useState } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { Link, animateScroll as scroll } from "react-scroll";

// import {fetchUsersRequest,fetchUsersSuccess,fetchUsersFailure} from './redux/players/playersAction';
// import axios from 'axios';
import fetchUsers from './AsyncActions'
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
// import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
import SchedulerCalender from './SchedulerCalender.js'
import Shiva from './Shiva'
const { Header, Footer, Sider, Content } = Layout;



function App(props) {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile</Button>
  }
  const onClose = () => setVisible(false);
  
  
  return (
    
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 ,backgroundColor:'#ffff'}}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          {/* <Title style={{ color: 'white' }} level={3}>Byju's</Title> */}
          <img src="data:image/png;base64,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" className="logo" alt="Byjus logo"/> 
        </Header>
        <Layout>
          <Sider style={{backgroundColor:'light grey'}}>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
              <Link
    activeClass="active"
    to="PlayerDetailes"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>  Player Detailes</Link>
            </Menu.Item>
            <Menu.Item key='Dashboard'>
            <Link
    activeClass="active"
    to="SchedulerCalender"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Scheduler Calender</Link>
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item id="PlayerDetailes">Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                <Cricketer name={props.player.name} team='IND' avatarSrc='./vk.jpg'>
                  <ODICareer matches='239' >
                    <Batting runs='11,520' score='183' />
                    <br></br>
                    <Bowling wickets='4' bowlingAvg='166.25' />
                  </ODICareer>
                  <TestCareer matches=' 79' >
                    <Batting runs='6,749' score='243' />
                  </TestCareer>
                  <ViewProfileButton name={props.player.name}/>
                </Cricketer>
                <Cricketer name={props.player1.name1} team='IND' avatarSrc='./jb.jpg'>
                  <TestCareer matches='12' >
                    <Bowling wickets='62' bowlingAvg='20.63' />
                  </TestCareer>
                  <ViewProfileButton name={props.player1.name1}/>
                </Cricketer>
              </div>
            </Content>
            <CareerDetails member={selectedPlayer} visible={visible} onClose={onClose} team={props.player1.team1}
              age={props.player1.age1} born={props.player1.born1} batting={props.player1.batting1} bowling={props.player1.bowling1}
            />
            <Shiva />
            <div id="SchedulerCalender">
            <SchedulerCalender/>
           </div>
            <Footer style={{ textAlign: 'center' }}> Developed by Shivaprasad
           </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
    
  )
 
}
const mapStateToProps = state => { 
  return{
  player:state.users,
  player1:state.users1
  }
}
const mapDispatchToProps=()=>{
  return{
    playersDetailes:()=>fetchUsers()
  }
}
// store.subscribe(()=>{
//   console.log(store.getState()
//   )
// })

export default connect(mapStateToProps,mapDispatchToProps)(App)
