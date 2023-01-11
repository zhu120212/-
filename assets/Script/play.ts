

const {ccclass, property} = cc._decorator;

@ccclass
export default class play extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property
    public hp: number = 1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START,()=>{
            this.hp += 1;
            this.label.string = (this.hp + "");
        })
    }

    // update (dt) {}
}
