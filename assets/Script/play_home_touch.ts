

const {ccclass, property} = cc._decorator;

@ccclass
export default class play_home_touch extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null

    
    onLoad () {
        
    }

    start () {
        let touch : number = 0;
        let anim = this.node.getComponent(cc.Animation);
        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
            
            if (touch == 0){
                touch++;
                anim.play();
                this.label.enabled = false;
                
                anim.on('finished',  this.onFinished,    this);
            }
        })
       
    }
    
    onFinished(){
        cc.director.loadScene("sce_play_juqing");
    }

    // update (dt) {}
}
