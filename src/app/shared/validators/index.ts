import { FormControl } from "@angular/forms";

export function unitValidators(control: FormControl): { [key: string]: boolean } {

  if (!["kg", "pcs", "box"].includes(control.value)) {
    return { "unitWrong": true }
  }

  return null

}
