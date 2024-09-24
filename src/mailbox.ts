import { Vector3D, WorldStateResponse } from "./proto/generated/sim_server_pb";

export const mailbox = {
    hasNewState: false,
    newState: null as number[][][] | null,
    curState: null as number[][][] | null,
    consumeNewState: () => {
        const state = mailbox.newState;
        mailbox.curState = state;
        mailbox.newState = null;
        mailbox.hasNewState = false;
        return state;
    },
    setNewState: (proto: WorldStateResponse) => {
        mailbox.newState = deserializeGridFromProto(proto);
        mailbox.hasNewState = true;
    },
};

export function deserializeGridFromProto(r: WorldStateResponse) {
    const state = r.getState() as Vector3D;
    const grid: number[][][] = [];
    for (const vec2D of state.getVec2dList()) {
        const list2D: number[][] = [];
        grid.push(list2D);
        for (const list1D of vec2D.getVec1dList()) {
            list2D.push(list1D.getBitList());
        }
    }
    return grid;
}