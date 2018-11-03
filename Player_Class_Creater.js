//声明一个Player类
//一个角色有名字,生命,大招
var Player=function(name,life,boom)
{
this.name=name
this.life=life
this.boom=function()
    {
  //这里用canvas绘制大招特效
     }
}
//新建灵梦对象
var LinMeng=new Player('LinMeng',3,MengXiangFengYing)
test我就不信了
Player.boom()
//声明Boss类
var Boss=function(name,health,BossBoom)
{
this.name=name
this.health=health
this.BossBoom=function()
     {

      }
}
var MoLiSha=new Boss(MoLiSha,200,LianFu)
MoLiSha.BossBoom()