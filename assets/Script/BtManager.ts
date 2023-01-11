
const {ccclass, property} = cc._decorator;

@ccclass
export default class BtManager extends cc.Component {

    @property(cc.Node)
    gooutlist: cc.Node = null;

    @property(cc.Animation)
    anim: cc.Animation = null;

    @property(cc.PageView)
    page : cc.PageView = null;

    @property(cc.Camera)
    camera : cc.Camera = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {}

    onMoveCamera(){
       this.schedule(()=>{
        if (this.camera.node.x > -880){
            this.camera.node.x -= 100;
        }}
        ,0.01)
        
        
    }

    onSceMove(){
        this.page.scrollToPage(1,1);
    }

    enableGoOutList(){
        this.gooutlist.active = true;
        this.anim.play();
    }

    Disable() {
        this.gooutlist.active = false;
    }

    // update (dt) {}
}
