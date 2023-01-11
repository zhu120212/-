// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class pageview extends cc.Component {

    @property(cc.PageView)
    page : cc.PageView = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    
    

    start () {}

    // update (dt) {}
}
