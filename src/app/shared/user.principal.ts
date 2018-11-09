
import { Principal } from "./principal.model";
import { SAVE_PRINCIPAL } from "./save.principal.action";

export function Principalreducer(state:Principal,action){
    switch(action.type)
    {
        case SAVE_PRINCIPAL : Object.assign({},state,action.payload);
        break;
        default:
        break;
    }
}