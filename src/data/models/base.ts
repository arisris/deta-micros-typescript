import { Base } from "deta";

export function baseProxy() {
  return new Proxy({}, {});
}
