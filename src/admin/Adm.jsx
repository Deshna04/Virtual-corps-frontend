
import React , { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import DuoIcon from '@material-ui/icons/Duo';
import ChatIcon from '@material-ui/icons/Chat';

import {Modal,Button,Row,Col,DropdownButton,Dropdown} from 'react-bootstrap';
import './Adm.css';

const Adm = () => {

    return (
  <>
  
  <Row>
    <Col xs={3} sm={3} md={3} lg={3} className="AdminNav shadow p-3 mb-5  rounded" >
      <h1>ADMIN PANEL <SettingsIcon fontSize="large"/> </h1>
    </Col>
    <Col xs={8} sm={8} md={8} lg={8}>
      <br/>
    <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
      <center>
      <h5 class="card-title">CHAT</h5>
     <ChatIcon style={{ color: 'orange', fontSize: 70  }}/>
     </center>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
      <center>
      <h5 class="card-title">MEET</h5>
      <DuoIcon  style={{ color: 'orange', fontSize: 70  }}/>
      </center>
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded ">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  </div>
      <br/>
  <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
  </div>
  <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
  </div>
    </div>
  </div>

  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
  </div>

  <div class="card-deck">
    <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
    
    </div>
  </div>
  <div class="card shadow p-3 mb-5 bg-white rounded " xs={6} sm={6} md={6} lg={6}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      
    </div>
  </div>
  </div>
    </div>
  </div>
  </div>

   
    
  
    </Col>
  </Row>
 

 </>
    );
  }
  
  export default Adm;