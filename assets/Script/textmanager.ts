

const {ccclass, property} = cc._decorator;

@ccclass
export default class textmanager extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null

   

    public index = 2;
    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {
        
        let mges : string[] = ["你是一个每天都在上班的打工人","这天你被开除了","你正愁怎么维持接下来生活", "突然....."]
        //let string:string = mges[0];
        this.label.string = mges[0];
        this.node.on(cc.Node.EventType.TOUCH_START,(event)=>{
            
            switch(this.index){
                    case 2:
                    this.label.string = mges[1];
                    this.index++;
                    break;
                case 3:
                    this.label.string = mges[2];
                    this.index++;
                    break;
                case 4:
                    this.label.string = mges[3];
                    this.index++
                    break;
                case 5:
                    this.index++;
                    break;
                }
                
                console.debug(this.index);
        });
        
    }

    


    update (dt) {

    }
}
