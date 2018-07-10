import { ICreatePanelEvent } from "../events/ICreatePanelEvent";
import { IWorkerEvent } from "../events/IWorkerEvent";
import { compareActors, createPosition, IActor } from "./Actor";

export interface IPanel extends IActor {
  type: "panel";
}

export function comparePanels(before: IPanel, after: IPanel, events: IWorkerEvent[]): void {

  // character creation
  if (!before && after) {
    events.push({
      props: {
        alpha: after.alpha,
        definition: null,
        id: after.id,
        parent: after.parent,
        position: createPosition(after),
        sprites: null,
        src: null,
        textures: null,
        z: after.z,
      },
      type: "create-panel",
    } as ICreatePanelEvent);
  }

  // character move
  return compareActors(before, after, events);
}
