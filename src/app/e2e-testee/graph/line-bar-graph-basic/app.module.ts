import {NgModule} from "@angular/core";
import {JigsawGraphModule} from "jigsaw/component/graph/index";
import {BasicLineGraphComponent} from "./app.component";
@NgModule({
    declarations: [BasicLineGraphComponent],
    bootstrap: [ BasicLineGraphComponent ],
    imports: [JigsawGraphModule]
})
export class BasicLineGraphModule{

}
