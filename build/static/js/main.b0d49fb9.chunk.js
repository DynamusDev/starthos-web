(this["webpackJsonpstarthos-web"]=this["webpackJsonpstarthos-web"]||[]).push([[0],{128:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e(1),c=e.n(i),o=e(66),a=e.n(o),s=e(17),u=e(4),l=e(11),d=e.n(l),b=e(18),f=e(9),j=e.p+"static/media/logo.34e17340.svg",x=e(67),p=e.n(x),g=e(40),h=e.n(g),O=h.a.create({baseURL:"http://vps20343.publiccloud.com.br"}),A="http://vps20343.publiccloud.com.br",m=(h.a.create({baseURL:"https://ais.cavok.in/api/rab"}),e(2)),v=e(3);function w(){var n=Object(m.a)(["\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  font-size: 15px;\n  color: #333;\n"]);return w=function(){return n},n}function y(){var n=Object(m.a)(["\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #FFF;\n  position: relative;\n\n  img{\n    width: 300px;\n    margin-bottom: 60px;\n  };\n\n  form{\n    width: 100%;\n    max-width: 350px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color:#FFF;\n\n    p {\n      text-align: center;\n      color: #25282a;\n      font-size: 1em;\n    };\n\n    input {\n      font-size: 1.5em;\n      background: #FFF\n    };\n\n    button {\n      color: #FFF;\n      justify-content: center;\n      align-items: center;\n      background: #000;\n    };\n\n    p {\n      font-size: 2.5em;\n      margin-bottom: 32px;\n      align-items: center;\n      text-align: center;\n    }\n\n    #forgot {\n      background-color: transparent;\n      color: #333;\n      cursor: pointer;\n      text-decoration: underline;\n    }\n  }\n"]);return y=function(){return n},n}var F=v.b.div(y()),k=v.b.h1(w());function C(){var n=Object(i.useState)(""),t=Object(f.a)(n,2),e=t[0],c=t[1],o=Object(i.useState)(""),a=Object(f.a)(o,2),s=a[0],l=a[1],x=Object(i.useState)(""),g=Object(f.a)(x,2),h=g[0],A=g[1],m=Object(i.useState)(!1),v=Object(f.a)(m,2),w=v[0],y=v[1],C=Object(i.useState)(!1),B=Object(f.a)(C,2),E=B[0],z=B[1],S=Object(u.f)();function U(){return(U=Object(b.a)(d.a.mark((function n(t){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.prev=1,n.next=4,O.post("forgot_password",{email:s});case 4:400===(e=n.sent).data.status?alert("Erro ao enviar!!! ".concat(e.data.error)):200===e.data.status&&(alert("Sucesso!!! ".concat(e.data.message)),l(""),z(!1)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),alert("Erro ao enviar!!!, Tente novamente");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))).apply(this,arguments)}function K(){return(K=Object(b.a)(d.a.mark((function n(t){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==e){n.next=5;break}alert("Por favor, preencha o campo de email"),n.next=22;break;case 5:if(""!==h){n.next=9;break}alert("Por favor, preencha o campo de senha"),n.next=22;break;case 9:return y(!0),n.prev=10,n.next=13,O.post("sessions",{email:e,password:h});case 13:200===(r=n.sent).data.status?(y(!1),localStorage.setItem("user",JSON.stringify(r.data.user)),console.log(r.data),S.push("/home")):400!==r.data.status&&401!==r.data.status||(y(!1),alert("Erro ao logar!!! ".concat(r.data.error))),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(10),y(!1),console.log(n.t0),alert("Erro ao logar, tente novamente");case 22:case"end":return n.stop()}}),n,null,[[10,17]])})))).apply(this,arguments)}return Object(i.useEffect)((function(){null!==localStorage.getItem("user")&&S.push("/home")}),[S]),Object(r.jsxs)(F,{children:[Object(r.jsx)(k,{children:"Powered by Starthos"}),w?Object(r.jsx)(p.a,{type:"spin",color:"#333"}):E?Object(r.jsxs)("form",{onSubmit:function(n){return U.apply(this,arguments)},children:[Object(r.jsx)("img",{className:"logo",src:j,alt:"Starthos"}),Object(r.jsx)("p",{children:"Esqueci minha senha"}),Object(r.jsx)("input",{placeholder:"email@email.com.br",value:s,type:"email",onChange:function(n){return l(n.target.value)}}),Object(r.jsx)("button",{className:"button",type:"submit",children:"Enviar"}),Object(r.jsx)("a",{onClick:function(){z(!1)},className:"button",id:"forgot",children:"Retornar ao login"})]}):Object(r.jsxs)("form",{onSubmit:function(n){return K.apply(this,arguments)},children:[Object(r.jsx)("img",{className:"logo",src:j,alt:"Starthos"}),Object(r.jsx)("p",{children:"Login"}),Object(r.jsx)("input",{placeholder:"email@email.com.br",value:e,type:"email",onChange:function(n){return c(n.target.value)}}),Object(r.jsx)("input",{placeholder:"senha",value:h,type:"password",onChange:function(n){return A(n.target.value)}}),Object(r.jsx)("button",{className:"button",type:"submit",children:"Entrar"}),Object(r.jsx)("a",{onClick:function(){z(!0)},className:"button",id:"forgot",children:"Esqueci minha senha"})]})]})}var B=e(10);function E(){var n=Object(m.a)(["\n  width: 85%;\n  height: 45px;\n  background-color: #002A4E;\n  border-radius: 8px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 25px;\n  margin-bottom: 10px;\n  img {\n    height: 30px;\n    height: 30px;\n  }\n\n  p {\n    color: #FFF;\n    font-size: 15px;\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n  }\n"]);return E=function(){return n},n}function z(){var n=Object(m.a)(["\n  width: 85%;\n  height: 45px;\n  background: #0057A7;\n  border-radius: 8px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 25px;\n  margin-bottom: 10px;\n  img {\n    height: 30px;\n    height: 30px;\n  }\n\n  p {\n    color: #FFF;\n    font-size: 15px;\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n  }\n"]);return z=function(){return n},n}function S(){var n=Object(m.a)(["\n  width: 85%;\n  height: 45px;\n  background: #FF8A00;\n  border-radius: 8px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 25px;\n  margin-bottom: 10px;\n  img {\n    height: 30px;\n    height: 30px;\n  }\n\n  p {\n    color: #FFF;\n    font-size: 15px;\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n  }\n"]);return S=function(){return n},n}function U(){var n=Object(m.a)(["\n  width: 85%;\n  height: 45px;\n  background: #C40000;\n  border-radius: 8px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 25px;\n  margin-bottom: 10px;\n  img {\n    height: 30px;\n    height: 30px;\n  }\n\n  p {\n    color: #FFF;\n    font-size: 15px;\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n  }\n"]);return U=function(){return n},n}function K(){var n=Object(m.a)(["\n  width: 85%;\n  height: 45px;\n  background: transparent;\n  border-color: transparent;\n  border-radius: 8px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 25px;\n  margin-bottom: 10px;\n\n  p {\n    font-size: 15px;\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n    color: #FFF;\n    font-weight: 600;\n  }\n"]);return K=function(){return n},n}function M(){var n=Object(m.a)(["\n  width: 85%;\n  height: 45px;\n  background: transparent;\n  border-color: transparent;\n  border-radius: 8px;\n  box-shadow: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 25px;\n  margin-bottom: 10px;\n\n  p {\n    font-size: 15px;\n    width: 80%;\n    text-align: left;\n    margin-left: 30px;\n  }\n\n"]);return M=function(){return n},n}function N(){var n=Object(m.a)(["\n  background-color: #fff;\n  width: 90%;\n  height: 10px;\n  margin: 20px 0px;\n"]);return N=function(){return n},n}function X(){var n=Object(m.a)(["\n  width: 25%;\n  min-width: 350px;\n  height: 100vh;\n  padding: 10px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background: #58595B;\n  overflow: auto;\n\n  @media (max-width: 390px){\n    button {\n      font-size: 1.5em;\n    }\n  }\n  @media (max-width: 200px){\n    button {\n      font-size: 1em;\n    }\n  }\n\n  #forgot {\n      background-color: transparent;\n      color: #FFF;\n      cursor: pointer;\n      text-decoration: none;\n      font-size: 15px;\n    }\n"]);return X=function(){return n},n}var L=v.b.aside(X()),Q=v.b.header(N()),q=v.b.button(M()),R=v.b.button(K()),V=v.b.button(U()),G=v.b.button(S()),Y=v.b.button(z()),P=v.b.button(E());function D(){var n=Object(u.f)(),t=JSON.parse(localStorage.getItem("user")||"");return Object(r.jsxs)(L,{children:[Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"row",background:"#58595B",height:"auto",width:"auto",alignItems:"center"},id:"profile",children:[Object(r.jsx)("img",{style:{height:100,width:100,borderRadius:20,marginRight:15},src:"data: image/jpeg; base64, ".concat(t.image),alt:"foto"}),Object(r.jsxs)("div",{style:{display:"flex",flexDirection:"column",background:"#58595B",height:100,justifyContent:"center"},id:"profile",children:[Object(r.jsx)("h1",{style:{color:"#fff",fontSize:15,width:"100%",textAlign:"center"},children:t.name}),Object(r.jsx)("p",{style:{color:"#fff",fontSize:13,width:"100%",textAlign:"center",fontWeight:"bold"},children:t.position}),Object(r.jsx)("a",{onClick:function(){alert("teste")},className:"button",id:"forgot",children:"Editar"})]})]}),Object(r.jsx)(Q,{}),Object(r.jsxs)(q,{onClick:function(){alert("teste")},className:"button",children:[Object(r.jsx)(B.a,{size:30,color:"#fcfcff"}),Object(r.jsx)("p",{children:"Ocorr\xeancias"})]}),1==t.master&&Object(r.jsxs)(q,{onClick:function(){alert("teste")},className:"button",children:[Object(r.jsx)(B.g,{size:30,color:"#fcfcff"}),Object(r.jsx)("p",{children:"Cadastrar Membro"})]}),Object(r.jsxs)(V,{onClick:function(){alert("teste")},className:"button",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAoCAYAAABnyQNuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT6SURBVHgBzVhpaFVHFD4vWjVJNTWm2tZqpZu2RWtbCtaWUhooLbS0fwqWYgsq/lBcUBBEXH4oKLggKGhwA1FRcQEV/7iA4opKFBUhuGDcEn0xGuMafH6fcy55uZm5d+7Lc/ng47w3c+acc8/sk5IYZDKZTyFmggPBlOQfTeB5cEwqlboYpRjpHIG+C3EEfAc8Bz6S/KMj2B9MgwMQ8DXJBQh2bMZgjLxAwP5I9TMqSq9AotFd5R55sTioskeUUlyw74EPwZuSAMhQmSTDLfA+2DNKKS7YXuAdpRcQ6M8QtZC/iz/q1Uebgu0M1mHQJ5lYRWIm7pu+DWCfvcfMtmkYlIj56hZA1uLaRQLt21uK76g/JwoiDHaCKAUbLOWVkOscQQdD5p7D7jKI65CloaoasBjlRZIUaNQdfAguD5W3AzfqUrPcFjDKBoad8j+4WNvtAFOh+gqwUdf2xMH2V8NTLXWF4Bqtn+lpb4TqbwK7WOqnaf0Al432EfbfV1kdrsCEeADxLwyfgdwecsrtuZ+Ybj0K3YxWHQKngItQdtfi76pKrginJAngdLh+abmnfjl4NtMSl3yXMOj9om2GuXSiZnUwMxsk3tGvEDvF9MYi8D9wrpilaD3qh0o8akN+/QEHs/RL+8bodQCrlV+E6vqAt8AGsHOMnQ/V3wyXTtSY5djh2KzTmfsn+JbWpTHutunv78VkdArKzmQbwH8Og+lisv0buEEDo61gA2iE3hpKMRtDL8kxWE4Erpsfg1uyK+HwSzjhRPhEi4467BxT2U/b9dSgO2TZ4mQ8oL56S47B1iKgx5BVMPi3NI+nOg2UuKHyM3CXxU7vbD20uwpbf0jziY7Z3M8tnUMGvz+QpEDDe+B2D70SXcwvgj1CdR1BfmhTuM5haxv4wFVf4GjE3adYmrPmBDLCrpsoJiMH0fZrtcFuPyFmCM2BXo3EgytCJ7QtFl8wCzoz53nqF4CTwadgMIlWqY3Z4gnoztc21i3Xtc4G4yktbsPs4gngYGTtKYpWirmjBXt+ICtUn0vTHLYTN4ITXlmSYINBfkXsgZZocMz8D+KHn8BJ4GG07+bQqQ75bwFXsMGJ3XXTXAj+A64Fl4gHkP0VEPPFXOm3Osbl5ZD/FnAtXcFy0+o6o904GNwM/o8gmsQT0J2YMQfvv8A3LCrpkH+vYIMT112LQ66HfbNOU4mAduPQfryjPf2xPNEE6ypmsU47HOYUqEd73i647XaxVbqC5aGDXxl74sozAp+ltkpXsOyGmoS32jZDb7ncGKyHmVZjVk9YVN4r+UEZbNpuBk0Irl79FeL3fS3n8lXuFSzwtpi7f24PZK3BpyfrGEWgPKRzWx6K3z8iYB5kmFne8brhfzou2KALbNnIBTyJ1VvKn4CVYiZxO2leJuuz4ogNtqvKOskPJiBDFyLq+Sa7L+v/bZWcN5XZis/3b6Sc7698bvxKzILM6zDfYy+LP/hc9B14HTwNfgNyW+Uw8N44xGSUZ+PjYh7sToIL8ME3UgiUG8B+sI+YLnhsMVCkwTQq84ViJXvR9kHcLXkO4VH1W2Z1tR7Lxrksom5QnE4ugL0haneIo57JHK06FVxn2eVVSPNCec2gO91SMUNyEINlF3u/v75s6EGJ23Ah01wl5oX7bEQbrho82vF8G3vVSQCuPB+J2Qiirj2fg9cYLM+jXk9Erxi7nwH8wNVZs+CrpQAAAABJRU5ErkJggg==",alt:"emergencia"}),Object(r.jsx)("p",{children:"Emerg\xeancia"})]}),Object(r.jsxs)(G,{onClick:function(){alert("teste")},className:"button",children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"emergencia"}),Object(r.jsx)("p",{children:"Manuten\xe7\xe3o"})]}),Object(r.jsxs)(Y,{onClick:function(){alert("teste")},className:"button",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAzCAYAAAAHM1FMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAglSURBVHgB1Zp3jFVFFMZnYRWQLhuDsCxFStxgAEEwCtKRGmki0kxAkaIRotF/UEAx9igKBtCIf0g00nsWEIhBCAgYqgaEBQQpKk1pUsbvc77nDpf73t73tgRP8st9b+7MmXPnzpw5Z94zpgBirb0FDANdkmzXGoxge1Pcgk7TQRuwGVwFa0DJiG1Lqr5V+1amuASdVQUzZDRlE6gZMK4+aAe66no3KO3VaQg2qv0V6atpilrQSRb4HWwFx/Q5E/QEK8DfNlzOaMT7qP5RcBzsAodYZpKUNJOCaJSOg+fBJHAe3AZOgZ1gGzgELoAyIAs0Bs1Aaa/+y+B1kJ2WlrbLFJfgAaqAHI3qefAap0eC+iVANvhAI05ZCqqb4hR0eJemDGUuKBdSp7+mxgCvLE1Xrpt5as86tU1xCEcK/KgFOx6UAhngE877EOP7e2W9VC9D3yeCa2BvKnM+FeO/0Yi95JU11IKcxekRp1267l/im1MZp9I46VtiPY9UFIaPVUfzQu51oYHe9wbWbWANvDIa2yGk7ULpHWaKQqD4VnAY/MY5ylECdRPUHyqDhiaoc6cWfpbW0Gn2YyJKCRNdegN6hilwa7m8gh3orI1JQdCurXHu9FXo43UaqKh+Ikkyxg8CV8AcfZ8P1oLtJjVZB1aB1fo+W/qHmMIUjFJl8CfYFm9BhrTJd9oE6nM97NbUyYjSJurIc0elL1+FV3zNFIFIL98Ep04kt5luoklVXQ9YFz32ARbMjfAwLWObU0A4bfZKF8OFHOoP9FdwsS7oojwpr/M9+MV3jSFt+tnE8ox8P/X8IO81XPd6SkfC2Cs9pNPbcekE+oH7MLI1jAuwKOXBVfACKKnP8WQR6ApKxbnP4I1vbSQ4By4ZF8RRzusN78R1D64LwELYcjJoLOPvJtqAcrRgrHbCLfLFjVX2sSlCgf4p6qcRuEP9X1LZadk3RvaUZINpNi+xsPIoE0BzmxdIUdEpsDOZTSRJw9Ok/xyoqDJO0VayZ511cRCFb+YjepsHzfVepxqoByoY52HoCU7gshnUBw2kuBNYayOmfyHGVgSrQVcVUW82+Bb9nVEZ++dgceo2Mnn5B6dXGyrhLnkQdACTwXbrUjNKLNgqZ/MW4NvqfBI4ad1OmYrxzdX+XX1/K7ZY1d9867I0ygXZOVl20t4dfFU7+IR42tpSwidtYdxi6wi4SB42buEdMG4XbA04OhXQbr9JUdAXR5qhAV3jBummHXTDi0ElsNw4/78efV1VO4Ynf8VGPjdBB36k+LRGYmVIva75rQdNlW5B/WCB9I7yym9JoCf330HPz/hAI76puepooregmd5dBF/HWwPWebXZmgLZnr5XtBDn2nz8eoGMV8NaWheX5QU4ckzrmMN29uo9qk4e88o6c46Dsmr3pgaC+iJnUgmNlzFtQPk4jatLAWUZyAqp01u6e4fcy9KCpOyzXsISqFdFdmQkY/x0Kaa3WaxRrBSow81rpVePG0zCgyPeB5+pPoWbTvVAHb6VIdalhTFvMzXM+HixSWzhHTPO63QHnCb0CEuMi8G3GhdG8HSA4cJoMAp1eG6zGxw0LqxgXko//YBx0Snn9T7VnyVjmkpXe/AQ4GJl6MBcobJxZzw3SKKokm6LLjJDSvn5fim/LONzRA/DTcOYvqCJcZGir5v1jxoX7zCZWasHGS+994Cy4Kxx0WaO6pzUQIRLnGkzUwsyM1CeoSm0SF4jJkfA59Ydg5TSmmD80ULXTO/el+BXm7fV00vNAY9wKgb6y5QdMwPluYnmPOcl4x1m9TyKzg556PLWeY/3wR4Z0tS7zxCXC/82r6yp6h1XO7YPi2xrqN/YmkrKeG44jOhih6aM6BiHMKJrFOzQOpdJaeaVDbTupGGgV9ZM9SYE2peRXka2PBc65b0VHuj2CjM+dM5jG6b747bMrXqwcWFCS8A4hgtpP+5/atzC3WLCheFEhokTz1uXC3N90JUyd6hjXIDI0GCTceuDC/oQ7LEmjpJIm5R1STjnO3fCczZPTliXDQVH/oYE3Bv5nWoXE7pE+v0B7CeCLbk2gau8QfD0PL7m8QS3eIbLfBOMU/hWYgel+eWz53TlprRH+paCzQq7k5LIxvuCjujSlhHrzhfpQpkD5HeGw4R7BOCbZtx+0RRAUjLeFxmwVuRXl3vHdFNIksyJ2U0n/xvjrdv4rlvMN63x1u3Gmfo8DpfD4LqfPQs85wtTrEtkGLgxFGfqV8m63f07sNC41PM/iY08E17G3xUjdMBE/ClQ1hSiQB8jV/7CyNNoerONYAUojYW+BvAUjT86c1OrFGv0lc0LkhhsfaHNolqcTtZbdxDEeJ7xzWhQK6ResqfEDOJ+AsMD5Zzrj8uui9JJexfHEmAeQ7wBfvZ2PVbcAJ4F9Txl/HW7rz4/oboz9L2HdtESyRqv9iV05SHXi+r/omcTf5kZrwdNDzZmQswQlgHYcnBWjXiOwzyTOWd7UMYblcHgXn1nzMNz/LLJGG9dYNYRvGfdL40xYTjMjfA5UMdEFY1eXTDSuqOJE55CviGmfd2tt06si33G6HNC460Ll7uBqTL4suofUX8j1X/BPaJGp611icpxb3R4brhKb6CyVz8sMGNwx1SRYe8fng7q+1D6K0S1KdX/HnA0OFUYlDHH5Qkb805u/wxnGSrTG40F7xiebrk8mCEw5yoDuPXGuUOG3ptT+cUlJeN90cLhfw7ayUCGxXRlVvppFB+WUSljfx7jrQF7CxqYFbpYd9YySPOWf0XhEQZdXRVTyPIPF54THWKaSfMAAAAASUVORK5CYII=",alt:"emergencia"}),Object(r.jsx)("p",{children:"Estoque"})]}),Object(r.jsxs)(P,{onClick:function(){alert("teste")},className:"button",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARVSURBVHgB7ZhbiFVVGMfXGWegZjKKpCwNb4kV9dB0sYEsJTNyUiEowi7KZERRdCW6kIRFRBcqiB6S7mb2oOWDaEhWRiHqQ4RdbPJ+xxver3OWv7/rO7A47H1mO3ur8+Affqyz11r7W99aZ+3vW3s7V5C890/C77AUHoM6112EMw/7oI/gKzgED7nuIBwpwTr4OKr7BP523UE4cicchSuiuhtsFW9yOVXEPhkFS+AwDi2EBfzeCu1wj8upksspHFrkgoOy1QplWAi7oblUKg1zOVTECl4GK6AJPoQPwMMaazu9YgX36SlOqJ8Ee11OFRWrOhLq9Ffn3kLdJ5im6IyDeXXGwbzK5SBhpIc7ycrkII4Mg6nwbFTXQjEPGl1yOFFdI/1+hBF2TxM8o4MFNLsMqu+sA4Z6U3wL66HNDgUNcB8sdSFrpDlYtr7zuW8W5Ra4HzbBXXKSVLjW5RFGWu2sN8AOpNJ/cK+16yQzKeE+ZZKjkY2Vdu+fZktq7Wz8uiqjZ8Mt0C+qrqzyMhgIT8GVzHyGyyj6zqEYDBPgQrMV29bYQ2zs5OyjDQ9/2Mz2wwPwHKyCPfAKNCbc1+kKVtX3hOdhk6E9ORHKNvY/iQ8flUOtwwiYZzd0wHsw0KXoRB2M2i8223tsrF/gRvPhuqQbhlvjv1bO1l6pMUDJJlOu4aAmeHPq3xb69YPvbKJrbOzh1Z0GwQ/W+CtcX8NgX3g7Mia1JfRri9o3whtweQ27V8Nc678Irqk0vG6rsATuSLn5Ih/e3HSkP+LDS9JkGfHhPJjmoNqugvfhfxv8Z2u7JGWsUTaOfJqiinb4zFe9x3J9FoyEabANdsMMGAdNUb+aDkbXDXA3fA+7DAXsW33VQyFfzKf2ioMvRI3N8KYPT2+HzfgR6JUy40wOVrX1hgm2UhpjObzro+win+RbJQ6d78OL9kQYChtgNnwKy4hjZVegsLeZ4gvBuNdSjoMH4QmuF1NOg3Mrnrbb3tgLM32G6B6rKyuYYkd/623wDRw2n46v4FugPfA5MzvouqYeGetSZf/SfBfy9gWUt0OfehqmunxSsu+bUK/gvsF1Qfi0nWK6fhdxYNWeaUmoVxz7zeVUEQ7qE4cSfUOlwkKWXtqXu9MphR4fMpA29YCovr8F9AVwqcuhLq0gg54Hr/FzpQt7TYrTY4vZ1tHqL/o+Dee4UyEGGg0adCe85MPxSaFqctTnVatT2zuWhXQIGe1OljA+2IdTx0H4GvpEbdNhbnQ9R/EsutYJ+kuLbbO0BVzRsnyshD8W6qvapsAKC7Z1tsIvJtgY48PRf6MrWjb78fZbTuiEo7Peo5aBDmhV9VDYQ6PVftz69IrsjJehrONm/vpkRvVhUhFf+bOnNelDpb4PDgF9XdWXrpEuhB+FmsrDsQP03VoZpoVgnGnsTl87I8k55dbVMNOFDLLYEr8mMJbiZdgPY6j/yer7m6N6adJpZZAL79OZdAyhu7rGauG/OgAAAABJRU5ErkJggg==",alt:"emergencia"}),Object(r.jsx)("p",{children:"Pista"})]}),Object(r.jsxs)(R,{onClick:function(){localStorage.clear(),n.push("/")},children:[Object(r.jsx)(B.e,{size:30,color:"#fcfcff"}),Object(r.jsx)("p",{children:"Logout"})]})]})}function J(){var n=Object(m.a)(["\n  width: 75%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background: transparent;\n  overflow: auto;\n"]);return J=function(){return n},n}var I=v.b.div(J());function W(n){return Object(r.jsx)(I,{onFocus:n.onFocus?n.onFocus:function(){},children:n.children})}function H(){var n=Object(m.a)(["\n  width: 25px;\n  height: 25px;\n"]);return H=function(){return n},n}function T(){var n=Object(m.a)(["\n  \n"]);return T=function(){return n},n}function Z(){var n=Object(m.a)(["\n  \n"]);return Z=function(){return n},n}function _(){var n=Object(m.a)(["\n  \n"]);return _=function(){return n},n}function $(){var n=Object(m.a)(["\n  \n"]);return $=function(){return n},n}function nn(){var n=Object(m.a)(["\n  font-size: 1.5em;\n"]);return nn=function(){return n},n}function tn(){var n=Object(m.a)(["\n  width: 100%;\n  height: 80px;\n  padding: 15px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  overflow: auto;\n"]);return tn=function(){return n},n}var en=v.b.header(tn()),rn=v.b.h1(nn()),cn=Object(v.b)(B.b).attrs({size:25,color:"#FFF"})($()),on=Object(v.b)(B.c).attrs({size:25,color:"#FFF"})(_()),an=Object(v.b)(B.d).attrs({size:25,color:"#333"})(Z()),sn=Object(v.b)(B.h).attrs({size:25,color:"#333"})(T()),un=v.b.div(H());function ln(n){Object(u.f)(),JSON.parse(localStorage.getItem("user")||"");return Object(r.jsxs)(en,{style:{background:n.background?n.background:"transparent"},children:[n.backButton?Object(r.jsx)(cn,{onClick:n.onBackClick?n.onBackClick:function(){}}):Object(r.jsx)(un,{}),n.fileButton?Object(r.jsx)(an,{onClick:n.onFileClick?n.onFileClick:function(){}}):Object(r.jsx)(un,{}),Object(r.jsxs)(rn,{style:n.textStyle,children:[" ",n.title," "]}),n.closeButton?Object(r.jsx)(sn,{onClick:n.onCloseClick?n.onCloseClick:function(){}}):Object(r.jsx)(un,{}),n.nextButton?Object(r.jsx)(on,{onClick:n.onNextClick?n.onNextClick:function(){}}):Object(r.jsx)(un,{})]})}var dn=e(31),bn=e.n(dn);function fn(){var n=Object(m.a)(['\n  font-size: 0.9em;\n  color: #FFF;\n  font-family: "Ubuntu";\n  font-weight: 300;\n  text-align: center;\n  justify-content: center;\n']);return fn=function(){return n},n}function jn(){var n=Object(m.a)(["\n  width: 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n"]);return jn=function(){return n},n}function xn(){var n=Object(m.a)(["\n  width: 100%;\n  height: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return xn=function(){return n},n}function pn(){var n=Object(m.a)(["\n  height: 35px;\n  width: 35px;\n"]);return pn=function(){return n},n}function gn(){var n=Object(m.a)(["\n  font-size: 15px;\n  font-family: 'Ubuntu';\n  color: #58595B;\n"]);return gn=function(){return n},n}function hn(){var n=Object(m.a)(["\n  font-size: 15px;\n  font-family: 'Ubuntu';\n  font-weight: 500;\n  color: #58595B;\n"]);return hn=function(){return n},n}function On(){var n=Object(m.a)(["\n  display: flex;\n  border-color: #58595B;\n  border-width: 1;\n  overflow: auto;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 20px;\n  height: 60%;\n  width: 100%;\n"]);return On=function(){return n},n}function An(){var n=Object(m.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return An=function(){return n},n}function mn(){var n=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]);return mn=function(){return n},n}function vn(){var n=Object(m.a)(["\n  background-color: #fff;\n  border-radius: 20px;\n  border-width: 1px;\n  border-color: #444;\n  height: 90%;\n  min-height: 500px;\n  width: 45%;\n  min-width: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return vn=function(){return n},n}function wn(){var n=Object(m.a)(["\n  font-size: 15px;\n  color: #FFF;\n  text-align: center;\n  font-family: 'Ubuntu';\n  text-align: center;\n"]);return wn=function(){return n},n}function yn(){var n=Object(m.a)(["\n  font-size: 15px;\n  color: #FFF;\n  font-family: 'Ubuntu';\n  text-align: center;\n  font-weight: 300;\n"]);return yn=function(){return n},n}function Fn(){var n=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  color: #FFF;\n  align-items: center;\n  justify-content: space-between;\n"]);return Fn=function(){return n},n}function kn(){var n=Object(m.a)(["\n  font-family: 400 18px 'Ubuntu', sans-serif;\n  width: 150px;\n  height: 150px;\n  text-align: center;\n  background-color: red;\n  color: #333;\n  font-size: 20px;\n  border: 0;\n  border-radius: 10px;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  text-decoration: none;\n  font-size: 20px;\n  line-height: 60px;\n  border-color: rgba(255,255,255, 0.5);\n  padding: 5px;\n  margin-right: 30px;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(m.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 15px;\n  list-style: none;\n"]);return Cn=function(){return n},n}function Bn(){var n=Object(m.a)(["\n  height: 95%;\n  width: 100%;\n  padding: 20px;\n  overflow: auto;\n  justify-content: center;\n  align-items: center;\n"]);return Bn=function(){return n},n}function En(){var n=Object(m.a)(["\n  font-family: 400 18px 'Ubuntu', sans-serif;\n  width: 130px;\n  height: 50px;\n  text-align: center;\n  background-color: transparent;\n  color: #333;\n  font-size: 25px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  text-align: center;\n  font-size: 20px;\n  line-height: 60px;\n  transition: filter .2s;\n"]);return En=function(){return n},n}function zn(){var n=Object(m.a)(["\n  width: 100%;\n  height: 85%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: auto;\n"]);return zn=function(){return n},n}var Sn=v.b.div(zn()),Un=v.b.select(En()),Kn=v.b.div(Bn()),Mn=v.b.ul(Cn()),Nn=v.b.button(kn()),Xn=v.b.div(Fn()),Ln=v.b.p(yn()),Qn=v.b.p(wn()),qn=v.b.button(vn()),Rn=v.b.div(mn()),Vn=v.b.div(An()),Gn=v.b.div(On()),Yn=v.b.p(hn()),Pn=v.b.p(gn()),Dn=v.b.div(pn()),Jn=v.b.div(xn()),In=v.b.button(jn()),Wn=v.b.text(fn());function Hn(n){var t=Object(i.useState)([]),e=Object(f.a)(t,2),c=e[0],o=e[1],a=Object(i.useState)([]),s=Object(f.a)(a,2),l=s[0],j=s[1],x=Object(i.useState)([]),p=Object(f.a)(x,2),g=p[0],h=p[1],m=Object(i.useState)([]),v=Object(f.a)(m,2),w=v[0],y=v[1],F=Object(i.useState)("Ativas"),k=Object(f.a)(F,2),C=k[0],B=k[1],E=Object(i.useState)(!1),z=Object(f.a)(E,2),S=z[0],U=z[1],K=Object(u.f)(),M=JSON.parse(localStorage.getItem("user")||""),N=Object(i.useMemo)((function(){return bn()(A)}),[]);function X(){return(X=Object(b.a)(d.a.mark((function n(t){var e,r,i,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.put("/events/".concat(t.id),{status:"arquivado"},{headers:{Authorization:M.name}});case 2:return n.sent,U(!1),alert("Ocorr\xeancia com id ".concat(t.id," arquivada com sucesso!!!")),n.next=7,O.get("events");case 7:e=n.sent,r=e.data.filter((function(n){return"ativo"===n.status})),o(r),i=e.data.filter((function(n){return"finalizado"===n.status})),j(i),c=e.data.filter((function(n){return"arquivado"===n.status})),h(c);case 14:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(){return(L=Object(b.a)(d.a.mark((function n(t){var e,r,i,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.put("/events/".concat(t.id),{status:"finalizado"},{headers:{Authorization:M.name}});case 2:return n.sent,U(!1),alert("Ocorr\xeancia com id ".concat(t.id," finalizada com sucesso!!!")),n.next=7,O.get("events");case 7:e=n.sent,r=e.data.filter((function(n){return"ativo"===n.status})),o(r),i=e.data.filter((function(n){return"finalizado"===n.status})),j(i),c=e.data.filter((function(n){return"arquivado"===n.status})),h(c);case 14:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Q(){return(Q=Object(b.a)(d.a.mark((function n(){var t,e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O.get("events");case 2:t=n.sent,e=t.data,console.log("CARREGOU",e),o(e.filter((function(n){return"ativo"===n.status}))),j(e.filter((function(n){return"finalizado"===n.status}))),h(e.filter((function(n){return"arquivado"===n.status})));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(i.useEffect)((function(){N.on(M.location,(function(n){o(n.filter((function(n){return"ativo"===n.status}))),j(n.filter((function(n){return"finalizado"===n.status}))),h(n.filter((function(n){return"arquivado"===n.status})))}))}),[N,M.location]),Object(i.useEffect)((function(){!function(){Q.apply(this,arguments)}()}),[]),Object(r.jsx)(Sn,{onFocus:n.onFocus?n.onFocus:function(){},children:S?Object(r.jsxs)(qn,{children:[Object(r.jsx)(ln,{fileButton:1==M.keyResponder&&"arquivado"!==w.status,onFileClick:function(){!function(n){X.apply(this,arguments)}(w)},title:w.id,closeButton:!0,onCloseClick:function(){U(!1)}}),Object(r.jsxs)(Rn,{children:[Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Yn,{children:" Data da Ocorr\xeancia "}),Object(r.jsxs)(Pn,{children:[" ",w.date," "]})]}),Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Yn,{children:" Hor\xe1rio da Ocorr\xeancia "}),Object(r.jsxs)(Pn,{children:[" ",w.time," "]})]})]}),Object(r.jsxs)(Gn,{children:[Object(r.jsxs)(Rn,{children:[Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Yn,{children:" Tipo Ocorr\xeancia "}),Object(r.jsxs)(Pn,{children:[" ",w.type," "]})]}),"Aeronave Envolvida"===w.type&&Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Yn,{children:" Prefixo da Aeronave "}),Object(r.jsxs)(Pn,{children:[" ",w.prefix," "]})]})]}),"Aeronave Envolvida"===w.type&&Object(r.jsxs)(Rn,{children:[Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Yn,{children:" Cabeceira de Pouso "}),Object(r.jsxs)(Pn,{children:[" ",w.cabeceira_dePouso," "]})]}),Object(r.jsxs)(Vn,{children:[Object(r.jsx)(Yn,{children:" Modelo da Aeronave "}),Object(r.jsxs)(Pn,{children:[" ",w.modelo_aeronave," "]})]})]}),Object(r.jsx)(Yn,{children:" Respons\xe1vel pela Abertura da Ocorr\xeancia "}),Object(r.jsxs)(Pn,{children:[" ",w.name," "]}),Object(r.jsx)(Dn,{}),Object(r.jsx)(Yn,{children:" Local da Ocorr\xeancia "}),Object(r.jsxs)(Rn,{children:[Object(r.jsxs)(Yn,{children:[" ",w.icao," "]}),Object(r.jsx)(Pn,{children:" - "}),Object(r.jsxs)(Pn,{children:[" ",w.airport," "]})]}),Object(r.jsxs)(Vn,{children:[""!==w.updatedBy&&"arquivado"===w.status?Object(r.jsx)(Yn,{children:" Arquivada por "}):""!==w.updatedBy&&"finalizado"===w.status&&Object(r.jsx)(Yn,{children:" Finalizada por "}),Object(r.jsxs)(Pn,{children:[" ",w.updatedBy," "]})]}),Object(r.jsx)(Yn,{children:" Status "}),Object(r.jsxs)(Pn,{children:[" ",w.status," "]}),Object(r.jsx)(Dn,{}),Object(r.jsx)(Yn,{children:" Descri\xe7\xe3o "}),Object(r.jsxs)(Pn,{children:[" ",w.description," "]})]}),Object(r.jsxs)(Jn,{children:[1==M.keyResponder&&"arquivado"!==w.status&&"finalizado"!==w.status&&Object(r.jsx)(In,{onClick:function(){!function(n){L.apply(this,arguments)}(w)},style:{backgroundColor:"emerg\xeancia"===w.category?"#C40000":"manuten\xe7\xe3o"===w.category?"#FF8A00":"estoque"===w.category?"#0065A7":"pista"===w.category?"#002A4E":"#58595B"},children:Object(r.jsx)(Wn,{children:"Finalizar Ocorr\xeancia"})}),Object(r.jsx)(In,{onClick:function(){!function(n){localStorage.event=JSON.stringify(n),K.push("/chat")}(w)},style:{backgroundColor:"emerg\xeancia"===w.category?"#C40000":"manuten\xe7\xe3o"===w.category?"#FF8A00":"estoque"===w.category?"#0065A7":"pista"===w.category?"#002A4E":"#58595B"},children:Object(r.jsx)(Wn,{children:"Ir para sala de crises"})})]})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(Un,{onChange:function(n){B(n.target.value)},children:[Object(r.jsx)("option",{value:"Ativas",children:"Ativas"}),Object(r.jsx)("option",{value:"Finalizadas",children:"Finalizadas"}),Object(r.jsx)("option",{value:"Arquivadas",children:"Arquivadas"})]}),Object(r.jsx)(Kn,{children:"Ativas"===C?Object(r.jsx)(Mn,{children:c.map((function(n){return Object(r.jsxs)(Nn,{style:{backgroundColor:"emerg\xeancia"===n.category?"#C40000":"manuten\xe7\xe3o"===n.category?"#FF8A00":"estoque"===n.category?"#0065A7":"pista"===n.category?"#002A4E":"#58595B"},onClick:function(){!function(n){y(n),U(!0)}(n)},children:[Object(r.jsxs)(Xn,{children:[Object(r.jsx)(Ln,{id:"dataText",children:n.date}),Object(r.jsx)(Ln,{id:"dataText",children:n.time})]}),Object(r.jsx)(Qn,{className:"id",children:n.id}),Object(r.jsx)(Ln,{id:"dataText",children:n.type})]},n.id)}))}):"Finalizadas"===C?Object(r.jsx)(Mn,{children:l.map((function(n){return Object(r.jsxs)(Nn,{style:{backgroundColor:"emerg\xeancia"===n.category?"#C40000":"manuten\xe7\xe3o"===n.category?"#FF8A00":"estoque"===n.category?"#0065A7":"pista"===n.category?"#002A4E":"#58595B"},onClick:function(){!function(n){y(n),U(!0)}(n)},children:[Object(r.jsxs)(Xn,{children:[Object(r.jsx)(Ln,{id:"dataText",children:n.date}),Object(r.jsx)(Ln,{id:"dataText",children:n.time})]}),Object(r.jsx)(Qn,{className:"id",children:n.id}),Object(r.jsx)(Ln,{id:"dataText",children:n.type})]},n.id)}))}):"Arquivadas"===C&&Object(r.jsx)(Mn,{children:g.map((function(n){return Object(r.jsxs)(Nn,{style:{backgroundColor:"emerg\xeancia"===n.category?"#C40000":"manuten\xe7\xe3o"===n.category?"#FF8A00":"estoque"===n.category?"#0065A7":"pista"===n.category?"#002A4E":"#58595B"},onClick:function(){!function(n){y(n),U(!0)}(n)},children:[Object(r.jsxs)(Xn,{children:[Object(r.jsx)(Ln,{id:"dataText",children:n.date}),Object(r.jsx)(Ln,{id:"dataText",children:n.time})]}),Object(r.jsx)(Qn,{className:"id",children:n.id}),Object(r.jsx)(Ln,{id:"dataText",children:n.type})]},n.id)}))})})]})})}function Tn(){var n=Object(m.a)(["\n  position: absolute;\n  top: 30px;\n  right: 40px;\n"]);return Tn=function(){return n},n}function Zn(){var n=Object(m.a)(["\n  position: absolute;\n  top: 30px;\n  right: 40px;\n"]);return Zn=function(){return n},n}function _n(){var n=Object(m.a)(["\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  background-color: #fcfcff;\n"]);return _n=function(){return n},n}function $n(){var n=Object(m.a)(["\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  flex-direction: column;\n  background-color: #fcfcff;\n"]);return $n=function(){return n},n}var nt=v.b.div($n()),tt=v.b.div(_n());Object(v.b)(B.f)(Zn()),Object(v.b)(B.h)(Tn());function et(){return Object(r.jsx)(nt,{children:Object(r.jsxs)(tt,{children:[Object(r.jsx)(D,{}),Object(r.jsxs)(W,{children:[Object(r.jsx)(ln,{fileButton:!1,backButton:!1,nextButton:!1,title:"Ocorr\xeancias"}),Object(r.jsx)(Hn,{})]})]})})}function rt(){var n=Object(m.a)(["\n  height: 100vh;\n  width: 100vw;\n\n  display: flex;\n  background-color: #fcfcff;\n"]);return rt=function(){return n},n}var it=v.b.div(rt());function ct(){var n=Object(u.f)(),t=JSON.parse(localStorage.getItem("event")||""),e=Object(i.useMemo)((function(){return bn()(A)}),[]);return Object(i.useEffect)((function(){e.on(t.id,(function(n){console.log(n)}))}),[e,t.id]),Object(r.jsxs)(it,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(W,{children:Object(r.jsx)(ln,{textStyle:{color:"#FFF"},backButton:!0,background:"emerg\xeancia"===t.category?"#C40000":"manuten\xe7\xe3o"===t.category?"#FF8A00":"estoque"===t.category?"#0065A7":"pista"===t.category?"#002A4E":"#58595B",onBackClick:function(){n.push("/home")},title:t.id})})]})}var ot=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/",exact:!0,component:C}),Object(r.jsx)(u.a,{path:"/home",exact:!0,component:et}),Object(r.jsx)(u.a,{path:"/chat",component:ct})]})})};function at(){var n=Object(m.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  };\n\n  /* div, header {\n    min-width: 336px;\n  } */\n\n  body, form {\n    font-family: 'Ubuntu', sans-serif;\n    font-size: 14px;\n    background-color: #FFF;\n    text-rendering: optimizeLegibility;\n  };\n\n  html, body, #root {\n    height: 100vh;\n  };\n\n  input, button, textarea {\n    font-family: 400 18px 'Ubuntu', sans-serif;\n    width: 100%;\n    height: 60px;\n    resize: vertical;\n    color: #333;\n    background-color: #E5E5E5;\n    border: 0.3px solid #E5E5E5;\n    border-radius: 8px;\n    padding: 0 24px;\n    margin-bottom: 15px;\n    text-align: center;\n    font-family: 'Ubuntu', sans-serif;\n  };\n\n  button {\n    cursor: pointer;\n  }\n\n  .empty {\n    width: 80vw;\n    text-align: center;\n    font-family: 'Ubuntu', sans-serif;\n  }\n\n  .button{\n    font-family: 400 18px 'Ubuntu', sans-serif;\n    width:70%;\n    height: 50px;\n    border: 0;\n    border-radius: 8px;\n    color: #fff;\n    font-weight: 700;\n    margin-top: 16px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    text-align: center;\n    text-decoration: none;\n    font-size: 20px;\n    justify-content: space-around;\n    line-height: 60px;\n    transition: filter .2s;\n\n    p {\n      font-family: 400 20px 'Ubuntu', sans-serif;\n      color: #FFF;\n    }\n  }\n  .button:hover{\n    filter: brightness(90%);\n  }\n"]);return at=function(){return n},n}var st=Object(v.a)(at());var ut=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ot,{}),Object(r.jsx)(st,{})]})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ut,{})}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.b0d49fb9.chunk.js.map