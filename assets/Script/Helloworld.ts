import textmanager from "./textmanager";




const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(textmanager)
    textmg : textmanager = null;


    start () {
       
    }
    
    update (dt) {
       
        if(this.textmg.index == 6){
            this.node.active = false;
            cc.director.loadScene("sce_home");
        }
        console.debug(this.enabled);
    }
}
