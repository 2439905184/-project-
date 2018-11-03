var c=document.getElementById('Title')
var pen=c.getContext('2d')
c.background="/background.jpg"
c.width=window.innerWidth
c.height=window.innerHeight
/*前面是初始化画布*/
c.drawText("play")
/*选项检测*/
var ButtonIndex=1
/*画标题选项*/
c.drawText("about")
/*当按下回车或z键时进入游戏*/
function play()
{
location.href='level.html'
}
Onkeydown(''||'z')
{
location.href='/level.html'
}
/*当按下↓时把光标往下移一位*/
onkeydown()
{
var About=document.getElementById('TitleAboutButton')
About.style.border=sold red 2px
}
/*当按下↑时把光标往上移一位*/
onkeydown()
{

}