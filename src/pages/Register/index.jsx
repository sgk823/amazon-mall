import React, { useState } from "react";
import './register.css';
import { TextField, Checkbox, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function Register(props) {
  const [state, setState] = useState({ showPassword: false, password: '', pwd:'', show:true })

  const { showPassword, password, pwd, show } = state

  const onLogin = (ev)=>{
    ev.preventDefault()
    setState({show:false})
  }

  const onRegister = (ev)=>{
    ev.preventDefault()
    setState({show:true})
  }

  return (
    <div>
      <div><a href=""></a></div>
      <div>
        <div>
          <form action="" style={{display: show? 'block':'none'}}>
            <h2>创建账户</h2>
            <div>
              <label htmlFor="">您的姓名</label>
              <TextField style={{ width: '100%', margin: '5px 0 20px 0' }} />
            </div>
            <div>
              <label htmlFor="">电话号码或电子邮件</label>
              <TextField style={{ width: '100%', margin: '5px 0 20px 0' }} />
            </div>
            <div>
              <label htmlFor="">密码</label>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(ev) => { setState({ password: ev.target.value }) }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {setState({showPassword:!state.showPassword})}}
                      onMouseDown={() => {}}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                placeholder="至少6个字符"
                style={{width:'100%', margin: '5px 0 20px 0'}}
              />
              <p><i></i><span>密码必须至少为 6 个字符</span></p>
            </div>
            <div>
              <label htmlFor="">再次输入密码</label>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                value={pwd}
                onChange={(ev) => { setState({ pwd: ev.target.value }) }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {setState({showPassword:!state.showPassword})}}
                      onMouseDown={() => { }}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                style={{width:'100%', margin: '5px 0 20px 0'}}
              />
            </div>
            <div>
              <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} />
              我已阅读并同意网站的<a href="">使用条件</a>和<a href="">隐私政策</a>
            </div>
            <div>
              <Button variant="contained" fullWidth>继续</Button>
            </div>
            <div>
              已拥有账户? <a href="" onClick={onLogin}>登录<i></i></a>
            </div>
          </form>

          <form action="" style={{display: show? 'none':'block'}}>
            <h2>登录</h2>
            <div>
              <label htmlFor="">邮箱地址或手机号码</label>
              <TextField style={{ width: '100%', margin: '5px 0 20px 0' }} />
            </div>
            <div>
              <Button variant="contained" fullWidth>继续</Button>
            </div>
            <div>
              <a href=""><i></i>需要帮助?</a>
            </div>
          </form>

          <div style={{display: show? 'none':'block'}}><Button variant="contained" fullWidth onClick={onRegister}>创建您的新账户</Button></div>
        </div>
      </div>
      <div>
        <div></div>
        <p><a href="">使用条件</a><a href="">隐私声明</a><a href="">帮助</a></p>
        <p>© 1996-2022, Amazon.com, Inc.或其附属公司</p>
      </div>
    </div>
  )
}


export default Register;
